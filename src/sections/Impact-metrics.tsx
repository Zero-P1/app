export function ImpactMetrics() {
  return (
    <section className="bg-primary h-auto mt-10 flex items-center justify-center px-10 py-16" id="metrics">
      <div className="max-w-7xl h-auto flex flex-col md:flex-row items-center justify-around gap-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className="font-semibold text-zinc-50 text-2xl md:text-3xl text-center">+5,5 milhões de consultas em nossos canais</h3>
          <p className="text-zinc-200 text-center">Um número que diariamente cresce, oferecendo segurança e comodidade para proprietários de veículos.</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className="font-semibold text-zinc-50 text-2xl md:text-3xl text-center">+600 mil veículos
            regularizados
          </h3>
          <p className="text-zinc-200 text-center">Com as soluções Zero Pontos, mais pessoas regularizaram seus veículos em menos tempo e com mais alívio no bolso.</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className="font-semibold text-zinc-50 text-2xl md:text-3xl text-center">Presença em todos os
            estados
          </h3>

          <p className="text-zinc-200 text-center">Somos uma empresa credenciada e possuímos a maior cobertura nacional de consultas de veículos.</p>
        </div>
      </div>
    </section>
  )
}