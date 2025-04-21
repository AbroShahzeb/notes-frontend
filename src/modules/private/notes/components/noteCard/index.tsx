import { Link } from "react-router-dom";
import { Tag } from "../../../../../components";
import ROUTES from "../../../../../constants/routes";

interface Props {
  id: string;
  title: string;
  tags: string[];
  lastEdited: string;
}

export const NoteCard = ({ id, title, tags, lastEdited }: Props) => {
  return (
    <Link
      to={ROUTES.NOTE_DETAILS_LINK(id)}
      className="flex flex-col p-2 rounded-md gap-3 text-primary-text"
    >
      <h3 className="text-preset-3">{title}</h3>
      <div className="flex flex-wrap items-center gap-1">
        {tags.map((tag: string) => (
          <Tag tag={tag} />
        ))}
      </div>
      <div className="text-preset-5 text-secondary-text">{lastEdited}</div>
    </Link>
  );
};
