import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { METRICS_DATA } from '../constants';
import { TrendingUp, Target, BarChart2, ChevronRight } from 'lucide-react';

const MethodologyChart: React.FC = () => {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    // Check initial theme
    setIsDark(document.documentElement.classList.contains('dark'));

    // Observer for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDark(document.documentElement.classList.contains('dark'));
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  // Colors based on theme
  const axisColor = isDark ? '#A1A1AA' : '#52525B'; // Zinc-400 : Zinc-600
  const gridColor = isDark ? '#27272A' : '#E4E4E7'; // Zinc-800 : Zinc-200
  const tooltipBg = isDark ? '#18181B' : '#FFFFFF'; // Zinc-900 : White
  const tooltipBorder = isDark ? '#27272A' : '#E4E4E7'; // Zinc-800 : Zinc-200
  const tooltipText = isDark ? '#FAFAFA' : '#09090B'; // Zinc-50 : Zinc-950

  return (
    <section id="methodology" className="py-24 md:py-32 bg-brand-surface border-t border-brand-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1 h-4 bg-brand-neon"></span>
              <span className="text-brand-neon font-bold text-xs tracking-widest uppercase">Método Creative Lane</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-6 tracking-tight">Gestão Baseada em Dados</h2>

            <p className="text-brand-muted mb-10 leading-relaxed text-lg font-light">
              Na Creative Lane, subjetividade é risco. Implementamos uma cultura de <strong>Data-Driven Decision Making</strong>.
              Transformamos intuição em algoritmos e opiniões em dashboards de alta fidelidade.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4 items-start group">
                <div className="mt-1 p-3 bg-brand-dark border border-brand-border rounded-lg text-brand-muted group-hover:text-brand-neon group-hover:border-brand-neon transition-all duration-300 shrink-0">
                  <Target size={20} />
                </div>
                <div>
                  <h4 className="text-brand-text font-bold text-base mb-1 flex items-center gap-2">
                    Metodologia OKR & KPI
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-brand-neon" />
                  </h4>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    Definição clara de <em>Objectives and Key Results</em>. O que não é medido, não é gerenciado.
                    Estabelecemos indicadores de performance que refletem a saúde real do caixa.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="mt-1 p-3 bg-brand-dark border border-brand-border rounded-lg text-brand-muted group-hover:text-brand-neon group-hover:border-brand-neon transition-all duration-300 shrink-0">
                  <BarChart2 size={20} />
                </div>
                <div>
                  <h4 className="text-brand-text font-bold text-base mb-1 flex items-center gap-2">
                    Predictive Analytics
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-brand-neon" />
                  </h4>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    Não olhamos apenas para o retrovisor. Utilizamos modelagem de dados para prever cenários de expansão e mitigar riscos operacionais antes que aconteçam.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="mt-1 p-3 bg-brand-dark border border-brand-border rounded-lg text-brand-muted group-hover:text-brand-neon group-hover:border-brand-neon transition-all duration-300 shrink-0">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h4 className="text-brand-text font-bold text-base mb-1 flex items-center gap-2">
                    ROI & Unit Economics
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-brand-neon" />
                  </h4>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    Foco obsessivo em LTV (Lifetime Value) e CAC (Custo de Aquisição). Sua operação precisa parar de pé com margem saudável desde o primeiro dia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-neon to-brand-text opacity-10 blur-xl rounded-2xl group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="h-[500px] w-full bg-white dark:bg-brand-dark rounded-2xl border border-gray-200 dark:border-brand-border p-8 relative overflow-hidden shadow-2xl flex flex-col transition-colors duration-300">
              {/* Header do Gráfico */}
              <div className="flex justify-between items-start mb-8 z-10">
                <div>
                  <span className="text-gray-900 dark:text-brand-text font-bold text-xl block">Monitoramento de KPIs</span>
                  <p className="text-xs text-gray-500 dark:text-brand-muted mt-1">Eficiência Operacional vs. Crescimento (YoY)</p>
                </div>
                <div className="flex gap-3">
                  <span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50 animate-pulse"></span>
                </div>
              </div>

              <div className="flex-1 w-full relative z-10">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={METRICS_DATA}
                    margin={{
                      top: 10,
                      right: 30,
                      left: -20,
                      bottom: 20,
                    }}
                  >
                    <defs>
                      <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="rgb(var(--color-brand-neon))" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="rgb(var(--color-brand-neon))" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
                    <XAxis
                      dataKey="name"
                      stroke={axisColor}
                      tick={{ fill: axisColor, fontSize: 11, fontFamily: 'Inter', fontWeight: 500 }}
                      axisLine={false}
                      tickLine={false}
                      dy={15}
                    />
                    <YAxis
                      stroke={axisColor}
                      tick={{ fill: axisColor, fontSize: 11, fontFamily: 'Inter', fontWeight: 500 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: tooltipBg,
                        border: `1px solid ${tooltipBorder}`,
                        borderRadius: '8px',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)'
                      }}
                      itemStyle={{ fontFamily: 'Inter', fontSize: '12px', color: tooltipText, fontWeight: 'bold' }}
                      cursor={{ stroke: 'rgba(var(--color-brand-neon), 1)', strokeWidth: 1, strokeDasharray: '4 4' }}
                    />
                    <Area
                      type="monotone"
                      dataKey="growth"
                      stroke="rgba(var(--color-brand-neon), 1)"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorGrowth)"
                    />
                    <Area
                      type="monotone"
                      dataKey="efficiency"
                      stroke="rgba(var(--color-brand-muted), 0.5)"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      fillOpacity={0}
                      fill="transparent"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Legend */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-brand-border/50 flex justify-center gap-8 text-[10px] font-medium text-gray-600 dark:text-brand-muted uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 dark:bg-brand-neon rounded-full"></span>
                  OKRs Atingidos
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-400 dark:bg-brand-border rounded-full"></span>
                  Baseline Operacional
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MethodologyChart;