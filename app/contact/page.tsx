"use client";
import React, { useState } from 'react'
import styles from './Contact.module.css'
import Image from "next/image";

const Contact = () => {

  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);
 
    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value),
    };
 
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
 
    if (response.ok) {
      console.log("Message sent successfully");
      setLoading(false);
      event.target.name.value = "";
      event.target.email.value = "";
      event.target.message.value = "";
    }
    if (!response.ok) {
      console.log("Error sending message");
      setLoading(false);
    }
  }
  
    return (
        <div className={styles.container}>
          <h1 className={styles.title}>Lets Keep in Touch</h1>
          <div className={styles.content}>
            <div className={styles.imgContainer}>
              <Image
                src="/contact.png"
                alt=""
                fill={true}
                className={styles.image}
              />
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input type="text" placeholder="name" name="name" className={styles.input} data-testid="contactName" required minLength={3}/>
              <input type="email" placeholder="email" name="email" className={styles.input} data-testid="contactEmail" required minLength={3}/>
              <textarea
                className={styles.textArea}
                placeholder="message"
                cols={30}
                rows={10}
                name="message"
                data-testid="contactMessage"
                required
                minLength={6}
              ></textarea>
              <button type="submit"
                data-testid="contactButton"
                disabled={loading}
                className={styles.button}> 
                Send 
              </button>
            </form>
          </div>
        </div>
      )
}

export default Contact