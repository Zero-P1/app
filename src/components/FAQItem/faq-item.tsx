import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="w-full max-w-4xl bg-white shadow-md rounded-xl overflow-hidden mb-4">
      <div
        className="flex items-center justify-between px-6 py-4 bg-primary cursor-pointer hover:bg-primary-dark transition-colors duration-300"
        onClick={onClick}
      >
        <h2 className="text-lg lg:text-2xl text-white font-semibold">{question}</h2>
        {isOpen ? (
          <ChevronUp className="text-white" />
        ) : (
          <ChevronDown className="text-white" />
        )}
      </div>
      <div
        className={`transition-max-height duration-300 ease-in-out ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        } overflow-hidden bg-neutral-100`}
      >
        <div className="p-6 text-lg lg:text-xl text-neutral-700">
          {answer}
        </div>
      </div>
    </div>
  );
}
