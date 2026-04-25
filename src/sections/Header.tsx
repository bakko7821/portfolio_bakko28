export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full px-16 p-4 bg-black/10 backdrop-blur-sm">
      <nav>
        <ul className="flex gap-16 text-white">
          <li>
            <a href="#hero" className="text-2xl">
              Главная
            </a>
          </li>
          <li>
            <a href="" className="text-2xl">
              Работы
            </a>
          </li>
          <li>
            <a href="" className="text-2xl">
              Прайс
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
