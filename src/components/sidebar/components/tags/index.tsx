import { TagIcon } from "../../../../assets/svgAssets";

const TAGS = [
  {
    id: 0,
    name: "Education",
  },
  {
    id: 1,
    name: "Work",
  },
  {
    id: 2,
    name: "Personal",
  },
  {
    id: 3,
    name: "Health",
  },
  {
    id: 4,
    name: "Travel",
  },
  {
    id: 5,
    name: "Finance",
  },
];

export const Tags = () => {
  return (
    <div className="mt-2 flex flex-col gap-2 max-h-[calc(100vh-200px)] overflow-y-auto pb-2 ">
      <h3 className="text-secondary-text text-preset-4">Tags</h3>
      {TAGS.map((tag) => (
        <Tag key={tag.id} name={tag.name} />
      ))}
    </div>
  );
};

export const Tag = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center  gap-2 py-2.5 px-3 text-preset-4 text-secondary-text rounded-lg hover:bg-surface cursor-pointer">
      <span className="">
        <TagIcon />
      </span>
      <span className="">{name}</span>
    </div>
  );
};
