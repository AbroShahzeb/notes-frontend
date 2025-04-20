import { useEffect, useState } from "react";
import {
  LogoutIcon,
  MonoSpaceIcon,
  SansSerifIcon,
  SerifIcon,
} from "../../../../../assets/svgAssets";
import { Option } from "../../../../../components";
import { Button } from "../../../../../components/button";
import { Link } from "react-router-dom";
import { Links } from "../links";
import { PageHeader } from "../../../../../layout/components/pageHeader";
import ROUTES from "../../../../../constants/routes";

const fontOptions = [
  {
    id: 0,
    title: "Sans-serif",
    subtitle: "Clean and modern, easy to read",
    icon: <SansSerifIcon />,
    value: "sans-serif",
  },
  {
    id: 1,
    title: "Serif",
    subtitle: "Classic and elegant for a timeless feel",
    icon: <SerifIcon />,
    value: "serif",
  },
  {
    id: 2,
    title: "Monospace",
    subtitle: "Code-like, great for technical vibe",
    icon: <MonoSpaceIcon />,
    value: "monospace",
  },
];

export const FontSettings = () => {
  const [selectedOption, setSelectedOption] = useState(
    localStorage.getItem("font") || "sans-serif"
  );

  const changeFont = (font: string) => {
    localStorage.setItem("font", font);
  };

  useEffect(() => {
    changeFont(selectedOption);
  }, [selectedOption]);

  return (
    <div className="w-full flex-1 max-h-dvh h-full bg-surface-2">
      <PageHeader title="Settings" />
      <div className="flex flex-1 h-[calc(100vh-81px)]">
        <div className="hidden pl-8 py-5 pr-4 border-r border-neutral-200 dark:border-neutral-800 lg:flex flex-col gap-2 w-[260px] h-full">
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
                Font Theme
              </h2>
              <p className="text-preset-4 text-secondary-text">
                Choose your font theme:
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {fontOptions.map((option) => (
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
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
