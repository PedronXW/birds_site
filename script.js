var images=document.getElementsByClassName("ImageProducts");
var i=0;
function recalcSlider(){
    for(var j=0;j<images.length;j++){
        if(j!=i){
            images[j].style.display='none';
        }else{
            images[j].style.display='flex';
        }
    }
}

recalcSlider();

document.getElementById("SliderGalleryProductsPrevButton").addEventListener('click',()=>{
    if(i==images.length-1){
        i=-1;
    }
    i++;
    console.log(i)
    recalcSlider();
});


document.getElementById("SliderGalleryProductsNextButton").addEventListener('click',()=>{
    if(i==0){
        i=images.length;
    }
    i--;
    console.log(i)
    recalcSlider();
});
