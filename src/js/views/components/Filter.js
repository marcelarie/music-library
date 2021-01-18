
const filter = () => {
    const template = `
<section class="filter">
    <button id="filterModal" />
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
            <input type="range" min="1" max="200" step="25" name="limit" id="limitModal">
            </input>
        </label>
    </section>
</section> `;
    return template;
};

export {filter};
