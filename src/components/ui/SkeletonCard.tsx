import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "./skeleton";
function SkeletonCard() {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="flex-row gap-4 items-center">
        <Skeleton className="w-12 h-12" />
        <Skeleton className="h-6 flex-grow" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 mt-4 flex-grow" />
        <Skeleton className="h-4 mt-4 flex-grow" />
        <Skeleton className="h-4 mt-4 w-1/2 " />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-10 w-28 flex-grow" />
      </CardFooter>
    </Card>
  );
}

export default SkeletonCard;
