$('#imageFile').change(function(e){

    $('#previewContainer').css('display', 'inline-block');
    var file = document.getElementById('imageFile').files[0];

    if(!check_and_preview(file)){
        $('#previewContainer').css('display', 'inline-block');
        $('#textPreview').text('Неверный формат изображения');
        $('#textPreview').css('color', 'red');
        $('#imagePreview').attr('src', 0);
        return;
    }
    $('#textPreview').css('color', '#2A496B');
    $('#textPreview').text(file.name);
})

function check_and_preview(file) {
if (!file.type.match(/image\/(jpeg|jpg|png|gif)/) ) {
    return false;
}

var reader = new FileReader();
reader.addEventListener('load', function(event) {
    $('#imagePreview').attr('src', event.target.result);
});
reader.readAsDataURL(file);
return true;
}