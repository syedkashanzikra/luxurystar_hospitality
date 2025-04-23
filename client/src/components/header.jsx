import React from 'react'

export const Header = () => {
  return (
    <>
   
   <header>
    <div id="header-sticky" class="header__area header-1">
        <div class="container">
            <div class="mega__menu-wrapper p-relative">
                <div class="header__main">
                    <div class="header__left">
                        <div class="header__logo">
                            <a href="index.html">
                                <div class="logo">
                                    <img src="assets/imgs/logo/logo.svg" alt="logo not found"/>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="header__middle">
                        <div class="mean__menu-wrapper d-none d-xl-block">
                            <div class="main-menu main-menu-2">
                                <nav id="mobile-menu">
                                    <ul>
                                        <li class="has-dropdown active">
                                            <a href="javascript:void(0)">Home</a>
                                            <ul class="submenu">
                                                <li><a href="index.html">Home 1</a></li>
                                                <li><a href="index-2.html">Home 2</a></li>
                                                <li><a href="index-3.html">Mountain Hotel</a></li>
                                                <li><a href="index-4.html">Sea Hotel</a></li>
                                                <li><a href="index-5.html">Beach Resort</a></li>
                                                <li><a href="index-6.html">City Hotel</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="about-us.html">About Us</a>
                                        </li>
                                        <li class="has-dropdown">
                                            <a href="https://html.sthemeit.com/boostay/has-dropdown">Rooms</a>
                                            <ul class="submenu">
                                                <li><a href="room.html">Room</a></li>
                                                <li><a href="room-details.html">Room details</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-dropdown ">
                                            <a href="javascript:void(0)">Pages</a>
                                            <ul class="submenu">
                                                <li><a href="resturent.html">Resturent & Bar </a></li>
                                                <li><a href="event.html">Event & Meetings</a></li>
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="blog-details.html">Blog Details</a></li>
                                                <li><a href="cart.html">Cart</a></li>
                                                <li><a href="account.html">Account</a></li>
                                            </ul> 
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact Us</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div class="header__right">
                        <div class="header__action d-flex align-items-center">
                            <div class="lan-select lan-select-2 ">
                                <form>
                                    <select id="nice" class="nice-2">
                                        <option>En</option>
                                        <option>China</option>
                                        <option>Bangla</option>
                                        <option>Hindi</option>
                                    </select>
                                </form>
                            </div>
                            <div class="header__btn-wrap d-none d-sm-inline-flex">
                                <a href="contact.html" class="rr-btn-2">Book Now <i class="fa-solid fa-plus"></i></a>
                            </div>
                            <div class="header__hamburger ml-20 d-xl-none">
                                <div class="sidebar__toggle">
                                    <button class="bar-icon">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

<div id="popup-search-box">
    <div class="box-inner-wrap d-flex align-items-center">
        <form id="form" action="index.html#" method="get" role="search">
            <input id="popup-search" type="text" name="s" placeholder="Type keywords here..."/>
        </form>
        <div class="search-close"><i class="fa-sharp fa-regular fa-xmark"></i></div>
    </div>
</div>







    </>
  )
}

export default Header;