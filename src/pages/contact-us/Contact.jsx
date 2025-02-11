import React from "react";
import { Form, redirect } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return (
        <>
            <section className="contact bg-black min-h-screen ">
                <div className="px-8 sm:container py-3  sm:mx-auto ">
                    <h2 className="text-white text-center font-bold text-3xl py-16">Contact</h2>
                    <div className=" flex flex-wrap flex-col gap-2 justify-around items-center pt-8">

                        <div className="contact_info w-[35%] flex justify-center items-center gap-4 text-orange-700 font-bold pb-16">
                            <div className="card text-center bg-white p-8 rounded-[50%] border-2 border-orange-700 hover:bg-orange-700 hover:text-white hover:scale-90  ease-in-out duration-300 ">
                                <span><FontAwesomeIcon icon={faPhone} /></span>
                                
                            </div>
                            <div className="card text-center bg-white p-8 rounded-[50%] border-2 border-orange-700 hover:bg-orange-700 hover:text-white hover:scale-90  ease-in-out duration-300 ">
                                <span><FontAwesomeIcon icon={faEnvelope} /></span>
                                
                            </div>
                            <div className="card text-center bg-white p-8 rounded-[50%] border-2 border-orange-700 hover:bg-orange-700 hover:text-white hover:scale-90 ease-in-out duration-300">
                                <span><FontAwesomeIcon icon={faFacebookF} /></span>
                               
                            </div>
                        </div>
                        <div className="message w-[80%] bg-white p-4 pt-4  rounded-xl border-orange-700 border-4">
                            <Form action="/Contact" method="post" className="md:grid md:grid-cols-2 gap-4 text-orange-700 font-bold " >
                            <div className="pb-4 md:pb-0">
                                <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" placeholder="Your Name" className="border-2 p-2 rounded-2xl w-[100%]" />
                            </div>
                             <div className="pb-4 md:pb-0">
                                <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" placeholder="Your Email" className="border-2 p-2 rounded-2xl w-[100%]" />

                            </div>
                            <div>
                                <label htmlFor="message" className="col-span-2">Message</label>
                                    <textarea name="message" id="message" className="border-2 p-2 rounded-2xl w-[100%]" rows='5' cols="20" ></textarea>
                            </div>
                                <button onClick={() => { alert("Thank you for your message ") }} className="col-span-2 p-2 bg-orange-700 text-white rounded-xl">Send Message</button>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Contact;



export const contactAction = async ({ request }) => {
    console.log(request)
    const data = await request.formData()

    const submission = {
        name: data.get('name'),
        email: data.get('email'),
        message: data.get('message'),
    }
    let msg = [];
    msg.push(submission)

    let msgJson = JSON.stringify(msg);
    console.log(submission)
    console.log(msg)
    console.log(msgJson)
    return (
        
        redirect('/')
    )
}