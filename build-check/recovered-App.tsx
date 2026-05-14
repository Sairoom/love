import type { CSSProperties } from "react";

type Moment = {
  title: string;
  text: string;
};

type DecorHeart = {
  top: string;
  left: string;
  size: string;
  opacity: number;
  delay: string;
};

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

const DECOR_HEARTS: DecorHeart[] = [
  { top: "31%", left: "37%", size: "16px", opacity: 0.24, delay: "0s" },
  { top: "38%", left: "60%", size: "15px", opacity: 0.2, delay: "1.4s" },
  { top: "70%", left: "33%", size: "18px", opacity: 0.34, delay: "0.8s" },
  { top: "75%", left: "55%", size: "24px", opacity: 0.28, delay: "2.2s" },
  { top: "80%", left: "78%", size: "20px", opacity: 0.3, delay: "1.1s" },
  { top: "87%", left: "98%", size: "15px", opacity: 0.32, delay: "0.2s" },
];

function App() {
  return (
    <main className="moments-page">
      <section className="moments-showcase">
        {DECOR_HEARTS.map((heart, index) => {
          const style: CSSProperties = {
            top: heart.top,
            left: heart.left,
            fontSize: heart.size,
            opacity: heart.opacity,
            animationDelay: heart.delay,
          };

          return (
            <span key={index} className="decor-heart" style={style} aria-hidden="true">
              ❤
            </span>
          );
        })}

        <div className="content-wrap">
          <p className="kicker">НАШИ МОМЕНТЫ</p>
          <h1>Маленькие главы большой любви</h1>
          <span className="title-heart" aria-hidden="true">
            ❤
          </span>

          <div className="moments-grid">
            {MOMENTS.map((moment) => (
              <article key={moment.title} className="moment-card">
                <div className="moment-photo">Фото-заглушка</div>
                <div className="moment-body">
                  <h2>{moment.title}</h2>
                  <p>{moment.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
