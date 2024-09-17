import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';


function Love() {
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
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("love-products"));
    SetProducts(savedProducts);
  }, [])
  return (
    <div className="love mt-5 mvh-50">
      <Helmet>
        <title>Love</title>
        <meta name="you can see your love list here" content="store"/>
      </Helmet>
      <div className="container">
        <div className="text-black-50">
          Home / <span className="text-dark">love</span>
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
          <div className="btn btn-outline-danger text-hover-light border border-secondary text-black col-5 col-lg-2" onClick={() => { localStorage.removeItem("love-products"); SetProducts([]) }}>
            Update Love List
          </div>
        </div>
        {/* btns end */}
      </div>
    </div>
  );
}

export default Love;
