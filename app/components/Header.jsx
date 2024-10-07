'use client'
import '@/styles/Header.scss';
import {useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation'
import CartDrawer from '@/components/user/CartDrawer'
import Link from 'next/link'
function Header({ toggleNav }) {
    const pathname = usePathname();
    const router = useRouter();
    const [searchOpen, setSearchOpen] = useState(false);
    const [cartStatus, setCartStatus] = useState(false);

    const toggleCart = () => {
        setCartStatus(!cartStatus);
    };
    useEffect(() => {
        if (cartStatus) {
            document.body.classList.add('open-cart');
        } else {
            document.body.classList.remove('open-cart');
        }
    }, [cartStatus]);
    return (
        <header>
            <div className="container-fluid">
                <div className="header_inner">
                    <div id="toggle_nav" onClick={toggleNav} className="nav_btn_mb">
                        <span></span>
                    </div>
                    <div className="header_logo">
                        <Link href="/"><img src="/monnica.png" alt=""/></Link>
                    </div>
                    <nav className="header_nav">
                        <ul className="header_menu">
                            <li><a href="">NAM</a></li>
                            <li><a href="">Nữ</a></li>
                            <li><a href="">Trẻ em</a></li>
                            <li><a href="">Thương hiệu</a></li>
                        </ul>
                    </nav>
                    <div className="header_icon">
                        <div className="header_search">
                            <button  className="icon_search" onClick={() => setSearchOpen(!searchOpen)}>
                        <span className="tooltip">
                            <svg className="svg-icon--medium-small" fill="currentColor" stroke="currentColor"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
                                ></path>
                            </svg>
                            <small className="tooltip__content">Search</small>
                        </span>
                            </button>
                            {
                                searchOpen && (
                                    <div className="form_search">
                                        <form action="">
                                            <input type="text" placeholder="Tên sản phẩm"/>
                                            <button type="submit">Tìm kiếm</button>
                                        </form>
                                    </div>
                                )
                            }

                        </div>
                        <a href="/login" className="icon_account" aria-label="Account">
                    <span className="tooltip">
                        <svg className="svg-icon--medium" fill="currentColor" stroke="currentColor"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path
                                d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                            ></path>
                        </svg>
                        <small className="tooltip__content">Account</small>
                    </span>
                        </a>

                        <Link href="/wishlist" className="icon_wishlist" aria-label="Wishlist">
                    <span className="tooltip">
                        <svg className="svg-icon--medium" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 512 512">
                            <path
                                d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                            ></path>
                        </svg>
                        <small className="tooltip__content">Wishlist</small>
                    </span>

                            <sup className="count_nb">2</sup>
                        </Link>

                        <span onClick={toggleCart} className="icon_card cursor-pointer" >
                    <span className="tooltip">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="size-6 svg-icon--medium">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                        </svg>

                        <small className="tooltip__content">Cart</small>
                    </span>
                            <span className="count_nb">1</span>
                        </span>
                    </div>
                </div>
            </div>
            <CartDrawer toggleCart={toggleCart}/>
        </header>
    );
}
export default Header;