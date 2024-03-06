"use client";
import { FirstStep } from "@/components/register/steps/FirstStep";
import { SecondStep } from "@/components/register/steps/SecondStep";
import { Button } from "@/components/ui/button";
import { Stepper } from "@/components/ui/stepper";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Register() {
  const [step, setStep] = useState("first");
  return (
    <main className="w-full min-h-screen h-screen flex flex-col items-center justify-center">
      <section className="flex flex-col gap-4">
        {step === "first" ? (
          <p className="text-white text-4xl">
            Let{"'"}s get you{" "}
            <span className="text-purple-500 font-semibold">registered</span>
          </p>
        ) : (
          <p className="text-white text-4xl">
            Almost{" "}
            <span className="text-purple-500 font-semibold">there...</span>
          </p>
        )}

        <form className="flex flex-col gap-5 bg-zinc-700 rounded shadow-2xl shadow-purple-800/60 p-6  min-w-[500px] min-h-[356px]">
          <Stepper step={step} />
          <fieldset className="flex flex-col gap-3">
            {step === "first" ? <FirstStep /> : <SecondStep />}
            <Button
              className="flex gap-1 items-center justify-center"
              onClick={(e) => {
                e.preventDefault();
                setStep("second");
              }}
            >
              {step === "first" ? "Next Step" : "Finish "}
              <ArrowRight size={20} />
            </Button>
          </fieldset>
        </form>
      </section>
    </main>
  );
}
