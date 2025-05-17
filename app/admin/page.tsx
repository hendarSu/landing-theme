import Link from "next/link"
import {
  BarChart3,
  Users,
  ShoppingCart,
  Calendar,
  BookOpen,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  Eye,
  MessageSquare,
  ShoppingBag,
} from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export default function AdminDashboard() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center gap-2">
          <Button>
            <Calendar className="mr-2 h-4 w-4" />
            May 16, 2025
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,284</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 font-medium inline-flex items-center">
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                    12%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Events</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 font-medium inline-flex items-center">
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                    8%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Course Enrollments</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">573</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-red-500 font-medium inline-flex items-center">
                    <ArrowDownRight className="mr-1 h-3 w-3" />
                    3%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Shop Revenue</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12,234</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 font-medium inline-flex items-center">
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                    18%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[240px] flex items-center justify-center bg-muted/20 rounded-md">
                  <BarChart3 className="h-16 w-16 text-muted" />
                  <span className="ml-2 text-sm text-muted-foreground">Analytics Chart Placeholder</span>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Latest activities across the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Users className="h-4 w-4" />,
                      title: "New member registration",
                      time: "10 minutes ago",
                      description: "Sarah Johnson joined as a dance instructor",
                    },
                    {
                      icon: <Calendar className="h-4 w-4" />,
                      title: "Event published",
                      time: "2 hours ago",
                      description: "Summer Dance Workshop scheduled for June 15",
                    },
                    {
                      icon: <MessageSquare className="h-4 w-4" />,
                      title: "New comment",
                      time: "3 hours ago",
                      description: "Comment on 'Advanced Ballet Techniques' course",
                    },
                    {
                      icon: <ShoppingBag className="h-4 w-4" />,
                      title: "New order placed",
                      time: "5 hours ago",
                      description: "Order #1234 for Dance Practice Mat",
                    },
                  ].map((activity, i) => (
                    <div key={i} className="flex items-start">
                      <div className="mr-2 mt-0.5 rounded-full bg-primary/10 p-1">{activity.icon}</div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{activity.title}</p>
                        <p className="text-sm text-muted-foreground">{activity.description}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Popular Content</CardTitle>
                <CardDescription>Most viewed content this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "Introduction to Ballet", views: 1245, trend: "up" },
                    { title: "Contemporary Dance Workshop", views: 856, trend: "up" },
                    { title: "Summer Performance Schedule", views: 712, trend: "down" },
                    { title: "Vocal Training Techniques", views: 598, trend: "up" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{item.title}</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Eye className="mr-1 h-3 w-3" />
                          {item.views} views
                        </div>
                      </div>
                      {item.trend === "up" ? (
                        <TrendingUp className="h-4 w-4 text-green-500" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 text-red-500" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full" asChild>
                  <Link href="/admin/content">View all content</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Events scheduled in the next 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "Summer Dance Workshop", date: "Jun 15, 2025", participants: 24 },
                    { title: "Vocal Performance Night", date: "Jun 22, 2025", participants: 12 },
                    { title: "Theater Auditions", date: "Jun 28, 2025", participants: 35 },
                    { title: "Children's Ballet Recital", date: "Jul 05, 2025", participants: 18 },
                  ].map((event, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{event.title}</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-1 h-3 w-3" />
                          {event.date}
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="mr-1 h-3 w-3" />
                        {event.participants}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full" asChild>
                  <Link href="/admin/events">View all events</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Latest orders from the marketplace</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { id: "#1234", customer: "Michael Chen", amount: "$129.99", status: "Completed" },
                    { id: "#1233", customer: "Aisha Patel", amount: "$85.50", status: "Processing" },
                    { id: "#1232", customer: "David Rodriguez", amount: "$210.75", status: "Completed" },
                    { id: "#1231", customer: "Emma Wilson", amount: "$45.99", status: "Shipped" },
                  ].map((order, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Order {order.id}</p>
                        <p className="text-sm text-muted-foreground">{order.customer}</p>
                      </div>
                      <div className="flex flex-col items-end">
                        <p className="text-sm font-medium">{order.amount}</p>
                        <p className="text-xs text-muted-foreground">{order.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full" asChild>
                  <Link href="/admin/shop/orders">View all orders</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>Detailed analytics data will be displayed here.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center bg-muted/20 rounded-md">
                <BarChart3 className="h-16 w-16 text-muted" />
                <span className="ml-2 text-sm text-muted-foreground">Detailed Analytics Charts Placeholder</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>Generate and view reports for different aspects of your platform.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center bg-muted/20 rounded-md">
                <span className="text-sm text-muted-foreground">Reports Interface Placeholder</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>System notifications and alerts.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center bg-muted/20 rounded-md">
                <span className="text-sm text-muted-foreground">Notifications Interface Placeholder</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
