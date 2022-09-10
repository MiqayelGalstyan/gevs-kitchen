import { Fragment, useCallback } from "react";
import { nanoid } from "@reduxjs/toolkit";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  TableSortLabel,
  IconButton,
} from "@mui/material";
import CircularLoader from "../../../shared/containers/CircularLoader";
import ActionsDropdown from "../../../shared/ui/Table/components/actionsDropdown";
import DataMissingChip from "../../../shared/ui/DataMissingChip";
import tableStyles from "./style";
import ScrollArea from "../../../shared/containers/ScrollArea";
import { ESortDirection } from "./enums";
import useQueryParams from "../../../helpers/useQueryParams";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

interface ICustomTable {
  columns: any;
  rows: any;
  rowClasses?: any;
  actions?: any;
  filters?: any;
  title?: string;
  paginationConfig: any;
  isLoading: boolean;
  fixedLoader?: boolean;
  dropdownActions?: any;
  onRowCheck?: () => void;
  selected?: any;
  onCheckAll?: () => void;
  onColumnFilter?: any;
  showLastButton?: boolean;
  showFirstButton?: boolean;
}

const TablePaginationActions = (paginationConfig: any) => {
  const { count, page, rowsPerPage, onPageChange } = paginationConfig;
  const styles = tableStyles();

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 1);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage)));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }} className={styles.paginationStyles}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        <FirstPageIcon />
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <LastPageIcon />
      </IconButton>
    </Box>
  );
};

const CustomTable = ({
  columns,
  rows,
  rowClasses,
  actions,
  filters,
  title,
  paginationConfig,
  selected,
  isLoading,
  fixedLoader = true,
  dropdownActions,
  onColumnFilter,
  showLastButton = false,
  showFirstButton = false,
}: ICustomTable): JSX.Element => {
  const classes = tableStyles();
  const { getQueries } = useQueryParams();

  const generateActions = useCallback(() => {
    return (
      actions?.length && (
        <div className={classes.actions}>
          {actions?.map((action: any) => {
            return action ? (
              <div key={nanoid(10)}>{action.layout(rows)}</div>
            ) : (
              <p key={nanoid(10)} />
            );
          })}
        </div>
      )
    );
  }, [actions, classes.actionItem, classes.actions, rows]);

  const generateColumns = useCallback(() => {
    const queries = getQueries();

    const res = columns?.map((column: any) => (
      <Fragment key={nanoid(10)}>
        <TableCell>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {column.sort ? (
              <TableSortLabel
                classes={{
                  icon: classes.sortDirectionIcon,
                }}
                active={
                  !!(queries?.sort_type && queries?.sort_by === column.field)
                }
                hideSortIcon={!queries?.sort_type}
                direction={
                  queries?.sort_type === ESortDirection.descending
                    ? ESortDirection.descending
                    : ESortDirection.ascending
                }
                onClick={() => onColumnFilter(column.field)}
              >
                <Box className={classes.headCell}>{column.title}</Box>
              </TableSortLabel>
            ) : (
              <Box className={classes.headCell}>{column.title}</Box>
            )}
          </Box>
        </TableCell>
      </Fragment>
    ));
    return dropdownActions?.length ? (
      <Fragment>
        <TableCell className={classes.actionsHeadCell}></TableCell>
        {res}
      </Fragment>
    ) : (
      res
    );
  }, [classes.headCell, columns, dropdownActions?.length]);

  const generateSingleRow = useCallback(
    (row: any, rowIndex: number) => {
      const newRow = columns.map((column: any) => {
        if (column?.layout) {
          return (
            <TableCell
              className={classes.bodyCellLayout}
              key={nanoid(10)}
              scope="row"
            >
              {column.layout(row)}
            </TableCell>
          );
        }

        return (
          <TableCell className={classes.bodyCell} key={nanoid(10)} scope="row">
            {row[column.field] || <DataMissingChip />}
          </TableCell>
        );
      });

      return dropdownActions && dropdownActions.length ? (
        <Fragment>
          <TableCell className={classes.actionDropdown}>
            <Box className={classes.actionDropdownWrapper}>
              <ActionsDropdown
                list={dropdownActions}
                row={row}
                rowIndex={rowIndex}
              />
            </Box>
          </TableCell>
          {newRow}
        </Fragment>
      ) : (
        <Fragment>{newRow}</Fragment>
      );
    },
    [classes.bodyCell, columns, dropdownActions, selected]
  );

  const generateRows = useCallback(() => {
    return rows.map((row: any, index: number) => (
      <TableRow
        key={nanoid(10)}
        className={`
        ${classes.rowDefault} ${rowClasses?.(row) || ""} 
        ${index % 2 && classes.rowDefaultGray}
        `}
      >
        {generateSingleRow(row, index)}
      </TableRow>
    ));
  }, [classes.rowDefault, generateSingleRow, rowClasses, rows]);

  return (
    <Fragment>
      {title && (
        <Box p={2} component={Paper} marginBottom={2}>
          <Typography fontSize={24} className={classes.title}>
            {title}
          </Typography>
        </Box>
      )}
      <CircularLoader
        loading={isLoading}
        //@ts-ignore
        fixed={fixedLoader}
        //@ts-ignore
        maxContent={false}
      >
        <div className={classes.container}>
          {filters && <Box my={2}>{filters}</Box>}
          {generateActions() || []}
          <Box mt={2}>
            <TableContainer component={Paper}>
              {paginationConfig?.page && (
                <Box mb={2} mt={0}>
                  <TablePagination
                    classes={{
                      toolbar: classes.paginationToolbar,
                      // select: classes.paginationSelect,
                      actions: classes.paginationActions,
                      displayedRows: classes.PaginationDisplayedRows,
                    }}
                    showFirstButton={showFirstButton}
                    showLastButton={showLastButton}
                    rowsPerPageOptions={[]}
                    component="div"
                    count={paginationConfig?.totalCount || 0}
                    rowsPerPage={parseInt(paginationConfig.rowsPerPage)}
                    page={
                      paginationConfig?.totalCount
                        ? parseInt(paginationConfig.page) - 1
                        : 0
                    }
                    onPageChange={(e, v) => {
                      paginationConfig?.pathToCheck
                        ? paginationConfig?.onChangePage(
                            e,
                            v,
                            paginationConfig?.pathToCheck
                          )
                        : paginationConfig?.onChangePage(e, v);
                    }}
                    ActionsComponent={TablePaginationActions}
                  />
                </Box>
              )}
              <ScrollArea>
                <Table className={classes.table} aria-label="a dense table">
                  <TableHead>
                    <TableRow className={classes.tableHead}>
                      {generateColumns()}
                    </TableRow>
                  </TableHead>
                  <TableBody>{generateRows()}</TableBody>
                </Table>
              </ScrollArea>
            </TableContainer>
          </Box>
          {paginationConfig?.page && (
            <Box mt={2}>
              <TablePagination
                classes={{
                  toolbar: classes.paginationToolbar,
                  // select: classes.paginationSelect,
                  actions: classes.paginationActions,
                  displayedRows: classes.PaginationDisplayedRows,
                }}
                rowsPerPageOptions={[]}
                showFirstButton={showFirstButton}
                showLastButton={showLastButton}
                component="div"
                count={paginationConfig?.totalCount || 0}
                rowsPerPage={parseInt(paginationConfig.rowsPerPage)}
                page={
                  paginationConfig?.totalCount
                    ? parseInt(paginationConfig.page) - 1
                    : 0
                }
                onPageChange={(e, v) => {
                  paginationConfig?.pathToCheck
                    ? paginationConfig?.onChangePage(
                        e,
                        v,
                        paginationConfig?.pathToCheck
                      )
                    : paginationConfig?.onChangePage(e, v);
                }}
                ActionsComponent={TablePaginationActions}
              />
            </Box>
          )}
        </div>
      </CircularLoader>
    </Fragment>
  );
};

export default CustomTable;
