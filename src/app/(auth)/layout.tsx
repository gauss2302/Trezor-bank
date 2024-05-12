import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      SIDEBAR in here from the (auth)
      {children} comes from the layout
    </main>
  );
}
