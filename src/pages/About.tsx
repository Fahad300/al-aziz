import React from 'react';
import { Typography, Row, Col, Card, Timeline } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import WhatsAppCTA from '../components/common/WhatsAppCTA';

const { Title, Paragraph } = Typography;

const About: React.FC = () => {
  const values = [
    "Customer Satisfaction",
    "Quality Excellence",
    "Innovation",
    "Sustainability",
    "Timely Delivery"
  ];

  return (
    <div className="w-full bg-gray-50">
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

    {/* About content */}
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* ... existing about content ... */}
    </div>

    {/* WhatsApp CTA */}
    <WhatsAppCTA />
  </div>
  );
};

export default About; 