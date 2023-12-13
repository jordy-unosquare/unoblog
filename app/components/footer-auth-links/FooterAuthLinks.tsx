"use client";
import Link from 'next/link'
import { useSession } from "next-auth/react";

import styles from './AuthLinks.module.css'

const FooterAuthLinks = ()=> {
    const { data: session } = useSession();

    return (
        <>
            {session ? (<Link href="/write">Write</Link>) : 
            (<Link href="/">Login</Link>)}
        </>
    )
}

export default FooterAuthLinks