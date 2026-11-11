import { SafetyPlan } from "@/components/zoblocks/safety-plan";

export function ClinicianEditing() {
  return (
    <SafetyPlan
      steps={{
        warningSigns: {
          entries: [
            "I begin withdrawing from conversations.",
            "I feel increasingly overwhelmed.",
            "I have difficulty concentrating on daily activities.",
          ],
        },

        internalCoping: {
          entries: ["Take a short walk.", "Listen to calming music.", "Practice slow breathing."],
        },

        distractions: {
          contacts: [
            {
              name: "Community library (sample)",
              detail: "Spend some time in a welcoming public place.",
            },
          ],
        },

        supportContacts: {
          contacts: [
            {
              name: "Alex (sample)",
              detail: "Trusted friend",
              availability: "Usually available in the evening",
            },
          ],
        },

        professionals: {
          contacts: [
            {
              name: "Treating clinician (sample)",
              detail: "Primary care contact",
              availability: "Use contact details provided by the care team.",
            },
          ],
        },

        environment: {
          entries: [
            "Identify trusted people who can provide support.",
            "Keep important support contacts easily accessible.",
          ],
        },
      }}
      pinCrisisStep={false}
      headingLevel={3}
    />
  );
}
