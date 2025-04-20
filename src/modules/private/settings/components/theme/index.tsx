import { useEffect, useState } from "react";
import {
  LogoutIcon,
  MoonIcon,
  SunIcon,
  SystemThemeIcon,
} from "../../../../../assets/svgAssets";
import { Option } from "../../../../../components";
import { Button } from "../../../../../components/button";
import { Links } from "../links";
import { Link } from "react-router-dom";
import ROUTES from "../../../../../constants/routes";
import { PageHeader } from "../../../../../layout/components/pageHeader";

const themeOptions = [
  {
    id: 0,
    title: "Light Mode",
    subtitle: "Pick a clean and classic light theme",
    icon: <SunIcon />,
    value: "light",
  },
  {
    id: 1,
    title: "Dark Mode",
    subtitle: "Select a sleek and modern dark theme",
    icon: <MoonIcon />,
    value: "dark",
  },
  {
    id: 2,
    title: "System",
    subtitle: "Adapts to your device’s theme",
    icon: <SystemThemeIcon />,
    value: "system",
  },
];

export const ThemeSettings = () => {
  const [selectedOption, setSelectedOption] = useState(
    localStorage.getItem("theme") || "light"
  );

  const changeTheme = (theme: string) => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    console.log("theme", theme);
    if (theme === "light") {
      document.querySelector("body")!.classList.remove("dark");
    }

    if (theme === "dark") {
      document.querySelector("body")!.classList.add("dark");
    }

    if (theme === "system") {
      document
        .querySelector("body")!
        .classList.toggle(
          "dark",
          localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
              window.matchMedia("(prefers-color-scheme: dark)").matches)
        );
    }

    if (theme === "light" || theme === "dark") {
      localStorage.setItem("theme", theme);
    } else {
      localStorage.removeItem("theme");
    }
  };

  useEffect(() => {
    changeTheme(selectedOption);
  }, [selectedOption]);

  return (
    <div className="w-full flex-1 max-h-dvh h-full bg-surface-2">
      <PageHeader title="Settings" />

      <div className="flex flex-1 h-[calc(100vh-81px)] ">
        <div className=" pl-8 py-5 pr-4 border-r hidden border-neutral-200 dark:border-neutral-800 lg:flex flex-col gap-2 w-[260px] h-full">
          <Links />
          <Link
            to={ROUTES.SIGNIN}
            className="flex items-center gap-2 py-2.5 text-preset-4 text-secondary-text px-4 hover:bg-blue-50 dark:hover:bg-neutral-800 rounded-lg "
          >
            <span>
              <LogoutIcon />
            </span>
            <span>Logout</span>
          </Link>
        </div>

        <div className="flex-1 ">
          <div className="p-4 md:p-8 max-w-[528px] flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h2 className="text-preset-3 text-primary-text font-semibold">
                Color Theme
              </h2>
              <p className="text-preset-4 text-secondary-text">
                Choose your color theme:
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {themeOptions.map((option) => (
                <Option
                  key={option.id}
                  title={option.title}
                  subtitle={option.subtitle}
                  icon={option.icon}
                  selected={selectedOption === option.value}
                  setSelected={() => setSelectedOption(option.value)}
                  value={option.value}
                />
              ))}
            </div>

            <div className="flex justify-end w-full">
              <Button label="Apply Changes" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
