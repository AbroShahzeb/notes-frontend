export const Tag = ({ tag }: { tag: string }) => {
  return (
    <div className="text-preset-5 text-primary-text bg-neutral-100 dark:bg-neutral-700 py-0.5 px-1.5 rounded-sm">
      {tag}
    </div>
  );
};
