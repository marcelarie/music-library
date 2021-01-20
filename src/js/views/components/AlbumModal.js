const albumModal = ({
  artworkUrl100 = 'https://findicons.com/files/icons/2770/ios_7_icons/100/music.png',
  collectionName,
  artistName,
  collectionPrice,
  trackCount,
  releaseDate,
  primaryGenreName,
}) => {
  const template = `
  <section class="modal-type">
    <section class="modal-type__content">
      <section class="modal-type-content__cover">
          <img src="${artworkUrl100}" alt="${artistName}">
          <h2>${collectionName}</h2>
          <h3>${artistName}</h3>
        <p>Track Count: ${trackCount}</p>
        <p>Musical genre: ${primaryGenreName}</p>
        <p>Release date: ${releaseDate}</p>
        <p>Song Price: ${collectionPrice}</p>
      </section>
    </section>
  </section>
  `;
  return template;
};

export { albumModal };
