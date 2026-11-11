import { SafetyPlan } from "@/components/zoblocks/safety-plan";

export function UnfinishedPlan() {
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
          entries: ["Take a short walk.", "Listen to calming music."],
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
      }}
      pinCrisisStep
      headingLevel={3}
    />
  );
}
