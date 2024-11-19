import React from 'react';
import { Typography, Card, Row, Col, Button, Carousel } from 'antd';
import { RightOutlined, EnvironmentOutlined, RocketOutlined, EyeOutlined, ForkOutlined, SettingOutlined, PrinterOutlined, BulbOutlined } from '@ant-design/icons';
import WhatsAppCTA from '../components/common/WhatsAppCTA';

const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  const carouselItems = [
    {
      title: "Innovative Packaging Solutions for Every Need.",
      description: "Leading the market in high-quality packaging wrappers and shoppers for diverse industries",
      image: `${process.env.PUBLIC_URL}/carosel/banner-1.jpg`,
      buttonText: "Get Started"
    },
    {
      title: "Eco-Friendly Packaging",
      description: "Sustainable packaging solutions that protect both your products and the environment.",
      image: `${process.env.PUBLIC_URL}/carosel/banner-2.jpg`,
      buttonText: "Learn More"
    },
    {
      title: "Premium Retail Packaging",
      description: "Stand out on the shelves with our premium retail packaging solutions.",
      image: `${process.env.PUBLIC_URL}/carosel/banner-3.jpg`,
      buttonText: "Explore Now"
    }
  ];

  // Add error handling for image loading
  const handleImageError = (e: React.SyntheticEvent<HTMLDivElement, Event>) => {
    const target = e.target as HTMLDivElement;
    target.style.backgroundColor = '#f5f5f5'; // Fallback background color
  };

  const features = [
    {
      icon: <SettingOutlined className="text-5xl text-primary mb-4" />,
      title: "Customize Size and Shape",
      description: "We create what you want, therefore you have complete freedom over the size and shape of your boxes."
    },
    {
      icon: <PrinterOutlined className="text-5xl text-primary mb-4" />,
      title: "High-End Printing Quality!",
      description: "To get amazing printing results, we employ digital and inkjet printing, and this makes us different."
    },
    {
      icon: <BulbOutlined className="text-5xl text-primary mb-4" />,
      title: "Free Design Support",
      description: "You visualize, and our exceptional team of designers makes that design a reality."
    }
  ];

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
      image: "/products/display-boxes.jpg",
      description: "Eye-catching display solutions to showcase your products effectively.",
      price: "Starting from $1.75/piece"
    }
  ];

  const premiumFinishes = [
    {
      title: "Foiling",
      description: "Gold, Silver, and Holographic options",
      image: "/finishes/foiling.jpg"
    },
    {
      title: "Spot UV",
      description: "Premium finish for luxury appeal",
      image: "/finishes/spot-uv.jpg"
    },
    {
      title: "Embossing",
      description: "Add texture and dimension",
      image: "/finishes/embossing.jpg"
    }
  ];

  React.useEffect(() => {
    // Log the image paths to verify they're correct
    carouselItems.forEach((item, index) => {
      console.log(`Image ${index + 1} path:`, item.image);
    });
  }, []);

  return (
    <div>
      {/* Full-width Hero Carousel Section */}
      <div className="w-full">
        <Carousel autoplay effect="fade">
          {carouselItems.map((item, index) => (
            <div key={index}>
              <div 
                className="relative h-[600px] bg-cover bg-center"
                style={{ 
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${item.image}")`,
                }}
                onError={handleImageError}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                  <div className="max-w-7xl mx-auto w-full">
                    <Title level={1} className="text-white text-center mb-6">
                      {item.title}
                    </Title>
                    <Paragraph className="text-lg text-white text-center max-w-3xl mx-auto mb-8">
                      {item.description}
                    </Paragraph>
                    <div className="text-center">
                      <Button 
                        type="primary" 
                        size="large"
                        className="flex items-center mx-auto"
                      >
                        {item.buttonText}
                        <RightOutlined />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Contained content sections */}
      <div className="max-w-7xl mx-auto px-6 space-y-12 py-12">
        {/* Features Section with Icons */}
        <div>
          <Title level={2} className="text-center mb-8">
            Why Choose Us?
          </Title>
          <Row gutter={[24, 24]}>
            {features.map((feature, index) => (
              <Col xs={24} md={8} key={index}>
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  {feature.icon}
                  <Title level={3}>{feature.title}</Title>
                  <Paragraph className="text-gray-600">
                    {feature.description}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Premium Finishes with Images */}
        <div className="bg-white py-12">
          <Title level={2} className="text-center mb-8">
            Premium Finishes
          </Title>
          <Row gutter={[24, 24]} className="max-w-5xl mx-auto">
            {premiumFinishes.map((finish, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <Card
                  hoverable
                  cover={
                    <div className="h-48 overflow-hidden">
                      <img
                        alt={finish.title}
                        src={finish.image}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  }
                  className="text-center h-full"
                >
                  <Title level={4}>{finish.title}</Title>
                  <Paragraph>{finish.description}</Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Products Section - Full Width */}
      <div className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Title level={2}>Our Products</Title>
            <Paragraph className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our range of high-quality packaging solutions tailored to your needs
            </Paragraph>
          </div>

          <Row gutter={[24, 24]}>
            {products.map((product, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <Card
                  hoverable
                  cover={
                    <div className="h-64 overflow-hidden">
                      <img
                        alt={product.title}
                        src={product.image}
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
                      Get Quote
                    </Button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-12">
            <Button 
              type="primary" 
              size="large"
              href="/products"
              className="mx-auto"
            >
              View All Products
              <RightOutlined />
            </Button>
          </div>
        </div>
      </div>

      {/* About Us Section - Full Width with Images */}
      <div className="w-full bg-white p-5">
        <div className="text-center py-12">
          <Title level={2}>About Us</Title>
          <Paragraph className="text-lg text-gray-600 max-w-3xl mx-auto px-6">
            Learn more about our commitment to excellence in packaging solutions
          </Paragraph>
        </div>

        {/* Stacked Content Sections */}
        <div className="space-y-0">
          {/* First Stack */}
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-[100%]">
              <img 
                src="/about/factory.jpg" 
                alt="Factory" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 bg-white p-12 flex items-center">
              <div className="max-w-xl">
                <Title level={3}>Introduction</Title>
                <Paragraph className="text-lg">
                Our state-of-the-art manufacturing facility is the heart of our operations, 
                equipped with cutting-edge machinery and advanced technologies to ensure 
                precision and efficiency in every product we create. Spread over 2 acres, 
                our factory boasts a seamless workflow from raw material sourcing to final 
                packaging, ensuring quality control at every stage.
                </Paragraph>
                <Title level={4}>What Sets Us Apart:</Title>
                <Paragraph>
                <b>Advanced Technology:</b> Our facility houses the latest in printing, 
                laminating, and cutting-edge packaging machinery to meet diverse client 
                requirements.<br></br><br></br>
                <b>Sustainability Practices:</b> From energy-efficient operations to the 
                use of recyclable and biodegradable materials, our factory is designed to 
                minimize environmental impact.<br></br><br></br>
                <b>Custom Solutions:</b> We provide tailored packaging designs, allowing 
                businesses to showcase their brand identity through unique and functional 
                packaging.<br></br><br></br>
                <b>Skilled Workforce:</b> Our team of highly trained professionals brings 
                expertise and dedication to delivering products that meet the exact 
                specifications of our clients.<br></br><br></br>
                </Paragraph>
              </div>
            </div>
          </div>

          {/* Second Stack - Reversed */}
          <div className="flex flex-col md:flex-row-reverse">
            <div className="w-full md:w-1/2 h-[100%]">
              <img 
                src="/about/mission.jpg" 
                alt="Mission" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 bg-white p-12 flex items-center">
              <div className="max-w-xl">
                <Title level={3}>Mission Statement</Title>
                <Paragraph className="text-lg">
                At Al-Aziz Packages, we are on a mission to redefine packaging by 
                integrating innovation, sustainability, and quality. We strive to create 
                eco-friendly packaging solutions that not only meet but exceed the 
                highest industry standards. By delivering products that align with the 
                latest trends and environmental guidelines, we empower businesses to 
                make a positive impact on the planet while achieving their goals.
                </Paragraph>
              </div>
            </div>
          </div>

          {/* Third Stack */}
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-[100%]">
              <img 
                src="/about/vision.jpg" 
                alt="Vision" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 bg-white p-12 flex items-center">
              <div className="max-w-xl">
                <Title level={3}>Our Vision</Title>
                <Paragraph className="text-lg">
                     We envision a future where packaging goes beyond functionality to become 
                    an integral part of sustainable living. Our goal is to lead the industry by 
                    driving innovation and embracing green practices, paving the way for 
                    packaging solutions that are as environmentally responsible as they are 
                    effective. Together, we aspire to reduce waste, protect natural resources, 
                    and contribute to a cleaner, greener planet for generations to come.   
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp CTA */}
      <WhatsAppCTA />
    </div>
  );
};

export default Home; 