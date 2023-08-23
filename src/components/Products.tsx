import ArrowRightIcon from '../assets/images/icons/arrow-sm-right-svgrepo-com-project.svg'

function Products() {
  return (
    <div className="products">
      <div className="title-container">
        <p className="title">Our Products</p>
        <div className="description">
          <p>
            Explore our
            <span> recent project</span>
          </p>
          <img src="./assets/images/hero-home-title-underline 2.svg" alt="" />
        </div>
      </div>

      <div className="item">
        <div className="left">
          <p className="title">Lorem ipsum dolor sit amet</p>
          <p className="description">
            Nullam ultricies tellus ac mi dignissim, sed dignissim diam
            ultrices. Nullam fermentum quis libero at rhoncus.
          </p>
          <button>
            <p>View</p>
            <img
              src={ArrowRightIcon}
              alt=""
            />
          </button>
        </div>
        <div className="right"></div>
      </div>

      <div className="item">
        <div className="left">
          <p className="title">Lorem ipsum dolor sit amet</p>
          <p className="description">
            Nullam ultricies tellus ac mi dignissim, sed dignissim diam
            ultrices. Nullam fermentum quis libero at rhoncus.
          </p>
          <button>
            <p>View</p>
            <img
              src={ArrowRightIcon}
              alt=""
            />
          </button>
        </div>
        <div className="right"></div>
      </div>

      <div className="item">
        <div className="left">
          <p className="title">Lorem ipsum dolor sit amet</p>
          <p className="description">
            Nullam ultricies tellus ac mi dignissim, sed dignissim diam
            ultrices. Nullam fermentum quis libero at rhoncus.
          </p>
          <button>
            <p>View</p>
            <img
              src={ArrowRightIcon}
              alt=""
            />
          </button>
        </div>
        <div className="right"></div>
      </div>

      <div className="view-all">
        <button>
          <p>VIEW ALL</p>
        </button>
      </div>
    </div>
  )
}

export default Products