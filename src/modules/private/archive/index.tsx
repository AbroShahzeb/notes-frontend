import { NotesLeftMenu } from "../../../components";
import { PageHeader } from "../../../layout/components/pageHeader";

export const Archive = () => {
  return (
    <div className="w-full flex-1 max-h-dvh h-full  bg-surface-2">
      <PageHeader title="Archived Notes" />
      <div className="flex-1 h-[calc(100vh-81px-44px)] sm:h-[calc(100vh-81px-74px)] lg:h-[calc(100vh-81px)]">
        <NotesLeftMenu archived />
      </div>
    </div>
  );
};
