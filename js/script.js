
const CLIENT_KEY = 'OmY8lbVQlCbNduu9eHwutFEcsQ5ITHYyyalA8q0ERuY';
const SEARCH_KEY = 'https://api.unsplash.com/photos/';

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

function getClassByLike(likes) {
    if(likes <= 5) {
        return 'green'
    } else if(likes >= 9) {
        return 'orange'
    } else {
        return 'red'
    }
}
function showImages(images) {
    main.innerHTML = ''

    images.forEach((image) => {
        // const { title, poster_path, vote_average, overview } = movie
        const title = image.user.username;
        const numberOfLikes = image.likes;
        const description = image.alt_description;

        const imageElement = document.createElement('div')
        imageElement.classList.add('container')
        const IMG_PATH = image.urls.full;
        imageElement.innerHTML = `
            <img src="${IMG_PATH}" alt="${title}">
            <div class="container-info">
          <h3> <span class="user-title">Clicked By</span> ${title}</h3>
          <span class="${getClassByLike(numberOfLikes)}">
          Likes ${numberOfLikes}</span>
            </div>
            <div class="overview">
          <h3>Overview</h3>
          ${description}
        </div>
        `
        main.appendChild(imageElement)
    })
}
(async function getImagesAsync(){
    const response = await fetch('https://api.unsplash.com/photos/?client_id=OmY8lbVQlCbNduu9eHwutFEcsQ5ITHYyyalA8q0ERuY');
    const data = await response.json();
    showImages(data);
})()