import { status } from '../actions/actions.js';
import { createUrl } from '../helpers/helpers.js';
import {
  createModal,
  hideModal,
  search,
  showOrHideFilter,
} from '../stores/stores.js';
import { albumModal } from '../views/components/AlbumModal.js';
import { artistModal } from '../views/components/ArtistModal.js';
import { songModal } from '../views/components/SongModal.js';
import { videoModal } from '../views/components/VideoModal.js';

const dispatcher = status => {
  $(document).off().find('*').off();
  $('.header input').on('input', validateInputs);
  $('.options input').on('click', validateInputs);
  $('#countryModalCheckBox').on('click', validateInputs);
  $('#limitModalCheckBox').on('click', validateInputs);
  $('#explicitModal').on('click', validateInputs);
  $('#countryModal').on('change', checkFilterActive);
  $('#limitModal').on('change', checkFilterActive);
  $('#filterModal').on('click', showOrHideFilter);
  switch (status) {
    case 'home':
      $('.clickCardItem').on('click', openModal);
      break;
    case 'songModal':
      //$('#songModalInfo').on('click', toggleInfoOrPlay)
      $('#showOrHideModal').on('click', hideModal);
      console.log($('#showOrHideModal'));
      break;
  }
};

const validateInputs = () => {
  const headerInput = $('.header input').val();
  if (headerInput) {
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
  const positionArray = $(`.main ${e.target.nodeName}`).index(e.target);
  const searchType = $('.options input:checked').val();
  console.log(searchType);
  switch (searchType) {
    case 'song':
      status.page = 'songModal';
      createModal(positionArray, songModal);
      break;
    case 'musicArtist':
      createModal(positionArray, artistModal);
      break;
    case 'album':
      createModal(positionArray, albumModal);
      break;
    case 'musicVideo':
      createModal(positionArray, videoModal);
      break;
  }
};

export { dispatcher };
