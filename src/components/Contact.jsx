'use client'

import { useContext } from "react"
import { ArtContext } from "../providers/ArtProvider"
import { Element } from 'react-scroll'

import Footer from "./Footer"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string()
  })
  .required()

const Contact = () => {
    const [art, setArt] = useContext(ArtContext)
    const { 
        register, 
        handleSubmit, 
        reset,
        formState: { errors},
    } = useForm({
        reslover: yupResolver(schema)
    })

    const onSubmit = (data) => console.log(data)
    
    return (
        <Element name="contact" className="contact-container">
            <div className="contact-text">
                Contact
            </div>
            <div className="contact-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name">name</label>
                    <input type="text" {...register('name', { required: true })} name="name" />
                    <p>{errors.name?.message}</p>
                    <label htmlFor="email">email</label>
                    <input type="text" {...register('email', { required: true })} name="email" />
                    <p>{errors.email?.message}</p>
                    <label htmlFor="message">message</label>
                    <textarea type="textarea" {...register('message', { required: true })} name="message" />
                    <p>{errors.message?.message}</p>
                    <button type="submit" text="holla" />
                </form>
            
            </div>
            <Footer />
        </Element>
    )
}

export default Contact