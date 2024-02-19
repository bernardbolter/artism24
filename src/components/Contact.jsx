'use client'

import { useContext, useState } from "react"
import { ArtContext } from "../providers/ArtProvider"
import { Element } from 'react-scroll'

import Footer from "./Footer"

// import { useForm } from "react-hook-form"
// import { yupResolver } from "@hookform/resolvers/yup"
import { Formik, Form, Field } from 'formik'
import * as yup from "yup"

import Spinner from '../svg/spinner'

import vars from '../styles/vars.module.scss'

const artismSchema = yup.object().shape({
    name: yup.string().min(2, 'too short').max(50, 'too long').required('name is required'),
    email: yup.string().email('invalid email').required(),
    message: yup.string().min(2, 'leave a message too').required()
  })

const Contact = () => {
    const [art, setArt] = useContext(ArtContext)
    const [submitting, setSubmitting] = useState(false)

    
    return (
        <Element name="contact" className="contact-container">
            <div className="contact-text">
                <h2>Get in Touch.</h2>
                <h4>If you have any questions or would like more information about getting an AR project for your Artwork</h4>
                <h5>Just send over a message at info@artism.org, or use the contact for here.</h5>
                <p>this project is in the begining stages and we are looking to work with some artists for free, to work some things out and get some examples out there, let us know if youre interested</p>
            </div>
            <div className="contact-line" />
            <div className="contact-form">
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        message: ''
                    }}
                    validationSchema={artismSchema}
                    onSubmit={values => {
                        console.log('hit submit')
                        console.log(values)
                    }}
                >
                    {({ errors, touched }) => {
                        // console.log(errors)
                        // console.log(touched)

                        return (
                            <Form>
                                <div className="contact-input">
                                    <label className="form-label" htmlFor="name">name</label>
                                    <Field
                                        component="input" 
                                        name="name"
                                        style={{ 
                                            borderBottomColor: errors.name ? vars.error : vars.brand 
                                        }}
                                    />
                                    {/* {errors.name || touched.errors ? <p className="contact-error">{errors.name}</p> : null} */}
                                </div>
                                <div className="contact-input">
                                    <label className="form-label" htmlFor="email">email</label>
                                    <Field
                                        component="input"
                                        name="email"
                                        style={{
                                            borderBottomColor: errors.email ? vars.error : vars.brand
                                        }}
                                    />
                                    {/* {errors.email || touched.email ? <p className="contact-error">{errors.email}</p> : null} */}
                                </div>
            
                                <div className="contact-input">
                                    <label className="form-label" htmlFor="message">message</label>
                                    <Field 
                                        component="textarea"
                                        name="message" 
                                        rows={5}
                                        style={{ 
                                            borderBottomColor: errors.message ? vars.error : vars.brand 
                                        }}    
                                    />
                                </div>
                                <button className="contact-submit" type="submit">submit</button>
                                <div className={submitting ? 'spinner spinner-show' : 'spinner'}>
                                    <Spinner />
                                </div>
                            </Form>
                    )}}
                </Formik>
            </div>
            <Footer />
        </Element>
    )
}

export default Contact