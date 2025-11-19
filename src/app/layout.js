import "@/styles/globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: {
    default: "Eagle's Daily News", 
    template: "%s | Daily News"
  },

  description:
    "Stay informed with Eagle’s Daily News — your trusted source for the latest global headlines, breaking stories, and in-depth articles across politics, technology, business, and entertainment.",

  OpenGraph: {
    type: "website", 
    title: "Eagle's Daily News", 
    description: "Stay informed with Eagle’s Daily News — your trusted source for the latest global headlines, breaking stories, and in-depth articles across politics, technology, business, and entertainment.", 
    siteName: "Daily News", 
    images: [
      {
        url: "/logo.png", 
        width: 1200, 
        height: 630, 
      }
    ]
  }, 

  twitter: {
    card: "summary_large_image"
  }
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
