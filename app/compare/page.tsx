import type { Metadata } from "next";

import { DeviceComparison } from "@/components/DeviceComparison";

export const metadata: Metadata = {
  title: "Compare RealWear Devices",
  description:
    "Compare the RealWear Navigator 520, Navigator Z1, and Arc 3 assisted reality headsets side by side to find the right hands-free device for your frontline team's environment.",
  alternates: {
    canonical: "/compare"
  }
};

export default function ComparePage() {
  return <DeviceComparison />;
}
