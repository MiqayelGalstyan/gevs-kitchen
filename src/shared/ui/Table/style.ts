import { makeStyles } from "@mui/styles";

const tableStyles = makeStyles((theme) => ({
  actionItem: {
    margin: "15px 0 15px 15px",
  },
  title: {
    color: "#546e7a",
  },
  table: {
    minWidth: 650,
  },
  tableHead: {
    //@ts-ignore
    backgroundColor: `${theme.palette.primary.main} !important`,
  },
  sortDirectionIcon: {
    fill: "lightgray !important",
  },
  actionDropdownWrapper: {
    borderRight: "1px solid #8e8e8e",
  },
  actionDropdown: {
    padding: "0 !important",
    position: "sticky",
    left: "0",
    background: "inherit",
  },
  actionsHeadCell: {
    width: 10,
    position: "sticky",
    left: "0",
    background: "#3c4858",
  },
  headCell: {
    color: "#ffffff",
    fontWeight: "bold",
    whiteSpace: "nowrap",
    fontSize: "14px",
  },
  bodyCell: {
    fontSize: "14px !important",
    //@ts-ignore
    color: `${theme.palette.primary.text} !important`,
  },
  bodyCellLayout: {
    //@ts-ignore
    color: `${theme.palette.primary.text} !important`,
    fontSize: "14px !important",
  },
  paginationToolbar: {
    //@ts-ignore
    background: theme.palette.primary.main,
    border: "1px solid #ddd",
    borderRadius: "2px",
  },
  paginationActions: {
    color: "#ffffff",

    "& .Mui-disabled": {
      color: "#A9A9A9FF !important",
    },
  },
  PaginationDisplayedRows: {
    margin: "0 !important",
    color: "#ffffff",
  },
  container: {
    position: "relative",
    marginBottom: 10,
  },
  actions: {
    padding: "16px",
    display: "flex",
    alignItems: "center",
    background: "white",
    marginBottom: "5px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
  rowDefault: {
    fontSize: "12px",
    color: "#263238",
    background: "#ffffff",

    "&:hover": {
      transition: "all .2s ease",
      background: "#c9c9c9",
    },
  },
  rowDefaultGray: {
    background: "#f1f1f1",
  },
  paginationStyles: {
    "& .Mui-disabled": {
      color: "#A9A9A9FF !important",
      "& svg": {
        "& path": {
          fill: "#A9A9A9FF !important",
        },
      },
    },
    "& button": {
      "& svg": {
        "& path": {
          fill: "white",
        },
      },
    },
  },
}));

export default tableStyles;
