import React from 'react'
import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'
import Image from 'next/image'
function SingleUserPage()
{
    return (
        <div className={styles.container}>

            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src={"/noavatar.png"} alt="" fill />
                </div>
                John Due
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Username</label>
                    <input type='text' name="userName" placeholder='John Due' />
                    <label>Email</label>
                    <input type='email' name="email" placeholder='johndue@gmail.com' />
                    <label>Password</label>
                    <input type='password' name="password" />
                    <label>Phone</label>
                    <input type='phone' name="phone" placeholder='+1234567' />
                    <label>Address</label>
                    <input type='text' name="address" placeholder='Istanbul' />
                    <label>Is Admin?</label>
                    <select name='isAdmin' id='isAdmin'>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <select name='isActive' id='isActive'>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <button>Update</button>
                </form>
            </div>

        </div>
    )
}

export default SingleUserPage