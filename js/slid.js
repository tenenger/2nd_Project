var myImage = document.getElementById("slid_img");
var imageArray = 
    [ "./img/스파르타.png", "./img/강원대학교.png", "./img/강원대학교.png" ];
var imageIndex = 0;

function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
}
setInterval(changeImage, 3000);
