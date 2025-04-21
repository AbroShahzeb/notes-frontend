import notes from "../../../../../data";
import { NoteCard } from "../noteCard";

interface Props {
  archived?: boolean;
}

export const NotesList = ({ archived = false }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      {notes
        .filter((note: Note) => note.isArchived === archived)
        .map((note: Note, index: number) => (
          <>
            <NoteCard
              key={index}
              id={note.id}
              title={note.title}
              tags={note.tags}
              lastEdited={note.lastEdited}
            />
            {index < notes.length && (
              <div className="h-[1px] w-full bg-neutral-200 dark:bg-neutral-800"></div>
            )}
          </>
        ))}
    </div>
  );
};
