/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

'use strict';

module.exports = {
	// The editor creator to use.
	editor: '@ckeditor/ckeditor5-editor-classic/src/classiceditor',

	// The name under which the editor will be exported.
	moduleName: 'SBClassicEditor',

	// Plugins to include in the build.
	plugins: [
		'@ckeditor/ckeditor5-essentials/src/essentials',

		'@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter',
		'@ckeditor/ckeditor5-autoformat/src/autoformat',
		'@ckeditor/ckeditor5-basic-styles/src/bold',
		'@ckeditor/ckeditor5-basic-styles/src/italic',
		'@ckeditor/ckeditor5-basic-styles/src/underline',
		'@ckeditor/ckeditor5-basic-styles/src/strikethrough',
		'@ckeditor/ckeditor5-basic-styles/src/code',
		'@ckeditor/ckeditor5-block-quote/src/blockquote',
		'@ckeditor/ckeditor5-easy-image/src/easyimage',
		'@ckeditor/ckeditor5-heading/src/heading',
		'@ckeditor/ckeditor5-image/src/image',
		'@ckeditor/ckeditor5-image/src/imagecaption',
		'@ckeditor/ckeditor5-image/src/imagestyle',
		'@ckeditor/ckeditor5-image/src/imagetoolbar',
		'@ckeditor/ckeditor5-image/src/imageupload',
		'@ckeditor/ckeditor5-link/src/link',
		'@ckeditor/ckeditor5-list/src/list',
		'@ckeditor/ckeditor5-paragraph/src/paragraph',
		'@ckeditor/ckeditor5-alignment/src/alignment',
		'@ckeditor/ckeditor5-highlight/src/highlight',
		'@ckeditor/ckeditor5-font/src/font'
	],

	// Editor config.
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
				'imageUpload',
				'blockQuote',
				'undo',
				'redo'
			]
		},
		image: {
			toolbar: [
				'imageStyle:full',
				'imageStyle:side',
				'|',
				'imageTextAlternative'
			]
		},
		language: 'pt-br'
	}
};
