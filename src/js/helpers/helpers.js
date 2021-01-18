
const createFragmentList = (data, component) => {
    const fragment = $(document.createDocumentFragment());
    data.forEach(element => {
        $(fragment).append(component(element));
    });
    return fragment;
};

export {createFragmentList}
