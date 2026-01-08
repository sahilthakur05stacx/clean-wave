"use client";

import React, { useState } from "react";

type SubmissionStatus = "idle" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string | null)?.trim() ?? "";
    const email = (formData.get("email") as string | null)?.trim() ?? "";
    const subject = (formData.get("subject") as string | null)?.trim() ?? "";
    const message = (formData.get("message") as string | null)?.trim() ?? "";

    if (!email || !message) {
      setStatus("error");
      setErrorMessage("Please provide both an email address and a message.");
      return;
    }

    try {
      setIsSubmitting(true);
      setStatus("idle");
      setErrorMessage(null);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        const errorText =
          typeof data?.error === "string"
            ? data.error
            : "Something went wrong. Please try again later.";
        setStatus("error");
        setErrorMessage(errorText);
        return;
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Failed to submit contact form:", error);
      setStatus("error");
      setErrorMessage(
        "Unable to send your message right now. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="relative py-20 pt-32 md:pt-40 pb-0 overflow-hidden"
      style={{
        background: "#FFD8ED",
      }}
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10 pb-20 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Contact Information */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-800 mb-6 font-poppins">
              We Love to Hear from you
            </h2>
            <p className="text-gray-700 text-lg md:text-xl mb-12 leading-relaxed font-inter">
              Get in touch with us! We're here to help you with any questions,
              feedback, or inquiries about our products and services.
            </p>

            {/* Contact Details */}
            <div className="space-y-5">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1e3a8a] rounded-full flex items-center justify-center shrink-0 shadow-md">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-gray-500 text-sm font-medium font-inter mb-1">
                    Phone
                  </p>
                  <div className="text-gray-900 text-lg font-semibold font-inter space-y-1">
                    <p>7894963892</p>
                    <p>7655010579</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1e3a8a] rounded-full flex items-center justify-center shrink-0 shadow-md">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-gray-500 text-sm font-medium font-inter mb-1">
                    Email
                  </p>
                  <p className="text-gray-900 text-lg font-semibold font-inter wrap-break-word">
                    Consumercare@glowbharat.com
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1e3a8a] rounded-full flex items-center justify-center shrink-0 shadow-md">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-gray-500 text-sm font-medium font-inter mb-1">
                    Address
                  </p>
                  <p className="text-gray-900 text-lg font-semibold font-inter">
                    Glow Bharat Pvt Ltd, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-800 mb-8 font-poppins">
              Write to us
            </h2>

            {/* Contact Form */}
            <div className="bg-[#FFFFFF91] rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
              {status === "success" ? (
                <p className="text-center text-lg font-semibold text-[#1e3a8a] font-inter">
                  Thanks for reaching out! We&apos;ll get back to you soon.
                </p>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                  {/* Name Field */}
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-gray-700 font-inter transition-all duration-300 bg-[#FFFFFF91]"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-gray-700 font-inter transition-all duration-300 bg-[#FFFFFF91]"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-gray-700 font-inter transition-all duration-300 bg-[#FFFFFF91]"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <textarea
                      placeholder="Message"
                      rows={6}
                      name="message"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 resize-none text-gray-700 font-inter transition-all duration-300 bg-[#FFFFFF91]"
                    ></textarea>
                  </div>

                  {status === "error" && errorMessage && (
                    <p className="text-sm text-red-600 font-inter">
                      {errorMessage}
                    </p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-linear-to-r from-pink-500 via-pink-600 to-purple-600 text-white font-bold py-4 px-6 rounded-lg hover:from-pink-600 hover:via-pink-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg font-poppins text-base uppercase tracking-wide"
                  >
                    {isSubmitting ? "SENDING..." : "SUBMIT"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
