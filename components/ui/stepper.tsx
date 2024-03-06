type StepperProps = {
  step: string;
};
const steps = ["first", "second"];
export function Stepper({ step = "first" }: StepperProps) {
  return (
    <>
      <div className="px-2 justify-center gap-20 flex relative">
        <span className=" z-10 h-8 w-8 bg-purple-500  rounded-full border border-purple-600" />
        <hr
          className={`h-[2px] top-[15px] border-[1px] absolute z-0 w-[85px] ${
            step === "first" ? "border-purple-500/50" : "border-purple-500"
          }`}
        />
        <span
          className={`z-10 h-8 w-8 rounded-full  ${
            step === "first"
              ? "bg-zinc-700 border-[0.1px] border-purple-500/50"
              : "bg-purple-500"
          }`}
        />
      </div>
    </>
  );
}
