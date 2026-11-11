"use client";

import { ClinicianEditing } from "./components/examples/clinician-editing";
import { CompletePatientPlan } from "./components/examples/complete-patient-plan";
import { EmptyPlan } from "./components/examples/empty-plan";
import { UnfinishedPlan } from "./components/examples/unfinished-plan";

export default function App() {
  return (
    <main className="min-h-screen p-6">
      <div className="mx-auto w-full max-w-4xl space-y-6">
        {/* Example 1: Complete Patient Plan */}
        <section className="flex w-full items-center justify-center p-6">
          <CompletePatientPlan />
        </section>
      </div>

      {/* Example 2: Unfinished Plan */}
      <section className="flex w-full items-center justify-center p-6">
        <UnfinishedPlan />
      </section>

      {/* Example 3: Empty Plan */}
      <section className="flex w-full items-center justify-center p-6">
        <EmptyPlan />
      </section>

      {/* Example 4: Clinician Editing View */}
      <section className="flex w-full items-center justify-center p-6">
        <ClinicianEditing />
      </section>
    </main>
  );
}
