import React from 'react'
import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css'
import Image from 'next/image'
function SingleProductPage()
{
    return (
        <div className={styles.container}>

            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src={"/noavatar.png"} alt="" fill />
                </div>
                Iphone
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Title</label>
                    <input type='text' name="title" placeholder='John Due' />
                    <label>Price</label>
                    <input type='number' name="price" placeholder='johndue@gmail.com' />
                    <label>Stock</label>
                    <input type='number' name="stock" placeholder='15' />
                    <label>Color</label>
                    <input type='text' name="color" placeholder='red' />
                    <label>Size</label>
                    <input type='text' name="size" placeholder='size' />
                    <label>Cat</label>
                    <select name='cat' id='cat'>
                        <option value="kitchen">Kitchen</option>
                        <option value="phone">Phone</option>
                        <option value="computer">Computer</option>
                    </select>
                    <label>Description</label>
                    <textarea
                        name='desc'
                        id="desc"
                        rows="10"
                        placeholder='description'>
                    </textarea>
                    <button>Update</button>
                </form>
            </div>

        </div>
    )
}

export default SingleProductPage