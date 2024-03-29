import Nav from "@components/Nav";
import "@styles/globals.css";
import React from "react";
import { Orbitron } from "next/font/google";
import { Provider } from "@app/Provider";

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
});

export const metadata = {
  title: "Print Cost Calculator",
  description: "Calculate the cost of printing your art",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={`${orbitron.variable}`}>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Provider>
            <Nav />
            {children}
          </Provider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
