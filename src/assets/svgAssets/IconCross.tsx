interface Props {
  width?: number;
  height?: number;
}

export const IconCross = ({ width = 24, height = 24 }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m6 6 12 12M18 6 6 18"
      />
    </svg>
  );
};
