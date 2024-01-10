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
      "https://oooo-pledge.s3.ap-northeast-2.amazonaws.com/image/kakao_share_image.webp",
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
        <link rel="preload" href="/logo_white.webp" as="image" />
        <link rel="preload" href="/logo.webp" as="image" />
        <link rel="preload" href="/logo1.webp" as="image" />
        <link rel="preload" href="/logo3.webp" as="image" />
        <link rel="preload" href="/logo3_1.webp" as="image" />
        <link rel="preload" href="/logo4.webp" as="image" />

        <link rel="preload" href="/text_heart.webp" as="image" />
        <link rel="preload" href="/text_mother_father.webp" as="image" />
        <link rel="preload" href="/bg_blur1.webp" as="image" />
        <link rel="preload" href="/bg_blur2.webp" as="image" />
        <link rel="preload" href="/bg.webp" as="image" />
        <link rel="preload" href="/card_main_bg.webp" as="image" />
        <link rel="preload" href="/card1.webp" as="image" />
        <link rel="preload" href="/card2.webp" as="image" />
        <link rel="preload" href="/check_off.webp" as="image" />
        <link rel="preload" href="/check_on.webp" as="image" />
        <link rel="preload" href="/guide_1.webp" as="image" />
        <link rel="preload" href="/guide_2.webp" as="image" />
        <link rel="preload" href="/guide_3.webp" as="image" />
        <link rel="preload" href="/guide_4.webp" as="image" />
        <link rel="preload" href="/hand.webp" as="image" />
        <link rel="preload" href="/info1.webp" as="image" />
        <link rel="preload" href="/info2.webp" as="image" />
        <link rel="preload" href="/info3.webp" as="image" />
        <link rel="preload" href="/letter_bg.webp" as="image" />

        <link rel="preload" href="/paper_bg.webp" as="image" />
        <link rel="preload" href="/paper.webp" as="image" />
        <link rel="preload" href="/profile_guid.webp" as="image" />
        <link rel="preload" href="/receiver_bg.webp" as="image" />
        <link rel="preload" href="/result_bg.webp" as="image" />
        <link rel="preload" href="/share.webp" as="image" />
        <link rel="preload" href="/star.webp" as="image" />
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
