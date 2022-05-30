import { APIClient } from "./apiCore"
import * as url from "./urls";

const api = new APIClient();

const postFakeLogin = (data: any) => api.create(url.POST_FAKE_LOGIN); 

export {
    postFakeLogin
  };