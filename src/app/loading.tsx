import SkeletonCard from "@/components/ui/SkeletonCard";
import React from "react";

function Loading() {
  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
          return <SkeletonCard key={i} />;
        })}
      </div>
    </main>
  );
}

export default Loading;
