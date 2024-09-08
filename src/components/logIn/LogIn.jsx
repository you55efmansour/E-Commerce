import { Link } from 'react-router-dom';
import signUpImg from '../../imgs/signUp.jpg'
function LogIn() {
  return (
    <>
      <div className="row col-12 mt-5 pt-3">
        <div className="img col-6">
          <img className="img-fluid" src={signUpImg} alt="" />
        </div>
        <div className="sign-up-form col-6 gap-5 container d-flex flex-column justify-content-center align-items-center">
          <div className="head">
            <h1>Log in to Exclusive</h1>
            <div>Enter your details below</div>
          </div>
          <form className=" d-flex w-50 gap-3 flex-column">
            <input
              className="border-bottom p-2"
              type="e-mail"
              placeholder="Email Or Phone Number"
            />
            <input
              className="border-bottom p-2"
              type="password"
              placeholder="Password"
            />
            <div className='d-flex justify-content-between align-items-center'>
              <Link to="/" className="btn btn-danger w-25">
                Log In
              </Link>
              <span>
                  <Link to="#" className="active ms-2 text-danger">
                    Forget Password?
                  </Link>
              </span>

            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LogIn;
