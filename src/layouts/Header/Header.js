import headerStyles from './Header.module.scss';
import layoutStyles from '../Layout.module.scss';

function Header() {
  return (
    <header className={headerStyles.header}>
      <div className={layoutStyles.container}>
        <h1 className={headerStyles.title}>Наш суперкофе</h1>
      </div>
    </header>
  );
}

export default Header;