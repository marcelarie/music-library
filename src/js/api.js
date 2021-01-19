function get(url) {
  const setting = {
    url: `https://itunes.apple.com/search?${url}`,
    type: 'GET',
    dataType: 'jsonp',
  };
  return $.ajax(setting);
}
function getCountry() {
  const setting = {
    url: `https://www.liferay.com/api/jsonws/country/get-countries/`,
    type: 'GET',
  };
  return $.ajax(setting);
}

export { get, getCountry };
