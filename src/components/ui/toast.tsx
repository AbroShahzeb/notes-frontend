import { toast } from "sonner";

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

export const successToast = (title: string, description: string) => {
  toast.success(
    <div className="font-inter">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>,
    {
      style: customToastStyles.success,
    }
  );
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
