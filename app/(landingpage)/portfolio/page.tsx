import Portfolio from "@/components/Portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yayan Faturrohman - Portfolio",
};

export default function PortfolioPage() {
  return (
    <>
      <Portfolio />
    </>
  );
}
