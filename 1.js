let a = [];
let otherGrids = [];
let b = ['grid1', 'grid2', 'grid3', 'grid4'];
let q = 300;
let w = 0;
let k = [];
let t = 0;
let number1 = 0;
let isitTrue = false;
let mass1 = [0,0,0,0];
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
		}, 1500)
	
	q+=q;

}, q);

let time1 = setTimeout(function(){

	for(let i=0; i<=3; i++){
		otherGrids[i].style.opacity = 0.6;

	}

}, 1200)

play.addEventListener('click', function(){

			for(let i = 0; i<4; i++){
				otherGrids[i].style.background = 'white';
				otherGrids[i].style.opacity = 0.7;
				otherGrids[i].style.height = 800 + 'px';
			}

			this.style.marginTop = 1200  + 'px';

})

let int2 = setInterval(function(){

		otherGrids[number1].style.background = 'white';

		if(number1 < 3){
			number1++;
		}
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

			if(posY > 350){
				otherGrids[t].append(this)

					this.style.marginTop = '25px';
					this.style.marginLeft = '-90px';

					if(mass1[0] == 0){
						otherGrids[0].append(this)

						setTimeout(function(){
							mass1[0] = 1;
						}, 300)
						
					}

					if(mass1[0] == 1){
						otherGrids[1].append(this);

						setTimeout(function(){
							mass1[1] = 1;
						}, 300)

					}

					if(mass1[1] == 1){
						otherGrids[2].append(this);

						setTimeout(function(){
							mass1[2] = 1;
						}, 300)

					}

					if(mass1[2] == 1){
						otherGrids[3].append(this);

						setTimeout(function(){
							mass1[3] = 1;

								for(let i = 0; i<=3; i++){
									otherGrids[i].style.height = '450px';
								}

							}, 500)


							setTimeout(function(){
								if(mass1[3] == 1){
									for(let i = 9; i<=12; i++){
									
												document.getElementById('grid'+i).style.opacity = 1;

											}
										}
								}, 500)


					}

		}




		for(let i = 0; i<4; i++){
			otherGrids[i].style.height = '300px';
			otherGrids[i].style.opacity = 0.7;
			otherGrids[i].style.background = 'white';
		}

	})

	for(let i = 9; i<=12; i++){

		document.getElementById('grid'+i).onclick = function(e){

			alert (this)

		}

	}


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

						document.body.style.backgroundImage='url(https://cdn.wallpapersafari.com/82/14/fmpTJa.jpg)';
					}
				}
			}

			if(this.id == 'grid3'){
				for(let i = 0; i<4; i++){
					if(i !=2){
						document.body.style.backgroundImage='url(https://i.pinimg.com/736x/47/e7/b8/47e7b8ae6c66fcf37ea4b509ea4a90de.jpg)';

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
						document.body.style.backgroundImage='url(https://cdn.wallpapersafari.com/8/84/QcoewA.jpg)'
						a[i].style.marginLeft = '50px';
						a[i].style.width = '150px';
						a[i].style.height = '150px';

						this.style.marginLeft = '150px';
					}
				}
			}

		})	

}

