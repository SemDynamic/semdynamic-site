import { motion } from 'framer-motion';
import { Check, Cpu, Layers3, ShieldCheck, Workflow } from 'lucide-react';

const competencies = [
  {
    icon: Layers3,
    title: 'Enterprise Software',
    description: 'Платформы для продаж, логистики, CRM/ERP и внутренних процессов компании.',
  },
  {
    icon: Cpu,
    title: 'Electrosoft & Embedded',
    description: 'Прошивки, драйверы, edge-логика и интеграции с промышленным оборудованием.',
  },
  {
    icon: Workflow,
    title: 'Интеграции и данные',
    description: 'API, событийные шины, телеметрия, пайплайны данных и AI-модули.',
  },
  {
    icon: ShieldCheck,
    title: 'Security by Design',
    description: 'Архитектура безопасности, контроль доступа, аудит и соответствие стандартам.',
  },
];

const principles = [
  'Пишем код, который удобен для следующего релиза, а не только для демонстрации.',
  'Соединяем фронтенд, backend и firmware в одной инженерной дорожной карте.',
  'Берем ответственность за метрики после запуска, а не только за сдачу этапа.',
];

export default function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-cyan/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="kicker">Экспертиза</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
            SemDynamic закрывает полный цикл разработки:
            <span className="title-gradient"> от UX до firmware</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-soft">
            Работаем как продуктовая инженерная команда внутри вашего бизнеса. Сначала разбираемся в процессе,
            потом проектируем архитектуру, и только после этого начинаем реализацию.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {competencies.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-panel hover-lift rounded-3xl p-6"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan/15 to-teal/15 text-cyan">
                <item.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-soft">{item.description}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel mt-10 grid items-center gap-8 rounded-3xl p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">Как мы держим качество на высоком уровне</h3>
            <ul className="mt-5 space-y-3">
              {principles.map((principle) => (
                <li key={principle} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-slate-soft">{principle}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { value: '11 лет', label: 'делаем сложный B2B софт' },
              { value: '180+', label: 'выполненных проектов' },
              { value: '48 часов', label: 'на запуск discovery-фазы' },
              { value: '24/7', label: 'поддержка критических систем' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-ink/10 bg-white/85 p-4 text-center">
                <div className="font-display text-2xl font-extrabold text-ink">{item.value}</div>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-soft">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
