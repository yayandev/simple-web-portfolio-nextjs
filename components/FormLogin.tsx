"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { SyntheticEvent, useState } from "react";

const FormLogin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const url = searchParams.get("callbackUrl");

  const callbackUrl = url || "/";

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    const res: any = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
    });

    if (!res?.error) {
      router.push(callbackUrl);
    } else {
      setError("Email atau password salah");
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="max-w-sm mx-auto space-y-4 p-4 sm:border text-center"
        >
          <h1 className="text-xl sm:text-2xl font-bold">Sign In</h1>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <input
            type="email"
            required
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            className="w-full p-3 border focus:outline-none"
            placeholder="Email"
          />
          <input
            type="password"
            required
            value={values.password}
            onChange={(e) => setValues({ ...values, password: e.target.value })}
            className="w-full p-3 border focus:outline-none"
            placeholder="Password"
          />
          <button
            disabled={isLoading}
            type="submit"
            className="p-3 w-full bg-slate-900 text-white disabled:bg-slate-700"
          >
            {isLoading ? "Processing..." : "Login"}
          </button>
          <Link href="/" className="text-sm text-slate-600 inline-block">
            Back to home
          </Link>
        </form>
      </div>
    </>
  );
};

export default FormLogin;
