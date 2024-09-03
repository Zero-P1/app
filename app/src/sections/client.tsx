export function Client() {
  return (
    <section className="py-20 px-12 h-auto flex items-center justify-center" id="client">
      <div className="max-w-7xl h-auto flex flex-col gap-16">
        <h1 className="font-semibold text-4xl text-center">Zero Pontos na Mídia</h1>

        <div className="flex flex-wrap justify-around items-center gap-4">
          <div className="flex flex-col items-center justify-center gap-4">
            <img className="w-40" src="https://www.usezapay.com.br/_next/image?url=%2Fassets%2Fimages%2Fexame.webp&w=256&q=75" alt="" />
            <p className="text-center">Empresa de parcelamento de débitos veiculares cresce 333% em 2022</p>
            <a href="#" className="text-primary font-semibold hover:underline">Leia a matéria</a>
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <img className="w-40" src="https://www.usezapay.com.br/assets/images/o-globo.svg" alt="" />
            <p className="text-center">Fintechs encontram oportunidades fora do centro financeiro do país</p>
            <a href="#" className="text-primary font-semibold hover:underline">Leia a matéria</a>
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <img className="w-40" src="https://www.usezapay.com.br/_next/image?url=%2Fassets%2Fimages%2Fmonitor-mercantil.png&w=256&q=75" alt="" />
            <p className="text-center">Zero Pontos, plataforma de liquidação de débitos veiculares</p>
            <a href="#" className="text-primary font-semibold hover:underline">Leia a matéria</a>
          </div>
        </div>
      </div>
    </section>
  )
}