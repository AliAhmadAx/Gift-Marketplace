import React, { useState } from "react";
import "./paginationButtons.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import {
  FaAngleRight,
  FaAngleLeft,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
const PaginationButtons = (props) => {
  // console.log(props, "pafffff")

  var numbers = 0;
  var page = -props.NumberOfRecordsPerPage;
  var onlyNumbers = /^\d+$/;
  var ValidatedString = props.goto.match(onlyNumbers);

  const maxNo = () => {
    var num = 0;
    for (var i = 1; i <= 5; i++) {
      if ((props.totalRecords - i) % 5 === 0) num = props.totalRecords - i;
    }

    props.setCurrentPage(props.totalPages);
    props.setRecord((props.totalPages - 1) * props.NumberOfRecordsPerPage);
  };

  return (
    <>
      <div className="main-pagination text-white">
        {/* {console.log(
          props.record - props.NumberOfRecordsPerPage < 0,
          "-----------Flag",
          props.record,
          "------",
          props.NumberOfRecordsPerPage
        )} */}
        <button
          className="yellow-color-transparent p-2 rounded-md mx-1"
          disabled={props.record - props.NumberOfRecordsPerPage < 0}
          onClick={() => {
            props.setRecord(0);
            props.setCurrentPage(1);
          }}
        >
          <FaAngleDoubleLeft />
        </button>
        <button
          className="yellow-color-transparent p-2 rounded-md mx-1"
          disabled={props.record - props.NumberOfRecordsPerPage < 0}
          onClick={() => {
            props.setRecord(props.record - props.NumberOfRecordsPerPage);
            props.setCurrentPage(props.currentPage - 1);
          }}
        >
          <FaAngleLeft />
        </button>

        {[...Array(props.totalPages)].map(
          (i) => (
            (page = page + props.NumberOfRecordsPerPage),
            (numbers = numbers + 1),
            numbers === props.currentPage ? (
              <>
                {numbers === props.totalPages && props.totalPages > 2 ? (
                  <button
                    className="yellow-color-transparent p-2 rounded-md mx-1"
                    value={page - props.NumberOfRecordsPerPage * 2}
                    onClick={(e) => {
                      props.setRecord(parseInt(e.target.value));
                      props.setCurrentPage(parseInt(e.target.innerText));
                    }}
                  >
                    {numbers - 2}
                  </button>
                ) : null}

                {numbers !== 1 ? (
                  <button
                    className="yellow-color-transparent p-2 rounded-md mx-1"
                    value={page - props.NumberOfRecordsPerPage}
                    onClick={(e) => {
                      props.setRecord(parseInt(e.target.value));
                      props.setCurrentPage(parseInt(e.target.innerText));
                    }}
                  >
                    {numbers - 1}
                  </button>
                ) : null}

                <button
                  className="yellow-color py-2 px-8 rounded-md mx-1"
                  disabled={props.currentPage === numbers ? true : false}
                  value={page}
                  onClick={(e) => {
                    props.setRecord(parseInt(e.target.value));
                    props.setCurrentPage(parseInt(e.target.innerText));
                  }}
                >
                  {numbers}
                </button>

                {numbers < props.totalPages ? (
                  <button
                    className="yellow-color-transparent p-2 rounded-md mx-1"
                    disabled={
                      props.record + props.NumberOfRecordsPerPage >
                      props.totalRecords
                    }
                    value={page + props.NumberOfRecordsPerPage}
                    onClick={(e) => {
                      props.setRecord(parseInt(e.target.value));
                      props.setCurrentPage(parseInt(e.target.innerText));
                    }}
                  >
                    {numbers + 1}
                  </button>
                ) : null}

                {numbers === 1 && props.totalPages > 2 ? (
                  <button
                    className="yellow-color-transparent p-2 rounded-md mx-1"
                    value={page + props.NumberOfRecordsPerPage * 2}
                    onClick={(e) => {
                      props.setRecord(parseInt(e.target.value));
                      props.setCurrentPage(parseInt(e.target.innerText));
                    }}
                  >
                    {numbers + 2}
                  </button>
                ) : null}

                {props.totalPages > 2 &&
                props.currentPage + 2 < props.totalPages ? (
                  <button
                    className="yellow-color-transparent p-2 rounded-md mx-1"
                    value={page + props.NumberOfRecordsPerPage * 3}
                    onClick={(e) => {
                      props.setRecord(parseInt(e.target.value));
                      props.setCurrentPage(props.currentPage + 3);
                    }}
                  >
                    ...
                  </button>
                ) : null}
              </>
            ) : null
          )
        )}

        <button
          className="yellow-color-transparent p-2 rounded-md mx-1"
          disabled={
            props.record + props.NumberOfRecordsPerPage >= props.totalRecords
          }
          onClick={() => {
            props.setRecord(props.record + props.NumberOfRecordsPerPage);
            props.setCurrentPage(props.currentPage + 1);
          }}
        >
          <FaAngleRight />
        </button>

        <button
          className="yellow-color-transparent p-2 rounded-md mx-1"
          disabled={
            props.record + props.NumberOfRecordsPerPage >= props.totalRecords
          }
          onClick={() => {
            maxNo();
          }}
        >
          <FaAngleDoubleRight />
        </button>
      </div>
    </>
  );
};
export default PaginationButtons;
