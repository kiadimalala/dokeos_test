import { theme } from "@app/contants";
import React from "react";
import styled from "styled-components";
import { Button, Input } from "@app/components";

import upload from "../../assets/icons/upload.svg";

import { MdOutlineSearch, MdFilterList } from "react-icons/md";

interface RowData {
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
}

const columns = [
  { Header: "Column 1", accessor: "col1" },
  { Header: "Column 2", accessor: "col2" },
  { Header: "Column 3", accessor: "col3" },
  { Header: "Column 4", accessor: "col4" },
  { Header: "Column 5", accessor: "col5" },
];

const data: RowData[] = [
  {
    col1: "Row 1, Column 1",
    col2: "Row 1, Column 2",
    col3: "Row 1, Column 3",
    col4: "Row 1, Column 4",
    col5: "Row 1, Column 5",
  },
  {
    col1: "Row 2, Column 1",
    col2: "Row 2, Column 2",
    col3: "Row 2, Column 3",
    col4: "Row 2, Column 4",
    col5: "Row 2, Column 5",
  },
];

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
          <Button
            className="btn btn_upload"
            label="Export excel"
            onClick={() => openFilter(true)}
          >
            <img className="icon" src={upload} alt="boutton_upload" />
          </Button>
          <div className="search_field">
            <span className="search_icon">
              <MdOutlineSearch />
            </span>
            <Input className="search_input" />
            <span className="filter_icon">
              <MdFilterList />
            </span>
          </div>
        </div>
      </div>
      <div className="table_body">
        {/* <Table columns={columns} data={data} /> */}
      </div>
      <div className="table_footer">d</div>
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
    padding: 20px 0;
    border-radius: ${theme.radius.lg};
    box-shadow: ${theme.shadow.md};
    .table_header {
      width: 100%;
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      .header_title {
        width: 35%;
        h3 {
          margin: 0;
          font-size: 20px;
        }
        padding-left: 20px;
      }
      .header_actions {
        width: 65%;
        display: flex;
        align-items: center;
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
          }
        }
      }
    }
  }
`;

export default Tables;
