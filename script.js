//your JS code here. If required.
function deleteElement() {
	let sele = document.getElementsByTagName("select")[0];
	let val = sele.value;
	let child = sele.children;
	for(let i = 0;i < sele.length;i++) {
		if(val===child[i].value) {
		 child[i].remove()
		}
	}
}


