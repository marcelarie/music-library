const filter = () => {
  const template = `
<section class="filter">
    <button id="filterModal"></button>
    <section>
        <label for="country">
            <input type="checkbox" name="country" id="countryModalCheckBox">
            Country
            <select name="country" id="countryModal">
            </select>
        </label>
        <label for="explicit">
            <input type="checkbox" name="explicit" id="explicitModal">
            </input>
            Explicit
        </label>
        <label for="limit">
            <input type="checkbox" name="limit" id="limitModalCheckBox">
            Limit
            <select id="limitModal">
              <option value="1">1</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="75">75</option>
              <option value="100">100</option>
              <option value="125">125</option>
              <option value="150">150</option>
              <option value="175">175</option>
              <option value="200">200</option>
            </select>
        </label>
    </section>
</section> `;
  return template;
};

export { filter };
