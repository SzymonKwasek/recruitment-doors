import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import AppContext from '../../context/app-context';

const DoorType = () => {

    const { t } = useTranslation();

    const context = useContext(AppContext);

    const onInputChange = event => {
        event.target.name === 'beams' ? context.setBeams(event.target.value) : context.setPosts(event.target.value);
    }

    const onInputIncrement = event => {
        event.target.name === 'beams' ? context.setBeams(+context.beams + 1) : context.setPosts(+context.posts + 1);
    }

    const onInputDecrement = event => {
        event.target.name === 'beams' ? (context.beams > 0 ? context.setBeams(context.beams - 1) : context.setBeams(context.beams)) : (context.posts > 0 ? context.setPosts(context.posts - 1) : context.setPosts(context.posts));
    }

    return (
        <div className="single-option-container">
            <h4 className="option-header">{t("doorDivisionTitle")}</h4>
            <hr className="divider"/>
            <div className="division-wrapper">
                <span>{t("numberOfBeams")}</span>
                <div>
                    <input  className="division-input"
                            type="text"
                            name="beams"
                            value={context.beams}
                            onChange={onInputChange}/>
                    <button className="division-button"
                            name="beams"
                            onClick={onInputIncrement}>+</button>
                    <button className="division-button"
                            name="beams"
                            onClick={onInputDecrement}>-</button>
                </div>
            </div>

            <div className="division-wrapper">
                <span>{t("numberOfPosts")}</span>
                <div>
                    <input  className="division-input"
                            type="text"
                            name="posts"
                            value={context.posts}
                            onChange={onInputChange}/>
                    <button className="division-button"
                            name="posts"
                            onClick={onInputIncrement}>+</button>
                    <button className="division-button"
                            name="posts"
                            onClick={onInputDecrement}>-</button>
                </div>
            </div>
        </div>
    )
}

export default DoorType;