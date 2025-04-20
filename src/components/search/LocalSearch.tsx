import { useEffect, useState } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

import { formUrlQuery, removeKeysFromUrlQuery } from "../../lib/url";
import { SearchIcon } from "../../assets/svgAssets";

interface Props {
  route: string;
  icon?: React.ReactNode | null;
  placeholder: string;
  otherClasses?: string;
  iconPosition?: "left" | "right";
}

export const LocalSearch = ({
  route,
  icon = <SearchIcon />,
  placeholder,
  otherClasses,
  iconPosition = "left",
}: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const [searchQuery, setSearchQuery] = useState(query);

  // Debounced effect to update URL on input
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const currentParams = searchParams;

      if (searchQuery) {
        const newUrl = formUrlQuery({
          params: currentParams.toString(),
          key: "query",
          value: searchQuery,
        });

        navigate(newUrl, { replace: true });
      } else {
        if (location.pathname === route) {
          const newUrl = removeKeysFromUrlQuery({
            params: currentParams.toString(),
            keysToRemove: ["query"],
          });

          navigate(newUrl, { replace: true });
        }
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, route, navigate, searchParams, location.pathname]);

  return (
    <div
      className={`  rounded-lg flex min-h-[46px] lg:min-w-[300px] border border-neutral-300 dark:border-neutral-700 grow items-center gap-4 px-4 ${otherClasses}`}
    >
      {iconPosition === "left" && (
        <span className="text-primary-text">{icon}</span>
      )}

      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className=" text-primary-text w-full text-preset-4 no-focus placeholder text-dark400_light700 border-none shadow-none outline-none"
      />

      {iconPosition === "right" && (
        <span className="text-primary-text">{icon}</span>
      )}
    </div>
  );
};
