import { ArchiveIcon } from "@/assets/svgAssets";
import { Button } from "@/components";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";

export const ArchiveNoteDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center gap-2 py-3 px-4 rounded-xl border border-neutral-300 dark:border-neutral-700 text-primary-text text-preset-4">
          <span>
            <ArchiveIcon width={20} height={20} />
          </span>
          <span>Archive Note</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md gap-0 bg-white dark:bg-neutral-700 text-primary-text border border-neutral-200 dark:border-neutral-600 shadow-none p-0">
        <div className="flex items-start gap-4  p-4">
          <div className="size-10 rounded-md bg-neutral-100 dark:bg-neutral-600 flex items-center justify-center flex-shrink-0">
            <ArchiveIcon />
          </div>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-preset-3 font-semibold">Archive Note</h3>
            <p className="text-preset-4 text-neutral-700 dark:text-neutral-200">
              Are you sure you want to archive this note? You can find it in the
              Archived Notes section and restore it anytime.
            </p>
          </div>
        </div>
        {/* Your form or content goes here */}
        <div className="p-4 px-5 flex items-center justify-end gap-4 border-t border-neutral-200 dark:border-neutral-600 ">
          <DialogClose asChild>
            <Button variant="secondary" label="Cancel" />
          </DialogClose>
          <Button label="Archive Note" />
        </div>
      </DialogContent>
    </Dialog>
  );
};
