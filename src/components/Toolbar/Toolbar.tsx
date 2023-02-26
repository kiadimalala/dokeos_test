import { theme } from "@app/contants";
import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/Logo_dokeos.png";
import Button from "../Button/Button";

import { MdOutlineAdd, MdOutlineNotificationsNone } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import avatar from "../../assets/images/avatar.jpg";
import { Select } from "@app/components";
const Toolbar = () => {
  const options = ["Administration"];
  return (
    <ToolbarWrapper className="toolbar_wrapper">
      <div className="toolbar_logo">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="toolbar_current_user">
        <span className="icon">
          <CiUser />
        </span>
        <div className="select_otions">
          <Select className="user_select" options={options} />
        </div>
      </div>
      <div className="toolbar_user_action">
        <Button className="btn_add">
          <MdOutlineAdd />
        </Button>
        <Button className="btn_notification">
          <MdOutlineNotificationsNone />
        </Button>
        <Button className="btn_profil">
          <img src={avatar} alt="avatar" />
        </Button>
      </div>
    </ToolbarWrapper>
  );
};

const ToolbarWrapper = styled.div`
  &.toolbar_wrapper {
    box-shadow: ${theme.shadow.md};
    display: flex;
    align-items: center;
    padding: 10px 20px;
    .toolbar_logo,
    .toolbar_user_action {
      width: 25%;
    }
    .toolbar_logo {
      display: flex;
      align-items: center;
      .logo {
        height: 22px;
      }
    }
    .toolbar_current_user {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        color: ${theme.color.gray_primary};
      }
      .select_otions {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .user_select {
          font-size: 12px;
          color: ${theme.color.gray_primary};
        }
      }
    }
    .toolbar_user_action {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 22px;
      .btn_add,
      .btn_profil {
        width: 24px;
        height: 24px;
        border-radius: ${theme.radius.full};
      }
      .btn_profil {
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          border-radius: ${theme.radius.full};
        }
      }
      .btn_add {
        background-color: ${theme.color.gray_primary};
        color: ${theme.color.white_primary};
        font-size: 1rem;
      }
      .btn_notification {
        font-size: 24px;
        color: ${theme.color.gray_primary};
      }
    }
  }
`;

export default Toolbar;
