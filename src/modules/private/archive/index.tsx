import { PageHeader } from "../../../layout/components/pageHeader";

export const Archive = () => {
  return (
    <div className="w-full flex-1 max-h-dvh h-full  bg-surface-2">
      <PageHeader title="Archived Notes" />
      <div className=" flex items-center justify-center ">Archived</div>
    </div>
  );
};
