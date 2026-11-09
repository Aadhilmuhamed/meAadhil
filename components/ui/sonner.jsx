"use client"

import { Toaster as Sonner } from "sonner"

function Toaster(props) {
  return (
    <Sonner
      theme="light"
      position="bottom-center"
      toastOptions={{
        classNames: {
          toast:
            "!rounded-2xl !border !border-emerald-300 !bg-toast !text-neutral-900 !font-sans !shadow-lg",
          description: "!text-neutral-600",
          error: "!border-rose-300 !bg-rose-50",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
