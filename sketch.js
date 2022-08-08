var hypoball, database, position, hypoballpos;


function setup()
{
    database = firebase.database();
    createCanvas(500,500);
    hypoball = createSprite(250,250,50,50);
    hypoball.shapeColor = 'red';
    hypoballpos = database.ref('ball/position');
    hypoballpos.on("value",readPosition,showError);
}
 function draw()
 {
    background("cyan");
    if(keyDown(UP_ARROW)){
        writePos(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePos(0,1);
    }
    else if(keyDown(LEFT_ARROW)){
        writePos(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePos(1,0);
    }
    drawSprites();
 }

 function writePos(a,b)
 {
      database.ref('ball/position').set({
        'x' : position.x + a,
        'y' : position.y + b
      })
 }

function readPosition(data)
{
    position = data.val();
    console.log(position.x);
    hypoball.x = position.x;
    hypoball.y = position.y;
}

function showError()
{
    console.log("Error in writing to the database");
}



























/*var ball;

f

function draw()
{
    background('cyan');
   if(keyDown(UP_ARROW)){
        changePos(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePos(0,1);
    }
    else if(keyDown(LEFT_ARROW)){
        changePos(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePos(1,0);
    }
    
      drawSprites();
}

function changePos(a,b)
{
    ball.x = a;
    ball.y = b;
}*/

/*var hypoBall,database,position,hypoBallPos;

database = firebase.database();
    console.log(database);





/* 


/*hypoBall = createSprite(250,250,30,30);
    hypoBall.shapeColor = 'red';

    hypoBallPos = database.ref('ball/position');
    hypoBallPos.on("value",readPosition,showError);*/


/*
  if(position !== undefined){
     if(keyDown(UP_ARROW))
    {
         writePos(0,-1);
     }
     else if(keyDown(DOWN_ARROW))
     {
         writePos(0,1);
     }
     else if(keyDown(LEFT_ARROW))
     {
         writePos(-1,0);
     }
     else if(keyDown(RIGHT_ARROW))
     {
         writePos(1,0);
     } 
    }  

function writePos(a,b)
{
     database.ref('ball/position').set({
       'x' : position.x + a,
       'y' : position.y + b
     })
}

function readPosition(data)
{
    position = data.val();
    console.log(position.x);
    hypoBall.x = position.x;
    hypoBall.y = position.y;
}

function showError()
{
    console.log("Error in writing to the database");
}*/


/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-database.js"></script>
<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCbGnRYnE_7KIosdfoGp3QNWjOylMTcRqY",
    authDomain: "ball-1-f9355.firebaseapp.com",
    databaseURL: "https://ball-1-f9355-default-rtdb.firebaseio.com",
    projectId: "ball-1-f9355",
    storageBucket: "ball-1-f9355.appspot.com",
    messagingSenderId: "54644761815",
    appId: "1:54644761815:web:d8fc3cc0e030d36d63bc92"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>


*/