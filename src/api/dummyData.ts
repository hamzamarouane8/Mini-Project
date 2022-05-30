import { APIClient } from "./apiCore";
import { dummyData } from "./fake/dummyData";
import * as url from "./urls";

const api = new APIClient();

const getDummyData = () => {
  return api.get(url.GET_DUMMY_DATA);
};

const getDummyDataFake = () => {
  return dummyData;
};

export { getDummyData,getDummyDataFake };
