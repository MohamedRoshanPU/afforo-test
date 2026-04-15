import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  ClipboardList,
  LayoutDashboard,
  LogOut,
  MessageSquareText,
  Settings,
  ShoppingCart,
  Trophy,
} from "lucide-react";

export const sidebarItems: { label: string; icon: LucideIcon; active?: boolean }[] = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Leaderboard", icon: Trophy },
  { label: "Order", icon: ShoppingCart },
  { label: "Products", icon: ClipboardList },
  { label: "Sales Report", icon: BarChart3 },
  { label: "Messages", icon: MessageSquareText },
  { label: "Settings", icon: Settings },
  { label: "Sign Out", icon: LogOut },
];

export const salesSummary = [
  {
    title: "Total Sales",
    value: "$1k",
    delta: "+8% from yesterday",
    iconBg: "#ff5b7d",
    tint: "#ffe4eb",
  },
  {
    title: "Total Orders",
    value: "300",
    delta: "+5% from yesterday",
    iconBg: "#ff9c5f",
    tint: "#fff1d8",
  },
  {
    title: "Products Sold",
    value: "5",
    delta: "+1.2% from yesterday",
    iconBg: "#35d34b",
    tint: "#ddf8e2",
  },
  {
    title: "New Customers",
    value: "8",
    delta: "+0.5% from yesterday",
    iconBg: "#a665f6",
    tint: "#efe2ff",
  },
] as const;

export const visitorInsights = [
  { month: "Jan", loyalCustomers: 330, newCustomers: 255, uniqueCustomers: 290 },
  { month: "Feb", loyalCustomers: 315, newCustomers: 280, uniqueCustomers: 350 },
  { month: "Mar", loyalCustomers: 260, newCustomers: 225, uniqueCustomers: 365 },
  { month: "Apr", loyalCustomers: 205, newCustomers: 165, uniqueCustomers: 330 },
  { month: "May", loyalCustomers: 190, newCustomers: 155, uniqueCustomers: 250 },
  { month: "Jun", loyalCustomers: 230, newCustomers: 300, uniqueCustomers: 215 },
  { month: "Jul", loyalCustomers: 285, newCustomers: 365, uniqueCustomers: 220 },
  { month: "Aug", loyalCustomers: 325, newCustomers: 355, uniqueCustomers: 265 },
  { month: "Sept", loyalCustomers: 310, newCustomers: 320, uniqueCustomers: 310 },
  { month: "Oct", loyalCustomers: 280, newCustomers: 270, uniqueCustomers: 295 },
  { month: "Nov", loyalCustomers: 220, newCustomers: 210, uniqueCustomers: 240 },
  { month: "Dec", loyalCustomers: 150, newCustomers: 145, uniqueCustomers: 200 },
];

export const totalRevenue = [
  { day: "Monday", onlineSales: 14, offlineSales: 13 },
  { day: "Tuesday", onlineSales: 17, offlineSales: 12 },
  { day: "Wednesday", onlineSales: 6, offlineSales: 23 },
  { day: "Thursday", onlineSales: 16, offlineSales: 6 },
  { day: "Friday", onlineSales: 12, offlineSales: 11 },
  { day: "Saturday", onlineSales: 17, offlineSales: 14 },
  { day: "Sunday", onlineSales: 21, offlineSales: 11 },
];

export const customerSatisfaction = [
  { month: "Jan", lastMonth: 36, thisMonth: 62 },
  { month: "Feb", lastMonth: 44, thisMonth: 53 },
  { month: "Mar", lastMonth: 21, thisMonth: 57 },
  { month: "Apr", lastMonth: 21, thisMonth: 48 },
  { month: "May", lastMonth: 27, thisMonth: 59 },
  { month: "Jun", lastMonth: 26, thisMonth: 43 },
  { month: "Jul", lastMonth: 43, thisMonth: 69 },
];

export const targetReality = [
  { month: "Jan", realitySales: 8, targetSales: 10 },
  { month: "Feb", realitySales: 7, targetSales: 9 },
  { month: "Mar", realitySales: 6, targetSales: 11 },
  { month: "Apr", realitySales: 8, targetSales: 9 },
  { month: "May", realitySales: 9, targetSales: 12 },
  { month: "Jun", realitySales: 9, targetSales: 10 },
  { month: "July", realitySales: 9, targetSales: 12 },
];

export const products = [
  { id: "01", name: "Home Decor Range", sales: 45, color: "#3ba5ff" },
  { id: "02", name: "Disney Princess Pink Bag 18\"", sales: 29, color: "#38e2a6" },
  { id: "03", name: "Bathroom Essentials", sales: 18, color: "#9768ff" },
  { id: "04", name: "Apple Smartwatches", sales: 25, color: "#ffa342" },
];

export const countryMetrics = [
  { country: "United States", x: "16%", y: "40%", color: "#ffb020", size: 42 },
  { country: "Brazil", x: "28%", y: "72%", color: "#ff5d73", size: 34 },
  { country: "Nigeria", x: "46%", y: "60%", color: "#5f84ff", size: 24 },
  { country: "Saudi Arabia", x: "59%", y: "46%", color: "#2ad0bf", size: 28 },
  { country: "China", x: "78%", y: "38%", color: "#8759ff", size: 44 },
  { country: "Indonesia", x: "76%", y: "58%", color: "#2bdd91", size: 26 },
];

export const volumeService = [
  { month: "Jan", volume: 11, services: 7 },
  { month: "Feb", volume: 13, services: 8 },
  { month: "Mar", volume: 11, services: 4 },
  { month: "Apr", volume: 10, services: 4.5 },
  { month: "May", volume: 8, services: 4 },
  { month: "Jun", volume: 8.5, services: 5.8 },
];
