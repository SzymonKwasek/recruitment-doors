import React from 'react';
import StepZilla from 'react-stepzilla';

import DoorOptions from './DoorOptions';

import { useTranslation } from 'react-i18next';

const Dashboard = () => {

    const { t } = useTranslation();

    const steps = [
        {name: t("chooseDoor"), component: <DoorOptions optionType="type"/>},
        {name: t("chooseDoorDivision"), component: <DoorOptions optionType="division"/>},
        {name: t("doorColorChoose"), component: <DoorOptions optionType="color"/>},
    ]
    return (
        <div className='creator-container'>
            <StepZilla  steps={steps}
                        showNavigation={true}
                        dontValidate={true}
                        nextButtonText={t("nextButtonStep")}
                        backButtonText={t("prevButtonStep")}/>
        </div>
    )
}
export default Dashboard;