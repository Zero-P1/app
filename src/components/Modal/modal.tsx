interface ModalProps {
  isModalOpen: boolean;
  onClose: () => void;
}

export function Modal({ isModalOpen, onClose }: ModalProps) {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4">
          Aproveite agora a oferta especial para limpar sua CNH!
        </h2>
        <p className="mb-4">
          Essa oferta é válida por apenas 10 minutos. 
          Para garantir o melhor preço, finalize a compra 
          diretamente pelo botão abaixo. Se precisar de ajuda, nossos assessores 
          estão disponíveis pelo WhatsApp, mas os valores podem ser maiores.
        </p>

        <p className="mb-4 text-xs">Clique no botão abaixo para aproveitar a oferta com segurança!</p>
        <button
          onClick={onClose}
          className="bg-primary w-full text-white px-4 py-2 rounded-md"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
