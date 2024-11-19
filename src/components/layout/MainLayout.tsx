import React from 'react';
import { Layout } from 'antd';
import Header from './Header';
import Footer from './Footer';

const { Content } = Layout;

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout className="min-h-screen">
      <Header />
      <Content className="p-6">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default MainLayout; 