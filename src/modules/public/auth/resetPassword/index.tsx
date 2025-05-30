import { useEffect, useState } from "react";
import { EyeClose, EyeOpen, Logo } from "../../../../assets/svgAssets";
import { Input } from "../../../../components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../../components/button";
import {
  resetPasswordSchema,
  ResetPasswordSchema,
} from "../../../../lib/validations";
import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "../../../../api/auth";
import ROUTES from "../../../../constants/routes";
import { errorToast, successToast } from "../../../../components/ui/toast";
import { useNavigate, useParams } from "react-router-dom";
import { AxiosError } from "axios";

interface ErrorResponse {
  message: string;
}

export const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordSchema>({
    defaultValues: {
      password: "",
      passwordConfirmation: "",
    },
    resolver: zodResolver(resetPasswordSchema),
  });

  const { mutate: resetPasswordMutation, isPending } = useMutation({
    mutationFn: resetPassword,
    onSuccess: (data) => {
      console.log("Data", data);
      successToast("Success", data.message);
      navigate(ROUTES.SIGNIN);
    },
    onError: (err: AxiosError<ErrorResponse>) => {
      errorToast("Error", err?.response?.data?.message || "An error occurred");
    },
  });

  const onSubmit = (data: ResetPasswordSchema) => {
    if (token) {
      resetPasswordMutation({ ...data, token });
    }
  };

  useEffect(() => {
    document.title = "Reset Password | Note";
  }, []);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordConfirmationVisible, setIsPasswordConfirmationVisible] =
    useState(false);
  return (
    <main className="w-full bg-surface min-h-screen flex items-center justify-center py-16 px-4 sm:px-0">
      <div className="px-4 w-full p-12 sm:px-12 bg-neutral-0 dark:bg-neutral-950 dark:border-neutral-800 max-w-[540px]  flex flex-col gap-4 border border-neutral-200 rounded-xl shadow-lg dark:shadow-none">
        <div className="flex justify-center text-primary-text">
          <Logo />
        </div>

        <div className="flex flex-col gap-2 items-center text-center">
          <h2 className="text-preset-1 font-bold text-primary-text">
            Reset Your Password
          </h2>
          <p className="text-preset-4 text-secondary-text">
            Choose a new password to secure your account.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 pt-6"
        >
          <Input
            postIcon={
              <span
                className="text-primary-text"
                onClick={() => setIsPasswordVisible((prev) => !prev)}
              >
                {isPasswordVisible ? (
                  <EyeOpen width={20} height={20} />
                ) : (
                  <EyeClose width={20} height={20} />
                )}
              </span>
            }
            label="New Password"
            type={isPasswordVisible ? "text" : "password"}
            error={errors.password?.message}
            registerProps={register("password")}
            hint={errors.password?.message ? "" : "At least 8 characters"}
          />

          <Input
            postIcon={
              <span
                className="text-primary-text"
                onClick={() =>
                  setIsPasswordConfirmationVisible((prev) => !prev)
                }
              >
                {isPasswordVisible ? (
                  <EyeOpen width={20} height={20} />
                ) : (
                  <EyeClose width={20} height={20} />
                )}
              </span>
            }
            label="Confirm New Password"
            type={isPasswordConfirmationVisible ? "text" : "password"}
            error={errors.passwordConfirmation?.message}
            registerProps={register("passwordConfirmation")}
          />
          <Button
            type="submit"
            label={isPending ? "Resetting password..." : "Reset Password"}
            disabled={isPending}
          />
        </form>
      </div>
    </main>
  );
};
