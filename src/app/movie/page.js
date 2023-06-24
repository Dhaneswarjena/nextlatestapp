import Link from "next/link";
import Moviecard from "@/app/Component/Moviecard";
import styles from '@/app/styles/common.module.css'

const Page = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const url = process.env.RAPID_KEY;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '67105383d2msh078265319df698bp15fa6djsn219187cc4d24',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };
    const res = await fetch(url, options);
    let data = await res.json();
    const main_data = data.titles;
    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movies</h1>
                    <div className={styles.card_section}>
                    {
                        main_data.map((curelem) => {
                            return (
                                <Moviecard key={curelem.id} {...curelem}/>
                            )
                        })
                    }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;