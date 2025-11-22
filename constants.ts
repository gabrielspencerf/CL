import { 
  BrainCircuit, 
  TrendingUp, 
  Settings, 
  ShieldCheck, 
  BarChart3, 
  Network,
  Globe,
  Target
} from "lucide-react";
import { ServiceItem, NavItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Visão", id: "hero" },
  { label: "Expertise", id: "services" },
  { label: "Consultor IA", id: "advisor" },
  { label: "Método", id: "methodology" },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Arquitetura de Vendas",
    description: "Estruturação completa do ecossistema comercial. Unimos processos humanos com tecnologia para previsibilidade de receita.",
    icon: Target,
    category: "Strategy"
  },
  {
    title: "Inteligência de Dados",
    description: "Transformamos números soltos em diretrizes claras. Gestão baseada em fatos, eliminando o 'achismo' da operação.",
    icon: BarChart3,
    category: "Strategy"
  },
  {
    title: "Automação de Processos",
    description: "Tecnologia aplicada para reduzir custo operacional. Deixamos sua equipe focada no estratégico enquanto a IA cuida do repetitivo.",
    icon: BrainCircuit,
    category: "Tech"
  },
  {
    title: "Assessoria de Expansão",
    description: "Acompanhamento contínuo para escalar o negócio. Identificamos novas avenidas de crescimento e corrigimos a rota em tempo real.",
    icon: TrendingUp,
    category: "Growth"
  },
  {
    title: "Infraestrutura Digital",
    description: "Implementação de CRMs, ERPs e integrações complexas. Garantimos que suas ferramentas conversem entre si sem falhas.",
    icon: Network,
    category: "Tech"
  },
  {
    title: "Eficiência Operacional",
    description: "Mapeamento e otimização de fluxos de trabalho. O objetivo é fazer mais, com menos recursos e maior qualidade.",
    icon: Settings,
    category: "Strategy"
  }
];

export const METRICS_DATA = [
  { name: 'Atual', efficiency: 30, growth: 20, amt: 2400 },
  { name: 'Diagnóstico', efficiency: 50, growth: 35, amt: 2210 },
  { name: 'Implementação', efficiency: 75, growth: 60, amt: 2290 },
  { name: 'Expansão', efficiency: 90, growth: 100, amt: 2000 },
];