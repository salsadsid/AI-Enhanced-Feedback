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
import { InfoIcon } from "lucide-react";
import { SubmitHandler } from "react-hook-form";
import useFeedbackForm from "./useFeedbackForm.hook";
type FeedbackFormProps = {
  message: string;
  type: string;
};
export default function FeedbackForm() {
  const renderFeedbackFormProps = useFeedbackForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = renderFeedbackFormProps;

  console.log(errors);
  const onSubmit: SubmitHandler<FeedbackFormProps> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="">
          <Textarea
            {...register("message", {
              required: {
                value: true,
                message: "Message is required",
              },
            })}
            className="resize-none text-base"
            placeholder="Message"
            rows={5}
            cols={60}
          />
          {errors.message && (
            <span className="text-red-500 text-sm mt-1 font-medium flex items-center gap-2">
              <InfoIcon className="w-4 h-4" /> {errors.message.message}
            </span>
          )}
        </div>

        <div>
          <Select
            defaultValue="bug"
            {...register("type", {
              required: {
                value: true,
                message: "Type is required",
              },
            })}
            name="type"
          >
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bug">Bug</SelectItem>
              <SelectItem value="idea">Idea</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.type && (
            <span className="text-red-500">{errors.type.message}</span>
          )}
        </div>
        <Button type="submit" className="">
          Submit
        </Button>
      </form>
    </div>
  );
}
