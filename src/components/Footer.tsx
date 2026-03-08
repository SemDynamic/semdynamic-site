import { CircuitBoard, Github, Linkedin, Send } from 'lucide-react';

const links = {
  Решения: ['Платформенная разработка', 'Electrosoft', 'AI и аналитика', 'Интеграции'],
  Компания: ['О SemDynamic', 'Команда', 'Карьера', 'Партнерство'],
  Ресурсы: ['Кейсы', 'Тех-блог', 'Документация', 'Контакты'],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-white/70 px-4 py-14 backdrop-blur-sm sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#hero" className="group inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan to-teal text-white shadow-lg shadow-cyan/25 transition-transform group-hover:rotate-6">
                <CircuitBoard className="h-5 w-5" />
              </span>
              <span className="font-display text-xl font-semibold text-ink">
                Sem<span className="text-cyan">Dynamic</span>
              </span>
            </a>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-soft">
              Инженерная компания, которая создает software и electrosoft продукты для бизнеса с высокой стоимостью ошибок.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {[Github, Linkedin, Send].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="rounded-xl border border-ink/10 bg-white p-2.5 text-slate-soft transition-colors hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.08em] text-ink">{group}</h3>
              <ul className="mt-4 space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-slate-soft transition-colors hover:text-ink">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-ink/10 pt-5 text-sm text-slate-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} SemDynamic. Все права защищены.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="transition-colors hover:text-ink">
              Политика конфиденциальности
            </a>
            <a href="#" className="transition-colors hover:text-ink">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
