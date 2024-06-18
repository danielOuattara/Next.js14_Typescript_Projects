"use client";
import { useEffect } from "react";

// Error components must be Client Components

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <section className="section loading">
      <p>{error.message}</p>
    </section>
  );
}
