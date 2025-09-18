import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showNumber?: boolean;
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
}

const StarRating = ({ 
  rating, 
  maxRating = 5, 
  size = "md", 
  showNumber = true,
  interactive = false,
  onRatingChange
}: StarRatingProps) => {
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  };

  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  };

  const handleStarClick = (starRating: number) => {
    if (interactive && onRatingChange) {
      onRatingChange(starRating);
    }
  };

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[...Array(maxRating)].map((_, index) => {
          const starRating = index + 1;
          const isFilled = starRating <= rating;
          const isHalfFilled = starRating - 0.5 <= rating && starRating > rating;
          
          return (
            <Star
              key={index}
              className={cn(
                sizeClasses[size],
                isFilled ? "text-primary fill-primary" : "text-muted-foreground",
                interactive && "cursor-pointer hover:text-primary transition-colors"
              )}
              onClick={() => handleStarClick(starRating)}
            />
          );
        })}
      </div>
      {showNumber && (
        <span className={cn("text-foreground/70 ml-1", textSizeClasses[size])}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default StarRating;