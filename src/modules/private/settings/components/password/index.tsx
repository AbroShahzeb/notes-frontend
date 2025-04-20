import { useForm } from "react-hook-form";
import { Button } from "../../../../../components/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ChangePasswordSchema,
  changePasswordSchema,
} from "../../../../../schema/changePasswordSchema";
import { Input } from "../../../../../components";
import { EyeClose, EyeOpen, LogoutIcon } from "../../../../../assets/svgAssets";
import { useState } from "react";
import { Links } from "../links";
import { Link } from "react-router-dom";
import { PageHeader } from "../../../../../layout/components/pageHeader";
import ROUTES from "../../../../../constants/routes";

export const PasswordSettings = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordSchema>({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    resolver: zodResolver(changePasswordSchema),
  });

  const [isOldPasswordVisible, setIsOldPasswordVisible] = useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const onSubmit = (data: ChangePasswordSchema) => {
    console.log(data);
  };
  return (
    <div className="w-full flex-1 max-h-dvh h-full bg-surface-2 ">
      <PageHeader title="Settings" />
      <div className="flex flex-1 h-[calc(100vh-81px)]">
        <div className="hidden pl-8 py-5 pr-4 border-r border-neutral-200 dark:border-neutral-800 lg:flex flex-col gap-2 w-[260px] h-full">
          <Links />
          <Link
            to={ROUTES.SIGNIN}
            className="flex items-center gap-2 py-2.5 text-preset-4 text-secondary-text px-4 hover:bg-blue-50 dark:hover:bg-neutral-800 rounded-lg "
          >
            <span>
              <LogoutIcon />
            </span>
            <span>Logout</span>
          </Link>
        </div>

        <div className="flex-1 rounded-t-xl ">
          <div className="p-4 md:p-8 max-w-[528px] flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h2 className="text-preset-3 text-primary-text font-semibold">
                Change Password
              </h2>
            </div>

            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                postIcon={
                  <span
                    className="text-primary-text"
                    onClick={() =>
                      setIsOldPasswordVisible((prev: boolean) => !prev)
                    }
                  >
                    {isOldPasswordVisible ? (
                      <EyeOpen width={20} height={20} />
                    ) : (
                      <EyeClose width={20} height={20} />
                    )}
                  </span>
                }
                label="Old Password"
                type={isOldPasswordVisible ? "text" : "password"}
                error={errors.oldPassword?.message}
                registerProps={register("oldPassword")}
              />

              <Input
                postIcon={
                  <span
                    className="text-primary-text"
                    onClick={() =>
                      setIsNewPasswordVisible((prev: boolean) => !prev)
                    }
                  >
                    {isNewPasswordVisible ? (
                      <EyeOpen width={20} height={20} />
                    ) : (
                      <EyeClose width={20} height={20} />
                    )}
                  </span>
                }
                label="New Password"
                type={isNewPasswordVisible ? "text" : "password"}
                error={errors.newPassword?.message}
                registerProps={register("newPassword")}
                hint={
                  errors.newPassword?.message ? "" : "At least 8 characters"
                }
              />

              <Input
                postIcon={
                  <span
                    className="text-primary-text"
                    onClick={() =>
                      setIsConfirmPasswordVisible((prev: boolean) => !prev)
                    }
                  >
                    {isConfirmPasswordVisible ? (
                      <EyeOpen width={20} height={20} />
                    ) : (
                      <EyeClose width={20} height={20} />
                    )}
                  </span>
                }
                label="Confirm New Password"
                type={isConfirmPasswordVisible ? "text" : "password"}
                error={errors.confirmPassword?.message}
                registerProps={register("confirmPassword")}
              />

              <div className="flex justify-end w-full">
                <Button label="Save Password" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
