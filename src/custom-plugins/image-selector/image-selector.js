import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';

import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import { popupModal } from './popup/popup.service.modal';

export default class SelectorImage extends Plugin {

    init() {
		const editor = this.editor;
		const serviceModal = popupModal();

        editor.ui.componentFactory.add( 'SelectorImage', locale => {
            const view = new ButtonView( locale );

            view.set( {
                label: 'Selecionar Image',
                icon: imageIcon,
                tooltip: true
            } );

            // Callback executed once the image is clicked.
            view.on( 'execute', () => {
				serviceModal.show(editor).then(url=>{

					editor.model.change( writer => {
						const imageElement = writer.createElement( 'image', {
							src: url
						} );

						// Insert the image in the current selection location.
						editor.model.insertContent( imageElement, editor.model.document.selection );
					})
				});
            } );
            return view;
        } );
    }
}
