import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import AppContext from '../../context/app-context';

const DoorColor = () => {

    const context = useContext(AppContext);
    const { t } = useTranslation();

    const onRadioChange = event => {
        if (event.target.id === 'black') {
            context.setDoorColor('black') ;
        } else if (event.target.id === 'gray') {
            context.setDoorColor('gray');
        } else {
            context.setDoorColor('white');
        }
    }


    return (
        <div className="single-option-container">
            <h4 className="option-header">{t('doorColorChoose')}</h4>
            <hr className="divider"/>

            <div className="door-color">
                <div className="color-wrapper">
                    <div className="color-circle black"></div>
                    <div>
                        <input  type="radio" 
                                id="black" 
                                checked={context.doorColor==='black'}
                                value={context.doorColor}
                                name="group2"
                                onChange={onRadioChange}/>
                        <label htmlFor="black">{t('black')}</label>
                    </div>
                </div>

                <div className="color-wrapper">
                    <div className="color-circle gray"></div>
                    <div>
                        <input  type="radio"
                                id="gray"
                                checked={context.doorColor==='gray'}
                                value={context.doorColor}
                                name="group2"
                                onChange={onRadioChange}/>
                        <label htmlFor="gray">{t('gray')}</label>
                    </div>
                </div>

                <div className="color-wrapper">
                    <div className="color-circle white"></div>
                    <div>
                        <input  type="radio"
                                id="white"
                                checked={context.doorColor==='white'}
                                value={context.doorColor}
                                name="group2"
                                onChange={onRadioChange}/>
                        <label htmlFor="white">{t('white')}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoorColor;