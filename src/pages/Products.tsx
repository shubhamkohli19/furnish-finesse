import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Filter, Grid, List } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';
import chairImage from '@/assets/chair-1.jpg';
import tableImage from '@/assets/table-1.jpg';
import sofaImage from '@/assets/sofa-1.jpg';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  // Handle URL parameters for category filtering
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams]);

  // Sample products data
  const allProducts = [
    {
      id: '1',
      name: 'Elegant Wooden Chair',
      price: 299,
      image: chairImage,
      category: 'chairs',
      rating: 4.8,
      inStock: true,
    },
    {
      id: '2',
      name: 'Modern Coffee Table',
      price: 599,
      image: tableImage,
      category: 'tables',
      rating: 4.9,
      inStock: true,
    },
    {
      id: '3',
      name: 'Comfort Sage Sofa',
      price: 1299,
      image: sofaImage,
      category: 'sofas',
      rating: 4.7,
      inStock: true,
    },
    {
      id: '4',
      name: 'Classic Oak Chair',
      price: 199,
      image: chairImage,
      category: 'chairs',
      rating: 4.5,
      inStock: false,
    },
    {
      id: '5',
      name: 'Dining Table Set',
      price: 899,
      image: tableImage,
      category: 'tables',
      rating: 4.6,
      inStock: true,
    },
    {
      id: '6',
      name: 'Luxury Sectional Sofa',
      price: 1899,
      image: sofaImage,
      category: 'sofas',
      rating: 4.9,
      inStock: true,
    },
    {
      id: '7',
      name: 'Queen Size Bed Frame',
      price: 799,
      image: chairImage, // Using chair image as placeholder
      category: 'beds',
      rating: 4.8,
      inStock: true,
    },
    {
      id: '8',
      name: 'King Size Bed Frame',
      price: 999,
      image: chairImage, // Using chair image as placeholder
      category: 'beds',
      rating: 4.9,
      inStock: true,
    },
    {
      id: '9',
      name: 'Comfort Bean Bag Chair',
      price: 149,
      image: chairImage, // Using chair image as placeholder
      category: 'bean-bags',
      rating: 4.6,
      inStock: true,
    },
    {
      id: '10',
      name: 'Large Bean Bag Sofa',
      price: 299,
      image: chairImage, // Using chair image as placeholder
      category: 'bean-bags',
      rating: 4.7,
      inStock: true,
    },
    {
      id: '11',
      name: 'Side Table',
      price: 199,
      image: tableImage,
      category: 'tables',
      rating: 4.5,
      inStock: true,
    },
    {
      id: '12',
      name: 'Leather Recliner Sofa',
      price: 1599,
      image: sofaImage,
      category: 'sofas',
      rating: 4.8,
      inStock: true,
    },
  ];

  // Filter products based on search term, category, and price range
  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    
    let matchesPrice = true;
    if (priceRange === 'under-300') matchesPrice = product.price < 300;
    else if (priceRange === '300-800') matchesPrice = product.price >= 300 && product.price <= 800;
    else if (priceRange === 'over-800') matchesPrice = product.price > 800;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'sofas', label: 'Sofas' },
    { value: 'beds', label: 'Beds' },
    { value: 'tables', label: 'Tables' },
    { value: 'bean-bags', label: 'Bean Bags' },
    { value: 'chairs', label: 'Chairs' },
    { value: 'storage', label: 'Storage' },
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'under-300', label: 'Under $300' },
    { value: '300-800', label: '$300 - $800' },
    { value: 'over-800', label: 'Over $800' },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Products</h1>
          <p className="text-xl text-muted-foreground">
            Discover our complete collection of handcrafted furniture
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8 shadow-card">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Price Filter */}
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  {priceRanges.map((range) => (
                    <SelectItem key={range.value} value={range.value}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* View Mode */}
              <div className="flex gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'furniture' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'furniture' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} of {allProducts.length} products
          </p>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Filter className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or filters
            </p>
            <Button
              variant="furniture"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setPriceRange('all');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;