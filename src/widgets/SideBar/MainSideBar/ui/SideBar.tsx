import React, {useState} from "react";
import cls from './SideBar.module.scss';
import ClassNameHelper from '../../../../shared/lib/classNames/classNames';
import {ThemeSwitcher} from "../../../../shared/ui/ThemeSwitcher/index"
import {LanguageChanger} from "../../../../shared/ui/LanguageChanger/LanguageChanger"
// import {Themes} from '../../../app/providers/ThemeProvider/ui/ThemeContext'

interface SidebarProps {
    className?: string;
}

const SideBar: React.FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false)

    const setCollapsedSideBar=()=>{
        setCollapsed(collapsed=>!collapsed)
    }
    return (
        <div className={ClassNameHelper(cls.sidebar, {[cls.collapsed]:collapsed}, [className])}>
            <button onClick={setCollapsedSideBar}>Change </button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LanguageChanger className={cls.lang}/>
            </div>
        </div>
    )
}

export default SideBar