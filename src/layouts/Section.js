function Section({ className, title, children }) {
  return (
    <section className={className}>
      <div className={`container ${className}__container`}>
        <h2 className={`visually-hidden ${className}__title`}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

export default Section;