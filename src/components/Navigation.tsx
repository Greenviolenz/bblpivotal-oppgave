import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="border-b border-gray-300 flex justify-between items-center gap-2 max-sm:flex-col px-4 sm:px-8 py-4">
      <Link to="/">
        <h1 className="text-xl font-bold">Plantify</h1>
      </Link>
      <div className="flex flex-wrap space-x-2 sm:space-x-6">
        <Link
          to="/"
          className={`p-2 transition-colors hover:text-secondary ${
            location.pathname === "/" ? "text-primary font-semibold" : ""
          }`}
        >
          Planter
        </Link>
        <Link
          to="/om-oss"
          className={`p-2 transition-colors hover:text-secondary ${
            location.pathname === "/om-oss" ? "text-primary font-semibold" : ""
          }`}
        >
          Om oss
        </Link>
        <Link
          to="/kontakt"
          className={`p-2 transition-colors hover:text-secondary ${
            location.pathname === "/kontakt" ? "text-primary font-semibold" : ""
          }`}
        >
          Kontakt
        </Link>
        <Link
          to="/handlekurv"
          className={`p-2 transition-colors hover:text-secondary ${
            location.pathname === "/handlekurv"
              ? "text-primary font-semibold"
              : ""
          }`}
        >
          Handlekurv
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
