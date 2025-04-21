import { PageHeader } from "../../../layout/components/pageHeader";
import { NotesLeftMenu } from "../../../components";
import { NoteForm } from "./components";
import { useParams } from "react-router-dom";
import notes from "../../../data";
import { useEffect, useState } from "react";

interface Props {
  isEdit?: boolean;
}

export const CreateNote = ({ isEdit = false }: Props) => {
  const { id } = useParams();
  const [note, setNote] = useState<Note>();

  useEffect(() => {
    const filteredNote: Note = notes.filter((note: Note) => note.id === id)[0];
    setNote(filteredNote);
  }, [id]);

  return (
    <main className="w-full flex-1 max-h-dvh h-full  bg-surface-2  min-h-dvh">
      <div>
        <PageHeader title="All Notes" isLargeHidden />
      </div>
      <div className="flex-1 flex h-[calc(100vh-81px-44px)] sm:h-[calc(100vh-81px-74px)] lg:h-[calc(100vh-81px)]">
        {/* Left Bar  */}
        <div className="hidden lg:block">
          <NotesLeftMenu archived={note?.isArchived} />
        </div>

        {/* Create Form  */}
        <div className="flex-1 text-primary-text">
          <NoteForm isEdit={isEdit} note={note} />
        </div>

        {/* Right Bar  */}
        <div className="px-4 hidden lg:block text-primary-text lg:w-[291px] lg:pl-8 lg:h-full pt-5 lg:border-l border-neutral-200 dark:border-neutral-800"></div>
      </div>
    </main>
  );
};
