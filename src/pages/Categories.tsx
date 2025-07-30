import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sofa, Bed, Table, Circle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    {
      id: 'sofas',
      name: 'Sofas',
      description: 'Comfortable and stylish seating for your living room',
      icon: Sofa,
      image: '/src/assets/sofa-1.jpg',
      productCount: 24,
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 'beds',
      name: 'Beds',
      description: 'Restful sleep with our premium bed collection',
      icon: Bed,
      image: '/src/assets/chair-1.jpg', // Using chair image as placeholder
      productCount: 18,
      color: 'from-blue-500 to-purple-500',
    },
    {
      id: 'tables',
      name: 'Tables',
      description: 'Functional and elegant tables for every room',
      icon: Table,
      image: '/src/assets/table-1.jpg',
      productCount: 32,
      color: 'from-green-500 to-teal-500',
    },
    {
      id: 'bean-bags',
      name: 'Bean Bags',
      description: 'Casual and comfortable seating for modern homes',
      icon: Circle,
      image: '/src/assets/chair-1.jpg', // Using chair image as placeholder
      productCount: 12,
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Explore Our Categories
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Discover furniture that perfectly fits your style and space. From cozy sofas to elegant tables, 
            we have everything you need to create your dream home.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-card overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                  <category.icon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16 text-gray-600 group-hover:text-gray-800 transition-colors" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground">{category.name}</h3>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {category.productCount} items
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  <Button 
                    asChild 
                    variant="furniture" 
                    className="w-full group-hover:bg-wood-dark transition-colors"
                  >
                    <Link to={`/products?category=${category.id}`}>
                      Browse {category.name}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Category - Sofas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Featured: Living Room Sofas
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Transform your living room with our collection of premium sofas. From modern minimalist 
                designs to classic comfort, find the perfect sofa that reflects your style and provides 
                the comfort your family deserves.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-wood-warm rounded-full"></div>
                  <span className="text-muted-foreground">Premium fabric and leather options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-wood-warm rounded-full"></div>
                  <span className="text-muted-foreground">Sturdy hardwood frames</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-wood-warm rounded-full"></div>
                  <span className="text-muted-foreground">5-year warranty included</span>
                </div>
              </div>
              <Button asChild variant="furniture" size="lg">
                <Link to="/products?category=sofas">
                  Explore Sofas
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-lg p-8">
                <Sofa className="h-32 w-32 mx-auto text-wood-warm" />
                <div className="text-center mt-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">24 Sofa Styles</h3>
                  <p className="text-muted-foreground">Starting from $599</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Highlights */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each category is carefully curated to bring you the best furniture options for every room in your home
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="text-center border-0 shadow-card hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to={`/products?category=${category.id}`}>
                      View All
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Our team is here to help you find the perfect piece for your home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-wood-dark">
              <Link to="/products">
                Browse All Products
              </Link>
            </Button>
            <Button asChild variant="furniture" size="lg">
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories; 