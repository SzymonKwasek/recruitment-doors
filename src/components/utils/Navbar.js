import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import logo from '../../assets/Logo@2x.png';
import axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'

import { useTranslation } from 'react-i18next';


const Navbar = () => {

    const [organizationData, setOrganizationData] = useState('organization data');
    const [dropdownValue, setDropdownValue] = useState();
    const { t, i18n } = useTranslation();


    const options = [
        {
            value: 'en', label: 'English'
        },
        {
            value: 'pl', label: 'Polski'
        }
    ];

    useEffect( () => {
        detectLanguage();

        axios.get('https://bench-api.applover.pl/api/v1/organization', {
                headers: {
                    "Authorization": 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJvcmdhbml6YXRpb25faWQiOjEsImV4cCI6MTU2MTYzOTY3MywiY3JlYXRlZF9hdCI6IjIwMTktMDYtMTMgMTI6NDc6NTMgVVRDIn0.Vgxl0OEb-1tFNmDUzyGjIydIOeUg4cCkYuVqa_tDfD0'
                }
            })
            .then(res => {
                setOrganizationData(res);
            })
            .catch(err => {
                console.log(err);
            })
            
    }, []);

    
    const detectLanguage = () => {
        const lng = localStorage.getItem('i18nextLng');
        lng === 'en' ? setDropdownValue(options[0]) : setDropdownValue(options[1]);
    };

    const onDropdownValueChange = (event) => {
        event.value === 'en' ? setDropdownValue(options[0]) : setDropdownValue(options[1])
        i18n.changeLanguage(event.value);
    };

    return (
        <div className="navbar">
            <img className="logo" src={logo} alt="Logo"></img>
            <div className="navbar-right">
                <span className="dropdown-label">{t("selectLanguage")}</span>
                <Dropdown   options={options} 
                            onChange={onDropdownValueChange}
                            value={dropdownValue}
                            placeholder='Select language'/>
                <Popup
                        trigger={<button className="organization-button">{t("organization")}</button>}
                        position="bottom right"
                        closeOnDocumentClick
                    >
                        <div className="organization-content">
                            {organizationData}
                        </div>
                </Popup>
            </div>
            
        </div>
    )
}

export default Navbar;