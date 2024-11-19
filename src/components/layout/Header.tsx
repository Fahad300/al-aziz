import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { PhoneOutlined, MailOutlined } from '@ant-design/icons';
const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  const location = useLocation();
  
  const menuItems = [
    { key: '/', label: <Link to="/">Home</Link> },
    { key: '/products', label: <Link to="/products">Products</Link> },
    { key: '/about', label: <Link to="/about">About Us</Link> },
    { key: '/contact', label: <Link to="/contact">Contact</Link> }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <PhoneOutlined className="mr-2" />
              +1 (123) 456-7890
            </span>
            <span className="flex items-center">
              <MailOutlined className="mr-2" />
              info@oxopackaging.com
            </span>
          </div>
          <Button type="primary" ghost>
            Get Custom Quote
          </Button>
        </div>
      </div>

      {/* Main Header */}
      <AntHeader className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between pt-2">
          <div className="text-3xl font-bold">
            <Link to="/" className="text-primary hover:text-primary-hover">
              <img style={{ height: '45px' }} src="/ap-logo.png" alt="logo" />
            </Link>
          </div>
          <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={menuItems}
            className="border-none text-lg"
          />
        </div>
      </AntHeader>
    </>
  );
};

export default Header; 