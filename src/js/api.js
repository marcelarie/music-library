function get(value, option, limit = '') {
    const setting = {
        url: `https://itunes.apple.com/search?term=${value}&entity=${option}${limit}`,
        type: 'GET',
        dataType: 'jsonp'
    }
    return $.ajax(setting)
}

function print(data) {
    const root = $('#root')
    get().done(results => results.results.forEach(i => {
        console.log(i.previewUrl)
        const video = $('<video controls></video>')
        video.css('backgroundColor', 'red')
        const source = $(`<source src="${i.previewUrl}" type="video/x-m4v"></source>`)
        root.append(video.append(source))
    }))
}



export {get, print}
