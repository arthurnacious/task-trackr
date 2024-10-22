import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

// Function to generate random date within a range
const randomDate = (start: Date, end: Date) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )
    .toISOString()
    .split("T")[0];
};

// Generate 100 projects
const projects = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Project ${i + 1}`,
  status: ["Active", "Completed", "Expired"][Math.floor(Math.random() * 3)],
  dueDate: randomDate(new Date(2024, 0, 1), new Date(2026, 11, 31)),
  description: `Description for Project ${i + 1}`,
}));

const ProjectsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Project Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="w-[50px]">Options</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="font-medium">{project.name}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        project.status === "Active"
                          ? "default"
                          : project.status === "Completed"
                          ? "secondary"
                          : "destructive"
                      }
                    >
                      {project.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{project.dueDate}</TableCell>
                  <TableCell>{project.description}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <MoreHorizontal className="h-5 w-5" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectsPage;
