"use client";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ContactUsSchema } from "@/schemas";

const ContactForm: React.FC = () => {
  const form = useForm<z.infer<typeof ContactUsSchema>>({
    resolver: zodResolver(ContactUsSchema),
  });

  return (
    <Form {...form}>
      <form
        action="https://formsubmit.co/yukiumihouse@gmail.com"
        method="POST"
        target="_parent"
        className="p-4 space-y-6 w-[92%] md:w-[80%] lg:w-[70%] xl:w-[50%] 2xl:w-[40%]"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your name *</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Your name"
                  required
                  type="text"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email *</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="example@example.com"
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <FormControl>
                  <textarea
                    {...field}
                    placeholder="Your message here..."
                    className="p-2 border rounded w-full text-sm"
                    required
                    rows={15}
                  />
                </FormControl>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="ml-2 bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
          >
            Submit
          </button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;