import React from 'react';
import { Typography, Form, Input, Button, Row, Col, Card } from 'antd';
import { EnvironmentOutlined, PhoneOutlined, MailOutlined, ClockCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const Contact: React.FC = () => {
  const handleSubmit = (values: any) => {
    console.log('Form submitted:', values);
  };

  const contactInfo = [
    {
      icon: <EnvironmentOutlined className="text-2xl text-blue-600" />,
      title: "Our Location",
      details: "123 Business Street, New York, NY 10001"
    },
    {
      icon: <PhoneOutlined className="text-2xl text-blue-600" />,
      title: "Phone Number",
      details: "+1 (123) 456-7890"
    },
    {
      icon: <MailOutlined className="text-2xl text-blue-600" />,
      title: "Email Address",
      details: "info@oxopackaging.com"
    },
    {
      icon: <ClockCircleOutlined className="text-2xl text-blue-600" />,
      title: "Working Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-16 bg-gray-50 rounded-lg">
        <Title level={1}>Get In Touch</Title>
        <Paragraph className="text-lg text-gray-600 max-w-3xl mx-auto">
          Have questions about our packaging solutions? We're here to help! 
          Contact us today for expert advice and custom quotes.
        </Paragraph>
      </div>

      {/* Contact Info Cards */}
      <Row gutter={[24, 24]}>
        {contactInfo.map((info, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
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

      {/* Contact Form */}
      <Row gutter={24}>
        <Col xs={24} lg={16}>
          <Card title={<Title level={2}>Send Us a Message</Title>}>
            <Form
              layout="vertical"
              onFinish={handleSubmit}
              className="space-y-4"
            >
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please enter your name' }]}
                  >
                    <Input size="large" placeholder="Your Name" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: 'Please enter your email' },
                      { type: 'email', message: 'Please enter a valid email' }
                    ]}
                  >
                    <Input size="large" placeholder="Your Email" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                label="Subject"
                name="subject"
                rules={[{ required: true, message: 'Please enter a subject' }]}
              >
                <Input size="large" placeholder="Message Subject" />
              </Form.Item>

              <Form.Item
                label="Message"
                name="message"
                rules={[{ required: true, message: 'Please enter your message' }]}
              >
                <TextArea 
                  rows={6} 
                  placeholder="Your Message"
                  className="resize-none"
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" size="large">
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        <Col xs={24} lg={8}>
          <Card className="h-full bg-blue-50">
            <Title level={2}>Why Choose Us?</Title>
            <ul className="space-y-4 mt-6">
              <li className="flex items-start space-x-3">
                <div className="bg-blue-600 text-white p-2 rounded-full mt-1">✓</div>
                <div>
                  <Title level={4}>Expert Support</Title>
                  <Paragraph className="text-gray-600">
                    Our team of packaging experts is here to help you find the perfect solution.
                  </Paragraph>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-blue-600 text-white p-2 rounded-full mt-1">✓</div>
                <div>
                  <Title level={4}>Quick Response</Title>
                  <Paragraph className="text-gray-600">
                    Get responses to your inquiries within 24 hours.
                  </Paragraph>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-blue-600 text-white p-2 rounded-full mt-1">✓</div>
                <div>
                  <Title level={4}>Custom Solutions</Title>
                  <Paragraph className="text-gray-600">
                    Tailored packaging solutions to meet your specific needs.
                  </Paragraph>
                </div>
              </li>
            </ul>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Contact; 