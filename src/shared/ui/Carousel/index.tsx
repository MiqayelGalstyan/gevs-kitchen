import { Box, Typography } from "@mui/material";
import { IProduct } from "../../../store/models/products.interface";
import React from "react";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import NextIcon from "../../../assets/icons/rightIcon.svg";
import PrevIcon from "../../../assets/icons/leftIcon.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface ICarouselProps {
  infinite?: boolean;
  data: Array<IProduct>;
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1200, min: 576 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 575, min: 0 },
    items: 1,
  },
};

const CarouselSlider = ({
  infinite = true,
  data,
}: ICarouselProps): JSX.Element => {
  const styles = useStyles();

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
    return (
      <div className="carousel-button-group">
        <Box onClick={() => previous()} className="prev">
          <img src={PrevIcon} alt="previous" />
        </Box>
        <Box onClick={() => next()} className="next">
          <img src={NextIcon} alt="next" />
        </Box>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className={styles.slider}>
        <Carousel
          infinite={infinite}
          responsive={responsive}
          arrows={false}
          customButtonGroup={<ButtonGroup />}
        >
          {data.length > 0 &&
            data.map((item: IProduct, index: number) => (
              <Box className={styles.item} key={index}>
                <Box className={styles.imgArea}>
                  <Box className={styles.shadowedBorder}>
                    <img src={item.images[0]} alt={`product-img${index}`} />
                  </Box>
                </Box>
                <Box className={styles.txtArea}>
                  <Typography className="title">Name - {item.name}</Typography>
                  <Typography className="price">{item.price}$</Typography>
                  <Link className="linkTo" to={`/product-details/${item.id}`}>
                    Details
                  </Link>
                </Box>
              </Box>
            ))}
        </Carousel>
      </div>
    </React.Fragment>
  );
};

export default CarouselSlider;
