import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from '../../../features/Counter/index';
import { PageWrapper } from '../../../widgets/PageWrapper/PageWrapper';
import { FeatureFlag } from '../../../shared/lib/enabledFlags/enablaedFeatureFlagComponent/FeatureFlag';

export const AboutPage = () => {
    const { t } = useTranslation('about');
    return (
        <PageWrapper data-testid="AboutPage">
            {t('О нас')}
            <Counter />
            <FeatureFlag 
            name='isAppRedesigned' 
            on={<div>Это отрабатывает на on</div>}
            off={<div>Это отрабатывает на off</div>}
            />
        </PageWrapper>
    );
};

// export default AboutPage
