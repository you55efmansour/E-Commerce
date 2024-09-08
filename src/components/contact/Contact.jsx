function Contact() {
    return (
    <div className="contact mt-5">
      <div className="container">
        <div className="text-black-50">Home / <span className="text-dark">contact</span></div>
        <div className="row gap-3 mt-5">
          <div className="col-3">
            {/* 1 */}
            <div className="m-3 border-bottom border-3">
              <div>
                <span><i className="fa-solid fa-square-phone text-danger fs-2 rounded"></i></span> Call To Us
              </div>
              <div>We are available 24/7, 7 days a week.</div>
              <div>Phone: +8801611112222</div>
            </div>
            {/* 2 */}
            <div className="m-3">
              <div>
                  <span><i className="fa-solid fa-square-phone text-danger fs-2 rounded"></i></span> Call To Us
                </div>
                <div>We are available 24/7, 7 days a week.</div>
                <div>Phone: +8801611112222</div>
              </div>
            </div>
          <div className="col-8 ">
            <div className="container mt-3">
              <form className="d-flex flex-column gap-3">
                <div className="d-flex justify-content-between">
                  <input type="text" placeholder="Your Name" className="bg-secondary-subtle p-2"/>
                  <input type="e-mail" placeholder="Your Email" className="bg-secondary-subtle p-2"/>
                  <input type="text" placeholder="Your Phone" className="bg-secondary-subtle p-2"/>
                </div>
                <textarea className="p-3 bg-secondary-subtle" placeholder="Your message" id="" cols="30" rows="5"></textarea>
                <div className="btn btn-danger">Send Massage</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
  
  export default Contact;
  