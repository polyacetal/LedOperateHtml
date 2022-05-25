var bt1 = document.getElementById("button1");
bt1.addEventListener('click', test1Func, false);
var bt2 = document.getElementById("button2");
bt2.addEventListener('click', test2Func, false);

function test1Func()
{
    alert('test1\nsuccess');
}

function test2Func()
{
    alert('test2\nsuccess');
}