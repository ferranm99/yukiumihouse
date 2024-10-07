"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { QuestionnaireSchema } from "@/schemas";
/* import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"; */
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { booking } from "@actions/booking";

enum Tours {
  Kamikawa,
  Furano,
  DayTours,
  SurfTour,
}

interface QuestionnaireProps {
  onBack: () => void;
  tour: Tours;
  selectedSlot: string;
}

const Questionnaire = ({ onBack, selectedSlot, tour }: QuestionnaireProps) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof QuestionnaireSchema>>({
    resolver: zodResolver(QuestionnaireSchema),
  });

  const onSubmit = (data: z.infer<typeof QuestionnaireSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      booking(data, selectedSlot, tour)
        .then((response) => {
          if (response?.error) {
            setError(response.error);
          }
          if (response?.success) {
            setSuccess(response.success);
          }
        })
        .catch((error) => {
          console.error("Error submitting questionnaire:", error);
          setError("Something went wrong. Please try again!");
        });
    });
  };

  return (
    <div>
      <div className="flex flex-col mt-2 ml-3 gap-2">
        <h2 className="text-2xl font-semibold">Questionnaire</h2>
        <h4 className="text-sm">
          For client safety, we require a minimum skill level for the tour's
          high-level descents.
        </h4>
        {/* <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              onTouchStart={handleTouchStart}
              className="flex items-center justify-center text-[0.75rem] font-semibold rounded-full border-[1px] w-[0.9rem] h-[0.9rem] border-black border-dashed"
            >
              ?
            </TooltipTrigger>
            <TooltipContent className="w-80" sideOffset={4}>
              <p className="rounded-md border-gray-700 border-[1px] p-1 border-dashed text-gray-800">
                For client safety, we require a minimum skill level for the
                tour's high-level descents.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider> */}
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-4 space-y-6">
        <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="Peter Garcia"
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="example@example.com"
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Where are you from?</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="Type your country"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    type="number"
                    placeholder="Type your age"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="modality"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Modality</FormLabel>
                <Select
                  {...field}
                  disabled={isPending}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your modality" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Snowboard">Snowboard</SelectItem>
                    <SelectItem value="Ski">Ski</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="level"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Level</FormLabel>
                <Select
                  {...field}
                  disabled={isPending}
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your level" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Advance">Advanced</SelectItem>
                    <SelectItem value="Expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Backcountry ski experience</FormLabel>
                <FormControl>
                  <textarea
                    {...field}
                    disabled={isPending}
                    placeholder="Tell us what's your experience"
                    className="p-2 border rounded w-full text-sm"
                    rows={3}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="elevationGain"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Average elevation gain per day (in meters)
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    type="number"
                    placeholder="Type your elevation gain"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={error} />
          <FormSuccess message={success} />
          <div className="flex justify-end">
            <button
              onClick={onBack}
              className="border-black border-[1px] text-black p-2 rounded hover:bg-slate-100"
            >
              Back
            </button>
            <button
              type="submit"
              className="ml-2 bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
              disabled={isPending}
            >
              Submit
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Questionnaire;
