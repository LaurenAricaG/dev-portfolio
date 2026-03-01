import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <div className="flex justify-between p-5 bg-slate-200 mb-5">
      <h1>Logo</h1>
      <ThemeToggle />
    </div>
  );
};

export default Header;
