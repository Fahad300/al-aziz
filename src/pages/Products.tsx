import React from 'react';
import { Typography, Card, Row, Col, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Products: React.FC = () => {
  const products = [
    {
      title: "Custom Boxes",
      description: "Premium custom boxes with your branding and design.",
      features: ["Full color printing", "Custom sizes", "Multiple styles"]
    },
    {
      title: "Retail Packaging",
      description: "Eye-catching retail packaging solutions.",
      features: ["Shelf-ready designs", "Brand visibility", "Durable materials"]
    },
    {
      title: "Food Packaging",
      description: "Food-grade packaging for all types of products.",
      features: ["FDA approved", "Eco-friendly options", "Secure sealing"]
    },
    {
      title: "Cosmetic Boxes",
      description: "Luxury packaging for beauty and cosmetic products.",
      features: ["Premium finishes", "Custom inserts", "Elegant designs"]
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-16 bg-gray-50 rounded-lg">
        <Title level={1}>Our Premium Packaging Solutions</Title>
        <Paragraph className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover our wide range of custom packaging solutions designed to elevate your brand and protect your products.
        </Paragraph>
      </div>

      {/* Products Grid */}
      <Row gutter={[24, 24]}>
        {products.map((product, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <Card 
              className="h-full hover:shadow-lg transition-shadow"
              actions={[
                <Button type="link" className="text-blue-600">
                  Learn More <RightOutlined />
                </Button>
              ]}
            >
              <Title level={3}>{product.title}</Title>
              <Paragraph className="text-gray-600">
                {product.description}
              </Paragraph>
              <ul className="list-disc pl-5 text-gray-600">
                {product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </Card>
          </Col>
        ))}
      </Row>

      {/* CTA Section */}
      <div className="text-center py-12 bg-blue-50 rounded-lg">
        <Title level={2}>Ready to Order?</Title>
        <Paragraph className="text-lg mb-6">
          Get in touch with us for a custom quote tailored to your needs.
        </Paragraph>
        <Button type="primary" size="large">
          Request a Quote
        </Button>
      </div>
    </div>
  );
};

export default Products; 