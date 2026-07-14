import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gangwon Beauty Collective | K-BEAUTY EXPO KOREA 2026",
  description: "강원특별자치도가 선정한 떠오르는 뷰티기업 6개사를 K-BEAUTY EXPO KOREA 2026 공동관에서 만나보세요.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
