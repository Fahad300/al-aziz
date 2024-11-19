import React from 'react';
import { Typography, Row, Col, Card, Timeline } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

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
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-16 bg-gray-50 rounded-lg">
        <Title level={1}>About OXO Packaging</Title>
        <Paragraph className="text-lg text-gray-600 max-w-3xl mx-auto">
          Leading the packaging industry with innovation, quality, and sustainable solutions.
        </Paragraph>
      </div>

      {/* Company Overview */}
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={16}>
          <Card className="h-full">
            <Title level={2}>Our Story</Title>
            <Paragraph className="text-gray-600">
              Since our inception, OXO Packaging has been at the forefront of the packaging industry, 
              providing innovative solutions to businesses across the United States. Our commitment to 
              quality and customer satisfaction has made us a trusted partner for companies of all sizes.
            </Paragraph>
            <Paragraph className="text-gray-600">
              We combine cutting-edge technology with traditional craftsmanship to create packaging 
              solutions that not only protect your products but also enhance your brand identity.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card className="h-full bg-blue-50">
            <Title level={2}>Our Values</Title>
            <Timeline>
              {values.map((value, index) => (
                <Timeline.Item 
                  key={index}
                  dot={<CheckCircleOutlined className="text-blue-600" />}
                >
                  <Paragraph className="text-gray-700 font-medium">
                    {value}
                  </Paragraph>
                </Timeline.Item>
              ))}
            </Timeline>
          </Card>
        </Col>
      </Row>

      {/* Stats Section */}
      <Row gutter={[24, 24]} className="text-center">
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Title level={2} className="text-blue-600">10K+</Title>
            <Paragraph>Happy Clients</Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Title level={2} className="text-blue-600">50K+</Title>
            <Paragraph>Projects Completed</Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Title level={2} className="text-blue-600">15+</Title>
            <Paragraph>Years Experience</Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Title level={2} className="text-blue-600">100%</Title>
            <Paragraph>Satisfaction Rate</Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default About; 