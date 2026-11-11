import { SafetyPlan } from "@/components/zoblocks/safety-plan";

export function CompletePatientPlan() {
  return (
    <SafetyPlan
      steps={{
        warningSigns: {
          entries: [
            "I start feeling overwhelmed or disconnected.",
            "I stop responding to people I usually talk to.",
            "I find it difficult to manage everyday activities.",
          ],
        },

        internalCoping: {
          entries: [
            "Take a short walk outside.",
            "Listen to calming music.",
            "Practice slow breathing for a few minutes.",
          ],
        },

        distractions: {
          contacts: [
            {
              name: "Community library (sample)",
              detail: "Spend some time in a welcoming public place.",
            },
            {
              name: "Local park (sample)",
              detail: "Take a walk or sit somewhere peaceful.",
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
            {
              name: "Jordan (sample)",
              detail: "Family member",
              availability: "Available most days",
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
            {
              name: "Local crisis support service (sample)",
              availability: "Use a locally verified service.",
            },
          ],
        },

        environment: {
          entries: [
            "Ask a trusted person to help maintain a supportive environment.",
            "Arrange for someone I trust to stay with me when needed.",
            "Keep important support contacts easily accessible.",
          ],
        },
      }}
      pinCrisisStep
      headingLevel={3}
    />
  );
}
