"use client"
import herostyle from '@/app/styles/herosection.module.css'
import styles from '@/app/styles/common.module.css'
import { Mulish } from 'next/font/google';
import {useRouter} from "next/navigation";
import Image from "next/image";

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap'
})

const Herosection = ({title,imageurl}) => {
    const rout=useRouter();
    return (
        <main className={herostyle.main_section}>
           <div className={styles.container}>
               <div className={styles.grid_two_section}>
                   <div className={herostyle.hero_content}>
                       <h1>{title}</h1>
                       <p> From award-winning dramas to blockbuster action movies, we&apos;ve got you covered. Browse
                           our
                           selection of the latest and greatest movies, and find your new favorite today.
                       </p>

                           <button className={mulish.className} onClick={()=>rout.push("/movie")}>
                               Explore Movies
                           </button>

                   </div>
                   <div className={herostyle.hero_image}>
                       <Image src={imageurl} alt="watch movie" height={500} width={500}/>
                   </div>
               </div>
           </div>
            <div className={herostyle['custom-shape-divider-bottom-1681647578']}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className={herostyle["shape-fill"]}></path>
                </svg>
            </div>
        </main>
    );
};

export default Herosection;