import { PageHeader } from "../../../layout/components/pageHeader";
import { NotesLeftMenu } from "../../../components";
import { NoteForm } from "./components";
import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getNoteById } from "../../../api/notes";
import { ArchiveNoteDialog, DeleteNoteDialog } from "@/dialogs";

interface Props {
  isEdit?: boolean;
}

export const CreateNote = ({ isEdit = false }: Props) => {
  const { id } = useParams();
  const archived = useLocation()?.state?.archived;

  const { data, isLoading } = useQuery({
    queryKey: ["note", id],
    queryFn: () => getNoteById(id!),
    enabled: !!id,
  });

  const note = data?.data;

  return (
    <main className="w-full flex-1 max-h-dvh h-full  bg-surface-2  min-h-dvh">
      <div>
        <PageHeader title="All Notes" isLargeHidden />
      </div>
      <div className="flex-1 flex h-[calc(100vh-81px-44px)] sm:h-[calc(100vh-81px-74px)] lg:h-[calc(100vh-81px)]">
        {/* Left Bar  */}
        <div className="hidden lg:block">
          <NotesLeftMenu archived={archived} />
        </div>

        {/* Create Form  */}
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex-1 text-primary-text">
            <NoteForm isEdit={isEdit} note={note} archived={archived} />
          </div>
        )}

        {/* Right Bar  */}
        <div className="px-4 hidden lg:block text-primary-text lg:w-[291px] lg:pl-8 lg:h-full pt-5 lg:border-l border-neutral-200 dark:border-neutral-800">
          {id && (
            <div className="flex flex-col gap-3">
              <ArchiveNoteDialog />
              <DeleteNoteDialog />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
