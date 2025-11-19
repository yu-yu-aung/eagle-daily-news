import AuthPageWrapper from "@/components/AuthPageWrapper";
import { Suspense } from "react";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <AuthPageWrapper />
    </Suspense>
  );
};

export default Page;
