"use client";

import TablePagination from "@mui/material/TablePagination";
export default function Pagination({
  count,
  page,
  rowsPerPage,
  onPageChange,
}) {
  return (
    <TablePagination
      component="div"
      count={count}
      page={page}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={[]}
      onPageChange={onPageChange}
    />
  );
}