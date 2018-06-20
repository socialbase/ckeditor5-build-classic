
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import InputRangeView from './inputrange.view';

export default class ImageResize extends Plugin {

    init() {
        const editor = this.editor;

        this.editor.ui.componentFactory.add( 'ImageResize', locale => {
            const view = new InputRangeView( locale );

            view.set( {
				id: 'resize-image',
                label: 'Tamanho da imagem',
                tooltip: true
			});

			view.on( 'execute', (event) => {
				const element = editor.model.document.selection.getSelectedElement();
				editor.model.change( writer => {

					//programar aqui o resize da image
				});
			});

			return view;
		})
	}
}
