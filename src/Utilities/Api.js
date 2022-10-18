const Api = (URL) => {
  return fetch(URL).then((result) => result.json());
};

export default Api;
