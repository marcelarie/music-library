import {search} from '../stores/stores.js'

const dispatcher = status => {
    $(document).off().find('*').off();
    switch (status) {
        case 'home':
            $('.header input').on('input', search)
            break;
    }
};

export {dispatcher};
