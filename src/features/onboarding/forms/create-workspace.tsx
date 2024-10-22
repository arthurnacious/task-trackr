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
import { createTenant, joinTenant } from "@/features/tenants/server/functions";
import { ArrowRight, Building2 } from "lucide-react";
import { FC } from "react";
import { toast } from "sonner";
import { useTenantStore } from "@/store/tenant";
import { useRouter } from "next/navigation";

interface Props {
  userId?: string;
  setStep: React.Dispatch<React.SetStateAction<string>>;
}

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Workspace Name must be at least 2 characters.",
  }),
});

const CreateWorkspaceForm: FC<Props> = ({ userId, setStep }) => {
  const { changeTenant } = useTenantStore();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!userId) {
      toast("No user available.", {
        description: "We cant find your user information",
      });
      return;
    }

    const newTenant = await createTenant({ json: values });
    await joinTenant({ userId: userId, tenantId: newTenant.id });

    toast("Workspace created successfully.");
    changeTenant(newTenant.slug);
    router.push("/dashboard");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Workspace Name</FormLabel>
              <FormControl>
                <Input placeholder="Workspace Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Alert>
          <Building2 className="h-4 w-4" />
          <AlertDescription>
            This will create a new workspace where you can invite team members
            and manage your organization.
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
          <Button type="submit" isLoading={form.formState.isSubmitting}>
            Create Workspace
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateWorkspaceForm;
