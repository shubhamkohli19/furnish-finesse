import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Award, 
  Users, 
  Heart, 
  Shield, 
  Truck, 
  Star,
  MapPin,
  Phone,
  Mail,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Quality First',
      description: 'We never compromise on quality. Every piece is crafted with premium materials and attention to detail.',
      color: 'text-red-500',
    },
    {
      icon: Shield,
      title: 'Trust & Reliability',
      description: 'Building lasting relationships with our customers through honest pricing and reliable service.',
      color: 'text-blue-500',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We listen, understand, and deliver exactly what you need.',
      color: 'text-green-500',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Striving for excellence in every aspect of our business, from design to delivery.',
      color: 'text-purple-500',
    },
  ];

  const achievements = [
    { number: '10,000+', label: 'Happy Customers', icon: Users },
    { number: '50,000+', label: 'Products Delivered', icon: Truck },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '4.9/5', label: 'Customer Rating', icon: Star },
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            About Furnish Finesse
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We're passionate about creating beautiful, functional spaces that inspire and comfort. 
            Since 2009, we've been helping families transform their homes with quality furniture 
            that stands the test of time.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2009, Furnish Finesse began as a small family business with a big dream: 
                to make quality furniture accessible to everyone. What started in a modest workshop 
                has grown into a trusted name in home furnishings.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our journey has been driven by a simple belief: that everyone deserves to live in a 
                home they love. We've maintained our commitment to quality craftsmanship while embracing 
                modern design trends and sustainable practices.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Today, we serve thousands of families across the country, helping them create spaces 
                that reflect their unique style and provide comfort for years to come.
              </p>
              <Button asChild variant="furniture" size="lg">
                <Link to="/products">
                  Explore Our Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-wood-warm to-wood-dark rounded-lg p-8 text-white">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">15+ Years of Excellence</h3>
                  <p className="text-lg mb-6">
                    From humble beginnings to trusted industry leader
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold">10K+</div>
                      <div className="text-sm">Happy Customers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">50K+</div>
                      <div className="text-sm">Products Delivered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're committed to transforming homes and lives through exceptional furniture and service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-card border-0">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                </div>
                <p className="text-lg text-muted-foreground text-center">
                  To provide families with beautiful, durable, and affordable furniture that enhances 
                  their daily lives and creates lasting memories in their homes.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                </div>
                <p className="text-lg text-muted-foreground text-center">
                  To become the most trusted name in home furnishings, known for quality, innovation, 
                  and exceptional customer experience across the nation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core values guide everything we do and every decision we make
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-card hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center`}>
                    <value.icon className={`h-8 w-8 ${value.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Milestones that reflect our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-wood-warm to-wood-dark flex items-center justify-center">
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-muted-foreground">
                    {achievement.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We'd love to hear from you. Reach out to us for any questions or support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-card">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                <p className="text-muted-foreground">
                  123 Furniture Street<br />
                  Design District, NY 10001
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-card">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                <p className="text-muted-foreground">
                  (555) 123-4567<br />
                  Mon-Fri: 9AM-6PM
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-card">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                <p className="text-muted-foreground">
                  hello@furnishfinesse.com<br />
                  support@furnishfinesse.com
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Join thousands of satisfied customers who trust us with their furniture needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-wood-dark">
              <Link to="/products">
                Browse Our Collection
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

export default About; 