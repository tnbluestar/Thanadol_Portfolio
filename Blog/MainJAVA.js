let textP = document.getElementById("text")
let botton = document.getElementById("botton")
let x = 0;

function postFunction()
{
    t = text.value

    if(t == "")
    alert ("Please Type")

    else if (x == 0 && t !="")
    {
        document.getElementById("Box1").innerHTML = t;
        document.getElementById("text").value = "";
        x++
    }

    else if (x == 1 && t !="")
    {
        document.getElementById("Box2").innerHTML = t;
        document.getElementById("text").value = "";
        x++
    }

    else if (x == 2 && t !="")
    {
        document.getElementById("Box3").innerHTML = t;
        document.getElementById("text").value = "";
        x++
    }
}

function clearFunction()
{
    document.getElementById("Box1").innerHTML = "";
    document.getElementById("Box2").innerHTML = "";
    document.getElementById("Box3").innerHTML = "";
    document.getElementById("text").value = "";
    x=0
}