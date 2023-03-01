import { useCallback, useContext } from "react";
import { AuthContext } from "../context/Auth";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const useRequest = () => {
  const [state] = useContext(AuthContext);
  const request = useCallback(
    async ({
      baseurl = BASE_URL,
      url = "",
      method = "GET",
      body = null,
      headers = {},
      includeToken = true,
    }) => {
      try {
        if (body) {
          body = JSON.stringify(body);
          headers["Content-Type"] = "application/json";
        }
        if (includeToken) {
          headers["auth-token"] = state.token;
        }
        const response = await fetch(`${baseurl}${url}`, {
          method: method,
          headers,
          body,
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error, "msg");
      }
    },
    [state]
  );
  return { request };
};

export default useRequest;
