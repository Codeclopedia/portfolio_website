"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [messageSending, setMessageSending] = useState(false);
  const [emailStatus, setEmailStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const updateFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!formData.name) {
      newErrors.name = "Name is required.";
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
      isValid = false;
    }
    if (!formData.message) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setMessageSending(true);
    setEmailStatus(""); // Clear previous status

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        console.log("reached this");
        setEmailStatus("Email sent successfully!");
        console.log("reached this 2");
        setFormData({ name: "", email: "", message: "" });
        console.log("reached this 3");
        setErrors({ name: "", email: "", message: "" }); 
        console.log("reached here");
      } else {
        setEmailStatus(result.message || "Failed to send email.");
      }
    } catch (error) {
      setEmailStatus("Failed to send email.");
    } finally {
      setMessageSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-[#05000d] flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Contact Us</h1>
        <p className="text-gray-600 text-center mb-6">
          Got a question or want to work together? We'd love to hear from you!
        </p>
        <div className="flex justify-between">
          <div className="w-full pr-10">
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={updateFormData}
                  placeholder="Your Name"
                  value={formData.name}
                  className="form-input text-black mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={updateFormData}
                  placeholder="you@example.com"
                  value={formData.email}
                  className="form-input text-black mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  onChange={updateFormData}
                  value={formData.message}
                  className="form-textarea text-black mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {messageSending ? (
                  <span>Sending...</span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
            {messageSending && (
              <div className="flex justify-center mt-4">
                <DotLottieReact
                  src="/lottie/loading.lottie"
                  autoplay
                  loop
                  className="w-12 h-12"
                />
              </div>
            )}
            {emailStatus && (
              <p className={`text-center mt-4 ${emailStatus.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
                {emailStatus}
              </p>
            )}
          </div>
          <div className="space-y-4 text-gray-600">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Address</h2>
              <p>Delhi, India</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Call Us</h2>
              <p>+91 7669486618</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Email</h2>
              <p>joshi.chetan.work@gmail.com</p>
            </div>
            <div className="flex space-x-4">
              {/* Original SVGs for icons */}
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800"
                aria-label="Twitter"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557a9.817 9.817 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.917 4.917 0 00-8.384 4.482A13.941 13.941 0 011.671 3.149a4.917 4.917 0 001.523 6.573A4.886 4.886 0 01.964 9.3v.062a4.917 4.917 0 003.946 4.827 4.902 4.902 0 01-2.212.085 4.917 4.917 0 004.588 3.415A9.865 9.865 0 010 21.543a13.933 13.933 0 007.548 2.212c9.057 0 14.01-7.514 14.01-14.02 0-.213-.005-.426-.014-.637A10.004 10.004 0 0024 4.557z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/chetan-joshi-216178250/"
                className="text-blue-600 hover:text-blue-800"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.23 0H1.77C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.77 24h20.46c.977 0 1.77-.774 1.77-1.729V1.729C24 .774 23.207 0 22.23 0zM7.12 20.452H3.453V9.039H7.12v11.413zM5.287 7.756c-1.146 0-2.075-.93-2.075-2.074S4.141 3.606 5.287 3.606a2.075 2.075 0 010 4.15zm15.165 12.696h-3.665V14.73c0-1.367-.027-3.124-1.905-3.124-1.906 0-2.198 1.49-2.198 3.02v5.825h-3.665V9.039h3.518v1.561h.05c.49-.925 1.693-1.904 3.486-1.904 3.726 0 4.414 2.452 4.414 5.64v6.116z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
