import React from 'react';
import { Typography, Card, Row, Col, Button, Carousel } from 'antd';
import { RightOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  const carouselItems = [
    {
      title: "Custom Packaging Solutions",
      description: "Get high-quality custom boxes with logo at wholesale rates. Order now and enjoy premium packaging solutions!",
      image: "/images/banner1.jpg",
      buttonText: "Get Started"
    },
    {
      title: "Eco-Friendly Packaging",
      description: "Sustainable packaging solutions that protect both your products and the environment.",
      image: "/images/banner2.jpg",
      buttonText: "Learn More"
    },
    {
      title: "Premium Retail Packaging",
      description: "Stand out on the shelves with our premium retail packaging solutions.",
      image: "/images/banner3.jpg",
      buttonText: "Explore Now"
    }
  ];

  const features = [
    {
      title: "Customize Size and Shape",
      description: "We create what you want, therefore you have complete freedom over the size and shape of your boxes."
    },
    {
      title: "High-End Printing Quality!",
      description: "To get amazing printing results, we employ digital and inkjet printing, and this makes us different."
    },
    {
      title: "Free Design Support",
      description: "You visualize, and our exceptional team of designers makes that design a reality."
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Carousel Section */}
      <Carousel autoplay effect="fade" className="rounded-lg overflow-hidden">
        {carouselItems.map((item, index) => (
          <div key={index}>
            <div 
              className="relative h-[500px] bg-cover bg-center"
              style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.image})`,
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                <Title level={1} className="text-white text-center mb-6">
                  {item.title}
                </Title>
                <Paragraph className="text-lg text-white text-center max-w-3xl mx-auto mb-8">
                  {item.description}
                </Paragraph>
                <Button 
                  type="primary" 
                  size="large"
                  className="flex items-center"
                >
                  {item.buttonText}
                  <RightOutlined />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Features Section */}
      <div>
        <Title level={2} className="text-center mb-8">
          Why Choose Us?
        </Title>
        <Row gutter={[24, 24]}>
          {features.map((feature, index) => (
            <Col xs={24} md={8} key={index}>
              <Card className="h-full text-center hover:shadow-lg transition-shadow">
                <Title level={3}>{feature.title}</Title>
                <Paragraph className="text-gray-600">
                  {feature.description}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Services Section */}
      <div className="bg-white py-12">
        <Title level={2} className="text-center mb-8">
          Premium Finishes
        </Title>
        <Row gutter={[24, 24]} className="max-w-5xl mx-auto">
          <Col xs={24} sm={12} lg={8}>
            <Card className="text-center">
              <Title level={4}>Foiling</Title>
              <Paragraph>Gold, Silver, and Holographic options</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Card className="text-center">
              <Title level={4}>Spot UV</Title>
              <Paragraph>Premium finish for luxury appeal</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Card className="text-center">
              <Title level={4}>Embossing</Title>
              <Paragraph>Add texture and dimension</Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home; 