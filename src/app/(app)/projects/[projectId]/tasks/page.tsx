import TableView from "@/components/(app)/features/tasks/table-view";
import PageContainer from "@/components/(app)/page-container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

const ProjectTasksPage = () => {
  return (
    <PageContainer title="Tasks">
      <Tabs defaultValue="table" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Table</TabsTrigger>
          <TabsTrigger value="kanban">Kanban</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
        </TabsList>
        <TabsContent value="table">
          <TableView tasks={tasks} />
        </TabsContent>
        <TabsContent value="kanban">Kanban View Here.</TabsContent>
        <TabsContent value="calendar">Calendar View here.</TabsContent>
      </Tabs>
    </PageContainer>
  );
};

export default ProjectTasksPage;
