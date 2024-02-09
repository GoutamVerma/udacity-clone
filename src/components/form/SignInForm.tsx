"use client";
import React, { useEffect, useState } from "react";

interface Errors {
  email: string;
  password: string;
}

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Errors>({ email: "", password: "" });
  const [touched, setTouched] = useState<{ email: boolean; password: boolean }>(
    { email: false, password: false }
  );
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSignInClicked, setIsSignInClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    validateForm();
  }, [email, password]);

  const validateForm = () => {
    let emailError = "";
    let passwordError = "";

    if (email === "") {
      emailError = "Email is required";
    } else if (!email.includes("@")) {
      emailError = "Invalid email format";
    }

    if (password === "") {
      passwordError = "Password is required";
    } else if (password.length < 8) {
      passwordError = "Password must be at least 8 characters long";
    }

    setErrors({ email: emailError, password: passwordError });
    setIsFormValid(emailError === "" && passwordError === "");
  };

  const handleInputChange = (field: string, value: string) => {
    if (field === "email") {
      setTouched({ ...touched, email: true });
      setEmail(value);
    } else if (field === "password") {
      setTouched({ ...touched, password: true });
      setPassword(value);
    }
  };

  const handleSubmit = async () => {
    validateForm();
    setIsSignInClicked(true);
    setIsLoading(true); // Start loading

    if (isFormValid) {
      try {
        const response = await fetch("https://reqres.in/api/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to login");
        }

        const data = await response.json();
        if (data.token) {
          console.log("Successfully logged in");
        } else {
          console.log("Login failed");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
        alert("Login successful");
      }
    } else {
      setIsLoading(false); 
    }
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50 flex justify-center items-center">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}

      <div className="p-10 bg-white shadow-md rounded-md">
        <div className="mb-2">
          <h2 className="text-4xl text-center font-medium text-black font-polySans leading-15">
            Sign in to your account.
          </h2>
          <p className="text-black text-center py-4">
            Build skills for today, tomorrow, and beyond. <br></br>Education to
            future-proof your career.
          </p>
        </div>
        {isSignInClicked && !isFormValid && (
          <div className="text-start p-5 font-polySans items-center bg-orange-600 rounded">
            <p className="text-white text-base">
              Must specify an email and password
            </p>
          </div>
        )}

        <div className="flex justify-around items-center mt-4">
          <button className="bg-white hover:bg-gray-100 text-black py-2 px-4 border border-gray-400 rounded flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            <span className="ml-2 text-sm">Sign in with Google</span>
          </button>

          <button className="bg-white hover:bg-gray-100 text-black py-2 px-2 border border-gray-400  rounded flex items-center">
            <svg width="30" height="30" viewBox="0 0 24 24">
              <g fill="none" fillRule="evenodd">
                <path
                  fill="#1877F2"
                  d="M24,12 C24,5.37257812 18.6274219,0 12,0 C5.37257813,0 0,5.37257812 0,12 C0,17.9895469 4.38822656,22.9539844 10.125,23.8541719 L10.125,15.46875 L7.078125,15.46875 L7.078125,12 L10.125,12 L10.125,9.35625 C10.125,6.34875 11.9165391,4.6875 14.6575547,4.6875 C15.9705,4.6875 17.34375,4.921875 17.34375,4.921875 L17.34375,7.875 L15.8305547,7.875 C14.3398828,7.875 13.875,8.80000781 13.875,9.74899219 L13.875,12 L17.203125,12 L16.6710937,15.46875 L13.875,15.46875 L13.875,23.8541719 C19.6117734,22.9539844 24,17.9895469 24,12"
                ></path>
                <path
                  fill="#FFF"
                  d="M16.6710938,15.46875 L17.203125,12 L13.875,12 L13.875,9.74899219 C13.875,8.80000781 14.3398828,7.875 15.8305547,7.875 L17.34375,7.875 L17.34375,4.921875 C17.34375,4.921875 15.9705,4.6875 14.6575547,4.6875 C11.9165391,4.6875 10.125,6.34875 10.125,9.35625 L10.125,12 L7.078125,12 L7.078125,15.46875 L10.125,15.46875 L10.125,23.8541719 C10.7359453,23.9500312 11.362125,24 12,24 C12.637875,24 13.2640547,23.9500312 13.875,23.8541719 L13.875,15.46875 L16.6710938,15.46875 Z"
                ></path>
              </g>
            </svg>
            <span className="ml-2 text-sm">Sign in with Facebook</span>
          </button>
        </div>

        <div className="mb-4">
          <div className="mb-6 h-5 border-b border-gray-400 py-2 px-2 p-2 text-center">
            <label className="bg-white px-5 font-medium">or</label>
          </div>

          <input
            type="email"
            id="email"
            name="email"
            className={`mb-3 w-full p-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-700 focus:border-2 ${
              touched.email && errors.email && "border-red-500"
            }`}
            placeholder="Email address"
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
          {touched.email && errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <input
            type="password"
            id="password"
            name="Password"
            className={`w-full p-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-700 focus:border-2  ${
              touched.password && errors.password && "border-red-500"
            }`}
            placeholder="Password"
            onChange={(e) => handleInputChange("password", e.target.value)}
          />
          {touched.password && errors.password && (
            <p className="text-red-500 py-1 text-sm">{errors.password}</p>
          )}
        </div>
        <p className="text-sm text-center p-4 font-polySans">
          By clicking &quot;Sign in,&quot; you agree to our{" "}
          <a
            href="https://www.udacity.com/legal/terms-of-service"
            className="underline"
          >
            Terms of Use
          </a>{" "}
          and our{" "}
          <a href="https://www.udacity.com/legal/privacy" className="underline">
            Privacy Policy
          </a>
          .
        </p>
        <button
          type="submit"
          onClick={handleSubmit}
          className={`w-full bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-600 ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          Sign In
        </button>
        <div>
          <a
            href="#"
            className="block py-4 text-blue-900 font-medium mb-2 text-center"
          >
            Forgot your password?
          </a>

          <div className="h-5 border-b border-gray-400 p-2 text-center">
            <label className="bg-white px-5 font-medium">or</label>
          </div>

          <a
            href="#"
            className="block py-6 text-blue-900 font-medium mb-2 text-center"
          >
            Sign in with your organization.
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
