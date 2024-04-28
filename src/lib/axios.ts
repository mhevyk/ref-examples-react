import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import getItemsByPage from "../utils/fetchDummyApi";

const mock = new MockAdapter(axios, { delayResponse: 2000 });

mock.onGet("/items").reply((config) => {
  const { page, limit } = config.params;
  const data = getItemsByPage(page, limit);
  return [200, data];
});

export default axios;
