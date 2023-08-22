import UnderLineImages from '../assets/images/hero-home-title-underline 2.svg'
import HomeAnimatedImages from '../assets/images/animation_ll4zoku7 (2).gif'

function Home() {
  const onClickReserve = () => {
    const link = 'https://calendly.com/kumatechnologies/introductory-call';
    window.open(link);
  }

  return (
    <div className="home">
      <div className="intro-text">
        <div className="main-content">
          <p>
            Transforming <span>ideas</span> into digital
            <span> success</span> stories
          </p>
          <img src={UnderLineImages} alt="" />
        </div>
        <p className="paragraph-text">
          Partner with us to bring your ideas to life with web apps, mobile
          apps, custom software solutions, and a host of other digital
          innovations.
        </p>
        <br />
        <p className="paragraph-text">
          We empower your path to success. Join forces with us to unleash
          innovation, efficiency, and growth in the digital era
        </p>
        <button onClick={onClickReserve}>
          <p>Let's Talk</p>
        </button>
      </div>
      <div className="intro-image">
        <div className="circle"></div>
        <img src={HomeAnimatedImages} alt="" />
      </div>
    </div>
  )
}

export default Home