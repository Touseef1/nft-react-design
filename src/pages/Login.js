import React from 'react';
import '../css/style.css';
// If you decide to use the minified versions of your CSS files, you can uncomment the lines below
// import '../css/style.min.css';
// import '../css/icons.min.css';
import { Link } from 'react-router-dom';

function Login() {
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
                <p className="h5 fw-semibold mb-2 text-center">Log In</p>
                <p className="mb-4 text-muted op-7 fw-normal text-center">Welcome back Admin!</p>
                <div className="row gy-3">
                  <div className="col-xl-12">
                    {/* Use htmlFor instead of for for label and input association */}
                    <label htmlFor="signin-username" className="form-label text-default">User Name</label>
                    <input type="text" className="form-control form-control-lg" id="signin-username" placeholder="user name" />
                  </div>
                  <div className="col-xl-12 mb-2">
                    <label htmlFor="signin-password" className="form-label text-default d-block">Password</label>
                    <div className="input-group">
                      <input type="password" className="form-control form-control-lg" id="signin-password" placeholder="password" />
                      <button className="btn btn-light" type="button" onClick={() => this.createPassword('signin-password', this)} id="button-addon2">
                        <svg className="icon1 d-none" style={{ width: '20px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M 3.71875 2.28125 L 2.28125 3.71875 L 8.5 9.90625 L 19.59375 21 L 21.5 22.9375 L 28.28125 29.71875 L 29.71875 28.28125 L 23.5 22.0625 C 27.734375 19.964844 30.574219 16.851563 30.75 16.65625 L 31.34375 16 L 30.75 15.34375 C 30.480469 15.042969 24.085938 8 16 8 C 14.042969 8 12.195313 8.429688 10.5 9.0625 Z M 16 10 C 18.152344 10 20.1875 10.605469 22 11.4375 C 22.644531 12.515625 23 13.734375 23 15 C 23 16.816406 22.296875 18.476563 21.15625 19.71875 L 18.3125 16.875 C 18.730469 16.363281 19 15.714844 19 15 C 19 13.34375 17.65625 12 16 12 C 15.285156 12 14.636719 12.269531 14.125 12.6875 L 12.09375 10.65625 C 13.335938 10.273438 14.636719 10 16 10 Z M 6.6875 10.90625 C 3.480469 12.878906 1.398438 15.175781 1.25 15.34375 L 0.65625 16 L 1.25 16.65625 C 1.507813 16.945313 7.429688 23.425781 15.0625 23.9375 C 15.371094 23.96875 15.683594 24 16 24 C 16.316406 24 16.628906 23.96875 16.9375 23.9375 C 17.761719 23.882813 18.566406 23.773438 19.34375 23.59375 L 17.5625 21.8125 C 17.054688 21.929688 16.539063 22 16 22 C 12.140625 22 9 18.859375 9 15 C 9 14.46875 9.070313 13.949219 9.1875 13.4375 Z M 7.25 12.9375 C 7.089844 13.613281 7 14.300781 7 15 C 7 16.738281 7.488281 18.339844 8.34375 19.71875 C 6.054688 18.40625 4.304688 16.867188 3.40625 16 C 4.152344 15.277344 5.496094 14.078125 7.25 12.9375 Z M 24.75 12.9375 C 26.503906 14.078125 27.84375 15.277344 28.59375 16 C 27.695313 16.867188 25.917969 18.4375 23.625 19.75 C 24.484375 18.371094 25 16.738281 25 15 C 25 14.300781 24.910156 13.609375 24.75 12.9375 Z"/>
                        </svg>
                        <svg className="icon2 d-block" style={{ width: '20px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 16 8 C 7.664063 8 1.25 15.34375 1.25 15.34375 L 0.65625 16 L 1.25 16.65625 C 1.25 16.65625 7.097656 23.324219 14.875 23.9375 C 15.246094 23.984375 15.617188 24 16 24 C 16.382813 24 16.753906 23.984375 17.125 23.9375 C 24.902344 23.324219 30.75 16.65625 30.75 16.65625 L 31.34375 16 L 30.75 15.34375 C 30.75 15.34375 24.335938 8 16 8 Z M 16 10 C 18.203125 10 20.234375 10.601563 22 11.40625 C 22.636719 12.460938 23 13.675781 23 15 C 23 18.613281 20.289063 21.582031 16.78125 21.96875 C 16.761719 21.972656 16.738281 21.964844 16.71875 21.96875 C 16.480469 21.980469 16.242188 22 16 22 C 15.734375 22 15.476563 21.984375 15.21875 21.96875 C 11.710938 21.582031 9 18.613281 9 15 C 9 13.695313 9.351563 12.480469 9.96875 11.4375 L 9.9375 11.4375 C 11.71875 10.617188 13.773438 10 16 10 Z M 16 12 C 14.34375 12 13 13.34375 13 15 C 13 16.65625 14.34375 18 16 18 C 17.65625 18 19 16.65625 19 15 C 19 13.34375 17.65625 12 16 12 Z M 7.25 12.9375 C 7.09375 13.609375 7 14.285156 7 15 C 7 16.753906 7.5 18.394531 8.375 19.78125 C 5.855469 18.324219 4.105469 16.585938 3.53125 16 C 4.011719 15.507813 5.351563 14.203125 7.25 12.9375 Z M 24.75 12.9375 C 26.648438 14.203125 27.988281 15.507813 28.46875 16 C 27.894531 16.585938 26.144531 18.324219 23.625 19.78125 C 24.5 18.394531 25 16.753906 25 15 C 25 14.285156 24.90625 13.601563 24.75 12.9375 Z"/></svg></button>
                    </div>
                    <div className="mt-2">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label className="form-check-label text-muted fw-normal" htmlFor="defaultCheck1">
                          Remember password?
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 d-grid mt-2">
                    <a href="quest.html" className="btn btn-lg btn-primary">Sign In</a>
                  </div>
                </div>
                <Link to="/register">
                <div className="text-center">
                  <p className="text-muted mt-3">Don't have an account? <a href="register.html" className="text-primary">Sign Up</a></p>
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

export default Login;
