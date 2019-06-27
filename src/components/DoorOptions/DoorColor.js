import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const DoorColor = () => {

    const [radio, setRadio] = useState('black');
    const { t } = useTranslation();

    const onRadioChange = event => {
        if (event.target.id === 'black') {
            setRadio('black') ;
        } else if (event.target.id === 'gray') {
            setRadio('gray');
        } else {
            setRadio('white');
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
                                checked={radio==='black'}
                                value={radio}
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
                                value={radio}
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
                                value={radio}
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