// import data from '../../../public/data.json'
const contentCarosell = document.querySelector(".tns-carousell")
let container_btnClose = document.querySelector(".container-icon-close")
let title= document.querySelector(".accordion-container__btn-acc")
let description = document.querySelector(".accordion-container__panel")
const btn_close = document.querySelector(".close-btn")
const backgraound_card_title = document.querySelector(".container-icon-close")

const close = () => {
		let item = document.querySelector(".tns-controls");
		let selectItem = document.querySelector(".tns-select");
		selectItem.classList.remove("tns-select")
		container_btnClose.style.display = "none";
		const panel = document.querySelector(".accordion-container__panel");
		item.style.pointerEvents= "auto";
		contentCarosell.style.pointerEvents = "auto";
		// btns_controls.style.pointerEvents = "auto"
		panel.style.maxHeight = null;
}
const accordion = () => {
const
	d = document,
	acc = document.getElementsByClassName("tns-carousell__content");
for (let i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		
		jsonParce(this);
		this.classList.toggle("active");
		this.classList.add("tns-select");
		let item = document.querySelector(".tns-controls");
		contentCarosell.style.pointerEvents = "none";
		item.style.pointerEvents = "none"
		container_btnClose.style.display = "block";

		const panel = document.querySelector(".accordion-container__panel");
			if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
			} else {
			panel.style.maxHeight = "100%";
			} 
	});
}
};



function jsonParce(item){
	fetch("./data.json")
.then(response => {
return response.json();
})
.then(data =>  generateInfo(data,item));}



btn_close.addEventListener("click", close)
export default accordion


function generateInfo(data,item){
	// backgraound_card_title.style.backgroundImage="url('https://i.ytimg.com/vi/7fto9fnsrCA/maxres2.jpg')"
	if(item){
		title.innerHTML= `
		<div class="container-ts">
		<h1>${data.item_netfl[item.id].title}</h1>
		<h5>${data.item_netfl[item.id].category}</h5>
		</div>
		`;
		description.innerHTML=`
		<br>
		<h5>Descripcion game</h5>
		<p>${data.item_netfl[item.id].Descripcion}</p>
		<a href="https://adserver.bettingcenter.ag/www/delivery/ck.php?n=a4113041&amp;cb=INSERT_RANDOM_NUMBER_HERE">
			<img style= "border-radius: 6px" src="${data.item_netfl[item.id].img_foorterCard}" alt="">
		</a>
		
		
		`;
		if(data.item_netfl[item.id].video){
		description.innerHTML+=`
		<div class="ed-grid m-grid-2 s-grid-1">
			<div s-cols-1>
			<video style="border-radius: 10px; height: 100%; -webkit-box-shadow: 0px 1px 11px 6px #000000; box-shadow: 0px 1px 11px 6px #000000;" preload="auto" loop="loop" controls="controls" width="100%" height="150"><source src="${data.item_netfl[item.id].video}" type="video/mp4">Your<br>browser does not support HTML video.</video>
			</div>
		</div>
		`;}
	}
};
