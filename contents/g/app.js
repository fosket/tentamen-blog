// JavaScript för att implementera kraven A-D.
let albumList;
var likes = Math.floor(Math.random() * 100);

function renderAlbums(listOfAlbums) {
    $('#albumWrapper').html("");
    for (let album of listOfAlbums) {
         $('#albumWrapper').append(`
        <div class="album" id="${album.id}">
            <h3 class="albumName">${album.title}</h3>
            <img src="${album.url}" alt="">
            <h3 class="likes">Likes: ${likes}</h3>
        </div>
        `)
    }
}
fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
.then(response => response.json())
.then(function (data) {
   let allAlbums = data;
   albumList = allAlbums;
   renderAlbums(albumList);
})

console.log(likes);





