import React from 'react';
import { Layout, Row, Col, Typography, Space } from 'antd';
import { 
  FacebookOutlined, 
  TwitterOutlined, 
  InstagramOutlined, 
  LinkedinOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  WhatsAppOutlined
} from '@ant-design/icons';

const { Footer: AntFooter } = Layout;
const { Title, Paragraph, Text } = Typography;

const Footer: React.FC = () => {
  return (
    <AntFooter className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <Row gutter={[48, 32]}>
          {/* Company Logo and Info */}
          <Col xs={24} md={8}>
            <div className="mb-6">
              <img src="/ap-footer-logo.png" alt="AL-Aziz Packages" className="h-12" />
            </div>
            <Paragraph className="text-gray-400">
              AL-Aziz Packages is a leading manufacturer of custom packaging solutions. 
              We specialize in creating high-quality, innovative packaging that helps 
              your products stand out in the market.
            </Paragraph>
          </Col>

          {/* Quick Links */}
          <Col xs={24} md={8}>
            <Title level={4} className="text-white mb-6">Quick Links</Title>
            <Space direction="vertical" className="text-gray-400">
              <Text className="text-gray-400 hover:text-primary cursor-pointer">Home</Text>
              <Text className="text-gray-400 hover:text-primary cursor-pointer">About Us</Text>
              <Text className="text-gray-400 hover:text-primary cursor-pointer">Products</Text>
              <Text className="text-gray-400 hover:text-primary cursor-pointer">Contact</Text>
            </Space>
          </Col>

          {/* Contact Information */}
          <Col xs={24} md={8}>
            <Title level={4} className="text-white mb-6">Contact Us</Title>
            <Space direction="vertical" size="large" className="text-gray-400">
              <div className="flex items-center">
                <EnvironmentOutlined className="text-primary mr-3 text-lg" />
                <span>123 Business Street, City, Country</span>
              </div>
              <div className="flex items-center">
                <PhoneOutlined className="text-primary mr-3 text-lg" />
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <WhatsAppOutlined className="text-primary mr-3 text-lg" />
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <MailOutlined className="text-primary mr-3 text-lg" />
                <span>info@alazizpackages.com</span>
              </div>
            </Space>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <Row justify="space-between" align="middle">
            <Col>
              <Text className="text-gray-400">
                © {new Date().getFullYear()} AL-Aziz Packages. All rights reserved.
              </Text>
            </Col>
            <Col>
              <Space size="large" className="text-gray-400">
                <FacebookOutlined className="text-xl hover:text-primary cursor-pointer" />
                <TwitterOutlined className="text-xl hover:text-primary cursor-pointer" />
                <InstagramOutlined className="text-xl hover:text-primary cursor-pointer" />
                <LinkedinOutlined className="text-xl hover:text-primary cursor-pointer" />
              </Space>
            </Col>
          </Row>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer; 