import React, { useContext } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import AppContext from '../context/app-context';


const ValidationForm = (props) => {

    const context = useContext(AppContext);

    const onSubmitHandler = (values, { setSubmitting }) => {
        console.log("Submitting");
        axios.post('https://bench-api.applover.pl/api/v1/login', values)
             .then(res => {
                 console.log(res);
                 setSubmitting(false);
                 context.setAuth();
                 props.history.push('/main');
             })
             .catch(err => {
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
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="email">Email</label>
                            <input  className={errors.email && touched.email && 'error'}
                                    name="email"
                                    type="text"
                                    placeholder="Enter your email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}>
                            </input>
                            {errors.email && touched.email && (
                                <div className="validation-message">
                                    {errors.email}
                                </div>
                            )}
                            <label htmlFor="password">Password</label>
                            <input  className={errors.password && touched.password && 'error'}
                                    name="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}>
                            </input>
                            {errors.password && touched.password && (
                                <div className="validation-message">
                                    {errors.password}
                                </div>
                            )}
                            <button type="submit" disabled={isSubmitting}> Login </button>
                        </form>
                    )
                }
            }
        </Formik>
    )
}

export default ValidationForm;