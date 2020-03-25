let mobilenet;
let video;
let prob;
let label;

function modelReady(){
    console.log('Model is Ready!!');
    mobilenet.predict(gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        // console.log(results);
        label = results[0].label;
        prob = results[0].confidence;
       prob*=100;
        mobilenet.predict(gotResults);
        // createP(label);
        // createP(prob);
    }
}

// function imageReady(){
//     image(puffin,0,0,width,height);
// }

function setup(){
    createCanvas(window.innerWidth,window.innerHeight);
    // puffin = createImg('images/penguin.jpg',imageReady);
    // puffin.hide();
    video = createCapture(VIDEO);
    video.hide();
    // background(0);
    // image(puffin,0,0);
    // mobilenet= ml5.imageClassifier('MobileNet',modelReady);
    mobilenet= ml5.imageClassifier('MobileNet',video,modelReady);
}

function draw(){
    background(0);
    image(video,0,0,window.innerWidth,window.innerHeight);
    fill(255);
    textSize(20);
    text(label,20,height - 30);
    text(prob,400,height - 30);
}