import React, { useState, useEffect } from 'react';
import { Typography, Card, Row, Col, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import Loader from '../components/common/Loader';
import LoadingImage from '../components/common/LoadingImage';
import WhatsAppCTA from '../components/common/WhatsAppCTA';

const { Title, Paragraph } = Typography;

const Products: React.FC = () => {
  const [pageLoading, setPageLoading] = useState(true);

  const products = [
    {
      title: "Custom Retail Boxes",
      image: "/products/retail-boxes.jpg",
      description: "Premium retail packaging solutions designed to enhance your brand visibility and product protection.",
      price: "Starting from $0.99/piece"
    },
    {
      title: "Food Packaging",
      image: "/products/food-packaging.jpg",
      description: "Food-grade packaging solutions that maintain freshness and appeal to customers.",
      price: "Starting from $0.75/piece"
    },
    {
      title: "Cosmetic Boxes",
      image: "/products/cosmetic-boxes.jpg",
      description: "Elegant and durable packaging solutions for beauty and cosmetic products.",
      price: "Starting from $1.25/piece"
    },
    {
      title: "Gift Boxes",
      image: "/products/gift-boxes.jpg",
      description: "Luxurious gift packaging that makes every occasion special.",
      price: "Starting from $1.50/piece"
    },
    {
      title: "Shipping Boxes",
      image: "/products/shipping-boxes.jpg",
      description: "Sturdy and reliable shipping solutions for safe product delivery.",
      price: "Starting from $0.50/piece"
    },
    {
      title: "Display Boxes",
      image: "/products/retail-boxes.jpg",
      description: "Eye-catching display solutions to showcase your products effectively.",
      price: "Starting from $1.75/piece"
    },
    // Additional products specific to the Products page
    {
      title: "Mailer Boxes",
      image: "/products/food-packaging.jpg",
      description: "Custom mailer boxes perfect for e-commerce and subscription services.",
      price: "Starting from $0.85/piece"
    },
    {
      title: "Rigid Boxes",
      image: "/products/food-packaging.jpg",
      description: "Premium rigid boxes for luxury products and high-end packaging needs.",
      price: "Starting from $2.50/piece"
    },
    {
      title: "Pillow Boxes",
      image: "/products/cosmetic-boxes.jpg",
      description: "Unique pillow-shaped boxes ideal for gifts and small items.",
      price: "Starting from $0.65/piece"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (pageLoading) {
    return <Loader />;
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Title level={1}>Our Products</Title>
            <Paragraph className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of packaging solutions designed to meet your specific needs.
            </Paragraph>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <Row gutter={[24, 24]}>
          {products.map((product, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <Card
                hoverable
                cover={
                  <div className="h-64 overflow-hidden">
                    <LoadingImage
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                }
                className="h-full"
              >
                <Title level={4}>{product.title}</Title>
                <Paragraph className="text-gray-600 min-h-[60px]">
                  {product.description}
                </Paragraph>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-primary font-semibold">
                    {product.price}
                  </span>
                  <Button type="primary">
                    Get Quote <RightOutlined />
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* WhatsApp CTA */}
      <WhatsAppCTA />
    </div>
  );
};

export default Products; 