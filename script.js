//your JS code here. If required.

const arr=["panel-1"]

function handleImg() {
	const panelRemove=document.getElementById(arr[0]);
	panelRemove.classList.remove("active");
	
	
 arr.pop();
	 arr.push(this.event.target.id);
	 const panelGet=document.getElementById(arr[0]);
	 panelRemove.classList.add("active");
	console.log(panelGet)
	
	
}