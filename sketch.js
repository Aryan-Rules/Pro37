 var brush;
 var database;
 var ion;
 var array=[];
function setup(){
    createCanvas(500,500);
    background(51);
    var clearbutton = select('#clearbutton');
    
    clearbutton.mousePressed(cleardrawing())
    database=firebase.database();
    brush=createSprite(250,250,5,5);
    brush.shapeColor="white";
    var brushreff=database.ref('Brush/position')
    brushreff.on("value",readposition);
    console.log(brushreff)
}

function draw(){   
    
         
      if(mousePressedOver(brush)){
            brush.x=mouseX;
            brush.y=mouseY;
        }
        database.ref('brush/position').set({
            position:array
        })
    drawSprites();
}

function changePosition(x,y){
    brush.x = brush.x + x;
    brush.y = brush.y + y;
}                                                                         

function readposition(lon){
    /*database.ref('A/position')*/
   ion=lon.val();
   console.log(ion)
   brush.x=ion.x
   brush.y=ion.y
}

function mouseDragged(){
    var point={
      x:mouseX,
      y:mouseY
    }
    array.push(point);
 console.log(array)
 }

 function cleardrawing(){
     array=[];    
 }