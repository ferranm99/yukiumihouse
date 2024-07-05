"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
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

interface QuestionnaireProps {
  onBack: () => void;
}

const QuestionnaireSchema = z.object({
  country: z
    .string({
      required_error: "Country is required.",
    })
    .min(2, { message: "Invalid country." })
    .max(200, { message: "Invalid country." }),
  age: z
    .number({ required_error: "Age is required." })
    .int({ message: "Invalid age." })
    .min(18, { message: "You must be at least 18 years old." })
    .max(99, { message: "Invalid age." }),
  modality: z.enum(["Snowboard", "Ski"], {
    required_error: "Please select modality",
  }),
  level: z.enum(["Medium", "Advance", "Expert"], {
    required_error: "Please select level",
  }),
  experience: z
    .string({ required_error: "Experience is required." })
    .min(5, { message: "Please tell us more about your experience" })
    .max(2500, { message: "You exceeded the maximum characters limit." }),
  elevationGain: z
    .number({ required_error: "Elevation gain is required." })
    .int({ message: "Invalid elevation gain." })
    .min(0, { message: "Invalid elevation gain." })
    .max(9000, { message: "Invalid elevation gain." }),
});

const Questionnaire = ({ onBack }: QuestionnaireProps) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  /*   const [country, setCountry] = useState("");
  const [age, setAge] = useState("");
  const [modality, setModality] = useState("");
  const [level, setLevel] = useState("");
  const [experience, setExperience] = useState("");
  const [elevationGain, setElevationGain] = useState(""); */

  const form = useForm<z.infer<typeof QuestionnaireSchema>>({
    resolver: zodResolver(QuestionnaireSchema),
  });

  const onSubmit = (data: z.infer<typeof QuestionnaireSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      // submit form
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
