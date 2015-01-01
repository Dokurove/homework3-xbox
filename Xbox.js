var cont = document.getElementById('img-wrap').getElementsByTagName('li'),
    getCurIndex,index;
var getCurIndex = function(){
	for(var i = 0; i < cont.length; i++)
		if(cont[i].className.indexOf('selected')!=-1)
			return i;
}//找到当前位置的图片是哪一个
var s;
var move = function(s){
	index = getCurIndex();
	if(s){
		index++;
		if(index > cont.length - 1)
			index = 0;
	}
	else if(!s){
		index--;
		if(index < 0)
			index = cont.length - 1;
	}
	display(index);
}//移动，配合其后的autostart函数，完成自动换页。move中为true则向右走，false则向左走
var autoStart = function(){
	setInterval(function(){move(true);},5000);
} //自动翻页效果
var display = function(index){
    for(var j = 0; j < cont.length; j++){
    	cont[j].className = null;
    }//所有的图片都先隐藏，不显示
    cont[index].className = "selected";//显示当前的图片
}//显示




