status = "";

function setup(){
    canvas = createCanvas(600, 450);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status_label").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("CoCoSSD Model is Currently Initialized.");
    staus = true;
    objectDetector.detect(img, gotResult);
}

function preload(){
    poolImg = loadImage("homepicture1.jpg");
}

function draw(){
    image(poolImg, 0, 0, 600, 450);
}

function gotResult(error, result){
    if (error){
        console.error(error);
    }
    else{
        console.log(result);
    }
}