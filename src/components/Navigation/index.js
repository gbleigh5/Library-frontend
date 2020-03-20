import React from 'react';
import { Row, Col, Input } from 'antd';

const { Search } = Input;

const Nav = () => {
  return (
    <Row>
      <Col span={6}>
        <img src="" alt="Logo"/>
      </Col>
      <Col span={4} offset={14}>
        <Search
          placeholder="Search title, author, category"
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
        />
      </Col>
    </Row>
  );
};

export default Nav;