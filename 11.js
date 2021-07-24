let a = [];
let b = ['grid1', 'grid2', 'grid3', 'grid4'];
let c = document.getElementById('play');

for(let i = 1; i<=4; i++){
	a.push(document.getElementById('grid'+i));


		a[i-1].addEventListener('touchstart', function(){

			this.style.width = '350px';
			this.style.height = '350px';

			c.style.opacity = 1;


			if(this.id == 'grid1'){
				for(let i = 0; i<4; i++){
					if(i != 0){
						a[i].style.marginLeft = '300px';

						a[i].style.width = '120px';
						a[i].style.height = '120px';

						this.style.marginLeft = '0px';
						c.style.marginLeft = '0px';

					}
				}
			}

			if(this.id == 'grid2'){
				for(let i = 0; i<4; i++){
					if(i !=1){
						a[0].style.marginLeft = '450px';
						a[2].style.marginLeft = '350px';
						a[3].style.marginLeft = '300px';

						a[i].style.width = '120px';
						a[i].style.height = '120px';

						this.style.marginLeft = '-80px';
						c.style.marginLeft = '0px';
					}
				}
			}

			if(this.id == 'grid3'){
				for(let i = 0; i<4; i++){
					if(i !=2){
						a[0].style.marginLeft = '120px';
						a[1].style.marginLeft = '100px';
						a[3].style.marginLeft = '0px';

						a[i].style.width = '120px';
						a[i].style.height = '120px';

						this.style.marginLeft = '250px';
						c.style.marginLeft = '550px';

					}
				}
			}

			if(this.id == 'grid4'){
				for(let i = 0; i<4; i++){
					if(i !=3){
						a[i].style.marginLeft = '50px';

						this.style.marginLeft = '150px';
						c.style.marginLeft = '550px';

						a[i].style.width = '120px';
						a[i].style.height = '120px';
					}
				}
			}

		})
			

}