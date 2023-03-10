var dog = 0;
var cat = 0;
var lion = 0;
var cow = 0;

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/mn9bSJJ0-/model.json',modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    if(error)
    {console.error(error);}
    else
    {
        console.log(results);
        random_number_r = Math.floor(Math.random()* 255)+1;
        random_number_g = Math.floor(Math.random()* 255)+1;
        random_number_b = Math.floor(Math.random()* 255)+1;
        
        document.getElementById("animals-sound").innerHTML = "I can hear - "+results[0].label;
        document.getElementById("animals-sound").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById("animals-images");

        if(results[0].label == "barking"){
            img.src = "bark.gif";
            dog = dog+1;
        }
       else if(results[0].label == "meowing"){
        img.src = "meow.gif";
        cat = cat+1;
       }
       else if(results[0].label == "roaring"){
        img.src = "lion-roar-44.gif";
        lion = lion+1;
       }
       else if(results[0].label == "mooing"){
        img.src = "cute-cow.gif";
        cow = cow+1;
       }
       else{
        img.src = "https://shravaripatil.github.io/Sound_controlled_animals/listen.gif";
       }
    }
}