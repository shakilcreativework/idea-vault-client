"use client";

import { useState } from "react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/shared/Container";
import { useRouter } from "next/navigation";
import { FaMagic } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { error } from "better-auth/api";

const SignUpPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const userData = Object.fromEntries(formData.entries());
      console.log(userData);

      // signup with email and password
      const { data, error } = await authClient.signUp.email({
        ...userData,
      });

      console.log("data", data, 'error', error);

      if(error){
        toast.error(error.message || 'signup failed!');
        return;
      }

      toast.success("Account created successfully!");

      router.push("/login");
    } catch {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  // google signup and login
  const handleGoogleSignIn = async () => {
    try{
      const data = await authClient.signIn.social({
        provider: "google",
      });
      console.log(data);

    }catch{
      toast.error(error.message || "Google Signup failed!");
    }
  };

  return (
    <div className="min-h-dvh py-20 flex flex-col justify-center items-center bg-[#F8FAFD]">
      <Container>
        <div className=" flex flex-col items-center bg-white p-6 lg:p-8 rounded-3xl shadow-md">

          {/* Header */}
          <div className="mb-10 flex flex-col items-center space-y-3">
            <div className="flex justify-center items-center rounded-full w-14 h-14 bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))]">
              <FaMagic className="text-white" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-[#0C2842] text-2xl lg:text-3xl font-bold">
                Create your account
              </h3>
              <p className="text-[#6B7280] text-sm">
                Join thousands of founders sharing what they&apos;re building.
              </p>
            </div>
          </div>

          {/* Form */}
          <Form className="flex flex-col w-66 sm:w-96 md:max-w-md gap-4" onSubmit={onSubmit}>

            <TextField isRequired name="name">
              <Label>Name</Label>
              <Input
                placeholder="Your Name" />
              <FieldError />
            </TextField>

            <TextField isRequired name="email" type="email">
              <Label>Email</Label>
              <Input placeholder="you@email.com" />
              <FieldError />
            </TextField>

            <TextField name="image">
              <Label>Photo URL</Label>
              <Input placeholder="https://..." />
              <FieldError />
            </TextField>

            <TextField isRequired name="password" type="password">
              <Label>Password</Label>
              <Input placeholder="Enter your password" />
              <Description>
                Min 8 chars, include uppercase & number
              </Description>
              <FieldError />
            </TextField>

            <div className="flex flex-col gap-4 mt-2">

              <Button
                type="submit"
                isDisabled={loading}
                className="w-full py-3 rounded-2xl font-semibold text-white 
                bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))] 
                shadow-md hover:opacity-90 active:scale-[0.98] transition-all"
              >
                {loading ? "Registering..." : "Register"}
              </Button>

              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-sm text-[#6B7280]">OR</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              <Button
                onClick={handleGoogleSignIn}
                type="button"
                className="w-full py-3 rounded-2xl font-medium 
                bg-[linear-gradient(135deg,oklch(0.97_0.03_280),oklch(0.97_0.04_220))] text-[#6B7280] border border-gray-200 
                transition-all flex items-center justify-center gap-2"
              >
                <Image
                  width={20}
                  height={20}
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                  priority
                />
                Continue with Google
              </Button>

              <p className="text-[#6B7280] font-medium text-sm text-center">
                Already have an account?{" "}
                <Link href="/login" className="text-[#fd7933]">
                  Login
                </Link>
              </p>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default SignUpPage;