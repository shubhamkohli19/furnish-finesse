import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ShoppingCart, 
  Heart, 
  Share2, 
  Star, 
  Truck, 
  Shield, 
  RotateCcw,
  ArrowLeft,
  Plus,
  Minus,
  Check,
  MapPin,
  Clock,
  Users,
  Award
} from 'lucide-react';
import chairImage from '@/assets/chair-1.jpg';
import tableImage from '@/assets/table-1.jpg';
import sofaImage from '@/assets/sofa-1.jpg';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  // Sample product data (in real app, fetch based on id)
  const product = {
    id: '1',
    name: 'Elegant Wooden Chair',
    price: 299,
    originalPrice: 349,
    images: [
      chairImage, 
      tableImage, 
      sofaImage,
      chairImage, // Using same images for demo - in real app these would be different angles
      tableImage
    ],
    category: 'Chairs',
    inStock: true,
    stockCount: 15,
    description: 'This elegant wooden chair combines traditional craftsmanship with modern design. Made from sustainably sourced oak wood, it features a comfortable cushioned seat and ergonomic backrest that provides excellent support for long periods of sitting.',
    longDescription: `Our Elegant Wooden Chair is the perfect blend of timeless design and modern comfort. Each piece is carefully crafted by skilled artisans using traditional woodworking techniques combined with contemporary ergonomic principles.

The chair features a solid oak frame that's been hand-finished with natural oil to enhance the wood's natural beauty while providing lasting protection. The seat cushion is upholstered in premium fabric that's both durable and comfortable, with high-density foam padding that maintains its shape over time.

The ergonomic design ensures proper posture support, making it ideal for dining rooms, home offices, or as an accent piece in any room. The chair's classic silhouette works seamlessly with both traditional and contemporary decor styles.`,
    features: [
      'Sustainably sourced oak wood construction',
      'Ergonomic design for optimal comfort',
      'Hand-finished with natural oil treatment',
      'Weight capacity: 250 lbs',
      'Easy assembly with included tools',
      'Premium fabric upholstery',
      'High-density foam cushioning',
      'Classic design fits any decor'
    ],
    specifications: {
      'Dimensions': '18" W x 20" D x 32" H',
      'Weight': '25 lbs',
      'Material': 'Oak wood, premium fabric',
      'Color': 'Natural oak with cream cushion',
      'Weight Capacity': '250 lbs',
      'Warranty': '5 years'
    },

    relatedProducts: [
      {
        id: '2',
        name: 'Modern Coffee Table',
        price: 599,
        image: tableImage,
        category: 'Tables'
      },
      {
        id: '3',
        name: 'Comfort Sage Sofa',
        price: 1299,
        image: sofaImage,
        category: 'Sofas'
      }
    ]
  };

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, Math.min(product.stockCount, quantity + change)));
  };



  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link 
            to="/products" 
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="aspect-square overflow-hidden rounded-xl bg-gray-100 shadow-lg">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-5 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 hover:scale-105 ${
                    selectedImage === index 
                      ? 'border-primary shadow-md' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Image Counter */}
            <div className="text-center text-sm text-muted-foreground">
              {selectedImage + 1} of {product.images.length} photos
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Header Info */}
            <div>
              <Badge variant="secondary" className="mb-3">
                {product.category}
              </Badge>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              
              

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-primary">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-2xl text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
                {product.originalPrice && (
                  <Badge variant="destructive" className="text-sm">
                    Save ${product.originalPrice - product.price}
                  </Badge>
                )}
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                {product.inStock ? (
                  <div className="flex items-center gap-2 text-green-600">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                    <span className="font-medium">In Stock ({product.stockCount} available)</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-red-600">
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    <span className="font-medium">Out of Stock</span>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-medium text-lg">Quantity:</span>
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-6 py-2 min-w-[80px] text-center font-medium">
                    {quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= product.stockCount}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="furniture" size="lg" className="flex-1" disabled={!product.inStock}>
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Features Highlights */}
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <Truck className="h-8 w-8 text-primary mb-3" />
                    <span className="font-semibold">Free Shipping</span>
                    <span className="text-sm text-muted-foreground">On orders over $500</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Shield className="h-8 w-8 text-primary mb-3" />
                    <span className="font-semibold">5-Year Warranty</span>
                    <span className="text-sm text-muted-foreground">Quality guarantee</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <RotateCcw className="h-8 w-8 text-primary mb-3" />
                    <span className="font-semibold">30-Day Returns</span>
                    <span className="text-sm text-muted-foreground">Easy returns</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="mt-16">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Product Description</h3>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {product.longDescription}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="specifications" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Product Specifications</h3>
                  <div className="space-y-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-3 border-b border-gray-200">
                        <span className="font-medium text-foreground">{key}:</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6">Quality Assurance</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Award className="h-6 w-6 text-primary" />
                      <span className="font-medium">Premium Materials</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-6 w-6 text-primary" />
                      <span className="font-medium">Expert Craftsmanship</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="h-6 w-6 text-primary" />
                      <span className="font-medium">Quality Guaranteed</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>


          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6">You Might Also Like</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2">
                    {relatedProduct.category}
                  </Badge>
                  <h4 className="font-semibold mb-2">{relatedProduct.name}</h4>
                  <p className="text-2xl font-bold text-primary">${relatedProduct.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;