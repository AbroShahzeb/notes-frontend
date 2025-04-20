import { useSearchParams } from "react-router-dom";
import { PageHeader } from "../../../layout/components/pageHeader";

export const Notes = () => {
  const [searchParams] = useSearchParams();
  console.log("searchParams", searchParams.get("query"));
  return (
    <main className="w-full flex-1 max-h-dvh h-full  bg-surface-2  min-h-dvh">
      <div>
        <PageHeader title="All Notes" />
      </div>
      <div className="flex items-center justify-center">Notes</div>
    </main>
  );
};
