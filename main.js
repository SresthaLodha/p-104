Webcam.set({
    width: 320,
    height:240,
    image_format: 'jpeg',
    jpeg_quality: 90


});
Webcam.attach("#webcam");
function takepicture(){
    Webcam.snap(function(data_uri){
        document.getElementById("image1").innerHTML="<img  id='image2' src='"+data_uri+"'>"
    })
    
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/lOkBAwMnj/model.json",modelready)
function modelready(){
    console.log("model is succesfuly loaded");}
    function identify(){
        img=document.getElementById("image2");
        classifier.classify(img,gotresults);
   }
   function gotresults(error,results){
    if (error){
      console.log(error);
    }
    else{
       console.log(results);
       name=results[0].label;
       accuracy=results[0].confidence;
       document.getElementById("name").innerHTML=name;
       document.getElementById("accuracy").innerHTML=accuracy.toFixed(2);
    }

}





   
