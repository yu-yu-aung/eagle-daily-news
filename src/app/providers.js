"use client";
const { QueryClient, QueryClientProvider } = require("@tanstack/react-query");

 

const queryClient = new QueryClient(); 

export default function Providers({children}) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}