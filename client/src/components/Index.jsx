import React from 'react'

export const Index = () => {
  return (
    <>
        <section className="banner room__area">
        <div className="bg-color"></div>
        <div className="container">
            <div className="row">
                <div className="room__cheek-box room__cheek-box-3">
                    <div className="room__cheek-box-item room__cheek-box-item-3">
                        <div className="room-seclect">
                            <div className="input-datepicker">
                                <input id="datepicker" name="date" type="text" placeholder="Cheek In"/>
                            </div>
                        </div>
                        <div className="room__cheek-box-item-icon">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.9602 5.5145C18.8417 3.54387 17.1962 2 15.2144 2H14.2495V1.25C14.2495 1.05109 14.1705 0.860322 14.0298 0.71967C13.8892 0.579018 13.6984 0.5 13.4995 0.5C13.3006 0.5 13.1098 0.579018 12.9692 0.71967C12.8285 0.860322 12.7495 1.05109 12.7495 1.25V2H6.74949V1.25C6.74949 1.05109 6.67048 0.860322 6.52982 0.71967C6.38917 0.579018 6.19841 0.5 5.99949 0.5C5.80058 0.5 5.60982 0.579018 5.46916 0.71967C5.32851 0.860322 5.24949 1.05109 5.24949 1.25V2H4.28462C2.30237 2 0.656869 3.54387 0.538744 5.5145C0.316369 9.221 0.320494 12.9807 0.551119 16.6891C0.668119 18.5724 2.17674 20.081 4.05999 20.198C5.94737 20.3154 7.84824 20.3739 9.74912 20.3739C11.6496 20.3739 13.5509 20.3154 15.4382 20.198C17.3215 20.081 18.8301 18.5724 18.9471 16.6891C19.1781 12.9826 19.1822 9.22325 18.9602 5.5145ZM17.4505 16.5961C17.4157 17.143 17.1828 17.6584 16.7954 18.0459C16.4079 18.4333 15.8925 18.6662 15.3456 18.701C11.6324 18.9316 7.86662 18.9316 4.15337 18.701C3.60652 18.6662 3.09109 18.4333 2.70363 18.0459C2.31617 17.6584 2.08325 17.143 2.04849 16.5961C1.8727 13.7343 1.83303 10.8656 1.92962 8H17.5697C17.6642 10.865 17.6279 13.7461 17.4505 16.5961ZM5.99949 5C6.19841 5 6.38917 4.92098 6.52982 4.78033C6.67048 4.63968 6.74949 4.44891 6.74949 4.25V3.5H12.7495V4.25C12.7495 4.44891 12.8285 4.63968 12.9692 4.78033C13.1098 4.92098 13.3006 5 13.4995 5C13.6984 5 13.8892 4.92098 14.0298 4.78033C14.1705 4.63968 14.2495 4.44891 14.2495 4.25V3.5H15.2144C16.4042 3.5 17.392 4.42437 17.4629 5.60412C17.4805 5.90187 17.488 6.2015 17.5026 6.5H1.99637C2.01137 6.2015 2.01849 5.90187 2.03612 5.60412C2.10699 4.42437 3.09437 3.5 4.28462 3.5H5.24949V4.25C5.24949 4.44891 5.32851 4.63968 5.46916 4.78033C5.60982 4.92098 5.80058 5 5.99949 5Z" fill="#595959"/>
                                <path d="M6 12.5C6.62132 12.5 7.125 11.9963 7.125 11.375C7.125 10.7537 6.62132 10.25 6 10.25C5.37868 10.25 4.875 10.7537 4.875 11.375C4.875 11.9963 5.37868 12.5 6 12.5Z" fill="#595959"/>
                                <path d="M9.75 12.5C10.3713 12.5 10.875 11.9963 10.875 11.375C10.875 10.7537 10.3713 10.25 9.75 10.25C9.12868 10.25 8.625 10.7537 8.625 11.375C8.625 11.9963 9.12868 12.5 9.75 12.5Z" fill="#595959"/>
                                <path d="M6 16.25C6.62132 16.25 7.125 15.7463 7.125 15.125C7.125 14.5037 6.62132 14 6 14C5.37868 14 4.875 14.5037 4.875 15.125C4.875 15.7463 5.37868 16.25 6 16.25Z" fill="#595959"/>
                                <path d="M13.5 12.5C14.1213 12.5 14.625 11.9963 14.625 11.375C14.625 10.7537 14.1213 10.25 13.5 10.25C12.8787 10.25 12.375 10.7537 12.375 11.375C12.375 11.9963 12.8787 12.5 13.5 12.5Z" fill="#595959"/>
                                <path d="M13.5 16.25C14.1213 16.25 14.625 15.7463 14.625 15.125C14.625 14.5037 14.1213 14 13.5 14C12.8787 14 12.375 14.5037 12.375 15.125C12.375 15.7463 12.8787 16.25 13.5 16.25Z" fill="#595959"/>
                                <path d="M9.75 16.25C10.3713 16.25 10.875 15.7463 10.875 15.125C10.875 14.5037 10.3713 14 9.75 14C9.12868 14 8.625 14.5037 8.625 15.125C8.625 15.7463 9.12868 16.25 9.75 16.25Z" fill="#595959"/>
                            </svg>
                        </div>
                    </div>
                    <div className="room__cheek-box-item room__cheek-box-item-3">
                        <div className="room-seclect">
                            <div className="input-datepicker">
                                <input id="datepicker1" name="date" type="text" placeholder="Cheek Out"/>
                            </div>
                        </div>
                        <div className="room__cheek-box-item-icon">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.9602 5.5145C18.8417 3.54387 17.1962 2 15.2144 2H14.2495V1.25C14.2495 1.05109 14.1705 0.860322 14.0298 0.71967C13.8892 0.579018 13.6984 0.5 13.4995 0.5C13.3006 0.5 13.1098 0.579018 12.9692 0.71967C12.8285 0.860322 12.7495 1.05109 12.7495 1.25V2H6.74949V1.25C6.74949 1.05109 6.67048 0.860322 6.52982 0.71967C6.38917 0.579018 6.19841 0.5 5.99949 0.5C5.80058 0.5 5.60982 0.579018 5.46916 0.71967C5.32851 0.860322 5.24949 1.05109 5.24949 1.25V2H4.28462C2.30237 2 0.656869 3.54387 0.538744 5.5145C0.316369 9.221 0.320494 12.9807 0.551119 16.6891C0.668119 18.5724 2.17674 20.081 4.05999 20.198C5.94737 20.3154 7.84824 20.3739 9.74912 20.3739C11.6496 20.3739 13.5509 20.3154 15.4382 20.198C17.3215 20.081 18.8301 18.5724 18.9471 16.6891C19.1781 12.9826 19.1822 9.22325 18.9602 5.5145ZM17.4505 16.5961C17.4157 17.143 17.1828 17.6584 16.7954 18.0459C16.4079 18.4333 15.8925 18.6662 15.3456 18.701C11.6324 18.9316 7.86662 18.9316 4.15337 18.701C3.60652 18.6662 3.09109 18.4333 2.70363 18.0459C2.31617 17.6584 2.08325 17.143 2.04849 16.5961C1.8727 13.7343 1.83303 10.8656 1.92962 8H17.5697C17.6642 10.865 17.6279 13.7461 17.4505 16.5961ZM5.99949 5C6.19841 5 6.38917 4.92098 6.52982 4.78033C6.67048 4.63968 6.74949 4.44891 6.74949 4.25V3.5H12.7495V4.25C12.7495 4.44891 12.8285 4.63968 12.9692 4.78033C13.1098 4.92098 13.3006 5 13.4995 5C13.6984 5 13.8892 4.92098 14.0298 4.78033C14.1705 4.63968 14.2495 4.44891 14.2495 4.25V3.5H15.2144C16.4042 3.5 17.392 4.42437 17.4629 5.60412C17.4805 5.90187 17.488 6.2015 17.5026 6.5H1.99637C2.01137 6.2015 2.01849 5.90187 2.03612 5.60412C2.10699 4.42437 3.09437 3.5 4.28462 3.5H5.24949V4.25C5.24949 4.44891 5.32851 4.63968 5.46916 4.78033C5.60982 4.92098 5.80058 5 5.99949 5Z" fill="#595959"/>
                                <path d="M6 12.5C6.62132 12.5 7.125 11.9963 7.125 11.375C7.125 10.7537 6.62132 10.25 6 10.25C5.37868 10.25 4.875 10.7537 4.875 11.375C4.875 11.9963 5.37868 12.5 6 12.5Z" fill="#595959"/>
                                <path d="M9.75 12.5C10.3713 12.5 10.875 11.9963 10.875 11.375C10.875 10.7537 10.3713 10.25 9.75 10.25C9.12868 10.25 8.625 10.7537 8.625 11.375C8.625 11.9963 9.12868 12.5 9.75 12.5Z" fill="#595959"/>
                                <path d="M6 16.25C6.62132 16.25 7.125 15.7463 7.125 15.125C7.125 14.5037 6.62132 14 6 14C5.37868 14 4.875 14.5037 4.875 15.125C4.875 15.7463 5.37868 16.25 6 16.25Z" fill="#595959"/>
                                <path d="M13.5 12.5C14.1213 12.5 14.625 11.9963 14.625 11.375C14.625 10.7537 14.1213 10.25 13.5 10.25C12.8787 10.25 12.375 10.7537 12.375 11.375C12.375 11.9963 12.8787 12.5 13.5 12.5Z" fill="#595959"/>
                                <path d="M13.5 16.25C14.1213 16.25 14.625 15.7463 14.625 15.125C14.625 14.5037 14.1213 14 13.5 14C12.8787 14 12.375 14.5037 12.375 15.125C12.375 15.7463 12.8787 16.25 13.5 16.25Z" fill="#595959"/>
                                <path d="M9.75 16.25C10.3713 16.25 10.875 15.7463 10.875 15.125C10.875 14.5037 10.3713 14 9.75 14C9.12868 14 8.625 14.5037 8.625 15.125C8.625 15.7463 9.12868 16.25 9.75 16.25Z" fill="#595959"/>
                            </svg>  
                        </div>
                    </div>
                    <div className="room__cheek-box-item room__cheek-box-item-3">
                        <div className="room-seclect">
                            <form>
                                <select id="nice2" className="nice-2">
                                    <option>Rooms</option>
                                    <option>Room 1</option>
                                    <option>Room 2</option>
                                    <option>Room 3</option>
                                </select>
                            </form>
                        </div>
                    </div>
                    <div className="room__cheek-box-item room__cheek-box-item-3">
                        <div className="room-seclect">
                            <form>
                                <select id="nice1" className="nice-2">
                                    <option>Guests</option>
                                    <option>Guest 1</option>
                                    <option>Guest 2</option>
                                    <option>Guest 3</option>
                                </select>
                            </form>
                        </div>
                    </div>
                    <a className="room__btn2" href="room.html">Search Now</a>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 first-p-0">
                    <div className="banner__content1">
                        <h6 className="subtitle">explore new Experience</h6>
                        <h1 className="title">Making travel <br/> dreams come true us</h1>
                        <p className="dec">These cases are perfectly simple and easy to distinguish. In a free hour, when <br/> our power of choice is untrammelled</p>
                            <div className="banner__bottom-wrapper">
                                <div className="banner__slider__arrow">
                                    <button className="banner__slider__arrow-prev arrow-nav d-flex align-items-center justify-content-center wow clip-t-b">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17 9H0.999999" stroke="var(--rr-heading-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M9 1L1 9L9 17" stroke="var(--rr-heading-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                    
                                    <button className="banner__slider__arrow-next arrow-nav right-arrow d-flex align-items-center justify-content-center wow clip-t-b">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9H17" stroke="var(--rr-heading-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M9 1L17 9L9 17" stroke="var(--rr-heading-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                                <div className="swiper-container gallery-thumbs">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide"><img src="assets/imgs/banner-1/slide-4.png" alt=""/></div>
                                        <div className="swiper-slide"><img src="assets/imgs/banner-1/slide-3.png" alt=""/></div>
                                        <div className="swiper-slide"><img src="assets/imgs/banner-1/slide-5.png" alt=""/></div>
                                        <div className="swiper-slide"><img src="assets/imgs/banner-1/slide-4.png" alt=""/></div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="col-lg-6 p-0">
                    <div className="swiper banner__slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="banner__item">
                                    <div className="banner__item-thumb">
                                        <img src="assets/imgs/banner-1/slide-2.png" alt=" img not found"/>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="banner__item">
                                    <div className="banner__item-thumb">
                                        <img src="assets/imgs/banner-1/slide-1.png" alt=" img not found"/>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="banner__item">
                                    <div className="banner__item-thumb">
                                        <img src="assets/imgs/banner-1/slide.png" alt=" img not found"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section className="hotel-area section-space-top">
        <div className="hotel__area p-relative fix grey-bg-2 pb-35 rr-pro-tab1 rr-el-section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="hotel__tab mb-60">
                            <nav className="hotel__menu d-flex justify-content-between">
                                <h2 className="hotel__title wow fadeInLeft animated" data-wow-delay=".3s">Our Hotel & Resort</h2>
                                <div className="hotel__nav-tab nav nav-tab justify-content-center" id="nav-tab" role="tablist">
                                    <button className="nav-link rr-el-rep-filterBtn active" id="nav-0-tab" data-bs-toggle="tab" data-bs-target="#nav-0" type="button" role="tab" aria-controls="nav-0" aria-selected="true">All</button>
                                    <button className="nav-link rr-el-rep-filterBtn " id="nav-1-tab" data-bs-toggle="tab" data-bs-target="#nav-1" type="button" role="tab" aria-controls="nav-1" aria-selected="false">Hotel</button>
                                    <button className="nav-link rr-el-rep-filterBtn " id="nav-2-tab" data-bs-toggle="tab" data-bs-target="#nav-2" type="button" role="tab" aria-controls="nav-2" aria-selected="false">Restaurant</button>
                                    <button className="nav-link rr-el-rep-filterBtn " id="nav-3-tab" data-bs-toggle="tab" data-bs-target="#nav-3" type="button" role="tab" aria-controls="nav-2" aria-selected="false">Room</button>
                                    <button className="nav-link rr-el-rep-filterBtn " id="nav-4-tab" data-bs-toggle="tab" data-bs-target="#nav-4" type="button" role="tab" aria-controls="nav-2" aria-selected="false">Beach</button>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade active show" id="nav-0" role="tabpanel" aria-labelledby="nav-0-tab" tabindex="0">
                            <div className="hotel__wrapper">
                                <div className="row mb-minus-30">
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div className="hotel__item rr-pro-img mb-30">
                                            <div className="hotel__thumb fix p-relative">
                                                <img  src="assets/imgs/home-1/room-img1.png"  alt="img not found"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div className="hotel__item rr-pro-img mb-30">
                                            <div className="hotel__thumb fix p-relative">
                                                <img  src="assets/imgs/home-1/room-img2.png"  alt="img not found"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div className="hotel__item rr-pro-img mb-30">
                                            <div className="hotel__thumb fix p-relative">
                                                <img  src="assets/imgs/home-1/room-img3.png"  alt="img not found"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div className="hotel__item rr-pro-img mb-30">
                                            <div className="hotel__thumb fix p-relative">
                                                <img  src="assets/imgs/home-1/room-img4.png"  alt="img not found"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade " id="nav-1" role="tabpanel" aria-labelledby="nav-1-tab" tabindex="0">
                            <div className="hotel__wrapper">
                                <div className="row">

                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div className="hotel__item rr-pro-img mb-30">
                                            <div className="hotel__thumb fix p-relative">
                                                <img  src="assets/imgs/home-1/room-img4.png"  alt="img not found"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div className="hotel__item rr-pro-img mb-30">
                                            <div className="hotel__thumb fix p-relative">
                                                <img  src="assets/imgs/home-1/room-img3.png"  alt="img not found"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div className="hotel__item rr-pro-img mb-30">
                                            <div className="hotel__thumb fix p-relative">
                                                <img  src="assets/imgs/home-1/room-img2.png"  alt="img not found"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div className="hotel__item rr-pro-img mb-30">
                                            <div className="hotel__thumb fix p-relative">
                                                <img  src="assets/imgs/home-1/room-img1.png"  alt="img not found"/>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade " id="nav-2" role="tabpanel" aria-labelledby="nav-2-tab" tabindex="0">
                            <div className="hotel__wrapper">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div className="hotel__item rr-pro-img mb-30">
                                            <div className="hotel__thumb fix p-relative">
                                                <img  src="assets/imgs/home-1/room-img3.png"  alt="img not found"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div className="hotel__item rr-pro-img mb-30">
                                            <div className="hotel__thumb fix p-relative">
                                                <img  src="assets/imgs/home-1/room-img4.png"  alt="img not found"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div className="hotel__item rr-pro-img mb-30">
                                            <div className="hotel__thumb fix p-relative">
                                                <img  src="assets/imgs/home-1/room-img1.png"  alt="img not found"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div className="hotel__item rr-pro-img mb-30">
                                            <div className="hotel__thumb fix p-relative">
                                                <img  src="assets/imgs/home-1/room-img2.png"  alt="img not found"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade " id="nav-3" role="tabpanel" aria-labelledby="nav-2-tab" tabindex="0">
                            <div className="hotel__wrapper">
                                <div className="row">

                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div className="hotel__item rr-pro-img mb-30">
                                            <div className="hotel__thumb fix p-relative">
                                                <img  src="assets/imgs/home-1/room-img3.png"  alt="img not found"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div className="hotel__item rr-pro-img mb-30">
                                            <div className="hotel__thumb fix p-relative">
                                                <img  src="assets/imgs/home-1/room-img1.png"  alt="img not found"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div className="hotel__item rr-pro-img mb-30">
                                            <div className="hotel__thumb fix p-relative">
                                                <img  src="assets/imgs/home-1/room-img4.png"  alt="img not found"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div className="hotel__item rr-pro-img mb-30">
                                            <div className="hotel__thumb fix p-relative">
                                                <img  src="assets/imgs/home-1/room-img2.png"  alt="img not found"/>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade " id="nav-4" role="tabpanel" aria-labelledby="nav-2-tab" tabindex="0">
                            <div className="hotel__wrapper">
                                <div className="row">

                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div className="hotel__item rr-pro-img mb-30">
                                            <div className="hotel__thumb fix p-relative">
                                                <img  src="assets/imgs/home-1/room-img4.png"  alt="img not found"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div className="hotel__item rr-pro-img mb-30">
                                            <div className="hotel__thumb fix p-relative">
                                                <img  src="assets/imgs/home-1/room-img1.png"  alt="img not found"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div className="hotel__item rr-pro-img mb-30">
                                            <div className="hotel__thumb fix p-relative">
                                                <img  src="assets/imgs/home-1/room-img3.png"  alt="img not found"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div className="hotel__item rr-pro-img mb-30">
                                            <div className="hotel__thumb fix p-relative">
                                                <img  src="assets/imgs/home-1/room-img2.png"  alt="img not found"/>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section className="about__area section-space-bottom">
        <div className="container">
            <div className="row">
                <div className="section2__title-wrapper mb-60">
                    <h2 className="section2__title-wrapper-title wow fadeInLeft animated" data-wow-delay=".3s">About Us</h2>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="about__thumb">
                        <img src="assets/imgs/about/about-right.png" alt="img not found"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="about__content">
                        <h2 className="about__title wow fadeInLeft animated" data-wow-delay=".3s">Where Comfort Meets <br/> Convenience </h2>
                        <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p>
                        <div className="about__list">
                            <ul>
                                <li>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.707 11.2924L15.707 4.29243C15.5184 4.11027 15.2658 4.00948 15.0036 4.01176C14.7414 4.01403 14.4906 4.1192 14.3052 4.30461C14.1198 4.49002 14.0146 4.74083 14.0123 5.00303C14.01 5.26523 14.1108 5.51783 14.293 5.70643L19.586 10.9994H2C1.73478 10.9994 1.48043 11.1048 1.29289 11.2923C1.10536 11.4799 1 11.7342 1 11.9994C1 12.2646 1.10536 12.519 1.29289 12.7065C1.48043 12.8941 1.73478 12.9994 2 12.9994H19.586L14.293 18.2924C14.1975 18.3847 14.1213 18.495 14.0689 18.617C14.0165 18.739 13.9889 18.8703 13.9877 19.003C13.9866 19.1358 14.0119 19.2675 14.0622 19.3904C14.1125 19.5133 14.1867 19.6249 14.2806 19.7188C14.3745 19.8127 14.4861 19.887 14.609 19.9373C14.7319 19.9875 14.8636 20.0128 14.9964 20.0117C15.1292 20.0105 15.2604 19.9829 15.3824 19.9305C15.5044 19.8781 15.6148 19.8019 15.707 19.7064L22.707 12.7064C22.8945 12.5189 22.9998 12.2646 22.9998 11.9994C22.9998 11.7343 22.8945 11.48 22.707 11.2924Z" fill="#AF8C3E"/>
                                    </svg>
                                    Denounce with righteous indignation and dislike men so beguiled 
                                </li>
                                <li>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.707 11.2924L15.707 4.29243C15.5184 4.11027 15.2658 4.00948 15.0036 4.01176C14.7414 4.01403 14.4906 4.1192 14.3052 4.30461C14.1198 4.49002 14.0146 4.74083 14.0123 5.00303C14.01 5.26523 14.1108 5.51783 14.293 5.70643L19.586 10.9994H2C1.73478 10.9994 1.48043 11.1048 1.29289 11.2923C1.10536 11.4799 1 11.7342 1 11.9994C1 12.2646 1.10536 12.519 1.29289 12.7065C1.48043 12.8941 1.73478 12.9994 2 12.9994H19.586L14.293 18.2924C14.1975 18.3847 14.1213 18.495 14.0689 18.617C14.0165 18.739 13.9889 18.8703 13.9877 19.003C13.9866 19.1358 14.0119 19.2675 14.0622 19.3904C14.1125 19.5133 14.1867 19.6249 14.2806 19.7188C14.3745 19.8127 14.4861 19.887 14.609 19.9373C14.7319 19.9875 14.8636 20.0128 14.9964 20.0117C15.1292 20.0105 15.2604 19.9829 15.3824 19.9305C15.5044 19.8781 15.6148 19.8019 15.707 19.7064L22.707 12.7064C22.8945 12.5189 22.9998 12.2646 22.9998 11.9994C22.9998 11.7343 22.8945 11.48 22.707 11.2924Z" fill="#AF8C3E"/>
                                    </svg>
                                    But in certain and owing to the claims of duty or the obligations of business
                                </li>
                                <li>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.707 11.2924L15.707 4.29243C15.5184 4.11027 15.2658 4.00948 15.0036 4.01176C14.7414 4.01403 14.4906 4.1192 14.3052 4.30461C14.1198 4.49002 14.0146 4.74083 14.0123 5.00303C14.01 5.26523 14.1108 5.51783 14.293 5.70643L19.586 10.9994H2C1.73478 10.9994 1.48043 11.1048 1.29289 11.2923C1.10536 11.4799 1 11.7342 1 11.9994C1 12.2646 1.10536 12.519 1.29289 12.7065C1.48043 12.8941 1.73478 12.9994 2 12.9994H19.586L14.293 18.2924C14.1975 18.3847 14.1213 18.495 14.0689 18.617C14.0165 18.739 13.9889 18.8703 13.9877 19.003C13.9866 19.1358 14.0119 19.2675 14.0622 19.3904C14.1125 19.5133 14.1867 19.6249 14.2806 19.7188C14.3745 19.8127 14.4861 19.887 14.609 19.9373C14.7319 19.9875 14.8636 20.0128 14.9964 20.0117C15.1292 20.0105 15.2604 19.9829 15.3824 19.9305C15.5044 19.8781 15.6148 19.8019 15.707 19.7064L22.707 12.7064C22.8945 12.5189 22.9998 12.2646 22.9998 11.9994C22.9998 11.7343 22.8945 11.48 22.707 11.2924Z" fill="#AF8C3E"/>
                                    </svg>
                                    By the charms of pleasure of the moment, so blinded by desire
                                </li>
                            </ul>
                        </div>
                        <a className="rr-btn-2 mt-40" href="contact.html">Read more <i className="fa-solid fa-plus"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section className="counter__area section-space-bottom counter__bg p-relative overflow-hidden" data-background="./assets/imgs/home-1/counter-img.png">
        <div className="container">
            <div className="row">
                <div className="counter__wrapper">
                    <div className="counter__box">
                        <div className="counter__icon">
                            <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M54.2188 29.3381C54.6198 29.0151 54.8764 28.5464 54.9324 28.0345C54.9885 27.5226 54.8393 27.0095 54.5176 26.6074L53.6461 25.5215C52.8475 14.7606 43.8312 6.36975 33.0002 6.36975C27.8329 6.36962 22.8524 8.30173 19.037 11.7865C15.2216 15.2713 12.8472 20.0568 12.3802 25.203L11.3189 26.525C10.997 26.927 10.8477 27.4402 10.9037 27.9521C10.9597 28.4641 11.2164 28.9329 11.6176 29.2558L12.4956 29.9606C13.095 34.2086 14.9983 38.1658 17.9427 41.2859C20.8871 44.4061 24.7274 46.5353 28.9336 47.3797C29.0403 47.401 29.1502 47.401 29.2569 47.3798C29.3636 47.3586 29.4651 47.3166 29.5556 47.2562C29.6461 47.1958 29.7237 47.1181 29.7842 47.0276C29.8447 46.9372 29.8867 46.8357 29.908 46.729C29.9293 46.6223 29.9293 46.5125 29.9081 46.4057C29.8869 46.299 29.8449 46.1975 29.7845 46.107C29.724 46.0166 29.6464 45.9389 29.5559 45.8784C29.4655 45.8179 29.364 45.7759 29.2573 45.7546C25.6455 45.0402 22.3195 43.2909 19.6843 40.7197C17.0491 38.1485 15.2185 34.8664 14.4155 31.2733C14.8342 31.3776 15.2757 31.3392 15.6701 31.164C16.3774 31.7225 17.3733 32.0782 18.6887 32.2418C18.8843 32.3693 19.0805 32.4963 19.277 32.6225C19.6691 32.8751 19.6691 32.8751 19.773 32.9843C19.8504 33.0651 19.9702 33.1905 20.1805 33.3944L19.7722 34.1016C19.4862 34.5984 19.4088 35.1885 19.5572 35.7422C19.7056 36.296 20.0677 36.7683 20.5638 37.0555L20.7082 37.1388C21.0225 37.3211 21.378 37.4206 21.7413 37.4279C21.7964 37.7378 21.9186 38.0319 22.0993 38.2896C22.2801 38.5473 22.515 38.7624 22.7876 38.9197L22.932 39.003C23.3607 39.2511 23.8619 39.3437 24.351 39.2652C24.5269 39.7282 24.8576 40.116 25.2871 40.3627L25.4315 40.4461C26.0116 40.7813 26.7107 40.75 27.323 40.4983C27.5106 40.8038 27.7715 41.0576 28.0822 41.2364L28.2266 41.3198C28.554 41.5094 28.9257 41.6092 29.3041 41.6091C29.6778 41.6089 30.0452 41.5126 30.371 41.3295L31.4 42.081C32.3486 42.7739 33.196 43.1216 33.9321 43.1216C34.2424 43.1241 34.5492 43.0565 34.8298 42.9238C35.3521 42.6747 35.752 42.1871 35.9857 41.5474C36.2229 41.6137 36.4679 41.648 36.7143 41.6492C37.1015 41.6506 37.4835 41.5597 37.8285 41.3839C38.1724 41.2017 38.4716 40.9456 38.7047 40.634C38.9378 40.3224 39.099 39.963 39.1766 39.5817C39.7393 39.5817 40.2912 39.4269 40.7717 39.1341C41.1087 38.9298 41.3949 38.6515 41.6084 38.3202C41.822 37.989 41.9574 37.6135 42.0044 37.2222C42.018 37.2222 42.0315 37.2237 42.045 37.2237C42.442 37.2247 42.8345 37.1395 43.1953 36.9741C43.5562 36.8087 43.8768 36.5669 44.1351 36.2655C44.3935 35.9641 44.5833 35.6102 44.6916 35.2283C44.7999 34.8464 44.824 34.4455 44.7623 34.0534C44.7366 33.8926 44.6968 33.7343 44.6435 33.5804C44.914 33.4821 45.1749 33.3592 45.423 33.2133C45.9691 32.8878 46.4435 32.4356 46.899 31.9851L49.7126 30.9667C49.9681 31.1786 50.2735 31.3215 50.5999 31.3817C50.9262 31.4419 51.2626 31.4175 51.5768 31.3107C50.7687 34.9042 48.9316 38.1846 46.2899 40.7513C43.6482 43.318 40.3163 45.0598 36.701 45.7641C36.4992 45.804 36.3194 45.9175 36.1967 46.0826C36.0739 46.2476 36.0169 46.4524 36.0368 46.6572C36.0566 46.8619 36.1519 47.0519 36.3041 47.1903C36.4563 47.3287 36.6545 47.4055 36.8602 47.4059C36.9142 47.4058 36.9681 47.4006 37.0212 47.3902C41.2466 46.5516 45.1055 44.417 48.0612 41.2832C51.0169 38.1494 52.9224 34.1722 53.5125 29.9051L54.2188 29.3381ZM33.0002 8.02684C37.3396 8.03206 41.5475 9.5163 44.9299 12.2347C48.3122 14.9531 50.6669 18.7433 51.6054 22.98L46.0172 16.019C45.694 15.6182 45.2253 15.3618 44.7135 15.3058C44.2017 15.2498 43.6885 15.3989 43.2864 15.7204L41.2336 17.3683C40.8944 17.641 40.6567 18.0198 40.5585 18.4438C40.4604 18.8678 40.5074 19.3125 40.6922 19.7065C38.6714 20.4124 37.346 20.6834 34.3224 20.2537C33.3203 20.1119 31.8795 20.495 29.8278 21.4526C28.7088 21.5041 27.7734 21.1188 26.1299 20.4376C25.7367 20.2739 25.3426 20.1125 24.9476 19.9533C25.2455 19.5501 25.376 19.0474 25.3117 18.5503C25.2474 18.0531 24.9933 17.6001 24.6026 17.2861L22.5499 15.6381C22.1478 15.3166 21.6346 15.1676 21.1229 15.2236C20.6111 15.2795 20.1423 15.536 19.8192 15.9368L14.4912 22.5739C16.533 14.211 24.1454 8.02684 33.0002 8.02684ZM14.7084 29.6117L13.787 28.873L13.7814 28.8687L12.6551 27.9644C12.5969 27.9164 12.5598 27.8476 12.5516 27.7727C12.5435 27.6978 12.5648 27.6226 12.6112 27.5632L21.1116 16.9744C21.1351 16.9454 21.1642 16.9214 21.1971 16.9037C21.2299 16.886 21.266 16.875 21.3031 16.8712C21.3138 16.8701 21.3245 16.8695 21.3352 16.8696C21.3997 16.869 21.4623 16.8908 21.5126 16.931L23.5654 18.579C23.6237 18.6268 23.6609 18.6956 23.6691 18.7706C23.6773 18.8455 23.6558 18.9207 23.6093 18.98L22.9507 19.8005L22.9459 19.8064L15.1084 29.5689C15.0603 29.6266 14.9917 29.6633 14.9171 29.6712C14.8424 29.6792 14.7676 29.6579 14.7084 29.6117ZM22.3466 35.3599C22.3007 35.4079 22.2607 35.4613 22.2275 35.5188C22.1598 35.6341 22.0494 35.7181 21.9203 35.7527C21.7912 35.7872 21.6536 35.7696 21.5373 35.7037L21.393 35.6204C21.2783 35.5522 21.1947 35.4418 21.1602 35.3129C21.1257 35.184 21.1429 35.0467 21.2081 34.9302L22.5919 32.5332C22.6251 32.4759 22.6694 32.4257 22.7221 32.3855C22.7748 32.3454 22.835 32.3161 22.8991 32.2994C22.9427 32.2876 22.9877 32.2817 23.0329 32.2816C23.1205 32.2816 23.2065 32.3046 23.2824 32.3485L23.4266 32.4316C23.5413 32.4999 23.6247 32.6103 23.6592 32.7392C23.6937 32.8681 23.6765 33.0054 23.6113 33.1218C23.5689 33.1952 23.538 33.2746 23.5197 33.3573C23.4692 33.425 23.4228 33.4957 23.3806 33.5688L22.3466 35.3599ZM25.7356 35.2623L24.6408 37.1586C24.5648 37.2215 24.5007 37.2974 24.4515 37.3829C24.3832 37.4976 24.2729 37.5811 24.144 37.6156C24.015 37.6502 23.8777 37.633 23.7612 37.5678L23.6169 37.4845C23.5021 37.4163 23.4186 37.306 23.384 37.177C23.3495 37.0481 23.3666 36.9108 23.4319 36.7943L24.8147 34.3975C24.8602 34.3207 24.9249 34.2572 25.0026 34.2133C25.0802 34.1693 25.168 34.1464 25.2572 34.1469C25.3441 34.1466 25.4296 34.1693 25.505 34.2126L25.6493 34.2959C25.7646 34.3636 25.8485 34.4739 25.8831 34.603C25.9177 34.7321 25.9002 34.8696 25.8343 34.9859C25.7849 35.0713 25.7512 35.1649 25.7349 35.2623H25.7356ZM28.3347 36.429C28.3019 36.4859 28.276 36.5465 28.2574 36.6095L27.2907 38.2832C27.2211 38.4036 27.1632 38.5305 27.118 38.6621C26.906 38.9391 26.4128 39.1003 26.26 39.0115L26.1156 38.9282C26.0003 38.8605 25.9163 38.7502 25.8818 38.621C25.8472 38.4919 25.8648 38.3543 25.9309 38.2381L27.3145 35.8411C27.36 35.7643 27.4248 35.7008 27.5025 35.6569C27.5801 35.6129 27.6679 35.59 27.7571 35.5905C27.8439 35.5902 27.9294 35.6129 28.0047 35.6561L28.1492 35.7395C28.2645 35.8072 28.3485 35.9176 28.3831 36.0467C28.4176 36.1758 28.4 36.3134 28.3341 36.4297L28.3347 36.429ZM29.0559 39.8849L28.9116 39.8015C28.7969 39.7332 28.7133 39.6229 28.6788 39.494C28.6442 39.3651 28.6614 39.2278 28.7266 39.1113L30.1105 36.7144C30.156 36.6376 30.2207 36.5741 30.2984 36.5301C30.376 36.4861 30.4638 36.4632 30.5531 36.4637C30.6399 36.4634 30.7252 36.4861 30.8006 36.5293L30.9451 36.6128C31.0603 36.6806 31.1443 36.7909 31.1789 36.92C31.2135 37.0492 31.1959 37.1867 31.1299 37.303L29.7462 39.6999C29.6779 39.8146 29.5675 39.8982 29.4386 39.9327C29.3096 39.9673 29.1722 39.9501 29.0557 39.8849H29.0559ZM42.9306 35.1193C42.7597 35.353 42.503 35.5093 42.2169 35.5539C41.9309 35.5984 41.6388 35.5276 41.4049 35.357L38.1693 32.994C38.0815 32.9289 37.9817 32.8817 37.8756 32.8553C37.7695 32.8289 37.6592 32.8238 37.5511 32.8402C37.443 32.8566 37.3392 32.8942 37.2457 32.951C37.1522 33.0077 37.0709 33.0823 37.0064 33.1706C36.9419 33.2589 36.8955 33.3591 36.8699 33.4654C36.8443 33.5717 36.84 33.6821 36.8572 33.7901C36.8745 33.898 36.9129 34.0015 36.9703 34.0946C37.0278 34.1876 37.1031 34.2684 37.1919 34.3322L40.3673 36.6515C40.4103 37.1426 40.2532 37.5043 39.8966 37.7262C39.4753 37.9877 38.8509 37.9951 38.5044 37.7419L35.7374 35.7209C35.5599 35.5933 35.339 35.541 35.1231 35.5755C34.9072 35.61 34.7136 35.7284 34.5847 35.905C34.4557 36.0816 34.4017 36.302 34.4346 36.5182C34.4674 36.7343 34.5843 36.9288 34.7599 37.0591L37.5269 39.0801C37.5436 39.093 37.5618 39.1028 37.5784 39.1147C37.5148 39.4859 37.337 39.773 37.0733 39.9079C36.7443 40.0762 36.3065 39.9911 35.8728 39.6742L33.9814 38.2929C33.8039 38.1652 33.5831 38.113 33.3672 38.1475C33.1512 38.1819 32.9577 38.3004 32.8287 38.4769C32.6997 38.6535 32.6458 38.8739 32.6786 39.0901C32.7114 39.3063 32.8284 39.5007 33.0039 39.631L34.5011 40.7244C34.4248 41.076 34.2819 41.3483 34.1155 41.4276C33.8813 41.5394 33.3012 41.4182 32.3767 40.743L31.4477 40.0644L32.5635 38.1317C32.8492 37.6348 32.9263 37.045 32.778 36.4913C32.6297 35.9376 32.2681 35.4653 31.7722 35.1777L31.6276 35.0943C31.3368 34.9264 31.0109 34.8287 30.6757 34.8087C30.3405 34.7888 30.0053 34.8472 29.6966 34.9795C29.5125 34.7014 29.2662 34.4701 28.977 34.304L28.8324 34.2205C28.4037 33.9724 27.9026 33.8798 27.4135 33.9583C27.2377 33.4953 26.9069 33.1075 26.4776 32.8608L26.3332 32.7775C26.0187 32.5955 25.6632 32.4962 25.3 32.4887C25.2449 32.1787 25.1227 31.8845 24.9419 31.6268C24.7611 31.369 24.5261 31.1539 24.2534 30.9965L24.1092 30.9134C23.6123 30.6275 23.0224 30.5503 22.4687 30.6986C21.9151 30.847 21.4428 31.2088 21.1554 31.7047L21.0372 31.9093C21.0132 31.8844 20.9914 31.8616 20.9727 31.8418C20.7323 31.5891 20.6686 31.5481 20.1735 31.2293C19.9254 31.0699 19.678 30.9094 19.4311 30.748C19.3215 30.6762 19.1963 30.6315 19.066 30.6175C18.1249 30.5166 17.3884 30.304 16.8905 29.9949L23.8657 21.3066C24.475 21.5459 25.0103 21.7676 25.495 21.9684C26.2602 22.3051 27.0434 22.599 27.8411 22.8489C27.698 23.0211 27.5597 23.2003 27.4196 23.3834L27.3481 23.4772C27.0022 23.9283 26.3555 24.7594 25.9073 25.2522C25.824 25.3437 25.7485 25.4225 25.6803 25.4938C25.3781 25.8095 25.0926 26.1077 24.9713 26.6481C24.8305 27.2773 24.9298 28.1902 25.4683 28.8116C25.9293 29.3428 26.7293 29.6595 27.6097 29.6595H27.617C28.3775 29.658 28.973 29.3968 29.6878 28.9757C29.8189 28.8979 29.9494 28.8192 30.0793 28.7394C30.6639 28.3824 31.3915 27.9382 32.089 27.7461C34.5717 27.0629 38.3599 30.13 40.8663 32.1598C41.5271 32.6949 42.1511 33.2003 42.691 33.5946C42.9235 33.7663 43.0789 34.0228 43.1234 34.3083C43.1678 34.5939 43.0978 34.8855 42.9284 35.1197L42.9306 35.1193ZM44.5751 31.7894C44.2605 31.9646 43.9241 32.0976 43.5748 32.1849C43.088 31.824 42.5159 31.3612 41.9119 30.8716C38.9764 28.4943 34.9567 25.2384 31.6517 26.1481C30.7295 26.4019 29.8916 26.9135 29.2184 27.3246C29.0887 27.4039 28.9653 27.4793 28.8496 27.5475C28.1986 27.9309 27.9234 28.0014 27.6163 28.002H27.6119C27.2353 28.002 26.8614 27.886 26.7225 27.7254C26.5896 27.5721 26.5432 27.221 26.5905 27.0093C26.6072 26.9343 26.6321 26.8972 26.8788 26.6394C26.9562 26.559 27.0407 26.47 27.1347 26.3669C27.6238 25.8289 28.3035 24.9565 28.6652 24.4848L28.7379 24.3897C29.1352 23.8698 29.4223 23.4942 29.7925 23.3097C32.4059 22.0066 33.5728 21.8212 34.09 21.8944C37.7366 22.4123 39.3081 21.9688 41.735 21.0952L48.5753 29.6159L46.1639 30.4891C46.0505 30.5297 45.9475 30.5947 45.862 30.6794C45.4174 31.1204 44.9978 31.5369 44.5744 31.7894H44.5751ZM50.7283 29.6496L42.2278 19.0607C42.1814 19.0014 42.16 18.9262 42.1681 18.8513C42.1763 18.7764 42.2135 18.7076 42.2717 18.6597L44.3245 17.0117C44.3838 16.9652 44.459 16.9437 44.5339 16.9519C44.6089 16.9601 44.6776 16.9974 44.7254 17.0557L53.2256 27.6448C53.2722 27.7041 53.2937 27.7793 53.2855 27.8543C53.2774 27.9292 53.2402 27.998 53.1819 28.0459L51.1291 29.6938C51.0697 29.7403 50.9944 29.7617 50.9194 29.7536C50.8444 29.7454 50.7756 29.7082 50.7277 29.65L50.7283 29.6496ZM34.3251 46.9247C34.3304 47.1444 34.2482 47.3572 34.0966 47.5163C33.945 47.6754 33.7364 47.7678 33.5167 47.7732C33.3449 47.7773 33.1727 47.7794 33.0002 47.7795C32.7804 47.7795 32.5697 47.6922 32.4143 47.5368C32.2589 47.3814 32.1716 47.1706 32.1716 46.9509C32.1716 46.7311 32.2589 46.5203 32.4143 46.3649C32.5697 46.2096 32.7804 46.1223 33.0002 46.1223C33.1595 46.1223 33.3185 46.1203 33.4772 46.1164C33.5859 46.1138 33.6942 46.1325 33.7957 46.1717C33.8972 46.2109 33.9899 46.2697 34.0687 46.3448C34.1475 46.4198 34.2106 46.5097 34.2546 46.6092C34.2986 46.7087 34.3226 46.8159 34.3251 46.9247ZM51.6489 44.0171C55.8732 39.3861 58.2126 33.3427 58.2074 27.0745C58.2074 13.1752 46.8995 1.86719 33.0002 1.86719C19.1009 1.86719 7.79298 13.1752 7.79298 27.0745C7.78794 33.3426 10.1273 39.386 14.3513 44.017L9.44233 58.4943C9.40739 58.5974 9.39309 58.7063 9.40026 58.8149C9.40742 58.9235 9.43591 59.0296 9.48409 59.1272C9.53227 59.2248 9.5992 59.3119 9.68106 59.3836C9.76292 59.4553 9.85811 59.5102 9.96118 59.5451L10.0242 59.5665C10.148 59.6085 10.28 59.6205 10.4094 59.6017C10.5388 59.5829 10.6619 59.5337 10.7686 59.4582L19.5648 53.2345L22.7617 63.5247C22.8006 63.65 22.8688 63.7643 22.9605 63.8581C23.0522 63.952 23.1649 64.0227 23.2893 64.0645L23.3522 64.0856C23.5601 64.1556 23.7874 64.1403 23.984 64.0429C24.1806 63.9455 24.3305 63.7741 24.4007 63.5662L28.3717 51.8545C31.431 52.4245 34.5692 52.4245 37.6285 51.8545L41.5995 63.5661C41.6698 63.774 41.8198 63.9455 42.0164 64.0429C42.2131 64.1402 42.4404 64.1555 42.6483 64.0853L42.7112 64.0642C42.8355 64.0224 42.9481 63.9517 43.0397 63.8579C43.1313 63.7641 43.1994 63.6499 43.2383 63.5247L46.4352 53.2345L55.2314 59.4582C55.3382 59.5338 55.4614 59.5829 55.5908 59.6017C55.7203 59.6205 55.8523 59.6084 55.9762 59.5664L56.0392 59.545C56.2473 59.4744 56.4188 59.324 56.516 59.127C56.6132 58.9299 56.6281 58.7024 56.5576 58.4943L51.6489 44.0171ZM23.621 60.7049L20.8089 51.6534C20.7701 51.5285 20.7022 51.4146 20.6109 51.3209C20.5197 51.2273 20.4075 51.1566 20.2836 51.1146C20.1598 51.0726 20.0277 51.0605 19.8983 51.0794C19.7689 51.0982 19.6458 51.1474 19.539 51.2229L11.8014 56.6976L15.6508 45.3446C18.7634 48.3074 22.582 50.425 26.7436 51.4961L23.621 60.7049ZM9.45007 27.0745C9.45007 14.0889 20.0146 3.52441 33.0002 3.52441C45.9858 3.52441 56.5503 14.0889 56.5503 27.0745C56.5503 40.0602 45.9858 50.6247 33.0002 50.6247C20.0146 50.6247 9.45007 40.0602 9.45007 27.0745ZM46.4612 51.2229C46.3545 51.1474 46.2314 51.0982 46.102 51.0794C45.9725 51.0605 45.8405 51.0726 45.7166 51.1146C45.5928 51.1566 45.4806 51.2273 45.3893 51.3209C45.298 51.4146 45.2302 51.5285 45.1914 51.6534L42.3792 60.7048L39.2567 51.4961C43.4183 50.4252 47.2368 48.3078 50.3494 45.3451L54.1988 56.6978L46.4612 51.2229Z" fill="white"/>
                            </svg>                            
                        </div>
                        <div className="counter__item">
                            <h3 className="counter__item-title"><span className="odometer" data-count="14">0</span>+</h3>
                            <p>Years of experience</p>
                        </div>
                    </div>
                    <div className="counter__box">
                        <div className="counter__icon">
                            <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.42656 26.4H10.7266V56.925C10.7266 57.1438 10.8135 57.3536 10.9682 57.5084C11.1229 57.6631 11.3328 57.75 11.5516 57.75C11.7704 57.75 11.9802 57.6631 12.1349 57.5084C12.2896 57.3536 12.3766 57.1438 12.3766 56.925V26.4H57.7516V56.925C57.7516 57.1438 57.8385 57.3536 57.9932 57.5084C58.1479 57.6631 58.3578 57.75 58.5766 57.75C58.7954 57.75 59.0052 57.6631 59.1599 57.5084C59.3146 57.3536 59.4016 57.1438 59.4016 56.925V9.075C59.4016 8.8562 59.3146 8.64635 59.1599 8.49164C59.0052 8.33692 58.7954 8.25 58.5766 8.25H18.5641C18.3453 8.25 18.1354 8.33692 17.9807 8.49164C17.826 8.64635 17.7391 8.8562 17.7391 9.075C17.7391 9.2938 17.826 9.50365 17.9807 9.65836C18.1354 9.81308 18.3453 9.9 18.5641 9.9H28.0516V15.675H7.42656C7.20776 15.675 6.99792 15.7619 6.8432 15.9166C6.68848 16.0714 6.60156 16.2812 6.60156 16.5V25.575C6.60156 25.7938 6.68848 26.0036 6.8432 26.1584C6.99792 26.3131 7.20776 26.4 7.42656 26.4ZM29.7016 9.9H57.7516V24.75H29.7016V9.9ZM23.1016 17.325H28.0516V24.75H23.1016V17.325ZM15.2641 17.325H21.4516V24.75H15.2641V17.325ZM8.25156 17.325H13.6141V24.75H8.25156V17.325Z" fill="white"/>
                                <path d="M42.0773 11.5469H32.1773C31.9585 11.5469 31.7487 11.6338 31.594 11.7885C31.4393 11.9432 31.3523 12.1531 31.3523 12.3719V22.2719C31.3523 22.4907 31.4393 22.7005 31.594 22.8552C31.7487 23.01 31.9585 23.0969 32.1773 23.0969H42.0773C42.2961 23.0969 42.506 23.01 42.6607 22.8552C42.8154 22.7005 42.9023 22.4907 42.9023 22.2719V12.3719C42.9023 12.1531 42.8154 11.9432 42.6607 11.7885C42.506 11.6338 42.2961 11.5469 42.0773 11.5469ZM41.2523 21.4469H33.0023V13.1969H41.2523V21.4469ZM55.2773 11.5469H45.3773C45.1585 11.5469 44.9487 11.6338 44.794 11.7885C44.6393 11.9432 44.5523 12.1531 44.5523 12.3719V22.2719C44.5523 22.4907 44.6393 22.7005 44.794 22.8552C44.9487 23.01 45.1585 23.0969 45.3773 23.0969H55.2773C55.4961 23.0969 55.706 23.01 55.8607 22.8552C56.0154 22.7005 56.1023 22.4907 56.1023 22.2719V12.3719C56.1023 12.1531 56.0154 11.9432 55.8607 11.7885C55.706 11.6338 55.4961 11.5469 55.2773 11.5469ZM54.4523 21.4469H46.2023V13.1969H54.4523V21.4469ZM23.5148 30.5219C23.5148 30.3031 23.4279 30.0932 23.2732 29.9385C23.1185 29.7838 22.9086 29.6969 22.6898 29.6969H16.9148C16.696 29.6969 16.4862 29.7838 16.3315 29.9385C16.1768 30.0932 16.0898 30.3031 16.0898 30.5219V38.7719C16.0898 38.9907 16.1768 39.2005 16.3315 39.3552C16.4862 39.51 16.696 39.5969 16.9148 39.5969H22.6898C22.9086 39.5969 23.1185 39.51 23.2732 39.3552C23.4279 39.2005 23.5148 38.9907 23.5148 38.7719V30.5219ZM21.8648 37.9469H17.7398V31.3469H21.8648V37.9469ZM38.7773 30.5219C38.7773 30.3031 38.6904 30.0932 38.5357 29.9385C38.381 29.7838 38.1711 29.6969 37.9523 29.6969H32.1773C31.9585 29.6969 31.7487 29.7838 31.594 29.9385C31.4393 30.0932 31.3523 30.3031 31.3523 30.5219V38.7719C31.3523 38.9907 31.4393 39.2005 31.594 39.3552C31.7487 39.51 31.9585 39.5969 32.1773 39.5969H37.9523C38.1711 39.5969 38.381 39.51 38.5357 39.3552C38.6904 39.2005 38.7773 38.9907 38.7773 38.7719V30.5219ZM37.1273 37.9469H33.0023V31.3469H37.1273V37.9469ZM54.0398 30.5219C54.0398 30.3031 53.9529 30.0932 53.7982 29.9385C53.6435 29.7838 53.4336 29.6969 53.2148 29.6969H47.4398C47.221 29.6969 47.0112 29.7838 46.8565 29.9385C46.7018 30.0932 46.6148 30.3031 46.6148 30.5219V38.7719C46.6148 38.9907 46.7018 39.2005 46.8565 39.3552C47.0112 39.51 47.221 39.5969 47.4398 39.5969H53.2148C53.4336 39.5969 53.6435 39.51 53.7982 39.3552C53.9529 39.2005 54.0398 38.9907 54.0398 38.7719V30.5219ZM52.3898 37.9469H48.2648V31.3469H52.3898V37.9469ZM22.6898 43.7219H16.9148C16.696 43.7219 16.4862 43.8088 16.3315 43.9635C16.1768 44.1182 16.0898 44.3281 16.0898 44.5469V52.7969C16.0898 53.0157 16.1768 53.2255 16.3315 53.3802C16.4862 53.535 16.696 53.6219 16.9148 53.6219H22.6898C22.9086 53.6219 23.1185 53.535 23.2732 53.3802C23.4279 53.2255 23.5148 53.0157 23.5148 52.7969V44.5469C23.5148 44.3281 23.4279 44.1182 23.2732 43.9635C23.1185 43.8088 22.9086 43.7219 22.6898 43.7219ZM21.8648 51.9719H17.7398V45.3719H21.8648V51.9719ZM37.9523 43.7219H32.1773C31.9585 43.7219 31.7487 43.8088 31.594 43.9635C31.4393 44.1182 31.3523 44.3281 31.3523 44.5469V52.7969C31.3523 53.0157 31.4393 53.2255 31.594 53.3802C31.7487 53.535 31.9585 53.6219 32.1773 53.6219H37.9523C38.1711 53.6219 38.381 53.535 38.5357 53.3802C38.6904 53.2255 38.7773 53.0157 38.7773 52.7969V44.5469C38.7773 44.3281 38.6904 44.1182 38.5357 43.9635C38.381 43.8088 38.1711 43.7219 37.9523 43.7219ZM37.1273 51.9719H33.0023V45.3719H37.1273V51.9719ZM53.2148 43.7219H47.4398C47.221 43.7219 47.0112 43.8088 46.8565 43.9635C46.7018 44.1182 46.6148 44.3281 46.6148 44.5469V52.7969C46.6148 53.0157 46.7018 53.2255 46.8565 53.3802C47.0112 53.535 47.221 53.6219 47.4398 53.6219H53.2148C53.4336 53.6219 53.6435 53.535 53.7982 53.3802C53.9529 53.2255 54.0398 53.0157 54.0398 52.7969V44.5469C54.0398 44.3281 53.9529 44.1182 53.7982 43.9635C53.6435 43.8088 53.4336 43.7219 53.2148 43.7219ZM52.3898 51.9719H48.2648V45.3719H52.3898V51.9719Z" fill="white"/>
                            </svg>                                                          
                        </div>
                        <div className="counter__item">
                            <h3 className="counter__item-title"><span className="odometer" data-count="800">0</span>+</h3>
                            <p>Luxury Apartment</p>
                        </div>
                    </div>
                    <div className="counter__box">
                        <div className="counter__icon">
                            <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M44.2202 31.2264V20.3777C44.2202 19.8105 43.7561 19.3464 43.1889 19.3464H7.71391C7.14672 19.3464 6.68266 19.8105 6.68266 20.3777V31.2264C5.36781 32.2712 4.30568 33.5993 3.57539 35.1117C2.84511 36.624 2.4655 38.2817 2.46484 39.9611L2.49578 49.2527C2.49578 49.8198 2.95984 50.2839 3.52703 50.2839H5.76484V53.4818C5.76484 54.049 6.22891 54.5131 6.79609 54.5131H13.0145C13.5817 54.5131 14.0458 54.049 14.0458 53.4818V50.2839H36.857V53.4818C36.857 54.049 37.3211 54.5131 37.8883 54.5131H44.1057C44.6739 54.5131 45.1369 54.049 45.1369 53.4818V50.2839H47.3448C47.912 50.2839 48.3761 49.8198 48.3761 49.2527L48.438 39.9611C48.438 36.558 46.8808 33.3302 44.2202 31.2264ZM8.74412 21.4089H42.1566V29.9167C41.0016 29.3495 39.7641 28.9989 38.5163 28.8648V26.2352C38.5163 25.6669 38.0533 25.2039 37.4851 25.2039H29.2567C28.6782 25.2039 28.2255 25.6669 28.2255 26.2352V28.8019H22.6877V26.2352C22.6877 25.6669 22.2236 25.2039 21.6564 25.2039H13.4167C12.8495 25.2039 12.3855 25.6669 12.3855 26.2352V28.8752C11.1207 29.0079 9.88877 29.3604 8.74516 29.9167L8.74412 21.4089ZM36.4548 27.2664V28.8019H30.288V27.2664H36.4548ZM20.6252 27.2664V28.8019H14.448V27.2664H20.6252ZM11.9833 52.4495H7.82734V50.2839H11.9833V52.4495ZM43.0755 52.4495H38.9195V50.2839H43.0744L43.0755 52.4495ZM46.3136 48.2214H4.55828V42.6836H46.3136V48.2214ZM46.3755 40.6211H4.52734V39.9611C4.52916 38.5224 4.87109 37.1045 5.52524 35.823C6.17939 34.5416 7.12723 33.433 8.29141 32.5877C8.30172 32.5773 8.31203 32.567 8.32131 32.567C9.81663 31.4842 11.5801 30.8964 13.5188 30.8655H37.4851C39.331 30.8964 41.0841 31.4852 42.5794 32.567C43.7529 33.4103 44.7089 34.5206 45.3686 35.8063C46.0283 37.0919 46.3727 38.5161 46.3734 39.9611V40.6211H46.3755ZM62.5042 27.0705H58.6886V19.1298H61.5761C61.753 19.1293 61.9268 19.0835 62.0809 18.9967C62.235 18.9098 62.3643 18.7849 62.4564 18.6339C62.5484 18.4828 62.6002 18.3107 62.6068 18.1339C62.6134 17.9572 62.5745 17.7817 62.4939 17.6242L60.9996 12.2514C60.9415 12.033 60.8131 11.8399 60.6341 11.7019C60.4551 11.5639 60.2356 11.4889 60.0096 11.4883H54.7492C54.2852 11.4883 53.883 11.7987 53.7489 12.2514L52.202 17.8202C52.1195 18.1295 52.1804 18.4595 52.3773 18.7173C52.5743 18.9752 52.8713 19.1288 53.2023 19.1288H56.6261V27.0694H52.2433C51.6761 27.0694 51.212 27.5232 51.212 28.1007V52.036C51.212 52.6135 51.6761 53.0672 52.2433 53.0672H62.5042C63.0817 53.0672 63.5355 52.6135 63.5355 52.036V28.1017C63.5355 27.5242 63.0817 27.0705 62.5042 27.0705ZM54.5533 17.0673L55.5319 13.5508H59.2238L60.1932 17.0673H54.5533ZM61.473 51.0058H53.2745V46.2311H61.473V51.0058ZM61.473 44.1686H53.2745V34.8255H61.473V44.1686ZM61.473 32.763H53.2745V29.133H61.473V32.763Z" fill="white"/>
                            </svg>                                                                                        
                        </div>
                        <div className="counter__item">
                            <h3 className="counter__item-title"><span className="odometer" data-count="600">0</span>+</h3>
                            <p>Modern Bedroom</p>
                        </div>
                    </div>
                    <div className="counter__box">
                        <div className="counter__icon">
                            <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_7733_392)">
                                <path d="M35.6173 26.0423L32.6164 23.5062L33.0045 19.5961C33.0262 19.3859 32.9881 19.1738 32.8948 18.9842C32.8015 18.7946 32.6567 18.6351 32.4769 18.5241C32.298 18.4116 32.091 18.3518 31.8796 18.3516C31.6683 18.3513 31.4611 18.4106 31.2819 18.5227L27.9425 20.5929L24.3439 19.0157C24.1507 18.9301 23.9373 18.9006 23.7281 18.9308C23.5189 18.9609 23.3224 19.0493 23.1612 19.186C22.9989 19.3214 22.8781 19.4998 22.8125 19.7008C22.747 19.9018 22.7394 20.1171 22.7906 20.3222L23.7276 24.1379L21.1157 27.0728C20.9746 27.2301 20.8806 27.424 20.8446 27.6323C20.8086 27.8406 20.8319 28.0548 20.9121 28.2504C20.9907 28.4466 21.123 28.6167 21.2938 28.7411C21.4647 28.8656 21.6671 28.9394 21.878 28.954L25.7966 29.242L27.781 32.6335C27.88 32.8042 28.0222 32.9458 28.1933 33.0441C28.3644 33.1424 28.5583 33.1939 28.7556 33.1935C28.981 33.1948 29.2016 33.1284 29.3888 33.0028C29.576 32.8773 29.7211 32.6984 29.8054 32.4894L31.2902 28.8515L35.1293 28.0122C35.3358 27.9677 35.5257 27.866 35.6771 27.7186C35.8285 27.5712 35.9353 27.3841 35.9853 27.1788C36.0369 26.9739 36.0297 26.7587 35.9646 26.5577C35.8996 26.3567 35.7792 26.1781 35.6173 26.0423ZM30.4719 27.0602C30.2926 27.0994 30.1256 27.1816 29.9852 27.2997C29.8448 27.4178 29.7352 27.5683 29.6658 27.7382L28.6307 30.2743L27.2469 27.9094C27.1542 27.7512 27.0244 27.6179 26.8688 27.521C26.7132 27.4241 26.5363 27.3664 26.3535 27.353L23.6217 27.1523L25.443 25.1056C25.5648 24.9686 25.6516 24.804 25.6957 24.626C25.7398 24.448 25.74 24.2619 25.6963 24.0838L25.043 21.4237L27.5511 22.5229C27.7192 22.5967 27.9028 22.6285 28.0859 22.6156C28.2691 22.6026 28.4463 22.5453 28.6024 22.4485L30.9305 21.0051L30.6601 23.7309C30.6419 23.9135 30.6684 24.0978 30.7374 24.2679C30.8063 24.438 30.9155 24.5887 31.0557 24.7072L33.1479 26.4751L30.4719 27.0602Z" fill="white"/>
                                <path d="M63.414 49.8667L60.2062 47.0332C59.388 46.3107 58.1411 46.2956 57.3057 46.9981L57.1618 47.1191C57.02 46.6081 56.7609 46.1245 56.3807 45.715C55.9163 45.2148 55.3266 44.8725 54.6769 44.7186C55.0516 43.5677 54.8094 42.2522 53.9293 41.3041C53.3034 40.6298 52.4523 40.2398 51.533 40.2059C51.5053 40.2048 51.4778 40.2052 51.4502 40.2048C51.4924 39.3123 51.191 38.4043 50.5367 37.6993C49.9184 37.0332 49.0804 36.6452 48.1739 36.6029C48.2557 35.6665 47.9574 34.7005 47.2691 33.9592C46.6432 33.2849 45.7921 32.8948 44.8728 32.8609C43.9532 32.8262 43.0758 33.153 42.4018 33.7791L41.9449 34.2035C41.2813 33.7244 40.4874 33.4525 39.6442 33.4247C39.5386 33.4216 39.4328 33.4222 39.3272 33.4268L39.6696 32.2843C40.2836 30.2352 40.6657 26.5205 40.6543 26.7198C40.6874 26.7358 40.7199 26.7524 40.7538 26.7675C41.221 26.9752 41.7266 27.0824 42.2378 27.082C42.8172 27.082 43.394 26.9448 43.9093 26.6719C44.9822 26.1039 45.7437 24.9167 45.8043 23.7175C45.8619 22.5763 45.3245 21.5686 44.2911 20.8798C44.0787 20.7383 43.8188 20.687 43.5686 20.7371C43.3183 20.7871 43.0982 20.9346 42.9566 21.1469C42.8151 21.3594 42.7637 21.6193 42.8139 21.8696C42.864 22.1198 43.0114 22.3399 43.2238 22.4815C43.6834 22.7877 43.9048 23.1708 43.882 23.6203C43.8553 24.149 43.4881 24.717 43.0088 24.9707C42.5694 25.2035 42.0058 25.2183 41.5378 25.0095C41.239 24.8763 40.8517 24.5929 40.7034 23.9995C40.2619 22.2323 41.2744 20.4783 42.4465 18.4475C44.5697 14.7689 47.212 10.1911 41.6809 3.65346L39.3903 0.94591C39.1642 0.677106 38.8869 0.455906 38.5746 0.29516C38.2623 0.134414 37.9212 0.0373258 37.571 0.00953528C37.221 -0.0202277 36.8686 0.0198508 36.5342 0.127443C36.1999 0.235035 35.8902 0.407995 35.6232 0.636277C34.8961 1.25478 34.3295 2.04021 33.9721 2.92539C33.6146 3.81057 33.4769 4.76917 33.5707 5.71918L33.685 6.87573C33.7135 7.16754 33.6732 7.46196 33.5674 7.7354C33.4615 8.00883 33.2931 8.25368 33.0757 8.45032L34.3159 9.925C34.7725 9.52656 35.1273 9.02477 35.3507 8.46142C35.5742 7.89806 35.6597 7.28948 35.6003 6.68636L35.486 5.52982C35.4227 4.88926 35.5155 4.2429 35.7565 3.64605C35.9976 3.0492 36.3796 2.51961 36.8699 2.10259C36.9443 2.0388 37.0307 1.99049 37.124 1.96048C37.2173 1.93047 37.3156 1.91935 37.4132 1.92779C37.5109 1.93554 37.6061 1.96261 37.6932 2.00745C37.7803 2.05228 37.8577 2.11398 37.9207 2.18895L40.2114 4.8965C44.8683 10.4009 42.8821 13.8422 40.7794 17.4852C40.4504 18.0551 40.1188 18.6303 39.8189 19.2135C39.0237 16.4807 37.6927 13.9399 35.8524 11.752L31.4477 6.51492L31.4725 6.49416C31.6467 6.34847 31.7903 6.16966 31.895 5.96808C31.9996 5.7665 32.0633 5.54617 32.0822 5.31983C32.1023 5.0936 32.0774 4.86562 32.0089 4.64908C31.9403 4.43254 31.8295 4.23176 31.6828 4.05835L30.2754 2.38502C30.1297 2.21078 29.9509 2.06717 29.7493 1.96251C29.5478 1.85785 29.3274 1.79422 29.1011 1.77529C28.8749 1.75516 28.6469 1.78008 28.4303 1.8486C28.2138 1.91713 28.013 2.0279 27.8395 2.17452L5.59839 20.8805C4.86891 21.494 4.77455 22.5866 5.38802 23.3163L6.79541 24.9896C6.94112 25.1639 7.11996 25.3075 7.32156 25.4122C7.52316 25.5168 7.74352 25.5805 7.96988 25.5994C8.1961 25.6196 8.42409 25.5948 8.64062 25.5262C8.85715 25.4577 9.0579 25.3468 9.23123 25.2L9.2561 25.179L10.9104 27.146C10.6804 27.3237 10.4124 27.4457 10.1273 27.5023C9.84229 27.559 9.54798 27.5486 9.26758 27.4722L8.147 27.1647C7.22638 26.9121 6.25827 26.8863 5.32549 27.0894C4.39271 27.2925 3.52302 27.7186 2.79081 28.3311C2.52081 28.5558 2.29813 28.8319 2.13573 29.1434C1.97332 29.4549 1.87442 29.7955 1.84477 30.1455C1.81312 30.4953 1.8513 30.8479 1.9571 31.1829C2.0629 31.5178 2.23421 31.8283 2.46107 32.0965L4.74387 34.8106C10.2558 41.3643 15.2136 39.5315 19.1974 38.0587C20.9952 37.394 22.5926 36.8036 24.0268 37.0107C24.2935 37.0859 24.5615 37.1562 24.8308 37.2215C24.8753 37.2389 24.9196 37.2569 24.9638 37.2762C25.5237 37.5222 25.7378 37.9518 25.8189 38.2688C25.9457 38.7651 25.836 39.3181 25.5326 39.7121C25.2018 40.1418 24.5801 40.4075 24.0543 40.3452C23.6074 40.2918 23.2671 40.009 23.0426 39.5045C22.9366 39.2749 22.7444 39.0962 22.5077 39.0072C22.271 38.9181 22.0087 38.9258 21.7776 39.0286C21.5466 39.1314 21.3652 39.321 21.2728 39.5564C21.1804 39.7918 21.1844 40.0541 21.2838 40.2867C21.7885 41.4213 22.6914 42.1209 23.8259 42.2564C23.9514 42.2713 24.0777 42.2787 24.2041 42.2787C25.2846 42.2785 26.3946 41.7472 27.0573 40.8865C27.7235 40.0215 27.9576 38.8647 27.6834 37.7922C27.6771 37.7677 27.6695 37.7439 27.6626 37.7196C28.546 37.8195 29.4343 37.8697 30.3234 37.8701C31.2848 37.8701 32.2572 37.8126 33.2346 37.6959L33.3198 37.6857C32.8808 38.2087 32.5418 38.8079 32.3198 39.4536L28.5367 48.7588L8.3575 64.2751C8.19811 64.3976 8.08108 64.5669 8.02284 64.7593C7.96461 64.9517 7.9681 65.1576 8.03281 65.3479C8.09753 65.5382 8.22023 65.7035 8.38368 65.8205C8.54713 65.9375 8.74313 66.0004 8.94415 66.0004H31.8085C31.937 66.0004 32.0642 65.9746 32.1826 65.9247C32.301 65.8747 32.4082 65.8016 32.4979 65.7096L33.7714 64.4021C33.9481 64.219 34.0451 63.9733 34.0412 63.7189C34.0373 63.4644 33.9328 63.2219 33.7505 63.0443C33.5682 62.8667 33.323 62.7686 33.0685 62.7713C32.814 62.7741 32.571 62.8775 32.3926 63.059L31.4025 64.0757H11.7747L29.9172 50.1258C29.9306 50.1155 29.9426 50.1043 29.9552 50.0935C29.9639 50.0861 29.9728 50.079 29.9811 50.0713C30.0118 50.0432 30.0403 50.0136 30.0666 49.9824C30.0718 49.9762 30.0765 49.9696 30.0816 49.9632C30.1055 49.9332 30.1274 49.9022 30.1474 49.87C30.1512 49.8639 30.1553 49.8581 30.1589 49.8519C30.1816 49.8135 30.2012 49.7739 30.2182 49.7332C30.2194 49.7305 30.221 49.728 30.2221 49.7253L34.114 40.1522C34.1215 40.1338 34.1284 40.1151 34.1348 40.0963C34.3262 39.53 34.654 39.0196 35.0893 38.61L37.8534 36.0084C38.3281 35.5616 38.9401 35.327 39.5807 35.3484C40.1854 35.3684 40.7412 35.6186 41.1457 36.0531L41.2486 36.1636L41.2487 36.1637L41.2488 36.1639L44.6298 39.7953L44.63 39.7957L44.6304 39.7961L44.6306 39.7962L44.6312 39.797L44.632 39.7977L45.111 40.3122C45.3129 40.529 45.4178 40.8155 45.4068 41.1186C45.3951 41.4443 45.2538 41.7489 45.0093 41.9761L44.452 42.4939C44.0665 42.852 43.5186 42.9197 43.0932 42.7029C43.0821 42.6968 43.0705 42.6918 43.0591 42.6861C42.9582 42.6302 42.8668 42.5587 42.7882 42.4742L41.3848 40.9645C40.8833 40.425 40.198 40.1142 39.4554 40.0895C38.6944 40.0646 37.9653 40.3404 37.4051 40.8677C37.3014 40.9653 37.2206 41.0847 37.1686 41.2173C37.1166 41.3499 37.0947 41.4924 37.1045 41.6345C37.1091 41.7076 37.1124 41.7799 37.1143 41.8519C37.1153 41.8923 37.1152 41.9324 37.1155 41.9726C37.1157 42.0036 37.1162 42.0346 37.1158 42.0653C37.1153 42.1166 37.1135 42.1674 37.1116 42.2181C37.1109 42.2365 37.1104 42.2549 37.1095 42.2734C37.1067 42.3306 37.1027 42.3875 37.0981 42.4438L37.0962 42.466C37.0934 42.49 37.0915 42.5142 37.0904 42.5384C37.0006 43.4294 36.6786 44.2268 36.1159 44.9571C36.0388 45.0572 35.9821 45.1715 35.9492 45.2935C35.9162 45.4155 35.9076 45.5428 35.9239 45.6681C35.9402 45.7934 35.9809 45.9143 36.0439 46.0239C36.1069 46.1335 36.1908 46.2295 36.2909 46.3067C36.391 46.3838 36.5053 46.4404 36.6273 46.4734C36.7493 46.5063 36.8766 46.5149 37.0019 46.4987C37.1273 46.4824 37.2482 46.4417 37.3577 46.3787C37.4673 46.3157 37.5634 46.2318 37.6405 46.1317C37.9667 45.7103 38.2424 45.2522 38.462 44.7667L46.6474 55.9621L46.4521 56.1263C46.3263 56.1693 46.2108 56.238 46.113 56.328C45.4327 56.9539 44.6001 57.3757 43.7026 57.5499L37.6761 57.9831C37.4409 57.9999 37.2202 58.1026 37.0556 58.2714L35.5171 59.851C35.3423 60.0345 35.2468 60.2795 35.2515 60.5329C35.2562 60.7863 35.3606 61.0276 35.5422 61.2045C35.7237 61.3813 35.9677 61.4795 36.2211 61.4775C36.4745 61.4756 36.717 61.3737 36.8958 61.1941L38.1789 59.8766L43.8955 59.4659C43.9065 59.4651 43.9172 59.4629 43.928 59.4617C43.9523 59.8141 44.0614 60.1555 44.2458 60.4568L46.4875 64.1026C46.6546 64.3748 46.8786 64.6077 47.1441 64.7854C47.4095 64.9631 47.7102 65.0814 48.0256 65.1322C48.3409 65.1833 48.6636 65.1657 48.9715 65.0807C49.2794 64.9956 49.5653 64.8451 49.8098 64.6394L63.373 53.2322C63.6176 53.0267 63.8149 52.7708 63.9515 52.482C64.088 52.1933 64.1607 51.8784 64.1645 51.559C64.1686 51.2395 64.1036 50.923 63.9741 50.6309C63.8446 50.3388 63.6535 50.0782 63.414 49.8667ZM18.5301 36.2535C14.5844 37.7122 10.8578 39.0898 6.21714 33.5719L3.93434 30.8578C3.80621 30.7053 3.74511 30.5121 3.76251 30.3136C3.77991 30.1151 3.87363 29.9353 4.02651 29.8075C4.52022 29.3945 5.10661 29.1073 5.73554 28.9703C6.36446 28.8333 7.0172 28.8507 7.63795 29.0209L8.75853 29.3285C9.33964 29.4877 9.95025 29.5066 10.5401 29.3836C11.1299 29.2607 11.6821 28.9993 12.1512 28.6212L13.661 30.4163C15.5056 32.6097 17.787 34.3597 20.3505 35.6121C19.7403 35.8063 19.1325 36.0307 18.5301 36.2535ZM37.8256 31.7318L37.099 34.1567C36.8988 34.2911 36.7099 34.4416 36.5341 34.6067L35.6133 35.4733L33.0066 35.7848C25.9993 36.622 19.3175 34.1518 15.1338 29.1774L10.7292 23.9403L12.4487 22.4941C12.5455 22.4128 12.6252 22.3132 12.6834 22.201C12.7417 22.0889 12.7772 21.9663 12.7881 21.8404C12.799 21.7145 12.7849 21.5877 12.7468 21.4672C12.7086 21.3467 12.6471 21.2349 12.5658 21.1382C12.4845 21.0414 12.3849 20.9616 12.2727 20.9034C12.1605 20.8451 12.038 20.8095 11.9121 20.7987C11.7861 20.7878 11.6593 20.8018 11.5388 20.84C11.4183 20.8781 11.3065 20.9396 11.2098 21.021L8.75414 23.0862L8.75376 23.0865L8.75337 23.0868L8.14235 23.6008L6.9871 22.2273L28.9287 3.7736L30.084 5.14722L29.4739 5.6604L29.4726 5.6613L29.4714 5.66233L14.6809 18.1018C14.4855 18.2661 14.3634 18.5012 14.3415 18.7555C14.3195 19.0099 14.3995 19.2625 14.5638 19.4578C14.728 19.6532 14.9632 19.7753 15.2175 19.7972C15.4718 19.8192 15.7244 19.7392 15.9198 19.5749L29.9749 7.75371L34.3795 12.9908C38.5633 17.9654 39.8515 24.9715 37.8256 31.7318ZM53.9389 46.5519C54.1335 46.5586 54.3248 46.6038 54.5019 46.685C54.6789 46.7661 54.838 46.8815 54.9701 47.0246C55.1921 47.2643 55.3286 47.5706 55.3585 47.8959C55.3884 48.2212 55.31 48.5472 55.1354 48.8234L50.9422 52.3501C50.7192 52.3696 50.4947 52.3377 50.286 52.2568C50.0772 52.1759 49.8899 52.0483 49.7382 51.8836C49.1825 51.285 49.2173 50.3457 49.8156 49.7898L50.4231 49.2253C50.535 49.144 50.6421 49.0561 50.7437 48.9622L53.0905 46.782C53.3435 46.6213 53.6393 46.541 53.9389 46.5519ZM50.4852 42.4388C50.7645 42.2246 51.1099 42.1151 51.4616 42.1291C51.661 42.136 51.8572 42.1823 52.0386 42.2655C52.22 42.3486 52.3832 42.4669 52.5186 42.6136C53.0882 43.227 53.0527 44.1898 52.4393 44.7596L51.885 45.2746C51.7733 45.3555 51.6666 45.4431 51.5653 45.5368L49.2156 47.7197C48.9563 47.8865 48.6518 47.9693 48.3437 47.957C48.1442 47.9501 47.9481 47.9038 47.7667 47.8206C47.5852 47.7375 47.4221 47.6192 47.2867 47.4726C46.7544 46.8992 46.7509 46.0211 47.2534 45.4436C47.2862 45.4153 47.3189 45.3869 47.3507 45.3573L50.3564 42.565C50.4009 42.5237 50.4436 42.4817 50.4852 42.4388ZM45.3844 37.7815L43.3146 35.5583L43.7117 35.1892C44.009 34.9131 44.396 34.7719 44.8015 34.7842C45.001 34.791 45.1971 34.8374 45.3785 34.9205C45.56 35.0037 45.7231 35.122 45.8585 35.2686C46.4282 35.8821 46.3925 36.8449 45.7791 37.4148L45.3844 37.7815ZM45.762 43.9042L46.3194 43.3862C46.9408 42.809 47.2998 42.0283 47.3302 41.1885C47.3567 40.4592 47.1298 39.7624 46.6884 39.1992L46.9791 38.9292C47.1248 38.7927 47.2962 38.6867 47.4833 38.6171C47.6704 38.5476 47.8694 38.516 48.0689 38.5241C48.2683 38.531 48.4644 38.5774 48.6458 38.6605C48.8273 38.7437 48.9904 38.862 49.1258 39.0086C49.6583 39.5822 49.6615 40.4607 49.1586 41.0383C49.1259 41.0663 49.0936 41.0948 49.0618 41.1239L46.0561 43.9163C46.0117 43.9577 45.9686 44 45.9268 44.043C45.7021 44.2151 45.4331 44.3199 45.1512 44.3453C45.3716 44.2231 45.5767 44.075 45.762 43.9042ZM39.035 42.2892C39.0378 42.2167 39.0404 42.1442 39.0411 42.071C39.1528 42.0288 39.2719 42.0092 39.3913 42.0135C39.6179 42.021 39.8252 42.1142 39.9752 42.2754L41.3786 43.7851C41.5195 43.9367 41.6757 44.0734 41.8445 44.1931C41.9987 44.5558 42.2149 44.8888 42.4834 45.1774C43.1093 45.8517 43.9604 46.2418 44.8799 46.2758C44.9076 46.2767 44.935 46.277 44.9626 46.2773C44.9206 47.1696 45.222 48.0775 45.8762 48.7822C46.3451 49.2874 46.9404 49.633 47.5962 49.789C47.2131 50.9337 47.4501 52.2481 48.3275 53.1932C48.5696 53.4537 48.8514 53.6744 49.1624 53.847L48.1238 54.7204L39.035 42.2892ZM62.1341 51.7589L48.5708 63.1661C48.5383 63.1938 48.5001 63.214 48.4589 63.2254C48.4178 63.2368 48.3746 63.239 48.3325 63.232C48.2903 63.2254 48.25 63.2097 48.2146 63.1859C48.1791 63.1622 48.1492 63.1309 48.127 63.0944L45.8853 59.4485C45.8477 59.388 45.8332 59.316 45.8446 59.2457C45.8559 59.1754 45.8923 59.1115 45.9471 59.066L58.5437 48.4716L58.5442 48.4712C58.5977 48.4263 58.6654 48.4018 58.7352 48.402C58.8057 48.402 58.8761 48.4267 58.9317 48.4758L62.1395 51.3093C62.2282 51.3877 62.2404 51.4846 62.2398 51.5356C62.2396 51.5783 62.23 51.6204 62.2117 51.659C62.1935 51.6976 62.167 51.7317 62.1341 51.7589Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_7733_392">
                                <rect width="66" height="66" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>                                                                                      
                        </div>
                        <div className="counter__item">
                            <h3 className="counter__item-title"><span className="odometer" data-count="100">0</span>+</h3>
                            <p>Award Winning</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section className="accomodation__area section-space">
        <div className="container">
            <div className="section3__title-wrapper mb-60">
                <h2 className="section3__title-wrapper-title wow fadeInLeft animated" data-wow-delay=".3s">The Accomodation</h2>
                <a className="rr-btn-4" href="contact.html">Explore More<i className="fa-solid fa-plus"></i></a>
            </div>
            <div className="row mb-minus-30">
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="accomodation__item mb-30">
                        <div className="accomodation__thumb">
                            <img src="assets/imgs/home-1/accomodation-img1.png" alt="img not found"/>
                            <div className="accomodation__box">
                                <div className="accomodation__box-list">
                                    <div className="accomodation__box-list-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.25 19.5V14.25C2.25235 13.4551 2.56917 12.6934 3.13128 12.1313C3.69338 11.5692 4.45507 11.2523 5.25 11.25H18.75C19.5449 11.2523 20.3066 11.5692 20.8687 12.1313C21.4308 12.6934 21.7477 13.4551 21.75 14.25V19.5M18 11.25H4.5V6.375C4.50148 5.87818 4.6995 5.40212 5.05081 5.05081C5.40212 4.6995 5.87818 4.50148 6.375 4.5H17.625C18.1218 4.50148 18.5979 4.6995 18.9492 5.05081C19.3005 5.40212 19.4985 5.87818 19.5 6.375V11.25H18Z" stroke="#0E1730" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M2.25 19.5V19.125C2.25087 18.8269 2.36967 18.5413 2.58046 18.3305C2.79125 18.1197 3.0769 18.0009 3.375 18H20.625C20.9231 18.0009 21.2087 18.1197 21.4195 18.3305C21.6303 18.5413 21.7491 18.8269 21.75 19.125V19.5M5.25 11.25V10.5C5.25111 10.1025 5.40951 9.72163 5.69057 9.44057C5.97163 9.15951 6.35252 9.00111 6.75 9H10.5C10.8975 9.00111 11.2784 9.15951 11.5594 9.44057C11.8405 9.72163 11.9989 10.1025 12 10.5M12 10.5V11.25M12 10.5C12.0011 10.1025 12.1595 9.72163 12.4406 9.44057C12.7216 9.15951 13.1025 9.00111 13.5 9H17.25C17.6475 9.00111 18.0284 9.15951 18.3094 9.44057C18.5905 9.72163 18.7489 10.1025 18.75 10.5V11.25" stroke="#0E1730" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>                                                                             
                                    </div>
                                    <h6 className="accomodation__box-list-text">2 Bed</h6>
                                </div>
                                <div className="accomodation__box-list">
                                    <div className="accomodation__box-list-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.0935 4.75H6.125C5.89294 4.75 5.67038 4.84219 5.50628 5.00628C5.34219 5.17038 5.25 5.39294 5.25 5.625V19.875C5.25 20.3585 5.642 20.75 6.125 20.75H17.875C18.1071 20.75 18.3296 20.6578 18.4937 20.4937C18.6578 20.3296 18.75 20.1071 18.75 19.875V5.625C18.75 5.39294 18.6578 5.17038 18.4937 5.00628C18.3296 4.84219 18.1071 4.75 17.875 4.75H15.9065C15.7727 5.18433 15.5032 5.56434 15.1376 5.8343C14.772 6.10426 14.3295 6.24995 13.875 6.25H10.125C9.67052 6.24995 9.22802 6.10426 8.86241 5.8343C8.4968 5.56434 8.22732 5.18433 8.0935 4.75ZM15.9065 3.5H17.875C18.4386 3.5 18.9791 3.72388 19.3776 4.1224C19.7761 4.52091 20 5.06141 20 5.625V19.875C20 20.4386 19.7761 20.9791 19.3776 21.3776C18.9791 21.7761 18.4386 22 17.875 22H6.125C5.56141 22 5.02091 21.7761 4.6224 21.3776C4.22388 20.9791 4 20.4386 4 19.875V5.625C4 5.06141 4.22388 4.52091 4.6224 4.1224C5.02091 3.72388 5.56141 3.5 6.125 3.5H8.0935C8.22732 3.06567 8.4968 2.68566 8.86241 2.4157C9.22802 2.14574 9.67052 2.00005 10.125 2H13.875C14.3295 2.00005 14.772 2.14574 15.1376 2.4157C15.5032 2.68566 15.7727 3.06567 15.9065 3.5ZM9.25 4.125C9.25 4.608 9.642 5 10.125 5H13.875C13.9899 5 14.1037 4.97737 14.2098 4.93339C14.316 4.88942 14.4125 4.82497 14.4937 4.74372C14.575 4.66247 14.6394 4.56601 14.6834 4.45985C14.7274 4.35369 14.75 4.23991 14.75 4.125C14.75 4.01009 14.7274 3.89631 14.6834 3.79015C14.6394 3.68399 14.575 3.58753 14.4937 3.50628C14.4125 3.42503 14.316 3.36058 14.2098 3.31661C14.1037 3.27263 13.9899 3.25 13.875 3.25H10.125C9.89294 3.25 9.67038 3.34219 9.50628 3.50628C9.34219 3.67038 9.25 3.89294 9.25 4.125ZM12 8.75C11.6022 8.75 11.2206 8.90804 10.9393 9.18934C10.658 9.47064 10.5 9.85218 10.5 10.25C10.5 10.6478 10.658 11.0294 10.9393 11.3107C11.2206 11.592 11.6022 11.75 12 11.75C12.3978 11.75 12.7794 11.592 13.0607 11.3107C13.342 11.0294 13.5 10.6478 13.5 10.25C13.5 9.85218 13.342 9.47064 13.0607 9.18934C12.7794 8.90804 12.3978 8.75 12 8.75ZM9.25 10.25C9.25 9.52065 9.53973 8.82118 10.0555 8.30546C10.5712 7.78973 11.2707 7.5 12 7.5C12.7293 7.5 13.4288 7.78973 13.9445 8.30546C14.4603 8.82118 14.75 9.52065 14.75 10.25C14.75 10.9793 14.4603 11.6788 13.9445 12.1945C13.4288 12.7103 12.7293 13 12 13C11.2707 13 10.5712 12.7103 10.0555 12.1945C9.53973 11.6788 9.25 10.9793 9.25 10.25ZM8.25 15.9C8.25 15.7276 8.31848 15.5623 8.44038 15.4404C8.56228 15.3185 8.72761 15.25 8.9 15.25H15.1C15.2724 15.25 15.4377 15.3185 15.5596 15.4404C15.6815 15.5623 15.75 15.7276 15.75 15.9C15.75 16.6285 15.4115 17.185 14.787 17.586C14.1385 18.003 13.175 18.25 12 18.25C10.825 18.25 9.8615 18.003 9.213 17.586C8.5885 17.185 8.25 16.6285 8.25 15.9ZM8.9 14C8.39609 14 7.91282 14.2002 7.5565 14.5565C7.20018 14.9128 7 15.3961 7 15.9C7 17.1035 7.599 18.035 8.537 18.6375C9.451 19.2255 10.675 19.5 12 19.5C13.325 19.5 14.549 19.225 15.463 18.6375C16.401 18.035 17 17.1035 17 15.9C17 15.6505 16.9509 15.4034 16.8554 15.1729C16.7599 14.9424 16.6199 14.7329 16.4435 14.5565C16.2671 14.3801 16.0576 14.2401 15.8271 14.1446C15.5966 14.0491 15.3495 14 15.1 14H8.9Z" fill="#0E1730"/>
                                        </svg>                                                                                                                   
                                    </div>
                                    <h6 className="accomodation__box-list-text">2 Guest</h6>
                                </div>
                                <div className="accomodation__box-list">
                                    <div className="accomodation__box-list-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 13V16C21 17.0609 20.5786 18.0783 19.8284 18.8284C19.0783 19.5786 18.0609 20 17 20H7C5.93913 20 4.92172 19.5786 4.17157 18.8284C3.42143 18.0783 3 17.0609 3 16V13.6C3 13.4409 3.06321 13.2883 3.17574 13.1757C3.28826 13.0632 3.44087 13 3.6 13H21ZM21 13V7C21 5.93913 20.5786 4.92172 19.8284 4.17157C19.0783 3.42143 18.0609 3 17 3H12M16 20L17 22M8 20L7 22" stroke="#0E1730" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M15.4004 8H8.60039C8.26939 8 8.00439 7.732 8.04039 7.402C8.18639 6.075 8.86339 3 12.0004 3C15.1374 3 15.8144 6.075 15.9604 7.402C15.9964 7.732 15.7314 8 15.4004 8Z" stroke="#0E1730" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>                                                                                                                      
                                    </div>
                                    <h6 className="accomodation__box-list-text">Bath</h6>
                                </div>
                            </div>
                        </div>
                        <div className="accomodation__content">
                            <h3 className="accomodation__dolar">$120<span>/day</span></h3>
                            <h5 className="accomodation__title">Porcha Taycan Sport</h5>
                            <p>To be welcomed and every pain avoided de But in certain circumstances and owing </p>
                            <a className="rr-btn-4 mt-20" href="contact.html">Book Now <i className="fa-solid fa-plus"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="accomodation__item mb-30">
                        <div className="accomodation__thumb">
                            <img src="assets/imgs/home-1/accomodation-img2.png" alt="img not found"/>
                            <div className="accomodation__box">
                                <div className="accomodation__box-list">
                                    <div className="accomodation__box-list-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.25 19.5V14.25C2.25235 13.4551 2.56917 12.6934 3.13128 12.1313C3.69338 11.5692 4.45507 11.2523 5.25 11.25H18.75C19.5449 11.2523 20.3066 11.5692 20.8687 12.1313C21.4308 12.6934 21.7477 13.4551 21.75 14.25V19.5M18 11.25H4.5V6.375C4.50148 5.87818 4.6995 5.40212 5.05081 5.05081C5.40212 4.6995 5.87818 4.50148 6.375 4.5H17.625C18.1218 4.50148 18.5979 4.6995 18.9492 5.05081C19.3005 5.40212 19.4985 5.87818 19.5 6.375V11.25H18Z" stroke="#0E1730" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M2.25 19.5V19.125C2.25087 18.8269 2.36967 18.5413 2.58046 18.3305C2.79125 18.1197 3.0769 18.0009 3.375 18H20.625C20.9231 18.0009 21.2087 18.1197 21.4195 18.3305C21.6303 18.5413 21.7491 18.8269 21.75 19.125V19.5M5.25 11.25V10.5C5.25111 10.1025 5.40951 9.72163 5.69057 9.44057C5.97163 9.15951 6.35252 9.00111 6.75 9H10.5C10.8975 9.00111 11.2784 9.15951 11.5594 9.44057C11.8405 9.72163 11.9989 10.1025 12 10.5M12 10.5V11.25M12 10.5C12.0011 10.1025 12.1595 9.72163 12.4406 9.44057C12.7216 9.15951 13.1025 9.00111 13.5 9H17.25C17.6475 9.00111 18.0284 9.15951 18.3094 9.44057C18.5905 9.72163 18.7489 10.1025 18.75 10.5V11.25" stroke="#0E1730" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>                                                                             
                                    </div>
                                    <h6 className="accomodation__box-list-text">2 Bed</h6>
                                </div>
                                <div className="accomodation__box-list">
                                    <div className="accomodation__box-list-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.0935 4.75H6.125C5.89294 4.75 5.67038 4.84219 5.50628 5.00628C5.34219 5.17038 5.25 5.39294 5.25 5.625V19.875C5.25 20.3585 5.642 20.75 6.125 20.75H17.875C18.1071 20.75 18.3296 20.6578 18.4937 20.4937C18.6578 20.3296 18.75 20.1071 18.75 19.875V5.625C18.75 5.39294 18.6578 5.17038 18.4937 5.00628C18.3296 4.84219 18.1071 4.75 17.875 4.75H15.9065C15.7727 5.18433 15.5032 5.56434 15.1376 5.8343C14.772 6.10426 14.3295 6.24995 13.875 6.25H10.125C9.67052 6.24995 9.22802 6.10426 8.86241 5.8343C8.4968 5.56434 8.22732 5.18433 8.0935 4.75ZM15.9065 3.5H17.875C18.4386 3.5 18.9791 3.72388 19.3776 4.1224C19.7761 4.52091 20 5.06141 20 5.625V19.875C20 20.4386 19.7761 20.9791 19.3776 21.3776C18.9791 21.7761 18.4386 22 17.875 22H6.125C5.56141 22 5.02091 21.7761 4.6224 21.3776C4.22388 20.9791 4 20.4386 4 19.875V5.625C4 5.06141 4.22388 4.52091 4.6224 4.1224C5.02091 3.72388 5.56141 3.5 6.125 3.5H8.0935C8.22732 3.06567 8.4968 2.68566 8.86241 2.4157C9.22802 2.14574 9.67052 2.00005 10.125 2H13.875C14.3295 2.00005 14.772 2.14574 15.1376 2.4157C15.5032 2.68566 15.7727 3.06567 15.9065 3.5ZM9.25 4.125C9.25 4.608 9.642 5 10.125 5H13.875C13.9899 5 14.1037 4.97737 14.2098 4.93339C14.316 4.88942 14.4125 4.82497 14.4937 4.74372C14.575 4.66247 14.6394 4.56601 14.6834 4.45985C14.7274 4.35369 14.75 4.23991 14.75 4.125C14.75 4.01009 14.7274 3.89631 14.6834 3.79015C14.6394 3.68399 14.575 3.58753 14.4937 3.50628C14.4125 3.42503 14.316 3.36058 14.2098 3.31661C14.1037 3.27263 13.9899 3.25 13.875 3.25H10.125C9.89294 3.25 9.67038 3.34219 9.50628 3.50628C9.34219 3.67038 9.25 3.89294 9.25 4.125ZM12 8.75C11.6022 8.75 11.2206 8.90804 10.9393 9.18934C10.658 9.47064 10.5 9.85218 10.5 10.25C10.5 10.6478 10.658 11.0294 10.9393 11.3107C11.2206 11.592 11.6022 11.75 12 11.75C12.3978 11.75 12.7794 11.592 13.0607 11.3107C13.342 11.0294 13.5 10.6478 13.5 10.25C13.5 9.85218 13.342 9.47064 13.0607 9.18934C12.7794 8.90804 12.3978 8.75 12 8.75ZM9.25 10.25C9.25 9.52065 9.53973 8.82118 10.0555 8.30546C10.5712 7.78973 11.2707 7.5 12 7.5C12.7293 7.5 13.4288 7.78973 13.9445 8.30546C14.4603 8.82118 14.75 9.52065 14.75 10.25C14.75 10.9793 14.4603 11.6788 13.9445 12.1945C13.4288 12.7103 12.7293 13 12 13C11.2707 13 10.5712 12.7103 10.0555 12.1945C9.53973 11.6788 9.25 10.9793 9.25 10.25ZM8.25 15.9C8.25 15.7276 8.31848 15.5623 8.44038 15.4404C8.56228 15.3185 8.72761 15.25 8.9 15.25H15.1C15.2724 15.25 15.4377 15.3185 15.5596 15.4404C15.6815 15.5623 15.75 15.7276 15.75 15.9C15.75 16.6285 15.4115 17.185 14.787 17.586C14.1385 18.003 13.175 18.25 12 18.25C10.825 18.25 9.8615 18.003 9.213 17.586C8.5885 17.185 8.25 16.6285 8.25 15.9ZM8.9 14C8.39609 14 7.91282 14.2002 7.5565 14.5565C7.20018 14.9128 7 15.3961 7 15.9C7 17.1035 7.599 18.035 8.537 18.6375C9.451 19.2255 10.675 19.5 12 19.5C13.325 19.5 14.549 19.225 15.463 18.6375C16.401 18.035 17 17.1035 17 15.9C17 15.6505 16.9509 15.4034 16.8554 15.1729C16.7599 14.9424 16.6199 14.7329 16.4435 14.5565C16.2671 14.3801 16.0576 14.2401 15.8271 14.1446C15.5966 14.0491 15.3495 14 15.1 14H8.9Z" fill="#0E1730"/>
                                        </svg>                                                                                                                   
                                    </div>
                                    <h6 className="accomodation__box-list-text">2 Guest</h6>
                                </div>
                                <div className="accomodation__box-list">
                                    <div className="accomodation__box-list-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 13V16C21 17.0609 20.5786 18.0783 19.8284 18.8284C19.0783 19.5786 18.0609 20 17 20H7C5.93913 20 4.92172 19.5786 4.17157 18.8284C3.42143 18.0783 3 17.0609 3 16V13.6C3 13.4409 3.06321 13.2883 3.17574 13.1757C3.28826 13.0632 3.44087 13 3.6 13H21ZM21 13V7C21 5.93913 20.5786 4.92172 19.8284 4.17157C19.0783 3.42143 18.0609 3 17 3H12M16 20L17 22M8 20L7 22" stroke="#0E1730" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M15.4004 8H8.60039C8.26939 8 8.00439 7.732 8.04039 7.402C8.18639 6.075 8.86339 3 12.0004 3C15.1374 3 15.8144 6.075 15.9604 7.402C15.9964 7.732 15.7314 8 15.4004 8Z" stroke="#0E1730" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>                                                                                                                      
                                    </div>
                                    <h6 className="accomodation__box-list-text">Bath</h6>
                                </div>
                            </div>
                        </div>
                        <div className="accomodation__content">
                            <h3 className="accomodation__dolar">$110<span>/day</span></h3>
                            <h5 className="accomodation__title">Modern Duplex Room</h5>
                            <p>To be welcomed and every pain avoided de But in certain circumstances and owing </p>
                            <a className="rr-btn-4 mt-20" href="contact.html">Book Now <i className="fa-solid fa-plus"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="accomodation__item mb-30">
                        <div className="accomodation__thumb">
                            <img src="assets/imgs/home-1/accomodation-img3.png" alt="img not found"/>
                            <div className="accomodation__box">
                                <div className="accomodation__box-list">
                                    <div className="accomodation__box-list-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.25 19.5V14.25C2.25235 13.4551 2.56917 12.6934 3.13128 12.1313C3.69338 11.5692 4.45507 11.2523 5.25 11.25H18.75C19.5449 11.2523 20.3066 11.5692 20.8687 12.1313C21.4308 12.6934 21.7477 13.4551 21.75 14.25V19.5M18 11.25H4.5V6.375C4.50148 5.87818 4.6995 5.40212 5.05081 5.05081C5.40212 4.6995 5.87818 4.50148 6.375 4.5H17.625C18.1218 4.50148 18.5979 4.6995 18.9492 5.05081C19.3005 5.40212 19.4985 5.87818 19.5 6.375V11.25H18Z" stroke="#0E1730" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M2.25 19.5V19.125C2.25087 18.8269 2.36967 18.5413 2.58046 18.3305C2.79125 18.1197 3.0769 18.0009 3.375 18H20.625C20.9231 18.0009 21.2087 18.1197 21.4195 18.3305C21.6303 18.5413 21.7491 18.8269 21.75 19.125V19.5M5.25 11.25V10.5C5.25111 10.1025 5.40951 9.72163 5.69057 9.44057C5.97163 9.15951 6.35252 9.00111 6.75 9H10.5C10.8975 9.00111 11.2784 9.15951 11.5594 9.44057C11.8405 9.72163 11.9989 10.1025 12 10.5M12 10.5V11.25M12 10.5C12.0011 10.1025 12.1595 9.72163 12.4406 9.44057C12.7216 9.15951 13.1025 9.00111 13.5 9H17.25C17.6475 9.00111 18.0284 9.15951 18.3094 9.44057C18.5905 9.72163 18.7489 10.1025 18.75 10.5V11.25" stroke="#0E1730" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>                                                                             
                                    </div>
                                    <h6 className="accomodation__box-list-text">2 Bed</h6>
                                </div>
                                <div className="accomodation__box-list">
                                    <div className="accomodation__box-list-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.0935 4.75H6.125C5.89294 4.75 5.67038 4.84219 5.50628 5.00628C5.34219 5.17038 5.25 5.39294 5.25 5.625V19.875C5.25 20.3585 5.642 20.75 6.125 20.75H17.875C18.1071 20.75 18.3296 20.6578 18.4937 20.4937C18.6578 20.3296 18.75 20.1071 18.75 19.875V5.625C18.75 5.39294 18.6578 5.17038 18.4937 5.00628C18.3296 4.84219 18.1071 4.75 17.875 4.75H15.9065C15.7727 5.18433 15.5032 5.56434 15.1376 5.8343C14.772 6.10426 14.3295 6.24995 13.875 6.25H10.125C9.67052 6.24995 9.22802 6.10426 8.86241 5.8343C8.4968 5.56434 8.22732 5.18433 8.0935 4.75ZM15.9065 3.5H17.875C18.4386 3.5 18.9791 3.72388 19.3776 4.1224C19.7761 4.52091 20 5.06141 20 5.625V19.875C20 20.4386 19.7761 20.9791 19.3776 21.3776C18.9791 21.7761 18.4386 22 17.875 22H6.125C5.56141 22 5.02091 21.7761 4.6224 21.3776C4.22388 20.9791 4 20.4386 4 19.875V5.625C4 5.06141 4.22388 4.52091 4.6224 4.1224C5.02091 3.72388 5.56141 3.5 6.125 3.5H8.0935C8.22732 3.06567 8.4968 2.68566 8.86241 2.4157C9.22802 2.14574 9.67052 2.00005 10.125 2H13.875C14.3295 2.00005 14.772 2.14574 15.1376 2.4157C15.5032 2.68566 15.7727 3.06567 15.9065 3.5ZM9.25 4.125C9.25 4.608 9.642 5 10.125 5H13.875C13.9899 5 14.1037 4.97737 14.2098 4.93339C14.316 4.88942 14.4125 4.82497 14.4937 4.74372C14.575 4.66247 14.6394 4.56601 14.6834 4.45985C14.7274 4.35369 14.75 4.23991 14.75 4.125C14.75 4.01009 14.7274 3.89631 14.6834 3.79015C14.6394 3.68399 14.575 3.58753 14.4937 3.50628C14.4125 3.42503 14.316 3.36058 14.2098 3.31661C14.1037 3.27263 13.9899 3.25 13.875 3.25H10.125C9.89294 3.25 9.67038 3.34219 9.50628 3.50628C9.34219 3.67038 9.25 3.89294 9.25 4.125ZM12 8.75C11.6022 8.75 11.2206 8.90804 10.9393 9.18934C10.658 9.47064 10.5 9.85218 10.5 10.25C10.5 10.6478 10.658 11.0294 10.9393 11.3107C11.2206 11.592 11.6022 11.75 12 11.75C12.3978 11.75 12.7794 11.592 13.0607 11.3107C13.342 11.0294 13.5 10.6478 13.5 10.25C13.5 9.85218 13.342 9.47064 13.0607 9.18934C12.7794 8.90804 12.3978 8.75 12 8.75ZM9.25 10.25C9.25 9.52065 9.53973 8.82118 10.0555 8.30546C10.5712 7.78973 11.2707 7.5 12 7.5C12.7293 7.5 13.4288 7.78973 13.9445 8.30546C14.4603 8.82118 14.75 9.52065 14.75 10.25C14.75 10.9793 14.4603 11.6788 13.9445 12.1945C13.4288 12.7103 12.7293 13 12 13C11.2707 13 10.5712 12.7103 10.0555 12.1945C9.53973 11.6788 9.25 10.9793 9.25 10.25ZM8.25 15.9C8.25 15.7276 8.31848 15.5623 8.44038 15.4404C8.56228 15.3185 8.72761 15.25 8.9 15.25H15.1C15.2724 15.25 15.4377 15.3185 15.5596 15.4404C15.6815 15.5623 15.75 15.7276 15.75 15.9C15.75 16.6285 15.4115 17.185 14.787 17.586C14.1385 18.003 13.175 18.25 12 18.25C10.825 18.25 9.8615 18.003 9.213 17.586C8.5885 17.185 8.25 16.6285 8.25 15.9ZM8.9 14C8.39609 14 7.91282 14.2002 7.5565 14.5565C7.20018 14.9128 7 15.3961 7 15.9C7 17.1035 7.599 18.035 8.537 18.6375C9.451 19.2255 10.675 19.5 12 19.5C13.325 19.5 14.549 19.225 15.463 18.6375C16.401 18.035 17 17.1035 17 15.9C17 15.6505 16.9509 15.4034 16.8554 15.1729C16.7599 14.9424 16.6199 14.7329 16.4435 14.5565C16.2671 14.3801 16.0576 14.2401 15.8271 14.1446C15.5966 14.0491 15.3495 14 15.1 14H8.9Z" fill="#0E1730"/>
                                        </svg>                                                                                                                   
                                    </div>
                                    <h6 className="accomodation__box-list-text">2 Guest</h6>
                                </div>
                                <div className="accomodation__box-list">
                                    <div className="accomodation__box-list-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 13V16C21 17.0609 20.5786 18.0783 19.8284 18.8284C19.0783 19.5786 18.0609 20 17 20H7C5.93913 20 4.92172 19.5786 4.17157 18.8284C3.42143 18.0783 3 17.0609 3 16V13.6C3 13.4409 3.06321 13.2883 3.17574 13.1757C3.28826 13.0632 3.44087 13 3.6 13H21ZM21 13V7C21 5.93913 20.5786 4.92172 19.8284 4.17157C19.0783 3.42143 18.0609 3 17 3H12M16 20L17 22M8 20L7 22" stroke="#0E1730" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M15.4004 8H8.60039C8.26939 8 8.00439 7.732 8.04039 7.402C8.18639 6.075 8.86339 3 12.0004 3C15.1374 3 15.8144 6.075 15.9604 7.402C15.9964 7.732 15.7314 8 15.4004 8Z" stroke="#0E1730" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>                                                                                                                      
                                    </div>
                                    <h6 className="accomodation__box-list-text">Bath</h6>
                                </div>
                            </div>
                        </div>
                        <div className="accomodation__content">
                            <h3 className="accomodation__dolar">$130<span>/day</span></h3>
                            <h5 className="accomodation__title">Standard Duplex Room</h5>
                            <p>To be welcomed and every pain avoided de But in certain circumstances and owing </p>
                            <a className="rr-btn-4 mt-20" href="contact.html">Book Now <i className="fa-solid fa-plus"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="accomodation__item mb-30">
                        <div className="accomodation__thumb">
                            <img src="assets/imgs/home-1/accomodation-img4.png" alt="img not found"/>
                            <div className="accomodation__box">
                                <div className="accomodation__box-list">
                                    <div className="accomodation__box-list-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.25 19.5V14.25C2.25235 13.4551 2.56917 12.6934 3.13128 12.1313C3.69338 11.5692 4.45507 11.2523 5.25 11.25H18.75C19.5449 11.2523 20.3066 11.5692 20.8687 12.1313C21.4308 12.6934 21.7477 13.4551 21.75 14.25V19.5M18 11.25H4.5V6.375C4.50148 5.87818 4.6995 5.40212 5.05081 5.05081C5.40212 4.6995 5.87818 4.50148 6.375 4.5H17.625C18.1218 4.50148 18.5979 4.6995 18.9492 5.05081C19.3005 5.40212 19.4985 5.87818 19.5 6.375V11.25H18Z" stroke="#0E1730" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M2.25 19.5V19.125C2.25087 18.8269 2.36967 18.5413 2.58046 18.3305C2.79125 18.1197 3.0769 18.0009 3.375 18H20.625C20.9231 18.0009 21.2087 18.1197 21.4195 18.3305C21.6303 18.5413 21.7491 18.8269 21.75 19.125V19.5M5.25 11.25V10.5C5.25111 10.1025 5.40951 9.72163 5.69057 9.44057C5.97163 9.15951 6.35252 9.00111 6.75 9H10.5C10.8975 9.00111 11.2784 9.15951 11.5594 9.44057C11.8405 9.72163 11.9989 10.1025 12 10.5M12 10.5V11.25M12 10.5C12.0011 10.1025 12.1595 9.72163 12.4406 9.44057C12.7216 9.15951 13.1025 9.00111 13.5 9H17.25C17.6475 9.00111 18.0284 9.15951 18.3094 9.44057C18.5905 9.72163 18.7489 10.1025 18.75 10.5V11.25" stroke="#0E1730" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>                                                                             
                                    </div>
                                    <h6 className="accomodation__box-list-text">2 Bed</h6>
                                </div>
                                <div className="accomodation__box-list">
                                    <div className="accomodation__box-list-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.0935 4.75H6.125C5.89294 4.75 5.67038 4.84219 5.50628 5.00628C5.34219 5.17038 5.25 5.39294 5.25 5.625V19.875C5.25 20.3585 5.642 20.75 6.125 20.75H17.875C18.1071 20.75 18.3296 20.6578 18.4937 20.4937C18.6578 20.3296 18.75 20.1071 18.75 19.875V5.625C18.75 5.39294 18.6578 5.17038 18.4937 5.00628C18.3296 4.84219 18.1071 4.75 17.875 4.75H15.9065C15.7727 5.18433 15.5032 5.56434 15.1376 5.8343C14.772 6.10426 14.3295 6.24995 13.875 6.25H10.125C9.67052 6.24995 9.22802 6.10426 8.86241 5.8343C8.4968 5.56434 8.22732 5.18433 8.0935 4.75ZM15.9065 3.5H17.875C18.4386 3.5 18.9791 3.72388 19.3776 4.1224C19.7761 4.52091 20 5.06141 20 5.625V19.875C20 20.4386 19.7761 20.9791 19.3776 21.3776C18.9791 21.7761 18.4386 22 17.875 22H6.125C5.56141 22 5.02091 21.7761 4.6224 21.3776C4.22388 20.9791 4 20.4386 4 19.875V5.625C4 5.06141 4.22388 4.52091 4.6224 4.1224C5.02091 3.72388 5.56141 3.5 6.125 3.5H8.0935C8.22732 3.06567 8.4968 2.68566 8.86241 2.4157C9.22802 2.14574 9.67052 2.00005 10.125 2H13.875C14.3295 2.00005 14.772 2.14574 15.1376 2.4157C15.5032 2.68566 15.7727 3.06567 15.9065 3.5ZM9.25 4.125C9.25 4.608 9.642 5 10.125 5H13.875C13.9899 5 14.1037 4.97737 14.2098 4.93339C14.316 4.88942 14.4125 4.82497 14.4937 4.74372C14.575 4.66247 14.6394 4.56601 14.6834 4.45985C14.7274 4.35369 14.75 4.23991 14.75 4.125C14.75 4.01009 14.7274 3.89631 14.6834 3.79015C14.6394 3.68399 14.575 3.58753 14.4937 3.50628C14.4125 3.42503 14.316 3.36058 14.2098 3.31661C14.1037 3.27263 13.9899 3.25 13.875 3.25H10.125C9.89294 3.25 9.67038 3.34219 9.50628 3.50628C9.34219 3.67038 9.25 3.89294 9.25 4.125ZM12 8.75C11.6022 8.75 11.2206 8.90804 10.9393 9.18934C10.658 9.47064 10.5 9.85218 10.5 10.25C10.5 10.6478 10.658 11.0294 10.9393 11.3107C11.2206 11.592 11.6022 11.75 12 11.75C12.3978 11.75 12.7794 11.592 13.0607 11.3107C13.342 11.0294 13.5 10.6478 13.5 10.25C13.5 9.85218 13.342 9.47064 13.0607 9.18934C12.7794 8.90804 12.3978 8.75 12 8.75ZM9.25 10.25C9.25 9.52065 9.53973 8.82118 10.0555 8.30546C10.5712 7.78973 11.2707 7.5 12 7.5C12.7293 7.5 13.4288 7.78973 13.9445 8.30546C14.4603 8.82118 14.75 9.52065 14.75 10.25C14.75 10.9793 14.4603 11.6788 13.9445 12.1945C13.4288 12.7103 12.7293 13 12 13C11.2707 13 10.5712 12.7103 10.0555 12.1945C9.53973 11.6788 9.25 10.9793 9.25 10.25ZM8.25 15.9C8.25 15.7276 8.31848 15.5623 8.44038 15.4404C8.56228 15.3185 8.72761 15.25 8.9 15.25H15.1C15.2724 15.25 15.4377 15.3185 15.5596 15.4404C15.6815 15.5623 15.75 15.7276 15.75 15.9C15.75 16.6285 15.4115 17.185 14.787 17.586C14.1385 18.003 13.175 18.25 12 18.25C10.825 18.25 9.8615 18.003 9.213 17.586C8.5885 17.185 8.25 16.6285 8.25 15.9ZM8.9 14C8.39609 14 7.91282 14.2002 7.5565 14.5565C7.20018 14.9128 7 15.3961 7 15.9C7 17.1035 7.599 18.035 8.537 18.6375C9.451 19.2255 10.675 19.5 12 19.5C13.325 19.5 14.549 19.225 15.463 18.6375C16.401 18.035 17 17.1035 17 15.9C17 15.6505 16.9509 15.4034 16.8554 15.1729C16.7599 14.9424 16.6199 14.7329 16.4435 14.5565C16.2671 14.3801 16.0576 14.2401 15.8271 14.1446C15.5966 14.0491 15.3495 14 15.1 14H8.9Z" fill="#0E1730"/>
                                        </svg>                                                                                                                   
                                    </div>
                                    <h6 className="accomodation__box-list-text">2 Guest</h6>
                                </div>
                                <div className="accomodation__box-list">
                                    <div className="accomodation__box-list-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 13V16C21 17.0609 20.5786 18.0783 19.8284 18.8284C19.0783 19.5786 18.0609 20 17 20H7C5.93913 20 4.92172 19.5786 4.17157 18.8284C3.42143 18.0783 3 17.0609 3 16V13.6C3 13.4409 3.06321 13.2883 3.17574 13.1757C3.28826 13.0632 3.44087 13 3.6 13H21ZM21 13V7C21 5.93913 20.5786 4.92172 19.8284 4.17157C19.0783 3.42143 18.0609 3 17 3H12M16 20L17 22M8 20L7 22" stroke="#0E1730" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M15.4004 8H8.60039C8.26939 8 8.00439 7.732 8.04039 7.402C8.18639 6.075 8.86339 3 12.0004 3C15.1374 3 15.8144 6.075 15.9604 7.402C15.9964 7.732 15.7314 8 15.4004 8Z" stroke="#0E1730" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>                                                                                                                      
                                    </div>
                                    <h6 className="accomodation__box-list-text">Bath</h6>
                                </div>
                            </div>
                        </div>
                        <div className="accomodation__content">
                            <h3 className="accomodation__dolar">$135<span>/day</span></h3>
                            <h5 className="accomodation__title">Modern Duplex Room</h5>
                            <p>To be welcomed and every pain avoided de But in certain circumstances and owing </p>
                            <a className="rr-btn-4 mt-20" href="contact.html">Book Now <i className="fa-solid fa-plus"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="accomodation__item mb-30">
                        <div className="accomodation__thumb">
                            <img src="assets/imgs/home-1/accomodation-img5.png" alt="img not found"/>
                            <div className="accomodation__box">
                                <div className="accomodation__box-list">
                                    <div className="accomodation__box-list-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.25 19.5V14.25C2.25235 13.4551 2.56917 12.6934 3.13128 12.1313C3.69338 11.5692 4.45507 11.2523 5.25 11.25H18.75C19.5449 11.2523 20.3066 11.5692 20.8687 12.1313C21.4308 12.6934 21.7477 13.4551 21.75 14.25V19.5M18 11.25H4.5V6.375C4.50148 5.87818 4.6995 5.40212 5.05081 5.05081C5.40212 4.6995 5.87818 4.50148 6.375 4.5H17.625C18.1218 4.50148 18.5979 4.6995 18.9492 5.05081C19.3005 5.40212 19.4985 5.87818 19.5 6.375V11.25H18Z" stroke="#0E1730" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M2.25 19.5V19.125C2.25087 18.8269 2.36967 18.5413 2.58046 18.3305C2.79125 18.1197 3.0769 18.0009 3.375 18H20.625C20.9231 18.0009 21.2087 18.1197 21.4195 18.3305C21.6303 18.5413 21.7491 18.8269 21.75 19.125V19.5M5.25 11.25V10.5C5.25111 10.1025 5.40951 9.72163 5.69057 9.44057C5.97163 9.15951 6.35252 9.00111 6.75 9H10.5C10.8975 9.00111 11.2784 9.15951 11.5594 9.44057C11.8405 9.72163 11.9989 10.1025 12 10.5M12 10.5V11.25M12 10.5C12.0011 10.1025 12.1595 9.72163 12.4406 9.44057C12.7216 9.15951 13.1025 9.00111 13.5 9H17.25C17.6475 9.00111 18.0284 9.15951 18.3094 9.44057C18.5905 9.72163 18.7489 10.1025 18.75 10.5V11.25" stroke="#0E1730" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>                                                                             
                                    </div>
                                    <h6 className="accomodation__box-list-text">2 Bed</h6>
                                </div>
                                <div className="accomodation__box-list">
                                    <div className="accomodation__box-list-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.0935 4.75H6.125C5.89294 4.75 5.67038 4.84219 5.50628 5.00628C5.34219 5.17038 5.25 5.39294 5.25 5.625V19.875C5.25 20.3585 5.642 20.75 6.125 20.75H17.875C18.1071 20.75 18.3296 20.6578 18.4937 20.4937C18.6578 20.3296 18.75 20.1071 18.75 19.875V5.625C18.75 5.39294 18.6578 5.17038 18.4937 5.00628C18.3296 4.84219 18.1071 4.75 17.875 4.75H15.9065C15.7727 5.18433 15.5032 5.56434 15.1376 5.8343C14.772 6.10426 14.3295 6.24995 13.875 6.25H10.125C9.67052 6.24995 9.22802 6.10426 8.86241 5.8343C8.4968 5.56434 8.22732 5.18433 8.0935 4.75ZM15.9065 3.5H17.875C18.4386 3.5 18.9791 3.72388 19.3776 4.1224C19.7761 4.52091 20 5.06141 20 5.625V19.875C20 20.4386 19.7761 20.9791 19.3776 21.3776C18.9791 21.7761 18.4386 22 17.875 22H6.125C5.56141 22 5.02091 21.7761 4.6224 21.3776C4.22388 20.9791 4 20.4386 4 19.875V5.625C4 5.06141 4.22388 4.52091 4.6224 4.1224C5.02091 3.72388 5.56141 3.5 6.125 3.5H8.0935C8.22732 3.06567 8.4968 2.68566 8.86241 2.4157C9.22802 2.14574 9.67052 2.00005 10.125 2H13.875C14.3295 2.00005 14.772 2.14574 15.1376 2.4157C15.5032 2.68566 15.7727 3.06567 15.9065 3.5ZM9.25 4.125C9.25 4.608 9.642 5 10.125 5H13.875C13.9899 5 14.1037 4.97737 14.2098 4.93339C14.316 4.88942 14.4125 4.82497 14.4937 4.74372C14.575 4.66247 14.6394 4.56601 14.6834 4.45985C14.7274 4.35369 14.75 4.23991 14.75 4.125C14.75 4.01009 14.7274 3.89631 14.6834 3.79015C14.6394 3.68399 14.575 3.58753 14.4937 3.50628C14.4125 3.42503 14.316 3.36058 14.2098 3.31661C14.1037 3.27263 13.9899 3.25 13.875 3.25H10.125C9.89294 3.25 9.67038 3.34219 9.50628 3.50628C9.34219 3.67038 9.25 3.89294 9.25 4.125ZM12 8.75C11.6022 8.75 11.2206 8.90804 10.9393 9.18934C10.658 9.47064 10.5 9.85218 10.5 10.25C10.5 10.6478 10.658 11.0294 10.9393 11.3107C11.2206 11.592 11.6022 11.75 12 11.75C12.3978 11.75 12.7794 11.592 13.0607 11.3107C13.342 11.0294 13.5 10.6478 13.5 10.25C13.5 9.85218 13.342 9.47064 13.0607 9.18934C12.7794 8.90804 12.3978 8.75 12 8.75ZM9.25 10.25C9.25 9.52065 9.53973 8.82118 10.0555 8.30546C10.5712 7.78973 11.2707 7.5 12 7.5C12.7293 7.5 13.4288 7.78973 13.9445 8.30546C14.4603 8.82118 14.75 9.52065 14.75 10.25C14.75 10.9793 14.4603 11.6788 13.9445 12.1945C13.4288 12.7103 12.7293 13 12 13C11.2707 13 10.5712 12.7103 10.0555 12.1945C9.53973 11.6788 9.25 10.9793 9.25 10.25ZM8.25 15.9C8.25 15.7276 8.31848 15.5623 8.44038 15.4404C8.56228 15.3185 8.72761 15.25 8.9 15.25H15.1C15.2724 15.25 15.4377 15.3185 15.5596 15.4404C15.6815 15.5623 15.75 15.7276 15.75 15.9C15.75 16.6285 15.4115 17.185 14.787 17.586C14.1385 18.003 13.175 18.25 12 18.25C10.825 18.25 9.8615 18.003 9.213 17.586C8.5885 17.185 8.25 16.6285 8.25 15.9ZM8.9 14C8.39609 14 7.91282 14.2002 7.5565 14.5565C7.20018 14.9128 7 15.3961 7 15.9C7 17.1035 7.599 18.035 8.537 18.6375C9.451 19.2255 10.675 19.5 12 19.5C13.325 19.5 14.549 19.225 15.463 18.6375C16.401 18.035 17 17.1035 17 15.9C17 15.6505 16.9509 15.4034 16.8554 15.1729C16.7599 14.9424 16.6199 14.7329 16.4435 14.5565C16.2671 14.3801 16.0576 14.2401 15.8271 14.1446C15.5966 14.0491 15.3495 14 15.1 14H8.9Z" fill="#0E1730"/>
                                        </svg>                                                                                                                   
                                    </div>
                                    <h6 className="accomodation__box-list-text">2 Guest</h6>
                                </div>
                                <div className="accomodation__box-list">
                                    <div className="accomodation__box-list-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 13V16C21 17.0609 20.5786 18.0783 19.8284 18.8284C19.0783 19.5786 18.0609 20 17 20H7C5.93913 20 4.92172 19.5786 4.17157 18.8284C3.42143 18.0783 3 17.0609 3 16V13.6C3 13.4409 3.06321 13.2883 3.17574 13.1757C3.28826 13.0632 3.44087 13 3.6 13H21ZM21 13V7C21 5.93913 20.5786 4.92172 19.8284 4.17157C19.0783 3.42143 18.0609 3 17 3H12M16 20L17 22M8 20L7 22" stroke="#0E1730" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M15.4004 8H8.60039C8.26939 8 8.00439 7.732 8.04039 7.402C8.18639 6.075 8.86339 3 12.0004 3C15.1374 3 15.8144 6.075 15.9604 7.402C15.9964 7.732 15.7314 8 15.4004 8Z" stroke="#0E1730" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>                                                                                                                      
                                    </div>
                                    <h6 className="accomodation__box-list-text">Bath</h6>
                                </div>
                            </div>
                        </div>
                        <div className="accomodation__content">
                            <h3 className="accomodation__dolar">$125<span>/day</span></h3>
                            <h5 className="accomodation__title">Standard Duplex Room</h5>
                            <p>To be welcomed and every pain avoided de But in certain circumstances and owing </p>
                            <a className="rr-btn-4 mt-20" href="contact.html">Book Now <i className="fa-solid fa-plus"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="accomodation__item mb-30">
                        <div className="accomodation__thumb">
                            <img src="assets/imgs/home-1/accomodation-img6.png" alt="img not found"/>
                            <div className="accomodation__box">
                                <div className="accomodation__box-list">
                                    <div className="accomodation__box-list-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.25 19.5V14.25C2.25235 13.4551 2.56917 12.6934 3.13128 12.1313C3.69338 11.5692 4.45507 11.2523 5.25 11.25H18.75C19.5449 11.2523 20.3066 11.5692 20.8687 12.1313C21.4308 12.6934 21.7477 13.4551 21.75 14.25V19.5M18 11.25H4.5V6.375C4.50148 5.87818 4.6995 5.40212 5.05081 5.05081C5.40212 4.6995 5.87818 4.50148 6.375 4.5H17.625C18.1218 4.50148 18.5979 4.6995 18.9492 5.05081C19.3005 5.40212 19.4985 5.87818 19.5 6.375V11.25H18Z" stroke="#0E1730" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M2.25 19.5V19.125C2.25087 18.8269 2.36967 18.5413 2.58046 18.3305C2.79125 18.1197 3.0769 18.0009 3.375 18H20.625C20.9231 18.0009 21.2087 18.1197 21.4195 18.3305C21.6303 18.5413 21.7491 18.8269 21.75 19.125V19.5M5.25 11.25V10.5C5.25111 10.1025 5.40951 9.72163 5.69057 9.44057C5.97163 9.15951 6.35252 9.00111 6.75 9H10.5C10.8975 9.00111 11.2784 9.15951 11.5594 9.44057C11.8405 9.72163 11.9989 10.1025 12 10.5M12 10.5V11.25M12 10.5C12.0011 10.1025 12.1595 9.72163 12.4406 9.44057C12.7216 9.15951 13.1025 9.00111 13.5 9H17.25C17.6475 9.00111 18.0284 9.15951 18.3094 9.44057C18.5905 9.72163 18.7489 10.1025 18.75 10.5V11.25" stroke="#0E1730" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>                                                                             
                                    </div>
                                    <h6 className="accomodation__box-list-text">2 Bed</h6>
                                </div>
                                <div className="accomodation__box-list">
                                    <div className="accomodation__box-list-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.0935 4.75H6.125C5.89294 4.75 5.67038 4.84219 5.50628 5.00628C5.34219 5.17038 5.25 5.39294 5.25 5.625V19.875C5.25 20.3585 5.642 20.75 6.125 20.75H17.875C18.1071 20.75 18.3296 20.6578 18.4937 20.4937C18.6578 20.3296 18.75 20.1071 18.75 19.875V5.625C18.75 5.39294 18.6578 5.17038 18.4937 5.00628C18.3296 4.84219 18.1071 4.75 17.875 4.75H15.9065C15.7727 5.18433 15.5032 5.56434 15.1376 5.8343C14.772 6.10426 14.3295 6.24995 13.875 6.25H10.125C9.67052 6.24995 9.22802 6.10426 8.86241 5.8343C8.4968 5.56434 8.22732 5.18433 8.0935 4.75ZM15.9065 3.5H17.875C18.4386 3.5 18.9791 3.72388 19.3776 4.1224C19.7761 4.52091 20 5.06141 20 5.625V19.875C20 20.4386 19.7761 20.9791 19.3776 21.3776C18.9791 21.7761 18.4386 22 17.875 22H6.125C5.56141 22 5.02091 21.7761 4.6224 21.3776C4.22388 20.9791 4 20.4386 4 19.875V5.625C4 5.06141 4.22388 4.52091 4.6224 4.1224C5.02091 3.72388 5.56141 3.5 6.125 3.5H8.0935C8.22732 3.06567 8.4968 2.68566 8.86241 2.4157C9.22802 2.14574 9.67052 2.00005 10.125 2H13.875C14.3295 2.00005 14.772 2.14574 15.1376 2.4157C15.5032 2.68566 15.7727 3.06567 15.9065 3.5ZM9.25 4.125C9.25 4.608 9.642 5 10.125 5H13.875C13.9899 5 14.1037 4.97737 14.2098 4.93339C14.316 4.88942 14.4125 4.82497 14.4937 4.74372C14.575 4.66247 14.6394 4.56601 14.6834 4.45985C14.7274 4.35369 14.75 4.23991 14.75 4.125C14.75 4.01009 14.7274 3.89631 14.6834 3.79015C14.6394 3.68399 14.575 3.58753 14.4937 3.50628C14.4125 3.42503 14.316 3.36058 14.2098 3.31661C14.1037 3.27263 13.9899 3.25 13.875 3.25H10.125C9.89294 3.25 9.67038 3.34219 9.50628 3.50628C9.34219 3.67038 9.25 3.89294 9.25 4.125ZM12 8.75C11.6022 8.75 11.2206 8.90804 10.9393 9.18934C10.658 9.47064 10.5 9.85218 10.5 10.25C10.5 10.6478 10.658 11.0294 10.9393 11.3107C11.2206 11.592 11.6022 11.75 12 11.75C12.3978 11.75 12.7794 11.592 13.0607 11.3107C13.342 11.0294 13.5 10.6478 13.5 10.25C13.5 9.85218 13.342 9.47064 13.0607 9.18934C12.7794 8.90804 12.3978 8.75 12 8.75ZM9.25 10.25C9.25 9.52065 9.53973 8.82118 10.0555 8.30546C10.5712 7.78973 11.2707 7.5 12 7.5C12.7293 7.5 13.4288 7.78973 13.9445 8.30546C14.4603 8.82118 14.75 9.52065 14.75 10.25C14.75 10.9793 14.4603 11.6788 13.9445 12.1945C13.4288 12.7103 12.7293 13 12 13C11.2707 13 10.5712 12.7103 10.0555 12.1945C9.53973 11.6788 9.25 10.9793 9.25 10.25ZM8.25 15.9C8.25 15.7276 8.31848 15.5623 8.44038 15.4404C8.56228 15.3185 8.72761 15.25 8.9 15.25H15.1C15.2724 15.25 15.4377 15.3185 15.5596 15.4404C15.6815 15.5623 15.75 15.7276 15.75 15.9C15.75 16.6285 15.4115 17.185 14.787 17.586C14.1385 18.003 13.175 18.25 12 18.25C10.825 18.25 9.8615 18.003 9.213 17.586C8.5885 17.185 8.25 16.6285 8.25 15.9ZM8.9 14C8.39609 14 7.91282 14.2002 7.5565 14.5565C7.20018 14.9128 7 15.3961 7 15.9C7 17.1035 7.599 18.035 8.537 18.6375C9.451 19.2255 10.675 19.5 12 19.5C13.325 19.5 14.549 19.225 15.463 18.6375C16.401 18.035 17 17.1035 17 15.9C17 15.6505 16.9509 15.4034 16.8554 15.1729C16.7599 14.9424 16.6199 14.7329 16.4435 14.5565C16.2671 14.3801 16.0576 14.2401 15.8271 14.1446C15.5966 14.0491 15.3495 14 15.1 14H8.9Z" fill="#0E1730"/>
                                        </svg>                                                                                                                   
                                    </div>
                                    <h6 className="accomodation__box-list-text">2 Guest</h6>
                                </div>
                                <div className="accomodation__box-list">
                                    <div className="accomodation__box-list-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 13V16C21 17.0609 20.5786 18.0783 19.8284 18.8284C19.0783 19.5786 18.0609 20 17 20H7C5.93913 20 4.92172 19.5786 4.17157 18.8284C3.42143 18.0783 3 17.0609 3 16V13.6C3 13.4409 3.06321 13.2883 3.17574 13.1757C3.28826 13.0632 3.44087 13 3.6 13H21ZM21 13V7C21 5.93913 20.5786 4.92172 19.8284 4.17157C19.0783 3.42143 18.0609 3 17 3H12M16 20L17 22M8 20L7 22" stroke="#0E1730" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M15.4004 8H8.60039C8.26939 8 8.00439 7.732 8.04039 7.402C8.18639 6.075 8.86339 3 12.0004 3C15.1374 3 15.8144 6.075 15.9604 7.402C15.9964 7.732 15.7314 8 15.4004 8Z" stroke="#0E1730" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>                                                                                                                      
                                    </div>
                                    <h6 className="accomodation__box-list-text">Bath</h6>
                                </div>
                            </div>
                        </div>
                        <div className="accomodation__content">
                            <h3 className="accomodation__dolar">$115<span>/day</span></h3>
                            <h5 className="accomodation__title">Porcha Taycan Sport</h5>
                            <p>To be welcomed and every pain avoided de But in certain circumstances and owing </p>
                            <a className="rr-btn-4 mt-20" href="contact.html">Book Now <i className="fa-solid fa-plus"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section className="gallery__area section-space-bottom">
        <div className="container">
            <div className="row">
                <div className="section2__title-wrapper mb-60">
                    <h2 className="section2__title-wrapper-title wow fadeInLeft animated" data-wow-delay=".3s">Best Location in world</h2>
                </div>
            </div>
            <div className="row mb-minus-30">
                <div className="col-md-4">
                    <div className="gallery__item mb-30">
                        <div className="gallery__thumb gallery__thumb-2">
                            <img src="assets/imgs/gallery/img1.png" alt="img not found"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="gallery__item mb-30">
                        <div className="gallery__thumb">
                            <img src="assets/imgs/gallery/img2.png" alt="img not found"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="gallery__item mb-30">
                        <div className="gallery__thumb">
                            <img src="assets/imgs/gallery/img3.png" alt="img not found"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="gallery__item mb-30">
                        <div className="gallery__thumb">
                            <img src="assets/imgs/gallery/img4.png" alt="img not found"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="gallery__item mb-30">
                        <div className="gallery__thumb">
                            <img src="assets/imgs/gallery/img5.png" alt="img not found"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="gallery__item mb-30">
                        <div className="gallery__thumb">
                            <img src="assets/imgs/gallery/img6.png" alt="img not found"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>




    <section className="our-service__area section-space">
        <div className="container">
            <div className="row">
                <div className="section2__title-wrapper mb-60">
                    <h2 className="section2__title-wrapper-title wow fadeInLeft animated" data-wow-delay=".3s">Our Service</h2>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="our-service__thumb">
                        <img src="assets/imgs/service/faq-right.png" alt="img not found"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="rs__faq">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5236 18.0317C10.6302 18.1245 10.7621 18.17 10.8929 18.17C11.0074 18.1701 11.1193 18.1352 11.2135 18.0699C11.3077 18.0047 11.3797 17.9123 11.4199 17.805C11.4601 17.6977 11.4666 17.5807 11.4385 17.4696C11.4104 17.3585 11.3491 17.2587 11.2627 17.1834L10.7384 16.7264C11.1108 16.3278 11.6604 15.7361 11.8097 15.5533L12.2881 14.9733C12.3357 14.9164 12.3716 14.8507 12.3936 14.7799C12.4157 14.7091 12.4235 14.6346 12.4167 14.5607C12.4099 14.4869 12.3885 14.4151 12.3538 14.3495C12.3192 14.284 12.2719 14.2259 12.2146 14.1787C12.1574 14.1315 12.0915 14.096 12.0205 14.0744C11.9496 14.0528 11.875 14.0455 11.8012 14.0528C11.7274 14.0601 11.6558 14.0819 11.5904 14.117C11.5251 14.1521 11.4673 14.1998 11.4205 14.2573L10.9398 14.84C10.8265 14.9787 10.3571 15.4869 9.93295 15.9406L9.59685 15.6635C9.95404 15.1612 10.3571 14.6021 10.4766 14.4584L14.805 9.20659C14.8993 9.09465 15.1864 8.76503 15.3796 8.58868C15.5366 8.44553 15.7334 8.36453 15.9129 8.31868C15.907 8.52175 15.8811 8.72172 15.8198 8.83759C15.7655 8.9394 15.4893 9.31065 15.2719 9.58459L12.5137 12.9309C12.4652 12.9877 12.4285 13.0536 12.4058 13.1247C12.383 13.1958 12.3747 13.2708 12.3812 13.3452C12.3877 13.4196 12.409 13.4919 12.4438 13.558C12.4785 13.6241 12.5261 13.6826 12.5838 13.7301C12.6414 13.7776 12.7079 13.8132 12.7794 13.8347C12.8509 13.8562 12.926 13.8633 13.0002 13.8555C13.0745 13.8477 13.1465 13.8252 13.212 13.7893C13.2774 13.7534 13.3351 13.7048 13.3816 13.6464L13.9191 12.9945L14.8754 13.7828L16.8329 15.9181C16.9394 16.0345 17.0902 16.1003 17.2474 16.1003L17.2623 16.1C17.3428 16.0979 17.4218 16.0786 17.4942 16.0433C17.5665 16.008 17.6305 15.9577 17.6817 15.8956L18.4025 15.0214C18.5611 14.8285 18.5741 14.5546 18.434 14.3478L15.8926 10.5999L16.1463 10.2919C16.2701 10.1358 16.6838 9.60793 16.8132 9.36493C17.1445 8.73972 17.0252 7.79837 16.9979 7.61584C16.9789 7.48844 16.9167 7.37143 16.8218 7.2844C16.7268 7.19736 16.6048 7.14558 16.4762 7.13772C16.3637 7.13097 15.3538 7.08906 14.6208 7.75759C14.3339 8.01972 13.9596 8.46353 13.9402 8.48659L13.6677 8.81734L9.53329 7.00975C9.42123 6.96071 9.29624 6.94956 9.17726 6.97798C9.05829 7.0064 8.95184 7.07285 8.87404 7.16725L8.1532 8.04109C8.10205 8.10321 8.06481 8.17557 8.04399 8.2533C8.02317 8.33102 8.01925 8.41231 8.0325 8.49168C8.04574 8.57105 8.07585 8.64666 8.12078 8.71341C8.16571 8.78016 8.22443 8.83651 8.29298 8.87865L9.22279 9.44903C9.28576 9.48764 9.35573 9.51348 9.42868 9.52505C9.50164 9.53663 9.57616 9.53372 9.648 9.5165C9.71983 9.49928 9.78757 9.46807 9.84734 9.42467C9.90711 9.38127 9.95775 9.32652 9.99637 9.26354C10.035 9.20057 10.0608 9.13061 10.0724 9.05765C10.084 8.98469 10.0811 8.91017 10.0638 8.83834C10.0466 8.76651 10.0154 8.69877 9.97201 8.63899C9.92861 8.57922 9.87386 8.52858 9.81089 8.48997L9.43232 8.25793L9.47142 8.21068L12.9235 9.71987L12.4344 10.313L11.4525 9.50387C11.4228 9.47924 11.3905 9.45775 11.3564 9.43975L11.0864 9.298C11.021 9.26349 10.9495 9.24224 10.8759 9.23545C10.8023 9.22867 10.7281 9.23649 10.6575 9.25847C10.587 9.28045 10.5214 9.31615 10.4647 9.36352C10.408 9.4109 10.3612 9.46901 10.327 9.53453C10.2577 9.66656 10.2436 9.82073 10.2879 9.96313C10.3322 10.1055 10.4312 10.2245 10.5632 10.2939L10.7818 10.4087L11.7189 11.181L9.61092 13.7387C9.45876 13.9212 9.02704 14.5225 8.71429 14.9621L7.82189 14.1839C7.70944 14.0858 7.56265 14.0365 7.4138 14.0466C7.26495 14.0568 7.12625 14.1257 7.0282 14.2382C6.93015 14.3506 6.88078 14.4974 6.89096 14.6462C6.90114 14.7951 6.97003 14.9338 7.08248 15.0318L10.5236 18.0317ZM17.2668 14.6308L17.2255 14.6811L15.6786 12.9939C15.661 12.9746 15.642 12.9567 15.6218 12.9402L14.6352 12.1265L15.1476 11.505L17.2668 14.6308ZM28.0342 6.84972C27.9811 6.79833 27.9184 6.7579 27.8497 6.73075C27.781 6.7036 27.7076 6.69026 27.6338 6.69148C27.5599 6.69271 27.487 6.70849 27.4192 6.7379C27.3515 6.76732 27.2902 6.80981 27.2388 6.86293L7.04873 27.7356C6.94497 27.8429 6.88807 27.987 6.89055 28.1362C6.89303 28.2854 6.95468 28.4275 7.06195 28.5313C7.16921 28.635 7.3133 28.6919 7.46251 28.6895C7.61173 28.687 7.75385 28.6253 7.8576 28.5181L28.048 7.64509C28.1515 7.53772 28.2082 7.39367 28.2056 7.24455C28.203 7.09544 28.1414 6.95344 28.0342 6.84972ZM28.9851 25.336L26.4437 21.5881L26.6974 21.2801C26.8212 21.124 27.2349 20.5961 27.3643 20.3531C27.6956 19.7279 27.5763 18.7865 27.549 18.604C27.53 18.4766 27.4678 18.3596 27.3728 18.2726C27.2779 18.1855 27.1559 18.1337 27.0273 18.1259C26.9157 18.1191 25.9049 18.0772 25.1719 18.7457C24.885 19.0079 24.5107 19.4517 24.4913 19.4747L24.2188 19.8055L20.0841 17.9979C19.9721 17.9488 19.847 17.9376 19.7281 17.9661C19.6091 17.9945 19.5026 18.061 19.4249 18.1554L18.704 19.0292C18.6529 19.0914 18.6156 19.1637 18.5948 19.2415C18.574 19.3192 18.5701 19.4005 18.5833 19.4798C18.5966 19.5592 18.6267 19.6348 18.6716 19.7016C18.7165 19.7683 18.7752 19.8247 18.8438 19.8668L19.7736 20.4372C19.9008 20.5152 20.0537 20.5394 20.1988 20.5047C20.3439 20.4699 20.4692 20.3789 20.5472 20.2517C20.6252 20.1245 20.6494 19.9716 20.6147 19.8265C20.5799 19.6814 20.4889 19.5561 20.3617 19.4781L19.9831 19.2461L20.0222 19.1988L23.4743 20.708L22.9852 21.3012L22.0034 20.492C21.9736 20.4674 21.9413 20.4459 21.9072 20.4279L21.6374 20.2862C21.5054 20.2167 21.3512 20.2026 21.2087 20.2469C21.0662 20.2913 20.9472 20.3903 20.8778 20.5224C20.8084 20.6545 20.7943 20.8087 20.8386 20.9512C20.8829 21.0936 20.982 21.2127 21.114 21.2821L21.3326 21.3968L22.2697 22.1691L20.1617 24.7268C20.0096 24.9093 19.5779 25.5107 19.2651 25.9502L18.3727 25.172C18.2596 25.0792 18.1147 25.034 17.9689 25.0462C17.823 25.0583 17.6876 25.1268 17.5914 25.2371C17.4952 25.3474 17.4458 25.4909 17.4536 25.6371C17.4614 25.7832 17.5259 25.9206 17.6333 26.02L21.0735 29.0192C21.1801 29.1121 21.312 29.1576 21.4428 29.1576C21.5574 29.1577 21.6693 29.1228 21.7635 29.0575C21.8576 28.9923 21.9297 28.8998 21.9699 28.7926C22.0101 28.6853 22.0166 28.5683 21.9885 28.4572C21.9604 28.3461 21.8991 28.2463 21.8127 28.171L21.2884 27.714C21.6608 27.3154 22.2104 26.7237 22.3597 26.5409L22.8381 25.9609C22.8857 25.904 22.9215 25.8383 22.9436 25.7675C22.9657 25.6967 22.9735 25.6222 22.9667 25.5483C22.9599 25.4745 22.9385 25.4027 22.9038 25.3371C22.8691 25.2715 22.8218 25.2135 22.7646 25.1663C22.7074 25.1191 22.6414 25.0836 22.5705 25.062C22.4995 25.0404 22.425 25.033 22.3512 25.0404C22.2774 25.0477 22.2057 25.0695 22.1404 25.1046C22.075 25.1397 22.0173 25.1874 21.9704 25.2449L21.4898 25.8276C21.3764 25.9663 20.907 26.4745 20.4829 26.9282L20.1468 26.6511C20.504 26.1488 20.907 25.5897 21.0266 25.446L25.355 20.1942C25.4492 20.0822 25.7364 19.7526 25.9296 19.5763C26.0865 19.4331 26.2834 19.3521 26.4629 19.3063C26.4569 19.5093 26.4311 19.7093 26.3698 19.8252C26.3155 19.927 26.0393 20.2982 25.8219 20.5722L23.0637 23.9182C22.9718 24.0336 22.9289 24.1805 22.9443 24.3272C22.9597 24.4739 23.0321 24.6087 23.1459 24.7026C23.2598 24.7964 23.4059 24.8418 23.5529 24.8289C23.6998 24.816 23.8358 24.7459 23.9316 24.6337L24.4691 23.9818L25.4256 24.7701L27.3831 26.9054C27.4897 27.0218 27.6404 27.0876 27.7977 27.0876L27.8126 27.0873C27.893 27.0852 27.9721 27.0659 28.0444 27.0306C28.1168 26.9954 28.1807 26.945 28.2319 26.8829L28.9528 26.0087C29.0304 25.9153 29.0755 25.7991 29.0814 25.6778C29.0872 25.5564 29.0534 25.4365 28.9851 25.336ZM27.7763 25.669L26.2294 23.9818C26.2118 23.9625 26.1928 23.9446 26.1726 23.9281L25.1857 23.1147L25.6981 22.4928L27.8176 25.6187L27.7763 25.669Z" fill="#0E1730"/>
                                            </svg>
                                            Airport Pickup Service
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Foresee the pain and trouble that are bound desig to ensue; and equal blame belongs to</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="false" aria-controls="collapseOne2">
                                        <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30.4187 14.3101L27.9064 11.8557L27.9891 11.5161L30.7363 10.7221C30.945 10.6619 31.0884 10.4744 31.0884 10.2618C31.0884 10.0491 30.945 9.86171 30.7363 9.80147L27.9891 9.00743L27.3904 6.55067C27.3648 6.44566 27.3037 6.35215 27.217 6.28525C27.1303 6.21835 27.023 6.18196 26.9125 6.18196C26.802 6.18196 26.6947 6.21835 26.608 6.28525C26.5213 6.35215 26.4602 6.44566 26.4346 6.55067L25.8363 9.00743L25.1842 9.19595L21.2603 5.36267C20.5349 4.65371 19.57 4.26323 18.5443 4.26323C17.5182 4.26323 16.5538 4.65371 15.8284 5.36267L6.67012 14.3101C5.17232 15.7733 5.17232 18.1545 6.67012 19.6177L7.12874 20.0658L6.58943 21.9359C6.30633 23.3921 4.57492 25.8959 4.5576 25.9209C4.49335 26.0133 4.46408 26.1247 4.47484 26.2359C4.4856 26.3471 4.53572 26.4511 4.61656 26.5301L10.0639 31.8523C10.1433 31.93 10.2477 31.9788 10.3595 31.9903C10.4712 32.0019 10.5837 31.9756 10.678 31.9158L13.6051 30.0647C14.3568 29.5892 15.0764 29.0642 15.7654 28.5038L15.8283 28.5651C16.5537 29.2741 17.518 29.6643 18.5442 29.6643C19.57 29.6643 20.5348 29.2741 21.2602 28.5651L30.4184 19.6177C31.916 18.1543 31.916 15.7735 30.4187 14.3101ZM26.3876 9.84923C26.4705 9.8253 26.5455 9.78041 26.605 9.7191C26.6644 9.65778 26.7063 9.58221 26.7263 9.50003L26.9125 8.73527L27.0992 9.50003C27.1192 9.58222 27.161 9.65781 27.2205 9.71912C27.28 9.78044 27.355 9.82532 27.4379 9.84923L28.8652 10.2618L27.4379 10.6743C27.355 10.6983 27.28 10.7432 27.2205 10.8045C27.1611 10.8658 27.1192 10.9414 27.0992 11.0235L26.9125 11.7883L26.7263 11.0235C26.7063 10.9413 26.6645 10.8658 26.605 10.8044C26.5455 10.7431 26.4705 10.6982 26.3876 10.6743L24.9603 10.2618L26.3876 9.84923ZM13.0711 29.259L10.4779 30.8991L5.59433 26.1277C6.09999 25.3602 7.29565 23.4457 7.5451 22.1557L9.63981 14.8915C9.72186 14.4705 10.1042 14.1813 10.5494 14.2241C10.661 14.2341 10.7695 14.2659 10.8683 14.3176C10.9671 14.3693 11.0543 14.4398 11.1247 14.525C11.2627 14.6895 11.3295 14.9001 11.3109 15.1119L10.3341 19.2477C10.3103 19.3493 10.3209 19.4556 10.3643 19.5508C10.4078 19.6459 10.4817 19.7247 10.575 19.7751C10.6682 19.8256 10.7757 19.8451 10.8813 19.8307C10.9869 19.8163 11.0848 19.7687 11.1603 19.6951L18.2135 12.8042C18.4883 12.5359 18.9647 12.5367 19.2388 12.8042C19.3063 12.8699 19.3598 12.9479 19.3963 13.0339C19.4327 13.1199 19.4514 13.212 19.4512 13.3051C19.4514 13.3982 19.4328 13.4904 19.3963 13.5764C19.3598 13.6624 19.3063 13.7405 19.2388 13.8062L19.2386 13.8063L14.0496 18.8765C14.0027 18.9207 13.9652 18.9737 13.9395 19.0323C13.9137 19.0908 13.9002 19.1538 13.8996 19.2176C13.899 19.2813 13.9115 19.3445 13.9362 19.4035C13.9609 19.4625 13.9974 19.5161 14.0435 19.5611C14.0896 19.6062 14.1445 19.6418 14.2048 19.666C14.2652 19.6901 14.3299 19.7023 14.3951 19.7017C14.4604 19.7012 14.5248 19.6879 14.5848 19.6628C14.6447 19.6376 14.6989 19.601 14.7443 19.5552L21.367 13.0843C21.5032 12.9517 21.6876 12.8772 21.8799 12.8772C22.0722 12.8772 22.2566 12.9517 22.3928 13.0843C22.4603 13.15 22.5138 13.2281 22.5502 13.3141C22.5866 13.4001 22.6052 13.4923 22.6049 13.5854C22.6052 13.6785 22.5866 13.7706 22.5502 13.8566C22.5138 13.9426 22.4603 14.0206 22.3928 14.0863L20.6618 15.7775L20.6608 15.7782L15.7696 20.5571C15.7226 20.6013 15.6852 20.6543 15.6595 20.7129C15.6337 20.7714 15.6202 20.8344 15.6196 20.8982C15.619 20.9619 15.6315 21.0251 15.6562 21.0841C15.6809 21.1431 15.7173 21.1967 15.7635 21.2417C15.8096 21.2868 15.8645 21.3224 15.9248 21.3466C15.9852 21.3707 16.0499 21.3829 16.1151 21.3823C16.1804 21.3818 16.2448 21.3685 16.3048 21.3434C16.3647 21.3182 16.4189 21.2816 16.4642 21.2358L21.3561 16.4565C21.645 16.1748 22.1147 16.1749 22.4044 16.4569C22.5431 16.593 22.621 16.7772 22.621 16.9692C22.621 17.1613 22.5431 17.3455 22.4044 17.4816L20.9939 18.8597L17.2493 22.518C17.2024 22.5623 17.165 22.6152 17.1392 22.6738C17.1135 22.7324 17.0999 22.7953 17.0993 22.8591C17.0988 22.9228 17.1112 22.986 17.1359 23.045C17.1606 23.104 17.1971 23.1576 17.2432 23.2027C17.2893 23.2477 17.3442 23.2834 17.4046 23.3075C17.465 23.3316 17.5296 23.3438 17.5949 23.3432C17.6601 23.3427 17.7246 23.3294 17.7845 23.3043C17.8445 23.2791 17.8987 23.2426 17.944 23.1967L18.2072 22.9395L18.2078 22.9391L21.6886 19.5383C21.9558 19.2769 22.4227 19.2762 22.6908 19.5385C22.8246 19.6691 22.8985 19.8429 22.8985 20.0279C22.8985 20.2128 22.8245 20.3867 22.6908 20.5175L16.588 26.4801C15.5187 27.5244 14.3399 28.4558 13.0711 29.259ZM29.7239 18.939L20.5656 27.8864C20.3008 28.1465 19.9857 28.3528 19.6388 28.4932C19.2919 28.6335 18.9199 28.7053 18.5443 28.7043C17.7805 28.7043 17.0629 28.4139 16.5231 27.8862L16.5109 27.8743C16.7739 27.6419 17.0312 27.4035 17.2826 27.1591L23.3853 21.1964C23.5429 21.0434 23.6678 20.8613 23.7529 20.6608C23.838 20.4602 23.8815 20.2452 23.8809 20.0281C23.8809 19.5865 23.7048 19.1717 23.3853 18.86C23.2081 18.6865 22.9927 18.5663 22.7625 18.4891L23.0989 18.1604C23.7711 17.5037 23.7711 16.4349 23.0989 15.7779C22.9104 15.5941 22.6873 15.4673 22.4513 15.3865L23.0874 14.765C23.2464 14.6105 23.3724 14.4266 23.4582 14.2241C23.544 14.0217 23.5879 13.8046 23.5872 13.5854C23.5879 13.3662 23.544 13.149 23.4582 12.9465C23.3724 12.7439 23.2464 12.56 23.0874 12.4053C22.42 11.7545 21.3377 11.7557 20.6722 12.4056L20.3277 12.7422C20.2454 12.5173 20.1174 12.3051 19.9334 12.1255C19.2891 11.4953 18.1641 11.4943 17.5188 12.1255L11.6772 17.8329L12.2759 15.2977C12.2802 15.2795 12.2832 15.2611 12.2855 15.2429C12.313 15.0075 12.2919 14.7691 12.2235 14.5418C12.1551 14.3144 12.0408 14.1028 11.8873 13.9194C11.7349 13.7351 11.5463 13.5825 11.3325 13.4707C11.1188 13.3589 10.8842 13.29 10.6428 13.2683C9.69471 13.181 8.85179 13.8012 8.68439 14.6717L7.43444 19.0067L7.36504 18.9389C6.25057 17.8497 6.25057 16.0778 7.36504 14.9887L16.5233 6.04127C16.7881 5.78106 17.1031 5.57476 17.45 5.43432C17.797 5.29388 18.169 5.22209 18.5446 5.22311C19.3079 5.22311 20.0257 5.51375 20.5658 6.04127L24.1121 9.50567L23.089 9.80135C22.8803 9.86159 22.7368 10.049 22.7368 10.2617C22.7368 10.4743 22.8803 10.6617 23.089 10.722L25.8366 11.516L26.4348 13.9728C26.4605 14.0778 26.5216 14.1713 26.6083 14.2382C26.695 14.3051 26.8023 14.3415 26.9127 14.3415C27.0232 14.3415 27.1305 14.3051 27.2172 14.2382C27.3039 14.1713 27.365 14.0778 27.3906 13.9728L27.6394 12.9521L29.7242 14.9888C30.838 16.0779 30.838 17.8499 29.7239 18.939ZM7.2448 5.92391C7.51636 5.92391 7.73609 5.70899 7.73609 5.44391V4.48391C7.73609 4.21883 7.51636 4.00391 7.2448 4.00391C6.97325 4.00391 6.75352 4.21883 6.75352 4.48391V5.44391C6.75352 5.70899 6.97325 5.92391 7.2448 5.92391ZM7.2448 6.88391C6.97325 6.88391 6.75352 7.09883 6.75352 7.36391V8.32391C6.75352 8.58899 6.97325 8.80391 7.2448 8.80391C7.51636 8.80391 7.73609 8.58899 7.73609 8.32391V7.36391C7.73609 7.09883 7.51636 6.88391 7.2448 6.88391ZM5.27967 6.88391H6.26224C6.53379 6.88391 6.75352 6.66899 6.75352 6.40391C6.75352 6.13883 6.53379 5.92391 6.26224 5.92391H5.27967C5.00811 5.92391 4.78838 6.13883 4.78838 6.40391C4.78838 6.66899 5.00811 6.88391 5.27967 6.88391ZM8.22737 6.88391H9.20994C9.4815 6.88391 9.70122 6.66899 9.70122 6.40391C9.70122 6.13883 9.4815 5.92391 9.20994 5.92391H8.22737C7.95581 5.92391 7.73609 6.13883 7.73609 6.40391C7.73609 6.66899 7.95581 6.88391 8.22737 6.88391ZM28.1244 27.5239C27.1763 27.5239 26.4049 28.2776 26.4049 29.2039C26.4049 30.1302 27.1763 30.8839 28.1244 30.8839C29.0724 30.8839 29.8439 30.1302 29.8439 29.2039C29.8439 28.2776 29.0724 27.5239 28.1244 27.5239ZM28.1244 29.9239C27.718 29.9239 27.3874 29.601 27.3874 29.2039C27.3874 28.8068 27.718 28.4839 28.1244 28.4839C28.5308 28.4839 28.8613 28.8068 28.8613 29.2039C28.8613 29.601 28.5307 29.9239 28.1244 29.9239ZM31.8493 24.4177C31.71 24.4177 31.5764 24.4718 31.4779 24.568C31.3794 24.6642 31.3241 24.7947 31.3241 24.9308C31.3241 25.0669 31.3794 25.1974 31.4779 25.2937C31.5764 25.3899 31.71 25.4439 31.8493 25.4439C31.9886 25.4439 32.1222 25.3899 32.2206 25.2937C32.3191 25.1974 32.3745 25.0669 32.3745 24.9308C32.3745 24.7947 32.3191 24.6642 32.2206 24.568C32.1222 24.4718 31.9886 24.4177 31.8493 24.4177Z" fill="#0E1730"/>
                                            </svg>
                                             Housekeeper Service
                                    </button>
                                </h2>
                                <div id="collapseOne2" className="accordion-collapse collapse" aria-labelledby="headingOne2" data-bs-parent="#accordionExample">
                                 <div className="accordion-body">
                                    <p>Foresee the pain and trouble that are bound desig to ensue; and equal blame belongs to</p>
                                 </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne3">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne3" aria-expanded="false" aria-controls="collapseOne3">
                                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9996 9.57737C12.939 9.57737 8.18487 11.547 4.60638 15.1251C3.96928 15.7621 2.93414 15.7621 2.29711 15.1251C1.66008 14.4881 1.66008 13.4531 2.29711 12.8162C10.974 4.13933 25.0246 4.13947 33.7016 12.8162C34.3396 13.4541 34.3396 14.4872 33.7016 15.1251C33.0647 15.7621 32.0297 15.7621 31.3928 15.1252C27.8145 11.5472 23.0598 9.57737 17.9996 9.57737ZM15.2535 26.9438C15.2535 25.4259 16.4817 24.1977 17.9996 24.1977C19.5173 24.1977 20.7457 25.4261 20.7457 26.9438C20.7457 28.4611 19.5169 29.6899 17.9996 29.6899C16.4823 29.6899 15.2535 28.4611 15.2535 26.9438ZM17.9996 18.5061C20.6755 18.5061 23.1871 19.546 25.0792 21.4382C25.2307 21.59 25.4106 21.7105 25.6088 21.7926C25.807 21.8747 26.0194 21.9169 26.2339 21.9166C27.6751 21.9166 28.4181 20.1595 27.3883 19.1293C22.2007 13.94 13.7981 13.9413 8.61019 19.1292C7.97309 19.7663 7.97309 20.8016 8.61047 21.4385C9.24919 22.0766 10.2826 22.0755 10.9199 21.4382C12.8121 19.546 15.3237 18.5061 17.9996 18.5061Z" fill="#0E1730"/>
                                            </svg>
                                             Wi-Fi Internet
                                    </button>
                                </h2>
                                <div id="collapseOne3" className="accordion-collapse collapse" aria-labelledby="headingOne3" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Foresee the pain and trouble that are bound desig to ensue; and equal blame belongs to</p>
                                     </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne4">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne4" aria-expanded="false" aria-controls="collapseOne4">
                                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.501 11.8125C8.5386 11.8125 4.50098 15.8501 4.50098 20.8125C4.50098 25.7749 8.5386 29.8125 13.501 29.8125C18.4634 29.8125 22.501 25.7749 22.501 20.8125C22.501 15.8501 18.4634 11.8125 13.501 11.8125ZM13.501 28.6875C9.15848 28.6875 5.62598 25.155 5.62598 20.8125C5.62598 16.47 9.15848 12.9375 13.501 12.9375C17.8435 12.9375 21.376 16.47 21.376 20.8125C21.376 25.155 17.8435 28.6875 13.501 28.6875Z" fill="#0E1730"/>
                                            <path d="M13.501 14.625C10.0889 14.625 7.31348 17.4009 7.31348 20.8125C7.31348 24.2241 10.0889 27 13.501 27C16.9125 27 19.6885 24.2241 19.6885 20.8125C19.6885 17.4009 16.9125 14.625 13.501 14.625ZM13.501 25.875C10.7093 25.875 8.43848 23.6042 8.43848 20.8125C8.43848 18.0208 10.7093 15.75 13.501 15.75C16.2927 15.75 18.5635 18.0208 18.5635 20.8125C18.5635 23.6042 16.2927 25.875 13.501 25.875Z" fill="#0E1730"/>
                                            <path d="M16.876 20.25C16.7268 20.25 16.5837 20.3093 16.4782 20.4148C16.3727 20.5202 16.3135 20.6633 16.3135 20.8125C16.3135 22.3633 15.0518 23.625 13.501 23.625C13.3518 23.625 13.2087 23.6843 13.1032 23.7898C12.9977 23.8952 12.9385 24.0383 12.9385 24.1875C12.9385 24.3367 12.9977 24.4798 13.1032 24.5852C13.2087 24.6907 13.3518 24.75 13.501 24.75C15.6717 24.75 17.4385 22.9832 17.4385 20.8125C17.4385 20.6633 17.3792 20.5202 17.2737 20.4148C17.1682 20.3093 17.0252 20.25 16.876 20.25Z" fill="#0E1730"/>
                                            <path d="M35.4375 27H34.7709C34.8345 26.8234 34.875 26.6361 34.875 26.4375V25.875C34.8736 25.4585 34.7172 25.0575 34.4362 24.75C34.7172 24.4425 34.8736 24.0415 34.875 23.625V23.0625C34.875 22.1321 34.1179 21.375 33.1875 21.375H27.0006V3.375C27.0006 2.13412 25.9914 1.125 24.7506 1.125H2.25056C1.00969 1.125 0.0005625 2.13412 0.0005625 3.375V8.43469L0 8.4375L0.0005625 8.44031V32.625C0.0005625 33.8659 1.00969 34.875 2.25056 34.875H33.75C34.9909 34.875 36 33.8659 36 32.625V27.5625C36 27.4133 35.9407 27.2702 35.8352 27.1648C35.7298 27.0593 35.5867 27 35.4375 27ZM24.75 26.4375V25.875C24.75 25.7258 24.8093 25.5827 24.9148 25.4773C25.0202 25.3718 25.1633 25.3125 25.3125 25.3125H33.1875C33.3367 25.3125 33.4798 25.3718 33.5852 25.4773C33.6907 25.5827 33.75 25.7258 33.75 25.875V26.4375C33.75 26.5867 33.6907 26.7298 33.5852 26.8352C33.4798 26.9407 33.3367 27 33.1875 27H25.3125C25.1633 27 25.0202 26.9407 24.9148 26.8352C24.8093 26.7298 24.75 26.5867 24.75 26.4375ZM33.75 23.0625V23.625C33.75 23.7742 33.6907 23.9173 33.5852 24.0227C33.4798 24.1282 33.3367 24.1875 33.1875 24.1875H25.3125C25.1633 24.1875 25.0202 24.1282 24.9148 24.0227C24.8093 23.9173 24.75 23.7742 24.75 23.625V23.0625C24.75 22.9133 24.8093 22.7702 24.9148 22.6648C25.0202 22.5593 25.1633 22.5 25.3125 22.5H33.1875C33.3367 22.5 33.4798 22.5593 33.5852 22.6648C33.6907 22.7702 33.75 22.9133 33.75 23.0625ZM2.25056 2.25H24.7506C25.3704 2.25 25.8756 2.75513 25.8756 3.375V7.875H1.12556V3.375C1.12556 2.75513 1.63012 2.25 2.25056 2.25ZM1.12556 32.625V9H25.8756V21.375H25.3125C24.3821 21.375 23.625 22.1321 23.625 23.0625V23.625C23.625 24.0587 23.7943 24.4508 24.0637 24.75C23.7828 25.0575 23.6264 25.4585 23.625 25.875V26.4375C23.625 26.6361 23.6655 26.8234 23.7291 27H23.0625C22.9133 27 22.7702 27.0593 22.6648 27.1648C22.5593 27.2702 22.5 27.4133 22.5 27.5625V32.625C22.5 33.0362 22.6192 33.4176 22.8133 33.75H2.25056C1.63012 33.75 1.12556 33.2454 1.12556 32.625ZM34.875 32.625C34.875 33.2454 34.3699 33.75 33.75 33.75H24.75C24.1296 33.75 23.625 33.2454 23.625 32.625V28.125H34.875V32.625Z" fill="#0E1730"/>
                                            <path d="M3.9375 6.75C4.86788 6.75 5.625 5.99288 5.625 5.0625C5.625 4.13212 4.86788 3.375 3.9375 3.375C3.00712 3.375 2.25 4.13212 2.25 5.0625C2.25 5.99288 3.00712 6.75 3.9375 6.75ZM3.9375 4.5C4.08668 4.5 4.22976 4.55926 4.33525 4.66475C4.44074 4.77024 4.5 4.91332 4.5 5.0625C4.5 5.21168 4.44074 5.35476 4.33525 5.46025C4.22976 5.56574 4.08668 5.625 3.9375 5.625C3.78832 5.625 3.64524 5.56574 3.53975 5.46025C3.43426 5.35476 3.375 5.21168 3.375 5.0625C3.375 4.91332 3.43426 4.77024 3.53975 4.66475C3.64524 4.55926 3.78832 4.5 3.9375 4.5ZM23.0625 6.75C23.9929 6.75 24.75 5.99288 24.75 5.0625C24.75 4.13212 23.9929 3.375 23.0625 3.375C22.1321 3.375 21.375 4.13212 21.375 5.0625C21.375 5.99288 22.1321 6.75 23.0625 6.75ZM23.0625 4.5C23.2117 4.5 23.3548 4.55926 23.4602 4.66475C23.5657 4.77024 23.625 4.91332 23.625 5.0625C23.625 5.21168 23.5657 5.35476 23.4602 5.46025C23.3548 5.56574 23.2117 5.625 23.0625 5.625C22.9133 5.625 22.7702 5.56574 22.6648 5.46025C22.5593 5.35476 22.5 5.21168 22.5 5.0625C22.5 4.91332 22.5593 4.77024 22.6648 4.66475C22.7702 4.55926 22.9133 4.5 23.0625 4.5ZM15.1875 6.75H18.5625C19.4929 6.75 20.25 5.99288 20.25 5.0625C20.25 4.13212 19.4929 3.375 18.5625 3.375H15.1875C14.2571 3.375 13.5 4.13212 13.5 5.0625C13.5 5.99288 14.2571 6.75 15.1875 6.75ZM15.1875 4.5H18.5625C18.7117 4.5 18.8548 4.55926 18.9602 4.66475C19.0657 4.77024 19.125 4.91332 19.125 5.0625C19.125 5.21168 19.0657 5.35476 18.9602 5.46025C18.8548 5.56574 18.7117 5.625 18.5625 5.625H15.1875C15.0383 5.625 14.8952 5.56574 14.7898 5.46025C14.6843 5.35476 14.625 5.21168 14.625 5.0625C14.625 4.91332 14.6843 4.77024 14.7898 4.66475C14.8952 4.55926 15.0383 4.5 15.1875 4.5Z" fill="#0E1730"/>
                                            </svg>
                                             Laundry Services
                                    </button>
                                </h2>
                                <div id="collapseOne4" className="accordion-collapse collapse" aria-labelledby="headingOne4" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Foresee the pain and trouble that are bound desig to ensue; and equal blame belongs to</p>
                                     </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne5">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5" aria-expanded="false" aria-controls="collapseOne5">
                                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M26.9623 29.8368C27.0057 29.9227 27.0318 30.0162 27.0391 30.1121C27.0463 30.2081 27.0346 30.3045 27.0046 30.3959C26.9746 30.4873 26.9269 30.5719 26.8642 30.6448C26.8015 30.7178 26.7251 30.7777 26.6393 30.8211C25.5502 31.372 24.0084 31.6111 22.437 31.6111C20.7404 31.6111 19.0094 31.3323 17.7769 30.866C15.428 29.9775 11.7317 29.9561 10.022 30.8211C9.93617 30.8645 9.84263 30.8906 9.74671 30.8979C9.65079 30.9052 9.55439 30.8935 9.46299 30.8635C9.37159 30.8335 9.28699 30.7858 9.21402 30.7231C9.14106 30.6604 9.08115 30.584 9.03773 30.4982C8.99431 30.4123 8.96821 30.3188 8.96094 30.2229C8.95367 30.127 8.96536 30.0305 8.99535 29.9391C9.02533 29.8477 9.07303 29.7632 9.13571 29.6902C9.19839 29.6172 9.27483 29.5573 9.36066 29.5139C11.6592 28.3511 15.8363 28.5657 18.2952 29.4959C20.5649 30.3547 24.2985 30.3635 25.978 29.5139C26.0638 29.4705 26.1574 29.4443 26.2533 29.4371C26.3492 29.4298 26.4456 29.4415 26.537 29.4715C26.6284 29.5015 26.713 29.5492 26.786 29.6118C26.859 29.6745 26.9189 29.751 26.9623 29.8368ZM8.71397 9.3006C8.90824 9.3006 9.09455 9.22342 9.23192 9.08606C9.36928 8.94869 9.44646 8.76238 9.44646 8.56811C9.44646 7.07027 10.665 5.85169 12.1628 5.85169H23.8374C25.3352 5.85169 26.5537 7.07027 26.5537 8.56811C26.5537 8.76238 26.6309 8.94869 26.7683 9.08606C26.9056 9.22342 27.092 9.3006 27.2862 9.3006C27.4805 9.3006 27.6668 9.22342 27.8042 9.08606C27.9415 8.94869 28.0187 8.76238 28.0187 8.56811C28.0187 6.26243 26.143 4.38672 23.8374 4.38672H12.1628C9.8572 4.38672 7.98149 6.26243 7.98149 8.56811C7.98149 8.76238 8.05866 8.94869 8.19603 9.08606C8.33339 9.22342 8.5197 9.3006 8.71397 9.3006ZM35.868 22.437C35.8635 22.4434 35.8589 22.4498 35.8542 22.456L30.9257 29.0951C30.8355 29.2165 30.7099 29.3071 30.5662 29.3543C30.4225 29.4015 30.2677 29.4031 30.1231 29.3588C29.9784 29.3145 29.8511 29.2265 29.7585 29.1069C29.6658 28.9873 29.6125 28.842 29.6058 28.6909L29.3423 22.7498H6.65789L6.39437 28.6909C6.38768 28.842 6.33435 28.9873 6.24173 29.1069C6.1491 29.2265 6.02171 29.3145 5.87706 29.3588C5.73241 29.4031 5.57759 29.4015 5.43388 29.3543C5.29016 29.3071 5.1646 29.2165 5.07444 29.095L0.145909 22.4559C0.141668 22.4502 0.137487 22.4445 0.133365 22.4387V22.4386C0.0341734 22.2979 -0.0121036 22.1267 0.00270826 21.9552L0.00279982 21.954V21.9536C0.00728345 21.9027 0.0170411 21.8523 0.0319161 21.8034L3.10231 11.324C3.14682 11.172 3.23937 11.0386 3.36609 10.9437C3.49282 10.8487 3.64689 10.7974 3.80522 10.7974H32.195C32.3533 10.7974 32.5074 10.8487 32.6341 10.9437C32.7608 11.0386 32.8534 11.172 32.8979 11.324L35.968 21.8034C35.9758 21.829 35.9822 21.8549 35.9871 21.8812L35.9873 21.8825C35.9917 21.9055 35.9949 21.9287 35.9969 21.9521V21.9525C36.0127 22.1242 35.967 22.2959 35.868 22.437ZM5.19145 22.7499H2.18863L5.02215 26.5669L5.19145 22.7499ZM33.8116 22.7499H30.8087L30.978 26.5669L33.8116 22.7499ZM34.2897 21.285L31.6463 12.2624H4.35394L1.7105 21.285H34.2897ZM10.9719 17.4307H7.15543L7.49502 16.0762H9.58929C9.78356 16.0762 9.96987 15.999 10.1072 15.8616C10.2446 15.7243 10.3218 15.538 10.3218 15.3437C10.3218 15.1494 10.2446 14.9631 10.1072 14.8257C9.96987 14.6884 9.78356 14.6112 9.58929 14.6112H6.9235C6.76022 14.6112 6.60162 14.6658 6.4729 14.7662C6.34417 14.8666 6.25269 15.0072 6.21299 15.1656L5.50614 17.9851C5.47905 18.0931 5.47695 18.2059 5.49999 18.3148C5.52303 18.4238 5.57062 18.5261 5.63912 18.6138C5.70763 18.7016 5.79525 18.7727 5.89532 18.8215C5.9954 18.8703 6.1053 18.8957 6.21666 18.8957H10.972C11.0682 18.8957 11.1635 18.8767 11.2523 18.8399C11.3412 18.8031 11.422 18.7491 11.49 18.6811C11.558 18.6131 11.6119 18.5323 11.6487 18.4435C11.6855 18.3546 11.7045 18.2594 11.7045 18.1632C11.7045 18.067 11.6855 17.9717 11.6487 17.8829C11.6119 17.794 11.5579 17.7132 11.4899 17.6452C11.4219 17.5772 11.3411 17.5233 11.2523 17.4865C11.1634 17.4497 11.0681 17.4307 10.9719 17.4307ZM30.2354 19.1659C30.1864 19.2487 30.1216 19.321 30.0446 19.3787C29.9677 19.4365 29.8801 19.4785 29.7869 19.5024C29.6937 19.5262 29.5967 19.5315 29.5015 19.5179C29.4063 19.5043 29.3147 19.472 29.2319 19.423L28.2434 18.8376C27.9514 19.0983 27.597 19.2856 27.2035 19.3822C26.5682 19.5378 25.9068 19.4391 25.3403 19.1036C24.7738 18.7682 24.369 18.2356 24.2005 17.6039C24.0306 16.9668 24.1208 16.3056 24.4545 15.7423C25.1405 14.5844 26.6538 14.2082 27.8277 14.9033C28.3942 15.2389 28.799 15.7715 28.9676 16.4031C29.072 16.7947 29.0782 17.1955 28.99 17.5769L29.9785 18.1624C30.1456 18.2614 30.2666 18.4227 30.3148 18.6109C30.3629 18.7991 30.3344 18.9987 30.2354 19.1659ZM27.552 16.7807C27.4829 16.5219 27.3157 16.3027 27.0811 16.1639C26.9221 16.0692 26.7405 16.0192 26.5555 16.0189C26.2185 16.0189 25.8942 16.186 25.7149 16.4889C25.5834 16.7109 25.5483 16.9727 25.6159 17.2264C25.685 17.4853 25.8522 17.7044 26.0868 17.8432C26.3214 17.9822 26.5938 18.0233 26.854 17.9596C27.1089 17.8969 27.3216 17.7403 27.453 17.5184C27.5845 17.2962 27.6197 17.0344 27.552 16.7807ZM22.0868 14.3655C22.1555 14.4418 22.2074 14.5316 22.2391 14.6292C22.2709 14.7268 22.2818 14.83 22.2711 14.932C22.1453 16.1594 21.5681 17.2964 20.6514 18.1222C19.7347 18.9481 18.544 19.404 17.3101 19.4015C16.0763 19.404 14.8854 18.9481 13.9687 18.1223C13.0519 17.2964 12.4747 16.1595 12.3488 14.932C12.3382 14.83 12.349 14.7268 12.3808 14.6292C12.4125 14.5316 12.4644 14.4418 12.5331 14.3655C12.6018 14.2893 12.6857 14.2283 12.7795 14.1866C12.8733 14.1448 12.9748 14.1233 13.0774 14.1233H21.5426C21.6452 14.1233 21.7467 14.1449 21.8404 14.1866C21.9342 14.2284 22.0181 14.2893 22.0868 14.3655ZM20.6285 15.5883H13.9914C14.4848 16.9546 15.8122 17.9365 17.3101 17.9365C18.8078 17.9365 20.1352 16.9545 20.6285 15.5883Z" fill="#0E1730"/>
                                            </svg>
                                             Breakfast in Bed
                                    </button>
                                </h2>
                                <div id="collapseOne5" className="accordion-collapse collapse" aria-labelledby="headingOne5" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Foresee the pain and trouble that are bound desig to ensue; and equal blame belongs to</p>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default Index;