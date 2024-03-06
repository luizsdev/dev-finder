import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "./label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="flex w-full items-start gap-1 flex-col">
        {props.label && (
          <Label className="text-white" htmlFor={props.name}>
            {props.label}
          </Label>
        )}
        <input
          type={type}
          className={cn(
            "flex h-10  bg-zinc-700 placeholder:text-white text-white  w-full rounded-md border border-purple-500 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
