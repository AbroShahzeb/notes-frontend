interface Props {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  selected: boolean;
  setSelected: (selected: string) => void;
  value: string;
}

export const Option = ({
  title,
  subtitle,
  icon,
  selected,
  setSelected,
  value,
}: Props) => {
  return (
    <div
      onClick={() => setSelected(value)}
      className={`flex items-center justify-between p-4 cursor-pointer gap-4 rounded-xl border border-neutral-200 dark:border-neutral-800 ${
        selected ? "bg-neutral-100 dark:bg-neutral-800" : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="size-10 flex items-center text-primary-text justify-center rounded-xl border border-neutral-200 dark:border-neutral-800 bg-surface-2">
          {icon}
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-preset-4 font-medium text-primary-text">{title}</p>
          <p className="text-preset-5 text-neutral-700 dark:text-neutral-300">
            {subtitle}
          </p>
        </div>
      </div>

      <div>
        <RadioButton selected={selected} />
      </div>
    </div>
  );
};

export const RadioButton = ({ selected }: { selected: boolean }) => {
  return (
    <div
      className={`w-4 h-4 rounded-full bg-surface-2 ${
        selected
          ? "border-[4px] border-blue-500 "
          : "border-4 border-neutral-200 dark:border-neutral-800"
      }`}
    ></div>
  );
};
