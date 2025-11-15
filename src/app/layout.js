import "@/styles/globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "Eagle's Daily News",
  description:
    "Stay informed with Eagle’s Daily News — your trusted source for the latest global headlines, breaking stories, and in-depth articles across politics, technology, business, and entertainment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
