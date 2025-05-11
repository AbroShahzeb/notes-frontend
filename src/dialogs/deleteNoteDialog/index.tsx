import { IconDelete } from "@/assets/svgAssets";
import { Button } from "@/components";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";

export const DeleteNoteDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center gap-2 py-3 px-4 rounded-xl border border-neutral-300 dark:border-neutral-700 text-primary-text text-preset-4">
          <span>
            <IconDelete width={20} height={20} />
          </span>
          <span>Delete Note</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md gap-0 bg-white dark:bg-neutral-700 text-primary-text border border-neutral-200 dark:border-neutral-600 shadow-none p-0">
        <div className="flex items-start gap-4  p-4">
          <div className="size-10 rounded-md bg-neutral-100 dark:bg-neutral-600 flex items-center justify-center flex-shrink-0">
            <IconDelete />
          </div>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-preset-3 font-semibold">Delete Note</h3>
            <p className="text-preset-4 text-neutral-700 dark:text-neutral-200">
              Are you sure you want to permanently delete this note? This action
              cannot be undone.
            </p>
          </div>
        </div>
        {/* Your form or content goes here */}
        <div className="p-4 px-5 flex items-center justify-end gap-4 border-t border-neutral-200 dark:border-neutral-600 ">
          <DialogClose asChild>
            <Button variant="secondary" label="Cancel" />
          </DialogClose>
          <Button label="Delete Note" variant="destructive" />
        </div>
      </DialogContent>
    </Dialog>
  );
};
