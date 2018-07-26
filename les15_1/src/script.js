var btn1 = document.querySelector('#btn1');
var chBox = document.querySelector('#check');
var name = document.querySelector('name');
var age = document.querySelector('age');


function getValue(){
	var getValue = document.getElementById('age').value;
	return getValue;
}

function check(){
	if(chBox.checked){
		if( getValue() >= 18){
			alert('Доступ разрешен');
		}
		else{
			alert('Доступ запрещен, 18+');
		}
	}
	else{
		alert('Доступ запрещен, оформите подписку на рассылку');
	}
}

btn1.addEventListener('click', check);