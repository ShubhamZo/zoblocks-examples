import { useState } from "react";
import { RecentPatientStack, type OpenChart } from "@/components/zoblocks/recent-patient-stack";

const NOW = "2026-11-10T19:00:00+05:30";

const INITIAL_CHARTS: OpenChart[] = [
  {
    id: "okonkwo",
    display: "A. Okonkwo",
    reason: "Ward round",
    lastActiveAt: "2026-11-10T18:55:00+05:30",
  },
  {
    id: "marsh",
    display: "L. Marsh",
    reason: "Progress review",
    lastActiveAt: "2026-11-10T18:45:00+05:30",
  },
  {
    id: "patient-3",
    display: "M. Patel",
    reason: "Medication review",
    lastActiveAt: "2026-11-10T18:35:00+05:30",
  },
  {
    id: "patient-4",
    display: "R. Thomas",
    reason: "Discharge planning",
    lastActiveAt: "2026-11-10T18:25:00+05:30",
  },
];

export function PatientRoutineExample() {
  const [charts, setCharts] = useState<OpenChart[]>(INITIAL_CHARTS);

  const handleActivate = (chart: OpenChart) => {
    setCharts((current) =>
      current.map((item) => (item.id === chart.id ? { ...item, lastActiveAt: NOW } : item)),
    );
  };

  return (
    <div className="w-full">
      <RecentPatientStack
        charts={charts}
        activeId="okonkwo"
        now={NOW}
        onActivate={handleActivate}
      />
    </div>
  );
}
