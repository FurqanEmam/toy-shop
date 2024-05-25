import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    console.log("gsignin clicked");
    googleSignIn()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
    console.log("gsignin got something");
  };
  return (
    <div>
      <div className="divider divider-accent">or You Can Sign ins with</div>
      <div className="text-center mb-4">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline "
        >
          G
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
