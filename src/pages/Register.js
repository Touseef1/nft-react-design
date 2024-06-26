import React from 'react';
import '../css/style.css';
// If you decide to use the minified versions of your CSS files, you can uncomment the lines below
// import '../css/style.min.css';
// import '../css/icons.min.css';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="authentication-bg">
      <div className="container-lg">
        <div className="row justify-content-center authentication authentication-basic align-items-center h-100">
          <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-6 col-sm-8 col-12">
            <div className="my-4 d-flex justify-content-center">
              <a href="index.html">
                {/* It's better to use the require function to load images */}
                <img src='assets/images/Logo.png' alt='logo' />
              </a>
            </div>
            <div className="card custom-card">
              <div className="card-body p-5">
                <p className="h5 fw-semibold mb-2 text-center">Register</p>
                <p className="mb-4 text-muted op-7 fw-normal text-center">Please create account!</p>
                <div className="row gy-3">
                  <div className="col-xl-12">
                    <label htmlFor="signin-email" className="form-label text-default">Email</label>
                    <input type="email" className="form-control form-control-lg" id="signin-email" placeholder="Email" required />
                  </div>
                  <div className="col-xl-12">
                    <label htmlFor="signin-username" className="form-label text-default">User Name</label>
                    <input type="text" className="form-control form-control-lg" id="signin-username" placeholder="Username" required />
                  </div>
                  <div className="col-xl-12 mb-2">
                    <label htmlFor="signin-password" className="form-label text-default d-block">Password</label>
                    <div className="input-group">
                      <input type="password" className="form-control form-control-lg" id="signin-password" placeholder="Password" required />
                    </div>
                    <div className="mt-2">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="rememberPassword1" />
                        <label className="form-check-label text-muted fw-normal" htmlFor="rememberPassword1">
                          Remember password ?
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 mb-2">
                    <label htmlFor="confirm-password" className="form-label text-default d-block">Confirm Password</label>
                    <div className="input-group">
                      <input type="password" className="form-control form-control-lg" id="confirm-password" placeholder="Confirm Password" required />
                    </div>
                    <div className="mt-2">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="rememberPassword2" />
                        <label className="form-check-label text-muted fw-normal" htmlFor="rememberPassword2">
                          Remember password ?
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 d-grid mt-2">
                    <a href="quest.html" className="btn btn-lg btn-primary">Sign up</a>
                  </div>
                </div>
                <Link to="/login">
                <div className="text-center">
                  <p className="text-muted mt-3">Already have an account? <a href="Login.html" className="text-primary">Sign in</a></p>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
