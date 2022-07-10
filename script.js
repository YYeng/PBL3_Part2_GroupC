function myfunction(){


    var x = 1024; //min value
    var y = 9999; // max value

    var deg = Math.floor(Math.random() * (x - y)) + y;

    document.getElementById('box').style.transform = "rotate("+deg+"deg)";

    var element = document.getElementById('mainbox');
    element.classList.remove('animate');
    setTimeout(function(){
        element.classList.add('animate');
    }, 5000); //5000 = 5 second
}

 // Create a new wheel object specifying the parameters at creation time.
 let theWheel = new Winwheel({
    'numSegments'  : 5,     
    'outerRadius'  : 212,   
    'textFontSize' : 28,    
    'segments'     :        
    [
       {'fillStyle' : '#eae56f', 'text' : 'Italy'},
       {'fillStyle' : '#89f26e', 'text' : 'China'},
       {'fillStyle' : '#7de6ef', 'text' : 'Brazil'},
       {'fillStyle' : '#e7706f', 'text' : 'Malaysia'},
       {'fillStyle' : '#eae56f', 'text' : 'India'}
    ],
    'animation' :           
    {
        'type'     : 'spinToStop',
        'duration' : 5,  //Duration in seconds
        'spins'    : 8,   //Default number of complete spins
        'callbackFinished' : alertPrize
    }
});

         
let wheelPower    = 0;
let wheelSpinning = false;

function powerSelected(powerLevel)
{
    
    if (wheelSpinning == false) {
        
        document.getElementById('pw1').className = "";
        document.getElementById('pw2').className = "";
        document.getElementById('pw3').className = "";

        if (powerLevel >= 1) {
            document.getElementById('pw1').className = "pw1";
        }

        if (powerLevel >= 2) {
            document.getElementById('pw2').className = "pw2";
        }

        if (powerLevel >= 3) {
            document.getElementById('pw3').className = "pw3";
        }

        wheelPower = powerLevel;

        document.getElementById('spin_button').src = "spin_on.png";
        document.getElementById('spin_button').className = "clickable";
    }
}

function startSpin()
{
    
    if (wheelSpinning == false) {
        
        if (wheelPower == 1) {
            theWheel.animation.spins = 3;
        } else if (wheelPower == 2) {
            theWheel.animation.spins = 8;
        } else if (wheelPower == 3) {
            theWheel.animation.spins = 15;
        }

        document.getElementById('spin_button').src       = "spin_off.png";
        document.getElementById('spin_button').className = "";

        theWheel.startAnimation();

        wheelSpinning = true;
    }
}

function resetWheel()
{
    theWheel.stopAnimation(false);  
    theWheel.rotationAngle = 0;     
    theWheel.draw();                

    document.getElementById('pw1').className = "";  
    document.getElementById('pw2').className = "";
    document.getElementById('pw3').className = "";

    wheelSpinning = false;          
}

function alertPrize(indicatedSegment)
{
 
}


function display(){
    document.getElementById("name").value = document.getElementById("title_input").value ;  
    document.getElementById("description").value = document.getElementById("desc_input").value;
            
  }