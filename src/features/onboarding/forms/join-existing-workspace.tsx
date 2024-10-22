"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  getTenantByInviteCode,
  joinTenant,
} from "@/features/tenants/server/functions";
import { ArrowRight, Users } from "lucide-react";
import { FC } from "react";
import { toast } from "sonner";
import { useTenantStore } from "@/store/tenant";
import { useRouter } from "next/navigation";

interface Props {
  userId?: string;
  setStep: React.Dispatch<React.SetStateAction<string>>;
}

const formSchema = z.object({
  inviteCode: z.string().min(10, {
    message: "Invite Code must be at least 10 characters long.",
  }),
});

const JoinExistingWorkspaceForm: FC<Props> = ({ userId, setStep }) => {
  const { changeTenant } = useTenantStore();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inviteCode: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!userId) {
      toast("No user available.", {});
      return;
    }

    const foundTenant = await getTenantByInviteCode({
      inviteCode: values.inviteCode,
    });

    if (!foundTenant) {
      form.setError("inviteCode", {
        message: "Invalid Invite Code",
      });
      return;
    }

    await joinTenant({
      userId,
      tenantId: foundTenant.id,
    });

    toast("Workspace Joined successfully.", {});
    changeTenant(foundTenant.slug);
    router.push("/dashboard");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="inviteCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Invite Code</FormLabel>
                <FormControl>
                  <Input placeholder="Invite Code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Alert>
          <Users className="h-4 w-4" />
          <AlertDescription>
            You&lsquo;ll need an invitation code from your workspace
            administrator to join.
          </AlertDescription>
        </Alert>

        <div className="flex justify-between pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => setStep("choice")}
          >
            Back
          </Button>
          <Button
            type="submit"
            isLoading={form.formState.isSubmitting}
            disabled={
              !form.formState.isValid && form.getValues().inviteCode.length > 10
            }
          >
            Join Workspace
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default JoinExistingWorkspaceForm;
