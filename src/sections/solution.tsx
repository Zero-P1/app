import { FeatureList } from "../components/FeatureList/feature-list";

export function Solution() {
  return (
    <section className="bg-mono-white h-auto w-full flex items-center justify-center px-8 py-8 lg:py-10 lg:px-10">
      <div className="w-full max-w-screen-xl flex flex-col items-center gap-2 lg:gap-4">
        <h2 className="font-semibold text-2xl lg:text-4xl text-neutral-900 title">
          Facilitamos a vida dos proprietários de veículos
        </h2>

        <p className="text-sm md:text-lg text-center text-neutral-500 max-w-[800px] mx-auto">
          Somos a solução para você se livrar das multas, além de pagar IPVA e licenciamento, garantindo aquele alívio não só no seu tempo, mas também no seu bolso.
        </p>

        <FeatureList />
      </div>
    </section>
  );
}