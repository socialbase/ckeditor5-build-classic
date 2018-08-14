'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classiceditor = require('@ckeditor/ckeditor5-editor-classic/src/classiceditor');

var _classiceditor2 = _interopRequireDefault(_classiceditor);

var _essentials = require('@ckeditor/ckeditor5-essentials/src/essentials');

var _essentials2 = _interopRequireDefault(_essentials);

var _uploadadapter = require('@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter');

var _uploadadapter2 = _interopRequireDefault(_uploadadapter);

var _autoformat = require('@ckeditor/ckeditor5-autoformat/src/autoformat');

var _autoformat2 = _interopRequireDefault(_autoformat);

var _bold = require('@ckeditor/ckeditor5-basic-styles/src/bold');

var _bold2 = _interopRequireDefault(_bold);

var _italic = require('@ckeditor/ckeditor5-basic-styles/src/italic');

var _italic2 = _interopRequireDefault(_italic);

var _underline = require('@ckeditor/ckeditor5-basic-styles/src/underline');

var _underline2 = _interopRequireDefault(_underline);

var _strikethrough = require('@ckeditor/ckeditor5-basic-styles/src/strikethrough');

var _strikethrough2 = _interopRequireDefault(_strikethrough);

var _code = require('@ckeditor/ckeditor5-basic-styles/src/code');

var _code2 = _interopRequireDefault(_code);

var _blockquote = require('@ckeditor/ckeditor5-block-quote/src/blockquote');

var _blockquote2 = _interopRequireDefault(_blockquote);

var _easyimage = require('@ckeditor/ckeditor5-easy-image/src/easyimage');

var _easyimage2 = _interopRequireDefault(_easyimage);

var _heading = require('@ckeditor/ckeditor5-heading/src/heading');

var _heading2 = _interopRequireDefault(_heading);

var _image = require('@ckeditor/ckeditor5-image/src/image');

var _image2 = _interopRequireDefault(_image);

var _imagecaption = require('@ckeditor/ckeditor5-image/src/imagecaption');

var _imagecaption2 = _interopRequireDefault(_imagecaption);

var _imagestyle = require('@ckeditor/ckeditor5-image/src/imagestyle');

var _imagestyle2 = _interopRequireDefault(_imagestyle);

var _imagetoolbar = require('@ckeditor/ckeditor5-image/src/imagetoolbar');

var _imagetoolbar2 = _interopRequireDefault(_imagetoolbar);

var _imageupload = require('@ckeditor/ckeditor5-image/src/imageupload');

var _imageupload2 = _interopRequireDefault(_imageupload);

var _link = require('@ckeditor/ckeditor5-link/src/link');

var _link2 = _interopRequireDefault(_link);

var _list = require('@ckeditor/ckeditor5-list/src/list');

var _list2 = _interopRequireDefault(_list);

var _paragraph = require('@ckeditor/ckeditor5-paragraph/src/paragraph');

var _paragraph2 = _interopRequireDefault(_paragraph);

var _alignment = require('@ckeditor/ckeditor5-alignment/src/alignment');

var _alignment2 = _interopRequireDefault(_alignment);

var _highlight = require('@ckeditor/ckeditor5-highlight/src/highlight');

var _highlight2 = _interopRequireDefault(_highlight);

var _font = require('@ckeditor/ckeditor5-font/src/font');

var _font2 = _interopRequireDefault(_font);

var _imageSelector = require('./custom-plugins/image-selector/image-selector');

var _imageSelector2 = _interopRequireDefault(_imageSelector);

var _imageResize = require('./custom-plugins/image-selector/image-resize');

var _imageResize2 = _interopRequireDefault(_imageResize);

var _imagestyleui = require('@ckeditor/ckeditor5-image/src/imagestyle/imagestyleui');

var _imagestyleui2 = _interopRequireDefault(_imagestyleui);

var _objectFullWidth = require('@ckeditor/ckeditor5-core/theme/icons/object-full-width.svg');

var _objectFullWidth2 = _interopRequireDefault(_objectFullWidth);

var _objectLeft = require('@ckeditor/ckeditor5-core/theme/icons/object-left.svg');

var _objectLeft2 = _interopRequireDefault(_objectLeft);

var _objectCenter = require('@ckeditor/ckeditor5-core/theme/icons/object-center.svg');

var _objectCenter2 = _interopRequireDefault(_objectCenter);

var _objectRight = require('@ckeditor/ckeditor5-core/theme/icons/object-right.svg');

var _objectRight2 = _interopRequireDefault(_objectRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * For licensing, see LICENSE.md.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var SBClassicEditor = function (_SBClassicEditorBase) {
	_inherits(SBClassicEditor, _SBClassicEditorBase);

	function SBClassicEditor() {
		_classCallCheck(this, SBClassicEditor);

		return _possibleConstructorReturn(this, (SBClassicEditor.__proto__ || Object.getPrototypeOf(SBClassicEditor)).apply(this, arguments));
	}

	return SBClassicEditor;
}(_classiceditor2.default);

exports.default = SBClassicEditor;


SBClassicEditor.build = {
	plugins: [_essentials2.default, _uploadadapter2.default, _autoformat2.default, _bold2.default, _italic2.default, _underline2.default, _strikethrough2.default, _code2.default, _blockquote2.default, _easyimage2.default, _heading2.default, _image2.default, _imagecaption2.default, _imagestyle2.default, _imageupload2.default, _link2.default, _list2.default, _paragraph2.default, _alignment2.default, _highlight2.default, _font2.default, _imageSelector2.default, _imagetoolbar2.default, _imagestyleui2.default, _imageResize2.default],
	config: {
		fontSize: {
			options: [8, 9, 10, 11, 12, 14, 18, 24, 30]
		},
		toolbar: {
			items: ['heading', '|', 'highlight', 'bold', 'italic', 'underline', 'strikethrough', 'code', 'fontSize', '|', 'alignment:left', 'alignment:center', 'alignment:right', 'alignment:justify', '|', 'link', 'bulletedList', 'numberedList', 'SelectorImage', 'blockQuote', 'undo', 'redo']
		},
		image: {
			toolbar: ['imageStyle:full', 'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight', '|', 'SelectorImage', '|', 'imageTextAlternative'],
			styles: [{
				name: 'full',
				title: 'Full size image',
				icon: _objectFullWidth2.default,
				isDefault: true
			}, {
				name: 'side',
				title: 'Side image',
				icon: _objectRight2.default,
				className: 'image-style-side'
			}, {
				name: 'alignLeft',
				title: 'Left aligned image',
				icon: _objectLeft2.default,
				className: 'image-style-align-left'
			}, {
				name: 'alignCenter',
				title: 'Centered image',
				icon: _objectCenter2.default,
				className: 'image-style-align-center'
			}, {
				name: 'alignRight',
				title: 'Right aligned image',
				icon: _objectRight2.default,
				className: 'image-style-align-right'
			}]
		},
		imageSelector: {
			urls: []
		},
		language: 'pt-br'
	}
};
