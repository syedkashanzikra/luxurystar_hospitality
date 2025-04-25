import React from 'react'

const Room_Details = () => {
  return (
    <>
      <div class="breadcrumb__area dark-green breadcrumb-space overflow-hidden position-relative z-1" data-background="assets/imgs/breadcrumb/breadcrumb.png">
        <div class="breadcrumb__shapes">
            <img class="upDown" src="assets/imgs/breadcrumb/shape.png" alt="img not found"/>
        </div>
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-12">
                    <div class="breadcrumb__content">
                        <div class="breadcrumb__title-wrapper mb-15 mb-sm-10 mb-xs-5">
                            <h1 class="breadcrumb__title color-white wow fadeInLeft animated" data-wow-delay=".2s">Room Details</h1>
                        </div>
                        <div class="breadcrumb__menu wow fadeInLeft animated" data-wow-delay=".4s">
                            <nav>
                                <ul>
                                    <li><span><a href="index.html">Home</a></span></li>
                                    <li class="active"><span>Room Details</span></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section class="room-details__area section-space">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="room-details__wrapper">
                        <div class="room-details__thumb">
                            <img src="assets/imgs/inner-page-img/room-detils-img-1.png" alt="img not found"/>
                        </div>
                        <div class="room-details__star-wrap mt-30">
                            <div class="room-details__cat">
                                <div class="room-details__cat-item">
                                    <svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 15.1654V9.33203C3.5 8.9867 3.59956 8.61881 3.79867 8.22836C3.99778 7.83792 4.28711 7.5447 4.66667 7.3487V4.66536C4.66667 4.00736 4.89106 3.45398 5.33983 3.0052C5.78861 2.55642 6.342 2.33203 7 2.33203H12.25C12.6521 2.33203 12.9955 2.41486 13.2802 2.58053C13.5648 2.7462 13.8048 2.97448 14 3.26536C14.196 2.9737 14.4359 2.74542 14.7198 2.58053C15.0037 2.41564 15.3471 2.33281 15.75 2.33203H21C21.658 2.33203 22.2114 2.55642 22.6602 3.0052C23.1089 3.45398 23.3333 4.00736 23.3333 4.66536V7.3487C23.7129 7.5447 24.0022 7.83792 24.2013 8.22836C24.4004 8.61881 24.5 8.9867 24.5 9.33203V15.1654H23.3333V12.832H4.66667V15.1654H3.5ZM14.5833 6.9987H22.1667V4.66536C22.1667 4.33481 22.0547 4.05792 21.8307 3.8347C21.6067 3.61148 21.3298 3.49948 21 3.4987H15.75C15.4194 3.4987 15.1426 3.6107 14.9193 3.8347C14.6961 4.0587 14.5841 4.33559 14.5833 4.66536V6.9987ZM5.83333 6.9987H13.4167V4.66536C13.4167 4.33481 13.3047 4.05792 13.0807 3.8347C12.8567 3.61148 12.5798 3.49948 12.25 3.4987H7C6.66944 3.4987 6.39256 3.6107 6.16933 3.8347C5.94611 4.0587 5.83411 4.33559 5.83333 4.66536V6.9987ZM4.66667 11.6654H23.3333V9.33203C23.3333 9.00148 23.2213 8.72459 22.9973 8.50136C22.7733 8.27814 22.4964 8.16614 22.1667 8.16536H5.83333C5.50278 8.16536 5.22589 8.27736 5.00267 8.50136C4.77944 8.72536 4.66744 9.00225 4.66667 9.33203V11.6654Z" fill="#0E1730"/>
                                    </svg>
                                    <span>3 Bed</span>                                      
                                </div>
                                <div class="room-details__cat-item">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 13.083C3 13.006 3 12.967 3.002 12.935C3.01775 12.6927 3.12111 12.4645 3.29279 12.2928C3.46446 12.1211 3.69273 12.0178 3.935 12.002C3.968 12 4.005 12 4.083 12H19.917C19.994 12 20.032 12 20.065 12.002C20.3073 12.0178 20.5355 12.1211 20.7072 12.2928C20.8789 12.4645 20.9822 12.6927 20.998 12.935C21 12.967 21 13.005 21 13.083C21 13.478 21 13.676 20.986 13.898C20.777 17.185 17.983 20.087 14.706 20.418C14.485 20.441 14.356 20.446 14.098 20.456C13.399 20.4836 12.6995 20.4982 12 20.5C11.35 20.5 10.636 20.483 9.902 20.456C9.644 20.446 9.515 20.441 9.295 20.419C6.017 20.087 3.223 17.185 3.015 13.898C3 13.676 3 13.478 3 13.083Z" stroke="#0E1730" stroke-width="1.5"/>
                                        <path d="M6 20L5 22M18 20L19 22M2 12H22" stroke="#0E1730" stroke-width="1.5" stroke-linecap="round"/>
                                        <path d="M2.25 13C2.25 13.1989 2.32902 13.3897 2.46967 13.5303C2.61032 13.671 2.80109 13.75 3 13.75C3.19891 13.75 3.38968 13.671 3.53033 13.5303C3.67098 13.3897 3.75 13.1989 3.75 13H2.25ZM6.346 8.742L5.648 9.017C5.68492 9.11034 5.7402 9.19532 5.81057 9.2669C5.88094 9.33848 5.96496 9.39521 6.05765 9.43373C6.15035 9.47224 6.24983 9.49176 6.3502 9.49112C6.45058 9.49048 6.5498 9.46969 6.642 9.43L6.346 8.742ZM12.306 6.175L12.603 6.865C12.782 6.78791 12.9239 6.64417 12.9988 6.46423C13.0736 6.2843 13.0755 6.08229 13.004 5.901L12.306 6.175ZM3.75 13V4.385H2.25V13H3.75ZM5.385 2.75C6.054 2.75 6.655 3.157 6.903 3.778L8.296 3.22C8.0634 2.63832 7.66187 2.14067 7.14318 1.78935C6.6245 1.43804 6.01246 1.25018 5.386 1.25L5.385 2.75ZM3.75 4.385C3.75 3.482 4.482 2.75 5.385 2.75L5.386 1.25C4.55455 1.25 3.75615 1.58029 3.16822 2.16822C2.58029 2.75615 2.25 3.55355 2.25 4.385H3.75ZM6.903 3.778L7.283 4.726L8.675 4.169L8.296 3.22L6.903 3.778ZM7.043 8.467C6.79145 7.82588 6.79646 7.11252 7.057 6.475L5.667 5.91C5.26127 6.90461 5.2551 8.01725 5.648 9.017L7.043 8.467ZM12.01 5.487L6.049 8.053L6.642 9.43L12.602 6.864L12.01 5.487ZM10.282 5.068C10.904 5.334 11.367 5.837 11.609 6.45L13.004 5.901C12.8133 5.40923 12.5265 4.95937 12.1605 4.57959C11.7944 4.19981 11.3564 3.89672 10.872 3.688L10.282 5.068ZM7.057 6.475C7.29156 5.88441 7.737 5.40291 8.307 5.122L7.651 3.774C6.74832 4.21621 6.0415 4.97719 5.667 5.91L7.057 6.475ZM8.307 5.122C8.61284 4.97104 8.94775 4.88813 9.28869 4.87898C9.62963 4.86983 9.96851 4.93366 10.282 5.068L10.872 3.688C10.3607 3.46936 9.80813 3.36477 9.25221 3.37944C8.69629 3.39411 8.15009 3.5287 7.651 3.774L8.307 5.122Z" fill="#0E1730"/>
                                    </svg>                                        
                                    <span>1 Bath</span>                                      
                                </div>
                                <div class="room-details__cat-item">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 13V21M8 13V21M16 13V21M12 13V21M20 13V21M2 21H22M2 13H22M18 10V3.6C18 3.44087 17.9368 3.28826 17.8243 3.17574C17.7117 3.06321 17.5591 3 17.4 3H6.6C6.44087 3 6.28826 3.06321 6.17574 3.17574C6.06321 3.28826 6 3.44087 6 3.6V10" stroke="#0E1730" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>                                        
                                    <span>2 Balcony</span>                                      
                                </div>
                            </div>
                            <div class="room-details__content-box-star">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-thin fa-star"></i>
                            </div>
                        </div>
                        <h2 class="room-details__title mt-20">Unlock delightful experiences with our hotel bookings</h2>
                        <h3 class="room-details__dolar-title mt-20 mb-20"><span class="dolar">$</span>30.00/<span class="span">Night</span></h3>
                        <p class="room-details__dec">Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing .Lor Ipsum is simply dummy text of the printing.Lorem Ipsum is simply dummy text of the printing Lorem</p>
                        <div class="room-details__list">
                            <div class="room-details__list-item">
                                <ul>
                                    <li><i class="fa-solid fa-chevrons-right"></i>Experience luxury through our hotel booking</li>
                                    <li class="mt-15 mb-15"><i class="fa-solid fa-chevrons-right"></i>Hassle-free hotel booking at your fingertips.</li>
                                    <li><i class="fa-solid fa-chevrons-right"></i>Make memories, book your hotel stay today</li>
                                </ul>
                            </div>
                            <div class="room-details__list-item">
                                <ul>
                                    <li><i class="fa-solid fa-chevrons-right"></i>Your travel companion for hotel bookings.</li>
                                    <li class="mt-15 mb-15"><i class="fa-solid fa-chevrons-right"></i>Discover your dream accommodation  booking </li>
                                    <li><i class="fa-solid fa-chevrons-right"></i>Book now, relax later - hotel booking made easy.</li>
                                </ul>
                            </div>
                        </div>
                        <h3 class="room-details__sm-title mt-20 mb-20">Family friendly Amenities</h3>
                        <p class="room-details__sm-dec">Plastic surgery involves various procedures aimed at enhancing or reconstructing physical features to improve appearan function Common surgeries include breast augmentation, rhinoplasty, liposuction</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="room-details__sidebar">
                        <h3 class="room-details__sidebar-title">Reserve</h3>
                        <h4 class="room-details__sidebar-dolar">$50.00/<span>Night</span></h4>
                        <div class="room-details__sidebar-item">
                            <div class="room-details-seclect">
                                <h4 class="title">Check in</h4>
                            </div>
                            <div class="sidebar-right-info">
                                <input class="room-details__form" id="datepicker" name="date" type="text" placeholder="dd/mm/yyyy"/>
                            </div>
                        </div>                       
                        <div class="room-details__sidebar-item">
                            <div class="room-details-seclect">
                                <h4 class="title">Check Out</h4>
                            </div>
                            <div class="sidebar-right-info">
                                <input class="room-details__form" id="datepicker1" name="date" type="text" placeholder="dd/mm/yyyy"/>
                            </div>
                        </div>
                        <div class="room-details__sidebar-item">
                            <div class="room-details-seclect">
                                <h4 class="title">Room</h4>
                            </div>
                            <div class="sidebar-right-info">
                                <div class="nice-select select-control form-control country" tabindex="0"><span class="current">01</span>
                                    <ul class="list">
                                        <li data-value="" class="option selected focus">01</li>
                                        <li data-value="vdt" class="option">02</li>
                                        <li data-value="vdt" class="option">03</li>
                                        <li data-value="can" class="option">04</li>
                                        <li data-value="uk" class="option">05</li>
                                    </ul>
                                </div>
                            </div>
                        </div>                        
                        <div class="room-details__sidebar-item">
                            <div class="room-details-seclect">
                                <h4 class="title">Adults</h4>
                            </div>
                            <div class="sidebar-right-info">
                                <div class="nice-select select-control form-control country" tabindex="0"><span class="current">01</span>
                                    <ul class="list">
                                        <li data-value="" class="option selected focus">01</li>
                                        <li data-value="vdt" class="option">02</li>
                                        <li data-value="vdt" class="option">03</li>
                                        <li data-value="can" class="option">04</li>
                                        <li data-value="uk" class="option">05</li>
                                    </ul>
                                </div>
                            </div>
                        </div>                        
                        <div class="room-details__sidebar-item">
                            <div class="room-details-seclect">
                                <h4 class="title">Children</h4>
                            </div>
                            <div class="sidebar-right-info">
                                <div class="nice-select select-control form-control country" tabindex="0"><span class="current">01</span>
                                    <ul class="list">
                                        <li data-value="" class="option selected focus">01</li>
                                        <li data-value="vdt" class="option">02</li>
                                        <li data-value="vdt" class="option">03</li>
                                        <li data-value="can" class="option">04</li>
                                        <li data-value="uk" class="option">05</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <h3 class="room-details__sidebar-title pt-20 pb-30">Extra Service</h3>
                        <div class="room-details__sidebar-item">
                            <div class="room-details-seclect">
                                <h4 class="title">Room Clean</h4>
                            </div>
                            <div class="sidebar-right-info">
                                <div class="nice-select select-control form-control country" tabindex="0"><span class="current">$12/Night</span>
                                    <ul class="list">
                                        <li data-value="" class="option selected focus">$12/Night</li>
                                        <li data-value="vdt" class="option">$24/Night</li>
                                        <li data-value="vdt" class="option">$36/Night</li>
                                        <li data-value="can" class="option">$50/Night</li>
                                        <li data-value="uk" class="option">$99/Night</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="room-details__sidebar-item">
                            <div class="room-details-seclect">
                                <h4 class="title">Massage</h4>
                            </div>
                            <div class="sidebar-right-info">
                                <div class="nice-select select-control form-control country" tabindex="0"><span class="current">$30/Person</span>
                                    <ul class="list">
                                        <li data-value="" class="option selected focus">$30/Person</li>
                                        <li data-value="vdt" class="option">$45/Person</li>
                                        <li data-value="vdt" class="option">$50/Person</li>
                                        <li data-value="can" class="option">$60/Person</li>
                                        <li data-value="uk" class="option">$70/Person</li>
                                    </ul>
                                </div>
                            </div>
                        </div>                       
                        <div class="room-details__sidebar-item">
                            <div class="room-details-seclect">
                                <h4 class="title">Day Spa</h4>
                            </div>
                            <div class="sidebar-right-info">
                                <div class="nice-select select-control form-control country" tabindex="0"><span class="current">$45/Person</span>
                                    <ul class="list">
                                        <li data-value="" class="option selected focus">$45/Person</li>
                                        <li data-value="vdt" class="option">$50/Person</li>
                                        <li data-value="can" class="option">$60/Person</li>
                                        <li data-value="uk" class="option">$70/Person</li>
                                        <li data-value="uk" class="option">$90/Person</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="room-details__total__info">
                            <h4>Total Cost <i class="fa-regular fa-angle-down"></i></h4>
                            <h4>$299</h4>
                        </div>
                        <div class="room-details__submitbtn">
                            <a href="contact.html"> Book Now <i class="fa-regular fa-arrow-right"></i> </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-12">
                <div class="room-details__content-box mt-30 mb-40">
                    <div class="room-details__content-box-item">
                        <div class="icon">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M42 17.793H18V29.793H42V17.793ZM33 24.793H27V22.793H33V24.793Z" fill="#AF8C3E"/>
                                <path d="M18 31.793H42V35.793H18V31.793Z" fill="#AF8C3E"/>
                                <path d="M37.5779 38.793L38.9921 37.3788L42.406 40.7927L40.9918 42.2069L37.5779 38.793Z" fill="#AF8C3E"/>
                                <path d="M31.5779 38.793L32.9921 37.3788L36.406 40.7927L34.9918 42.2069L31.5779 38.793Z" fill="#AF8C3E"/>
                                <path d="M17.5801 40.7891L20.994 37.3752L22.4082 38.7894L18.9943 42.2033L17.5801 40.7891Z" fill="#AF8C3E"/>
                                <path d="M23.5781 40.793L26.992 37.3791L28.4062 38.7933L24.9923 42.2072L23.5781 40.793Z" fill="#AF8C3E"/>
                            </svg>                                        
                        </div>
                        <h4 class="title">Spa Center</h4>
                    </div>
                    <div class="room-details__content-box-item">
                        <div class="icon">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 20H23.02C23.5605 20 24 20.4395 24 20.9805V22H26V20.9805C26 19.3369 24.6631 18 23.02 18H20V26H18V27C18 32.37 19.14 36.85 21.2 39.6L21.5 40H24V42H26V40H34V42H36V40H38.62L38.89 39.45C40.91 35.42 42 32.24 42 27V26H22V20ZM33.293 31.293L32.5859 30.5859L33.9995 29.1719L34.707 29.8789C35.541 30.7119 36 31.8203 36 33C36 34.1797 35.541 35.2881 34.707 36.1211L33.9995 36.8281L32.5859 35.4141L33.293 34.707C33.749 34.251 34 33.6445 34 33C34 32.3555 33.749 31.749 33.293 31.293ZM25.293 29.8789L26.0005 29.1719L27.4141 30.5859L26.707 31.293C26.251 31.749 26 32.3555 26 33C26 33.6445 26.251 34.251 26.707 34.707L27.4141 35.4141L26.0005 36.8281L25.293 36.1211C24.459 35.2881 24 34.1797 24 33C24 31.8203 24.459 30.7119 25.293 29.8789Z" fill="#AF8C3E"/>
                            </svg>                                                                               
                        </div>
                        <h4 class="title">Extra Beds</h4>
                    </div>
                    <div class="room-details__content-box-item">
                        <div class="icon">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 29.88V42H24V29.88C26.28 29.32 28 26.9 28 24C28 20.69 25.76 18 23 18C20.24 18 18 20.69 18 24C18 26.9 19.72 29.32 22 29.88Z" fill="#AF8C3E"/>
                                <path d="M35 29.65V42H37V29.65C40.06 28.17 42 25.11 42 21.67V18H40V21.67C40 23.97 38.87 26.07 37 27.34V18H35V27.34C33.14 26.09 32 23.99 32 21.67V18H30V21.67C30 25.09 31.92 28.14 35 29.65Z" fill="#AF8C3E"/>
                            </svg>                                                                                                                     
                        </div>
                        <h4 class="title">Best Hotel</h4>
                    </div>
                    <div class="room-details__content-box-item">
                        <div class="icon">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M37.081 22.709L38.381 23.9991H29.791V25.9991H38.381L37.081 27.2891L38.501 28.709L42.201 24.9991L38.501 21.2891L37.081 22.709Z" fill="#AF8C3E"/>
                                <path d="M23.7313 42H27.7913V34H25.2813C23.2813 31.28 23.2813 28.72 25.2813 26H27.7913V18H23.7313C21.4513 18 19.4613 19.55 18.8713 21.78C17.4413 27.23 17.4413 32.77 18.8713 38.22C19.4613 40.45 21.4513 42 23.7313 42Z" fill="#AF8C3E"/>
                                <path d="M34.5009 32.709L33.0808 31.2891L29.3809 34.9991L33.0808 38.709L34.5009 37.2891L33.2008 35.9991H41.7908V33.9991H33.2008L34.5009 32.709Z" fill="#AF8C3E"/>
                            </svg>                                                                                                                                                            
                        </div>
                        <h4 class="title">Juice bar</h4>
                    </div>
                </div>
                <h4 class="room-details__list-title">Whats Included In This Suite?</h4>
                <div class="room-details__sm-list mt-30">
                    <div class="room-details__sm-list-item">
                        <ul>
                            <li><i class="fa-thin fa-chevrons-right"></i>Privete Balcony</li>
                            <li class="mt-15 mb-15"><i class="fa-thin fa-chevrons-right"></i>130*180 cm Elite Bed</li>
                            <li><i class="fa-thin fa-chevrons-right"></i>Room Refresh Service</li>
                            <li class="mt-15"><i class="fa-thin fa-chevrons-right"></i>Morning Wake-Up Call</li>
                        </ul>
                    </div>
                    <div class="room-details__sm-list-item">
                        <ul>
                            <li><i class="fa-thin fa-chevrons-right"></i>Welcome Package Delivery</li>
                            <li class="mt-15 mb-15"><i class="fa-thin fa-chevrons-right"></i>Kid-Friendly Amenities</li>
                            <li><i class="fa-thin fa-chevrons-right"></i>Pet-Friendly Accommodations</li>
                            <li class="mt-15"><i class="fa-thin fa-chevrons-right"></i>Extra Beds</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Room_Details
