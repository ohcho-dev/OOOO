import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";

import SWRConfigContext from "@/context/SWRConfigContext";
import { Metadata } from "next";
import RecoilRootWrapper from "@/context/RecoilContext";
import Script from "next/script";
import Head from "next/head";
// import KakaoAdfit from "@/util/KakaoAdfit";

const NotoSansKR = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "우리 가족 서약서(공동 육아 서약서):: 아이의 목소리로 쓰여진 가족의 약속",
  description:
    "아이의 목소리로 변환된 따뜻한 '공동육아 서약서'를 만들어보세요. 간단한 키워드만으로 아이의 입장에서 쓰여진 유쾌하고 따뜻한 서약서가 완성됩니다.",
  openGraph: {
    title:
      "우리 가족 서약서(공동 육아 서약서) - 아이의 목소리로 쓰여진 가족의 약속",
    description: "가족을 향한 진심을 서약서에 담아보세요!",
    url: "https://oooo-pi.vercel.app",
    images: [
      "https://oooo-pledge.s3.ap-northeast-2.amazonaws.com/image/kakao_share_image.png",
    ],
    type: "website",
    siteName: "육아응원 :: 우리 가족 서약서",
    locale: "ko_KR",
  },
  applicationName: "육아응원",
  keywords: [
    "공동육아",
    "서약서",
    "가족",
    "아이의 목소리",
    "따뜻한 메시지",
    "가족의 약속",
    "유아",
    "가족 선물",
    "육아응원",
  ],
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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body suppressHydrationWarning={true}>
        <Script
          src="https://developers.kakao.com/sdk/js/kakao.js"
          strategy="afterInteractive"
        />
        <RecoilRootWrapper>
          <SWRConfigContext>
            <div className="responsive_layout">
              <main className="overflow-hidden w-full h-[100svh]">
                {children}
              </main>
              <div id="bottom_por tal" />
            </div>
          </SWRConfigContext>
          <div id="portal" />
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
