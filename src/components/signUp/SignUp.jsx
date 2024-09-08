import { Link } from 'react-router-dom';
import signUpImg from '../../imgs/signUp.jpg'
function SignUp() {
    return (
    <>
      <div className="row col-12 mt-5 pt-3">
          <div className="img col-6">
            <img className='img-fluid' src={signUpImg} alt="" />
          </div>
          <div className="sign-up-form col-6 gap-5 container d-flex flex-column justify-content-center align-items-center">
            <div className="head">
              <h1>Create an account</h1>
              <div>Enter your details below</div>
            </div>
            <form className=' d-flex w-50 gap-3 flex-column'>
              <input className='border-bottom p-2' type="text" placeholder='Name' />
              <input className='border-bottom p-2' type="e-mail" placeholder='Email Or Phone Number'/>
              <input className='border-bottom p-2' type="password" placeholder='Password'/>
              <Link to='/logIn' className='btn btn-danger'>Create Account</Link>
              <p>Already have account? <span><Link to='/logIn' className='active ms-2'>Log in</Link></span></p>
            </form>
          </div>
      </div>
    </>
    );
  }
  
  export default SignUp;
  