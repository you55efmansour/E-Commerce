function Cart() {
  return (
    <div className="cart mt-5">
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
          <div className="row mt-2 shadow align-items-center p-3">
            <div className="col-3 d-flex align-items-center  fw-bold">
              <div className="img col-12 col-md-6 me-3">
              <img className="img-fluid" src={"A"} alt="" /> 
              </div>
              <div className="col-2 d-none d-lg-block">sasa</div>
            </div>
            <div className="col-3 fw-bold">$600</div>
            <div className="col-3 fw-bold">
              <div className="d-flex border justify-content-center align-items-center p-2 col-8 col-md-3 col-lg-2">
                01
              </div>
            </div>
            <div className="col-3 fw-bold">$600</div>
          </div>
          <div className="row mt-2 shadow align-items-center p-3">
            <div className="col-3 d-flex align-items-center  fw-bold">
              <div className="img col-12 col-md-6 me-3">
              <img className="img-fluid" src={"A"} alt="" /> 
              </div>
              <div className="col-2 d-none d-lg-block">sasa</div>
            </div>
            <div className="col-3 fw-bold">$600</div>
            <div className="col-3 fw-bold">
              <div className="d-flex border justify-content-center align-items-center p-2 col-8 col-md-3 col-lg-2">
                01
              </div>
            </div>
            <div className="col-3 fw-bold">$600</div>
          </div>
        </div>
        {/* protucts end */}
        {/* btns start */}
        <div className="row flex-column justify-content-between align-items-center flex-lg-row mt-4">
          <div className="btn btn-outline-danger text-hover-light border border-secondary text-black col-5 mb-2 col-lg-2">
            Return To Shop
          </div>
          <div className="btn btn-outline-danger text-hover-light border border-secondary text-black col-5 col-lg-2">
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
            <div className="card border- border-black p-3">
              <h1 className="fs-6">Cart Total</h1>
              <div className="d-flex justify-content-between pb-2 mt-3 border-bottom border-3"><span>Subtotal:</span><span>$1750</span></div>
              <div className="d-flex justify-content-between pb-2 mt-3 border-bottom border-3"><span>Shipping:</span><span>Free</span></div>
              <div className="d-flex justify-content-between pb-2 mt-3 border-bottom border-3"><span>Total:</span><span>$1750</span></div>
              <div className=" btn btn-danger d-flex justify-content-center mt-3">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
