import { useState } from "react";
import { FAQItem } from "../components/FAQItem/faq-item";

const faqData = [
  {
    question: "É seguro pagar com a Zero Pontos?",
    answer: "O site do Zero Pontos segue todos os protocolos de segurança recomendados, possui criptografia e não armazena dados referentes ao cartão de crédito do cliente, pois possui o Certificado PCI, que permite fazer o manuseio dos dados sensíveis sem ter receio de perdas ou vazamentos.",
  },
  {
    question: "Quanto tempo leva para meus débitos saírem do sistema?",
    answer: "Após a aprovação do pedido, os débitos irão ser liquidados junto à rede bancária. Depois desse processo, solicitamos até 2 dias úteis para que os débitos sejam baixados no sistema. Vale lembrar que, alguns débitos podem quitar mais rápido e outros podem demorar um pouco mais, como no caso de dívida ativa ou de débitos que forem de órgãos diferentes.",
  },
  {
    question: "Como acessar meus comprovantes?",
    answer: "Um link de acesso aos comprovantes é enviado ao e-mail cadastrado logo após a aprovação da transação, é sempre bom conferir a caixa de spams e lixeiras, (por ser e-mail corporativo podem ser enviados para lá).",
  },
];

export function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Função para alternar o estado do FAQ
  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col items-center justify-center h-auto py-8" id="faq">
      {faqData.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </section>
  );
}
