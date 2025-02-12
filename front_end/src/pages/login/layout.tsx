import React from "react";
import "./layout.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import Image from "next/image";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="wrapper">
      <div className="logo-container">
        <Image
          src="/tinoicon.png"
          alt="TruckIn-N-Out Logo"
          className="logo-image"
          width={45}
          height={45}
        />
        <span className="logo-text">TruckIn-N-Out</span>
      </div>

      <form action="">
        <h1>Hello,</h1>
        <h1>Welcome Back!</h1>
        <p>Welcome back to TruckIn-N-Out, Happy Trucking!</p>

        <div className="input-box">
          <input type="text" placeholder="Username" />
          <FaUser className="icon" />
        </div>

        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>

        <button type="submit">Login</button>

        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
}
