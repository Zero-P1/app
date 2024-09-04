import { BadgeDollarSign, Globe, ShieldCheck, Sparkles } from 'lucide-react';
import { FeatureItem } from '../FeatureItem/feature-item';

export function FeatureList() {
  return (
    <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
      <FeatureItem
        Icon={Globe}
        title="Rápido"
        description="Em poucos minutos, você consulta os débitos do seu veículo, escolhe o que quer pagar e como quer pagar."
      />

      <FeatureItem
        Icon={ShieldCheck}
        title="Seguro"
        description="Empresa credenciada pelo Sem Parar, com certificado de segurança PCI e reconhecimento do Reclame Aqui e Google. Aqui a proteção de seus dados é prioridade."
      />

      <FeatureItem
        Icon={Sparkles}
        title="Fácil"
        description="Apenas inserindo a n° de registro do seu veículo, você tem acesso a todos os seus débitos."
      />

      <FeatureItem
        Icon={BadgeDollarSign}
        title="Descontos exclusivos"
        description="Zeramos os pontos da sua CNH com a menor taxa do mercado."
      />

    </div>
  );
};
