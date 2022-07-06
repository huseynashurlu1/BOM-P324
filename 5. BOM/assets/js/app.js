// classList

// add / remove / toggle / contains

// var btn = document.querySelector('#btn_add');
// // var btn1 = document.querySelector('#btn_remove');
// var box = document.querySelector('#first')

// btn.addEventListener('click',function() {
//     // box.classList.toggle('active');

//     if(box.classList.contains('active')) {
//         box.classList.remove('active')
//     }
//     else{
//         box.classList.add('active')
//     }

// })

// btn1.addEventListener('click',function() {
//     box.classList.remove('active');
// })


// var btns = document.querySelectorAll('.btn');
// console.log(btns);

// for(var btn of btns) {
//     btn.addEventListener('click',function(e){
//         // console.log(e.target);

//         var active = document.querySelector('.active');
//         active.classList.remove('active');

//         this.classList.add('active')
//     })
// }


// Browser Object Model

// console.log(window.innerHeight);
// console.log(window.innerWidth);


// console.log("Screen width: " + screen.width);
// console.log("Screen height: " + screen.height);

// function Open() {
//     location.reload();
//     // window.open('https://www.w3schools.com/js/js_window.asp');
// }

// function Close() {
//     // window.close();
// }



// var btn = document.getElementById('status')


// if(navigator.onLine) {
//     btn.style.backgroundColor = 'green'
//     btn.innerText = 'ONLINE'
// }
// else{
//     btn.style.backgroundColor = 'red'
//     btn.innerText = 'OFFLINE'
// }


// keypress / keyup / keydown


// var times = 0;
// document.body.onkeydown = function(e) {
//     var count = document.getElementById('count');
//     if(e.keyCode === 13) {
//         times++;
//         count.innerHTML = times;
//     }
// }

// document.body.onkeyup = function(e) {
//     var count = document.getElementById('count');
//     if(e.keyCode === 13) {
//         times=0;
//         count.innerHTML = times;
//     }
// }


var box = document.getElementById('first');
var left = 0
var top_pos = 0
document.body.onkeydown = function(e) {
    if(e.keyCode === 39) {
        left += 10;
        box.style.left = `${left}px`
    }
    
    else if(e.keyCode === 37) {
        left -=10;
        box.style.left = `${left}px`
    }


    else if(e.keyCode === 40) {
        top_pos +=10;
        box.style.top = `${top_pos}px`
        console.log(top_pos);
    }
}