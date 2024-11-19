import React from 'react';
import { Layout, Row, Col, Typography, Input, Button } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Footer: AntFooter } = Layout;
const { Title, Paragraph } = Typography;

const Footer: React.FC = () => {
  return (
    <AntFooter className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <Row gutter={[48, 32]}>
          {/* About Company */}
          <Col xs={24} md={8}>
            <Title level={3} className="text-white">OXO Packaging</Title>
            <Paragraph className="text-gray-400">
              Leading manufacturer of custom boxes and packaging solutions. 
              We provide high-quality custom boxes with logo at wholesale rates.
            </Paragraph>
          </Col>

          {/* Quick Links */}
          <Col xs={24} md={8}>
            <Title level={3} className="text-white">Quick Links</Title>
            <ul className="space-y-2 text-gray-400">
              <li>Custom Boxes</li>
              <li>Retail Packaging</li>
              <li>Food Packaging</li>
              <li>Cosmetic Boxes</li>
            </ul>
          </Col>

          {/* Newsletter */}
          <Col xs={24} md={8}>
            <Title level={3} className="text-white">Newsletter</Title>
            <Paragraph className="text-gray-400">
              Subscribe to our newsletter for updates and exclusive offers
            </Paragraph>
            <Input.Group compact>
              <Input 
                style={{ width: 'calc(100% - 100px)' }} 
                placeholder="Your email" 
              />
              <Button type="primary">Subscribe</Button>
            </Input.Group>
          </Col>
        </Row>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <Row justify="space-between" align="middle">
            <Col>
              <p className="text-gray-400">
                © {new Date().getFullYear()} OXO Packaging. All rights reserved.
              </p>
            </Col>
            <Col>
              <div className="flex space-x-6 text-gray-400">
                <FacebookOutlined className="text-xl hover:text-blue-600 cursor-pointer" />
                <TwitterOutlined className="text-xl hover:text-blue-400 cursor-pointer" />
                <InstagramOutlined className="text-xl hover:text-pink-600 cursor-pointer" />
                <LinkedinOutlined className="text-xl hover:text-blue-500 cursor-pointer" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer; 