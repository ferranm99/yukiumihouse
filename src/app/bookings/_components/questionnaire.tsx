"use client";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface QuestionnaireProps {
  onBack: () => void;
}

const Questionnaire = ({ onBack }: QuestionnaireProps) => {
  const [age, setAge] = useState("");
  const [modality, setModality] = useState("");
  const [level, setLevel] = useState("");
  const [experience, setExperience] = useState("");
  const [elevationGain, setElevationGain] = useState("");

  return (
    <div className="p-4">
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
    </div>
  );
};

export default Questionnaire;
