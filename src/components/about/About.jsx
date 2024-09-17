import aboutImg from "../../imgs/about.jpg";
import aboutImg2 from "../../imgs/about-2.png";
import aboutImg3 from "../../imgs/about-3.png";
import aboutImg4 from "../../imgs/about-4.png";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

function About() {
  return (
    <div className="about mt-5 position-relative">
      <Helmet>
        <title>About</title>
        <meta name="about Exclusive" content="store"/>
      </Helmet>
      <div className="container">
        <div className="text-black-50">
          Home / <span className="text-dark">about</span>
        </div>
        {/* row 1 */}
        <div className="row my-5 pb-5">
          <div className="col-12 col-lg-6">
            <h1>Our Story</h1>
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <p className="mt-3">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="d-none d-lg-block col-5 position-absolute top-0 end-0 p-0">
            <img className="img-fluid" src={aboutImg} alt="" />
          </div>
        </div>

        {/* row 2 */}
        <div className="row gap-4 mt-5 pt-5 justify-content-center align-items-center flex-column flex-md-row flex-lg-row">
          {/* card 1 */}
          <div className="col-8 col-md-5 col-lg-2 border border-2 rounded d-flex flex-column justify-content-center align-items-center py-4">
            <div className="border border-dark-subtle rounded-circle bg-dark text-light border-5 icon p-2">
              <i className="fa-solid fa-store fs-2"></i>
            </div>
            <div className="fw-bold fs-4">10.5k </div>
            <div className="fs-s">Sallers active our site</div>
          </div>
          {/* card 2 */}
          <div className="col-8 col-md-5 col-lg-2 bg-danger border border-2 rounded d-flex flex-column justify-content-center align-items-center py-4">
            <div className="border border-dark-subtle rounded-circle bg-white border-5 p-2 icon">
              <i className="fa-solid fa-dollar-sign fs-2"></i>
            </div>
            <div className="fw-bold fs-4">33k</div>
            <div className="fs-s">Mopnthly Produduct Sale</div>
          </div>
          {/* card 3 */}
          <div className="col-8 col-md-5 col-lg-2 border border-2 rounded d-flex flex-column justify-content-center align-items-center py-4">
            <div className="border border-dark-subtle rounded-circle bg-dark text-light border-5 icon p-2">
              <i className="fa-solid fa-bag-shopping fs-2"></i>
            </div>
            <div className="fw-bold fs-4">45.5k</div>
            <div className="fs-s">Customer active in our site</div>
          </div>
          {/* card 4 */}
          <div className="col-8 col-md-5 col-lg-2 border border-2 rounded d-flex flex-column justify-content-center align-items-center py-4">
            <div className="border border-dark-subtle rounded-circle bg-dark text-light border-5 icon p-2">
              <i className="fa-solid fa-sack-dollar fs-2"></i>
            </div>
            <div className="fw-bold fs-4">25k</div>
            <div className="fs-s">Anual gross sale in our site</div>
          </div>
        </div>
        {/* row 3 */}
        <div className="row gap-4 mt-5 pt-5 justify-content-center">
          {/* card 1 */}
          <div data-aos="flip-left" className="col-12 col-md-5 col-lg-3 ">
            <div className="bg-secondary-subtle d-flex flex-column justify-content-end h-75 p-5 pb-0">
              <img className="img-fluid" src={aboutImg2} alt="" />
            </div>
            <div className="fw-bold fs-4 mt-2">Tom Cruise</div>
            <div className="fs-s">Founder & Chairman</div>
            <ul className="d-flex gap-4 mt-2">
              <li>
                <Link>
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link>
                  <i className="fa-brands fa-x-twitter"></i>
                </Link>{" "}
              </li>
              <li>
                <Link>
                  <i className="fa-brands fa-instagram"></i>
                </Link>{" "}
              </li>
            </ul>
          </div>
          {/* card 2 */}
          <div data-aos="flip-left" className="col-12 col-md-5 col-lg-3 ">
            <div className="bg-secondary-subtle d-flex flex-column justify-content-end h-75 p-5 pb-0">
              <img className="img-fluid" src={aboutImg3} alt="" />
            </div>
            <div className="fw-bold fs-4 mt-2">Emma Watson</div>
            <div className="fs-s">Managing Director</div>
            <ul className="d-flex gap-4 mt-2">
              <li>
                <Link>
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link>
                  <i className="fa-brands fa-x-twitter"></i>
                </Link>{" "}
              </li>
              <li>
                <Link>
                  <i className="fa-brands fa-instagram"></i>
                </Link>{" "}
              </li>
            </ul>
          </div>
          {/* card 3 */}
          <div data-aos="flip-left" className="col-12 col-md-5 col-lg-3 ">
            <div className="bg-secondary-subtle d-flex flex-column justify-content-end h-75 p-5 pb-0">
              <img className="img-fluid" src={aboutImg4} alt="" />
            </div>
            <div className="fw-bold fs-4 mt-2">Will Smith</div>
            <div className="fs-s">Product Designer</div>
            <ul className="d-flex gap-4 mt-2">
              <li>
                <Link>
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link>
                  <i className="fa-brands fa-x-twitter"></i>
                </Link>{" "}
              </li>
              <li>
                <Link>
                  <i className="fa-brands fa-instagram"></i>
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
        {/* row 4 */}
        <div className="row gap-4 mt-5 pt-5 justify-content-center align-items-center flex-column flex-md-row flex-lg-row">
          {/* card 1 */}
          <div className="col-8 col-md-5 col-lg-3 d-flex flex-column justify-content-center align-items-center py-4">
            <div className="border border-dark-subtle rounded-circle bg-black text-light border-5 icon p-2">
              <i className="fa-solid fa-truck-fast fs-2"></i>
            </div>
            <div className="fw-bold fs-6">FREE AND FAST DELIVERY</div>
            <div className="fs-s">Free delivery for all orders over $140</div>
          </div>
          {/* card 2 */}
          <div className="col-8 col-md-5 col-lg-3 d-flex flex-column justify-content-center align-items-center py-4">
            <div className="border border-dark-subtle rounded-circle bg-black text-light border-5 icon p-2">
              <i className="fa-solid fa-headphones-simple fs-2"></i>
            </div>
            <div className="fw-bold fs-6">24/7 CUSTOMER SERVICE</div>
            <div className="fs-s">Friendly 24/7 customer support</div>
          </div>
          {/* card 3 */}
          <div className="col-8 col-md-5 col-lg-3 d-flex flex-column justify-content-center align-items-center py-4">
            <div className="border border-dark-subtle rounded-circle bg-black text-light border-5 icon p-2">
              <i className="fa-solid fa-calendar-check fs-2"></i>
            </div>
            <div className="fw-bold fs-6">MONEY BACK GUARANTEE</div>
            <div className="fs-s">We reurn money within 30 days</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
