import { theme } from "@app/contants";
import React from "react";
import styled from "styled-components";
import { Button, Input, Select } from "@app/components";
import { MdOutlineClose } from "react-icons/md";
import { IoChevronUp } from "react-icons/io5";
import Calendar from "moedim";

interface Props {
  className?: string;
  open?: boolean;
  closeFilter: (state: boolean) => void;
}

const Filter: React.FC<Props> = ({ className, open, closeFilter }) => {
  return (
    <FilterWrapper className={`filter_wrapper ${open ? "active" : ""}`}>
      <div className="inner_wrapper">
        <div className="close_part">
          <Button className="btn btn_close" onClick={() => closeFilter(false)}>
            <MdOutlineClose />
          </Button>
        </div>
        <div className="search_options">
          <div className="title">
            <h6>Recherche par</h6>
            <IoChevronUp />
          </div>
          <div className="select_certificate_container">
            <Select
              className="certificate_selector"
              options={["Nom du certificat"]}
            />
          </div>
          <div className="select_training_container">
            <Select className="training_selector" options={["Formation"]} />
          </div>
        </div>
        <div className="generate">
          <div className="title">
            <h6>Date de generation</h6>
          </div>
          <div className="start_date_container">
            <Input placeholder="Du:" className="start_date" />
          </div>
          <div className="calendar_container">
            <StyledCalendar locale="fr-FR" />
          </div>
          <div className="end_date_container">
            <Input placeholder="Au:" className="end_date" />
          </div>
        </div>
        <div className="generate">
          <div className="title">
            <h6>Date d'expiration</h6>
          </div>
          <div className="start_date_container">
            <Input placeholder="Du:" className="start_date" />
          </div>
          <div className="calendar_container">
            <StyledCalendar locale="fr-FR" />
          </div>
          <div className="end_date_container">
            <Input placeholder="Au:" className="end_date" />
          </div>
        </div>
      </div>
    </FilterWrapper>
  );
};

const FilterWrapper = styled.div`
  &.filter_wrapper.active {
    right: 0;
    position: absolute;
    top: 0;
  }
  &.filter_wrapper {
    top: 0;
    bottom: 0;
    width: 196px;

    position: absolute;
    right: -25%;
    bottom: 0;
    box-shadow: ${theme.shadow.md};
    display: flex;
    flex-direction: column;
    transition: all 0.5s ease-in-out;
    .inner_wrapper {
      background-color: ${theme.color.white_primary};
      .close_part {
        padding: 10px 10px;
        border-bottom: 1px solid ${theme.color.gray_secondary};
        .btn_close {
          font-size: 16px;

          color: ${theme.color.gray_primary};
        }
      }
      .search_options {
        padding: 10px 10px;
        border-bottom: 1px solid ${theme.color.gray_secondary};
        .title {
          width: 100%;
          display: flex;
          align-items: center;
          font-size: 12px;
          color: ${theme.color.gray_primary};
          margin-bottom: 5px;
          h6 {
            margin-right: 90px;
          }
        }
        .select_certificate_container,
        .select_training_container {
          font-size: 10px;
          margin: 0;
          padding: 8px 0;
          box-shadow: ${theme.shadow.md};
          border-radius: ${theme.radius.sm};
          .certificate_selector,
          .training_selector {
            width: 100%;
            font-size: 10px;
            color: ${theme.color.gray_primary};
          }
        }
        .select_certificate_container {
          margin-bottom: 10px;
        }
      }
      .generate {
        padding: 10px 10px;
        border-bottom: 1px solid ${theme.color.gray_secondary};
        .title {
          width: 100%;
          display: flex;
          align-items: center;
          font-size: 12px;
          color: ${theme.color.gray_primary};
          margin-bottom: 5px;
          h6 {
            margin-right: 90px;
          }
        }

        .start_date_container,
        .end_date_container {
          width: 100%;
          display: flex;
          align-items: center;
          box-shadow: ${theme.shadow.md};
          border-radius: ${theme.radius.sm};
          padding: 8px 0;
          border: 1px solid ${theme.color.gray_primary};
        }
        .start_date_container {
          margin-bottom: 10px;
          .start_date {
            font-size: 10px;
            width: 100%;
            padding: 0;
            border: none;
            margin-left: 5px;
          }
        }
        .end_date_container {
          .end_date {
            font-size: 10px;
            width: 100%;
            padding: 0;
            border: none;
            margin-left: 5px;
          }
        }
        .calendar_container {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
        }
      }
    }
  }
`;

const StyledCalendar = styled(Calendar)`
  --moedim-primary: ${theme.color.blue_primary};
  width: 100%;
  border: none;
  padding: 5px 0;
  box-shadow: ${theme.shadow.md};
  section[aria-label="Calendar Navigation"] {
    padding: 0 5px;
    span {
      font-size: 8px;
      text-transform: capitalize;
    }
    div {
      button {
        width: 15px;
        height: 15px;
      }
    }
  }
  section[aria-label="Calendar Dates"] {
    div {
      height: 18px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        width: 18px;
        height: 18px;
        display: flex;
        align-items: center;
        font-size: 8px;
        justify-content: center;
        text-transform: capitalize;
        color: ${theme.color.gray_primary};
        font-weight: 600;
      }
      div {
        height: 18px;
        width: 18px;
        font-size: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      button[aria-label] {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 18px !important;
        height: 18px !important;
        font-size: 8px !important;
        color: ${theme.color.gray_primary};
        font-weight: 600;
      }
      button[aria-pressed="true"] {
        color: ${theme.color.white_primary};
      }
    }
  }
`;

export default Filter;
