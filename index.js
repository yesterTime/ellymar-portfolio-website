

const showHeader = ()=>{
    const h = document.getElementById('header');
    if(h.style.display === 'none'){
        h.style.display = 'block';

    } else {
        h.style.display = 'none';
    }
}
const hideHeader = ()=>{
    const h = document.getElementById('header');
    if(h.style.display === 'block'){
        h.style.display = 'none';
    } else {
        h.style.display = 'block';
    }
    
}


function revealAnswer1(){
    document.getElementById('a1').style.opacity = '1';
}
function hideAnswer1(){
    document.getElementById('a1').style.opacity = '0';

}
function revealAnswer2(){
    document.getElementById('a2').style.opacity = '1';
}
function hideAnswer2(){
    document.getElementById('a2').style.opacity = '0';
}
function revealAnswer3(){
    document.getElementById('a3').style.opacity = '1';
}
function hideAnswer3(){
    document.getElementById('a3').style.opacity = '0';
}
function revealAnswer4(){
    document.getElementById('a4').style.opacity = '1';
}
function hideAnswer4(){
    document.getElementById('a4').style.opacity = '0';
}
function revealAnswer5(){
    document.getElementById('a5').style.opacity = '1';
}
function hideAnswer5(){
    document.getElementById('a5').style.opacity = '0';
}

document.getElementById('q1').onmouseenter= revealAnswer1;
document.getElementById('q1').onmouseleave = hideAnswer1;
document.getElementById('q2').onmouseenter= revealAnswer2;
document.getElementById('q2').onmouseleave = hideAnswer2;
document.getElementById('q3').onmouseenter= revealAnswer3;
document.getElementById('q3').onmouseleave = hideAnswer3;
document.getElementById('q4').onmouseenter= revealAnswer4;
document.getElementById('q4').onmouseleave = hideAnswer4;
document.getElementById('q5').onmouseenter= revealAnswer5;
document.getElementById('q5').onmouseleave = hideAnswer5;