const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var  u=10000
var x
var engine,world
var tree=[]
var reround,rround
var r1,r2,r3
var N
var O2
var button
function preload(){
  plant=loadImage("plant1.png")
  plant2=loadImage("plant2.png")
  treeImage=loadImage("tree2.png")
  plantdisease2=loadImage("plant1D.png")
  plantdisease1=loadImage("plant1dd.png")
  treeD=loadImage("tree2 (2).png")
  dead=loadImage("dead.png")
  gras=loadImage("groung.png")
  bucketImg=loadImage("bucket.png")
  bag=loadImage("bag.png")
  reset=loadImage("reset.png")
}
function setup(){
  createCanvas(1600,600)
  engine=Engine.create()
  world=engine.world
  N=createSprite(400,80,100,30)
  N.addImage(bag)
  N.scale=0.13
  x=createSprite(-6,-5,1,1)
  x.lifetime=400
  
  K=createSprite(400,180,100,30)
  K.addImage(bucketImg)
  K.scale=0.3

  K.visible=true
    N.visible=true
 // tree=createSprite(400,530)
  //tree.addImage(plant2)
  //tree.lifetime=10000
  
 // tree.scale=0.3
for(var i=0;i<6;i++){
  
    tree[i]=createSprite(300,530)
    tree[i].addImage(plant2)
    tree[i].lifetime=10000
    
    tree[i].scale=0.3
  
  

}
tree[0].x=100
tree[1].x=400
tree[2].x=700
tree[3].x=1000
tree[4].x=1300
tree[5].x=1600

z=random(50,255)
q=random(50,255)
p=random(50,255)
frame=frameCount
  
  r1=round(random(1,3))
  r2=round(random(1,3))
  grass=createSprite(400,585)
  grass.addImage(gras)
  grass.scale=2

  pipe=createSprite(800,220,1600,5)
  p1=createSprite(235,230,3,15)
  p2=createSprite(635,230,3,15)
  p3=createSprite(1075,230,3,15)
  p4=createSprite(1405,230,3,15)
 // p5=createSprite(1035,545,3,15)
 // p6=createSprite(1285,545,3,15)
 // p7=createSprite(1505,545,3,15)
button=createSprite(1200,50,50,50)
button.addImage(reset)
button.visible=false
}
function draw(){

//if(gameState==="story"){
  //background("black")
  //fill("white")
  //textMode(CENTER)
  //

//}



  background("white")
  textSize(20)
  fill(55,240,175)
  if(x.lifetime>0){
    text("Hello! I am Deman, the mayor of Plant city.",350,350)
    text("I wanted a favour of you.",350,370)
    text("Can you please take care of the new stock of Plantlings which arrived today?",350,390)
    text("I have to go out for a long time and there is no one to care for the seedlings",350,410)
    text("I am sure you'd help. So bye and take care",350,430)
    //text("Click on white square below to start",600,500)
  }
  
  
  Engine.update(engine)

  u=round(random(10000,500))
  
 if(O2===0){
  text("Oxygen level  :"+"  None",600,100)
 }else
  if(O2<0.05){
    text("Oxygen level  :"+"  Low",600,100)
    
  }else if(O2>0.05&&O2<0.1){
   text("Oxygen level   :"+"  Normal",600,100)
  }else if(O2>0.1){
   text("Oxygen level   :"+"  High",600,100)
  }
 
for(var i=0;i<6;i++)
{
  if(frameCount-frame<250)
  {
    tree[i].y=tree[i].y-0.01
  }

  if(frameCount-frame>250&&frameCount-frame<900)
  {
    tree[i].y=tree[i].y-0.03
  }



  O2=((frameCount-frame)*r1*r2)/(tree[i].y*tree[i].y)
 
  console.log(frame)
 //   .log(tree[i].lifetime)

 
 // tree.scale=tree.scale+0.001
 



  
 if(tree[i].lifetime!==-1){
  text("Click on Ferliser Bag for nutrients",50,70)
  text("Click on Water bucket for watering",50,170)
 }
 



 if(mousePressedOver(N)&&tree[i].lifetime!==-1){
   r1=round(random(4,5))
   r2=round(random(4,5))
   tree[i].lifetime=u
   
   reround=frameCount
 }
 if(mousePressedOver(button)&&tree[i].lifetime===-1){
  tree[i].lifetime=u
  tree[i].scale=0.3
  tree[i].y=530
  tree[i].addImage(plant2)
  frame=frameCount
  K.visible=true
    N.visible=true
    button.visible=false
}
   if(mousePressedOver(K)&&tree[i].lifetime!==-1){
   d1=createSprite(p1.x,p1.y+5,3,3)
   d1.velocityY=9
   d1.velocityX=random(8,-8)
   d1.lifetime=38
   d1.shapeColor="blue"
   d2=createSprite(p2.x,p2.y+5,3,3)
   d2.velocityY=9
   d2.velocityX=random(8,-8)
   d2.lifetime=38
   d2.shapeColor="blue"
   d3=createSprite(p3.x,p3.y+5,3,3)
   d3.velocityY=9
   d3.velocityX=random(8,-8)
   d3.lifetime=38
   d3.shapeColor="blue"
   d4=createSprite(p4.x,p4.y+5,3,3)
   d4.velocityY=9
   d4.velocityX=random(8,-8)
   d4.lifetime=38
   d4.shapeColor="blue"
  rround=frameCount

 // spawn()
 }
 
 



 if(r1===4||r1===5){
  if(frameCount-frame>250){
    tree[i].addImage(plant)
    //tree.scale=1
    //tree.scale=tree.scale+0.001
    text("Plants healthy",50,50)
    //text("Low on fertilisers" , 400,50)
  //

  }
 }else{
  
   
  if(frameCount-frame>250){
    
   tree[i].addImage(plantdisease1)
  
  
  // tree.scale!=tree.scale+0.0003
 }
}

fill(55,175,240)

 
 if(r2===4||r2===5){
  if(frameCount-frame>3000){
    tree[i].addImage(treeImage)
    tree[i].y=430
    //tree.scale=1
    //tree.scale=tree.scale+0.001
    text("Plants healthy",50,50)
  //
  }
 }else{
 
  if(frameCount-frame>3000){
   // r1=undefined
   tree[i].y=430
   tree[i].addImage(treeD)
   
 }}



 // if(frameCount-frame>1000){
 //   tree.addImage(treeImage)
    //tree.scale=1
    //tree.scale=tree.scale+0.001
  
  //
 // }
 if(tree[i].scale<0.65){
  tree[i].scale=tree[i].scale+0.0003
 }




 //if(tree.scale)
  if(tree[i].lifetime<2){
    tree[i].addImage(dead)
    tree[i].lifetime=-1
    tree[i].scale=0.5
    tree[i].y=500
    O2=0
    r1=0
    r2=0
    button.visible=true
    K.visible=false
    N.visible=false
  }
}  

if(reround!==undefined){
  if(frameCount-reround>150){
    r1=round(random(1,3))
    r2=round(random(1,3))
    text("Low on fertilisers" , 600,20)
    
    reround=undefined
   }
 }


  

 if(reround!==undefined){
  if(frameCount-reround>300){
    r1=round(random(1,3))
    r2=round(random(1,3))
    text("Low on fertilisers" , 600,20)
   
    reround=undefined
   }
 }



 //if(r1===1||r2===1||r1===2||r2===2||1===3||r2===3){
 //  if(frameCount>250){
 //   tree.lifetime=150
  // }
   
 //}



 if(r1===1||r1===2||r1===3){
   if(frameCount-frame>250){
     if(frameCount-frame<900){
      text("Plant Diseased",50,50)
      text("Low on fertilisers" , 600,50)
     // text("Give fertilisers to garauntee its survival", 300,200)
      text("Also don't forget the watering",550,70)
     }

   }
 }




 if(r2===1||r2===2||r2===3){
  //if(frameCount>250){
    if(frameCount-frame>1000){
      text("Plant Diseased",50,50)
      text("Low on fertilisers" , 600,50)
     // text("Give fertilisers to garauntee its survival", 300,200)
      text("Also don't forget the watering",550,70)
    }

 // }
}
fill(240,55,175)
line(570,120,570,200)
line(570,120,820,120)
line(820,120,820,200)
line(570,200,820,200)
var zar=round(10000*O2)
text("O2 count: "+ zar,635,165)

drawSprites()



}


  


