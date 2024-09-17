import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useParams } from "react-router-dom";

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
  const { id, category, offer } = useParams();
  const [product, SetProduct] = useState();
  const [categoryProducts, SetCategoryProducts] = useState([]);
  const [cartProducts, SetCartProducts] = useState(() => {
    const savedCart = localStorage.getItem("cart-products");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [loveProducts, SetLoveProducts] = useState(() => {
    const savedCart = localStorage.getItem("love-products");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    async function getProduct() {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      SetProduct(res.data);
    }
    getProduct();
  }, [id]);

  useEffect(() => {
    async function getCategory() {
      let res = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      SetCategoryProducts(res.data);
    }
    getCategory();
  }, []);

  useEffect(() => {
    // Save updated love to localStorage
    localStorage.setItem("love-products", JSON.stringify(loveProducts));
  }, [loveProducts]);
  useEffect(() => {
    // Save updated cart to localStorage
    localStorage.setItem("cart-products", JSON.stringify(cartProducts));
  }, [cartProducts]);

  function displayCategory(category) {
    if (!category) return null;
    let filterCategoryArray = category.filter((product) => {
      return product.id !== +id;
    });
    let products = filterCategoryArray.map((product) => {
      return (
        <div
          key={product.id}
          className="card shadow product-card me-3 border-0"
        >
          <div className="top overflow-hidden position-relative d-flex justify-content-center align-items-center">
            <img
              src={product.image}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div
              className="add-c"
              onClick={() => {
                addToCart(product, (product.price * 40) / 100);
                addAlert("Added To Cart");
              }}
            >
              Add To Cart
            </div>
            <div className="actions">
              <div
                className="love rounded-circle mb-2"
                onClick={() => {
                  addToLove(product);
                  addAlert("Added To Love");
                }}
              >
                <i className="fa-regular fa-heart"></i>
              </div>
              <Link
                to={`/view/${product.id}/${product.category}/${offer}`}
                className="view rounded-circle"
              >
                <i className="fa-regular fa-eye"></i>
              </Link>
            </div>
            {offer === "true" ?
              <div className="offer rounded position-absolute top-0 start-0 text-light bg-danger p-2 text-center">
                40%
              </div>:""}
          </div>
          <div className="card-body">
            <h5 className="card-title">{`${product.title.split(" ")[0]} ${
              product.title.split(" ")[1]
            } ${product.title.split(" ")[2]}`}</h5>
            {[
              offer !== "true" && (
                <p className="card-text">
                  <span className="price text-danger fw-semibold me-2">
                    ${product.price.toFixed(2)}
                  </span>
                </p>
              ),
            ]}
            {[
              offer === "true" && (
                <p className="card-text">
                  <span className="price text-danger fw-semibold me-2">
                    ${((product.price * 40) / 100).toFixed(2)}
                  </span>
                  <span className="p-offer text-decoration-line-through text-secondary">
                    ${product.price.toFixed(2)}
                  </span>
                </p>
              ),
            ]}
          </div>
        </div>
      );
    });
    return products;
  }

  function displayProduct(product) {
    if (!product) return null;
    return (
      <>
      <Helmet>
        <title>View</title>
        <meta name="here we view our products details" content="store"/>
      </Helmet>
        <div className="text-black-50">
          Home / <span>{product.category.split(" ")[0]}</span> /{" "}
          <span className="text-dark fw-bold">
            {product.title.split(" ")[0]}
          </span>
        </div>
        <div className="row product mt-5">
          <div className="img col12 vh-50  col-md-6 col-lg-6">
            <img className="img-fluid vh-50" src={product.image} alt="" />
          </div>
          <div className="details col12 colmd-6 col-lg-6">
            <h1>{`${product.title.split(" ")[0]} ${
              product.title.split(" ")[1]
            }`}</h1>
            <div className="fw-bold">
              ${" "}
              {offer ? ((product.price * 40) / 100).toFixed(2) : product.price}
            </div>
            <p className="desc border-bottom border-dark fs-s fw-semibold pb-3">
              {product.description}
            </p>
            <div className="btns d-flex gap-3 align-items-center">
              <div className="btn btn-danger">Buy Now</div>
              <div
                className="love border border-2 p-1"
                onClick={() => {
                  addToLove(product)
                  addAlert("Added To Love")
                }
                }
              >
                <i className="fa-regular fa-heart"></i>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  function addToLove(product) {
    SetLoveProducts([...loveProducts, product]);
  }
  function addToCart(product) {
    SetCartProducts([...cartProducts, product]);
  }

  // add alerts
  const [alerts, setAlerts] = useState([]);
  function addAlert(message) {
    const id = Date.now();
    setAlerts([...alerts, { id, message }]);
  }

  // remove alert
  function alertRemove(id) {
    setTimeout(() => {
      setAlerts((alerts) => alerts.filter((alert) => alert.id !== id));
    }, 2000);
  }

  return (
    <div className="view">
      <div className="container">
        <div
          id="alert"
          className="col-8 me-3 col-md-2 col-lg-2 position-fixed end-0 z-3 opacity-75"
        >
          {alerts.map((a) => {
            alertRemove(a.id);
            return (
                  <div 
                    key={a.id}
                    className="alert alert-success alert-dismissible fade show"
                    id={`alert-${a.id}`}
                    role="alert"
                    >
                      <strong>{a.message}</strong>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                      ></button>
                  </div>
            );
          })}
        </div>
        {/* product start */}
        {displayProduct(product)}
        {/* product end */}

        {/* Related Item start */}
        <div className="related-items row mt-5 py-5">
          <div className="div col-12">
            <div className="main-head bg-danger rounded p-2 h-fit">
              <div className="ps-4 fw-bold ">{category.split(" ")[0]}</div>
            </div>
          </div>
          <Carousel className="carousel-inner mt-5" responsive={responsive}>
            {displayCategory(categoryProducts)}
          </Carousel>
        </div>
        {/* Related Item end */}
      </div>
    </div>
  );
}

export default View;
