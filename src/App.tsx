import { Header } from "./components/Header/header";
import { Client } from "./sections/client";
import { FrequentlyAskedQuestions } from "./sections/frequently-asked-questions";
import { Home } from "./sections/home";
import { ImpactMetrics } from "./sections/Impact-metrics";
import { Solution } from "./sections/solution";

export function App() {
  return (
    <main className="h-full flex flex-col relative">
      <Header />
      <Home />
      <Solution />
      <ImpactMetrics />
      <Client />
      <FrequentlyAskedQuestions />
    </main>
  );
}
