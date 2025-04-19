import { useEffect, useState } from "react";
import {
  EyeClose,
  EyeOpen,
  GoogleIcon,
  Logo,
} from "../../../../assets/svgAssets";
import { Input } from "../../../../components";
import useTheme from "../../../../hooks/useTheme";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../../components/button";
import ROUTES from "../../../../constants/routes";
import { signUpSchema, SignUpSchema } from "../../../../schema/signUpSchema";

export const SignUp = () => {
  const { theme } = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpSchema) => {
    console.log(data);
  };

  useEffect(() => {
    document.title = "Sign Up | Note";
  }, []);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <main className="w-full bg-surface min-h-screen flex items-center justify-center py-16 px-4 sm:px-0">
      <div className="px-4 w-full p-12 sm:px-12 bg-neutral-0 dark:bg-neutral-950 dark:border-neutral-800 max-w-[540px]  flex flex-col gap-4 border border-neutral-200 rounded-xl shadow-lg dark:shadow-none">
        <div className="flex justify-center">
          <Logo variant={theme === "dark" ? "dark" : "light"} />
        </div>

        <div className="flex flex-col gap-2 items-center text-center">
          <h2 className="text-preset-1 font-bold text-primary-text">
            Create Your Account
          </h2>
          <p className="text-preset-4 text-secondary-text">
            Sign up to start organizing your notes and boost your productivity.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 pt-6"
        >
          <Input
            placeholder="email@@example.com"
            label="Email Address"
            registerProps={register("email")}
            error={errors.email?.message}
          />
          <Input
            postIcon={
              <span onClick={() => setIsPasswordVisible((prev) => !prev)}>
                {isPasswordVisible ? (
                  <EyeOpen
                    width={20}
                    height={20}
                    color={theme === "dark" ? "#f3f5f8" : "#0E121B"}
                  />
                ) : (
                  <EyeClose
                    width={20}
                    height={20}
                    color={theme === "dark" ? "#f3f5f8" : "#0E121B"}
                  />
                )}
              </span>
            }
            label="Password"
            type={isPasswordVisible ? "text" : "password"}
            error={errors.password?.message}
            registerProps={register("password")}
            hint={errors.password?.message ? "" : "At least 8 characters"}
          />
          <Button type="submit" label="Sign up" />
        </form>

        <div className="mt-4 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-col items-center gap-4">
          <p className="text-preset-4 text-secondary-text">Or Log in with:</p>
          <div className="py-4 px-5 flex items-center justify-center h-12 rounded-xl border border-neutral-300 dark:border-neutral-600 self-stretch">
            <span>
              <GoogleIcon color={theme === "dark" ? "#fff" : "#0E121B"} />
            </span>
            <span className="px-4 text-primary-text">Google</span>
          </div>
        </div>

        <div className="mt-4 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-col items-center gap-4">
          <p className="text-preset-4 text-secondary-text">
            Already have an account?{" "}
            <span className="text-primary-text">
              <Link to={ROUTES.SIGNIN}>Login</Link>
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};
