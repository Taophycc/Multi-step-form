import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ThankYou({ formData = {} }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!formData.plan) {
      navigate("/");
    }
  }, [formData, navigate]);

  if (!formData.plan) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8">
      <img
        src="/images/icon-thank-you.svg"
        alt="Thank You"
        className="mb-8 h-20"
      />
      <h1 className="md:text-4xl text-2xl font-bold text-blue-950">
        Thank you!
      </h1>
      <p className="font-normal text-[17px] text-gray-400 mt-4 max-w-md">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default ThankYou;
