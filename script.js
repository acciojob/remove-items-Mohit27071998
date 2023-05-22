//your JS code here. If required.

function deleteEle() {
	let selele =document.getElementsByTagName("select")[0];
	let selval = selele.value;
	let childlist = selele.children;

	for(let i= 0 ; i < childlist.length;i++){
		if(selele === childlist[i].value){
			childlist[i].remove();
		}
	}
}