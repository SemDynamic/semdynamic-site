import { motion } from 'framer-motion';
import { ArrowRight, Blocks, Cog, Headset, Rocket, Search, Server } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Discovery и тех-аудит',
    description: 'Быстро анализируем текущую систему, риски и точки роста, чтобы не тратить бюджет вслепую.',
  },
  {
    icon: Blocks,
    title: 'Продуктовый дизайн',
    description: 'Проектируем UX, сценарии и архитектуру интерфейсов для сложных B2B и industrial продуктов.',
  },
  {
    icon: Server,
    title: 'Разработка платформ',
    description: 'Backend, API, интеграции, хранилища данных и observability с учетом роста нагрузки.',
  },
  {
    icon: Cog,
    title: 'Electrosoft разработка',
    description: 'Прошивки, протоколы, OTA-обновления, edge-логика и связь с промышленным железом.',
  },
  {
    icon: Rocket,
    title: 'Релиз и масштабирование',
    description: 'CI/CD, инфраструктура, автотесты и безопасный выход в production без длительных стопов.',
  },
  {
    icon: Headset,
    title: 'Поддержка 24/7',
    description: 'SLA-поддержка, реакция на инциденты и развитие продукта после первого релиза.',
  },
];

const steps = [
  { step: '01', title: 'Диагностика', text: 'Фиксируем цели, риски и критерии успеха.' },
  { step: '02', title: 'Архитектура', text: 'Собираем roadmap и технический дизайн.' },
  { step: '03', title: 'Реализация', text: 'Итеративно отгружаем фичи и проверяем метрики.' },
  { step: '04', title: 'Эксплуатация', text: 'Поддерживаем и улучшаем систему в проде.' },
];

export default function Services() {
  return (
    <section id="services" className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-cyan/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="kicker">Процесс и сервис</span>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Стабильная инженерная система
            <span className="title-gradient"> вместо разрозненных подрядчиков</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-soft">
            Вы получаете синхронизированную команду, которая ведет проект от исследования до эксплуатации.
          </p>
        </motion.div>

        <div className="mt-11 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="hover-lift glass-panel group rounded-3xl p-6"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan/15 to-sun/15 text-cyan transition-transform duration-300 group-hover:scale-110">
                <service.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-soft">{service.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan">
                Подробнее
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass-panel rounded-3xl p-5"
            >
              <span className="font-display text-3xl font-extrabold text-cyan">{item.step}</span>
              <h4 className="mt-3 font-display text-lg font-bold text-ink">{item.title}</h4>
              <p className="mt-2 text-sm text-slate-soft">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
