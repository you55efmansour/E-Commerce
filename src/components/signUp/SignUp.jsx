import {Link } from 'react-router-dom';
import signUpImg from '../../imgs/signUp.jpg'
import { Helmet } from 'react-helmet';

function SignUp() {
    return (
    <>
      <Helmet>
        <title>SignUp</title>
        <meta name="sign up and join us" content="store"/>
      </Helmet>
      <div className="row col-12 mt-5 pt-3">
          <div className="img col-12 col-md-6 col-lg-6">
            <img className='img-fluid' src={signUpImg} alt="" />
          </div>
          <div className="sign-up-form col-12 col-md-6 col-lg-6 gap-5 container d-flex flex-column justify-content-center align-items-center">
            <div className="head">
              <h1>Create an account</h1>
              <div>Enter your details below</div>
            </div>
            <form className=' d-flex col-9 col-lg-6 gap-3 flex-column'>
              <input className='border-bottom p-2' type="text" placeholder='Name' />
              <input className='border-bottom p-2' name='e-mail'  type="e-mail" placeholder='Email Or Phone Number'/>
              <input className='border-bottom p-2' name='password' type="password" placeholder='Password'/>
              <Link to='/logIn' className='btn btn-danger w-fit'>Create Account</Link>
              <p>Already have account? <span><Link to='/logIn' className='active ms-2'>Log in</Link></span></p>
            </form>
          </div>
      </div>
    </>
    );
  }
  
  export default SignUp;
  