import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AlertCircle, Badge, CheckCircle2, Clock } from "lucide-react";

interface Props {
  tasks: {
    id: number;
    title: string;
    status: string;
    priority: string;
    dueDate: string;
    assignee: string;
  }[];
}

const getPriorityColor = (priority: string) => {
  switch (priority.toLowerCase()) {
    case "low":
      return "bg-blue-500";
    case "medium":
      return "bg-yellow-500";
    case "high":
      return "bg-orange-500";
    case "critical":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

const getStatusIcon = (status: string) => {
  switch (status.toLowerCase()) {
    case "completed":
      return <CheckCircle2 className="h-5 w-5 text-green-500" />;
    case "in progress":
      return <Clock className="h-5 w-5 text-yellow-500" />;
    case "to do":
      return <AlertCircle className="h-5 w-5 text-blue-500" />;
    default:
      return null;
  }
};

const TableView: FC<Props> = ({ tasks }) => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Tasks Table</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Assignee</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell className="font-medium">{task.title}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    {getStatusIcon(task.status)}
                    <span className="ml-2">{task.status}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    className={`${getPriorityColor(task.priority)} text-white`}
                  >
                    {task.priority}
                  </Badge>
                </TableCell>
                <TableCell>{task.dueDate}</TableCell>
                <TableCell>{task.assignee}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default TableView;
