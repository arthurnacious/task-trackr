"use client";
import PageContainer from "@/components/(app)/page-container";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Users, DollarSign, Building, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/helpers/string";

const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 4500 },
  { month: "May", revenue: 6000 },
  { month: "Jun", revenue: 5500 },
];

const userGrowthData = [
  { month: "Jan", users: 1000 },
  { month: "Feb", users: 1200 },
  { month: "Mar", users: 1500 },
  { month: "Apr", users: 1800 },
  { month: "May", users: 2200 },
  { month: "Jun", users: 2500 },
];

const departmentDistributionData = [
  { name: "Engineering", value: 40 },
  { name: "Sales", value: 30 },
  { name: "Marketing", value: 20 },
  { name: "HR", value: 10 },
];

const employees = [
  {
    id: 1,
    name: "John Doe",
    role: "Senior Developer",
    email: "john@example.com",
    avatarUrl: "/api/placeholder/32/32",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Product Manager",
    email: "jane@example.com",
    avatarUrl: "/api/placeholder/32/32",
  },
  {
    id: 3,
    name: "Bob Johnson",
    role: "UX Designer",
    email: "bob@example.com",
    avatarUrl: "/api/placeholder/32/32",
  },
  {
    id: 4,
    name: "Alice Brown",
    role: "Marketing Specialist",
    email: "alice@example.com",
    avatarUrl: "/api/placeholder/32/32",
  },
  {
    id: 5,
    name: "Charlie Wilson",
    role: "Sales Representative",
    email: "charlie@example.com",
    avatarUrl: "/api/placeholder/32/32",
  },
];

const tenants = [
  { id: 1, name: "Acme Corp" },
  { id: 2, name: "Globex Corporation" },
  { id: 3, name: "Soylent Corp" },
];

const DahsboardPage = () => {
  const currentTenant = tenants[0];
  return (
    <PageContainer title="Dashboard">
      <section className="mb-8">
        <p className="text-xl text-gray-600 dark:text-white">
          Current Tenant: {currentTenant.name}
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-blue-500 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 opacity-75" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-blue-100">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-green-500 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 opacity-75" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,350</div>
            <p className="text-xs text-green-100">+180 new users</p>
          </CardContent>
        </Card>
        <Card className="bg-purple-500 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tenants</CardTitle>
            <Building className="h-4 w-4 opacity-75" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tenants.length}</div>
            <p className="text-xs text-purple-100">Across 4 categories</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#10b981" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Employee List</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="divide-y divide-gray-200">
              {employees.map((employee) => (
                <li
                  key={employee.id}
                  className="py-3 flex justify-between items-center"
                >
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage
                        src={employee.avatarUrl}
                        alt={employee.name}
                      />
                      <AvatarFallback>
                        {getInitials(employee.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {employee.name}
                      </p>
                      <p className="text-sm text-gray-500">{employee.role}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Department Distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  dataKey="value"
                  data={departmentDistributionData}
                  fill="#8b5cf6"
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
};

export default DahsboardPage;
