import { PageHeader } from "../../../layout/components/pageHeader";

export const Search = () => {
  return (
    <main className="w-full flex-1 max-h-dvh h-full  bg-surface-2  min-h-dvh">
      <div>
        <PageHeader title="Search" />
      </div>
      <div className="flex items-center justify-center">Search</div>
    </main>
  );
};
