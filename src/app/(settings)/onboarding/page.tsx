"use client";
import React, { useState } from "react";
import { Plus, LogIn } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CreateWorkspaceForm from "@/features/onboarding/forms/create-workspace";
import { useSession } from "@/lib/auth-client";
import { Skeleton } from "@/components/ui/skeleton";
import JoinExistingWorkspaceForm from "@/features/onboarding/forms/join-existing-workspace";

const TenantOnboarding = () => {
  const [step, setStep] = useState("choice");
  const { data: session, isPending } = useSession();

  return (
    <>
      {step === "choice" && (
        <Card>
          <CardHeader>
            <CardTitle>Welcome!</CardTitle>
            <CardDescription>
              Would you like to create a new workspace or join an existing one?
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              onClick={() => setStep("create")}
              variant="outline"
              className="w-full h-24 flex flex-col items-center justify-center space-y-2"
            >
              <Plus className="h-6 w-6" />
              <div>
                <div className="font-semibold">Create new workspace</div>
                <div className="text-sm text-gray-500">
                  Start fresh with a new organization
                </div>
              </div>
            </Button>

            <Button
              onClick={() => setStep("join")}
              variant="outline"
              className="w-full h-24 flex flex-col items-center justify-center space-y-2"
            >
              <LogIn className="h-6 w-6" />
              <div>
                <div className="font-semibold">Join existing workspace</div>
                <div className="text-sm text-gray-500">
                  Connect with your team
                </div>
              </div>
            </Button>
          </CardContent>
        </Card>
      )}

      {step === "create" && (
        <Card>
          <CardHeader>
            <CardTitle>Create New Workspace</CardTitle>
            <CardDescription>
              Set up your organization&lsquo;s workspace
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isPending ? (
              <div className="space-y-4">
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-20 w-full" />
                <div className="flex justify-between pt-4">
                  <Skeleton className="h-8 w-16" />
                  <Skeleton className="h-8 w-28" />
                </div>
              </div>
            ) : (
              <CreateWorkspaceForm
                setStep={setStep}
                userId={session?.user.id}
              />
            )}
          </CardContent>
        </Card>
      )}

      {step === "join" && (
        <Card>
          <CardHeader>
            <CardTitle>Join Existing Workspace</CardTitle>
            <CardDescription>
              Enter your invitation details below
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isPending ? (
              <div className="space-y-4">
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-20 w-full" />
                <div className="flex justify-between pt-4">
                  <Skeleton className="h-8 w-16" />
                  <Skeleton className="h-8 w-28" />
                </div>
              </div>
            ) : (
              <JoinExistingWorkspaceForm
                setStep={setStep}
                userId={session?.user.id}
              />
            )}
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default TenantOnboarding;
