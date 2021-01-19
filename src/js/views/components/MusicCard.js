const musicCard = ({
  artworkUrl100 = 'https://findicons.com/files/icons/2770/ios_7_icons/100/music.png',
  artistName,
  trackName,
  collectionName,
  primaryGenreName,
}) => {
  const title = collectionName ? collectionName : primaryGenreName;
  const template = `
  <section>
    <button class="music-card-item">
          <section>
              <img src="${artworkUrl100}" alt="${trackName}">
          </section>
          <section>
              <h2>${trackName ? trackName : title}</h2>
              <h3>${artistName}</h3>
          </section>
    </button>
  </section>
  `;
  return template;
};

export { musicCard };
/*{"wrapperType":"track", "kind":"music-video", "artistId":909253, "collectionId":1445738051, "trackId":1445738215, "artistName":"Jack Johnson", "collectionName":"To the Sea", "trackName":"You And Your Heart", "collectionCensoredName":"To the Sea", "trackCensoredName":"You And Your Heart (Closed-Captioned)", "artistViewUrl":"https://music.apple.com/us/artist/jack-johnson/909253?uo=4", "collectionViewUrl":"https://music.apple.com/us/music-video/you-and-your-heart-closed-captioned/1445738215?uo=4", "trackViewUrl":"https://music.apple.com/us/music-video/you-and-your-heart-closed-captioned/1445738215?uo=4",
"previewUrl":"https://video-ssl.itunes.apple.com/itunes-assets/Video115/v4/f0/92/0c/f0920ce2-8bb7-5e62-b44c-36ce701fe7b1/mzvf_6922739671336234286.640x352.h264lc.U.p.m4v", "artworkUrl30":"https://is1-ssl.mzstatic.com/image/thumb/Video/v4/ae/be/c8/aebec8f3-2baa-7708-1cb9-af064c5423a4/source/30x30bb.jpg", "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Video/v4/ae/be/c8/aebec8f3-2baa-7708-1cb9-af064c5423a4/source/60x60bb.jpg", "artworkUrl100":"https://is1-ssl.mzstatic.com/image/thumb/Video/v4/ae/be/c8/aebec8f3-2baa-7708-1cb9-af064c5423a4/source/100x100bb.jpg", "collectionPrice":11.99, "trackPrice":-1.00, "releaseDate":"2010-06-01T07:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":15, "trackNumber":14, "trackTimeMillis":197288, "country":"USA", "currency":"USD", "primaryGenreName":"Rock"}*/
