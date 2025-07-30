import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Package, 
  Users, 
  ShoppingCart, 
  DollarSign, 
  Plus,
  Eye,
  Edit,
  Trash2,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  // Sample data
  const stats = [
    {
      title: 'Total Products',
      value: '156',
      change: '+12%',
      icon: Package,
      color: 'text-blue-600',
    },
    {
      title: 'Total Orders',
      value: '1,234',
      change: '+8%',
      icon: ShoppingCart,
      color: 'text-green-600',
    },
    {
      title: 'Total Customers',
      value: '892',
      change: '+15%',
      icon: Users,
      color: 'text-purple-600',
    },
    {
      title: 'Revenue',
      value: '$45,690',
      change: '+23%',
      icon: DollarSign,
      color: 'text-orange-600',
    },
  ];

  const recentOrders = [
    {
      id: 'ORD-001',
      customer: 'John Doe',
      items: 3,
      total: 1297,
      status: 'pending',
      date: '2024-01-15',
    },
    {
      id: 'ORD-002',
      customer: 'Jane Smith',
      items: 1,
      total: 599,
      status: 'processing',
      date: '2024-01-15',
    },
    {
      id: 'ORD-003',
      customer: 'Bob Johnson',
      items: 2,
      total: 899,
      status: 'shipped',
      date: '2024-01-14',
    },
    {
      id: 'ORD-004',
      customer: 'Alice Brown',
      items: 1,
      total: 299,
      status: 'delivered',
      date: '2024-01-14',
    },
  ];

  const recentProducts = [
    {
      id: '1',
      name: 'Elegant Wooden Chair',
      category: 'Chairs',
      price: 299,
      stock: 15,
      status: 'active',
    },
    {
      id: '2',
      name: 'Modern Coffee Table',
      category: 'Tables',
      price: 599,
      stock: 8,
      status: 'active',
    },
    {
      id: '3',
      name: 'Comfort Sage Sofa',
      category: 'Sofas',
      price: 1299,
      stock: 3,
      status: 'low-stock',
    },
    {
      id: '4',
      name: 'Classic Oak Chair',
      category: 'Chairs',
      price: 199,
      stock: 0,
      status: 'out-of-stock',
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="secondary">Pending</Badge>;
      case 'processing':
        return <Badge style={{ backgroundColor: 'hsl(var(--wood-warm))', color: 'white' }}>Processing</Badge>;
      case 'shipped':
        return <Badge variant="outline">Shipped</Badge>;
      case 'delivered':
        return <Badge style={{ backgroundColor: 'hsl(var(--sage))', color: 'white' }}>Delivered</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getProductStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge style={{ backgroundColor: 'hsl(var(--sage))', color: 'white' }}>Active</Badge>;
      case 'low-stock':
        return <Badge variant="destructive">Low Stock</Badge>;
      case 'out-of-stock':
        return <Badge variant="outline">Out of Stock</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-cream p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back! Here's what's happening with your store.
              </p>
            </div>
            <Button asChild variant="furniture" size="lg">
              <Link to="/admin/products">
                <Package className="h-5 w-5 mr-2" />
                Product Management
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-green-600 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {stat.change}
                    </p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Orders */}
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>
                Latest orders from your customers
              </CardDescription>
            </div>
            <Button asChild variant="outline">
              <Link to="/admin/orders">
                <Eye className="h-4 w-4 mr-2" />
                View All Orders
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="font-medium">{order.id}</p>
                        <p className="text-sm text-muted-foreground">
                          {order.customer}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium">{order.items} items</p>
                        <p className="text-xs text-muted-foreground">Items</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium">${order.total}</p>
                        <p className="text-xs text-muted-foreground">Total</p>
                      </div>
                      <div>
                        {getStatusBadge(order.status)}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;