"use client";
import React, { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getInitials } from "@/lib/helpers/string";
import { useQuery } from "@tanstack/react-query";
import { fetchUsersTenants } from "@/features/store/server/get-users-tenats";
import { Skeleton } from "../ui/skeleton";
import { useTenantStore } from "@/store/tenant";

interface Props {
  isPending: boolean;
  userId?: string;
}

const TenantSelect: FC<Props> = ({ isPending, userId }) => {
  const { tenant, changeTenant } = useTenantStore();
  const getTenants = async () => {
    if (!userId) return [];
    return await fetchUsersTenants(userId);
  };

  const { data: tenants } = useQuery({
    queryKey: ["user-tenants", userId],
    queryFn: getTenants,
    enabled: !isPending,
  });

  console.log("tenants", tenants);

  return (
    <div className="mt-5 md:mt-5">
      {isPending ? (
        <Skeleton className="h-8 w-full" />
      ) : (
        <Select
          defaultValue={tenant ?? undefined}
          onValueChange={(v) => changeTenant(v)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Tenant" />
          </SelectTrigger>
          <SelectContent>
            {tenants &&
              tenants.map(({ id, name, slug }) => (
                <SelectItem value={String(slug)} key={id}>
                  <div className="flex justify-center items-center">
                    <div className="flex items-center justify-center bg-gray-900 size-5 mr-2 rounded-sm font-black text-md py-3 px-4">
                      {getInitials(name)}
                    </div>
                    {name}
                  </div>
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      )}
    </div>
  );
};

export default TenantSelect;
