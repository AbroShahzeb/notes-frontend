import { Link } from "react-router-dom";
import { Button } from "../../../components";
import { PageHeader } from "../../../layout/components/pageHeader";
import ROUTES from "../../../constants/routes";

export const Archive = () => {
  return (
    <div className="w-full flex-1 max-h-dvh h-full  bg-surface-2">
      <PageHeader title="Archived Notes" />
      <div className="flex-1 h-[calc(100vh-81px-44px)] sm:h-[calc(100vh-81px-74px)] lg:h-[calc(100vh-81px)]">
        <div className="px-4 lg:w-[291px]  lg:pl-8 lg:h-full pt-5 lg:border-r border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col gap-4 ">
            <Link to={ROUTES.CREATE_NOTE}>
              <Button
                label="+ Create New Note"
                className="hidden lg:flex w-full"
              />
            </Link>
            <div className="text-preset-4 text-primary-text">
              All your archived notes are stored here. You can restore or delete
              them anytime.
            </div>
            <div className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-primary-text text-preset-4">
              No notes have been archived yet. Move notes here for safekeeping,
              or{" "}
              <Link to={ROUTES.CREATE_NOTE} className="underline">
                create a new note.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
