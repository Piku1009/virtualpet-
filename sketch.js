//Create variables here
var dog,happyDog,database,foodS,foodStock;
var dogImage;
function preload()
{
	//load images here
  dogImage = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,100,100);
  dog.addImage(dogImage);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here
  textSize(30);
  fill("white");
  text("Press up arrow key to feed the dog milk",30,30);
}

function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x<=0){
    x = 0;
  }
  else{
    x = x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

