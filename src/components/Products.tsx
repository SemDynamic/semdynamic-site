import { motion } from 'framer-motion';
import { Building2, Factory, Gauge, Shield, Truck } from 'lucide-react';

const cases = [
  {
    icon: Factory,
    industry: 'Промышленность',
    title: 'Платформа предиктивного обслуживания станков',
    summary:
      'Соединили облачную аналитику с embedded-датчиками: система заранее предупреждает о сбоях и планирует сервис.',
    result: 'Снижение аварийных простоев на 43%',
    tags: ['IoT', 'Firmware', 'Edge AI', 'Dashboard'],
  },
  {
    icon: Truck,
    industry: 'Логистика',
    title: 'Единая система управления автопарком и маршрутами',
    summary:
      'Разработали веб-панель, мобильное приложение и телеметрические модули для транспорта в едином контуре.',
    result: 'Сокращение затрат на топливо на 19%',
    tags: ['Web Platform', 'Mobile', 'Telemetry', 'Routing'],
  },
  {
    icon: Building2,
    industry: 'FinTech',
    title: 'Безопасный модуль цифрового онбординга клиентов',
    summary:
      'Запустили KYC-флоу с адаптивной проверкой рисков и контролем доступа для внутренних команд.',
    result: 'Ускорение онбординга в 2.1 раза',
    tags: ['Identity', 'Security', 'API', 'Compliance'],
  },
];

const stack = [
  'TypeScript',
  'React',
  'Node.js',
  'C++',
  'Rust',
  'STM32',
  'PostgreSQL',
  'Kafka',
  'Kubernetes',
  'Grafana',
  'TensorRT',
  'Figma',
];

export default function Products() {
  return (
    <section id="products" className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute right-0 top-16 h-64 w-64 rounded-full bg-teal/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <span className="kicker">Кейсы</span>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
              Доставляем результат в цифрах,
              <span className="title-gradient"> а не в слайдах</span>
            </h2>
          </div>

          <div className="glass-panel flex max-w-md items-center gap-3 rounded-2xl px-5 py-4">
            <Gauge className="h-5 w-5 text-cyan" />
            <p className="text-sm text-slate-soft">
              У каждого проекта заранее фиксируем KPI и проверяем их на боевых данных.
            </p>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {cases.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="hover-lift glass-panel rounded-3xl p-6"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-cyan/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-cyan">
                  <item.icon className="h-3.5 w-3.5" />
                  {item.industry}
                </span>
                <Shield className="h-4 w-4 text-ink/35" />
              </div>

              <h3 className="mt-5 font-display text-xl font-bold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-soft">{item.summary}</p>

              <div className="mt-5 rounded-2xl border border-teal/20 bg-teal/10 px-4 py-3">
                <p className="text-sm font-bold text-teal">{item.result}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-ink/10 bg-white px-3 py-1 text-xs font-semibold text-slate-soft">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="glass-panel mt-12 overflow-hidden rounded-3xl border border-ink/10">
          <div className="flex w-max min-w-full items-center gap-3 py-4 animate-marquee">
            {[...stack, ...stack].map((tech, index) => (
              <span
                key={`${tech}-${index}`}
                className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-slate-soft shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
