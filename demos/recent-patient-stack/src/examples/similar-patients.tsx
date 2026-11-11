import { RecentPatientStack, type OpenChart } from "@/components/zoblocks/recent-patient-stack";

const NOW = "2026-11-10T19:00:00+05:30";

const patients: OpenChart[] = [
  {
    id: "a",
    display: "J. Okonkwo",
    identifier: "093-441-208",
    reason: "Ward round",
    lastActiveAt: "2026-11-10T18:55:00+05:30",
  },
  {
    id: "b",
    display: "J. Okonjo",
    identifier: "093-118-774",
    reason: "Progress review",
    lastActiveAt: "2026-11-10T18:45:00+05:30",
  },
];

export function SimilarPatientsExample() {
  return (
    <div className="w-full">
      <RecentPatientStack charts={patients} activeId="a" now={NOW} />
    </div>
  );
}
