var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

 block_img_object= ""

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg", function(img){
        block_img_object= img

        block_img_object.scaleToWidth(700);
        block_img_object.scaleToHeight(510)

        block_img_object.set({
            top:0,
            left:0
        });
        canvas.add(block_img_object);
    });
	
}

function playSound(){
    x.play();
	
}
