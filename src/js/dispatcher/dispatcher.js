import {search} from '../stores/stores.js'

const dispatcher = status => {
    $(document).off().find('*').off();
    switch (status) {
        case 'home':
            $('.header input').on('input', validateInputs)
            $('#countryModalCheckBox').on('check', validateInputs)
            $('#limitModalCheckBox').on('check', validateInputs)
            $('#checkBoxSong').on('check', validateInputs)
            $('#checkBoxArtist').on('check', validateInputs)
            $('#checkBoxAlbum').on('check', validateInputs)
            $('#checkBoxMusicVideo').on('check', validateInputs)
            $('#explicitModal').on('check', validateInputs)
            break;
    }
};

const validateInputs = () => {
    const headerInput = $('.header input').val();
    if (headerInput) {
        createUrl();
    }
};

export {dispatcher};
