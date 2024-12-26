import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "flex justify-center items-center gap-3 px-4 py-2 rounded-lg text-white font-medium trantition-all duration-100 hover:opacity-80 disabled:cursor-not-allowed z-[30]",
  {
    variants: {
      variant: {
        light: "bg-white text-slate-950",
        dark: "bg-black",
        blue: "bg-blue-500",
        red: "bg-red-500",
        green: "bg-green-500",
      },
    },
    defaultVariants: {
      variant: "light",
    },
  }
);
