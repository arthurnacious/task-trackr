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

interface Props {}

const tenats = [
  { id: 1, name: "Micheal Solutions", slug: "micheal-solutions" },
  { id: 2, name: "Bomba Bay", slug: "bomba-bay" },
  { id: 3, name: "Surf works", slug: "surf-works" },
  { id: 4, name: "Turf Lagte", slug: "turf-lagte" },
];

const TenantSelect: FC<Props> = ({}) => {
  return (
    <div className="mt-5 md:mt-5">
      <Select value="micheal-solutions">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Tenant" />
        </SelectTrigger>
        <SelectContent>
          {tenats.map(({ id, name, slug }) => (
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
    </div>
  );
};

export default TenantSelect;
