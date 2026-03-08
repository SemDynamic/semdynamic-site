import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Иван Крылов',
    role: 'CTO, NordFactory',
    text: 'SemDynamic собрали для нас связку из веб-платформы и embedded-модулей. Мы перестали терять смены из-за поломок, потому что теперь видим риски заранее.',
  },
  {
    name: 'Мария Белова',
    role: 'Product Lead, FinAxis',
    text: 'Команда быстро поняла контекст бизнеса и предложила архитектуру, которая закрыла и compliance, и скорость вывода новых функций.',
  },
  {
    name: 'Олег Романов',
    role: 'COO, TransRoute',
    text: 'Запуск прошел без стресса: мобильное приложение, телеметрия и backend обновлялись синхронно, без простоев в операционке.',
  },
  {
    name: 'Анна Левченко',
    role: 'CEO, MedGrid',
    text: 'Нам был нужен подрядчик, который умеет не только кодить, но и думать продуктом. SemDynamic как раз таким и оказался.',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5400);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute left-1/2 top-0 h-56 w-[42rem] -translate-x-1/2 rounded-full bg-sun/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="kicker">Отзывы клиентов</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Нас рекомендуют, потому что мы
            <span className="title-gradient"> отвечаем за результат после релиза</span>
          </h2>
        </motion.div>

        <div className="mt-11 hidden gap-5 md:grid md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className={`glass-panel rounded-3xl p-5 transition-all duration-300 ${
                index === activeIndex ? 'border-cyan/40 shadow-xl shadow-cyan/10' : ''
              }`}
            >
              <Quote className="h-8 w-8 text-cyan/35" />
              <div className="mt-3 flex items-center gap-1 text-sun">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-soft">{item.text}</p>
              <div className="mt-5 border-t border-ink/10 pt-4">
                <p className="font-display text-base font-bold text-ink">{item.name}</p>
                <p className="text-xs uppercase tracking-[0.09em] text-slate-soft">{item.role}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <motion.article
            key={activeIndex}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="glass-panel rounded-3xl p-5"
          >
            <Quote className="h-8 w-8 text-cyan/35" />
            <div className="mt-3 flex items-center gap-1 text-sun">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star key={starIndex} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-soft">{testimonials[activeIndex].text}</p>
            <div className="mt-5 border-t border-ink/10 pt-4">
              <p className="font-display text-base font-bold text-ink">{testimonials[activeIndex].name}</p>
              <p className="text-xs uppercase tracking-[0.09em] text-slate-soft">{testimonials[activeIndex].role}</p>
            </div>
          </motion.article>

          <div className="mt-5 flex items-center justify-center gap-4">
            <button
              onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="glass-panel rounded-full p-2"
            >
              <ChevronLeft className="h-5 w-5 text-ink" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${index === activeIndex ? 'w-6 bg-cyan' : 'w-2.5 bg-ink/20'}`}
                />
              ))}
            </div>
            <button
              onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
              className="glass-panel rounded-full p-2"
            >
              <ChevronRight className="h-5 w-5 text-ink" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
