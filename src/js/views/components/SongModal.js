import { millisToMinutesAndSeconds } from '../../helpers/helpers.js';

const song = ({
  artworkUrl100 = 'https://findicons.com/files/icons/2770/ios_7_icons/100/music.png',
  collectionPrice,
  releaseDate,
  trackTimeMillis,
  artistName,
  trackName,
  collectionName,
  primaryGenreName,
  previewUrl,
  trackViewUrl,
  currency,
}) => {
  const date = new Date(releaseDate).toLocaleDateString();
  const trackTime = millisToMinutesAndSeconds(trackTimeMillis);
  const template = `
  <section class="modal-type" data-modalType="song">
    <section class="modal-type__buttons">
        <button id="modalPlay">play</button>
        <button id="modalInfo">info</button>
    </section>
    <section class="modal-type__content">
      <section class="modal-type-content__cover">
          <img src="${artworkUrl100}" alt="${trackName}">
        <section class="modal-type-content__titles">
          <h2>${trackName} 
            <span class="material-icons starred"> star_border </span>
    </h2>
          <h3>${artistName}</h3>
        </section>
      </section>
      <section class="modal-type-content__info none">
        <p>Name of the song: <strong>${trackName}</strong></p>
        <p>Artist name: <strong>${artistName}</strong></p>
        <p>Album name: <strong>${collectionName}</strong></p>
        <p>Song Price: <strong>${collectionPrice} ${currency}</strong></p>
        <p>Song length: <strong>${trackTime} min</strong></p>
        <p>Release date: <strong>${date}</strong></p >
        <p>Musical genre: <strong>${primaryGenreName}</strong></p>
     <a href="${trackViewUrl}" target="_blank">Song Link in iTunes</a>
      </section >
    </section >
    <section class="modal-type__player">
        <audio id="mediaPlayer" name="media" controls>
            <source src="${previewUrl}" type="audio/x-m4a">
        </audio>
    </section>
    </section>
`;
  return template;
};

export { song };
