
const createFragmentList = (data, component) => {
    const fragment = $(document.createDocumentFragment());
    data.forEach(element => {
        $(fragment).append(component(element));
    });
    return fragment;
};

const createUrl = (list) => {
    list.forEach(input => {
        // TODO: CREATE URL WITH ALL THE OUTPUT
        switch (input) {
            case '':
                break;
            case '':
                break;
            case '':
                break;
            case '':
                break;
            case '':
                break;
            case '':
                break;
            case '':
                break;
        }
    })
};

export {createFragmentList, createUrl}
