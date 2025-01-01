"use client";
import { useForm } from "react-hook-form";

type FeedbackFormProps = {
  message: string;
  type: string;
};

const useFeedbackForm = () => {
  const renderFeedbackFormProps = useForm<FeedbackFormProps>({
    defaultValues: {
      message: "",
      type: "bug",
    },
    mode: "onBlur",
    reValidateMode: "onBlur",
  });
  return renderFeedbackFormProps;
};

export default useFeedbackForm;
