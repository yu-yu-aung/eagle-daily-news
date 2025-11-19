import "@/styles/globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "Eagle's Daily News",
  description:
    "Stay informed with Eagle’s Daily News — your trusted source for the latest global headlines, breaking stories, and in-depth articles across politics, technology, business, and entertainment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <PageTransition>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-center" reverseOrder={false} />
        </PageTransition>
      </body>
    </html>
  );
}
