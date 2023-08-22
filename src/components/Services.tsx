import React from 'react'
import UnderLineServiceImages from '../assets/images/hero-home-title-underline 2.svg'
import MobileIcon from '../assets/images/icons/mobile-svgrepo-com.svg'
import OpenLineIcon from '../assets/images/icons/open-line-svgrepo-com.svg'


function Services() {
  return (
    <div className="services">
      <div className="title-container">
        <p className="title">Our Services</p>
        <div className="description">
          <p>
            We offer a variety of software development services that
            <span>guarantees success</span>.
          </p>
          <img src={UnderLineServiceImages} alt="" />
        </div>
      </div>

      <div className="offer-item">
        <div className="item">
          <div className="icon">
            <img src={MobileIcon} alt="" />
          </div>
          <div className="title">
            <p>Mobile Application</p>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              eu sollicitudin est. Nunc ipsum velit,
            </p>
          </div>
          <div className="learn">
            <button>
              <p>Learn More</p>
              <img
                src={OpenLineIcon}
                alt=""
              />
            </button>
          </div>
        </div>

        <div className="item">
          <div className="icon">
            <img src={MobileIcon} alt="" />
          </div>
          <div className="title">
            <p>Mobile Application</p>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              eu sollicitudin est. Nunc ipsum velit,
            </p>
          </div>
          <div className="learn">
            <button>
              <p>Learn More</p>
              <img
                src={OpenLineIcon}
                alt=""
              />
            </button>
          </div>
        </div>

        <div className="item">
          <div className="icon">
            <img src={MobileIcon} alt="" />
          </div>
          <div className="title">
            <p>Mobile Application</p>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              eu sollicitudin est. Nunc ipsum velit,
            </p>
          </div>
          <div className="learn">
            <button>
              <p>Learn More</p>
              <img
                src={OpenLineIcon}
                alt=""
              />
            </button>
          </div>
        </div>

        <div className="item">
          <div className="icon">
            <img src={MobileIcon} alt="" />
          </div>
          <div className="title">
            <p>Mobile Application</p>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              eu sollicitudin est. Nunc ipsum velit,
            </p>
          </div>
          <div className="learn">
            <button>
              <p>Learn More</p>
              <img
                src={OpenLineIcon}
                alt=""
              />
            </button>
          </div>
        </div>

        <div className="item">
          <div className="icon">
            <img src={MobileIcon} alt="" />
          </div>
          <div className="title">
            <p>Mobile Application</p>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              eu sollicitudin est. Nunc ipsum velit,
            </p>
          </div>
          <div className="learn">
            <button>
              <p>Learn More</p>
              <img
                src={OpenLineIcon}
                alt=""
              />
            </button>
          </div>
        </div>

        <div className="item">
          <div className="icon">
            <img src={MobileIcon} alt="" />
          </div>
          <div className="title">
            <p>Mobile Application</p>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              eu sollicitudin est. Nunc ipsum velit,
            </p>
          </div>
          <div className="learn">
            <button>
              <p>Learn More</p>
              <img
                src={OpenLineIcon}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services