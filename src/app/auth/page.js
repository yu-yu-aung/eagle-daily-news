"use client";

import AuthForm from "@/components/AuthForm";
import Header from "@/components/Header";
import useAuthStore from "@/store/useAuthStore";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") || "login";

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <AuthForm mode={mode} />
      </div>
    </>
  );
};

export default Page;
