
$(function () {
    $('.carousel').carousel({
        interval: 5000 //changes the speed
        
    })

   
});

function imagenClick(imagen) {

    try {

        var modal = document.getElementById("myModal");
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");

        modal.style.display = "block";
        modalImg.src = imagen.src;
        captionText.innerHTML = imagen.alt;
        $("#myModal").modal("show");
    }


    catch (e) {

        alert(e);
    }

   

};



