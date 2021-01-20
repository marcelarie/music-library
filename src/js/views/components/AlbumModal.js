
const collection = ({
    artworkUrl100 = 'https://findicons.com/files/icons/2770/ios_7_icons/100/music.png',
    collectionName,
    artistName,
    collectionPrice,
    trackCount,
    releaseDate,
    primaryGenreName,
    currency
}) => {
    const date = new Date(releaseDate).toLocaleDateString()
    const template = `
  <section class="modal-type">
    <section class="modal-type__content">
      <section class="modal-type-content__cover">
    <br>
          <img src="${artworkUrl100}" alt="${artistName}">
    <br>
          <h2>${collectionName}
      <span class="material-icons starred"> 
          star_border 
      </span>
    </h2>
          <h3>${artistName}</h3>
    <section class="modal-type-content__info">
        <br>
        <p>Track Count: <strong>${trackCount}</strong></p>
        <p>Musical genre: <strong>${primaryGenreName}</strong></p>
        <p>Release date: <strong>${date}</strong></p>
        <p>Song Price: <strong>${collectionPrice} ${currency}</strong></p>
      </section>
      </section>
    </section>
  </section>
  `;
    return template;
};

export {collection};
