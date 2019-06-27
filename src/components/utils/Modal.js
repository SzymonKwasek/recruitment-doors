import React from 'react';
import { useTranslation } from 'react-i18next';

const Modal = () => {

    const { t } = useTranslation();

    return (
        <div className="modal-container">
            <span className="modal-header">{t('doorTypeTitle')}</span>
            <hr className="modal-divider"></hr>
            <div className="type-container">
                <div className="type">
                    <span className="type-name">{t('doorTypeSingle')}</span>
                    <div className="type-image"></div>
                </div>

                <div className="type">
                    <span className="type-name">{t('doorTypeDouble')}</span>
                    <div className="type-image"></div>
                </div>
            </div>
        </div>
    )
}

export default Modal;