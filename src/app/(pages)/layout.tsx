import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";

import SWRConfigContext from "@/context/SWRConfigContext";
import { Metadata } from "next";
import RecoilRootWrapper from "@/context/RecoilContext";
import Script from "next/script";
import Toast from "@/components/Toast";
// import KakaoAdfit from "@/util/KakaoAdfit";

const NotoSansKR = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Instantgram",
    template: "Instantgram | %s",
  },
  description: "Instantgram Photos",
};

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko-KR" className={NotoSansKR.className}>
      <body>
        <Script
          src="https://developers.kakao.com/sdk/js/kakao.js"
          strategy="afterInteractive"
        />
        <RecoilRootWrapper>
          <SWRConfigContext>
            <div className="responsive_layout">
              <main>{children}</main>
              <div id="bottom_por tal" />
            </div>
          </SWRConfigContext>
          <div id="portal" />
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
