var numSquares = 6;
var colors = generateRandomColor(numSquares);

var squares =document.querySelectorAll(".square");

var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var ul = document.querySelector("#upperlip");
var rB = document.querySelector("#reset");

var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

easybtn.addEventListener("click",function()
{
    numSquares=3;
    hardbtn.classList.remove("selected");
    easybtn.classList.add("selected");
    colors =generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textDisplay = pickedColor; 
    for (var i=0;i<squares.length;i++)
    {
        if(colors[i])
        {
            squares[i].style.background= colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
});

hardbtn.addEventListener("click",function()
{
    numSquares = 6;
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    colors =generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textDisplay = pickedColor; 
    for (var i=0;i<squares.length;i++)
    {
        if(colors[i])
        {
            squares[i].style.background= colors[i];
            squares[i].style.display="block";
        }
    }
   
});


rB.addEventListener("click",function()
{
    rB.textContent="NEW COLORS";
    colors = generateRandomColor(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent = pickedColor;

    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.background = colors[i];
    }
    ul.style.background = "cyan";
});



colorDisplay.textContent = pickedColor;
for(var i=0;i<squares.length;i++)
{
    //add intial colors
    squares[i].style.background = colors[i];
    //click response
    squares[i].addEventListener("click",function()
    {
        

        var clickedColor = this.style.background;
        
        
        if(clickedColor === pickedColor)
        {
            for(var j =0;j<squares.length;j++)
            {
                squares[j].style.background=this.style.background;
            }
            messageDisplay.textContent = "Correct";
            ul.style.background = pickedColor;
            rB.textContent = "PLAY AGAIN?";
        }
        else{
          this.style.background = "#232323";
          messageDisplay.textContent = "TryAgain";
        }
    });
}

function pickColor()
{
   var random = Math.floor( Math.random() * colors.length);
   return colors[random];
}

function generateRandomColor(n)
{
    //make an array
    var arr = [];

    for(var i=0;i<n;i++)
    {
      arr.push(randomColor());
    }
    return arr;
}

function randomColor()
{
   var r=Math.floor( Math.random() * 256);

   var g=Math.floor( Math.random() * 256);

   var b=Math.floor( Math.random() * 256);
   return "rgb(" + r +", " + g +", "+ b +")";
   
}
