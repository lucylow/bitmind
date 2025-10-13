import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, FileText, DollarSign, Shield, Clock, Activity, Award } from "lucide-react";
import { platformMetrics } from '../services/mockData';

const Analytics = () => {
  const growthData = [
    { month: 'Month 1', daos: 23, color: 'bg-blue-500' },
    { month: 'Month 2', daos: 37, color: 'bg-indigo-500' },
    { month: 'Month 3', daos: 48, color: 'bg-purple-500' },
    { month: 'Month 4', daos: 62, color: 'bg-pink-500' },
  ];

  const maxDAOs = Math.max(...growthData.map(d => d.daos));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Activity className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Platform Analytics</h1>
              <p className="text-gray-600 text-lg">Real-time metrics and growth insights</p>
            </div>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border-l-4 border-l-blue-500 hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <FileText className="w-8 h-8 text-blue-600" />
                <Badge className="bg-green-100 text-green-700">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Live
                </Badge>
              </div>
              <CardTitle className="text-lg mt-2">Total Invoices</CardTitle>
              <CardDescription>Processed on platform</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-gray-900">{platformMetrics.totalInvoices.toLocaleString()}</p>
              <p className="text-sm text-green-600 mt-2">+12.3% this month</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500 hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <DollarSign className="w-8 h-8 text-purple-600" />
                <Badge className="bg-purple-100 text-purple-700">sBTC</Badge>
              </div>
              <CardTitle className="text-lg mt-2">Total Volume</CardTitle>
              <CardDescription>In sBTC transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-gray-900">{platformMetrics.totalVolume.toLocaleString()} sBTC</p>
              <p className="text-sm text-gray-600 mt-2">≈ ${(platformMetrics.totalVolume * 42500).toLocaleString()} USD</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500 hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Award className="w-8 h-8 text-green-600" />
                <Badge className="bg-green-100 text-green-700">Excellent</Badge>
              </div>
              <CardTitle className="text-lg mt-2">Success Rate</CardTitle>
              <CardDescription>Completed invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-gray-900">{platformMetrics.successRate}%</p>
              <p className="text-sm text-green-600 mt-2">Above industry average</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500 hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Users className="w-8 h-8 text-orange-600" />
                <Badge className="bg-orange-100 text-orange-700">Active</Badge>
              </div>
              <CardTitle className="text-lg mt-2">Active DAOs</CardTitle>
              <CardDescription>Using platform</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-gray-900">{platformMetrics.activeDAOs}</p>
              <p className="text-sm text-orange-600 mt-2">+{platformMetrics.growthRate.toFixed(1)}% growth</p>
            </CardContent>
          </Card>
        </div>

        {/* Growth Chart */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                DAO Growth Trajectory
              </CardTitle>
              <CardDescription>Platform adoption over last 4 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {growthData.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{item.month}</span>
                      <span className="text-lg font-bold text-gray-900">{item.daos} DAOs</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full ${item.color} transition-all duration-500`}
                        style={{ width: `${(item.daos / maxDAOs) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <p className="text-sm font-semibold text-gray-900 mb-1">Growth Rate</p>
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  +169.6%
                </p>
                <p className="text-xs text-gray-600 mt-1">From 23 to 62 DAOs in 4 months</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Shield className="w-6 h-6 text-green-600" />
                Platform Performance
              </CardTitle>
              <CardDescription>Quality and reliability metrics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Success Rate</span>
                  <span className="text-lg font-bold text-green-600">{platformMetrics.successRate}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500"
                    style={{ width: `${platformMetrics.successRate}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Dispute Rate</span>
                  <span className="text-lg font-bold text-blue-600">{platformMetrics.disputeRate}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                    style={{ width: `${platformMetrics.disputeRate}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Low dispute rate indicates platform trust</p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold text-gray-900">Avg. Completion Time</span>
                </div>
                <p className="text-3xl font-bold text-gray-900">{platformMetrics.averageCompletionTime} days</p>
                <p className="text-sm text-gray-600 mt-1">85% faster than traditional processes</p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
                <p className="text-sm font-semibold text-green-900 mb-1">Platform Health</p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-lg font-bold text-green-700">Excellent</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-center">
                <Users className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                <p className="text-3xl font-bold text-gray-900 mb-1">189</p>
                <p className="text-sm text-gray-600">Registered Contractors</p>
                <Badge className="mt-3 bg-blue-100 text-blue-700">Growing</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-center">
                <Shield className="w-12 h-12 text-purple-500 mx-auto mb-3" />
                <p className="text-3xl font-bold text-gray-900 mb-1">35</p>
                <p className="text-sm text-gray-600">Total Arbitrations</p>
                <Badge className="mt-3 bg-purple-100 text-purple-700">Fair</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-center">
                <Award className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <p className="text-3xl font-bold text-gray-900 mb-1">98.9%</p>
                <p className="text-sm text-gray-600">User Satisfaction</p>
                <Badge className="mt-3 bg-green-100 text-green-700">Excellent</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

