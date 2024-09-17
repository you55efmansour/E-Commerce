import React, { useState, useEffect, useRef } from "react";
import img from "../../imgs/slider.jpg";
import img2 from "../../imgs/signUp.jpg";
import img3 from "../../imgs/slider-2.jpg";
import saleImg from "../../imgs/home2.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

import axios from "axios";

function Home() {
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

  // scroll start
  const secMen = useRef(null);
  const secweman = useRef(null);
  const secEle = useRef(null);
  const secJew = useRef(null);
  const secUp = useRef(null);
  const upBtn = useRef(null);
  const secShow = useRef(null);

  function scrollToSection(sec) {
    if (sec.current) {
      sec.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  // scroll end

  // format time as D:HH:MM:SS start

  const initialTime = 4 * 24 * 60 * 60 + 23 * 60 * 60 + 59 * 60 + 60;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  function formatTime(time) {
    const days = Math.floor(time / (24 * 60 * 60));
    const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((time % (60 * 60)) / 60);
    const seconds = Math.floor((time % 60) / 1);

    return (
      <>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="fs-s fw-normal ">Days</div>
          <div className="days fs-3">{days}</div>
        </div>
        <span className="text-danger fs-3 d-flex align-items-end">:</span>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="fs-s fw-normal">Hours</div>
          <div className="days fs-3">{hours}</div>
        </div>
        <span className="text-danger fs-3 d-flex align-items-end">:</span>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="fs-s fw-normal">Minutes</div>
          <div className="days fs-3">{minutes}</div>
        </div>
        <span className="text-danger fs-3 d-flex align-items-end">:</span>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="fs-s fw-normal">Seconds</div>
          <div className="days fs-3">{seconds}</div>
        </div>
      </>
    );
  }
  function formatTimeAgain(time) {
    const days = Math.floor(time / (24 * 60 * 60));
    const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((time % (60 * 60)) / 60);
    const seconds = Math.floor((time % 60) / 1);

    return (
      <>
        <div className="timer row text-dark mt-4">
          <div className="col-6 mb-3 col-md-3 col-lg-3">
            <div className="bg-light timer-box rounded-circle d-flex flex-column justify-content-center align-items-center">
              <div className="fw-bold fs-4">{days}</div>
              <div className="fs-s">days</div>
            </div>
          </div>
          <div className="col-6 mb-3 col-md-3 col-lg-3">
            <div className="bg-light timer-box rounded-circle d-flex flex-column justify-content-center align-items-center">
              <div className="fw-bold fs-4">{hours}</div>
              <div className="fs-s">hours</div>
            </div>
          </div>
          <div className="col-6 mb-3 col-md-3 col-lg-3">
            <div className="bg-light timer-box rounded-circle d-flex flex-column justify-content-center align-items-center">
              <div className="fw-bold fs-4">{minutes}</div>
              <div className="fs-s">minutes</div>
            </div>
          </div>
          <div className="col-6 mb-3 col-md-3 col-lg-3">
            <div className="bg-light timer-box rounded-circle d-flex flex-column justify-content-center align-items-center">
              <div className="fw-bold fs-4">{seconds}</div>
              <div className="fs-s">seconds</div>
            </div>
          </div>
        </div>
      </>
    );
  }
  // format time as D:HH:MM:SS end

  // display products start

  const [products, SetProtucts] = useState([]);
  const [menProducts, SetMenProtucts] = useState([]);
  const [womenProducts, SetwomenProtucts] = useState([]);
  const [jeweleryProducts, SetJeweleryProtucts] = useState([]);
  const [electronicsProducts, SetElectronicsProtucts] = useState([]);
  const [cartProducts, SetCartProducts] = useState(() => {
    const savedCart = localStorage.getItem("cart-products");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [loveProducts, SetLoveProducts] = useState(() => {
    const savedCart = localStorage.getItem("love-products");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  function addToCart(product) {
    SetCartProducts([...cartProducts, product]);
  }
  function addToCartOffer(product, offerPrice) {
    SetCartProducts([...cartProducts, { ...product, price: offerPrice }]);
  }

  function addToLove(product) {
    SetLoveProducts([...loveProducts, product]);
  }

  function showAllProducts(allProducts) {
    let products = allProducts.map((product) => {
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
                addToCartOffer(product, (product.price * 40) / 100);
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
                to={`/view/${product.id}/${product.category}/${true}`}
                className="view rounded-circle"
              >
                <i className="fa-regular fa-eye"></i>
              </Link>
            </div>
            <div className="offer rounded position-absolute top-0 start-0 text-light bg-danger p-2 text-center">
              40%
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{`${product.title.split(" ")[0]} ${
              product.title.split(" ")[1]
            } ${product.title.split(" ")[2]}`}</h5>
            <p className="card-text">
              <span className="price text-danger fw-semibold me-2">
                ${((product.price * 40) / 100).toFixed(2)}
              </span>
              <span className="p-offer text-decoration-line-through text-secondary">
                ${product.price.toFixed(2)}
              </span>
            </p>
          </div>
        </div>
      );
    });
    return products;
  }
  function showMensProducts(allProducts) {
    let products = allProducts.map((product) => {
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
                addToCart(product);
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
                to={`/view/${product.id}/${product.category}/${false}`}
                className="view rounded-circle"
              >
                <i className="fa-regular fa-eye"></i>
              </Link>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{`${product.title.split(" ")[0]} ${
              product.title.split(" ")[1]
            } ${product.title.split(" ")[2]}`}</h5>
            <p className="card-text">
              <span className="price text-danger fw-semibold me-2">
                ${product.price}
              </span>
            </p>
          </div>
        </div>
      );
    });
    return products;
  }
  function showWomensProducts(allProducts) {
    let products = allProducts.map((product) => {
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
                addToCart(product);
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
                to={`/view/${product.id}/${product.category}/${false}`}
                className="view rounded-circle"
              >
                <i className="fa-regular fa-eye"></i>
              </Link>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{`${product.title.split(" ")[0]} ${
              product.title.split(" ")[1]
            } ${product.title.split(" ")[2]}`}</h5>
            <p className="card-text">
              <span className="price text-danger fw-semibold me-2">
                ${product.price}
              </span>
            </p>
          </div>
        </div>
      );
    });
    return products;
  }
  function showJeweleryProducts(allProducts) {
    let products = allProducts.map((product) => {
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
                addToCart(product);
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
                to={`/view/${product.id}/${product.category}/${false}`}
                className="view rounded-circle"
              >
                <i className="fa-regular fa-eye"></i>
              </Link>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{`${product.title.split(" ")[0]} ${
              product.title.split(" ")[1]
            } ${product.title.split(" ")[2]}`}</h5>
            <p className="card-text">
              <span className="price text-danger fw-semibold me-2">
                ${product.price}
              </span>
            </p>
          </div>
        </div>
      );
    });
    return products;
  }
  function showElectronicsProducts(allProducts) {
    let products = allProducts.map((product) => {
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
                addToCart(product);
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
                to={`/view/${product.id}/${product.category}/${false}`}
                className="view rounded-circle"
              >
                <i className="fa-regular fa-eye"></i>
              </Link>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{`${product.title.split(" ")[0]} ${
              product.title.split(" ")[1]
            } ${product.title.split(" ")[2]}`}</h5>
            <p className="card-text">
              <span className="price text-danger fw-semibold me-2">
                ${product.price}
              </span>
            </p>
          </div>
        </div>
      );
    });
    return products;
  }

  // display products end

  useEffect(() => {
    // Save updated love to localStorage
    localStorage.setItem("love-products", JSON.stringify(loveProducts));
  }, [loveProducts]);
  useEffect(() => {
    // Save updated cart to localStorage
    localStorage.setItem("cart-products", JSON.stringify(cartProducts));
  }, [cartProducts]);
  useEffect(() => {
    if (timeLeft <= 0) {
      return;
    }

    // Set up an interval to update the timeLeft every second
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Clear the interval on component unmount or when timeLeft reaches 0
    return () => clearInterval(interval);
  }, [timeLeft]);

  const [show, SetShow] = useState(true);
  useEffect(() => {
    if (window.scrollY + window.innerHeight >= secShow.current.offsetTop) {
      if (show) {
        upBtn.current.classList.add("visible");
        SetShow(false);
      }
    } else {
      if (show) {
      } else {
        upBtn.current.classList.remove("visible");
        SetShow(true);
      }
    }
  }, [window.scrollY]);

  useEffect(() => {
    async function getAllProducts() {
      let res = await axios.get("https://fakestoreapi.com/products");
      SetProtucts(res.data);
    }

    async function getMensProducts() {
      let res = await axios.get(
        "https://fakestoreapi.com/products/category/men's clothing"
      );
      SetMenProtucts(res.data);
    }
    async function getWomensProducts() {
      let res = await axios.get(
        "https://fakestoreapi.com/products/category/women's clothing"
      );
      SetwomenProtucts(res.data);
    }
    async function getElectronicsProducts() {
      let res = await axios.get(
        "https://fakestoreapi.com/products/category/electronics"
      );
      SetElectronicsProtucts(res.data);
    }
    async function getJeweleryProducts() {
      let res = await axios.get(
        "https://fakestoreapi.com/products/category/jewelery"
      );
      SetJeweleryProtucts(res.data);
    }
    getJeweleryProducts();
    getElectronicsProducts();
    getWomensProducts();
    getMensProducts();
    getAllProducts();
  }, []);

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
    <div className="home border-top">
      <Helmet>
        <title>Home</title>
        <meta name="here you can find all of our products clothes for mens and womans , Jewelery and electronics " content="store"/>
      </Helmet>
      <div className="container">
        <div
          id="alert"
          className="col-8 me-3 col-md-2 col-lg-2 position-fixed end-0 z-3 opacity-75"
        >
          {alerts.map((a) => {
            alertRemove(a.id);
            return (
                <div
                  className="alert alert-success alert-dismissible fade show"
                  id={`alert-${a.id}`}
                  role="alert"
                  key={a.id}
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
        <div
          ref={upBtn}
          className="btn btn-danger up-btn position-fixed z-2"
          onClick={() => {
            scrollToSection(secUp);
          }}
        >
          <i className="fa-solid fa-angle-up"></i>
        </div>
        <div ref={secUp} className="row justify-content-between mb-5">
          <div className="col-12 col-lg-4 pt-5 border-end side-bar border-md-end-0">
            <ul className="d-flex flex-column fw-bold gap-4">
              <li>
                <div
                  className="side-nav"
                  onClick={() => {
                    scrollToSection(secMen);
                  }}
                >
                  Men’s Fashion
                </div>
              </li>
              <li>
                <div
                  className="side-nav"
                  onClick={() => {
                    scrollToSection(secweman);
                  }}
                >
                  Woman’s Fashion
                </div>
              </li>
              <li>
                <div
                  className="side-nav"
                  onClick={() => {
                    scrollToSection(secEle);
                  }}
                >
                  electronics
                </div>
              </li>
              <li>
                <div
                  className="side-nav"
                  onClick={() => {
                    scrollToSection(secJew);
                  }}
                >
                  jewelery
                </div>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-7 pt-5">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide overflow-hidden"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={img} className="img-fluid" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={img2} className="img-fluid" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={img3} className="img-fluid" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sales start */}
        <div className="sales row align-items-center" id="sale">
          <div className="div col-12">
            <div className="main-head bg-danger rounded p-2 h-fit">
              <span className="ps-4 fw-bold">Today’s</span>
            </div>
          </div>

          <div className=" fs-3 fw-bold mt-5 col-12 col-lg-3">Flash Sales</div>
          <div className="counter  fs-4 fw-bold mt-5 col-12 col-lg-4 d-flex gap-3 justify-content-between">
            {formatTime(timeLeft)}
          </div>
          {/* sale-products start */}
          <div data-aos="fade-left">
            <Carousel className="carousel-inner mt-5" responsive={responsive}>
              {showAllProducts(products)}
            </Carousel>
          </div>
          {/* sale-products end */}
        </div>
        {/* Sales end */}

        {/* Categories start  */}
        <div ref={secShow} className="categories row mt-5 py-5">
          <div className="div col-12">
            <div className="main-head bg-danger rounded p-2 h-fit">
              <span className="ps-4 fw-bold">Categories</span>
            </div>
          </div>
          <div className=" fs-3 fw-bold mt-5 col-12">Browse By Category</div>
          <div className="row col-12 mt-5">
            <div className="col-6 col-md-4 mb-3 col-lg-2">
              <div className="categories-box rounded border d-flex flex-column justify-content-center align-items-center">
                <div>
                  <i className="fa-solid fa-mobile-screen fs-3 mb-3"></i>
                </div>
                <div>Phones</div>
              </div>
            </div>
            <div className="col-6 col-md-4 mb-3 col-lg-2">
              <div className="categories-box rounded border d-flex flex-column justify-content-center align-items-center">
                <div>
                  <i className="fa-solid fa-desktop fs-3 mb-3"></i>
                </div>
                <div>Computers</div>
              </div>
            </div>
            <div className="col-6 col-md-4 mb-3 col-lg-2">
              <div className="categories-box rounded border d-flex flex-column justify-content-center align-items-center">
                <div>
                  <i className="fa-solid fa-clock fs-3 mb-3"></i>
                </div>
                <div>SmartWatch</div>
              </div>
            </div>
            <div className="col-6 col-md-4 mb-3 col-lg-2">
              <div className="categories-box rounded border d-flex flex-column justify-content-center align-items-center">
                <div>
                  <i className="fa-solid fa-camera fs-3 mb-3"></i>
                </div>
                <div>Camera</div>
              </div>
            </div>
            <div className="col-6 col-md-4 mb-3 col-lg-2">
              <div className="categories-box rounded border d-flex flex-column justify-content-center align-items-center">
                <div>
                  <i className="fa-solid fa-headphones-simple fs-3 mb-3"></i>
                </div>
                <div>HeadPhones</div>
              </div>
            </div>
            <div className="col-6 col-md-4 mb-3 col-lg-2">
              <div className="categories-box rounded border d-flex flex-column justify-content-center align-items-center">
                <div>
                  <i className="fa-solid fa-gamepad fs-3 mb-3"></i>
                </div>
                <div>Gaming</div>
              </div>
            </div>
          </div>
        </div>
        {/* Categories end */}

        {/* Mens products start */}
        <div ref={secMen} className="Men row mt-5 py-5">
          <div className="div col-12">
            <div className="main-head bg-danger rounded p-2 h-fit">
              <div className="ps-4 fw-bold ">Men’s</div>
            </div>
          </div>
          <div data-aos="fade-left">
            <Carousel className="carousel-inner mt-5" responsive={responsive}>
              {showMensProducts(menProducts)}
            </Carousel>
          </div>
        </div>
        {/* Mens products end */}

        {/* sale again start */}
        <div className="sale-again row mt-5 py-5 text-light">
          <div className="container overflow-hidden">
            <div className="row">
              <div className="left ms-5 mb-5 col-lg-6 col-12">
                <h1 className="fs-6 text-success">categories</h1>
                <div className="fs-1 fw-bold mt-5">
                  Enhance Your Music Experience
                </div>
                {formatTimeAgain(timeLeft)}
                <div className="btn btn-success mt-5">Buy Now</div>
              </div>
              <div className="right d-none d-lg-block col-5">
                <img className="img-fluid" src={saleImg} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* sale again end */}

        {/*  women start */}
        <div ref={secweman} className="women row mt-5 py-5">
          <div className="div col-12">
            <div className="main-head bg-danger rounded p-2 h-fit">
              <div className="ps-4 fw-bold ">Women’s</div>
            </div>
          </div>
          <div data-aos="fade-left">
            <Carousel className="carousel-inner mt-5" responsive={responsive}>
              {showWomensProducts(womenProducts)}
            </Carousel>
          </div>
        </div>
        {/* women end */}

        {/* jewelery start */}
        <div ref={secEle} className="jewelery row mt-5 py-5">
          <div className="div col-12">
            <div className="main-head bg-danger rounded p-2 h-fit">
              <div className="ps-4 fw-bold ">Jewelery</div>
            </div>
          </div>
          <div data-aos="fade-left">
            <Carousel className="carousel-inner mt-5" responsive={responsive}>
              {showJeweleryProducts(jeweleryProducts)}
            </Carousel>
            
          </div>
        </div>
        {/* jewelery end */}

        {/* electronics start */}
        <div ref={secJew} className="electronics row mt-5 py-5">
          <div className="div col-12">
            <div className="main-head bg-danger rounded p-2 h-fit">
              <div className="ps-4 fw-bold ">electronics</div>
            </div>
          </div>
          <div data-aos="fade-left">
            <Carousel className="carousel-inner mt-5" responsive={responsive}>
              {showElectronicsProducts(electronicsProducts)}
            </Carousel>
          </div>
        </div>
        {/* electronics end */}

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

export default Home;
