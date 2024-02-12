import React, { useState, useEffect } from "react";

interface Errors {
  email: string;
}

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Errors>({ email: "" });
  const [isFormValid, setIsFormValid] = useState(false);
  const [touched, setTouched] = useState<{ email: boolean }>({ email: false });

  useEffect(() => {
    validateEmail();
  }, [email, touched]);

  const validateEmail = () => {
    let emailError = "";

    if (touched.email && email === "") {
      emailError = "Email is required";
    } else if (touched.email && !email.includes("@")) {
      emailError = "is not a valid email";
    }

    setErrors({ email: emailError });
    setIsFormValid(emailError === "");
  };

  const handleInputChange = (field: string, value: string) => {
    if (field === "email") {
      setTouched({ ...touched, email: true });
      setEmail(value);
    }
  };

  const handleSubmit = () => {
    setTouched({ ...touched, email: true });
    validateEmail();
  };

  return (
    <div className="p-10 bg-white shadow-md rounded-md">
      <div className="mb-2">
        <h2 className="text-4xl text-center font-medium text-black font-polySans leading-15">
          Create your account.
        </h2>
        <p className="text-black text-center py-4">
          Build skills for today, tomorrow, and beyond. <br></br>Education to
          future-proof your career.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-around items-center mt-4">
      <button className="bg-white p-2 hover:bg-gray-100 text-black py-2 px-4 border border-gray-400 rounded flex items-center mb-2 sm:mb-0 sm:w-auto w-full justify-center">
        <img src="/google-icon.svg" alt="Google Icon" className="h-5 w-5 mr-2" />
        <span className="text-sm">Sign up with Google</span>
      </button>

      <button className="bg-white p-2 hover:bg-gray-100 text-black py-2 px-2 border border-gray-400 rounded flex items-center sm:w-auto w-full justify-center">
        <img src="/facebook-icon.svg" alt="Facebook Icon" className="h-5 w-5 mr-2" />
        <span className="text-sm">Sign up with Facebook</span>
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
          className={`w-full px-4 p-2 py-2 border border-gray-300 rounded focus:outline-none ${
            touched.email &&
            errors.email &&
            "border-solid border-2 border-red-600 bg-sky-100"
          }`}
          placeholder="Email address"
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
        {touched.email && errors.email && (
          <div className="bg-red-100 p-2 rounded flex items-center mt-2">
            <img src="/caution-icon.svg" className="mr-2"/>
            <p className="text-black text-sm">{errors.email}</p>
          </div>
        )}
      </div>
      <p className="text-sm text-center p-4 font-polySans">
        By clicking &quot;Sign up,&quot; you agree to our{" "}
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
        className="w-full bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-600"
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignUpForm;
