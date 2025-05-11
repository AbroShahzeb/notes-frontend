import { Link } from "react-router-dom";
import ROUTES from "../../constants/routes";
import { Button } from "../button";
import { NotesList } from "../../modules/private/notes/components";
import { useQuery } from "@tanstack/react-query";
import { getAllNotes } from "../../api/notes";

interface Props {
  archived?: boolean;
}

export const NotesLeftMenu = ({ archived = false }: Props) => {
  console.log("Archived", archived);
  const { data } = useQuery({
    queryKey: ["notes"],
    queryFn: () => getAllNotes(archived),
  });

  const notes = data?.data;

  console.log("Notes in archived I get", notes);

  return (
    <div className="px-4 lg:w-[291px] flex flex-col gap-4 lg:h-[calc(100vh-81px)] overflow-y-auto scrollbar-none lg:pl-8  pt-5 lg:border-r border-neutral-200 dark:border-neutral-800">
      <Link to={ROUTES.CREATE_NOTE} state={{ archived }}>
        <Button label="+ Create New Note" className="hidden lg:flex w-full" />
      </Link>
      {!notes || notes.length <= 0 ? (
        archived ? (
          <EmptyArchiveNotes />
        ) : (
          <EmptyNotes />
        )
      ) : (
        <NotesList archived={archived} notes={notes} />
      )}
    </div>
  );
};

const EmptyNotes = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-primary-text text-preset-4">
        You don’t have any notes yet. Start a new note to capture your thoughts
        and ideas.
      </div>
    </div>
  );
};

const EmptyArchiveNotes = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="text-preset-4 text-primary-text">
        All your archived notes are stored here. You can restore or delete them
        anytime.
      </div>
      <div className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-primary-text text-preset-4">
        No notes have been archived yet. Move notes here for safekeeping, or{" "}
        <Link to={ROUTES.CREATE_NOTE} className="underline">
          create a new note.
        </Link>
      </div>
    </div>
  );
};
