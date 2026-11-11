import { SafetyPlan } from "@/components/zoblocks/safety-plan";

export function EmptyPlan() {
  return <SafetyPlan steps={{}} pinCrisisStep headingLevel={3} />;
}
