import Contactcard from "@/app/Component/Contactcard";
import style from '@/app/contact/contact.module.css'
import Contactform from "@/app/Component/Contactform";

const Page = () => {
    return (
        <>
            <div className={style.container}>
                <h1>Contact Us</h1>
                <Contactcard />
                <section className={style.contact_section}>
                     <h2>We love to hear <span> from you </span> </h2>
                     <Contactform />
                </section>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15225.714626787263!2d78.43432064512129!3d17.439185735306776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c55bb43183%3A0x1abc135b23ee2703!2sAmeerpet%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1687594456556!5m2!1sen!2sin"
                width={600} height={450} style={{border:0}} allowFullScreen="" loading="lazy" className={style.mapping}
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </>
    );
};

export default Page;