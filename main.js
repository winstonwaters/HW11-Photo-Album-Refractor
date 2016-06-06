$(document).ready(function (){
  photoAlbum.init();
})

var photoAlbum = {
  init: function() {
    photoAlbum.styling();
    photoAlbum.events();
  },
  // makes photos appear on the page
  styling: function() {
    var albumsStr = '';
    albums.forEach(function (element,idx,arr) {
      albumsStr += photoAlbum.htmlGenerator(photoAlbumTmpls.albumCoversTmpl,element);
      })
      //add albums with cover
      $('.albums').html(albumsStr);


      var listOfPlaces = albums.map(function (element,idx,arr){
        return "<li>" + element.id + "</li>"
      })
      listOfPlaces.forEach(function(element){
        return $('.aside').html(listOfPlaces)
      });
  },

  events: function() {
    // pulls up photos within the album cover
    $('.albums').on('click', '.album', function (event) {
      event.preventDefault();
      var albumId = $(this).data('id');
      var selectedAlbum = albums.filter(function (element, idx, arr) {
        return element.id === albumId;
      })
      var photoStr = '';
      selectedAlbum[0].pictures.forEach (function (element, idx, arr) {
      photoStr += photoAlbum.htmlGenerator(photoAlbumTmpls.picturesInAlbumsTmpl,element);
      })
      $('.albumDetail').html(photoStr);
      $('.albumDetail').addClass('active');
      $('.albums').hide();
      })

      // pulls up the big photo
      $('.albumDetail').on('click', '.photo', function (event) {
        event.preventDefault();
        var photoID = $(this).data('id');
        window.glob = $(this);
        var photoCaption = $(this).find('span').text();
        console.log("YAYAYAYA", photoID);
        //grabs one photo
        var photosBig = photoAlbum.htmlGenerator(photoAlbumTmpls.bigPhotoTmpl,{photo: photoID, caption: photoCaption});
        $('.photoZoom').html(photosBig);
        $('.photoZoom').addClass('active');
        $(this).siblings().hide();
        $('.albumDetail').hide();
        $('.aside').hide();
      })
      // adding my sidebar


      // pulls album details up from navigation list
      // $('.albums').html(photoStr);

      //reload from header
      $('h2').on('click', function (element,idx,arr) {
        location.reload();
      });

      //when clicking the side bar name it takes you to the photos in that album
      $('aside').on('click','li', function(event){
        // console.log("HELKJSFLKDFJKLS");
        event.preventDefault();
        var listID = $(this).text();
        var selectedList = albums.filter(function (element, idx, arr) {
          return element.id === listID;
        })
        var photoStr = '';
        selectedList[0].pictures.forEach (function (element, idx, arr) {
          photoStr += photoAlbum.htmlGenerator(photoAlbumTmpls.picturesInAlbumsTmpl,element);
        })
        console.log("SDFST", photoStr);
        $('.albumDetail').html(photoStr);
        $('.albums').addClass('hidden');
      });
  },
  // nathan's code
  templification: function(template) {
  return _.template(template);
  },

  htmlGenerator: function(template,data) {
  var tmpl = photoAlbum.templification(template);
  return tmpl(data);
  }
}


// //when clicking the side bar name it takes you to the photos in that album
//   $('li').on('click', function(event){
//     event.preventDefault();
//     var listID = $(this).text();
//     var selectedList = albums.filter(function (element, idx, arr) {
//       return element.id === listID;
//     })
//     var photoStr = '';
//     selectedList[0].pictures.forEach (function (element, idx, arr) {
//       photoStr += `<div class="photo">
//                   <img src="${element.photo}" alt"">
//                   </div>`
//                 })
//     });

// //reload from header
// $('h2').on('click', function (element,idx,arr) {
// location.reload();
//
// });

// $(document).ready(function () {
//   event.preventDefault();
  // var albumsStr = '';
  // albums.forEach(function (element,idx,arr) {
  //   albumsStr += `<div class="album" data-id="${element.id}">
  //                 <img src="${element.cover}" alt="">
  //                 <h3>${element.title}</h3>
  //                 </div>`;
  // })

// $('.albums').html(albumsStr); //add albums with cover

// makes the album details
    // $('.albums').on('click', '.album', function (event) {
    //   event.preventDefault();
    //   console.log($(this).data('id'));
    //   var albumId = $(this).data('id');
    //   var selectedAlbum = albums.filter(function (element, idx, arr) {
    //     return element.id === albumId;
    //   })
    //   var photoStr = '';
    //   selectedAlbum[0].pictures.forEach (function (element, idx, arr) {
    //     photoStr += `<div class="photo" data-id="${element.photo}">
    //                 <img src="${element.photo}" alt"">
    //                 </div>`
    //   });
    //   $('.albumDetail').html(photoStr);
    //   $('.albumDetail').addClass('active');
    //   $('.albums').hide();
    // })


// make the photo big
// $('.albumDetail').on('click', '.photo', function (event) {
//   event.preventDefault();
//   var photoID = $(this).data('id');
//   var selectedPhoto = albums.find(function (element) {
//     return element.pictures.find(function(el){
//     return el.photo === photoID;
//   });
//   })
//   var retArr = selectedPhoto.pictures.filter(function(i){
//     return i.photo === photoID; //grabs one photo
//   })
//   console.log(retArr);
//   var photosBig = '';
//   retArr.forEach(function (element, idx, arr) {
//     photosBig += `<div class="largePhoto" data-id="${element.photo}">
//                 <img src="${element.photo}" alt"">
//                 <h3>${element.caption}</h3>
//                 </div>`
//   });
//   $('.photoZoom').html(photosBig);
//   $('.photoZoom').addClass('active');
//   $(this).siblings().hide();
//   $('.albumDetail').hide();
//   $('.aside').hide();
// })
