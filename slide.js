
var $ = function (id) {
    return document.getElementById(id);
}

var timer;
var currentSlide = 0;
var image = new Image();// creates an image object

var images = ["spartan.png", "spartan1.png","image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg"];
var titles = ["spartan race","permiscuous spartan race", "half dome", "tree", "funny cat","me","flower","bird","jester","devils lake"];
var captions = ["we did it...", "mid race.. feeling tired"," preetiest view ever", "im a tree hugger","waking up from naps","shameless selfie","i dont know what its called", "baby bird", "the fair","what a climb"];

var count = images.length;
var preload = function()
{
    for (var i=0; i< count; i++)
    {
        image.src = images[i];
        images.push(image);
    }
}


var slidecontrol = function ()
{
    var path=$("control").src;
    
    var testState = new RegExp("play");
    if(testState.test(path))
    {
        $("control").src = "pause.png";
        displayImage();
    }
    else
    {
        $("control").src = "play.png";
        clearTimeout(timer);
    }

}

var displayImage = function()
{
    if (currentSlide > 9)
    {
        currentSlide = 0;
    }
    $("main_image").src = images[currentSlide];
    $("title").innerHTML =titles[currentSlide];
    $("caption").innerHTML =captions[currentSlide];

    currentSlide++;
    timer = setTimeout(displayImage, 5000);
}

window.onload = function()
{
    preload();

}