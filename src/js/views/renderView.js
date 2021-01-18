const renderView = (fragment, element = '#root') => {
  $(element).html(fragment);
  console.log(fragment);
  //addEventListenersFragment(status.page);
};

export { renderView };
