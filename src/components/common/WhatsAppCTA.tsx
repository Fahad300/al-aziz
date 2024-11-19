import React from 'react';
import { Typography, Button } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const WhatsAppCTA: React.FC = () => {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    const whatsappNumber = "1234567890";
    const message = "Hi, I'm interested in your packaging solutions.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="w-full bg-green-50">
      <div className="text-center py-12">
        <WhatsAppOutlined className="text-6xl text-green-500 mb-4" />
        <Title level={2}>Chat with Us on WhatsApp</Title>
        <Paragraph className="text-lg mb-6 max-w-3xl mx-auto px-6">
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
      </div>
    </div>
  );
};

export default WhatsAppCTA; 