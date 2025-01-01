"use client";
import { useForm } from "react-hook-form";

type FeedbackFormProps = {
  feedback: string;
  type: string;
};

const useFeedbackForm = () => {
  const renderFeedbackFormProps = useForm<FeedbackFormProps>({
    defaultValues: {
      feedback: "",
      type: "bug",
    },
    mode: "onBlur",
    reValidateMode: "onBlur",
  });
  return renderFeedbackFormProps;
};

export default useFeedbackForm;
