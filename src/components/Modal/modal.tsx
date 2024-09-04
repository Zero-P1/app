interface ModalProps {
  isModalOpen: boolean;
  onClose: () => void;
}

export function Modal({ isModalOpen, onClose }: ModalProps) {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4">Consulta em andamento</h2>
        <p className="mb-4">Estamos processando a sua consulta. Por favor, aguarde um momento.</p>
        <button
          onClick={onClose}
          className="bg-primary text-white px-4 py-2 rounded-md"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
