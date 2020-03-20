import React from 'react';
import Nav from '../components/Navigation';

import { Layout } from 'antd';

const { Header, Content, Footer } = Layout; 

export default () => (
  <Layout>
    <Header>
      <Nav />
    </Header>
    <Content>{props.children}</Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
);