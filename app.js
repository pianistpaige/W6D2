$('#container').append(`<div class="box spacing"></div>
<div class="box spacing"></div>
<div class="box spacing"></div>
<div class="box spacing"></div>

<div class="box spacing"></div>
<div class="box spacing"></div>
<div class="box spacing"></div>
<div class="box spacing"></div>

<div class="box spacing"></div>
<div class="box spacing"></div>
<div class="box spacing"></div>
<div class="box spacing"></div>

<div class="box spacing"></div>
<div class="box spacing"></div>
<div class="box spacing"></div>
<div class="box spacing"></div>`)




$('.box').on('click', function() {
    $(this).toggleClass("lightBox");
})