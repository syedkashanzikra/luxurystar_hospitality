import React from 'react'
import Header from './Header.jsx';
import Footer from './Footer.jsx'

const Restaurant = () => {
  return (
    <>
     <Header />
     <div class="breadcrumb__area dark-green breadcrumb-space overflow-hidden position-relative z-1" data-background="template/assets/imgs/breadcrumb/breadcrumb.png">
        <div class="breadcrumb__shapes">
            <img class="upDown" src="template/assets/imgs/breadcrumb/shape.png" alt="img not found"/>
        </div>
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-12">
                    <div class="breadcrumb__content">
                        <div class="breadcrumb__title-wrapper mb-15 mb-sm-10 mb-xs-5">
                            <h1 class="breadcrumb__title color-white wow fadeInLeft animated" data-wow-delay=".2s">Resturent & Bar</h1>
                        </div>
                        <div class="breadcrumb__menu wow fadeInLeft animated" data-wow-delay=".4s">
                            <nav>
                                <ul>
                                    <li><span><a href="index.html">Home</a></span></li>
                                    <li class="active"><span>Resturent & Bar</span></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="resturent__area section-space">
        <div class="container">
            <div class="row align-items-center bg-gray-2">
                <div class="col-lg-5 p-0">
                    <div class="resturent__thumb">
                        <img src="template/assets/imgs/inner-page-img/resturent-img-1.png" alt="img not found"/>
                    </div>
                </div>
                <div class="col-lg-7 p-0">
                    <div class="resturent__content">
                        <div class="resturent__content-title-wrap">
                            <div class="icon">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 29.88V42H24V29.88C26.28 29.32 28 26.9 28 24C28 20.69 25.76 18 23 18C20.24 18 18 20.69 18 24C18 26.9 19.72 29.32 22 29.88Z" fill="white"/>
                                    <path d="M35 29.65V42H37V29.65C40.06 28.17 42 25.11 42 21.67V18H40V21.67C40 23.97 38.87 26.07 37 27.34V18H35V27.34C33.14 26.09 32 23.99 32 21.67V18H30V21.67C30 25.09 31.92 28.14 35 29.65Z" fill="white"/>
                                </svg>                                    
                            </div>
                            <h3 class="title">Family friendly Amenities</h3>
                        </div>
                        <p class="dec">Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing .Lor Ipsum is simply dummy text of the printing.Lorem Ipsum is simply dummy text of the printing Lorem Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is of simply dummy text of the printing .Lor Ipsum is simply dummy </p>
                        <div class="resturent__content-contact mt-20">
                            <div class="icon">
                                <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.6875 0.5C13.3984 0.5 14 1.10156 14 1.8125C14 2.25 13.7812 2.63281 13.4531 2.87891L7.51953 7.33594C7.19141 7.58203 6.78125 7.58203 6.45312 7.33594L0.519531 2.87891C0.191406 2.63281 0 2.25 0 1.8125C0 1.10156 0.574219 0.5 1.3125 0.5H12.6875ZM5.93359 8.04688C6.5625 8.51172 7.41016 8.51172 8.03906 8.04688L14 3.5625V9.25C14 10.2344 13.207 11 12.25 11H1.75C0.765625 11 0 10.2344 0 9.25V3.5625L5.93359 8.04688Z" fill="#AF8C3E"/>
                                </svg>
                            </div>
                            <a href="mailto:debra.holt@example.coms" class="title">debra.holt@example.coms</a>
                        </div>
                        <div class="resturent__content-contact mt-20">
                            <div class="icon">
                                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.9688 13.0938L15.2188 16.25C15.125 16.7188 14.75 17.0312 14.2812 17.0312C6.40625 17 0 10.5938 0 2.71875C0 2.25 0.28125 1.875 0.75 1.78125L3.90625 1.03125C4.34375 0.9375 4.8125 1.1875 5 1.59375L6.46875 5C6.625 5.40625 6.53125 5.875 6.1875 6.125L4.5 7.5C5.5625 9.65625 7.3125 11.4062 9.5 12.4688L10.875 10.7812C11.125 10.4688 11.5938 10.3438 12 10.5L15.4062 11.9688C15.8125 12.1875 16.0625 12.6562 15.9688 13.0938Z" fill="#AF8C3E"/>
                                </svg>                                    
                            </div>
                            <a href="tel:01245789321" class="title">01245789321, 012457895146</a>
                        </div>
                        <div class="resturent__content-social mt-30">
                            <a href="resturent.html#"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="resturent.html#"><i class="fa-brands fa-instagram"></i></a>
                            <a href="resturent.html#"><i class="fa-brands fa-linkedin"></i></a>
                            <a href="resturent.html#"><i class="fa-brands fa-pinterest-p"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

     <section class="Resturent__area overflow-hidden">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="resturent__item mb-30 wow fadeInLeft animated" data-wow-delay=".8s">
                        <div class="swiper resturent-slide">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide resturent__item-slide pb-30">
                                    <div class="resturent__item-slide-inner">
                                        <div class="resturent__item-media">
                                            <a href="blog-details.html">
                                                <img src="template/assets/imgs/inner-page-img/resturent-img-2.png" alt="img not found"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide resturent__item-slide pb-30">
                                    <div class="resturent__item-media">
                                        <a href="blog-details.html">
                                            <img src="template/assets/imgs/inner-page-img/resturent-img-3.png" alt="img not found"/>
                                        </a>
                                    </div>
                                </div>
                                <div class="swiper-slide resturent__item-slide pb-30">
                                    <div class="resturent__item-media">
                                        <a href="blog-details.html">
                                            <img src="template/assets/imgs/inner-page-img/resturent-img-4.png" alt="img not found"/>
                                        </a>
                                    </div>
                                </div>
                                <div class="swiper-slide resturent__item-slide pb-30">
                                    <div class="resturent__item-media">
                                        <a href="blog-details.html">
                                            <img src="template/assets/imgs/inner-page-img/resturent-img-2.png" alt="img not found"/>
                                        </a>
                                    </div>
                                </div>
                                <div class="swiper-slide resturent__item-slide pb-30">
                                    <div class="resturent__item-media">
                                        <a href="blog-details.html">
                                            <img src="template/assets/imgs/inner-page-img/resturent-img-3.png" alt="img not found"/>
                                        </a>
                                    </div>
                                </div>
                                <div class="swiper-slide resturent__item-slide pb-30">
                                    <div class="resturent__item-media">
                                        <a href="blog-details.html">
                                            <img src="template/assets/imgs/inner-page-img/resturent-img-2.png" alt="img not found"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="selling__area section-space-bottom">
        <div class="container">
            <div class="section3__title-wrapper mb-60">
                <h2 class="section3__title-wrapper-title wow fadeInLeft animated" data-wow-delay=".3s">Best Selling Dishes</h2>
                <p class="dec">Fast food is a popular category of food that emphasizes quick a <br/> service and convenience. It typically includes items </p>
            </div>
            <div class="row mb-minus-30">
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div class="selling__item mb-30">
                        <div class="selling__item-thumb">
                            <img src="template/assets/imgs/inner-page-img/selling-img-1.png" alt="img not found"/>
                        </div>
                        <div class="selling__item-content">
                            <div class="selling__item-content-title-box">
                                <h4 class="title"><a href="resturent.html">Chicken Pasta</a></h4>
                                <div class="icon">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.25 22.5C21.913 22.5 22.5489 22.7634 23.0178 23.2322C23.4866 23.7011 23.75 24.337 23.75 25C23.75 25.663 23.4866 26.2989 23.0178 26.7678C22.5489 27.2366 21.913 27.5 21.25 27.5C20.587 27.5 19.9511 27.2366 19.4822 26.7678C19.0134 26.2989 18.75 25.663 18.75 25C18.75 23.6125 19.8625 22.5 21.25 22.5ZM1.25 2.5H5.3375L6.5125 5H25C25.3315 5 25.6495 5.1317 25.8839 5.36612C26.1183 5.60054 26.25 5.91848 26.25 6.25C26.25 6.4625 26.1875 6.675 26.1 6.875L21.625 14.9625C21.2 15.725 20.375 16.25 19.4375 16.25H10.125L9 18.2875L8.9625 18.4375C8.9625 18.5204 8.99542 18.5999 9.05403 18.6585C9.11263 18.7171 9.19212 18.75 9.275 18.75H23.75V21.25H8.75C8.08696 21.25 7.45107 20.9866 6.98223 20.5178C6.51339 20.0489 6.25 19.413 6.25 18.75C6.25 18.3125 6.3625 17.9 6.55 17.55L8.25 14.4875L3.75 5H1.25V2.5ZM8.75 22.5C9.41304 22.5 10.0489 22.7634 10.5178 23.2322C10.9866 23.7011 11.25 24.337 11.25 25C11.25 25.663 10.9866 26.2989 10.5178 26.7678C10.0489 27.2366 9.41304 27.5 8.75 27.5C8.08696 27.5 7.45107 27.2366 6.98223 26.7678C6.51339 26.2989 6.25 25.663 6.25 25C6.25 23.6125 7.3625 22.5 8.75 22.5ZM20 13.75L23.475 7.5H7.675L10.625 13.75H20Z" fill="white"/>
                                    </svg>                                        
                                </div>
                            </div>
                            <p class="dec">Fast food is a popular category of emphasizes quick a service and convenience</p>
                            <div class="selling__item-content-dolar-box">
                                <h4 class="dolar"><span>$</span>3.25</h4>
                                <div class="icon">
                                    <i class="fa-regular fa-heart"></i>
                                </div>
                            </div>
                            <div class="selling__item-content-star-list">
                                <ul>
                                    <li>
                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9062 4.71875L16.375 5.375C16.75 5.4375 17.0625 5.6875 17.1875 6.0625C17.3125 6.40625 17.2188 6.8125 16.9375 7.0625L13.6875 10.2812L14.4688 14.8438C14.5312 15.2188 14.375 15.5938 14.0625 15.8125C13.75 16.0625 13.3438 16.0625 13 15.9062L9 13.75L4.96875 15.9062C4.65625 16.0625 4.21875 16.0625 3.9375 15.8125C3.625 15.5938 3.46875 15.2188 3.53125 14.8438L4.28125 10.2812L1.03125 7.0625C0.75 6.8125 0.65625 6.40625 0.78125 6.0625C0.90625 5.6875 1.21875 5.4375 1.59375 5.375L6.09375 4.71875L8.09375 0.5625C8.25 0.21875 8.59375 0 9 0C9.375 0 9.71875 0.21875 9.875 0.5625L11.9062 4.71875Z" fill="#AF8C3E"/>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9062 4.71875L16.375 5.375C16.75 5.4375 17.0625 5.6875 17.1875 6.0625C17.3125 6.40625 17.2188 6.8125 16.9375 7.0625L13.6875 10.2812L14.4688 14.8438C14.5312 15.2188 14.375 15.5938 14.0625 15.8125C13.75 16.0625 13.3438 16.0625 13 15.9062L9 13.75L4.96875 15.9062C4.65625 16.0625 4.21875 16.0625 3.9375 15.8125C3.625 15.5938 3.46875 15.2188 3.53125 14.8438L4.28125 10.2812L1.03125 7.0625C0.75 6.8125 0.65625 6.40625 0.78125 6.0625C0.90625 5.6875 1.21875 5.4375 1.59375 5.375L6.09375 4.71875L8.09375 0.5625C8.25 0.21875 8.59375 0 9 0C9.375 0 9.71875 0.21875 9.875 0.5625L11.9062 4.71875Z" fill="#AF8C3E"/>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9062 4.71875L16.375 5.375C16.75 5.4375 17.0625 5.6875 17.1875 6.0625C17.3125 6.40625 17.2188 6.8125 16.9375 7.0625L13.6875 10.2812L14.4688 14.8438C14.5312 15.2188 14.375 15.5938 14.0625 15.8125C13.75 16.0625 13.3438 16.0625 13 15.9062L9 13.75L4.96875 15.9062C4.65625 16.0625 4.21875 16.0625 3.9375 15.8125C3.625 15.5938 3.46875 15.2188 3.53125 14.8438L4.28125 10.2812L1.03125 7.0625C0.75 6.8125 0.65625 6.40625 0.78125 6.0625C0.90625 5.6875 1.21875 5.4375 1.59375 5.375L6.09375 4.71875L8.09375 0.5625C8.25 0.21875 8.59375 0 9 0C9.375 0 9.71875 0.21875 9.875 0.5625L11.9062 4.71875Z" fill="#AF8C3E"/>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9062 4.71875L16.375 5.375C16.75 5.4375 17.0625 5.6875 17.1875 6.0625C17.3125 6.40625 17.2188 6.8125 16.9375 7.0625L13.6875 10.2812L14.4688 14.8438C14.5312 15.2188 14.375 15.5938 14.0625 15.8125C13.75 16.0625 13.3438 16.0625 13 15.9062L9 13.75L4.96875 15.9062C4.65625 16.0625 4.21875 16.0625 3.9375 15.8125C3.625 15.5938 3.46875 15.2188 3.53125 14.8438L4.28125 10.2812L1.03125 7.0625C0.75 6.8125 0.65625 6.40625 0.78125 6.0625C0.90625 5.6875 1.21875 5.4375 1.59375 5.375L6.09375 4.71875L8.09375 0.5625C8.25 0.21875 8.59375 0 9 0C9.375 0 9.71875 0.21875 9.875 0.5625L11.9062 4.71875Z" fill="#E7E7EB"/>
                                        </svg>                                        
                                    </li>
                                    <li>
                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9062 4.71875L16.375 5.375C16.75 5.4375 17.0625 5.6875 17.1875 6.0625C17.3125 6.40625 17.2188 6.8125 16.9375 7.0625L13.6875 10.2812L14.4688 14.8438C14.5312 15.2188 14.375 15.5938 14.0625 15.8125C13.75 16.0625 13.3438 16.0625 13 15.9062L9 13.75L4.96875 15.9062C4.65625 16.0625 4.21875 16.0625 3.9375 15.8125C3.625 15.5938 3.46875 15.2188 3.53125 14.8438L4.28125 10.2812L1.03125 7.0625C0.75 6.8125 0.65625 6.40625 0.78125 6.0625C0.90625 5.6875 1.21875 5.4375 1.59375 5.375L6.09375 4.71875L8.09375 0.5625C8.25 0.21875 8.59375 0 9 0C9.375 0 9.71875 0.21875 9.875 0.5625L11.9062 4.71875Z" fill="#E7E7EB"/>
                                        </svg>                                        
                                    </li>
                                </ul>
                            </div>
                            <a class="selling__btn" href="resturent.html">View More<i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div class="selling__item mb-30">
                        <div class="selling__item-thumb">
                            <img src="template/assets/imgs/inner-page-img/selling-img-2.png" alt="img not found"/>
                        </div>
                        <div class="selling__item-content">
                            <div class="selling__item-content-title-box">
                                <h4 class="title"><a href="resturent.html">Chicken Sorma</a></h4>
                                <div class="icon">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.25 22.5C21.913 22.5 22.5489 22.7634 23.0178 23.2322C23.4866 23.7011 23.75 24.337 23.75 25C23.75 25.663 23.4866 26.2989 23.0178 26.7678C22.5489 27.2366 21.913 27.5 21.25 27.5C20.587 27.5 19.9511 27.2366 19.4822 26.7678C19.0134 26.2989 18.75 25.663 18.75 25C18.75 23.6125 19.8625 22.5 21.25 22.5ZM1.25 2.5H5.3375L6.5125 5H25C25.3315 5 25.6495 5.1317 25.8839 5.36612C26.1183 5.60054 26.25 5.91848 26.25 6.25C26.25 6.4625 26.1875 6.675 26.1 6.875L21.625 14.9625C21.2 15.725 20.375 16.25 19.4375 16.25H10.125L9 18.2875L8.9625 18.4375C8.9625 18.5204 8.99542 18.5999 9.05403 18.6585C9.11263 18.7171 9.19212 18.75 9.275 18.75H23.75V21.25H8.75C8.08696 21.25 7.45107 20.9866 6.98223 20.5178C6.51339 20.0489 6.25 19.413 6.25 18.75C6.25 18.3125 6.3625 17.9 6.55 17.55L8.25 14.4875L3.75 5H1.25V2.5ZM8.75 22.5C9.41304 22.5 10.0489 22.7634 10.5178 23.2322C10.9866 23.7011 11.25 24.337 11.25 25C11.25 25.663 10.9866 26.2989 10.5178 26.7678C10.0489 27.2366 9.41304 27.5 8.75 27.5C8.08696 27.5 7.45107 27.2366 6.98223 26.7678C6.51339 26.2989 6.25 25.663 6.25 25C6.25 23.6125 7.3625 22.5 8.75 22.5ZM20 13.75L23.475 7.5H7.675L10.625 13.75H20Z" fill="white"/>
                                    </svg>                                        
                                </div>
                            </div>
                            <p class="dec">Fast food is a popular category of emphasizes quick a service and convenience</p>
                            <div class="selling__item-content-dolar-box">
                                <h4 class="dolar"><span>$</span>3.25</h4>
                                <div class="icon">
                                    <i class="fa-regular fa-heart"></i>
                                </div>
                            </div>
                            <div class="selling__item-content-star-list">
                                <ul>
                                    <li>
                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9062 4.71875L16.375 5.375C16.75 5.4375 17.0625 5.6875 17.1875 6.0625C17.3125 6.40625 17.2188 6.8125 16.9375 7.0625L13.6875 10.2812L14.4688 14.8438C14.5312 15.2188 14.375 15.5938 14.0625 15.8125C13.75 16.0625 13.3438 16.0625 13 15.9062L9 13.75L4.96875 15.9062C4.65625 16.0625 4.21875 16.0625 3.9375 15.8125C3.625 15.5938 3.46875 15.2188 3.53125 14.8438L4.28125 10.2812L1.03125 7.0625C0.75 6.8125 0.65625 6.40625 0.78125 6.0625C0.90625 5.6875 1.21875 5.4375 1.59375 5.375L6.09375 4.71875L8.09375 0.5625C8.25 0.21875 8.59375 0 9 0C9.375 0 9.71875 0.21875 9.875 0.5625L11.9062 4.71875Z" fill="#AF8C3E"/>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9062 4.71875L16.375 5.375C16.75 5.4375 17.0625 5.6875 17.1875 6.0625C17.3125 6.40625 17.2188 6.8125 16.9375 7.0625L13.6875 10.2812L14.4688 14.8438C14.5312 15.2188 14.375 15.5938 14.0625 15.8125C13.75 16.0625 13.3438 16.0625 13 15.9062L9 13.75L4.96875 15.9062C4.65625 16.0625 4.21875 16.0625 3.9375 15.8125C3.625 15.5938 3.46875 15.2188 3.53125 14.8438L4.28125 10.2812L1.03125 7.0625C0.75 6.8125 0.65625 6.40625 0.78125 6.0625C0.90625 5.6875 1.21875 5.4375 1.59375 5.375L6.09375 4.71875L8.09375 0.5625C8.25 0.21875 8.59375 0 9 0C9.375 0 9.71875 0.21875 9.875 0.5625L11.9062 4.71875Z" fill="#AF8C3E"/>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9062 4.71875L16.375 5.375C16.75 5.4375 17.0625 5.6875 17.1875 6.0625C17.3125 6.40625 17.2188 6.8125 16.9375 7.0625L13.6875 10.2812L14.4688 14.8438C14.5312 15.2188 14.375 15.5938 14.0625 15.8125C13.75 16.0625 13.3438 16.0625 13 15.9062L9 13.75L4.96875 15.9062C4.65625 16.0625 4.21875 16.0625 3.9375 15.8125C3.625 15.5938 3.46875 15.2188 3.53125 14.8438L4.28125 10.2812L1.03125 7.0625C0.75 6.8125 0.65625 6.40625 0.78125 6.0625C0.90625 5.6875 1.21875 5.4375 1.59375 5.375L6.09375 4.71875L8.09375 0.5625C8.25 0.21875 8.59375 0 9 0C9.375 0 9.71875 0.21875 9.875 0.5625L11.9062 4.71875Z" fill="#AF8C3E"/>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9062 4.71875L16.375 5.375C16.75 5.4375 17.0625 5.6875 17.1875 6.0625C17.3125 6.40625 17.2188 6.8125 16.9375 7.0625L13.6875 10.2812L14.4688 14.8438C14.5312 15.2188 14.375 15.5938 14.0625 15.8125C13.75 16.0625 13.3438 16.0625 13 15.9062L9 13.75L4.96875 15.9062C4.65625 16.0625 4.21875 16.0625 3.9375 15.8125C3.625 15.5938 3.46875 15.2188 3.53125 14.8438L4.28125 10.2812L1.03125 7.0625C0.75 6.8125 0.65625 6.40625 0.78125 6.0625C0.90625 5.6875 1.21875 5.4375 1.59375 5.375L6.09375 4.71875L8.09375 0.5625C8.25 0.21875 8.59375 0 9 0C9.375 0 9.71875 0.21875 9.875 0.5625L11.9062 4.71875Z" fill="#E7E7EB"/>
                                        </svg>                                        
                                    </li>
                                    <li>
                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9062 4.71875L16.375 5.375C16.75 5.4375 17.0625 5.6875 17.1875 6.0625C17.3125 6.40625 17.2188 6.8125 16.9375 7.0625L13.6875 10.2812L14.4688 14.8438C14.5312 15.2188 14.375 15.5938 14.0625 15.8125C13.75 16.0625 13.3438 16.0625 13 15.9062L9 13.75L4.96875 15.9062C4.65625 16.0625 4.21875 16.0625 3.9375 15.8125C3.625 15.5938 3.46875 15.2188 3.53125 14.8438L4.28125 10.2812L1.03125 7.0625C0.75 6.8125 0.65625 6.40625 0.78125 6.0625C0.90625 5.6875 1.21875 5.4375 1.59375 5.375L6.09375 4.71875L8.09375 0.5625C8.25 0.21875 8.59375 0 9 0C9.375 0 9.71875 0.21875 9.875 0.5625L11.9062 4.71875Z" fill="#E7E7EB"/>
                                        </svg>                                        
                                    </li>
                                </ul>
                            </div>
                            <a class="selling__btn" href="resturent.html">View More<i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div class="selling__item mb-30">
                        <div class="selling__item-thumb">
                            <img src="template/assets/imgs/inner-page-img/selling-img-3.png" alt="img not found"/>
                        </div>
                        <div class="selling__item-content">
                            <div class="selling__item-content-title-box">
                                <h4 class="title"><a href="resturent.html">CHICKEN SANDWICH</a></h4>
                                <div class="icon">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.25 22.5C21.913 22.5 22.5489 22.7634 23.0178 23.2322C23.4866 23.7011 23.75 24.337 23.75 25C23.75 25.663 23.4866 26.2989 23.0178 26.7678C22.5489 27.2366 21.913 27.5 21.25 27.5C20.587 27.5 19.9511 27.2366 19.4822 26.7678C19.0134 26.2989 18.75 25.663 18.75 25C18.75 23.6125 19.8625 22.5 21.25 22.5ZM1.25 2.5H5.3375L6.5125 5H25C25.3315 5 25.6495 5.1317 25.8839 5.36612C26.1183 5.60054 26.25 5.91848 26.25 6.25C26.25 6.4625 26.1875 6.675 26.1 6.875L21.625 14.9625C21.2 15.725 20.375 16.25 19.4375 16.25H10.125L9 18.2875L8.9625 18.4375C8.9625 18.5204 8.99542 18.5999 9.05403 18.6585C9.11263 18.7171 9.19212 18.75 9.275 18.75H23.75V21.25H8.75C8.08696 21.25 7.45107 20.9866 6.98223 20.5178C6.51339 20.0489 6.25 19.413 6.25 18.75C6.25 18.3125 6.3625 17.9 6.55 17.55L8.25 14.4875L3.75 5H1.25V2.5ZM8.75 22.5C9.41304 22.5 10.0489 22.7634 10.5178 23.2322C10.9866 23.7011 11.25 24.337 11.25 25C11.25 25.663 10.9866 26.2989 10.5178 26.7678C10.0489 27.2366 9.41304 27.5 8.75 27.5C8.08696 27.5 7.45107 27.2366 6.98223 26.7678C6.51339 26.2989 6.25 25.663 6.25 25C6.25 23.6125 7.3625 22.5 8.75 22.5ZM20 13.75L23.475 7.5H7.675L10.625 13.75H20Z" fill="white"/>
                                    </svg>                                        
                                </div>
                            </div>
                            <p class="dec">Fast food is a popular category of emphasizes quick a service and convenience</p>
                            <div class="selling__item-content-dolar-box">
                                <h4 class="dolar"><span>$</span>3.25</h4>
                                <div class="icon">
                                    <i class="fa-regular fa-heart"></i>
                                </div>
                            </div>
                            <div class="selling__item-content-star-list">
                                <ul>
                                    <li>
                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9062 4.71875L16.375 5.375C16.75 5.4375 17.0625 5.6875 17.1875 6.0625C17.3125 6.40625 17.2188 6.8125 16.9375 7.0625L13.6875 10.2812L14.4688 14.8438C14.5312 15.2188 14.375 15.5938 14.0625 15.8125C13.75 16.0625 13.3438 16.0625 13 15.9062L9 13.75L4.96875 15.9062C4.65625 16.0625 4.21875 16.0625 3.9375 15.8125C3.625 15.5938 3.46875 15.2188 3.53125 14.8438L4.28125 10.2812L1.03125 7.0625C0.75 6.8125 0.65625 6.40625 0.78125 6.0625C0.90625 5.6875 1.21875 5.4375 1.59375 5.375L6.09375 4.71875L8.09375 0.5625C8.25 0.21875 8.59375 0 9 0C9.375 0 9.71875 0.21875 9.875 0.5625L11.9062 4.71875Z" fill="#AF8C3E"/>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9062 4.71875L16.375 5.375C16.75 5.4375 17.0625 5.6875 17.1875 6.0625C17.3125 6.40625 17.2188 6.8125 16.9375 7.0625L13.6875 10.2812L14.4688 14.8438C14.5312 15.2188 14.375 15.5938 14.0625 15.8125C13.75 16.0625 13.3438 16.0625 13 15.9062L9 13.75L4.96875 15.9062C4.65625 16.0625 4.21875 16.0625 3.9375 15.8125C3.625 15.5938 3.46875 15.2188 3.53125 14.8438L4.28125 10.2812L1.03125 7.0625C0.75 6.8125 0.65625 6.40625 0.78125 6.0625C0.90625 5.6875 1.21875 5.4375 1.59375 5.375L6.09375 4.71875L8.09375 0.5625C8.25 0.21875 8.59375 0 9 0C9.375 0 9.71875 0.21875 9.875 0.5625L11.9062 4.71875Z" fill="#AF8C3E"/>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9062 4.71875L16.375 5.375C16.75 5.4375 17.0625 5.6875 17.1875 6.0625C17.3125 6.40625 17.2188 6.8125 16.9375 7.0625L13.6875 10.2812L14.4688 14.8438C14.5312 15.2188 14.375 15.5938 14.0625 15.8125C13.75 16.0625 13.3438 16.0625 13 15.9062L9 13.75L4.96875 15.9062C4.65625 16.0625 4.21875 16.0625 3.9375 15.8125C3.625 15.5938 3.46875 15.2188 3.53125 14.8438L4.28125 10.2812L1.03125 7.0625C0.75 6.8125 0.65625 6.40625 0.78125 6.0625C0.90625 5.6875 1.21875 5.4375 1.59375 5.375L6.09375 4.71875L8.09375 0.5625C8.25 0.21875 8.59375 0 9 0C9.375 0 9.71875 0.21875 9.875 0.5625L11.9062 4.71875Z" fill="#AF8C3E"/>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9062 4.71875L16.375 5.375C16.75 5.4375 17.0625 5.6875 17.1875 6.0625C17.3125 6.40625 17.2188 6.8125 16.9375 7.0625L13.6875 10.2812L14.4688 14.8438C14.5312 15.2188 14.375 15.5938 14.0625 15.8125C13.75 16.0625 13.3438 16.0625 13 15.9062L9 13.75L4.96875 15.9062C4.65625 16.0625 4.21875 16.0625 3.9375 15.8125C3.625 15.5938 3.46875 15.2188 3.53125 14.8438L4.28125 10.2812L1.03125 7.0625C0.75 6.8125 0.65625 6.40625 0.78125 6.0625C0.90625 5.6875 1.21875 5.4375 1.59375 5.375L6.09375 4.71875L8.09375 0.5625C8.25 0.21875 8.59375 0 9 0C9.375 0 9.71875 0.21875 9.875 0.5625L11.9062 4.71875Z" fill="#E7E7EB"/>
                                        </svg>                                        
                                    </li>
                                    <li>
                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9062 4.71875L16.375 5.375C16.75 5.4375 17.0625 5.6875 17.1875 6.0625C17.3125 6.40625 17.2188 6.8125 16.9375 7.0625L13.6875 10.2812L14.4688 14.8438C14.5312 15.2188 14.375 15.5938 14.0625 15.8125C13.75 16.0625 13.3438 16.0625 13 15.9062L9 13.75L4.96875 15.9062C4.65625 16.0625 4.21875 16.0625 3.9375 15.8125C3.625 15.5938 3.46875 15.2188 3.53125 14.8438L4.28125 10.2812L1.03125 7.0625C0.75 6.8125 0.65625 6.40625 0.78125 6.0625C0.90625 5.6875 1.21875 5.4375 1.59375 5.375L6.09375 4.71875L8.09375 0.5625C8.25 0.21875 8.59375 0 9 0C9.375 0 9.71875 0.21875 9.875 0.5625L11.9062 4.71875Z" fill="#E7E7EB"/>
                                        </svg>                                        
                                    </li>
                                </ul>
                            </div>
                            <a class="selling__btn" href="resturent.html">View More<i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
    <Footer />

    </>
  )
}

export default Restaurant
