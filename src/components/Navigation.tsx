import { Link, useLocation } from "react-router-dom";

type TNav = { to: string, label: string }

const Navigation = () => {
  const location = useLocation();

  const navItems: TNav[] = [
    { to: "/", label: "Planter" },
    { to: "/om-oss", label: "Om oss" },
    { to: "/kontakt", label: "Kontakt" },
    { to: "/handlekurv", label: "Handlekurv" },
  ];

  return (
    <nav className="border-b border-gray-300 flex justify-between items-center gap-2 max-sm:flex-col px-4 sm:px-8 py-4">
      <Link to="/">
        <h1 className="text-xl font-bold">Plantify</h1>
      </Link>
      <div className="flex flex-wrap space-x-2 sm:space-x-6">
        {navItems.map(({ to, label }) => {
          const isActive = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`p-2 transition-colors hover:text-secondary ${isActive ? "text-primary font-semibold" : ""
                }`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
