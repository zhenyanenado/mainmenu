let a = [];
let otherGrids = [];
let b = ['grid1', 'grid2', 'grid3', 'grid4'];
let q = 500;
let w = 0;
let k = [];
let play = document.getElementById('play');

for (let i = 1; i<=4; i++){
	k.push(document.getElementById('f'+i));
}

let int1 = setInterval(function(){

	k[w].style.opacity = 1;

	if(w<3){
		w++;
	}

		setTimeout(function(){
			for(let i=0; i<=3; i++){
				k[i].style.opacity = 0;
			}
		}, 2500)
	
	q+=q;

}, q)



for (let i = 5; i<=8; i++){
	otherGrids.push(document.getElementById('grid'+i));
}

for(let i = 1; i<=4; i++){
	a.push(document.getElementById('grid'+i));

	a[i-1].addEventListener('touchmove', function(event){

		event = event || window.event;

		let posY = event.touches[0].clientY;
		let posX = event.touches[0].clientX;

		for(let i = 0; i<4; i++){
			otherGrids[i].style.height = '300px';
			otherGrids[i].style.opacity = 0.7;
			otherGrids[i].style.background = 'white';
		}

		this.style.marginTop = posY + 'px';


			if(posY > 350){

				otherGrids[i-1].append(this)

				this.style.marginTop = '25px';
				this.style.marginLeft = '-90px';


			}


	})



		a[i-1].addEventListener('click', function(event){

			this.style.width = '350px';
			this.style.height = '350px';


			if(this.id == 'grid1'){
				for(let i = 0; i<4; i++){
					if(i != 0){
						document.body.style.backgroundImage='url(https://i.imgur.com/bnXxKlF.png)';


						a[i].style.marginLeft = '300px';
						a[i].style.width = '150px';
						a[i].style.height = '150px';

						this.style.marginLeft = '0px';


					}
				}
			}

			if(this.id == 'grid2'){
				for(let i = 0; i<4; i++){
					if(i !=1){
						a[0].style.marginLeft = '500px';
						a[2].style.marginLeft = '350px';
						a[3].style.marginLeft = '300px';

						a[i].style.width = '150px';
						a[i].style.height = '150px';

						this.style.marginLeft = '-150px';

						document.body.style.backgroundImage='url(https://m.media-amazon.com/images/I/716AFg5x8FL._AC_SL1500_.jpg)';
					}
				}
			}

			if(this.id == 'grid3'){
				for(let i = 0; i<4; i++){
					if(i !=2){
						document.body.style.backgroundImage='url(https://wallpapershome.ru/images/wallpapers/bogi-voyni-1080x1920-kratos-ps4-11593.jpg)';

						a[0].style.marginLeft = '0px';
						a[1].style.marginLeft = '-50px';
						a[3].style.marginLeft = '-200px';

						a[i].style.width = '150px';
						a[i].style.height = '150px';

						this.style.marginLeft = '250px';
					}
				}
			}

			if(this.id == 'grid4'){
				for(let i = 0; i<4; i++){
					if(i !=3){
						document.body.style.backgroundImage='url(https://image.api.playstation.com/vulcan/img/rnd/202010/2618/Y02ljdBodKFBiziorYgqftLE.png)'
						a[i].style.marginLeft = '50px';
						a[i].style.width = '150px';
						a[i].style.height = '150px';

						this.style.marginLeft = '150px';
					}
				}
			}

		})	

}

play.addEventListener('touchmove', function(event){

	event = event || window.event;

		let pY = event.touches[0].clientY;
		let pX = event.touches[0].clientX;

			for(let i = 0; i<4; i++){
				otherGrids[i].style.height = (pY-300) + 'px';
				otherGrids[i].style.background = 'white';
				otherGrids[i].style.opacity = 0.7;
			}

		this.style.marginTop = pY + 100  + 'px';

})
