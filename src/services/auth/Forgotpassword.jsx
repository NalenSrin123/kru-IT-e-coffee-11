import React from "react";
import "./ForgotPassword.css";
function ForgotPassword() {
  return (
    <div className="forgot-container">
      <div className="forgot-card">
        <h2>Forgot Password</h2>
        <p className="description">
          Enter your email address and we'll send you a link to reset your password.
        </p>

        <div className="input-group">
          <label>Email Address</label>
          <input type="email" placeholder="example@etec.com" />
        </div>

        <button className="btn-reset">Send Reset Password</button>

        <div className="back-login">
          <a href="#">Back to Login</a>
        </div>
      </div>
    </div>
  );
}
export default ForgotPassword;