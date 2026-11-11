import { useState } from "react";

import {
  RecentPatientStack,
  canClose,
  chartAccent,
  type OpenChart,
} from "@/components/zoblocks/recent-patient-stack";

const NOW = "2026-11-10T19:00:00+05:30";

const INITIAL_PATIENTS: OpenChart[] = [
  {
    id: "okonkwo",
    display: "A. Okonkwo",
    reason: "Ward round",
    lastActiveAt: "2026-11-10T18:55:00+05:30",
  },
  {
    id: "boateng",
    display: "T. Boateng",
    reason: "Progress review",
    lastActiveAt: "2026-11-10T18:50:00+05:30",
    work: [
      {
        kind: "unsigned-note",
        since: "2026-11-10T18:30:00+05:30",
      },
    ],
  },
  {
    id: "marsh",
    display: "L. Marsh",
    reason: "Medication review",
    lastActiveAt: "2026-11-10T18:45:00+05:30",
    work: [
      {
        kind: "draft-order",
        since: "2026-11-10T18:35:00+05:30",
      },
    ],
  },
];

export function PatientRestrictedExample() {
  const [patients, setPatients] = useState<OpenChart[]>(INITIAL_PATIENTS);

  const handleClose = (chart: OpenChart) => {
    setPatients((current) => current.filter((patient) => patient.id !== chart.id));
  };

  return (
    <div className="w-full">
      <RecentPatientStack charts={patients} activeId="okonkwo" now={NOW} onClose={handleClose} />

      <div className="mt-5 rounded-lg border p-4">
        <div className="space-y-3">
          {INITIAL_PATIENTS.map((patient) => {
            const verdict = canClose(patient);

            return (
              <div
                key={patient.id}
                className="zb-stack__row"
                data-zb-accent={chartAccent(patient.id)}
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-medium">{patient.display}</span>

                    <span className="rounded-md bg-muted px-2 py-1 text-xs">
                      {verdict.kind.toUpperCase()}
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-muted-foreground">
                    {verdict.kind === "close"
                      ? "No outstanding work. Closes immediately."
                      : verdict.reason}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
