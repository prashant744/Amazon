import React, { useEffect } from "react";
import Banner from "./Banner";
import "./home.css";
import Slide from "./Slide";
import { getProducts } from "../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import { Divider } from "@mui/material";

const Maincomp = () => {
  const { products } = useSelector((state) => state.getproductsdata);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="home_section">
      <div className="banner_part">
        <Banner />
      </div>

      <div className="slide_part">
        <div className="left_slide">
          <Slide title="Deal of the Day" products={products} />
        </div>
        <div className="right_slide">
          <h4>Festival latest launches</h4>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/Xiaomi/27th_31stAUG/Opensale/LP_header_PC._CB437955163_.jpg"
            alt="images"
          />
          <a href="#">See More</a>
        </div>
      </div>
      <Slide title="Today's Deal" products={products} />
      <div className="center_img">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonLaunchpad/2022/Sleep_data/new/World-sleep-day-1500x400_2.png"
          alt=""
        />
      </div>
      <Slide title="Best Seller" products={products} />
      <Slide title="Upto 80% off" products={products} />
    </div>
  );
};

export default Maincomp;
