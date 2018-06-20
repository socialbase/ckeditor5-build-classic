import './popup.modal.css';

const idModal = 'ck-modal-image-selector';

export function popupModal(){

	let promise;

	let initTemplate = (template) => {
		let elementModal =  document.getElementById('ck-modal-image-selector');

		if (elementModal){
			elementModal.remove();
		}

		var child = document.createElement('div');
		child.innerHTML = template;
		document.body.appendChild(child);
	}

	let show = (editor) =>{
		let urls = editor.config.get('imageSelector').urls;
		let template = createTemplate(urls);
		initTemplate(template);

		document.getElementById("ck-modal-image-selector").style.display = 'flex';

		promise = new Promise((resolve, reject)=>{
			let elSelectors = document.getElementsByClassName('image-selector');

			for (let i=0; i<elSelectors.length; i++){
				elSelectors[i].addEventListener('click', event=>{
					resolve(event.srcElement.src);
					close();
				});
			}
		});

		return promise;
	}

	let close = () =>{
		document.getElementById("ck-modal-image-selector").style.display = 'none';
	}

	let createTemplate = urls =>{
		let imagesElement = '';

		for(let i=0; i<urls.length; i++ ){
			imagesElement = imagesElement + `<div class="image-selector"> <img src="${urls[i]}"> </div>`;
		}

		return `
			<div id="${idModal}" class="ck-modal-image-selector">
			<div class="modal-content">
				<div class="header">
					<h3>Selecione uma imagem</h3>
				</div>
				<div class="images-collection">
				${imagesElement}
				</div>
			</div>
			</div>
		`;
	};

	return {
		show
	}

}
