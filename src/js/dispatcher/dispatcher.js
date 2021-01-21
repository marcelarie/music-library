import { status } from '../actions/actions.js';
import { createUrl } from '../helpers/helpers.js';
import {
  createModal,
  hideModal,
  search,
  starManager,
  mainPage,
  showOrHideFilter,
  changeInfoOrFrontFace,
  playOrPause,
  checkModal,
} from '../stores/stores.js';
// vvvvvvv dont touch vvvvvvv
import { collection } from '../views/components/AlbumModal.js';
import { artist } from '../views/components/ArtistModal.js';
import { song } from '../views/components/SongModal.js';
import { musicVideo } from '../views/components/VideoModal.js';
import { animationModal } from '../views/renderView.js';

const dispatcher = status => {
  $(document).off().find('*').off();
  $('.header input').on('input', validateInputs);
  $('.header nav h1').on('click', goToMainPage);
  $('.options input').on('click', validateInputs);
  $('#countryModalCheckBox').on('click', validateInputs);
  $('#limitModalCheckBox').on('click', validateInputs);
  $('#explicitModal').on('click', validateInputs);
  $('#countryModal').on('change', checkFilterActive);
  $('#limitModal').on('change', checkFilterActive);
  $('#filterModal').on('click', showOrHideFilter);
  $('.starred').on('click', dispatcherStar);
  if (status === 'home' || status === 'favorite') {
    $('.clickCardItem').on('click', openModal);
    $('#showOrHideModal').on('click', checkModal);
  } else {
    $('#showOrHideModal').on('click', hideModal);
    if (status === 'song' || status === 'musicVideo') {
      $('#modalInfo').on('click', changeInfoOrFrontFace);
      $('#modalPlay').on('click', playOrPause);
    }
  }
};

const validateInputs = () => {
  const headerInput = $('.header input').val();
  if (headerInput) {
    status.page = 'home';
    search(createUrl(headerInput, $('.options input:checked').val()));
  }
};

const checkFilterActive = e => {
  if ($(e.target).siblings().is(':checked')) {
    validateInputs();
  }
};

const openModal = e => {
  e.preventDefault();
  status.positionArray = $(`.main ${e.target.nodeName}`).index(e.target);
  const searchType = $(e.target).closest('button').data('wrappertype');

  status.page = `${searchType}`;
  createModal(status.positionArray, eval(searchType));
};

const dispatcherStar = e => {
  e.preventDefault();

  if (status.page === 'home' || status.page === 'favorite') {
    starManager($('.starred').index(e.target), e);
  } else {
    starManager(status.positionArray, e);
  }
};

const goToMainPage = () => {
  status.page = 'favorite';
  mainPage();
};

export { dispatcher, dispatcherStar };
