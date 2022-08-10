let galleryImg = document.querySelectorAll(".gallery-img")

function shuffle(arr){
    let j, temp;
    for(let i = arr.length - 1; i > 0; i--){
        j = Math.floor(Math.random()*(i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
let arr =  [1,2,3,4,5,6,7,8,9,10,11,12];
shuffle(arr)

galleryImg.forEach((el,i)=>{
    el.attributes.src.value = `./assets/img/galery/galery${arr[i]}.jpg`
})