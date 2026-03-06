
// import { useState } from "react";

// function Login() {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <form className="bg-white p-6 md:p-8 rounded-xl shadow-md w-full max-w-md">
//         <h1 className="text-3xl font-bold text-center mb-6">Welcome login</h1>

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full border p-2  rounded mt-4 mb-2"
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full border p-2  rounded mt-4 mb-2"
//         />
//         <div className="flex justify-between mt-2 mb-3">
//           <h1 className="flex gap-2">
//             <input type="checkbox" /><label htmlFor="">Remember for 30 day</label>
//           </h1>
//           <h1 className="text-blue-600 underline">
//             Forgot password
//           </h1>
//         </div>

//         <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-4 mb-2">
//           Login
//         </button>

//         {/* Login with google and icon  */}
//         <button className=" flex gap-2 justify-center w-full bg-white-500 text-black p-2 rounded border mt-4 mb-2 ">
          // <svg
          //   xmlns="http://www.w3.org/2000/svg"
          //   width="25"
          //   height="25"
          //   viewBox="0 0 48 48"
          // >
          //   <path
          //     fill="#ffc107"
          //     d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
          //   />
          //   <path
          //     fill="#ff3d00"
          //     d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
          //   />
          //   <path
          //     fill="#4caf50"
          //     d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
          //   />
          //   <path
          //     fill="#1976d2"
          //     d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
          //   />
          // </svg>
//           Sign in with google
//         </button>
//         <div className="flex gap-2  justify-center mt-3">
//           <h1>Don'n have an account?</h1>
//           <h1 className="text-blue-600 underline">Sign up</h1>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Login;

import { useState } from "react";

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <form className="bg-white p-6 md:p-8 lg:p-10 rounded-xl shadow-md w-full max-w-md">

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">
          Welcome login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 md:p-3 rounded mt-4 mb-2"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 md:p-3 rounded mt-4 mb-2"
        />

        <div className="flex justify-between items-center mt-2 mb-3 text-sm">
          <div className="flex gap-2 items-center">
            <input type="checkbox" />
            <label>Remember for 30 day</label>
          </div>

          <h1 className="text-blue-600 underline cursor-pointer">
            Forgot password
          </h1>
        </div>

        <button className="w-full bg-blue-500 text-white p-2 md:p-3 rounded hover:bg-blue-600 mt-4 mb-2">
          Login
        </button>

        {/* Login with google and icon */}
        <button className="flex gap-2 justify-center items-center w-full p-2 md:p-3 rounded border mt-4 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 48 48"
          >
            <path
              fill="#ffc107"
              d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
            />
            <path
              fill="#ff3d00"
              d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
            />
            <path
              fill="#4caf50"
              d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
            />
            <path
              fill="#1976d2"
              d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
            />
          </svg>
          Sign in with google
        </button>

        <div className="flex gap-2 justify-center mt-3 text-sm">
          <h1>Don't have an account?</h1>
          <h1 className="text-blue-600 underline cursor-pointer">Sign up</h1>
        </div>

      </form>
    </div>
  );
}

export default Login;