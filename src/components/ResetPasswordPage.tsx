"use client";

import type React from "react";
import { useState } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

// the possible steps in the password reset flow
type ResetStep = "requestReset" | "verifyOTP" | "resetPassword";

export default function ResetPasswordPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<ResetStep>("requestReset");

  
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  
  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value[0];
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

  
    if (value !== "" && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate email
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Please enter a valid email address");
      return;
    }

    // In a real app, send API request to send OTP to the email
    console.log("Sending OTP to:", email);

    setCurrentStep("verifyOTP");
  };

  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (otp.some((digit) => digit === "")) {
      setError("Please enter the complete verification code");
      return;
    }

    console.log("Verifying OTP:", otp.join(""));

    setCurrentStep("resetPassword");
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    console.log("Resetting password for:", email);

    navigate("/login");
  };

  const goBack = () => {
    if (currentStep === "verifyOTP") {
      setCurrentStep("requestReset");
    } else if (currentStep === "resetPassword") {
      setCurrentStep("verifyOTP");
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case "requestReset":
        return (
          <>
            <h1 className="mb-2 text-center text-3xl font-bold text-white">
              Send OTP
            </h1>
            <p className="mb-8 text-center text-gray-400">
              Enter your email to receive a verification code
            </p>

            <form onSubmit={handleSendOTP} className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-700 bg-transparent px-4 py-3 text-white placeholder-gray-500 focus:border-purple-600 focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-[#3C005A] to-[#800080] py-3 font-medium text-white transition-colors cursor-pointer"
              >
                Send code
              </button>
            </form>
          </>
        );

      case "verifyOTP":
        return (
          <>
            <button
              onClick={goBack}
              className="absolute top-8 left-8 text-gray-400 hover:text-white"
              aria-label="Go back"
            >
              <ArrowLeft size={24} />
            </button>

            <h1 className="mb-2 text-center text-3xl font-bold text-white">
              Verify OTP
            </h1>
            <p className="mb-8 text-center text-gray-400">
              Enter the verification code sent to {email}
            </p>

            <form onSubmit={handleVerifyOTP} className="space-y-4">
              <div className="flex justify-between gap-2 mb-4">
                {[0, 1, 2, 3].map((index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={otp[index]}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    className="w-16 h-14 text-center text-xl rounded-lg border border-gray-700 bg-transparent text-white focus:border-purple-600 focus:outline-none"
                    required
                  />
                ))}
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-[#3C005A] to-[#800080] py-3 font-medium text-white transition-colors cursor-pointer"
              >
                Verify
              </button>

              <p className="mt-4 text-center text-sm text-gray-400">
                Didn't get a code?{" "}
                <button
                  type="button"
                  onClick={() => setCurrentStep("requestReset")}
                  className="text-white hover:underline"
                >
                  Click to resend
                </button>
              </p>
            </form>
          </>
        );

      case "resetPassword":
        return (
          <>
            <button
              onClick={goBack}
              className="absolute top-8 left-8 text-gray-400 hover:text-white"
              aria-label="Go back"
            >
              <ArrowLeft size={24} />
            </button>

            <h1 className="mb-2 text-center text-3xl font-bold text-white">
              Reset Password
            </h1>
            <p className="mb-8 text-center text-gray-400">
              Create a new password for your account
            </p>

            <form onSubmit={handleResetPassword} className="space-y-4">
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  placeholder="New password"
                  className="w-full rounded-lg border border-gray-700 bg-transparent px-4 py-3 text-white placeholder-gray-500 focus:border-purple-600 focus:outline-none"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  className="w-full rounded-lg border border-gray-700 bg-transparent px-4 py-3 text-white placeholder-gray-500 focus:border-purple-600 focus:outline-none"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-[#3C005A] to-[#800080] py-3 font-medium text-white transition-colors cursor-pointer"
              >
                Reset password
              </button>
            </form>
          </>
        );
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-adam-black-50 bg-[url('/src/assets/grid.svg')] bg-cover bg-center">
      <div className="relative w-full max-w-md px-4">
        <div className="mb-8 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-800/50 p-4">
            <div className="h-10 w-10 rounded-full bg-gray-600"></div>
          </div>
        </div>

        {renderCurrentStep()}
      </div>
    </div>
  );
}
