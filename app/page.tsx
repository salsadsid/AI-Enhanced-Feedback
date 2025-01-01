import FeedbackForm from "@/components/form/feedbackForm";

export default function Home() {
  return (
    <div className="grid grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-screen p-4 pb-20 gap-8  font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl mb-4 font-bold text-center">
          AI Enhanced Feedback
        </h1>
        <FeedbackForm />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
