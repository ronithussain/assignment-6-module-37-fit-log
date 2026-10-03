"use client";

import { signIn } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { useState } from "react";
interface SignInFromData {
  email: string;
  password: string;
}
export default function SignInPage() {
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(
      formData.entries(),
    ) as unknown as SignInFromData;

    // console.log(data, 'the data is');

    const { data: resData, error } = await signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });

    console.log(resData, error, "after sign in data");
  };

  return (
    <div className="min-h-screen px-4 py-8 flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Login Card */}
        <div className="rounded-2xl border border-gray-200 p-6 shadow-lg sm:p-8">
          {/* Header */}
          <div className="mb-7 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-200">
              <span className="text-xl">🔐</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-200 sm:text-3xl">
              Welcome Back
            </h2>

            <p className="mt-2 text-sm text-gray-300">
              Sign in to your account to continue
            </p>
          </div>

          {/* Login Form */}
          <Form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>
            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }

                return null;
              }}
            >
              <Label className="font-medium">Email Address</Label>

              <Input placeholder="john@example.com" className="w-full" />

              <FieldError />
            </TextField>

            {/* Password */}
            <TextField
              className="w-full"
              name="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }

                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }

                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }

                return null;
              }}
            >
              <div className="flex items-center justify-between">
                <Label className="font-medium">Password</Label>

                <a
                  href="/forgot-password"
                  className="text-xs font-medium text-blue-600 hover:text-blue-700 hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <InputGroup>
                <InputGroup.Input
                  className="w-full "
                  type={isVisible ? "text" : "password"}
                />
                <InputGroup.Suffix className="pe-0">
                  <Button
                    isIconOnly
                    aria-label={isVisible ? "Hide password" : "Show password"}
                    size="sm"
                    variant="ghost"
                    onPress={() => setIsVisible(!isVisible)}
                  >
                    {isVisible ? (
                      <Eye className="size-4" />
                    ) : (
                      <EyeSlash className="size-4" />
                    )}
                  </Button>
                </InputGroup.Suffix>
              </InputGroup>
              <Description>
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError />
            </TextField>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <Button type="submit" className="flex-1">
                <Check className="size-4" />
                Sign In
              </Button>

              <Button type="reset" variant="secondary" className="flex-1">
                Reset
              </Button>
            </div>
          </Form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200" />

            <span className="text-xs text-gray-400">OR</span>

            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* Sign Up */}
          <p className="text-center text-sm text-gray-500">
            Don t have an account?{" "}
            <a
              href="/sign-up"
              className="font-semibold text-blue-600 hover:text-blue-700 hover:underline"
            >
              Create an account
            </a>
          </p>
        </div>

        {/* Security Message */}
        <p className="mt-5 text-center text-xs text-gray-400">
          🔒 Your information is securely protected
        </p>
      </div>
    </div>
  );
}
