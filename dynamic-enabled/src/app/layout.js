import "./globals.css";

//-start-
import { Providers } from './providers'
import NavBarWrapper from "@/components/NavBarWrapper";
//-end-

export const metadata = {
  title: "Ka-Ching: AI Agent-Powered Multisig Wallet",
  description:
    "Wallet setup is so easy, even your grandparents could do it.\n" +
    "AI Agent-Powered Multisig Wallet + Explainable AI Fraudulent Transactions Detection + Gamified Gas Fees + Easy UI",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </head>
      <body suppressHydrationWarning={true}>
        <Providers>
          <NavBarWrapper />
          {children}
        </Providers>
      </body>
    </html>
  );
}

