import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Audio lab #52",
  description: "Audio lab #52",
};

type Props = {
    children: React.ReactNode;
}

const RootLayout = ({children}: Props) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
