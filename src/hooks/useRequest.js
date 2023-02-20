import { useCallback, useContext } from 'react';
import { AuthContext } from '../context/Auth';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const useRequest = () => {
  const [state] = useContext(AuthContext);

  const request = useCallback(
    async ({
      baseurl = BASE_URL,
      url = '',
      method = 'GET',
      body = null,
      headers = {},
      includeToken = false,
    }) => {
      try {
        if (body) {
          body = JSON.stringify(body);
          headers['Content-Type'] = 'application/json';
          headers['Access-Control-Allow-Origin'] = '*';
        }
        if (includeToken) {
          headers['Authorization'] = `Bearer ${state.token}`;
        }
        const response = await fetch(`${baseurl}${url}`, {
          method: method,
          headers,
          body,
        });
        const data = await response.json();
        return data;
      } catch (error) {
        // const msg = error.json();
        console.log(error, 'msg');
      }
    },
    [state]
  );
  return { request };
};

export default useRequest;
