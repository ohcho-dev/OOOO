import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";

import SWRConfigContext from "@/context/SWRConfigContext";
import { Metadata } from "next";
import RecoilRootWrapper from "@/context/RecoilContext";
import Script from "next/script";

const NotoSansKR = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Instantgram",
    template: "Instantgram | %s",
  },
  description: "Instantgram Photos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={NotoSansKR.className}>
      <body>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8705192313361669"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <RecoilRootWrapper>
          <SWRConfigContext>
            <div className="responsive_layout">
              <main>{children}</main>
              <div id="bottom_portal" />
            </div>
          </SWRConfigContext>
          <div id="portal" />
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
