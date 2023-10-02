const Nav = () => {
  return (
    <nav>
      <ul className="flex flex-row gap-4 font-bold text-cyan-900 [&>*:hover]:text-fuchsia-900 dark:text-cyan-200  [&>*:hover]:dark:text-fuchsia-200">
        <li>
          <a href="/">Top</a>
        </li>
        <li>
          <a href="/new">New</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
