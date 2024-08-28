//JS
function formValidation() {
    let name = document.getElementById('name').value;
    let date = document.getElementById('birth').value;
    let male = document.getElementById('male').value;
    let female = document.getElementById('female').value;
    let pesan = document.getElementById('name').value;

    //if for name
    if (name==''){
        alert('Fill in the form first!');
    } else {
        document.getElementById('name-r').innerHTML = name;
        document.getElementById('user').innerHTML = name;
    }

    if (date==''){
        alert('Fill in the form first!');
    } else {
        document.getElementById('date-r').innerHTML = date;
    }

    if (male=='on'){
        document.getElementById('gender-r').innerHTML = 'Male';
    } else if (female=='on'){
        document.getElementById('gender-r').innerHTML = 'Female';
    } else{
        alert('Fill in the form first!');
    }

    if (pesan==''){
        alert('Fill in the form first!');
    } else {
        document.getElementById('pesan-r').innerHTML = pesan;
    }

    console.log(name);
}

let indexSlide = 1
showBanner(1)
function nextSlide(n){
    showBanner(indexSlide += n)
}
function showBanner(indexBanner){
    console.log(indexSlide)
    let listImage = document.getElementsByClassName('banner-pic');
    if (indexBanner >listImage.length) indexSlide = 1;
    let index=0;
    while (index<listImage.length){
        listImage[index].style.display = 'none';
        index++
    }
    listImage[indexSlide - 1].style.display = 'block'
    
}


