import React from 'react';

const SignUpForm = () => {
  return (
    <div className="p-10 bg-white shadow-md rounded-md">
      <div className="mb-8">
        <h2 className="text-5xl text-center text-black font-polySans leading-15">Create your account.</h2>
        <p className="text-black text-center py-4">
          Build skills for today, tomorrow, and beyond. <br></br>Education to future-proof your career.
        </p>
      </div>

      <div className="flex justify-around items-center">
        <button className="bg-white hover:bg-gray-100 text-black py-2 px-4 border border-gray-400 rounded flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
          </svg>
          <span className="ml-2">Sign up with Google</span>
        </button>

        <button className="bg-white hover:bg-gray-100 text-black py-2 px-2 border border-gray-400  rounded flex items-center">
          <svg width="30" height="30" viewBox="0 0 24 24">
            <g fill="none" fillRule="evenodd">
              <path fill="#1877F2" d="M24,12 C24,5.37257812 18.6274219,0 12,0 C5.37257813,0 0,5.37257812 0,12 C0,17.9895469 4.38822656,22.9539844 10.125,23.8541719 L10.125,15.46875 L7.078125,15.46875 L7.078125,12 L10.125,12 L10.125,9.35625 C10.125,6.34875 11.9165391,4.6875 14.6575547,4.6875 C15.9705,4.6875 17.34375,4.921875 17.34375,4.921875 L17.34375,7.875 L15.8305547,7.875 C14.3398828,7.875 13.875,8.80000781 13.875,9.74899219 L13.875,12 L17.203125,12 L16.6710937,15.46875 L13.875,15.46875 L13.875,23.8541719 C19.6117734,22.9539844 24,17.9895469 24,12"></path>
              <path fill="#FFF" d="M16.6710938,15.46875 L17.203125,12 L13.875,12 L13.875,9.74899219 C13.875,8.80000781 14.3398828,7.875 15.8305547,7.875 L17.34375,7.875 L17.34375,4.921875 C17.34375,4.921875 15.9705,4.6875 14.6575547,4.6875 C11.9165391,4.6875 10.125,6.34875 10.125,9.35625 L10.125,12 L7.078125,12 L7.078125,15.46875 L10.125,15.46875 L10.125,23.8541719 C10.7359453,23.9500312 11.362125,24 12,24 C12.637875,24 13.2640547,23.9500312 13.875,23.8541719 L13.875,15.46875 L16.6710938,15.46875 Z"></path>
            </g>
          </svg>
          <span className="ml-2">Sign up with Facebook</span>
        </button>
      </div>


      <div className="mb-4">
        <div className="mb-6 h-5 border-b border-gray-400 py-2 px-2 p-2 text-center">
          <label className="bg-white px-5 font-medium">or</label>
        </div>

        <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Email address" />
      </div>
      <p className='text-sm text-center p-4 font-polySans'>By clicking &quot;Sign up,&quot; you agree to our <a href="https://www.udacity.com/legal/terms-of-service" className="underline">Terms of Use</a> and our <a href="https://www.udacity.com/legal/privacy" className="underline">Privacy Policy</a>.</p>
      <button type="submit" className="w-full bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-600">Sign Up</button>


    </div>
  );
};

export default SignUpForm;
