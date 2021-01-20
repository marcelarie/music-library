const musicVideo = ({previewUrl}) => {
    const template = `
  <section class="video-item">
  <video controls>
    <source src="${previewUrl}" type="video/x-m4v"></source>
  </video>
  <h2></h2>
  </section>`;
    return template;
};

/*Cover
Name of the song
Artist name
Song Price
Release date
Song length
Musical genre
Clip video sample
Link of the music video on iTunes
*/
