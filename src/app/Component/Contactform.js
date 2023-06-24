"use client"
import style from '@/app/contact/contact.module.css'
import {Mulish} from "next/font/google";
import {useState} from "react";
const mulish = Mulish({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})
const Contactform = () => {
    const[user,setUser]=useState({
        username:"",
        email:"",
        phone:"",
        message:""
    });
    const[status,setstatus]=useState()
    function userhandle(e) {
     const name=e.target.name;
     const value=e.target.value;
     setUser((prevval)=>({...prevval,[name]:value}))
    }
    const formsubmit=async(e)=>{
        e.preventDefault();
         try {
                  const response=await fetch('/api/contact',{
                      method:'POST',
                 headers:{"Content_Type":"application/json"},
             body: JSON.stringify({
                 username:user.username,
                 email:user.email,
                 phone:user.phone,
                 message:user.message
             })
         })
             if(response.status===200){
                 setUser({
                     username:"",
                     email:"",
                     phone:"",
                     message:""
                 })
                 setstatus('success')
             }
             else{
                 setstatus('Error')
             }
         }
         catch(e){
          console.log(e)
         }

    }



    return (
        <form className={style.contact_form} onSubmit={formsubmit}>
            <div className={style.input_field}>
                <label htmlFor="username" className={style.label}>
                    Enter your name
                    <input type="text" name="username" id="username"
                           placeholder="Enter your name"
                           className={mulish.className}
                           onChange={userhandle}
                           value={user.username}
                           autoComplete="off"
                           required
                    />
                </label>
            </div>

            <div className={style.input_field}>
                <label htmlFor="email" className={style.label}>
                    Email
                    <input type="text" name="email" id="email"
                           placeholder="Enter your email"
                           className={mulish.className}
                           onChange={userhandle}
                           value={user.email}
                           autoComplete="off"
                           required
                    />
                </label>
            </div>

            <div className={style.input_field}>
                <label htmlFor="phone" className={style.label}>
                    Phone Number
                    <input type="number" name="phone" id="phone"
                           placeholder="Enter your phone"
                           className={mulish.className}
                           onChange={userhandle}
                           value={user.phone}
                           autoComplete="off"
                           required
                    />
                </label>
            </div>

            <div className={style.input_field}>
                <label htmlFor="message" className={style.label}>
                    Message
                    <textarea  name="message" id="message" rows={5}
                               placeholder="Enter your Message"
                               className={mulish.className}
                               onChange={userhandle}
                               value={user.message}
                               autoComplete="off"
                               required
                    />
                </label>
            </div>
            <div>
                {status === 'success' && <p className={style.success_msg}>Thank you for your message!</p>}
                {status === 'error' && <p className={style.error_msg}>There was an error submitting your message. Please try again.</p>}
                <button className={mulish.className} type="Submit">Send Message</button>
            </div>
        </form>
    );
};

export default Contactform;