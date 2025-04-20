import { Link, useSearchParams } from "react-router-dom";
import { PageHeader } from "../../../layout/components/pageHeader";
import { Button } from "../../../components";
import ROUTES from "../../../constants/routes";

export const Notes = () => {
  const [searchParams] = useSearchParams();
  console.log("searchParams", searchParams.get("query"));
  return (
    <main className="w-full flex-1 max-h-dvh h-full  bg-surface-2  min-h-dvh">
      <div>
        <PageHeader title="All Notes" />
      </div>
      <div className="flex-1 h-[calc(100vh-81px-44px)] sm:h-[calc(100vh-81px-74px)] lg:h-[calc(100vh-81px)]">
        <div className="px-4 lg:w-[291px] lg:pl-8 lg:h-full pt-5 lg:border-r border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col gap-4 ">
            <Link to={ROUTES.CREATE_NOTE}>
              <Button
                label="+ Create New Note"
                className="hidden lg:flex w-full"
              />
            </Link>
            <div className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-primary-text text-preset-4">
              You don’t have any notes yet. Start a new note to capture your
              thoughts and ideas.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
