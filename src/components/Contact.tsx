import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Mail, MapPin, PhoneCall } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), 3200);
  };

  return (
    <section id="contact" className="relative px-4 pb-24 pt-24 sm:px-6 lg:px-8 lg:pb-28 lg:pt-28">
      <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-teal/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]"
        >
          <aside className="glass-panel rounded-3xl p-6 sm:p-8">
            <span className="kicker">Контакты</span>
            <h2 className="mt-5 font-display text-3xl font-extrabold text-ink sm:text-4xl">
              Готовы обсудить задачу уже сегодня
            </h2>
            <p className="mt-4 text-slate-soft">
              На первом звонке разберем требования, архитектурные ограничения и предложим рабочий план запуска.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 rounded-xl bg-cyan/10 p-2 text-cyan">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.09em] text-slate-soft">Почта</p>
                  <p className="font-semibold text-ink">hello@semdynamic.tech</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 rounded-xl bg-teal/10 p-2 text-teal">
                  <PhoneCall className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.09em] text-slate-soft">Телефон</p>
                  <p className="font-semibold text-ink">+7 (495) 221-09-72</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 rounded-xl bg-sun/10 p-2 text-sun">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.09em] text-slate-soft">Офис</p>
                  <p className="font-semibold text-ink">Москва, Берсеневская набережная, 6с3</p>
                </div>
              </div>
            </div>
          </aside>

          <div className="glass-panel rounded-3xl p-6 sm:p-8">
            {submitted ? (
              <div className="flex min-h-[330px] flex-col items-center justify-center text-center">
                <span className="rounded-full bg-teal/10 p-3 text-teal">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold text-ink">Заявка отправлена</h3>
                <p className="mt-2 max-w-sm text-slate-soft">
                  Свяжемся с вами в ближайшее время и подготовим техническое предложение.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-ink/80">Имя</span>
                    <input
                      required
                      type="text"
                      placeholder="Как к вам обращаться"
                      className="w-full rounded-2xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-cyan"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-ink/80">Компания</span>
                    <input
                      type="text"
                      placeholder="Название компании"
                      className="w-full rounded-2xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-cyan"
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-ink/80">Email</span>
                    <input
                      required
                      type="email"
                      placeholder="name@company.com"
                      className="w-full rounded-2xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-cyan"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-ink/80">Тип проекта</span>
                    <select className="w-full rounded-2xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-cyan">
                      <option>Выберите тип</option>
                      <option>SaaS / Web-платформа</option>
                      <option>Mobile-приложение</option>
                      <option>Electrosoft / Embedded</option>
                      <option>Интеграции и модернизация</option>
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-ink/80">Описание задачи</span>
                  <textarea
                    required
                    rows={5}
                    placeholder="Что нужно запустить, какие сроки и целевые метрики?"
                    className="w-full resize-none rounded-2xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-cyan"
                  />
                </label>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-gradient-to-r from-cyan to-teal px-5 py-3.5 text-sm font-bold uppercase tracking-[0.07em] text-white transition-transform hover:scale-[1.01]"
                >
                  Отправить заявку
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
