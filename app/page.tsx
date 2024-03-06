"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Home() {
  const router = useRouter();
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    router.push(`/register?email=${formData.get("email")}`);
  }

  return (
    <main className="w-full min-h-screen h-screen flex flex-col items-center justify-start">
      <div className="text-white h-full flex items-center flex-col gap-16 pt-48">
        <div className="text-center flex flex-col max-w-[1000px]">
          <h1 className="text-6xl">
            Tired of those over complicated job finders?
          </h1>
          <h2 className="text-7xl font-bold">
            Meet <span className="text-purple-500">Dev</span>Finder
          </h2>
        </div>
        <div className="flex flex-col items-start gap-1">
          <form
            className="flex w-full items-center justify-center gap-3"
            onSubmit={handleSubmit}
          >
            <Input
              name="email"
              className="min-w-[500px] h-12 shadow-xl  placeholder:font-[500] text-purple-500"
              placeholder="Insert your e-mail to get started"
            />
            <Button className="h-full ">
              <ArrowRight size={24} />
            </Button>
          </form>
          <span className="text-sm flex gap-1">
            Already an user?
            <Link
              className="text-purple-500 hover:text-purple-600 transition-colors"
              href="/login"
            >
              Log-in
            </Link>
          </span>
        </div>
      </div>
    </main>
  );
}
