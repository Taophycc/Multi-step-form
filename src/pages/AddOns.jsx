import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";

const addOnsOptions = [
  {
    name: "onlineService",
    title: "Online service",
    description: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    name: "largerStorage",
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    name: "customizableProfile",
    title: "Customizable Profile",
    description: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];

export function AddOns({ onNextStep, formData = {} }) {
  const navigate = useNavigate();
  const { control, handleSubmit, reset } = useForm();

  const { billingCycle } = formData;

  useEffect(() => {
    const defaultValues = {
      onlineService:
        formData.addOns?.some((a) => a.name === "Online service") || false,
      largerStorage:
        formData.addOns?.some((a) => a.name === "Larger storage") || false,
      customizableProfile:
        formData.addOns?.some((a) => a.name === "Customizable Profile") ||
        false,
    };
    reset(defaultValues);
  }, [formData, reset]);

  useEffect(() => {
    if (!formData.plan) {
      navigate("/");
    }
  }, [formData, navigate]);

  if (!formData.plan) {
    return <div>Loading...</div>;
  }

  const onSubmit = (data) => {
    const selectedAddOns = addOnsOptions
      .filter((addOn) => data[addOn.name])
      .map((addOn) => ({
        name: addOn.title,
        price:
          billingCycle === "monthly" ? addOn.monthlyPrice : addOn.yearlyPrice,
      }));
    onNextStep({ addOns: selectedAddOns });
  };
  return (
    <div className="md:p-6">
      <h1 className="md:text-3xl text-2xl font-bold text-blue-950 text-left">
        Pick add-ons
      </h1>
      <p className="font-normal md:text-[17px] text-[16px] text-gray-400 mt-2 mb-9 text-left">
        Add-ons help enhance your gaming experience
      </p>
      <form id="step-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          {addOnsOptions.map((addOns) => (
            <Controller
              key={addOns.name}
              name={addOns.name}
              control={control}
              render={({ field }) => (
                <div
                  className={`flex items-center justify-between md:p-4 p-2 border rounded-lg w-full cursor-pointer ${
                    field.value
                      ? "border-blue-800 bg-blue-50"
                      : "border-gray-300"
                  }`}
                  onClick={() => field.onChange(!field.value)}
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={field.value}
                      onChange={() => field.onChange(!field.value)}
                      className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <div className="md:ml-6 ml-4">
                      <p className="font-medium text-blue-950 md:text-[17px] text-[15px] mb-1 md:mb-2">
                        {addOns.title}
                      </p>
                      <p className="md:text-[15px] text-[13px] text-gray-400 font-light">
                        {addOns.description}
                      </p>
                    </div>
                  </div>
                  <p className="text-blue-800 text-sm font-normal">
                    +$
                    {billingCycle === "monthly"
                      ? `${addOns.monthlyPrice}/mo`
                      : `${addOns.yearlyPrice}/yr`}
                  </p>
                </div>
              )}
            />
          ))}
        </div>
      </form>
    </div>
  );
}
