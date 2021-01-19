const createFragmentList = (data, component) => {
  const fragment = $(document.createDocumentFragment());
  data.forEach(element => {
    $(fragment).append(component(element));
  });
  return fragment;
};

const createUrl = (input, typeSearch) => {
  let url = `term=${input}`;
  if (typeSearch === 'artist') {
    typeSearch = 'musicArtist';
  }
  url = `${url}&entity=${typeSearch}`;
  if ($('#countryModalCheckBox').is(':checked')) {
    url = `${url}&country=${$('#countryModal').val()}`;
  }
  if ($('#limitModalCheckBox').is(':checked')) {
    url = `${url}&limit=${$('#limitModal').val()}`;
  }
  if ($('#explicitModal').is(':checked')) {
    url = `${url}&explicit=YES`;
  } else {
    url = `${url}&explicit=NO`;
  }
  return url;
};

export { createFragmentList, createUrl };
