"use client";
import { useState } from 'react';
import Link from 'next/link'
import { signOut, useSession } from "next-auth/react";

import styles from './AuthLinks.module.css'
import Image from 'next/image';

const AuthLinks = () => {
    const { data: session } = useSession();

    const handleLogout = () => {
        void signOut();
    }

    return (
        <>
            {session ? (
                <>
                    <Link href="/write" className={styles.link}>Write</Link>
                    {session.user.image && <Image src={session.user.image} alt="Logout" width={80} height={80}/>}
                    <span className={styles.link} onClick={handleLogout}>
                        Logout
                    </span>
                </>
            ) : (
                <Link href="/login" className={styles.link}>Login</Link>
            )}
        </>
    )
}

export default AuthLinks