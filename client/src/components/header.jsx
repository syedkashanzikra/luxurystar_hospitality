import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>
        <div id="header-sticky" className="header__area header-1">
          <div className="container">
            <div className="mega__menu-wrapper p-relative">
              <div className="header__main">
                <div className="header__left">
                  <div className="header__logo">
                    <Link to="/">
                      <div className="logo">
                        <img src="/assets/imgs/logo/logo.svg" alt="logo not found" />
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="header__middle">
                  <div className="mean__menu-wrapper d-none d-xl-block">
                    <div className="main-menu main-menu-2">
                      <nav id="mobile-menu">
                        <ul>
                          <li className="active">
                            <Link to="/">Home</Link>
                          
                          </li>

                          <li>
                            <Link to="/about">About Us</Link>
                          </li>

                          <li className="has-dropdown">
                            <Link to="/rooms">Rooms</Link>
                            <ul className="submenu">
                              <li><Link to="/room">Room</Link></li>
                              <li><Link to="/room-details">Room details</Link></li>
                            </ul>
                          </li>

                          <li className="has-dropdown">
                            <Link to="#">Pages</Link>
                            <ul className="submenu">
                              <li><Link to="/restaurant">Restaurant & Bar</Link></li>
                        
                              <li><Link to="/account">Account</Link></li>
                            </ul>
                          </li>

                          <li>
                            <Link to="/contact">Contact Us</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>

                <div className="header__right">
                  <div className="header__action d-flex align-items-center">
                  
                    <div className="header__btn-wrap d-none d-sm-inline-flex">
                      <Link to="/contact" className="rr-btn-2">
                        Book Now <i className="fa-solid fa-plus"></i>
                      </Link>
                    </div>
                    <div className="header__hamburger ml-20 d-xl-none">
                      <div className="sidebar__toggle">
                        <button className="bar-icon">
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
        <div className="box-inner-wrap d-flex align-items-center">
          <form id="form" role="search">
            <input id="popup-search" type="text" name="s" placeholder="Type keywords here..." />
          </form>
          <div className="search-close">
            <i className="fa-sharp fa-regular fa-xmark"></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;
