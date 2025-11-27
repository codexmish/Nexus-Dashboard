import {
  BarChart3,
  Bell,
  Calendar,
  CreditCard,
  DollarSign,
  Eye,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Package,
  Settings,
  ShoppingBag,
  ShoppingCart,
  User,
  Users,
} from "lucide-react";

// ----------sidebar menu
const menuItem = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    active: true,
    badge: "New",
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analytics",
    submenu: [
      { id: "overview", label: "Overview" },
      { id: "reports", label: "Reports" },
      { id: "insights", label: "Insights" },
    ],
  },
  {
    id: "users",
    icon: User,
    label: "Users",
    count: "2.4k",
    submenu: [
      { id: "all-users", label: "All Users" },
      { id: "roles", label: "Roles & Permissions" },
      { id: "activity", label: "User Activity" },
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    label: "E-commerce",
    submenu: [
      { id: "products", label: "Products" },
      { id: "orders", label: "Orders" },
      { id: "customers", label: "Customers" },
    ],
  },
  {
    id: "inventory",
    icon: Package,
    label: "Inventory",
    count: "847",
  },
  {
    id: "transaction",
    icon: CreditCard,
    label: "Transaction",
  },
  {
    id: "messages",
    icon: MessageSquare,
    label: "Messages",
    badge: "12",
  },
  {
    id: "calendar",
    icon: Calendar,
    label: "Calendar",
  },
  {
    id: "reports",
    icon: FileText,
    label: "Reports",
  },
  {
    id: "settings",
    icon: Settings,
    label: "Settings",
  },
];

// ----stats data--

const stats = [
  {
    title: "Total Revenue",
    Value: "$124,563",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    textColor: "text-emerald-600 dark:text-emerald-400",
  },

  {
    title: "Active Users",
    Value: "8,723",
    change: "+7.3%",
    trend: "up",
    icon: Users,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Total Orders",
    Value: "2,793",
    change: "+15.3%",
    trend: "up",
    icon: ShoppingCart,
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    textColor: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "Page Views",
    Value: "45,892",
    change: "-2.1%",
    trend: "dowm",
    icon: Eye,
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    textColor: "text-orange-600 dark:text-orange-400",
  },
];

// charts data

const chartsData = [
  {
    month: "Jan",
    revenue: 45000,
    expenses: 32000,
  },
  {
    month: "Feb",
    revenue: 52000,
    expenses: 38000,
  },
  {
    month: "Mar",
    revenue: 48000,
    expenses: 35000,
  },
  {
    month: "Apr",
    revenue: 61000,
    expenses: 42000,
  },
  {
    month: "May",
    revenue: 55000,
    expenses: 40000,
  },
  {
    month: "Jun",
    revenue: 67000,
    expenses: 45000,
  },
  {
    month: "Jul",
    revenue: 72000,
    expenses: 48000,
  },
  {
    month: "Aug",
    revenue: 69000,
    expenses: 48000,
  },
  {
    month: "Sep",
    revenue: 78000,
    expenses: 52000,
  },
  {
    month: "Oct",
    revenue: 74000,
    expenses: 50000,
  },
  {
    month: "Nov",
    revenue: 82000,
    expenses: 55000,
  },
  {
    month: "Dec",
    revenue: 89000,
    expenses: 58000,
  },
];

const salesChartData = [
  {
    name: "Electronics",
    value: 45,
    color: "#3b82f6",
  },
  {
    name: "Clothing",
    value: 30,
    color: "#8b5cf6",
  },
  {
    name: "Books",
    value: 15,
    color: "#10b981",
  },
  {
    name: "Other",
    value: 10,
    color: "#f59e0b",
  },
];

const recentOrders = [
  {
    id: "#3847",
    customer: "John Smith",
    Product: "MacBook Pro 16",
    amount: "$2,399",
    stats: "completed",
    date: "2024-01-15",
  },
  {
    id: "#3847",
    customer: "Sarah Jphnson",
    Product: "iPhone 15 Pro",
    amount: "$1,199",
    stats: "pending",
    date: "2024-01-15",
  },
  {
    id: "#3847",
    customer: "Mike wilson",
    Product: "AirPods Pro",
    amount: "$249",
    stats: "completed",
    date: "2024-01-15",
  },
  {
    id: "#3850",
    customer: "Emily",
    Product: "iPad Air",
    amount: "$599",
    stats: "cancelled",
    date: "2024-01-14",
  },
];

const topProducts = [
  {
    name: "MacBook Pro 16",
    sales: 1247,
    revenue: "$2,987,530",
    trend: "up",
    change: "+12%",
  },
  {
    name: "iPhone 15 Pro",
    sales: 2156,
    revenue: "$2,587,044",
    trend: "up",
    change: "+8%",
  },
  {
    name: "AirPods Pro",
    sales: 3421,
    revenue: "$852,229",
    trend: "down",
    change: "-3%",
  },
  {
    name: "iPad Air",
    sales: 987,
    revenue: "$591,044",
    trend: "up",
    change: "+15%",
  },
];

const activities = [
  {
    id: 1,
    type: "user",
    icon: User,
    title: "New user Registered",
    description: "Dipjol created an account",
    time: "2 minutes ago",
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    id: 2,
    type: "order",
    icon: ShoppingCart,
    title: "New order received",
    description: "Order #3847 for $2,399",
    time: "5 minutes ago",
    color: "text-emerald-500",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    id: 3,
    type: "payment",
    icon: CreditCard,
    title: "Payment processed",
    description: "payment of $1,199 completed",
    time: "12 minutes ago",
    color: "text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    id: 4,
    type: "system",
    icon: Settings,
    title: "System update",
    description: "Database backup completed",
    time: "1 hours ago",
    color: "text-orange-500",
    bgColor: "bg-orange-100 dark:bg-orange-900/30",
  },
  {
    id: 5,
    type: "notification",
    icon: Bell,
    title: "Low stock alert",
    description: "iPhone 15 Pro stock is low",
    time: "2 hours ago",
    color: "text-red-500",
    bgColor: "bg-red-100 dark:bg-red-900/30",
  },
];

export {
  menuItem,
  stats,
  chartsData,
  salesChartData,
  recentOrders,
  topProducts,
  activities,
};
