import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Rating() {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  return (
    <div className="flex">
      {Array(rating)
        .fill()
        .map((e, i) => (
          <StarIcon key={i} className="h-5 text-yellow-500" />
        ))}
    </div>
  );
}

export default Rating;
