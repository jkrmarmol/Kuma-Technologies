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
            <span> guarantees success</span>.
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
            <p>Mobile Development</p>
          </div>
          <div className="description">
            <p>
              Our team builds easy-to-use mobile apps that improve customer engagement and simplify their mobile experience.
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
            <p>Web Development</p>
          </div>
          <div className="description">
            <p>
              We create custom websites that represent your brand and connect with your online visitors effectively.
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
            <p>UI/UX Design</p>
          </div>
          <div className="description">
            <p>
              We design visually appealing interfaces that make it easy to navigate and enjoy a smooth digital journey.
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
            <p>Maintenance</p>
          </div>
          <div className="description">
            <p>
              Count on us for ongoing support to keep your online platforms secure, updated, and dependable.
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
            <p>Database Development</p>
          </div>
          <div className="description">
            <p>
              We specialize in designing and optimizing databases to manage your data efficiently and securely.
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