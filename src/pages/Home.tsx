import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Truck, Shield, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/products/ProductCard';
import heroImage from '@/assets/hero-furniture.jpg';
import chairImage from '@/assets/chair-1.jpg';
import tableImage from '@/assets/table-1.jpg';
import sofaImage from '@/assets/sofa-1.jpg';

const Home = () => {
  // Sample featured products
  const featuredProducts = [
    {
      id: '1',
      name: 'Elegant Wooden Chair',
      price: 299,
      image: chairImage,
      category: 'Chairs',
      rating: 4.8,
      inStock: true,
    },
    {
      id: '2',
      name: 'Modern Coffee Table',
      price: 599,
      image: tableImage,
      category: 'Tables',
      rating: 4.9,
      inStock: true,
    },
    {
      id: '3',
      name: 'Comfort Sage Sofa',
      price: 1299,
      image: sofaImage,
      category: 'Sofas',
      rating: 4.7,
      inStock: true,
    },
  ];

  const features = [
    {
      icon: Truck,
      title: 'Free Delivery',
      description: 'Free shipping on orders over $500',
    },
    {
      icon: Shield,
      title: 'Warranty',
      description: '5-year warranty on all furniture',
    },
    {
      icon: Award,
      title: 'Quality Crafted',
      description: 'Handcrafted with premium materials',
    },
    {
      icon: Users,
      title: 'Expert Service',
      description: 'Dedicated customer support team',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-wood-dark/80 to-wood-dark/40" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Crafted for
            <span className="block text-wood-light">Your Home</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Discover beautiful, sustainable furniture that brings warmth and style to every room
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="hero">
              <Link to="/products">
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="hero" className="border-white text-wood-dark hover:bg-white hover:text-black">
              <Link to="/about">
                Our Story
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-card">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 mx-auto mb-4 text-wood-warm" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Featured Collection
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked pieces that showcase our commitment to quality and design
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="furniture" size="lg">
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Transform Your Space Today
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Join thousands of happy customers who have transformed their homes with our furniture
          </p>
          <Button asChild variant="outline" size="hero" className="border-white text-wood-dark hover:bg-white hover:text-black">
            <Link to="/products">
              Start Shopping
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;