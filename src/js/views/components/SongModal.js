/* {"wrapperType":"track", "kind":"song", "artistId":63346553, "collectionId":1440895867, "trackId":1440896000, "artistName":"Rihanna", "collectionName":"Loud (Deluxe)", "trackName":"What's My Name? (feat. Drake)", "collectionCensoredName":"Loud (Deluxe)", "trackCensoredName":"What's My Name? (feat. Drake)", "artistViewUrl":"https://music.apple.com/us/artist/rihanna/63346553?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/whats-my-name-feat-drake/1440895867?i=1440896000&uo=4", "trackViewUrl":"https://music.apple.com/us/album/whats-my-name-feat-drake/1440895867?i=1440896000&uo=4",
"previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/ca/8d/24/ca8d24cf-d293-645e-8b08-2ad98d1500f9/mzaf_4030894862211345702.plus.aac.p.m4a", "artworkUrl30":"https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/68/15/ad/6815ad2e-ae54-3686-faa7-685c4f801e73/source/30x30bb.jpg", "artworkUrl60":"https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/68/15/ad/6815ad2e-ae54-3686-faa7-685c4f801e73/source/60x60bb.jpg", "artworkUrl100":"https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/68/15/ad/6815ad2e-ae54-3686-faa7-685c4f801e73/source/100x100bb.jpg", "collectionPrice":9.99, "trackPrice":1.29, "releaseDate":"2010-11-16T08:00:00Z", "collectionExplicitness":"explicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":12, "trackNumber":2, "trackTimeMillis":263173, "country":"USA", "currency":"USD", "primaryGenreName":"Pop", "isStreamable":true} */

const songModal = ({
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
}) => {
  const template = `
  <section class="song-modal">
    <section class="song-modal__buttons">
        <button>play</button>
        <button>info</button>
    </section>
    <section class="song-modal__content">
      <section class="song-content__cover">
          <img src="${artworkUrl100}" alt="${trackName}">
          <h2>${trackName}</h2>
          <h3>${artistName}</h3>
      </section>
      <section class="song-content__info">
        <p>Name of the song: ${trackName}</p>
        <p>Artist name: ${artistName}</p>
        <p>Album name: ${collectionName}</p>
        <p>Song Price: ${collectionPrice}</p>
        <p>Song length: ${trackTimeMillis}</p>
        <p>Release date: ${releaseDate}</p>
        <p>Musical genre: ${primaryGenreName}</p>
        <p>Song Link in iTunes: ${trackViewUrl}</p>
      </section>
    </section>
    <section class="song-modal__player">
        <video controls="" autoplay="" name="media">
          <source src="${previewUrl}" type="audio/x-m4a">
        </video>
        <button>⭐</button>
    </section>
  </section>
  `;
  return template;
};

export { songModal };
