import { useForm } from "react-hook-form";
import { useEffect } from "react";

export function PersonalInfo({ onNextStep, formData = {} }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    reset(formData);
  }, [formData, reset]);

  const onSubmit = (personalInfoData) => {
    if (onNextStep) {
      onNextStep(personalInfoData);
    }
  };

  return (
    <div className="md:p-8">
      <h1 className="md:text-3xl text-2xl font-bold text-blue-950 text-left">
        Personal info
      </h1>
      <p className="font-normal md:text-[17px] text-[16px] text-gray-400 mt-2 mb-9 text-left">
        Please provide your name, email address, phone number
      </p>

      <form
        id="step-form"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        {/* Name field */}
        <div>
          <label
            className="flex justify-between text-base text-sm text-blue-950 font-normal"
            htmlFor="name"
          >
            Name
            {errors.name && (
              <span className="font-medium text-right text-red-500 text-sm mt-1">
                {errors.name.message}
              </span>
            )}
          </label>

          <input
            id="name"
            className={`w-full p-3 border border-gray-300 rounded-lg text-base px-4 text-blue-950 placeholder-gray-400 font-normal focus:outline-none focus:border-blue-800 ${
              errors.name
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-blue-800"
            }`}
            type="text"
            placeholder="e.g. Stephen King"
            {...register("name", {
              required: "This field is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
              validate: (value) => {
                const words = value.trim().split(/\s+/);
                return (
                  words.length >= 2 ||
                  "Please enter at least a first and last name"
                );
              },
            })}
          />
        </div>

        {/* Email Field */}
        <div>
          <label
            className="flex justify-between text-base text-sm text-blue-950 font-normal"
            htmlFor="email"
          >
            Email Address
            {errors.email && (
              <span className="font-medium text-right text-red-500 text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </label>
          <input
            id="email"
            className={`w-full p-3 border border-gray-300 rounded-lg text-base px-4 text-gray-950 font-normal focus:outline-none placeholder-gray-400 focus:border-blue-800 ${
              errors.email
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-blue-800"
            }`}
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email address is not formatted correctly",
              },
            })}
          />
        </div>

        {/* Phone Number Field */}
        <div>
          <label
            className="flex justify-between text-sm text-blue-950 font-normal"
            htmlFor="phone"
          >
            Phone Number
            {errors.phone && (
              <span className="font-medium text-right text-red-500 text-sm mt-1">
                {errors.phone.message}
              </span>
            )}
          </label>
          <input
            id="phone"
            className={`w-full p-3 border border-gray-300 rounded-lg text-base px-4 text-blue-950 font-normal focus:outline-none  placeholder-gray-400 ${
              errors.phone
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-blue-800"
            }
            `}
            type="tel"
            placeholder="e.g. +1 234 567 890"
            {...register("phone", {
              required: "This field is required",
              pattern: {
                value:
                  /^\+?\d{1,3}?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
                message: "Invalid phone number format",
              },
            })}
          />
        </div>
      </form>
    </div>
  );
}
