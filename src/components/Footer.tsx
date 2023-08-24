import ArrowRightIcon from '../assets/images/icons/arrow-sm-right-svgrepo-com-white.svg'
import OnlineSchoolIllustrationImage from '../assets/images/online-school-2.png'
import KTLogo from '../assets/images/kt_logo.svg'
import FacebookIcon from '../assets/images/icons/facebook-176-svgrepo-com (1).svg'
import TelegramIcon from '../assets/images/icons/telegram-alt-svgrepo-com.svg'
import EmailIcon from '../assets/images/icons/email-1572-svgrepo-com.svg'


function Footer() {
  const onClickReserve = () => {
    const link = 'https://calendly.com/kumatechnologies/introductory-call';
    window.open(link);
  }
  return (
    <div className="footer">
      <div className="reserve">
        <div className="left">
          <p className="title">Seeking advice on where to start?</p>
          <p className="description">
            Reach out to us for a no-cost consultation, clarify your needs,
            and link about working together to bring your ideas into reality.
          </p>
          <button onClick={onClickReserve}>
            <p>Reserve a discussion</p>
            <img
              src={ArrowRightIcon}
              alt=""
            />
          </button>
        </div>
        <div className="right">
          <div className="circle"></div>
          <img src={OnlineSchoolIllustrationImage} alt="" />
        </div>
      </div>

      <div className="main-footer">
        <div className="fcontainer">
          <div className="left">
            <div className="logo-name">
              <img src={KTLogo} alt="" />
              <p>Kuma Technologies</p>
            </div>
            <div className="social">
              <div className="facebook">
                <img
                  src={FacebookIcon}
                  alt=""
                />
              </div>
              <div className="telegram">
                <img
                  src={TelegramIcon}
                  alt=""
                />
              </div>
            </div>
            <p className="inquiries">for inquiries:</p>
            <div className="email">
              <img
                src={EmailIcon}
                alt=""
              />
              <p>kumatehnologiesinc@gmail.com</p>
            </div>
            <p className="business-description">
              Welcome to Kuma Technologies – your destination for
              innovative IT solutions. We combine expertise and creativity to
              provide customized answers for your unique challenges. Embark on
              a journey of transformation and success with us.
            </p>
          </div>
          <div className="right">
            <div className="nav-container">
              <ul>
                <li>Home</li>
                <li>Our Services</li>
                <li>Our Products</li>
              </ul>
              <ul>
                <li>Legal</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="b-footer">
          <div className="hr"></div>
          <div className="bottom-container">
            <div className="left">
              <p>@Copyright Kuma Technologies 2023. All right reserved</p>
            </div>
            <div className="right">
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer