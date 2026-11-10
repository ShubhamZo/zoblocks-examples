import { useState } from "react";
import { RecentPatientStack, type OpenChart } from "@/components/zoblocks/recent-patient-stack";

const NOW = "2026-11-10T10:20:00+05:30";

const INITIAL_CHARTS: OpenChart[] = [
  {
    id: "okonkwo",
    display: "A. Okonkwo",
    lastActiveAt: "2026-11-10T10:18:00+05:30",
  },
  {
    id: "boateng",
    display: "T. Boateng",
    lastActiveAt: "2026-11-10T10:00:00+05:30",
  },
  {
    id: "patel",
    display: "M. Patel",
  },
];

export function PatientReassertionExample() {
  const [message, setMessage] = useState("");

  const handleActivate = (chart: OpenChart, options: { reassert: boolean }) => {
    setMessage(
      options.reassert
        ? `${chart.display}: re-asserts — away long enough to matter`
        : `${chart.display}: no re-assertion needed`,
    );
  };

  return (
    <div className="w-full space-y-4">
      <RecentPatientStack
        charts={INITIAL_CHARTS}
        activeId="okonkwo"
        now={NOW}
        onActivate={handleActivate}
      />

      {message && <p className="text-sm">{message}</p>}
    </div>
  );
}
