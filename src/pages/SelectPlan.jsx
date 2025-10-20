import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SelectableBox from "../components/SelectableBox";
import { useForm } from "react-hook-form";

export function SelectPlan({ onNextStep, formData = {} }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const defaultValues = {
      plan: formData.plan || "",
      billingCycle: formData.billingCycle || "monthly",
    };
    reset(defaultValues);
  }, [formData, reset]);

  useEffect(() => {
    if (!formData.name) {
      navigate("/");
    }
  }, [formData, navigate]);

  if (!formData.name) {
    return <div>Loading...</div>;
  }

  const billingCycle = watch("billingCycle");
  const selectedPlan = watch("plan");

  const handlePlanSelect = (planName) => {
    setValue("plan", planName, { shouldValidate: true });
  };

  const onSubmit = (data) => {
    let planDetails = {};
    if (data.plan === "Arcade") {
      planDetails = { monthlyPrice: 9, yearlyPrice: 90 };
    } else if (data.plan === "Advanced") {
      planDetails = { monthlyPrice: 12, yearlyPrice: 120 };
    } else if (data.plan === "Pro") {
      planDetails = { monthlyPrice: 15, yearlyPrice: 150 };
    }

    const currentPrice =
      data.billingCycle === "monthly"
        ? planDetails.monthlyPrice
        : planDetails.yearlyPrice;

    onNextStep({
      plan: data.plan,
      billingCycle: data.billingCycle,
      price: currentPrice,
    });
  };

  return (
    <div className="md:p-8">
      <h1 className="md:text-3xl text-2xl font-bold text-blue-950 text-left">
        Select your plan
      </h1>
      <p className="font-normal md:text-[17px] text-[16px] text-gray-400 mt-2 mb-9 text-left">
        You have the option of monthly or yearly billing
      </p>
      <form id="step-form" onSubmit={handleSubmit(onSubmit)}>
        {/* Plan Selection Boxes */}
        <div className="flex flex-col md:flex-row gap-5 mb-4">
          <SelectableBox
            title="Arcade"
            monthlyPrice={9}
            yearlyPrice={90}
            isSelected={selectedPlan === "Arcade"}
            onClick={() => handlePlanSelect("Arcade")}
            billingCycle={billingCycle}
          />
          <SelectableBox
            title="Advanced"
            monthlyPrice={12}
            yearlyPrice={120}
            isSelected={selectedPlan === "Advanced"}
            onClick={() => handlePlanSelect("Advanced")}
            billingCycle={billingCycle}
          />
          <SelectableBox
            title="Pro"
            monthlyPrice={15}
            yearlyPrice={150}
            isSelected={selectedPlan === "Pro"}
            onClick={() => handlePlanSelect("Pro")}
            billingCycle={billingCycle}
          />
        </div>

        {/* Hidden input to register 'plan' for validation */}
        <input
          type="hidden"
          {...register("plan", { required: "Please select a plan." })}
        />
        {/* Display Plan Selection Error Message */}
        <div className="h-6">
          {errors.plan && (
            <p className="text-red-500 text-sm text-center">
              {errors.plan.message}
            </p>
          )}
        </div>

        {/* Monthly/Yearly Toggle (as a switch) */}
        <div className="bg-gray-50 p-3 rounded-lg flex justify-center items-center gap-4 mx-auto w-[90%] sm:w-[470px]">
          <span
            className={`font-medium text-sm ${
              billingCycle === "monthly" ? "text-blue-950" : "text-gray-400"
            }`}
          >
            Monthly
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value="yearly"
              className="sr-only peer"
              {...register("billingCycle", {
                onChange: (e) => {
                  setValue(
                    "billingCycle",
                    e.target.checked ? "yearly" : "monthly"
                  );
                },
              })}
              checked={billingCycle === "yearly"}
            />
            {/* Visual representation of the switch toggle */}
            <div
              className="w-11 h-6 bg-blue-950 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full 
            peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full 
            after:h-5 after:w-5 after:transition-all duration-200"
            ></div>
          </label>
          <span
            className={`font-medium text-sm ${
              billingCycle === "yearly" ? "text-blue-950" : "text-gray-400"
            }`}
          >
            Yearly
          </span>
        </div>
      </form>
    </div>
  );
}
