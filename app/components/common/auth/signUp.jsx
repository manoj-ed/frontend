import React, { useState } from "react";
import { FaPhoneAlt, FaUser, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import toast from 'react-hot-toast';

const SignUp = ({ setModalVisible }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const phoneIsValid = /^\d{10}$/.test(formData.phone);

  const [step, setStep] = useState(1);

  const handleClick = () => {
    setModalVisible(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setSubmitted(true);
  };
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/30 backdrop-blur-sm z-50">
      <div className="relative bg-white shadow-2xl rounded-3xl w-[90%] max-w-[440px] px-6 py-8">
        {/* Close */}
        <button
          onClick={handleClick}
          className="absolute top-1 right-4 text-gray-500 hover:text-red-500 text-2xl leading-none"
        >
          ×
        </button>

        {!submitted ? (
          <div>
            {/* Progress Section */}
            <div className="w-full mb-4">
              {/* Bar */}
              <div className="h-2 bg-orange-100 rounded-full overflow-hidden shadow-inner">
                <div
                  className={`h-full bg-orange rounded-full transition-all duration-300 ${
                    step === 1 ? "w-1/2" : "w-full"
                  }`}
                ></div>
              </div>

              {/* Step tag */}
              <div className="flex justify-end mt-1">
                <span className="px-3 py-[2px] rounded-full bg-orange-100 text-orange-600 text-xs font-medium">
                  {step === 1 ? "Step 1 / 2" : "Final Step"}
                </span>
              </div>
            </div>

            {/* Header */}
            <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-800 leading-tight">
              Get Your Best <span className="text-orange-600">Quote</span> in
              Minutes
            </h2>

            <p className="text-center text-xs md:text-sm text-gray-500 mt-1 italic tracking-wide">
              We make finding the right price fast and simple.
            </p>

            {/* Form */}
            <form className="flex flex-col gap-5 mt-3">
              {step === 1 && (
                <>
                  {/* Location */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location<span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center bg-gray-100 rounded-md px-3 border-b-2 border-gray-300 focus-within:border-orange-500 transition-all duration-300">
                      <FaMapMarkerAlt className="text-gray-400 mr-2" />
                      <input
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="City / State"
                        className="w-full bg-gray-100 py-2 outline-none"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number<span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center bg-gray-100 rounded-md px-3 border-b-2 border-gray-300 focus-within:border-orange-500 transition-all duration-300">
                      <FaPhoneAlt className="text-gray-400 mr-2" />
                      <input
                        name="phone"
                        type="tel"
                        inputMode="numeric"
                        maxLength={10}
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone number"
                        className="w-full bg-gray-100 py-2 outline-none"
                        required
                      />
                    </div>

                    {formData.phone && !phoneIsValid && (
                      <p className="text-red-500 text-xs mt-1">
                        Please enter a valid 10-digit phone number.
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (formData.location && formData.phone) {
                        setStep(2);
                      } else {
                        toast.error("Please fill all required fields")
                        // alert("Please fill all required fields");
                      }
                    }}
                    className="bg-orange text-white w-full py-2.5 rounded-md font-semibold hover:bg-orange-600 transition"
                  >
                    Send OTP
                  </button>
                </>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <>
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name<span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center bg-gray-100 rounded-md px-3 border-b-2 border-gray-300 focus-within:border-orange-500 transition-all duration-300">
                      <FaUser className="text-gray-400 mr-2" />
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full bg-gray-100 py-2 outline-none"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-gray-400">(optional)</span>
                    </label>
                    <div className="flex items-center bg-gray-100 rounded-md px-3 border-b-2 border-gray-300 focus-within:border-orange-500 transition-all duration-300">
                      <FaEnvelope className="text-gray-400 mr-2" />
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email address"
                        className="w-full bg-gray-100 py-2 outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => setStep(1)}
                      className="text-gray-500 hover:text-orange-500 text-sm"
                    >
                      ← Back
                    </button>

                    <button
                      onClick={handleFormSubmit}
                      className="bg-orange text-white px-6 py-2.5 rounded-md font-semibold hover:bg-orange-600 transition"
                    >
                      Submit
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        ) : (
          <div className="text-center mt-4">
            <h3 className="text-lg font-semibold text-green-600 mb-3">
              Got it, {formData.name.split(" ")[0]}!
            </h3>
            <p className="text-sm text-gray-600">
              We’ve received your request and are finding you the best deal in
              your area. Our team will connect with you shortly.
            </p>
            <button
              onClick={handleClick}
              className="mt-5 bg-orange text-white px-6 py-2.5 rounded-md font-semibold hover:bg-orange-600 transition"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
