import React, { useContext, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

import AppContext from '../context/app-context';
import Checkbox from './utils/Checkbox';

toast.configure();

const ValidationForm = (props) => {

    const context = useContext(AppContext);

    const [checked, setChecked] = useState(false);
    const [progress, setProgress] = useState(0);

    const { t } = useTranslation();

    const handleCheckboxChange = () => {
        setChecked(!checked);
    }

    const onSubmitHandler = (values, { setSubmitting }) => {
        setProgress(40);
        setTimeout(() => {
            setProgress(60);
        }, 1000)
        axios.post('https://bench-api.applover.pl/api/v1/login', values)
             .then(res => {
                setProgress(100);
                setSubmitting(false);
                props.history.push('/main');
                context.setAuth();
                if (checked) {
                    localStorage.setItem('token', 'ksdjfhskjdhjhfjfjfjshdfjkhsdfLJHDGSFjsfK4787237-sfidhGFKDIdfdhfDJBbcbcgdgdsgskdjfhskehkjsfdf');
                }
             })
             .catch(err => {
                setProgress(0);
                toast.error(t("invalidCredentials"), {
                    position: "top-center",
                    autoClose: false,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                    });
                setSubmitting(false);
             })
      };
    return (
        <div>
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
            { progress < 100 && progress > 0 && (
                <Progress percent={progress}/>
            )}
        </div>
        
    )
}

export default ValidationForm;