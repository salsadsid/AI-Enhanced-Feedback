"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { InfoIcon } from "lucide-react";
import { useState } from "react";
import { Controller, SubmitHandler } from "react-hook-form";
import useFeedbackForm from "./useFeedbackForm.hook";

// Define the FeedbackFormProps type
type FeedbackFormProps = {
  feedback: string;
  type: string;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

// Updated mutation function to handle FeedbackFormProps data
const postFeedback = async (data: FeedbackFormProps) => {
  const response = await axios.post(`${API_URL}api/feedback`, data);
  return response.data;
};

export default function FeedbackForm() {
  const [aiResponse, setAiResponse] = useState("");
  const renderFeedbackFormProps = useFeedbackForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = renderFeedbackFormProps;

  // Ensure mutation expects FeedbackFormProps as input type
  const mutation = useMutation({
    mutationFn: postFeedback, // Use the updated mutation function.
    onSuccess: (data) => {
      setAiResponse(data.aiResponse);
    },
  });

  // Submit handler for the form
  const onSubmit: SubmitHandler<FeedbackFormProps> = (data) => {
    console.log(data);
    const reqData = {
      feedback: data.feedback,
      type: data.type,
    };

    mutation.mutate(reqData); // Correctly pass the data to mutation
  };

  console.log(mutation);

  // Render the form
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="">
          <Textarea
            {...register("feedback", {
              required: {
                value: true,
                message: "Feedback is required",
              },
            })}
            className="resize-none text-base"
            placeholder="Please enter your feedback here"
            rows={5}
            cols={60}
          />
          {errors.feedback && (
            <span className="text-red-500 text-sm mt-1 font-medium flex items-center gap-2">
              <InfoIcon className="w-4 h-4" /> {errors.feedback.message}
            </span>
          )}
        </div>

        <div>
          <label className="text-base mb-1 inline-block font-medium">
            Select a type
          </label>
          <Controller
            control={renderFeedbackFormProps.control}
            name="type"
            rules={{ required: "Type is required" }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger {...field}>
                  <SelectValue placeholder="Select a type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bug">Bug</SelectItem>
                  <SelectItem value="idea">Idea</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.type && (
            <span className="text-red-500">{errors.type.message}</span>
          )}
        </div>
        {
          // Display success message if mutation is successful
          mutation.isSuccess && (
            <span className="text-green-500 text-lg font-medium">
              Feedback submitted successfully! 🚀
            </span>
          )
        }
        {
          // Display error message if mutation fails
          mutation.isError && (
            <span className="text-red-500 flex gap-2 items-center text-base font-medium">
              <InfoIcon className="w-4 h-4" /> An error occurred. Please try
              again later.
            </span>
          )
        }
        <Button
          type="submit"
          disabled={mutation.isPending}
          size={"lg"}
          className="text-lg"
        >
          {mutation.isPending ? "Submitting..." : "Submit"}
        </Button>
        {aiResponse && (
          <div className="text-lg max-w-xl font-medium bg-gray-100 p-4 rounded-lg ">
            <p className="text-blue-500">AI Response: ✈️</p>
            <div
              dangerouslySetInnerHTML={{ __html: aiResponse }}
              className="leading-8"
            ></div>
          </div>
        )}
      </form>
    </div>
  );
}
