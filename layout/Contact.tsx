"use client";
import { set, useForm } from "react-hook-form";
import * as Form from "@radix-ui/react-form";
import { cn } from "@/utils/cn";
import * as Toast from "@radix-ui/react-toast";
import { useState } from "react";
import React from "react";

export function Contact() {
  const [open, setOpen] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    fetch("/api/v1/mail", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          setError(false);
          setMessage("Message sent successfully");
          setOpen(true);
        } else {
          setError(true);
          setMessage("Something went wrong");
          setOpen(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const borderStyles = "border-2 border-purple-400 hover:bg-purple-800";

  const inputStyles = cn(
    "box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-black px-2.5 text-[15px] leading-none text-white shadow-[0_0_0_1px] shadow-black outline-none selection:bg-black selection:text-white hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]",
    borderStyles
  );

  const errorStyle = "text-sm text-red-500";

  return (
    <Toast.Provider>
      <Form.Root
        className="flex gap-4 flex-col max-w-2xl mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Field name="name" placeholder="Name">
          <div className="flex items-baseline justify-between">
            <Form.Label>Name</Form.Label>
            <Form.Message className={errorStyle} match="valueMissing">
              Please enter your name
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className={inputStyles}
              type="text"
              required
              {...register("name")}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field name="email" placeholder="Email">
          <div className="flex items-baseline justify-between">
            <Form.Label>Email</Form.Label>
            <Form.Message className={errorStyle} match="valueMissing">
              Please enter your email
            </Form.Message>
            <Form.Message className={errorStyle} match="typeMismatch">
              Please provide a valid email
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className={inputStyles}
              type="email"
              required
              {...register("email")}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field name="message">
          <div className="flex items-baseline justify-between">
            <Form.Label>Message</Form.Label>
            <Form.Message className={errorStyle} match="valueMissing">
              Please enter your message
            </Form.Message>
          </div>
          <Form.Control asChild>
            <textarea
              className={cn(
                "box-border inline-flex w-full resize-none appearance-none items-center justify-center rounded bg-black p-2.5 text-[15px] leading-none text-white shadow-[0_0_0_1px] shadow-black outline-none selection:bg-black selection:text-white hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]",
                borderStyles
              )}
              placeholder="Message"
              required
              {...register("message")}
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button
            className="bg-purple-800 dark:bg-transparent dark:border-2 dark:border-purple-400 hover:bg-purple-800 hover:scale-105 transition ease-in-out delay-100 rounded-md px-4 py-2 text-white font-bold"
            type="submit"
          >
            Send
          </button>
        </Form.Submit>
      </Form.Root>

      <Toast.Root
        className={cn(
          `grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md bg-white dark:bg-black border-2 border-solid border-purple-500 p-[15px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] [grid-template-areas:_'title_action'_'description_action'] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]`,
          {
            "bg-red-500 dark:bg-red-500": error,
          }
        )}
        open={open}
        onOpenChange={setOpen}
      >
        <Toast.Title className="mb-[5px] text-[15px] font-medium text-slate12 [grid-area:_title]">
          {message}
        </Toast.Title>
        <Toast.Description asChild>
          Thanks for sending me a message. I&pos;ll get back to you as soon as I
          can.
        </Toast.Description>
        <Toast.Action
          className="[grid-area:_action]"
          asChild
          altText="Goto schedule to undo"
        >
          <button className="inline-flex h-[25px] items-center justify-center rounded bg-green2 px-2.5 text-xs font-medium leading-[25px] text-green11 shadow-[inset_0_0_0_1px] shadow-green7 hover:shadow-[inset_0_0_0_1px] hover:shadow-green8 focus:shadow-[0_0_0_2px] focus:shadow-green8">
            Undo
          </button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-2.5 p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]" />
    </Toast.Provider>
  );
}
