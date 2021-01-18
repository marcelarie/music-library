
const countryOptions = ({a2, nameCurrentValue}) => {
    const template = `
  <option value="${a2}">
    ${nameCurrentValue}
  </option>`;
    return template;
};

export {countryOptions}
