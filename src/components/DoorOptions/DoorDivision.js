import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';

const DoorType = () => {

    const { t } = useTranslation();

    const [beams, setBeams] = useState(4);
    const [posts, setPosts] = useState(2);

    const onInputChange = event => {
        event.target.name === 'beams' ? setBeams(event.target.value) : setPosts(event.target.value);
    }

    const onInputIncrement = event => {
        event.target.name === 'beams' ? setBeams(+beams + 1) : setPosts(+posts + 1);
    }

    const onInputDecrement = event => {
        event.target.name === 'beams' ? (beams > 0 ? setBeams(beams - 1) : setBeams(beams)) : (posts > 0 ? setPosts(posts - 1) : setPosts(posts));
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
                            value={beams}
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
                            value={posts}
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