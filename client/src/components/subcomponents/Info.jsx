import React from 'react'

function Info() {
  return (
    <div className="si__info__area section-space">
    <div className="container">
      <div className="row si__info__border">
        <div className="col-lg-4">
          <div className="si__info__box text-center">
            <div className="si__info__icon">
              <i className="fa-sharp fa-solid fa-location-dot"></i>
            </div>
            <div className="si__info__text">
              <span>Location</span>
              <p>
                2972 Westheimer Rd. Santa Ana, <br /> Illinois 85486
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="si__info__box text-center">
            <div className="si__info__icon">
              <i className="fa-solid fa-paper-plane"></i>
            </div>
            <div className="si__info__text">
              <span>E-mail</span>
              <p>
                tim.jennings@example.com
                <br />
                debra.holt@example.com
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="si__info__box border__none text-center">
            <div className="si__info__icon">
              <i className="fa-sharp fa-solid fa-phone"></i>
            </div>
            <div className="si__info__text">
              <span>Contact</span>
              <p>
                019457896332, 017485962546
                <br /> 016457896333
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Info