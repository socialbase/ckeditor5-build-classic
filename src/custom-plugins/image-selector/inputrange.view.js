import View from '@ckeditor/ckeditor5-ui/src/view';
import { getEnvKeystrokeText } from '@ckeditor/ckeditor5-utils/src/keyboard';

export default class InputRangeView extends View {

	constructor(locale) {
		super(locale);
		const bind = this.bindTemplate;

		this.set('id');
		this.set('value', 0);
		this.set('isReadOnly', false);
		this.set('min', 0);
		this.set('max', 100);
		this.set('step', 100);

		this.children = this.createCollection();

		this.setTemplate({
			tag: 'input',
			attributes: {
				type: 'range',
				class: [
					'ck',
					'ck-input',
					'ck-input-range'
				],
				id: bind.to('id'),
				readonly: bind.to('isReadOnly'),
				min: bind.to('min'),
				max: bind.to('max'),
				max: bind.to('step')
			},
			children: this.children,
			on: {
				click: bind.to( event => {
					this.fire( 'execute', event);
				} )
			}

		});
	}

	render() {
		super.render();

		const setValue = value => {
			this.element.value = ( !value && value !== 0 ) ? 0 : value;
		};

		setValue( this.value );

		this.on( 'change:value', ( evt, name, value ) => {
			setValue( value );
		} );
	}

	select() {
		this.element.select();
	}

	focus() {
		this.element.focus();
	}

}
