"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { QuestionnaireSchema } from "@/schemas";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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

interface QuestionnaireProps {
  onBack: () => void;
}

const Questionnaire = ({ onBack }: QuestionnaireProps) => {
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
      booking(data)
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-4 space-y-6">
        <div className="flex items-center mb-4 gap-2">
          <h2 className="text-2xl font-semibold">Questionnaire</h2>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="text-[0.55rem] font-bold rounded-full border-[1px] w-[0.88rem] h-[0.88rem] border-black border-dashed">
                  ?
                </button>
              </TooltipTrigger>
              <TooltipContent className="w-80" sideOffset={4}>
                <p className="rounded-md border-gray-700 border-[1px] p-1 border-dashed text-gray-800">
                  To ensure the safety of our clients, we must verify that a
                  certain skill level is met. The tour involves high-level
                  descents that require experience and proficiency.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
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
                  <SelectItem value="Advance">Advance</SelectItem>
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
              <FormLabel>Average elevation gain per day (in meters)</FormLabel>
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

    /*  <form className="p-4">
      <div className="flex items-center mb-4 gap-2">
        <h2 className="text-2xl">Questionnaire</h2>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="text-[0.55rem] font-bold rounded-full border-[1px] w-[0.88rem] h-[0.88rem] border-black border-dashed">
                ?
              </button>
            </TooltipTrigger>
            <TooltipContent className="w-80" sideOffset={4}>
              <p className="rounded-md border-gray-700 border-[1px] p-1 border-dashed text-gray-800">
                To ensure the safety of our clients, we must verify that a
                certain skill level is met. The tour involves high-level
                descents that require experience and proficiency.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Age:</label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Modality:</label>
        <select
          value={modality}
          onChange={(e) => setModality(e.target.value)}
          className="p-2 border rounded w-full"
        >
          <option value="">-- Select one --</option>
          <option value="snowboard">Snowboard</option>
          <option value="ski">Ski</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Level:</label>
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="p-2 border rounded w-full"
        >
          <option value="">-- Select one --</option>
          <option value="medium">Medium</option>
          <option value="advance">Advance</option>
          <option value="expert">Expert</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Backcountry ski experience:</label>
        <textarea
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className="p-2 border rounded w-full"
          rows={3}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Average elevation gain per day:</label>
        <input
          type="text"
          value={elevationGain}
          onChange={(e) => setElevationGain(e.target.value)}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick={onBack}
          className="mt-4 border-black border-[1px] text-black p-2 rounded hover:bg-slate-100"
        >
          Back
        </button>
        <button className="mt-4 ml-2 bg-orange-500 text-white p-2 rounded hover:bg-orange-600">
          Submit
        </button>
      </div>
    </form> */
  );
};

export default Questionnaire;
