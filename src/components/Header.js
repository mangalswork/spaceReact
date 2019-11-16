import React from "react";
import { Menu, Layout } from "antd";
import logo from "../assets/logo.svg";

const { Header } = Layout;

const HeaderWrapper = () => {
  return (
    <Header>
      <div className="sp-left-header">
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="logo">
            <img src={logo} alt="space" />
          </Menu.Item>
          <Menu.Item key="destinations">Destinations</Menu.Item>
          <Menu.Item key="comfort">Comfort</Menu.Item>
          <Menu.Item key="company">Company</Menu.Item>
          <Menu.Item key="contacts">Contacts</Menu.Item>
        </Menu>
      </div>
      <div className="sp-right-header">
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1" className="sp-first">
            MY SPACED
          </Menu.Item>
          <Menu.Item key="2">ENG</Menu.Item>
        </Menu>
      </div>
    </Header>
  );
};

export default HeaderWrapper;
