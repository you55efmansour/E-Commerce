import { Link } from 'react-router-dom';
import signUpImg from '../../imgs/signUp.jpg'
import { useState } from 'react';
import { Helmet } from 'react-helmet';

function LogIn() {
  const [formData , SetFormData] = useState({
  })
  function handelChange(value , name) {
    SetFormData({
      ...formData,
      [name]:value
    })
  }

  function handelSignUp () {
    let data= JSON.stringify(formData)
    localStorage.setItem("token", data)
  }
  return (
    <>
    <Helmet>
        <title>Login</title>
        <meta name="login with your e-mail" content="store"/>
      </Helmet>
      <div className="row col-12 mt-5 pt-3">
        <div className="img col-12 col-md-6 col-lg-6">
          <img className="img-fluid" src={signUpImg} alt="" />
        </div>
        <div className="sign-up-form col-12 col-md-6 col-lg-6 gap-5 container d-flex flex-column justify-content-center align-items-center">
          <div className="head">
            <h1>Log in to Exclusive</h1>
            <div>Enter your details below</div>
          </div>
          <form className=" d-flex col-9 col-lg-6 gap-3 flex-column">
            <input
              className="border-bottom p-2"
              type="e-mail"
              name='e-mail'
              onChange={(e)=>handelChange(e.target.value , e.target.name)}
              placeholder="Email Or Phone Number"
            />
            <input
              className="border-bottom p-2"
              type="password"
              name="password"
              onChange={(e)=>handelChange(e.target.value , e.target.name)}
              placeholder="Password"
            />
            <div className='d-flex justify-content-between align-items-center'>
              <Link to="/" 
              className="btn btn-danger w-fit"
              onClick={()=> handelSignUp()}
              >
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
