import { Input } from "@/components/ui/input";

export function SecondStep() {
  return (
    <>
      <fieldset className="flex gap-5 flex-col">
        <Input placeholder="Password" />
        <Input placeholder="Confirm your password" />
      </fieldset>
    </>
  );
}
