import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react'
import { temp } from 'three/webgpu';

const Contact = () => {
    const serviceID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                serviceID,
                templateID,
                {
                    from_name: form.name,
                    to_name: "Ali",
                    from_email: form.email,
                    to_email: "aliarthur35@gmail.com",
                    message: form.message
                },
                publicKey
            );
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");
            setForm({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.log(error);
            alert("Something went wrong. Please try again later.");
        }
    }

    return (
        <section className="c-space my-20" id="contact">
            <h3 className="head-text"> Contact Me</h3>
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                {/*<img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen" /> */}
                <div className="contact-container">
                    <h3 className="head-text">Let's talk</h3>
                    <p className="text-lg text-white-600 mt-3">
                        I’m always excited to connect, collaborate, or help bring ideas to life.
                        Whether you have a project in mind, a question, or just want to say hello, feel free to drop me a message.
                        Let’s build something great together!
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7 w-full">
                        <label className="space-y-3">
                            <span className="field-label"> Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className='field-input'
                                placeholder='Jane Doe' />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label"> Your Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className='field-input'
                                placeholder='janedoe@gmail.com' />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label"> Your Message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className='field-input'
                                placeholder='Hi, I am interesed in...' />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow up" className='field-btn_arrow' />
                        </button>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;
