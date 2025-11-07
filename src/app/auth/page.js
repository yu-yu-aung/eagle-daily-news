"use client";

import LogInForm from "@/components/LogInForm";
import useAuthStore from "@/store/useAuthStore";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const mode = searchParams;
  const { isLoggedIn } = useAuthStore();

  return (
    <div>
      Register or Log In Now
      <LogInForm />
    </div>
  );
};

export default Page;
