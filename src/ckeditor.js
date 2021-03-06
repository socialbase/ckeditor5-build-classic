/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import SBClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadadapterPlugin from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import AutoformatPlugin from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import UnderlinePlugin from '@ckeditor/ckeditor5-basic-styles/src/underline';
import StrikethroughPlugin from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import CodePlugin from '@ckeditor/ckeditor5-basic-styles/src/code';
import BlockquotePlugin from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import EasyimagePlugin from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import HeadingPlugin from '@ckeditor/ckeditor5-heading/src/heading';
import ImagePlugin from '@ckeditor/ckeditor5-image/src/image';
import ImagecaptionPlugin from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImagestylePlugin from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImagetoolbarPlugin from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageuploadPlugin from '@ckeditor/ckeditor5-image/src/imageupload';
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
import ListPlugin from '@ckeditor/ckeditor5-list/src/list';
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import AlignmentPlugin from '@ckeditor/ckeditor5-alignment/src/alignment';
import HighlightPlugin from '@ckeditor/ckeditor5-highlight/src/highlight';
import FontPlugin from '@ckeditor/ckeditor5-font/src/font';
import SelectorImage from './custom-plugins/image-selector/image-selector';
import ImageResize from './custom-plugins/image-selector/image-resize';

import ImageStyleUI from '@ckeditor/ckeditor5-image/src/imagestyle/imagestyleui';

import fullWidthIcon from '@ckeditor/ckeditor5-core/theme/icons/object-full-width.svg';
import leftIcon from '@ckeditor/ckeditor5-core/theme/icons/object-left.svg';
import centerIcon from '@ckeditor/ckeditor5-core/theme/icons/object-center.svg';
import rightIcon from '@ckeditor/ckeditor5-core/theme/icons/object-right.svg';

export default class SBClassicEditor extends SBClassicEditorBase {}

SBClassicEditor.build = {
	plugins: [
		EssentialsPlugin,
		UploadadapterPlugin,
		AutoformatPlugin,
		BoldPlugin,
		ItalicPlugin,
		UnderlinePlugin,
		StrikethroughPlugin,
		CodePlugin,
		BlockquotePlugin,
		EasyimagePlugin,
		HeadingPlugin,
		ImagePlugin,
		ImagecaptionPlugin,
		ImagestylePlugin,
		ImageuploadPlugin,
		LinkPlugin,
		ListPlugin,
		ParagraphPlugin,
		AlignmentPlugin,
		HighlightPlugin,
		FontPlugin,
		SelectorImage,
		ImagetoolbarPlugin,
		ImageStyleUI,
		ImageResize
	],
	config: {
		fontSize: {
			options: [
				8,
				9,
				10,
				11,
				12,
				14,
				18,
				24,
				30
			]
		},
		toolbar: {
			items: [
				'heading',
				'|',
				'highlight',
				'bold',
				'italic',
				'underline',
				'strikethrough',
				'code',
				'fontSize',
				'|',
				'alignment:left',
				'alignment:center',
				'alignment:right',
				'alignment:justify',
				'|',
				'link',
				'bulletedList',
				'numberedList',
				'SelectorImage',
				'blockQuote',
				'undo',
				'redo'
			]
		},
		image: {
			toolbar: [
				'imageStyle:full',
				'imageStyle:alignLeft',
				'imageStyle:alignCenter',
				'imageStyle:alignRight',
				'|',
				'SelectorImage',
				'|',
				'imageTextAlternative'
			],
			styles: [
				{
					name: 'full',
					title: 'Full size image',
					icon: fullWidthIcon,
					isDefault: true
				},

				{
					name: 'side',
					title: 'Side image',
					icon: rightIcon,
					className: 'image-style-side'
				},

				{
					name: 'alignLeft',
					title: 'Left aligned image',
					icon: leftIcon,
					className: 'image-style-align-left'
				},

				{
					name: 'alignCenter',
					title: 'Centered image',
					icon: centerIcon,
					className: 'image-style-align-center'
				},

				{
					name: 'alignRight',
					title: 'Right aligned image',
					icon: rightIcon,
					className: 'image-style-align-right'
				}
			]
		},
		imageSelector: {
			urls: [
			]
		},
		language: 'pt-br'
	}
};
