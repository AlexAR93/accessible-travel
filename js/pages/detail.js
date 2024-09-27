import { brandsSlider } from "../modules/brands-slider.js";
import { detailLayout } from "../modules/detail-layout.js";
import { fetchData } from "../modules/fetch-data.js";

const loadDetailPage = async () => {
  const dbInfo = await fetchData();
  brandsSlider(dbInfo.brands);
  detailLayout()
};

loadDetailPage();
