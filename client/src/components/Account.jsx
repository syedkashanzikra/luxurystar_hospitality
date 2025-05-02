import React from 'react'
import Header from './Header.jsx';
import Footer from './Footer.jsx'

export const Account = () => {
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
                            <h1 class="breadcrumb__title color-white wow fadeInLeft animated" data-wow-delay=".2s">Account</h1>
                        </div>
                        <div class="breadcrumb__menu wow fadeInLeft animated" data-wow-delay=".4s">
                            <nav>
                                <ul>
                                    <li><span><a href="index.html">Home</a></span></li>
                                    <li class="active"><span>Account</span></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section class="email__area section-space">
        <div class="container">
            <div class="row email__gap">
                <div class="col-lg-7 col-md-6">
                    <div class="email__content">
                        <h3 class="title">Email Address</h3>
                        <p class="dec">Fast food is a popular category of food that emphasizes quick a service convenience. <br/> It typically includes items like burgers, fried chickenand tacos</p>
                        <div class="email__content-form">
                            <h4 class="title">Email</h4>
                            <form action="account.html#" class="mt-subscribe-form mb-30">
                                <input class="form-control" type="email" name="email" placeholder="nafiz123@gmail.com" required=""/>
                                <input type="hidden" name="action" value="mailchimpsubscribe"/>
                                <div class="clearfix"></div>
                            </form>
                            <form action="account.html#" class="mt-subscribe-form mb-30">
                                <input class="form-control" type="password" name="password" placeholder="Password" required=""/>
                                <input type="hidden" name="action" value="mailchimpsubscribe"/>
                                <div class="clearfix"></div>
                            </form>
                            <form action="account.html#" class="mt-subscribe-form">
                                <input class="form-control" type="password" name="password" placeholder="Re Password" required=""/>
                                <input type="hidden" name="action" value="mailchimpsubscribe"/>
                                <div class="clearfix"></div>
                            </form>
                            <a class="btn" href="account.html">Save<i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 col-md-6">
                    <div class="email__thumb">
                        <img src="template/assets/imgs/inner-page-img/account-img-1.png" alt="img not found"/>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="registration__area section-space-bottom">
        <div class="container">
            <div class="row">
                <div class="registration__wrap">
                <h3 class="title">My Account</h3>
                <p class="dec">Fast food is a popular category of food that emphasizes quick a service and convenience. It typically includes items like burgers, fried chickenand tacos Fast food restaurants  that emphasizes quick a service and convenience. It typically includes items like burgers, fried chickenand tacos Fast food restaurants</p>
                </div>
                <form class="registration__form" id="contact-us__form" method="POST" action="https://html.sthemeit.com/boostay/mail.php">
                    <h3 class="title">Personal Information</h3>
                    <div class="row wow fadeInLeft animated" data-wow-delay=".9s">
                        <div class="col-sm-6">
                            <div class="registration__input mb-30">
                                <span>First Name</span>
                                <input name="name" id="name" type="text" placeholder="Nafiz"/>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="registration__input mb-30">
                                <span>Last Name</span>
                                <input name="email" id="email" type="text" placeholder="Bhuiyan"/>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="registration__input mb-30">
                                <span>Birth Date</span>
                                <input name="date" id="date" type="date"/>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="registration__input">
                                <span>Phone</span>
                                <input name="phone" id="number" type="number" placeholder="number"/>
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="registration__btn mt-40">Save<i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>


    <section class="cta__area cta-2 p-relative overflow-hidden section-space-bottom">
        <div class="container">
            <div class="cta__bg-img cta__bg-img-2 cta-2__bg-img-3" data-background="template/assets/imgs/inner-page-img/account-cta-img.png"></div>
            <div class="cta__content cta__content-2 cta-2__content-3 wow fade-in-bottom" data-wow-delay="300ms">
                <a
                    class="video-popup video-btn"
                    data-autoplay="true"
                    data-vbtype="video"
                    href="https://youtu.be/iyd7qUH3oH0">
                    <i class="fa-solid fa-play"></i>
                    <div class="ripple"></div>
                </a>
            </div>
        </div>
    </section>
    <Footer />
    </>
  )
}


export default Account;