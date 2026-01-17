import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Typography, Button, Tag, Spin } from 'antd';
import { ShoppingCart } from 'lucide-react';

const { Title, Text } = Typography;
const { Meta } = Card;

const ProductGrid = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Mock data for immediate display
        const mockProducts = [
            { _id: 1, name: "Tactical Combat Shirt", price: 45.99, image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=600&auto=format&fit=crop&q=60", category: "Apparel" },
            { _id: 2, name: "Spec-Ops Backpack", price: 89.99, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=60", category: "Gear" },
            { _id: 3, name: "Armory Badge Cap", price: 24.99, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89d?w=600&auto=format&fit=crop&q=60", category: "Apparel" },
            { _id: 4, name: "Heavy Duty Belt", price: 35.00, image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&auto=format&fit=crop&q=60", category: "Gear" },
        ];

        // Simulate API delay
        const timer = setTimeout(() => {
            setProducts(mockProducts);
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="py-20 bg-armory-dark text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 text-left">
                    <div>
                        <span className="text-armory-orange font-bold uppercase tracking-widest text-sm">New Arrivals</span>
                        <Title level={2} style={{ color: '#fff', textTransform: 'uppercase', margin: '8px 0 0 0' }}>Fresh Gear</Title>
                    </div>
                    <Button type="link" className="text-gray-400 hover:text-white p-0 text-lg hidden md:block">
                        View All Products
                    </Button>
                </div>

                {loading ? (
                    <div className="py-20">
                        <Spin size="large" tip="Loading gear..." />
                    </div>
                ) : (
                    <Row gutter={[32, 32]}>
                        {products.map((product) => (
                            <Col xs={24} sm={12} lg={6} key={product._id}>
                                <Card
                                    hoverable
                                    style={{ backgroundColor: '#000', borderColor: '#1f1f1f', overflow: 'hidden' }}
                                    cover={
                                        <div className="relative aspect-square overflow-hidden group">
                                            <img
                                                alt={product.name}
                                                src={product.image}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                            />
                                            <Tag color="#FF6000" className="absolute top-4 right-4 font-bold border-none text-black">NEW</Tag>

                                            {/* Quick Add Overlay */}
                                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <Button
                                                    type="primary"
                                                    size="large"
                                                    icon={<ShoppingCart size={18} />}
                                                    className="bg-white text-black hover:!bg-armory-orange font-bold border-none uppercase flex items-center gap-2"
                                                >
                                                    Add to Cart
                                                </Button>
                                            </div>
                                        </div>
                                    }
                                    bodyStyle={{ padding: '16px', textAlign: 'left' }}
                                >
                                    <Meta
                                        title={
                                            <a href="#" className="text-white hover:text-armory-orange text-lg transition-colors">
                                                {product.name}
                                            </a>
                                        }
                                        description={
                                            <div>
                                                <Text type="secondary" className="block mb-1 text-sm">{product.category}</Text>
                                                <Text strong className="text-xl text-white">${product.price.toFixed(2)}</Text>
                                            </div>
                                        }
                                    />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </div>
        </section>
    );
};

export default ProductGrid;
