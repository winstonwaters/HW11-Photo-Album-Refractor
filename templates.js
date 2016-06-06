var photoAlbumTmpls = {
  albumCoversTmpl: `
    <div class="album" data-id= <%= id %> >
    <img src=" <%= cover %> " alt="">
    <h3> <%= title %> </h3>
    </div>
   `,
   picturesInAlbumsTmpl: `
    <div class="photo" data-id="<%= photo %> ">
    <img src="<%= photo %> " alt"">
    <span class="hidden"><%= caption%></span>
    </div>
   `,
   bigPhotoTmpl: `
    <div class="largePhoto" data-id="">
    <img src=" <%= photo %> " alt"">
    <h3><%= caption %></h3>
    </div>
    `
}
