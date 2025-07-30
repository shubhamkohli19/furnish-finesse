import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { 
  ArrowLeft, 
  Save, 
  Upload, 
  X,
  Plus,
  Trash2
} from 'lucide-react';

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    originalPrice: '',
    stock: '',
    status: 'active',
    inStock: true,
    images: [] as string[],
    features: [] as string[],
    specifications: {
      dimensions: '',
      weight: '',
      material: '',
      color: '',
      assembly: '',
      warranty: '',
      origin: ''
    }
  });

  const categories = [
    { value: 'chairs', label: 'Chairs' },
    { value: 'tables', label: 'Tables' },
    { value: 'sofas', label: 'Sofas' },
    { value: 'beds', label: 'Beds' },
    { value: 'bean-bags', label: 'Bean Bags' },
    { value: 'storage', label: 'Storage' },
  ];

  const statuses = [
    { value: 'active', label: 'Active' },
    { value: 'draft', label: 'Draft' },
    { value: 'archived', label: 'Archived' },
  ];

  // Sample product data (in real app, fetch from API)
  const sampleProduct = {
    id: '1',
    name: 'Elegant Wooden Chair',
    description: 'This elegant wooden chair combines traditional craftsmanship with modern design. Made from sustainably sourced oak wood, it features a comfortable cushioned seat and ergonomic backrest.',
    category: 'chairs',
    price: '299',
    originalPrice: '349',
    stock: '15',
    status: 'active',
    inStock: true,
    images: ['/src/assets/chair-1.jpg', '/src/assets/table-1.jpg'],
    features: [
      'Sustainably sourced oak wood construction',
      'Ergonomic design for optimal comfort',
      'Hand-finished with natural oil treatment',
      'Weight capacity: 250 lbs',
      'Easy assembly with included tools'
    ],
    specifications: {
      dimensions: '18" W x 20" D x 32" H',
      weight: '25 lbs',
      material: 'Oak wood, premium fabric',
      color: 'Natural oak with cream cushion',
      assembly: 'Required (tools included)',
      warranty: '5 years',
      origin: 'Handcrafted in USA'
    }
  };

  useEffect(() => {
    // Simulate loading product data
    const loadProduct = async () => {
      setIsLoadingData(true);
      try {
        // In a real app, you would fetch the product data from your API
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setFormData({
          name: sampleProduct.name,
          description: sampleProduct.description,
          category: sampleProduct.category,
          price: sampleProduct.price,
          originalPrice: sampleProduct.originalPrice,
          stock: sampleProduct.stock,
          status: sampleProduct.status,
          inStock: sampleProduct.inStock,
          images: sampleProduct.images,
          features: sampleProduct.features,
          specifications: sampleProduct.specifications
        });
      } catch (error) {
        console.error('Error loading product:', error);
      } finally {
        setIsLoadingData(false);
      }
    };

    loadProduct();
  }, [id]);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSpecificationChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      specifications: {
        ...prev.specifications,
        [field]: value
      }
    }));
  };

  const handleAddFeature = () => {
    const newFeature = prompt('Enter a new feature:');
    if (newFeature && newFeature.trim()) {
      setFormData(prev => ({
        ...prev,
        features: [...prev.features, newFeature.trim()]
      }));
    }
  };

  const handleRemoveFeature = (index: number) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...newImages]
      }));
    }
  };

  const handleRemoveImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // In a real app, you would send this data to your API
      console.log('Updating product:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Navigate back to product management
      navigate('/admin/products');
    } catch (error) {
      console.error('Error updating product:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this product? This action cannot be undone.')) {
      setIsLoading(true);
      try {
        // In a real app, you would send a delete request to your API
        console.log('Deleting product:', id);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Navigate back to product management
        navigate('/admin/products');
      } catch (error) {
        console.error('Error deleting product:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (isLoadingData) {
    return (
      <div className="min-h-screen bg-cream p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading product...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="ghost" onClick={() => navigate('/admin/products')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Edit Product</h1>
              <p className="text-muted-foreground">
                Update product information and details
              </p>
            </div>
            <Button 
              variant="destructive" 
              onClick={handleDelete}
              disabled={isLoading}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete Product
            </Button>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Information */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                  <CardDescription>
                    Update the basic details of your product
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Product Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Elegant Wooden Chair"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="category">Category *</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category.value} value={category.value}>
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Describe your product..."
                      rows={4}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="price">Price *</Label>
                      <Input
                        id="price"
                        type="number"
                        value={formData.price}
                        onChange={(e) => handleInputChange('price', e.target.value)}
                        placeholder="299"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="originalPrice">Original Price</Label>
                      <Input
                        id="originalPrice"
                        type="number"
                        value={formData.originalPrice}
                        onChange={(e) => handleInputChange('originalPrice', e.target.value)}
                        placeholder="349"
                      />
                    </div>
                    <div>
                      <Label htmlFor="stock">Stock Quantity *</Label>
                      <Input
                        id="stock"
                        type="number"
                        value={formData.stock}
                        onChange={(e) => handleInputChange('stock', e.target.value)}
                        placeholder="15"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="status">Status</Label>
                      <Select value={formData.status} onValueChange={(value) => handleInputChange('status', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {statuses.map((status) => (
                            <SelectItem key={status.value} value={status.value}>
                              {status.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="inStock"
                        checked={formData.inStock}
                        onCheckedChange={(checked) => handleInputChange('inStock', checked)}
                      />
                      <Label htmlFor="inStock">In Stock</Label>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Product Images */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Product Images</CardTitle>
                  <CardDescription>
                    Manage product images (up to 5 images)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {formData.images.length > 0 && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                        {formData.images.map((image, index) => (
                          <div key={index} className="relative group">
                            <img
                              src={image}
                              alt={`Product ${index + 1}`}
                              className="w-full h-32 object-cover rounded-lg"
                            />
                            <button
                              type="button"
                              onClick={() => handleRemoveImage(index)}
                              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    {formData.images.length < 5 && (
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <input
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          id="image-upload"
                        />
                        <label htmlFor="image-upload" className="cursor-pointer">
                          <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                          <p className="text-sm text-gray-600">
                            Click to upload more images or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            PNG, JPG up to 5MB each
                          </p>
                        </label>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Product Features</CardTitle>
                  <CardDescription>
                    Manage key features of your product
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleAddFeature}
                      className="w-full"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Feature
                    </Button>

                    {formData.features.length > 0 && (
                      <div className="space-y-2">
                        {formData.features.map((feature, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <span className="text-sm">{feature}</span>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => handleRemoveFeature(index)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Specifications */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Specifications</CardTitle>
                  <CardDescription>
                    Update detailed specifications for your product
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="dimensions">Dimensions</Label>
                      <Input
                        id="dimensions"
                        value={formData.specifications.dimensions}
                        onChange={(e) => handleSpecificationChange('dimensions', e.target.value)}
                        placeholder={`18" W x 20" D x 32" H`}

                      />
                    </div>
                    <div>
                      <Label htmlFor="weight">Weight</Label>
                      <Input
                        id="weight"
                        value={formData.specifications.weight}
                        onChange={(e) => handleSpecificationChange('weight', e.target.value)}
                        placeholder="25 lbs"
                      />
                    </div>
                    <div>
                      <Label htmlFor="material">Material</Label>
                      <Input
                        id="material"
                        value={formData.specifications.material}
                        onChange={(e) => handleSpecificationChange('material', e.target.value)}
                        placeholder="Oak wood, premium fabric"
                      />
                    </div>
                    <div>
                      <Label htmlFor="color">Color</Label>
                      <Input
                        id="color"
                        value={formData.specifications.color}
                        onChange={(e) => handleSpecificationChange('color', e.target.value)}
                        placeholder="Natural oak with cream cushion"
                      />
                    </div>
                    <div>
                      <Label htmlFor="assembly">Assembly</Label>
                      <Input
                        id="assembly"
                        value={formData.specifications.assembly}
                        onChange={(e) => handleSpecificationChange('assembly', e.target.value)}
                        placeholder="Required (tools included)"
                      />
                    </div>
                    <div>
                      <Label htmlFor="warranty">Warranty</Label>
                      <Input
                        id="warranty"
                        value={formData.specifications.warranty}
                        onChange={(e) => handleSpecificationChange('warranty', e.target.value)}
                        placeholder="5 years"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="origin">Origin</Label>
                      <Input
                        id="origin"
                        value={formData.specifications.origin}
                        onChange={(e) => handleSpecificationChange('origin', e.target.value)}
                        placeholder="Handcrafted in USA"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Actions */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    <Save className="h-4 w-4 mr-2" />
                    {isLoading ? 'Saving...' : 'Update Product'}
                  </Button>
                  <Button type="button" variant="outline" className="w-full" onClick={() => navigate('/admin/products')}>
                    Cancel
                  </Button>
                </CardContent>
              </Card>

              {/* Preview */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Preview</CardTitle>
                  <CardDescription>
                    Quick preview of your product
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {formData.images.length > 0 && (
                      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={formData.images[0]}
                          alt="Product preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    {formData.name && (
                      <div>
                        <h3 className="font-semibold">{formData.name}</h3>
                        {formData.price && (
                          <p className="text-lg font-bold text-primary">${formData.price}</p>
                        )}
                        {formData.description && (
                          <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                            {formData.description}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct; 