import { theme } from "@app/contants";
import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Settings = () => {
  return (
    <Wrapper className="settings_wrapper">
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  &.settings_wrapper {
    width: 100%;
    height: 100% !important;
    overflow-x: hidden;
    overflow-y: auto;
    position: relative;
  }
`;

export default Settings;
