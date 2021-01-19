
const videoModal = ({
    artworkUrl100 =
    'https://findicons.com/files/icons/2770/ios_7_icons/100/music.png',
    trackName,
    artistName,
    trackPrice,
    releaseDate,
    trackTimeMillis,
    primaryGenreName,
    previewUrl,
    trackViewUrl
}) => {
    const template = `
  <section class="song-modal">
    <section class="song-modal__buttons">
        <button>play</button>
        <button>info</button>
    </section>
    <section class="song-modal__player">
        <video name="media" controls>
          <source src="${previewUrl}" type="audio/x-m4a">
        </video>
    </section>
    <section class="song-modal__content">
      <section class="song-content__cover">
          <h2>${trackName}</h2>
          <h3>${artistName}</h3>
        <button>⭐</button>
      </section>
      <section class="song-content__info">
         <img src="${artworkUrl100}" alt="${trackName}">
        <p>Name of the song: ${trackName}</p>
        <p>Artist name: ${artistName}</p>
        <p>Song Price: ${trackPrice}</p>
        <p>Song length: ${trackTimeMillis}</p>
        <p>Release date: ${releaseDate}</p>
        <p>Musical genre: ${primaryGenreName}</p>
        <p>Song Link in iTunes: ${trackViewUrl}</p>
      </section>
    </section>
  </section>
  `;
    return template;
};

export {videoModal};
