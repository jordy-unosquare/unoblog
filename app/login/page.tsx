"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./loginPage.module.css";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const {status} = useSession()

  const router = useRouter();


  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("github")} >
          Sign in with Github
        </div>
        <div className={styles.socialButton} onClick={() => signIn("spotify")} >
          Sign in with Spotify
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
