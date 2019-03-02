ClassicEditor
    .create( document.querySelector( '#post-content' ) )
    .then( editor => {
        // console.log( editor );
    } )
    .catch( error => {
        // console.error( error );
    } );
