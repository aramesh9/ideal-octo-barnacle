song="";

leftWrist=0

rightWrist=0;

function setup(){
    canvas=createCanvas(1000,700);
    canvas.center();
    canvas.position(230,200);

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 1000, 700);
    
    fill("red");
    stroke("blue");
    
    song1_yes = song1.isPlaying(true);

    if(leftWrist > 0.2){
        circle(leftWristX, leftWristY, 20);
        song2.stop();
        song1.play();
    }else(song1_yes == false)
        song1.stop();
        song2.play();
        document.getElementById("name").innerHTML = "Now playing Peter Pan"
}



function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}

function play(){
    song1.play();
    song1.setVolume(1);
    song1.rate(1);
    document.getElementById("name").innerHTML = "Now playing harry potter"
}

function modelLoaded(){
    console.log("PoseNet is initialized.");
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("Left wrist X = " + leftWristX + " Left wrist Y = " + leftWristY);
        
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;       
        console.log("Right wrist X = " + rightWristX + " Right wrist Y = " + rightWristY);
    }
}