let a = [];
let b = ['grid1', 'grid2', 'grid3', 'grid4'];
let c = document.getElementById('play');

for(let i = 1; i<=4; i++){
	a.push(document.getElementById('grid'+i));

	a[i-1].addEventListener('touchmove', function(event){

		event = event || window.event;

	})


	document.ondblclick = function(){

		for(let i = 0; i<4; i++){
			a[i].style.padding = '40px';
			a[i].style.height = '250px';

		}
	

	}

		a[i-1].addEventListener('touchstart', function(event){

			this.style.width = '350px';
			this.style.height = '350px';

			c.style.opacity = 1;


			if(this.id == 'grid1'){
				for(let i = 0; i<4; i++){
					if(i != 0){
						document.body.style.backgroundImage='url(https://www2.pictorem.com/collection/900_Gunawan-Rb_Aloy%20%E2%80%93%20Game%20Horizon%20Zero%20Dawn%202.jpg)';


						a[i].style.marginLeft = '300px';

						a[i].style.width = '150px';
						a[i].style.height = '150px';

						this.style.marginLeft = '0px';
						c.style.marginLeft = '0px';

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
						c.style.marginLeft = '0px';

						document.body.style.backgroundImage='url(https://m.media-amazon.com/images/I/716AFg5x8FL._AC_SL1500_.jpg)';
					}
				}
			}

			if(this.id == 'grid3'){
				for(let i = 0; i<4; i++){
					if(i !=2){
						document.body.style.backgroundImage='url(https://img2.akspic.ru/originals/0/4/7/2/5/152740-far_cry-far_cry_6-ubisoft-dzhankarlo_espozito-anton_kastilo-1080x1920.jpg)';

						a[0].style.marginLeft = '0px';
						a[1].style.marginLeft = '-50px';
						a[3].style.marginLeft = '-200px';

						a[i].style.width = '150px';
						a[i].style.height = '150px';

						this.style.marginLeft = '250px';
						c.style.marginLeft = '550px';


					}
				}
			}

			if(this.id == 'grid4'){
				for(let i = 0; i<4; i++){
					if(i !=3){
						document.body.style.backgroundImage='url(https://image.api.playstation.com/vulcan/img/rnd/202010/2618/Y02ljdBodKFBiziorYgqftLE.png)'
						a[i].style.marginLeft = '50px';

						this.style.marginLeft = '150px';
						c.style.marginLeft = '550px';

						a[i].style.width = '150px';
						a[i].style.height = '150px';
					}
				}
			}

		})	

}

