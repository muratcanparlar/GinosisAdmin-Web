import Search from '@/app/ui/dashboard/search/search'
import React from 'react'
import styles from '@/app/ui/dashboard/products/products.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/app/ui/dashboard/pagination/pagination'

function products()
{
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="search for a product..." />
                <Link href="/dashboard/products/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created At</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.product}>
                                <Image alt='' src="/noproduct.jpg" height={40} width={40} className={styles.productImage} />
                                Iphone
                            </div>
                        </td>
                        <td>Desc Text</td>
                        <td>2500$</td>
                        <td>14.01.2024</td>
                        <td>100</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href="/dashboard/products/id">
                                    <button className={`${styles.button} ${styles.view}`}>
                                        View
                                    </button>
                                </Link>
                                <Link href="/">
                                    <button className={`${styles.button} ${styles.delete}`}>
                                        Delete
                                    </button>
                                </Link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

export default products