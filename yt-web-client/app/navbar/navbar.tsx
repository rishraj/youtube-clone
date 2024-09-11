'use client';

import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import SignIn from "./sign-in";
import { onAuthStateChangedHelper } from "../utilities/firebase/firebase";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";
import Upload from "./upload";

export default function Navbar() {
    // Initialise user state
    const [user, setUser] = useState<User | null>(null)
    useEffect(() => {
        const unsubscribe = onAuthStateChangedHelper((user) => {
            setUser(user);
        })

        // Cleanup subscription on unmount
        return  () => unsubscribe();
    })

    return (
        <nav className={styles.nav}>
            <Link href="/">
                <Image width={160} height={40}
                    src="/fake-youtube-logo.jpg" alt="YouTube Logo"/>
            </Link>
            {
                user && <Upload />
            }
            <SignIn user={user} />
        </nav>
    );
}