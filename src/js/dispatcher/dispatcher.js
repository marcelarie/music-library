import {createUrl} from '../helpers/helpers.js';
import {createSongModal, search, showOrHideFilter} from '../stores/stores.js';

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
            $('#filterModal').on('click', showOrHideFilter);
            $('.clickCardItem').on('click', openModal);
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
    console.log(searchType)
    switch (searchType) {
        case 'song':
            createSongModal(positionArray);
            break;
        case 'musicArtist':
            createArtistModal(positionArray);
            break;
        case 'album':
            createAlbumModal(positionArray);
            break;
        case 'musicVideo':
            createVideoModal(positionArray);
            break;
    }
};

export {dispatcher};
