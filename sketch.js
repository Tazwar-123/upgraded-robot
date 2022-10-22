var player, npc, enemy;
var playerImg, npcImg, enemyImg;
var enemyX = random(100, 1000);
var enemyY = random(100, 1000);


function preload() {
  npcImg = loadImage('npc.png')
  enemyImg = loadImage('enemy.png')
}

function setup() {
  createCanvas(1500,900);
  
}

function draw() {
  background(0,215,200);  
  drawSprites();
  player();
  //npc();
  enemy();
  
}

function player() {
  player = createSprite(100, 100, 50, 50)
  player.shapeColor = 'red'
}

function npc () {
  npc = createSprite(200, 200, 100, 100)
  npc.addImage(npcImg);
  npc.scale = 0.07;
}

function enemy() {
  enemy = createSprite(1000, 500, 50, 50)
  enemy.addImage(enemyImg)
  enemy.scale = 0.03;
}