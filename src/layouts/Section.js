import cardsStyles from '../assets/styles/cards.module.scss';

function Section({ className, title, children }) {
  const { container, hidden } = cardsStyles;
  return (
    <section className={className}>
      <div className={container}>
        <h2 className={hidden}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

export default Section;