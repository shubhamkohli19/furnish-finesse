import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  ArrowLeft, 
  Search, 
  Filter,
  Eye,
  Edit,
  Package,
  Calendar,
  DollarSign
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';

const OrderManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  // Sample orders data
  const orders = [
    {
      id: 'ORD-001',
      customer: 'John Doe',
      email: 'john.doe@email.com',
      items: 3,
      total: 1297,
      status: 'pending',
      date: '2024-01-15',
      itemsList: ['Elegant Wooden Chair', 'Modern Coffee Table', 'Comfort Sage Sofa'],
    },
    {
      id: 'ORD-002',
      customer: 'Jane Smith',
      email: 'jane.smith@email.com',
      items: 1,
      total: 599,
      status: 'processing',
      date: '2024-01-15',
      itemsList: ['Modern Coffee Table'],
    },
    {
      id: 'ORD-003',
      customer: 'Bob Johnson',
      email: 'bob.johnson@email.com',
      items: 2,
      total: 899,
      status: 'shipped',
      date: '2024-01-14',
      itemsList: ['Elegant Wooden Chair', 'Classic Oak Chair'],
    },
    {
      id: 'ORD-004',
      customer: 'Alice Brown',
      email: 'alice.brown@email.com',
      items: 1,
      total: 299,
      status: 'delivered',
      date: '2024-01-14',
      itemsList: ['Classic Oak Chair'],
    },
    {
      id: 'ORD-005',
      customer: 'Charlie Wilson',
      email: 'charlie.wilson@email.com',
      items: 4,
      total: 1899,
      status: 'pending',
      date: '2024-01-13',
      itemsList: ['Comfort Sage Sofa', 'Queen Size Bed Frame', 'Side Table', 'Comfort Bean Bag Chair'],
    },
    {
      id: 'ORD-006',
      customer: 'Diana Miller',
      email: 'diana.miller@email.com',
      items: 2,
      total: 799,
      status: 'processing',
      date: '2024-01-13',
      itemsList: ['Queen Size Bed Frame', 'Comfort Bean Bag Chair'],
    },
    {
      id: 'ORD-007',
      customer: 'Edward Davis',
      email: 'edward.davis@email.com',
      items: 1,
      total: 1299,
      status: 'shipped',
      date: '2024-01-12',
      itemsList: ['Comfort Sage Sofa'],
    },
    {
      id: 'ORD-008',
      customer: 'Fiona Garcia',
      email: 'fiona.garcia@email.com',
      items: 3,
      total: 1049,
      status: 'delivered',
      date: '2024-01-12',
      itemsList: ['Elegant Wooden Chair', 'Modern Coffee Table', 'Comfort Bean Bag Chair'],
    },
  ];

  const statuses = [
    { value: 'all', label: 'All Status' },
    { value: 'pending', label: 'Pending' },
    { value: 'processing', label: 'Processing' },
    { value: 'shipped', label: 'Shipped' },
    { value: 'delivered', label: 'Delivered' },
    { value: 'cancelled', label: 'Cancelled' },
  ];

  // Filter orders based on search and status
  const filteredOrders = orders.filter((order) => {
    const matchesSearch = 
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || order.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

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
      case 'cancelled':
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'text-yellow-600';
      case 'processing':
        return 'text-orange-600';
      case 'shipped':
        return 'text-blue-600';
      case 'delivered':
        return 'text-green-600';
      case 'cancelled':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-cream p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="ghost" asChild>
              <Link to="/admin">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Order Management</h1>
              <p className="text-muted-foreground">
                View and manage all customer orders
              </p>
            </div>

          </div>
        </div>

        {/* Filters */}
        <Card className="mb-6 shadow-card">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search orders by customer, order ID, or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Status Filter */}
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map((status) => (
                    <SelectItem key={status.value} value={status.value}>
                      {status.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Clear Filters */}
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedStatus('all');
                }}
              >
                <Filter className="h-4 w-4 mr-2" />
                Clear Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Orders Table */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Orders ({filteredOrders.length})</CardTitle>
            <CardDescription>
              Manage customer orders and track their status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Order ID</th>
                    <th className="text-left py-3 px-4 font-medium">Customer</th>
                    <th className="text-left py-3 px-4 font-medium">Items</th>
                    <th className="text-left py-3 px-4 font-medium">Total</th>
                    <th className="text-left py-3 px-4 font-medium">Status</th>
                    <th className="text-left py-3 px-4 font-medium">Date</th>
                    <th className="text-right py-3 px-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="border-b hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4">
                        <div>
                          <p className="font-medium">{order.id}</p>
                          <p className="text-sm text-muted-foreground">{order.email}</p>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <p className="font-medium">{order.customer}</p>
                      </td>
                      <td className="py-4 px-4">
                        <div>
                          <p className="font-medium">{order.items} items</p>
                          <p className="text-sm text-muted-foreground line-clamp-1">
                            {order.itemsList.join(', ')}
                          </p>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="font-medium">${order.total}</span>
                      </td>
                      <td className="py-4 px-4">
                        {getStatusBadge(order.status)}
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-sm text-muted-foreground">
                          {new Date(order.date).toLocaleDateString()}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Eye className="h-4 w-4 mr-2" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit Order
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Package className="h-4 w-4 mr-2" />
                                Mark as Shipped
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                Cancel Order
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* No Results */}
            {filteredOrders.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">No orders found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search terms or filters
                </p>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedStatus('all');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Order Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Orders</p>
                  <p className="text-2xl font-bold">{orders.length}</p>
                </div>
                <Package className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending</p>
                  <p className="text-2xl font-bold">
                    {orders.filter(o => o.status === 'pending').length}
                  </p>
                </div>
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 text-sm font-medium">
                    {orders.filter(o => o.status === 'pending').length}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Processing</p>
                  <p className="text-2xl font-bold">
                    {orders.filter(o => o.status === 'processing').length}
                  </p>
                </div>
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 text-sm font-medium">
                    {orders.filter(o => o.status === 'processing').length}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                  <p className="text-2xl font-bold">
                    ${orders.reduce((sum, order) => sum + order.total, 0).toLocaleString()}
                  </p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement; 