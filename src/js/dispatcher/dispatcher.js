import {status} from '../actions/actions.js';
import {createUrl} from '../helpers/helpers.js';
import {
    createModal,
    hideModal,
    search,
    saveFavorite,
    mainPage,
    showOrHideFilter,
} from '../stores/stores.js';
import {collection} from '../views/components/AlbumModal.js';
import {artist} from '../views/components/ArtistModal.js';
import {song} from '../views/components/SongModal.js';
import {musicVideo} from '../views/components/VideoModal.js';

const dispatcher = status => {
    $(document).off().find('*').off();
    $('.header input').on('input', validateInputs);
    $('.header nav h1').on('click', mainPage);
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
        case 'song':
            $('#starred').on('click', saveFavorite);
            //$('#song').on('click', toggleInfoOrPlay)
            $('#showOrHideModal').on('click', hideModal);
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
    status.positionArray = $(`.main ${e.target.nodeName}`).index(e.target);
    const searchType = $(e.target).closest('button').data('wrappertype');
    console.log(searchType);

    status.page = `${searchType}`;
    createModal(status.positionArray, eval(searchType));
};

export {dispatcher};
