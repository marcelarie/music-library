import { createUrl } from '../helpers/helpers.js';
import { search } from '../stores/stores.js';

const dispatcher = status => {
  $(document).off().find('*').off();
  switch (status) {
    case 'home':
      $('.header input').on('input', validateInputs);
      $('#countryModalCheckBox').on('click', validateInputs);
      $('#limitModalCheckBox').on('click', validateInputs);
      $('#explicitModal').on('click', validateInputs);
      $('#checkBoxSong').on('click', validateInputs);
      $('#checkBoxArtist').on('click', validateInputs);
      $('#checkBoxAlbum').on('click', validateInputs);
      $('#checkBoxMusicVideo').on('click', validateInputs);
      $('#countryModal').on('change', checkFilterActive);
      $('#limitModal').on('change', checkFilterActive);
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

export { dispatcher };
