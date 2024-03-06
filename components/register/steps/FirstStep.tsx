import { ComboBox } from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import { MultiSelect } from "@/components/ui/multiselect";
import { useSearchParams } from "next/navigation";

export function FirstStep() {
  const params = useSearchParams();
  return (
    <>
      <Input placeholder="E-mail" defaultValue={params.get("email") || ""} />
      <fieldset className="flex gap-3">
        <Input placeholder="First name" />
        <Input placeholder="Last name" />
      </fieldset>
      <ComboBox
        keyword="Area of interest"
        options={[
          { label: "Frontend", value: "frontend" },
          { label: "Backend", value: "backend" },
          { label: "Full-stack", value: "fullstack" },
        ]}
      />
      <MultiSelect />
    </>
  );
}
