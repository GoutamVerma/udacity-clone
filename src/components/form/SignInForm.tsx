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
    setIsLoading(true);

    if (isFormValid) {
      try {
        const response = await fetch("https://reqres.in/api/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to login");
        }

        const data = await response.json();

        if (data.token) {
          alert("Login successful");
        } else if (data.error) {
          alert(data.error);
        } else {
          alert("Failed to login");
        }

      } catch (error) {
        console.error("Error:", error);
        alert("User not found");
      } finally {
        setIsLoading(false);
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

      
       <div className="flex flex-col sm:flex-row justify-around items-center mt-4">
          <button className="bg-white p-2 hover:bg-gray-100 text-black py-2 px-4 border border-gray-400 rounded flex items-center mb-2 sm:mb-0 sm:w-auto w-full justify-center">
            <img src="/google-icon.svg" alt="Google Icon" className="h-5 w-5 mr-2" />
            <span className="text-sm">Sign in with Google</span>
          </button>

          <button className="bg-white p-2 hover:bg-gray-100 text-black py-2 px-2 border border-gray-400 rounded flex items-center sm:w-auto w-full justify-center">
            <img src="/facebook-icon.svg" alt="Facebook Icon" className="h-5 w-5 mr-2" />
            <span className="text-sm">Sign in with Facebook</span>
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
