
import Link from "next/link";
import React, { useState } from "react";
import { FaSpinner, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const CallToAction = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [notificationType, setNotificationType] = useState(""); // "success", "error", or ""
  const [notification, setNotification] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Don't allow new submission while one is in progress
    if (isLoading) return;
    
    setIsLoading(true);
    setNotification("");
    setNotificationType("");
    
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setNotification(data.message || "Thank you! Check your inbox for tips.");
        setNotificationType("success");
        setEmail(""); // Clear the input field on success
      } else {
        setNotification(data.message || "Failed to subscribe. Please try again.");
        setNotificationType("error");
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      setNotification("An error occurred. Please try again later.");
      setNotificationType("error");
    } finally {
      setIsLoading(false);
      
      // Clear notification after some time
      setTimeout(() => {
        setNotification("");
        setNotificationType("");
      }, 5000);
    }
  };

  // Function to render the appropriate notification icon
  const renderNotificationIcon = () => {
    if (notificationType === "success") {
      return <FaCheckCircle className="text-green-500 mr-2" />;
    } else if (notificationType === "error") {
      return <FaExclamationCircle className="text-red-500 mr-2" />;
    }
    return null;
  }



  return (
  <section className="py-16 px-4 text-center">
    
    <div className="max-w-4xl mx-auto"> 
        {/* Newsletter Signup Form */}
        <div className="mt-2">
          <h4 className="text-xl font-semibold text-primary  dark:text-[var(--secondary)] text-center mb-4">
            Get a Free Strategy Audit!
          </h4>
          <form onSubmit={handleSubmit} className="bg-[var(--primary)] dark:shadow-[0_0_10px_#8B2E2E]  rounded-full p-4 flex flex-col sm:flex-row items-center max-w-md mx-auto">
            <div className="relative w-full sm:w-auto mb-3 sm:mb-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full bg-white border border-[var(--primary)] rounded-full py-3 pl-6 pr-32 sm:pr-40 text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                disabled={isLoading}
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className={`cursor-pointer absolute right-2 top-1/2 -translate-y-1/2  text-white bg-[#8B2E2E] dark:text-gray-100 dark:border-[#8B2E2E]  dark:hover:shadow-[0_0_10px_#8B2E2E] px-6 py-2 rounded-full font-semibold transition-all duration-300 
                ${isLoading ? 'opacity-70 cursor-not-allowed' : ' hover:shadow-md'}`}
              >
                {isLoading ? ( 
                  <span className="flex items-center">
                    <FaSpinner className="animate-spin mr-2" />
                    Sending...
                  </span>
                ) : (
                  "Get It Now"
                )}
              </button>
            </div>
          </form>
          
          {/* Notification with icon */}
          {notification && (
            <div className={`flex items-center justify-center text-center mt-4 ${
              notificationType === "success" ? "text-green-600 dark:text-green-400" : 
              notificationType === "error" ? "text-red-600 dark:text-red-400" : ""
            }`}>
              {renderNotificationIcon()}
              <p>{notification}</p>
            </div>
          )}
        </div>
      </div> 
  </section>
  
);
};

export default CallToAction;
