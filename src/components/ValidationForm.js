import React, { useContext, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppContext from '../context/app-context';
import Checkbox from './utils/Checkbox';

toast.configure();

const ValidationForm = (props) => {

    const context = useContext(AppContext);

    const [checked, setChecked] = useState(false);

    const { t } = useTranslation();

    const handleCheckboxChange = (event) => {
        setChecked(!checked);
    }

    const onSubmitHandler = (values, { setSubmitting }) => {
        console.log("Submitting");
        axios.post('https://bench-api.applover.pl/api/v1/login', values)
             .then(res => {
                console.log(res);
                setSubmitting(false);
                context.setAuth();
                if (checked) {
                    localStorage.setItem('token', 'ksdjfhskjdhjhfjfjfjshdfjkhsdfLJHDGSFjsfK4787237-sfidhGFKDIdfdhfDJBbcbcgdgdsgskdjfhskehkjsfdf');
                }
                props.history.push('/main');
             })
             .catch(err => {
                toast.error(t("invalidCredentials"), {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                    });
                console.log(err);
                setSubmitting(false);
             })
      };
    return (
        <Formik
            initialValues={{email: '', password : ''}}
            onSubmit={onSubmitHandler}
            validationSchema = { Yup.object().shape({
                email: Yup.string()
                          .email()
                          .required('Required!'),
                password: Yup.string()
                             .required('Required!')
                             .min(8, 'Password must be at least 8 characters long.')
            })}
            >
            {
                props => {
                    const { values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit } = props;
                    return (
                        <div className="login-wrapper">
                            <h3 className="login-header">{t("log_in")}</h3>
                            <form  className="form-wrapper"
                                   onSubmit={handleSubmit}>
                                <input  className={errors.email && touched.email && 'error'}
                                        name="email"
                                        type="text"
                                        placeholder="Email address"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}>
                                </input>
                                {errors.email && touched.email && (
                                    <div className="validation-message">
                                        {errors.email}
                                    </div>
                                )}
                                <input  className={errors.password && touched.password && 'error'}
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}>
                                </input>
                                {errors.password && touched.password && (
                                    <div className="validation-message">
                                        {errors.password}
                                    </div>
                                )}
                                <Checkbox checked={checked}
                                          onChange={handleCheckboxChange}
                                          id="keepLogged"
                                          label={t("keepLoggedIn")}/>
                                <button className="submit-button"
                                        type="submit" 
                                        disabled={isSubmitting}> 
                                        {t("login")}
                                </button>
                            </form>
                        </div>
                    )
                }
            }
        </Formik>
    )
}

export default ValidationForm;