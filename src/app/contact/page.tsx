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

const ContactPage: React.FC = () => {
  const form = useForm<z.infer<typeof ContactUsSchema>>({
    resolver: zodResolver(ContactUsSchema),
  });
  return (
    <section className="pt-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-black pb-8 ">Ask Us Anything!</h1>
      <Form {...form}>
        <form
          action="https://formsubmit.co/yukiumihouse@gmail.com"
          method="POST"
          target="_parent"
          className="p-4 space-y-6 w-[30%]"
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
          {/* <FormError message={error} />
        <FormSuccess message={success} /> */}
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
      {/* <form
        action="https://formsubmit.co/yukiumihouse@gmail.com"
        method="POST"
        target="_blank"
      >
        <div className="grunion-field-name-wrap grunion-field-wrap">
          <label className="grunion-field-label name">
            Name<span>*</span>
          </label>
          <input
            type="text"
            name="name"
            value=""
            className="name  grunion-field"
            required
            aria-required="true"
          />
        </div>

        <div className="grunion-field-email-wrap grunion-field-wrap">
          <label
            // for='g8-correoelectrnico'
            className="grunion-field-label email"
          >
            Email<span>*</span>
          </label>
          <input
            type="email"
            name="email"
            id="g8-correoelectrnico"
            value=""
            className="email  grunion-field"
            required
            aria-required="true"
          />
        </div>

        <div className="grunion-field-textarea-wrap grunion-field-wrap">
          <label
            // for='contact-form-comment-g8-message'
            className="grunion-field-label textarea"
          >
            Message
          </label>
          <textarea
            name="message"
            rows={20}
            className="textarea  grunion-field"
          ></textarea>
        </div>

        <div className="wp-block-jetpack-button wp-block-button">
          <button
            className="wp-block-button__link"
            data-id-attr="placeholder"
            type="submit"
          >
            Send
          </button>
        </div>
      </form> */}
    </section>
  );
};

export default ContactPage;
