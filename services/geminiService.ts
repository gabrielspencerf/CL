import { GoogleGenAI, Content, Part } from "@google/genai";

const MODEL_NAME = "gemini-2.5-flash";

export interface ChatMessage {
  role: 'user' | 'model';
  parts: Part[];
}

const SYSTEM_INSTRUCTION = `
  Atue como um Arquiteto de Vendas e Estrategista Sênior da "Creative Lane".
  Sua especialidade é escalar operações, estruturar times de vendas (SDR/Closer) e implementar tecnologia para receita.

  DIRETRIZES DE COMPORTAMENTO (CRÍTICO):
  1. NÃO dê respostas longas, palestras ou listas gigantes de dicas. Seja conciso.
  2. Adote uma postura INVESTIGATIVA (Método Socrático). O usuário muitas vezes não sabe onde está o problema.
  3. Faça perguntas curtas e cirúrgicas para entender o cenário (Métricas, Processos, Ferramentas) antes de propor qualquer coisa.
  4. Se o usuário for vago, devolva com uma pergunta provocativa sobre os números dele (CAC, LTV, Taxa de Conversão).
  5. NUNCA use frases clichês como "Qual é o seu desafio?". Reaja ao input do usuário.

  CONTEXTO DE VENDAS DA CREATIVE LANE:
  - Acreditamos em Processo + Tecnologia. Venda não é sorte, é engenharia.
  - Foco em: Previsibilidade de Receita, CRM bem estruturado, Automação de Tarefas Repetitivas.
  - O objetivo é guiar o usuário para que ELE perceba a necessidade de profissionalização.

  Seu tom: Profissional, Direto, Sênior, levemente provocativo para gerar reflexão.
`;

export const getStrategicStream = async (
  history: { role: 'user' | 'ai'; content: string }[],
  newMessage: string
) => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY is missing.");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  // Prevent context window overflow and ensure performance over long chats
  // We take the last 30 messages to maintain recent context
  let relevantHistory = history.slice(-30);

  // IMPORTANT: Gemini API requires history to start with a 'user' turn.
  // If slicing resulted in a 'model' (ai) message coming first, remove it.
  if (relevantHistory.length > 0 && relevantHistory[0].role === 'ai') {
    relevantHistory = relevantHistory.slice(1);
  }

  // Convert internal history format to Gemini format
  const formattedHistory: Content[] = relevantHistory.map(h => ({
    role: h.role === 'user' ? 'user' : 'model',
    parts: [{ text: h.content }]
  }));

  const chat = ai.chats.create({
    model: MODEL_NAME,
    history: formattedHistory,
    config: {
      temperature: 0.3, // Low temperature for more focused, professional responses
      systemInstruction: SYSTEM_INSTRUCTION,
    },
  });

  // Return the stream directly
  return await chat.sendMessageStream({ message: newMessage });
};