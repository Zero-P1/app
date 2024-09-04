import { BadgeDollarSign, CreditCard, FileText, Globe, ShieldCheck, Sparkles } from 'lucide-react';
import { FeatureItem } from '../FeatureItem/feature-item';

export function FeatureList() {
  return (
    <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
      <FeatureItem
        Icon={BadgeDollarSign}
        title="Cota única IPVA ou Licenciamento"
        description="Pague agora cota única do IPVA ou Licenciamento SP sem filas e burocracias no Detran SP."
      />

      <FeatureItem
        Icon={CreditCard}
        title="IPVA e Licenciamento SP Parcelado"
        description="Sem grana para pagar seu IPVA ou Licenciamento SP? Parcele tudo em até 12x agora mesmo e fique com seu veículo em dia com os débitos veiculares do Detran SP."
      />

      <FeatureItem
        Icon={FileText}
        title="2ª via IPVA e Licenciamento SP"
        description="Precisa puxar a 2ª via do IPVA ou licenciamento SP? Faça uma consulta de graça no Detran SP agora e veja condições especiais de pagamento."
      />

      <FeatureItem
        Icon={Globe}
        title="Rápido"
        description="Em poucos minutos, você consulta os débitos do seu veículo, escolhe o que quer pagar e como quer pagar."
      />

      <FeatureItem
        Icon={ShieldCheck}
        title="Seguro"
        description="Empresa credenciada ao Detran-SP, com certificado de segurança PCI e reconhecimento do Reclame Aqui e Google. Aqui a proteção de seus dados é prioridade."
      />

      <FeatureItem
        Icon={Sparkles}
        title="Fácil"
        description="Apenas inserindo a placa do seu veículo, você tem acesso a todos os seus débitos."
      />

    </div>
  );
};
