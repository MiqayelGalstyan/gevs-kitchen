import {Fragment, useCallback, useState} from "react";
import {
    Menu,
    ListItemIcon,
    ListItemText,
    MenuItem,
    IconButton,
    CircularProgress,
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {nanoid} from "@reduxjs/toolkit";

const styles = makeStyles({
    dropdownActionLoader: {
        width: "100%",
        height: "100%",
        position: "absolute",
        left: 0,
        display: "flex",
        justifyContent: "center",
        background: "#fff",
        pointerEvents: "none",
    },
});

export interface IActionsDropdownListItem<Row> {
    text: ((row: Row) => JSX.Element | string) | string;
    icon?: ((row: Row) => JSX.Element) | JSX.Element;
    isLoading?: boolean;
    isDisabled?: ((row: Row) => boolean);
    action: (row: Row) => void;
}

interface IActionsDropdownProps<Row> {
    list: IActionsDropdownListItem<Row>[];
    row: Row;
    rowIndex: number;
}

function  ActionsDropdown<Row> ({list, row, rowIndex}: IActionsDropdownProps<Row>) {
    const classes = styles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = useCallback(
        (event:any) => {
            setAnchorEl(event.currentTarget);
        },
        [setAnchorEl]
    );

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Fragment>
            <IconButton onClick={handleOpen}>
                <MoreVertIcon/>
            </IconButton>
            <Menu open={Boolean(anchorEl)} onClose={handleClose} anchorEl={anchorEl}>
                {list.map(
                    (item) =>
                        item && (
                            <MenuItem
                                dense
                                key={nanoid(10)}
                                onClick={() => {
                                    handleClose();
                                    item.action(row);
                                }}
                                disabled={item.isDisabled?.(row) || item.isLoading}
                            >
                                <ListItemIcon>
                                    {typeof item.icon === "function" ? item.icon(row) : item.icon}
                                </ListItemIcon>
                                <ListItemText>
                                    {typeof item.text === "function" ? item.text(row) : item.text}
                                </ListItemText>
                                {item.isLoading && (
                                    <div className={classes.dropdownActionLoader}>
                                        <CircularProgress/>
                                    </div>
                                )}
                            </MenuItem>
                        )
                )}
            </Menu>
        </Fragment>
    );
}

export default ActionsDropdown;
