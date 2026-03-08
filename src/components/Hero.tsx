import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, CircuitBoard, Cpu, Radar, Sparkles } from 'lucide-react';

const stats = [
  { value: '140+', label: 'релизов и внедрений в год' },
  { value: '37', label: 'инженеров software/electrosoft' },
  { value: '99.95%', label: 'средняя доступность решений' },
];

const realtime = [
  { name: 'Firmware pipeline', value: '97%', bar: 97 },
  { name: 'Cloud telemetry', value: '89%', bar: 89 },
  { name: 'AI quality gate', value: '93%', bar: 93 },
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-36">
      <div className="dot-grid absolute inset-0 opacity-40" />
      <div className="animate-drift absolute -right-24 -top-20 h-80 w-80 rounded-full bg-cyan/20 blur-3xl" />
      <div className="animate-drift absolute -left-24 bottom-6 h-72 w-72 rounded-full bg-sun/15 blur-3xl" style={{ animationDelay: '1.2s' }} />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <span className="kicker">
              <Sparkles className="h-3.5 w-3.5 text-sun" />
              SemDynamic: software + electrosoft
            </span>

            <h1 className="mt-6 max-w-2xl font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl lg:text-6xl">
              Разрабатываем цифровые и встраиваемые системы, которые
              <span className="title-gradient"> работают как единый продукт</span>.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-soft sm:text-xl">
              Берем проект под ключ: от архитектуры платформ и мобильных сервисов до прошивок,
              edge-логики и промышленной телеметрии. Один инженерный контур, один SLA, один результат.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan to-teal px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan/30 transition-transform hover:scale-[1.03]"
              >
                Обсудить проект
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-2xl border border-ink/10 bg-white/80 px-6 py-3.5 text-sm font-bold text-ink transition-colors hover:bg-white"
              >
                Смотреть кейсы
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-panel rounded-2xl px-4 py-4">
                  <div className="font-display text-2xl font-extrabold text-ink">{stat.value}</div>
                  <p className="mt-1 text-sm text-slate-soft">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="glass-panel relative overflow-hidden rounded-[30px] p-6 sm:p-8">
              <div className="animate-pulse-soft absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan/20 blur-3xl" />

              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-soft">Control room</p>
                <span className="rounded-full bg-teal/15 px-2.5 py-1 text-xs font-bold text-teal">Live</span>
              </div>

              <h2 className="mt-4 max-w-sm font-display text-2xl font-bold leading-tight text-ink sm:text-3xl">
                Единый мониторинг software и electrosoft команд
              </h2>

              <div className="mt-7 space-y-4">
                {realtime.map((item, index) => (
                  <div key={item.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-semibold text-ink/80">{item.name}</span>
                      <span className="font-bold text-cyan">{item.value}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-ink/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.bar}%` }}
                        transition={{ duration: 1, delay: 0.25 + index * 0.2 }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan to-teal"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-ink/10 bg-white/80 p-4">
                  <div className="flex items-center gap-2 text-cyan">
                    <Cpu className="h-4 w-4" />
                    <span className="text-xs font-bold uppercase tracking-[0.14em]">Embedded</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-soft">Обновление контроллеров без остановки производства.</p>
                </div>
                <div className="rounded-2xl border border-ink/10 bg-white/80 p-4">
                  <div className="flex items-center gap-2 text-sun">
                    <Radar className="h-4 w-4" />
                    <span className="text-xs font-bold uppercase tracking-[0.14em]">Telemetry</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-soft">Сбор телеметрии в реальном времени для SaaS и edge.</p>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.4, repeat: Infinity }}
              className="absolute -left-6 top-8 hidden rounded-2xl border border-ink/10 bg-white/85 px-3 py-2 shadow-lg md:flex md:items-center md:gap-2"
            >
              <CircuitBoard className="h-4 w-4 text-cyan" />
              <span className="text-xs font-bold text-ink">Firmware QA synced</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.6 }}
              className="absolute -bottom-5 right-4 hidden rounded-2xl border border-ink/10 bg-white/85 px-3 py-2 shadow-lg md:block"
            >
              <p className="text-xs font-bold text-ink">Deployment latency: 22s</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
