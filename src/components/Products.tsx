import ArrowRightIcon from '../assets/images/icons/arrow-sm-right-svgrepo-com-project.svg';
import productItems from '../constant/productItems';
import type { ProductInfo } from '../typings/interfaces';


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

      {productItems.map((e: ProductInfo, index: number) => {
        return (
          <div className="item" key={index}>
            <div className="left">
              <p className="title">{e.title}</p>
              <p className="description">{e.description}</p>
              <button>
                <p>View</p>
                <img
                  src={ArrowRightIcon}
                  alt=""
                />
              </button>
            </div>
            <div className="right">
              <img src={e.images} alt="" />
            </div>
          </div>
        );
      })}

      <div className="view-all">
        <button>
          <p>VIEW ALL</p>
        </button>
      </div>
    </div>
  )
}

export default Products