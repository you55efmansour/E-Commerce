import img from "../../imgs/slider.jpg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function View() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1200 },
          items: 3.5,
        },
        desktop: {
          breakpoint: { max: 1200, min: 992 },
          items: 3.5,
        },
        tablet: {
          breakpoint: { max: 992, min: 768 },
          items: 2.5,
        },
        mobile: {
          breakpoint: { max: 768, min: 0 },
          items: 1.5,
        },
      };
  return (
    <div className="view">
      <div className="container">
        <div className="text-black-50">
          Home / <span>catego</span> / <span className="text-dark">name</span>
        </div>
        {/* product start */}
        <div className="row product mt-5">
          <div className="img col12 colmd-6 col-lg-6">
            <img className="img-fluid" src={img} alt="" />
          </div>
          <div className="details col12 colmd-6 col-lg-6">
            <h1>Name</h1>
            <div className="fw-semibold">price</div>
            <p className="desc border-bottom border-dark fs-s fw-semibold pb-3">desc</p>
            <div className="btns d-flex gap-3 align-items-center">
              <div className="btn btn-danger">Buy Now</div>
              <div className="love border border-2 p-1">
                <i className="fa-regular fa-heart"></i>
              </div>
            </div>
          </div>
        </div>
        {/* product end */}

        {/* Related Item start */}
        <div className="related-items row mt-5 py-5">
          <div className="div col-12">
              <div className="main-head bg-danger rounded p-2 h-fit">
                <div className="ps-4 fw-bold ">electronics</div>
              </div>
          </div>
          {/* <Carousel className="carousel-inner mt-5" responsive={responsive}>
            ss
          </Carousel> */}
        </div>
        {/* Related Item end */}
      </div>
    </div>
  );
}

export default View;
