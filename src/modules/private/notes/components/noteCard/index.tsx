import { Link, useParams } from "react-router-dom";
import { Tag } from "../../../../../components";
import ROUTES from "../../../../../constants/routes";

interface Props {
  id: string;
  title: string;
  tags: ITag[];
  updatedAt: string;
}

export interface ITag {
  _id: string;
  name: string;
}

export const NoteCard = ({ id, title, tags, updatedAt }: Props) => {
  const { id: currentId } = useParams();

  return (
    <Link
      to={ROUTES.NOTE_DETAILS_LINK(id)}
      className={`flex flex-col p-2 rounded-md gap-3 text-primary-text ${
        id === currentId ? "bg-neutral-100 dark:bg-neutral-800" : ""
      }`}
    >
      <h3 className="text-preset-3">{title}</h3>
      <div className="flex flex-wrap items-center gap-1">
        {tags.map((tag: ITag) => (
          <Tag tag={tag.name} key={tag._id} />
        ))}
      </div>
      <div className="text-preset-5 text-secondary-text">
        {new Date(updatedAt).toLocaleDateString()}
      </div>
    </Link>
  );
};
