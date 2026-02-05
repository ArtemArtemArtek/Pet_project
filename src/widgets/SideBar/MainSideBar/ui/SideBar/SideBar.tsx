import React, { useState } from 'react';
import cls from './SideBar.module.scss';
import ClassNameHelper from '../../../../../shared/lib/classNames/classNames';
import { ThemeSwitcher } from '../../../../../shared/ui/ThemeSwitcher/index';
import { LanguageChanger } from '../../../../../shared/ui/LanguageChanger/LanguageChanger';
import { useTranslation } from 'react-i18next';
import {
    Button,
    ButtonTheme,
    ButtonSize,
} from '../../../../../shared/ui/Button/Button';
import { SideBarItem } from '../SideBarItem/SideBarItem';
// import { SideBarItemList } from "../SideBarItemList/SideBarItemList";
import { useSelector } from 'react-redux';
import { getUser } from '../../../../../entities/User';
import { selectSidebarItem } from '../selector/selectSidebar';
import { VStack } from '../../../../..//shared/ui/Stacks';

interface SidebarProps {
    className?: string;
}

const SideBar: React.FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation('sidebar');
    const { isAuth } = useSelector(getUser) || {};

    const filtredArray = selectSidebarItem().filter((item) => {
        if ('isauth' in item) {
            return item;
        }
    });

    const setCollapsedSideBar = () => {
        setCollapsed((collapsed) => !collapsed);
    };
    return (
        <div
            data-testid="sidebar"
            className={ClassNameHelper(
                cls.sidebar,
                { [cls.collapsed]: collapsed },
                [className],
            )}>
            <VStack
                justifyContent="start"
                allignItem="baseline"
                className={cls.linkWrapper}>
                {selectSidebarItem()
                    .filter((item) => {
                        if ('isauth' in item) {
                            if (isAuth) {
                                return item;
                            }
                        } else {
                            return item;
                        }
                    })
                    .map((item) => (
                        <SideBarItem
                            key={item.text}
                            itemData={item}
                            collapsed={collapsed}
                        />
                    ))}
            </VStack>

            <Button
                size={ButtonSize.SIZE_XL}
                half_square={true}
                className={cls.collapsedBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                data-testid="sidebar-button"
                onClick={setCollapsedSideBar}>
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageChanger
                    className={cls.lang}
                    collapsed={collapsed}
                />
            </div>
        </div>
    );
};

export default SideBar;
