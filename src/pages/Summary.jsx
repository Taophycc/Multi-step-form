import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Summary({ onNextStep, formData = {} }) {
  const navigate = useNavigate();
  const { handleSubmit } = useForm({});

  useEffect(() => {
    if (!formData.plan) {
      navigate("/");
    }
  }, [formData, navigate]);

  if (!formData.plan) {
    return <div>Loading...</div>;
  }

  const { plan, addOns, price, billingCycle } = formData;

  const total =
    price + (addOns?.reduce((acc, addOn) => acc + addOn.price, 0) || 0);

  const handleGoToSelectPlan = () => {
    navigate("/select-plan");
  };

  const onSubmit = (finalData) => {
    console.log(finalData);
    onNextStep(finalData);
  };
  return (
    <div className="md:p-8 md:py-1">
      <h1 className="md:text-3xl text-2xl font-bold text-blue-950 text-left">Finishing up</h1>
      <p className="font-normal md:text-[17px] text-[16px] text-gray-400 mt-2 mb-9 text-left">
        Double-check everything looks Ok before confirming
      </p>
      <form id="step-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-gray-50 md:p-6 p-4 rounded-lg">
          <div className="flex justify-between items-center pb-4 border-b border-gray-300">
            <div>
              <p className="text-blue-950 md:text-base text-[15px] font-medium">
                {plan} ({billingCycle})
              </p>
              <button
                type="button"
                className="md:text-base text-[15px] text-gray-400 cursor-pointer font-normal hover:underline hover:text-blue-700"
                onClick={handleGoToSelectPlan}
              >
                change
              </button>
            </div>
            <p className="text-blue-950 md:text-base text-[14px] md:font-medium font-bold">
              ${price}/{billingCycle === "monthly" ? "mo" : "yr"}
            </p>
          </div>
          <div className="pt-4 space-y-2">
            {addOns?.map((addOn) => (
              <div key={addOn.name} className="flex justify-between">
                <p className="text-gray-400 md:text-base text-[14px] font-light">
                  {addOn.name}
                </p>
                <p className="text-blue-950 md:text-base text-[14px] font-normal">
                  +${addOn.price}/{billingCycle === "monthly" ? "mo" : "yr"}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center md:px-6 px-4 md:py-10 py-4">
          <p className="text-gray-400 md:text-bas text-[15px] font-normal">
            Total (per {billingCycle === "monthly" ? "month" : "year"})
          </p>
          <p className="md:text-xl text-[16px] font-bold text-blue-700">
            +${total}/{billingCycle === "monthly" ? "mo" : "yr"}
          </p>
        </div>
      </form>
    </div>
  );
}
export default Summary;
