import React from 'react'
import styles from './rightbar.module.css'
import Image from 'next/image'
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";
function Rightbar()
{
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image alt='' src="/astronaut.png" fill className={styles.bg} />
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}>🔥 Available Now</span>
                    <h3 className={styles.title}>How to use the new version of admin dashboard?</h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit eius libero perspiciatis recusandae possimus.
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled />
                        Watch
                    </button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.texts}>
                    <span className={styles.notification}>🔥 Available Now</span>
                    <h3 className={styles.title}>How to use the new version of admin dashboard?</h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit eius libero perspiciatis recusandae possimus.
                    </p>
                    <button className={styles.button}>
                        <MdReadMore />
                        Watch
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Rightbar