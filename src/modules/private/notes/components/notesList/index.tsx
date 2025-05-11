import { ITag, NoteCard } from "../noteCard";

type Note = {
  _id: string;
  title: string;
  tags: ITag[];
  content: string;
  updatedAt: string;
  isArchived: boolean;
};

interface Props {
  archived?: boolean;
  notes: Note[];
}

export const NotesList = ({ notes }: Props) => {
  console.log("Notes List", notes);
  return (
    <div className="flex flex-col gap-1">
      {notes?.map((note: Note, index: number) => (
        <>
          <NoteCard
            key={note._id}
            id={note._id}
            title={note.title}
            tags={note.tags}
            updatedAt={note.updatedAt}
          />
          {index < notes.length && (
            <div className="h-[1px] w-full bg-neutral-200 dark:bg-neutral-800"></div>
          )}
        </>
      ))}
    </div>
  );
};
