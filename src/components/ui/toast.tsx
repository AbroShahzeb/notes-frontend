import { toast } from "sonner";
import clsx from "clsx";
import { IconCheckCircle, IconCross } from "../../assets/svgAssets";

const customToastStyles = {
  success: {
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
  },
  error: {
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
  },
  info: {
    backgroundColor: "#2196f3",
    color: "white",
    border: "none",
  },
};

export const successToast = (
  title: string,
  description?: string,
  action?: { label: string; onClick: () => void }
) => {
  toast.custom((t) => (
    <div
      className={clsx(
        "w-full max-w-sm p-2 rounded-lg shadow flex items-center justify-between gap-3",
        "bg-white text-primary-text dark:bg-neutral-900 "
      )}
    >
      <div className="flex flex-col gap-1">
        <p className="font-semibold">{title}</p>
        {description && (
          <div className="flex items-center gap-2">
            <IconCheckCircle />
            <p className="text-xs  text-primary opacity-80">{description}</p>
          </div>
        )}
      </div>
      <div>
        <div className="flex items-center gap-2">
          {action && (
            <button
              onClick={() => {
                action.onClick();
                toast.dismiss(t);
              }}
              className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              {action.label}
            </button>
          )}
          <button
            onClick={() => toast.dismiss(t)}
            className="text-neutral-500 flex items-center justify-center hover:text-neutral-700 dark:hover:text-neutral-300"
          >
            <IconCross width={16} height={16} />
          </button>
        </div>
      </div>
    </div>
  ));
};

export const errorToast = (title: string, description: string) => {
  toast.error(
    <div className="font-inter">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>,
    {
      style: customToastStyles.error,
    }
  );
};

export const infoToast = (title: string, description: string) => {
  toast.info(
    <div className="font-inter">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>,
    {
      style: customToastStyles.info,
    }
  );
};
