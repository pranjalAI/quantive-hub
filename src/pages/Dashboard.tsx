import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, TrendingUp, DollarSign } from "lucide-react";

export default function Dashboard() {
  const { user, signOut } = useAuth();

  const kpis = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      trend: "up",
      icon: DollarSign,
    },
    {
      title: "Expenses",
      value: "$12,234.56",
      change: "+4.3%",
      trend: "up",
      icon: ArrowUpRight,
    },
    {
      title: "Profit Margin",
      value: "73%",
      change: "+2.5%",
      trend: "up",
      icon: TrendingUp,
    },
    {
      title: "Growth Rate",
      value: "12.5%",
      change: "-1.2%",
      trend: "down",
      icon: ArrowDownRight,
    },
  ];

  const handleIngestData = () => {
    console.log("Ingest Data button clicked - will call backend URL");
    // TODO: Connect to backend endpoint
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <h1 className="text-xl font-bold">Financial Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{user?.email}</span>
            <Button variant="outline" onClick={signOut}>
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
            <p className="text-muted-foreground">Your financial metrics at a glance</p>
          </div>
          <Button onClick={handleIngestData}>Ingest Data</Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi) => {
            const Icon = kpi.icon;
            return (
              <Card key={kpi.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{kpi.value}</div>
                  <p className={`text-xs flex items-center gap-1 ${
                    kpi.trend === "up" ? "text-accent" : "text-destructive"
                  }`}>
                    {kpi.trend === "up" ? (
                      <ArrowUpRight className="h-3 w-3" />
                    ) : (
                      <ArrowDownRight className="h-3 w-3" />
                    )}
                    {kpi.change} from last month
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
            <CardDescription>Monthly revenue overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
              <p className="text-muted-foreground">Chart placeholder - Ready for data visualization</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
