import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

function Cart() {
  const [products, SetProducts] = useState();

  function addProducts(products) {
    if (products) {
      let cartProduct = products.map((product, i) => {
        return (
          <div key={i} className="row mt-2 shadow align-items-center p-3">
            <div className="col-3 d-flex align-items-center  fw-bold">
              <div className="img col-12 col-md-6 me-3">
                <img className="img-fluid" src={product.image} alt="" />
              </div>
              <div className="col-2 d-none d-lg-block">{product.title.split(" ")[0]}</div>
            </div>
            <div className="col-3 fw-bold">${product.price}</div>
            <div className="col-3 fw-bold">
              <div className="d-flex border justify-content-center align-items-center p-2 col-8 col-md-3 col-lg-2">
                01
              </div>
            </div>
            <div className="col-3 fw-bold">${product.price}</div>
          </div>
        )
      })
      return cartProduct
    }
  }
  function addPrice(products) {
    let cartPrice = 0;
    if (products) {
      cartPrice = products.reduce((price, item) => price + item.price, 0);
    }
      let totalPrice = <div className="card border- border-black p-3">
      <h1 className="fs-6">Cart Total</h1>
      <div className="d-flex justify-content-between pb-2 mt-3 border-bottom border-3"><span>Subtotal:</span><span>${cartPrice}</span></div>
      <div className="d-flex justify-content-between pb-2 mt-3 border-bottom border-3"><span>Shipping:</span><span>Free</span></div>
      <div className="d-flex justify-content-between pb-2 mt-3 border-bottom border-3"><span>Total:</span><span>${cartPrice}</span></div>
      <div className=" btn btn-danger d-flex justify-content-center mt-3">Buy Now</div>
    </div>
      return (totalPrice)
    }
  useEffect(() => {
    SetProducts(products)
  }, [products])


  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("cart-products"));
    SetProducts(savedProducts);
  }, [])
  return (
    <div className="cart mt-5">
      <Helmet>
        <title>Cart</title>
        <meta name="here you can see your chosen product in the cart" content="store"/>
      </Helmet>
      <div className="container">
        <div className="text-black-50">
          Home / <span className="text-dark">cart</span>
        </div>
        {/* protucts start */}
        <div className="products">
          <div className="row mt-5 align-items-center shadow p-3">
            <div className="col-3 fw-bold">Product</div>
            <div className="col-3 fw-bold">Price</div>
            <div className="col-3 fw-bold">Quantity</div>
            <div className="col-3 fw-bold">Subtotal</div>
          </div>
        {addProducts(products)}       
        </div>
        {/* protucts end */}
        {/* btns start */}
        <div className="row flex-column justify-content-between align-items-center flex-lg-row mt-4">
          <Link to={"/"} className="btn btn-outline-danger text-hover-light border border-secondary text-black col-5 mb-2 col-lg-2">
            Return To Shop
          </Link>
          <div className="btn btn-outline-danger text-hover-light border border-secondary text-black col-5 col-lg-2" onClick={() => { localStorage.removeItem("cart-products"); SetProducts([]) }}>
            Update Cart
          </div>
        </div>
        {/* btns end */}
        <div className="row mt-5 justify-content-between">
          <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start mb-3 p-0 h-fit">
            <input type="text" className="border border-secondary rounded h-fit p-2 me-3 col-6" placeholder="Coupon Code" />
            <div className="btn btn-danger col-3 fs-s">
              Apply Coupon
            </div>
          </div> 
          <div className="col-12 col-lg-6">
            {addPrice(products)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
