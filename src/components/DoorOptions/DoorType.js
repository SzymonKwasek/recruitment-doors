import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import icon from '../../assets/icon.svg';
import { useTranslation } from 'react-i18next';

import Modal from '../utils/Modal';

const DoorType = () => {

    const { t } = useTranslation();

    const [width, setWidth] = useState(120);
    const [height, setHeight] = useState(250);

    const [radio, setRadio] = useState('single');

    const onRadioChange = event => {
        event.target.id === 'single' ? setRadio('single') : setRadio('double');
    }

    const onInputChange = event => {
        event.target.name === 'width' ? setWidth(event.target.value) : setHeight(event.target.value);
    }

    return (
        <div className="single-option-container">
            <div className="header-modal">
                <h4 className="option-header">{t("doorTypeTitle")}</h4>
                <Popup
                    trigger={<button className="modal-button"><img src={icon} alt="Logo"></img></button>}
                    modal
                    closeOnDocumentClick
                >
                    <Modal />
                </Popup>
            </div>
            <hr className="divider"/>

            <div className="door-type">
                <div>
                    <input  type="radio" 
                            id="single"
                            checked={radio === 'single'}
                            value={radio} 
                            name="group1"
                            onChange={onRadioChange}/>
                    <label htmlFor="single">{t("doorTypeSingleDoor")}</label>
                </div>
                <div>
                    <input  type="radio" 
                            id="double" 
                            value={radio}
                            name="group1"
                            onChange={onRadioChange}/>
                    <label htmlFor="double">{t("doorTypeDoubleDoor")}</label>
                </div>
            </div>

            <h4 className="option-header">{t("doorSizeTitle")}</h4>
            <hr className="divider"/>

            <div className="door-size">
                <div className="input-wrapper">
                    <span>{t("width")}</span>
                    <div>
                        <input  type="text" 
                                name="width" 
                                value={width}
                                onChange={onInputChange}/>
                        <span>cm</span>
                    </div>
                </div>
                <div className="input-wrapper">
                    <span>{t("height")}</span>
                    <div>
                        <input  type="text" 
                                name="height" 
                                value={height}
                                onChange={onInputChange}/>
                        <span>cm</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default DoorType;