import PageContainer from "@/components/(app)/page-container";
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
import React from "react";

const tasks = [
  {
    id: 1,
    title: "Implement user authentication",
    status: "In Progress",
    priority: "High",
    dueDate: "2023-10-25",
    assignee: "John Doe",
  },
  {
    id: 2,
    title: "Design new landing page",
    status: "Completed",
    priority: "Medium",
    dueDate: "2023-10-20",
    assignee: "Jane Smith",
  },
  {
    id: 3,
    title: "Optimize database queries",
    status: "To Do",
    priority: "High",
    dueDate: "2023-10-30",
    assignee: "Bob Johnson",
  },
  {
    id: 4,
    title: "Write API documentation",
    status: "In Progress",
    priority: "Low",
    dueDate: "2023-11-05",
    assignee: "Alice Brown",
  },
  {
    id: 5,
    title: "Fix bug in checkout process",
    status: "In Progress",
    priority: "Critical",
    dueDate: "2023-10-23",
    assignee: "Charlie Wilson",
  },
  {
    id: 6,
    title: "Implement dark mode",
    status: "To Do",
    priority: "Medium",
    dueDate: "2023-11-10",
    assignee: "Diana Miller",
  },
  {
    id: 7,
    title: "Conduct user testing",
    status: "To Do",
    priority: "High",
    dueDate: "2023-11-15",
    assignee: "Edward Davis",
  },
  {
    id: 8,
    title: "Upgrade server infrastructure",
    status: "Completed",
    priority: "High",
    dueDate: "2023-10-18",
    assignee: "Frank White",
  },
  {
    id: 9,
    title: "Implement search functionality",
    status: "In Progress",
    priority: "Medium",
    dueDate: "2023-11-07",
    assignee: "Grace Lee",
  },
  {
    id: 10,
    title: "Create monthly analytics report",
    status: "To Do",
    priority: "Low",
    dueDate: "2023-11-30",
    assignee: "Henry Taylor",
  },
  {
    id: 11,
    title: "Refactor legacy code",
    status: "In Progress",
    priority: "Medium",
    dueDate: "2023-11-20",
    assignee: "Ivy Chen",
  },
  {
    id: 12,
    title: "Implement push notifications",
    status: "To Do",
    priority: "High",
    dueDate: "2023-11-25",
    assignee: "Jack Brown",
  },
];

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

const TastsPage = () => {
  return (
    <PageContainer title="Tasks">
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
                      className={`${getPriorityColor(
                        task.priority
                      )} text-white`}
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
    </PageContainer>
  );
};

export default TastsPage;
