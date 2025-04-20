import { NavLink } from "react-router-dom";
import ROUTES from "../../constants/routes";
import {
  ArchiveIcon,
  HomeIcon,
  SearchIcon,
  SettingsIcon,
  TagIcon,
} from "../../assets/svgAssets";

type Tab = {
  id: number;
  name: string;
  icon: React.ReactNode;
  route: string;
  isLast: boolean;
};

const tabs = [
  {
    id: 0,
    name: "Home",
    icon: <HomeIcon />,
    route: ROUTES.HOME,
    isLast: false,
  },
  {
    id: 1,
    name: "Search",
    icon: <SearchIcon />,
    route: ROUTES.SEARCH,
    isLast: false,
  },
  {
    id: 2,
    name: "Archived",
    icon: <ArchiveIcon />,
    route: ROUTES.ARCHIVE,
    isLast: false,
  },
  {
    id: 3,
    name: "Tags",
    icon: <TagIcon />,
    route: ROUTES.TAGS,
    isLast: false,
  },
  {
    id: 4,
    name: "Settings",
    icon: <SettingsIcon />,
    route: ROUTES.SETTINGS,
    isLast: true,
  },
];

export const Tabs = () => {
  return (
    <div className="flex py-3 px-4   md:px-8 bg-surface-2 border-t h-[47px] sm:h-[75px] border-neutral-200 dark:border-neutral-800 items-center gap-4 justify-between">
      {tabs.map((tab: Tab) => (
        <>
          <NavLink
            to={tab.route}
            key={tab.id}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-blue-500 bg-blue-50 dark:bg-neutral-700"
                  : "text-secondary-text"
              } w-full flex items-center justif-center gap-1 py-1 flex-col rounded-sm`
            }
          >
            <span>{tab.icon}</span>
            <p className="text-preset-5 hidden sm:block">{tab.name}</p>
          </NavLink>
          {!tab.isLast && (
            <div className="h-10 hidden sm:block w-[1px] bg-neutral-200 dark:bg-neutral-800"></div>
          )}
        </>
      ))}
    </div>
  );
};
