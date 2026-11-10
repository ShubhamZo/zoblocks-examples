import { useState } from "react";
import { RecentPatientStack, type OpenChart } from "@/components/zoblocks/recent-patient-stack";
// import "@/styles/zoblocks-tokens.css";
// import "@/styles/zoblocks-workspace.css";
import { PatientRoutineExample } from "./examples/patient-routine";
import { SimilarPatientsExample } from "./examples/similar-patients";
import { PatientRestrictedExample } from "./examples/patient-restricted";
import { PatientReassertionExample } from "./examples/patient-reassertion";
const NOW = "2026-10-06T18:10:00+05:30";
const INITIAL_CHARTS: OpenChart[] = [
  {
    id: "marsh",
    display: "L. Marsh",
    photo: "https://api.dicebear.com/10.x/lorelei/svg?seed=L-Marsh",
    lastActiveAt: "2026-10-06T17:55:00+05:30",
    work: [
      {
        kind: "unsigned-note",
        since: "2026-10-03T18:10:00+05:30",
      },
    ],
  },
  {
    id: "okonkwo",
    display: "A. Okonkwo",
    photo: "https://api.dicebear.com/10.x/lorelei/svg?seed=A-Okonkwo",
    reason: "Ward round",
    lastActiveAt: "2026-10-06T18:05:00+05:30",
  },
  {
    id: "patient-3",
    display: "M. Patel",
    photo: "https://api.dicebear.com/10.x/lorelei/svg?seed=M-Patel",
    lastActiveAt: "2026-10-06T17:40:00+05:30",
  },
  {
    id: "patient-4",
    display: "R. Thomas",
    lastActiveAt: "2026-10-06T17:20:00+05:30",
  },
];
function App() {
  const [charts, setCharts] = useState<OpenChart[]>(INITIAL_CHARTS);
  const handleActivate = (chart: OpenChart) => {
    setCharts((current) =>
      current.map((item) =>
        item.id === chart.id
          ? {
              ...item,
              lastActiveAt: NOW,
            }
          : item,
      ),
    );
  };
  return (
    <main className="min-h-screen w-full flex flex-col items-center gap-8 p-6">
      {/* Original Recent Patient Stack */}
      <section className="w-full max-w-3xl flex items-center justify-center p-6">
        <RecentPatientStack charts={charts} now={NOW} onActivate={handleActivate} />
      </section>
      {/* Example 1: Patient Routine */}
      <section className="w-full max-w-3xl flex items-center justify-center p-6">
        <div className="w-full">
          <PatientRoutineExample />
        </div>
      </section>
      {/* Example 2: Similar Patients */}
      <section className="w-full max-w-3xl flex items-center justify-center p-6">
        <div className="w-full">
          <SimilarPatientsExample />
        </div>
      </section>
      {/* Example 3: Closing is graded, not binary */}
      <section className="w-full max-w-3xl flex items-center justify-center p-6">
        <div className="w-full">
          <PatientRestrictedExample />
        </div>
      </section>
      {/* Example 4: Coming back re-asserts who the chart belongs to */}
      <section className="w-full max-w-3xl flex items-center justify-center p-6">
        <div className="w-full">
          <PatientReassertionExample />
        </div>
      </section>
    </main>
  );
}
export default App;
