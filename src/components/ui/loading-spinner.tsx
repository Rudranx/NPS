import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  text?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  className,
  text,
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  return (
    <div
      className={cn("flex items-center justify-center space-x-2", className)}
    >
      <Loader2
        className={cn("animate-spin text-blue-500", sizeClasses[size])}
      />
      {text && (
        <span className="font-medium text-gray-600 text-sm">{text}</span>
      )}
    </div>
  );
};

export default LoadingSpinner;
