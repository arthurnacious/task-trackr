"use client";
import React from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle, Home, RefreshCcw } from "lucide-react";

interface ErrorPageProps {
  statusCode?: number;
  title?: string;
  description?: string;
}

const getErrorDetails = (statusCode: number) => {
  switch (statusCode) {
    case 404:
      return {
        title: "Page Not Found",
        description: "Oops! The page you're looking for doesn't exist.",
      };
    case 500:
      return {
        title: "Internal Server Error",
        description:
          "Sorry, something went wrong on our end. We're working to fix it.",
      };
    default:
      return {
        title: "An Error Occurred",
        description:
          "We encountered an unexpected error. Please try again later.",
      };
  }
};

const ErrorPage: React.FC<ErrorPageProps> = ({
  statusCode = 500,
  title,
  description,
}) => {
  const router = useRouter();
  const errorDetails = statusCode
    ? getErrorDetails(statusCode)
    : { title, description };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader>
          <div className="flex items-center justify-center mb-4">
            <AlertCircle className="h-12 w-12 text-red-500" />
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            {errorDetails.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-600">
            {errorDetails.description}
          </p>
          {statusCode && (
            <p className="text-center text-sm text-gray-500 mt-2">
              Error Code: {statusCode}
            </p>
          )}
        </CardContent>
        <CardFooter className="flex justify-center space-x-4">
          <Button variant="outline" onClick={() => router.push("/")}>
            <Home className="mr-2 h-4 w-4" />
            Go Home
          </Button>
          <Button variant="default" onClick={() => router.reload()}>
            <RefreshCcw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ErrorPage;
