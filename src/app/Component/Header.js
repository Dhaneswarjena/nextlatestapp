import Image from "next/image";
import styles from '@/app/styles/navbar.module.css'
import Link from "next/link";
import Nav from "@/app/Component/Nav";

const Header = () => {
    return (
        <>
            <header className={styles.main_header}>
                <div className={styles.navbar_brand}>
                   <Link href="/">
                       <Image src="/logo_transparent.png" alt="navbar logo" width={150} height={200} />
                   </Link>
                </div>
                <Nav />
            </header>
        </>
    );
};

export default Header;