import { Link } from "react-router-dom";
import { Logo } from "../../assets/svgAssets";
import ROUTES from "../../constants/routes";

export const LogoLink = () => {
  return (
    <Link to={ROUTES.HOME}>
      <span className="text-primary-text">
        <Logo />
      </span>
    </Link>
  );
};
