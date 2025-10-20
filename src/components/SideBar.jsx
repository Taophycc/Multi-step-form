import { Step } from "./Step";

export function SideBar({ activeStep }) {
  return (
    <div
      className="relative z-10 w-full h-[170px] bg-[url('/images/bg-sidebar-mobile.svg')] bg-cover bg-no-repeat md:bg-[url('/images/bg-sidebar-desktop.svg')] 
                 md:h-[568px] md:w-[274px] md:rounded-lg flex flex-row justify-center pt-6 gap-x-1 gap-y-4 md:flex-col md:justify-start md:p-8 md:gap-y-6 items-start "
    >
      <Step number={1} title="YOUR INFO" activeStep={activeStep} />
      <Step number={2} title="SELECT PLAN" activeStep={activeStep} />
      <Step number={3} title="ADD-ONS" activeStep={activeStep} />
      <Step number={4} title="SUMMARY" activeStep={activeStep} />
    </div>
  );
}
