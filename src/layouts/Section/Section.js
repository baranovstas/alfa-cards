import layoutStyles from '../Layout.module.scss';

function Section({ className, title, children }) {
  return (
    <section className={className}>
      <div className={layoutStyles.container}>
        <h2 className={layoutStyles.hidden}>{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default Section;