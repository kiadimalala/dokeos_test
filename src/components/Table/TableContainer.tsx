import { theme } from "@app/contants";
import React from "react";
import styled from "styled-components";
import { Button, Input, Table } from "@app/components";

import upload from "../../assets/icons/upload.svg";

import { MdOutlineSearch, MdFilterList } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";

interface Props {
  className?: string;
  openFilter: (state: boolean) => void;
}

const Tables: React.FC<Props> = ({ openFilter }) => {
  return (
    <Wrapper className="table_wrapper">
      <div className="table_header">
        <div className="header_title">
          <h3 className="title">Utilisateurs</h3>
        </div>
        <div className="header_actions">
          <Button className="btn btn_upload" label="Export excel">
            <img className="icon" src={upload} alt="boutton_upload" />
          </Button>
          <div className="search_field">
            <span className="search_icon">
              <MdOutlineSearch />
            </span>
            <Input className="search_input" placeholder="Rechercher" />
            <Button
              className=" btn btn_filter filter_icon"
              onClick={() => openFilter(true)}
            >
              <MdFilterList />
            </Button>
          </div>
        </div>
      </div>
      <div className="table_body">
        <Table />
      </div>
      <div className="table_footer">
        <Button label="Voir plus" className="btn btn_see_more">
          <IoChevronDown />
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  &.table_wrapper {
    background-color: ${theme.color.white_primary};
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 90px;
    padding: 0 0 20px 0;
    border-radius: ${theme.radius.lg};
    box-shadow: ${theme.shadow.md};
    .table_header {
      width: 100%;
      display: flex;
      align-items: center;
      margin: 20px 0;
      .header_title {
        width: 45%;
        h3 {
          margin: 0;
          font-size: 20px;
        }
        padding-left: 10px;
      }
      .header_actions {
        width: 65%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
        gap: 10px;
        .btn_upload {
          background-color: ${theme.color.blue_primary};
          display: flex;
          align-items: center;
          padding: 8px 15px;
          flex-direction: row-reverse;
          border-radius: ${theme.radius.full}!important;
          gap: 8px;
          font-size: 12px;
          color: ${theme.color.white_primary};
        }
        .search_field {
          position: relative;
          display: flex;
          align-items: center;
          box-shadow: ${theme.shadow.md};
          border-radius: ${theme.radius.full};
          padding: 5px 0;

          .search_icon,
          .filter_icon {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            font-size: 22px;
            color: ${theme.color.gray_primary};
          }
          .search_icon {
            padding: 0 10px;
          }
          .filter_icon {
            padding-right: 5px;
          }
          .search_input {
            padding: 0;
            margin: 0 !important;
            border-bottom: none;
            font-size: 12px;
          }
        }
      }
    }
    .table_body {
      width: 100% !important;
      display: flex;
      align-items: center;
      border-bottom: 1px solid ${theme.color.gray_secondary};
      padding-bottom: 20px;
    }
    .table_footer {
      margin: 20px 0 0 0;
      .btn_see_more {
        color: ${theme.color.gray_primary};
        font-size: 13px;
        font-weight: 600;
      }
    }
  }
`;

export default Tables;
