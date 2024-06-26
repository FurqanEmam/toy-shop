import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/images/login.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(event);

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    console.log("sign in credential: ", email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log("user photourl", user.photoURL);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError("Error: " + error.message); // Set the error message
      });
  };
  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <div className="w-1/2 lg:mr-12">
              <img src={login} alt="" />
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <h1 className="text-5xl text-center font-bold">Login!</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                  <div>
                    {/* Display error message */}
                    {error ? (
                      <div className="text-red-500 text-center">
                        Your email or password is wrong. Please login with valid
                        credentials.
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <p className="my-4 text-center">
                New to PlayHive{" "}
                <Link to="/signup" className="text-orange-600 font-bold">
                  Sign Up
                </Link>
              </p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
