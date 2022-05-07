import React from "react";
import PropTypes from "prop-types";
import "./pagination.scss";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
  onPageChange: null,
};

export default function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows / _limit);

  function handlePageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }

  return (
    <div className="paginationPage">
      <span disabled={_page <= 1} onClick={() => handlePageChange(_page - 1)}>
        <ArrowBackIosOutlined />
        prev
      </span>
      <span
        disabled={_page >= totalPages}
        onClick={() => handlePageChange(_page + 1)}
      >
        next
        <ArrowForwardIosOutlined />
      </span>
    </div>
  );
}
