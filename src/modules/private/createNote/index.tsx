import { PageHeader } from "../../../layout/components/pageHeader";
import { Button } from "../../../components";
import { NoteForm } from "./components";

export const CreateNote = () => {
  return (
    <main className="w-full flex-1 max-h-dvh h-full  bg-surface-2  min-h-dvh">
      <div>
        <PageHeader title="All Notes" isLargeHidden />
      </div>
      <div className="flex-1 flex h-[calc(100vh-81px-44px)] sm:h-[calc(100vh-81px-74px)] lg:h-[calc(100vh-81px)]">
        {/* Left Bar  */}
        <div className="px-4 hidden lg:block lg:w-[291px] lg:pl-8 lg:h-full pt-5 lg:border-r border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col gap-4 ">
            <Button label="+ Create New Note" className="hidden lg:flex" />
            <div className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-primary-text text-preset-4">
              You don’t have any notes yet. Start a new note to capture your
              thoughts and ideas.
            </div>
          </div>
        </div>

        {/* Create Form  */}
        <div className="flex-1 text-primary-text">
          <NoteForm />
        </div>

        {/* Right Bar  */}
        <div className="px-4 hidden lg:block text-primary-text lg:w-[291px] lg:pl-8 lg:h-full pt-5 lg:border-l border-neutral-200 dark:border-neutral-800"></div>
      </div>
    </main>
  );
};
