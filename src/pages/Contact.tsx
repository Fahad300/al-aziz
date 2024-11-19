import React from 'react';
import { Typography, Button, Row, Col, Card } from 'antd';
import { 
  WhatsAppOutlined, 
  EnvironmentOutlined, 
  PhoneOutlined, 
  ClockCircleOutlined 
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <EnvironmentOutlined className="text-4xl text-primary" />,
      title: "Our Location",
      details: "123 Business Street, City, Country"
    },
    {
      icon: <PhoneOutlined className="text-4xl text-primary" />,
      title: "Call Us",
      details: "+1 (123) 456-7890"
    },
    {
      icon: <WhatsAppOutlined className="text-4xl text-primary" />,
      title: "WhatsApp",
      details: "+1 (123) 456-7890"
    },
    {
      icon: <ClockCircleOutlined className="text-4xl text-primary" />,
      title: "Business Hours",
      details: "Mon - Sat: 9:00 AM - 6:00 PM"
    }
  ];

  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    const whatsappNumber = "1234567890";
    const message = "Hi, I'm interested in your packaging solutions.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-16 bg-gray-50">
        <Title level={1}>Get In Touch</Title>
        <Paragraph className="text-lg text-gray-600 max-w-3xl mx-auto px-6">
          Connect with us instantly on WhatsApp for quick responses and personalized packaging solutions
        </Paragraph>
      </div>

      {/* WhatsApp CTA Section */}
      <div className="max-w-7xl mx-auto px-6">
        <Card className="text-center bg-green-50 border-green-200">
          <WhatsAppOutlined className="text-6xl text-green-500 mb-4" />
          <Title level={2}>Chat with Us on WhatsApp</Title>
          <Paragraph className="text-lg mb-6">
            Get instant responses and personalized quotes directly through WhatsApp. 
            Our team is ready to assist you with all your packaging needs.
          </Paragraph>
          <Button 
            type="primary" 
            size="large" 
            icon={<WhatsAppOutlined />}
            className="bg-green-500 hover:bg-green-600"
            onClick={handleWhatsAppClick}
          >
            Start WhatsApp Chat
          </Button>
        </Card>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <Row gutter={[24, 24]}>
          {contactInfo.map((info, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <Card className="text-center h-full hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  {info.icon}
                  <Title level={4}>{info.title}</Title>
                  <Paragraph className="text-gray-600">{info.details}</Paragraph>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Map Section */}
      <div style={{textDecoration: 'none', overflow: 'hidden', maxWidth: '100%', width: '100%', height: '500px'}}>
        <div id="google-maps-canvas" style={{height: '100%', width: '100%', maxWidth: '100%'}}>
          <iframe style={{height: '100%', width: '100%', border: '0'}} src="https://www.google.com/maps/embed/v1/place?q=Lahore+pakistan&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact; 