import "@/styles/normalize.css";
import "@/styles/globals.scss";

import { Roboto } from "next/font/google";

import type { Metadata } from "next";
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Medol | Главная страница",
  description:
    "Medol - ведущая онлайн-платформа, предоставляющая комплексные медицинские услуги и консультации",
  keywords:
    "медицинские услуги онлайн, виртуальное здравоохранение, телемедицинская платформа, виртуальные консультации врачей, медицинские приемы онлайн, удаленное здравоохранение, решения в области телемедицины, поставщики виртуальных медицинских услуг, медицинские консультации онлайн",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
