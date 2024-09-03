import { useState } from "react";
import { ArrowRight } from "../assets/arrow-right";
import { Modal } from "../components/Modal/modal";

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="h-auto items-center justify-center lg-calc" id="home">
      <main className="h-full border flex flex-col items-center justify-center px-4 py-4">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between">
          <div className="max-w-lg flex flex-col pt-4 gap-2 lg:gap-6">
            <h1 className="font-semibold text-2xl lg:text-5xl text-neutral-900">
              Consulte sua oferta especial e limpe os pontos da sua CNH
            </h1>

            <p className="text-sm lg:text-lg text-neutral-500 pb-4">
              Puxar e <strong>Consultar sua placa Grátis no Zero Pontos</strong> {" "}
              nunca foi tão fácil, resolva tudo <b>sem filas, burocracia</b>
              parcelando <b>em até 12x!</b>
            </p>

            <div className="flex flex-col gap-2 border border-solid bg-mono-white border-neutral-200 rounded-3xl w-full p-6">
              <input
                type="phone"
                id="phone"
                className="h-12 w-full input-lg rounded-md border border-gray-300 bg-gray-50 px-4 mb-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Seu telefone"
                name="phone"
              />

              <input
                type="text"
                id="licensePlate"
                className="h-12 w-full input-lg rounded-md border border-gray-300 bg-gray-50 px-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary uppercase placeholder:normal-case"
                placeholder="Placa do veículo"
                name="licensePlate"
              />

              <select
                name=""
                id=""
                className="h-12 w-full input-lg rounded-md border border-gray-300 bg-gray-50 px-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="" disabled>Selecione quantos pontos tem sua CNH</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="7">7</option>
              </select>

              <button
                type="button"
                onClick={openModal}
                className="bg-primary flex gap-4 items-center justify-center btn-lg rounded-full h-12 text-white font-bold py-4 px-8 transition duration-300 ease-in-out hover:bg-opacity-90"
              >
                Consulte Agora
                <ArrowRight />
              </button>

              <div className="w-full h-full flex items-center justify-center">
                <p className="text-center text-xs text-neutral-400 w-full max-w-[350px]">
                  Ao avançar, você concorda com os nossos{" "}
                  <a
                    className="underline"
                    target="_blank"
                    rel="noreferrer"
                    href="/terms-of-use"
                  >
                    Termos de uso
                  </a>{" "}
                  e{" "}
                  <a
                    className="underline"
                    target="_blank"
                    rel="noreferrer"
                    href="/privacy-policy"
                  >
                    Política de privacidade
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Imagens de logos */}
            <div className="grid grid-cols-3 gap-16 max-w-full mx-auto">
              <div className="flex items-center justify-center w-full">
                <img
                  src="https://iguatemi.com.br/patiohigienopolis/sites/patiohigienopolis/files/logo-1360264074038.png"
                  alt="Sem Parar"
                  loading="eager"
                  className="w-20"
                  decoding="async"
                  data-nimg="1"
                />
              </div>
              <div className="flex items-center justify-center w-full">
                <img 
                  src="https://www.usezapay.com.br/_next/image?url=%2Fassets%2Fimages%2Fsite-seguro-https.png&w=128&q=75"
                  alt="Certificado RA1000" 
                  loading="lazy" 
                  width="115.04" 
                  height="40.04" 
                  decoding="async" 
                  data-nimg="1" 
                />
              </div>
              <div className="flex items-center justify-center w-full">
                <img 
                  src="https://www.usezapay.com.br/_next/image?url=%2Fassets%2Fimages%2Fra-1000.png&w=128&q=75"
                  alt="Seguro - Certificado SSL" 
                  loading="lazy" 
                  width="113.05" 
                  height="40.04" 
                  decoding="async" 
                  data-nimg="1" 
                />
              </div>
            </div>
          </div>

          {/* Imagem que vai para baixo em telas menores */}
          <div className="mt-4 pb-3 lg:mt-0 lg:ml-6">
            <img
              src="https://www.usezapay.com.br/_next/image?url=https%3A%2F%2Freassuring-nurture-26b1b2700a.media.strapiapp.com%2FAGORAEAGORA_BG_SP_6938cd570a.png&w=640&q=75"
              alt="Imagem de fundo"
              className=""
            />
          </div>
        </div>
      </main>

      {/* Modal */}
      <Modal isModalOpen={isModalOpen} onClose={closeModal} />

      {/* Botão do WhatsApp */}
      <a
        href="https://wa.me/seunumerodewhatsapp"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-[3.75rem] h-[3.75rem] z-10 rounded-full flex items-center justify-center cursor-pointer animate-pulse"
      >
        <i className="fab fa-whatsapp text-4xl"></i>
      </a>
    </section>
  );
}