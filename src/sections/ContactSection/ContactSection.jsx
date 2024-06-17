import React, { useState } from 'react';
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com'; // Import emailjs
import '../ContactSection/ContactSection.css';


export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await emailjs.send('service_63j80kb', 'template_z14h28r', formData, '1Ca1cCpVHJaSepDhL');
            Swal.fire({
                title: 'Success!',
                text: 'Email sent successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: 'Failed to send email. Please try again later.',
                icon: 'Error',
                confirmButtonText: 'Ok'
            })
        }
    };

    return (
        <>
            <section id='contactSection' className='contact-section'>
                <h2>DROP <span>ME A LINE</span></h2>
                <div className='empty-line-contact' />
                <form onSubmit={handleSubmit}>
                    <div className='name-email'>
                        <label htmlFor='name'>
                            <input type='text' id='name' name='name' placeholder='Your Name' value={formData.name} onChange={handleChange} required />
                        </label>
                        <label htmlFor='email'>
                            <input type='email' id='email' name='email' placeholder='Your Email' value={formData.email} onChange={handleChange} required />
                        </label>
                    </div>
                    <label htmlFor='subject'>
                        <input type='text' id='subject' name='subject' placeholder='Your Subject' value={formData.subject} onChange={handleChange} required />
                    </label>
                    <textarea
                        id='message'
                        name='message'
                        placeholder='Your Message'
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button type='submit'>SHOOT MESSAGE</button>
                </form>
            </section>
        </>
    );
}
