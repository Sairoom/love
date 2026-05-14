import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { reasons } from "./data/reasons";

type NavItem = {
  label: string;
  href: string;
};

type Moment = {
  title: string;
  text: string;
};

type FutureCard = {
  emoji: string;
  title: string;
  text: string;
};

type HeartParticle = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
};

type HeartStyle = CSSProperties & Record<`--${string}`, string>;

const NAV_ITEMS: NavItem[] = [
  { label: "Главная", href: "#hero" },
  { label: "О нас", href: "#about" },
  { label: "Первое свидание", href: "#first-date" },
  { label: "Моменты", href: "#moments" },
  { label: "100 причин", href: "#reasons" },
  { label: "Будущее", href: "#future" },
];

const MOMENTS: Moment[] = [
  {
    title: "Первое утро вместе",
    text: "Когда просыпаешься рядом и понимаешь, что это уже лучший день.",
  },
  {
    title: "Наше путешествие",
    text: "Новые города, дороги и самые тёплые разговоры в пути.",
  },
  {
    title: "Ночные звонки",
    text: "Часы до рассвета, где мы делились мечтами и планами.",
  },
  {
    title: "Воскресные завтраки",
    text: "Кофе, круассаны и маленькие традиции только для нас.",
  },
  {
    title: "Наша песня",
    text: "Одна мелодия, которая всегда возвращает в любимый момент.",
  },
  {
    title: "Звёздное небо",
    text: "Вечера, где тишина говорила о самом главном.",
  },
];

const FUTURE_PLANS: FutureCard[] = [
  {
    emoji: "🏡",
    title: "Наш дом",
    text: "Место, где каждое утро начинается с улыбки, объятий и любимой музыки.",
  },
  {
    emoji: "🌍",
    title: "Путешествия",
    text: "Новые города, закаты и воспоминания, которые останутся с нами навсегда.",
  },
  {
    emoji: "💖",
    title: "Вместе навсегда",
    text: "Каждый день выбирать друг друга, поддерживать и любить еще сильнее.",
  },
];

const pseudoRandom = (seed: number): number => {
  const x = Math.sin(seed * 129.9898) * 43758.5453123;
  return x - Math.floor(x);
};

const buildHearts = (count: number): HeartParticle[] =>
  Array.from({ length: count }, (_, index) => ({
    id: index,
    left: pseudoRandom(index + 1) * 100,
    size: 10 + pseudoRandom(index + 4) * 16,
    duration: 18 + pseudoRandom(index + 8) * 24,
    delay: pseudoRandom(index + 12) * -34,
    drift: -42 + pseudoRandom(index + 16) * 84,
    opacity: 0.3 + pseudoRandom(index + 20) * 0.45,
  }));

function App() {
  const hearts = useMemo(() => buildHearts(96), []);
  const [activeReason, setActiveReason] = useState<number | null>(null);
  const isReasonModalOpen = activeReason !== null;

  useEffect(() => {
    if (!isReasonModalOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveReason(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isReasonModalOpen]);

  return (
    <div className="page">
      <div className="hearts-bg" aria-hidden="true">
        {hearts.map((heart) => {
          const style: HeartStyle = {
            "--left": `${heart.left}%`,
            "--size": `${heart.size}px`,
            "--duration": `${heart.duration}s`,
            "--delay": `${heart.delay}s`,
            "--drift": `${heart.drift}px`,
            "--opacity": `${heart.opacity}`,
          };

          return (
            <span key={heart.id} className="heart" style={style}>
              ❤
            </span>
          );
        })}
      </div>

      <header className="top-nav">
        <div className="container top-nav__inner">
          <span className="logo" aria-hidden="true">
            ♡
          </span>
          <nav aria-label="Навигация по странице">
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="section hero">
          <div className="container hero__inner">
            <p className="section-kicker">наша история</p>
            <h1>Ты - моя самая красивая история</h1>
            <p className="hero__subtitle">Каждый момент с тобой - это волшебство</p>
            <a className="btn-primary" href="#about">
              Начать нашу историю
            </a>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="container about__grid">
            <div className="about__content">
              <p className="section-kicker">о нас</p>
              <h2>О нас</h2>
              <p>
                С того самого момента, как ты вошла в мою жизнь, все стало теплее и ярче. Каждый день рядом с тобой наполнен смыслом, радостью и спокойствием.
              </p>
              <p>
                Ты делаешь обычные моменты особенными, а особенные - незабываемыми. С тобой я понял, что значит любить по-настоящему.
              </p>
            </div>
            <div className="photo-placeholder photo-placeholder--framed">
              <span>Фото-заглушка 1</span>
            </div>
          </div>
        </section>

        <section id="first-date" className="section first-date">
          <div className="container first-date__grid">
            <div className="photo-placeholder photo-placeholder--wide">
              <span>Фото-заглушка 2</span>
            </div>
            <div className="first-date__content">
              <p className="section-kicker">особенный момент</p>
              <h2>Первое свидание</h2>
              <p className="date-badge">Дата: 03.05.2022</p>
              <p>
                Помню каждую деталь того вечера. Твою улыбку, которая заставила сердце биться быстрее, и разговор, который не хотелось заканчивать.
              </p>
              <p>
                Это был не просто день - это было начало нашей невероятной истории.
              </p>
            </div>
          </div>
        </section>

        <section id="moments" className="section moments">
          <div className="container">
            <p className="section-kicker moments__eyebrow">наши моменты</p>
            <h2 className="moments__title">Маленькие главы большой любви</h2>

            <div className="moments-grid">
              {MOMENTS.map((moment) => (
                <article key={moment.title} className="moment-card">
                  <div className="moment-card__image">
                    <span>Фото-заглушка</span>
                  </div>
                  <div className="moment-card__body">
                    <h3>{moment.title}</h3>
                    <p>{moment.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reasons" className="section reasons">
          <div className="container">
            <p className="section-kicker">от всего сердца</p>
            <h2>100 причин, почему я тебя люблю</h2>
            <p className="section-note">Нажми на карточку, чтобы узнать причину.</p>
            <div className="reasons-grid">
              {reasons.map((reason, index) => {
                const isActive = activeReason === index;
                return (
                  <button
                    key={index}
                    type="button"
                    className={`reason-card${isActive ? " is-active" : ""}`}
                    onClick={() => setActiveReason(index)}
                    aria-pressed={isActive}
                    title={reason}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section id="future" className="section future">
          <div className="container">
            <p className="section-kicker">наши мечты</p>
            <h2>Будущее</h2>
            <div className="future-grid">
              {FUTURE_PLANS.map((plan) => (
                <article key={plan.title} className="future-card">
                  <span className="future-card__emoji" aria-hidden="true">
                    {plan.emoji}
                  </span>
                  <h3>{plan.title}</h3>
                  <p>{plan.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section quote">
          <div className="container">
            <blockquote>
              "С тобой я хочу прожить не просто жизнь, а тысячу жизней, где в каждой из них буду любить тебя еще сильнее."
            </blockquote>
            <p>Навсегда твой ♡</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>Сделано с любовью специально для тебя ♡</p>
          <small>2026</small>
        </div>
      </footer>

      {isReasonModalOpen && (
        <div
          className="reason-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="reason-modal-title"
          onClick={() => setActiveReason(null)}
        >
          <div className="reason-modal__card" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="reason-modal__close"
              onClick={() => setActiveReason(null)}
              aria-label="Закрыть окно"
            >
              ×
            </button>
            <p className="reason-modal__kicker">100 причин</p>
            <h3 id="reason-modal-title">Причина №{activeReason + 1}</h3>
            <p className="reason-modal__text">{reasons[activeReason]}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
