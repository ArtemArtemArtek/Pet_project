import React from 'react';
import Modal from '../../../shared/ui/Modal/Modal';
import { Button, ButtonTheme } from '../../../shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './LogoutModal.module.scss';
import { useNavigate } from 'react-router-dom';

interface LogoutModalProps {
    className: string;
    opened: boolean;
    setOpen: () => void;
    logOut: () => void;
}

export const LogoutModal: React.FC<LogoutModalProps> = React.memo((props) => {
    const { t } = useTranslation();
    // const dispatch = useDispatch()

    const { opened, setOpen, className, logOut } = props;
    const navigate = useNavigate();
    // const LogoutFunction = useCallback(() => {
    //     dispatch(userActions.logout())
    // }, [dispatch])

    return (
        <Modal
            className={className}
            opened={opened}
            setOpen={setOpen}>
            <div>
                <h3>{t('Вы действительно хотите выйти?')}</h3>
                <Button
                    theme={ButtonTheme.CLEAR}
                    className={cls.yesButton}
                    onClick={() => {
                        navigate('/');
                        return logOut();
                    }}>
                    {t('Да')}
                </Button>
                <Button
                    theme={ButtonTheme.CLEAR}
                    className={cls.noButton}
                    onClick={() => setOpen()}>
                    {t('Нет')}
                </Button>
            </div>
        </Modal>
    );
});
