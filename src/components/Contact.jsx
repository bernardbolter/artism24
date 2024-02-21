'use client'

import { useContext, useState } from "react"
import { ArtContext } from "../providers/ArtProvider"
import { Element } from 'react-scroll'

import Footer from "./Footer"

import axios from 'axios'
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
    const [errorMsg, setErrorMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')

    
    return (
        <Element name="contact" className="contact-container">
            <div className="contact-text">
                <h2>Get in Touch.</h2>
                <h4>If you have any questions or would like more information about getting an AR enhancment for your Artwork or Creation done,</h4>
                <h5>Just send over a message at info@artism.org, or use the contact for here.</h5>
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
                    onSubmit={(values, { resetForm }) => {
                        setSubmitting(true)
                        resetForm()
                        setSuccessMsg('')
                        setErrorMsg('')
                        axios.defaults.headers.post['Content-Type'] = 'application/json'
                        axios.post('https://formsubmit.co/ajax/info@artism.org', values)
                            .then(response => {
                                console.log(response)
                                setSuccessMsg('we have recieved your email and will get back to you shortly.')
                                setSubmitting(false)
                            })
                            .catch(error => {
                                console.log(error)
                                setErrorMsg('There was a problem sending the message, try again later or email directly')
                                setSubmitting(false)
                            })
                    }}
                >
                    {({ errors, touched, dirty }) => {
                        // console.log('errors: ', errors)
                        // console.log('touched: ', touched)
                        // console.log('dirty' , dirty)

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
                                <button className="contact-submit" type="submit">{submitting ? <Spinner /> : 'submit'}</button>
                                {!dirty && errorMsg.length > 0 && <p className="contact-error">{errorMsg}</p>}
                                {!dirty && successMsg.length > 0 && <p className="contact-success">{successMsg}</p>}
                            </Form>
                    )}}
                </Formik>
            </div>
            <Footer />
        </Element>
    )
}

export default Contact