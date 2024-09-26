import { brandsSlider } from "../modules/brands-slider.js";
import sliderLatestNew from "../modules/latest-new.js";
import { fetchData } from "../modules/fetch-data.js";

const loadHomePage = async () => {
  const dbInfo = await fetchData();

  sliderLatestNew(dbInfo.services.lodging);
  brandsSlider(dbInfo.brands);
};

loadHomePage();
