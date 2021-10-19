function preLoad()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    background(0, 255, 0);
    image(video, 75, 75, 475, 360);
    fill(255, 0, 0)
    circle(40, 40, 60);
    circle(600, 40, 60);
    circle(40, 450, 60);
    circle(600, 450, 60);
}