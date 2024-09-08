import qr from '../../imgs/QR.png'
import google from '../../imgs/google-play.png'
import app from '../../imgs/app-store.png'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className="text-light footer">
      <div className="container py-4">
        <div className="row justify-content-between">
          {/* col1 */}
          <div className=" d-none d-md-block d-lg-block col-md-6 col-lg-3 overflow-hidden">
            <h1 className="fs-6 fw-bold">Exclusive</h1>
            <p className="mt-3">Subscribe</p>
            <p className="text-white-50 fs-s">Get 10% off your first order</p>
            <form className=" border border rounded position-relative d-none d-md-block d-lg-block">
              <input type="e-mail" placeholder="Enter your email" className="p-2 w-75 text-light fs-6"/>
              <div className="btn position-absolute top-0 p-2 end-0 text-light send"><i className="fa-regular fa-paper-plane"></i></div>
            </form>
          </div>
          {/* col2 */}
          <div className="d-none d-lg-block col-2 overflow-hidden">
            <h1 className="fs-6 fw-bold">Support</h1>
            <ul className="d-flex flex-column gap-3 mt-3">
              <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>
          </div>
          {/* col3 */}
          <div className="d-none d-lg-block col-2 overflow-hidden">
            <h1 className="fs-6 fw-bold">Account</h1>
            <ul className="d-flex flex-column gap-3 mt-3">
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>
          {/* col4 */}
          <div className="d-none d-lg-block col-2 overflow-hidden">
            <h1 className="fs-6 fw-bold">Quick Link</h1>
            <ul className="d-flex flex-column gap-3 mt-3">
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
          {/* col5 */}
          <div className="col-12 col-md-6 col-lg-3 overflow-hidden d-flex flex-column kustify-content-center align-items-center">
            <h1 className="fs-6 fw-bold">Download App</h1>
            <div className="mt-3 fs-s text-white-50">Save $3 with App New User Only</div>
            <div className="imgs d-flex gap-2 mt-3">
              <div className="qr">
                <img className='img-fluid' src={qr} alt="" />
              </div>
              <div className="store d-flex flex-column align-items-center">
                  <Link to="#"><img className='img-fluid' src={google} alt=""/></Link>
                  <Link to="#"><img className='img-fluid' src={app} alt=""/></Link>
              </div>
            </div>
            <ul className='d-flex gap-4 mt-3'>
              <li><Link className='text-light'><i className="fa-brands fa-facebook-f"></i></Link></li>
              <li><Link className='text-light'><i className="fa-brands fa-x-twitter"></i></Link> </li>
              <li><Link className='text-light'><i className="fa-brands fa-instagram"></i></Link> </li>
              <li><Link className='text-light'><i className="fa-brands fa-linkedin-in"></i></Link></li>
            </ul>
          </div>
        </div>
      </div>
        <div className='text-center border-top border-dark-subtle p-2'>&copy; Copyright <span className='text-info'>Youssef Mansour</span> 2024. All right reserved</div>
    </div>
  );
}

export default Footer;
