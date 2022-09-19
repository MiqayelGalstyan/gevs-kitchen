import { Box, Typography } from "@mui/material";
import { getCategories } from "../../../store/slicers/categories";
import { ICategory } from "../../../store/models/categories.interface";
import React from "react";
import { useSelector } from "react-redux";
import useStyles from "../styles";
import { useNavigate } from "react-router";

interface ISidebarProps {
  open: boolean;
}

const Sidebar = ({ open }: ISidebarProps): JSX.Element => {
  const styles = useStyles();
  const categoriesData = useSelector(getCategories);
  const navigate = useNavigate();

  const handleClickCategory = (id: number) => {
    navigate(`/products/${id}`);
  };

  return (
    <Box className={`${styles.sidebar} ${open ? styles.sidebarOpened : ""}`}>
      <Box className={styles.sidebarContent}>
        {categoriesData?.results?.length > 0 ? (
          <ul>
            {categoriesData.results.map((item: ICategory, index: number) => (
              <li key={index} onClick={() => handleClickCategory(item.id)}>
                {item.name}
              </li>
            ))}
          </ul>
        ) : (
          <Typography variant="h6" className={styles.sidebarNoResults}>
            No Results
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Sidebar;
