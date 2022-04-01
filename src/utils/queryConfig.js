const getQueryConfig = () => {
  const params = new URLSearchParams(window.location.search);
  if (params.has('config')) {
    const encodedQuery = params.get('config');
    return JSON.parse(atob(decodeURIComponent(encodedQuery)));
  }
  return null;
};

const setQueryConfig = (config, navigation) => {
  const encodedQuery = encodeURIComponent(btoa(JSON.stringify(config)));
  navigation({
    pathname: window.location.pathname,
    search: `?config=${encodedQuery}`
  })
}

export {
  setQueryConfig,
  getQueryConfig
}
