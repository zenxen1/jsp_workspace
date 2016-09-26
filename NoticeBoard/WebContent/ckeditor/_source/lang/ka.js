/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the Georgian
 *		language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['ka'] =
{
	/**
	 * The language reading direction. Possible values are "rtl" for
	 * Right-To-Left languages (like Arabic) and "ltr" for Left-To-Right
	 * languages (like English).
	 * @default 'ltr'
	 */
	dir : 'ltr',

	/*
	 * Screenreader titles. Please note that screenreaders are not always capable
	 * of reading non-English words. So be careful while translating it.
	 */
	editorTitle : '�깴�깞�깷�깳�깴�깦�깳 �깲�깞�깛�깘�깷�깴�깮�깲�깦, %1',
	editorHelp : '�깛�깘�깘�꺆�깦�깲�깞�깤 ALT 0-�깳 �깛�깘�꺇�깫�깘�깲�깞�깙�깦�깳 �깫�깦�깳�깘�깺�깞�깙�깘�깛',

	// ARIA descriptions.
	toolbars	: 'Editor toolbars', // MISSING
	editor		: '�깴�깞�깷�깳�깴�깦�깳 �깲�깞�깛�깘�깷�깴�깮�깲�깦',

	// Toolbar buttons without dialogs.
	source			: '�깧�깮�깛�깞�깙�깦',
	newPage			: '�깘�꺇�깘�깪�깦 �깚�깢�깞�깲�깛�깦',
	save			: '�꺀�깘�꺃�깞�깲�깘',
	preview			: '�깚�깘�깛�깘�꺇�깞�깛�깢�깘',
	cut				: '�깘�깫�깮�꺆�깲�깘',
	copy			: '�깘�깳�깪�깦',
	paste			: '�꺀�깘�깳�깫�깘',
	print			: '�깙�깞�꺆�깛�깢�깘',
	underline		: '�깚�깘�꺇�깘�깣�깵�깪�깦',
	bold			: '�깫�깳�꺇�깢�깦�깪�깦',
	italic			: '�깛�깘�꺇�깲�깦�깪�깦',
	selectAll		: '�깾�깢�깞�깪�깘�깶�깲�깦�깳 �깫�깮�깭�깦�깿�깭�깢�깘',
	removeFormat	: '�깶�깮�깲�깫�깘�깴�깦�깲�깞�깙�깦�깳 �깫�깮�꺇�깳�깭�깘',
	strike			: '�깚�깘�깛�깘�꺇�깘�깣�깵�깪�깦',
	subscript		: '�깦�깭�깛�깞�깷�깳�깦',
	superscript		: '�꺇�깘�깲�깦�깳�꺇�깦',
	horizontalrule	: '�꺉�깮�깲�깦�깣�깮�깭�깴�깘�깪�깵�깲�깦 �꺇�깘�깣�깦�깳 �꺀�깘�깳�깫�깘',
	pagebreak		: '�깚�깢�깞�깲�깛�깦�깳 �꺃�깾�깢�깞�깴�깘 �깙�깞�꺆�깛�깢�깦�깳�깤�깢�깦�깳',
	pagebreakAlt		: '�깚�깢�깞�깲�깛�깦�깳 �꺃�깾�깢�깞�깴�깘',
	unlink			: '�깙�깫�깵�깪�깦�깳 �깫�깮�꺇�깳�깭�깘',
	undo			: '�깚�깘�깵�깷�깫�깞�깙�깘',
	redo			: '�깚�깘�깫�깞�깮�깲�깞�깙�깘',

	// Common messages and labels.
	common :
	{
		browseServer	: '�깳�깞�깲�깢�깞�깲�깣�깞 �깛�깘�깤�깢�깘�깪�깦�깞�깲�깞�깙�깘',
		url				: 'URL',
		protocol		: '�깯�깲�깮�깴�깮�깧�깮�깪�깦',
		upload			: '�깘�깴�깢�깦�깲�깤�깢�깘',
		uploadSubmit	: '�깳�깞�깲�깢�깞�깲�깣�깞 �깚�깘�깚�깣�깘�깢�깭�깘',
		image			: '�깳�깵�깲�깘�깤�깦',
		flash			: 'Flash',
		form			: '�깶�깮�깲�깫�깘',
		checkbox		: '�깫�깮�깭�깦�깿�깢�깭�깦�깳 �깺�깦�깪�깘�깧�깦',
		radio			: '�깘�깫�깮�깲�꺀�깞�깢�깦�깳 �깺�깦�깪�깘�깧�깦',
		textField		: '�깴�깞�깷�깳�깴�깵�깲�깦 �깢�깞�깪�깦',
		textarea		: '�깴�깞�깷�깳�깴�깵�깲�깦 �깘�깲�깞',
		hiddenField		: '�깫�깘�깪�깵�깪�깦 �깢�깞�깪�깦',
		button			: '�깺�깦�깪�깘�깧�깦',
		select			: '�깘�깲�꺀�깞�깢�깦�깳 �깢�깞�깪�깦',
		imageButton		: '�깳�깵�깲�깘�깤�깦�깘�깭�깦 �깺�깦�깪�깘�깧�깦',
		notSet			: '<�깘�깲�깘�깶�깞�깲�깦>',
		id				: 'Id',
		name			: '�깳�깘�꺇�깞�깪�깦',
		langDir			: '�깞�깭�깦�깳 �깫�깦�깫�깘�깲�깤�깵�깪�깞�깙�깘',
		langDirLtr		: '�깫�깘�깲�꺁�꺇�깭�깦�깛�깘�깭 �깫�깘�깲�꺈�깢�깭�깦�깢 (LTR)',
		langDirRtl		: '�깫�깘�깲�꺈�깢�깭�깦�깛�깘�깭 �깫�깘�깲�꺁�꺇�깭�깦�깢 (RTL)',
		langCode		: '�깞�깭�깦�깳 �깧�깮�깛�깦',
		longDescr		: '�깛�깦�깛�깦 �깘�깺�꺃�깞�깲�깦�깳 URL',
		cssClass		: 'CSS �깧�깪�깘�깳�깦',
		advisoryTitle	: '�깳�깘�깤�깘�깵�깲�깦',
		cssStyle		: 'CSS �깳�깴�깦�깪�깦',
		ok				: '�깛�깦�깘�꺇',
		cancel			: '�깚�깘�깵�깷�깫�깞�깙�깘',
		close			: '�깛�깘�꺇�깵�깲�깢�깘',
		preview			: '�깚�깘�깛�깘�꺇�깞�깛�깢�깘',
		generalTab		: '�깦�깭�깶�깮�깲�깫�깘�꺁�깦�깘',
		advancedTab		: '�깚�깘�깶�깘�깲�깤�깮�깞�깙�깵�깪�깦',
		validateNumberFailed : '�깞�깳 �깫�깭�깦�깿�깢�깭�깞�깪�깮�깙�깘 �깘�깲�깘�깘 �깲�깦�꺁�꺇�깢�깦.',
		confirmNewPage	: '�깘�깫 �깛�깮�깧�깵�깫�깞�깭�깴�깿�깦 �깾�깢�깞�깪�깘 �꺀�깘�깵�꺃�깞�깲�깞�깪�깦 �꺁�깢�깪�깦�깪�깞�깙�깘 �깛�깘�깦�깧�깘�깲�깚�깞�깙�깘. �깛�깘�깲�꺃�깫�깵�깭�깞�깙�깵�깪�깦 �꺇�깘�깲�깤 �깲�깮�깫 �깘�꺇�깘�깪�깦 �깚�깢�깞�깲�깛�깦�깳 �꺀�깘�깴�깢�깦�깲�깤�깢�깘 �깚�깦�깭�깛�깘�깤?',
		confirmCancel	: '�깣�깮�깚�깦�깞�깲�깤�깦 �깯�깘�깲�깘�깫�깞�깴�깲�깦 �깿�깞�꺁�깢�깪�깦�깪�깦�깘, �깛�깘�깲�꺃�깫�깵�깭�깞�깙�깵�깪�깦�깪 �꺇�깘�깲�깤 �깲�깮�깫 �깶�깘�깭�꺈�깲�깦�깳 �깛�깘�꺇�깵�깲�깢�깘 �깚�깳�깵�깲�깤?',
		options			: '�깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦',
		target			: '�깚�깘�꺇�깳�깭�깦�깳 �깘�깛�깚�깦�깪�깦',
		targetNew		: '�깘�꺇�깘�깪�깦 �깶�깘�깭�꺈�깘�깲�깘 (_blank)',
		targetTop		: '�깣�깞�깛�깘 �깶�깘�깭�꺈�깘�깲�깘 (_top)',
		targetSelf		: '�깦�깚�깦�깢�깞 �깶�깘�깭�꺈�깘�깲�깘 (_self)',
		targetParent	: '�깫�깿�깮�깙�깞�깪�깦 �깶�깘�깭�꺈�깘�깲�깘 (_parent)',
		langDirLTR		: '�깫�깘�깲�꺁�꺇�깭�깦�깛�깘�깭 �깫�깘�깲�꺈�깢�깭�깦�깢 (LTR)',
		langDirRTL		: '�깫�깘�깲�꺈�깢�깭�깦�깛�깘�깭 �깫�깘�깲�꺁�꺇�깭�깦�깢 (RTL)',
		styles			: '�깳�깴�깦�깪�깦',
		cssClasses		: 'CSS �깧�깪�깘�깳�깦',
		width			: '�깳�깦�깚�깘�깭�깞',
		height			: '�깳�깦�깫�깘�깺�깪�깞',
		align			: '�깳�꺃�깮�깲�깞�깙�깘',
		alignLeft		: '�깫�깘�깲�꺁�꺇�깞�깭�깘',
		alignRight		: '�깫�깘�깲�꺈�깢�깞�깭�깘',
		alignCenter		: '�깿�깵�깘',
		alignTop		: '�깣�깞�깫�깮�깤�깘',
		alignMiddle		: '�깿�깵�깘',
		alignBottom		: '�깷�깢�깞�깫�깮�깤�깘',
		invalidValue	: 'Invalid value.', // MISSING
		invalidHeight	: '�깳�깦�깫�깘�깺�깪�깞 �깲�깦�꺁�꺇�깢�깦�깤 �깵�깭�깛�깘 �깦�깾�깮�깳 �꺃�깘�깲�깫�깮�깛�깚�깞�깭�깦�깪�깦.',
		invalidWidth	: '�깳�깦�깚�깘�깭�깞 �깲�깦�꺁�꺇�깢�깦�깤 �깵�깭�깛�깘 �깦�깾�깮�깳 �꺃�깘�깲�깫�깮�깛�깚�깞�깭�깦�깪�깦.',
		invalidCssLength	: 'Value specified for the "%1" field must be a positive number with or without a valid CSS measurement unit (px, %, in, cm, mm, em, ex, pt, or pc).', // MISSING
		invalidHtmlLength	: 'Value specified for the "%1" field must be a positive number with or without a valid HTML measurement unit (px or %).', // MISSING
		invalidInlineStyle	: 'Value specified for the inline style must consist of one or more tuples with the format of "name : value", separated by semi-colons.', // MISSING
		cssLengthTooltip	: 'Enter a number for a value in pixels or a number with a valid CSS unit (px, %, in, cm, mm, em, ex, pt, or pc).', // MISSING

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, �깫�깦�깵�꺃�깢�깛�깮�깫�깞�깪�깦�깘</span>'
	},

	contextmenu :
	{
		options : '�깧�깮�깭�깴�깞�깷�깳�깴�깵�깲�깦 �깫�깞�깭�깦�깵�깳 �깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: '�깳�깯�깞�꺁�깦�깘�깪�깵�깲�깦 �깳�깦�깫�깙�깮�깪�깮�깳 �꺀�깘�깳�깫�깘',
		title		: '�깳�깯�깞�꺁�깦�깘�깪�깵�깲�깦 �깳�깦�깫�깙�깮�깪�깮�깳 �깘�깲�꺀�깞�깢�깘',
		options : '�깳�깯�깞�꺁�깦�깘�깪�깵�깲�깦 �깳�깦�깫�깙�깮�깪�깮�깳 �깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦'
	},

	// Link dialog.
	link :
	{
		toolbar		: '�깙�깫�깵�깪�깦',
		other 		: '<�깳�꺇�깢�깘>',
		menu		: '�깙�깫�깵�깪�깦�깳 �깲�깞�깛�깘�깷�깴�깦�깲�깞�깙�깘',
		title		: '�깙�깫�깵�깪�깦',
		info		: '�깙�깫�깵�깪�깦�깳 �깦�깭�깶�깮�깲�깫�깘�꺁�깦�깘',
		target		: '�깚�깘�꺇�깳�깭�깦�깳 �깘�깛�깚�깦�깪�깦',
		upload		: '�깘�깷�깘�꺀�깢�깘',
		advanced	: '�깛�깘�꺃�깢�깲�깦�깪�깞�깙�깦�깤',
		type		: '�깙�깫�깵�깪�깦�깳 �깴�깦�깯�깦',
		toUrl		: 'URL',
		toAnchor	: '�깙�깫�깵�깪�깦 �깴�깞�깷�깳�깴�깿�깦 �깺�깵�깣�깘�깣�깞',
		toEmail		: '�깞�깪�깶�깮�깳�깴�깘',
		targetFrame		: '<frame>',
		targetPopup		: '<popup �깶�깘�깭�꺈�깘�깲�깘>',
		targetFrameName	: 'Frame-�깦�깳 �깳�깘�꺇�깞�깪�깦',
		targetPopupName	: 'Popup �깶�깘�깭�꺈�깲�깦�깳 �깳�깘�꺇�깞�깪�깦',
		popupFeatures	: 'Popup �깶�깘�깭�꺈�깲�깦�깳 �깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦',
		popupResizable	: '�꺁�깢�깘�깪�깞�깙�깘�깛�깦 �깣�깮�깫�깦�깤',
		popupStatusBar	: '�깳�깴�깘�깴�깵�깳�깦�깳 �깣�깮�깪�깦',
		popupLocationBar: '�깭�깘�깢�깦�깚�깘�꺁�깦�깦�깳 �깣�깮�깪�깦',
		popupToolbar	: '�꺇�깞�깪�깳�깘�꺃�깾�깮�깤�깘 �깣�깮�깪�깦',
		popupMenuBar	: '�깫�깞�깭�깦�깵�깳 �깣�깮�깪�깦',
		popupFullScreen	: '�깫�깤�깞�깪�깦 �깞�깧�깲�깘�깭�깦 (IE)',
		popupScrollBars	: '�깚�깘�깛�깘�꺇�깢�깞�깢�깦�깳 �깣�깮�깪�깞�깙�깦',
		popupDependent	: '�깛�깘�깫�깮�깧�깦�깛�깞�깙�깵�깪�깦 (Netscape)',
		popupLeft		: '�깫�깘�깲�꺁�꺇�깞�깭�깘 �깯�깮�깣�깦�꺁�깦�깘',
		popupTop		: '�깣�깞�깛�깘 �깯�깮�깣�깦�꺁�깦�깘',
		id				: 'Id',
		langDir			: '�깞�깭�깦�깳 �깫�깦�깫�깘�깲�깤�깵�깪�깞�깙�깘',
		langDirLTR		: '�깫�깘�깲�꺁�꺇�깭�깦�깛�깘�깭 �깫�깘�깲�꺈�깢�깭�깦�깢 (LTR)',
		langDirRTL		: '�깫�깘�깲�꺈�깢�깭�깦�깛�깘�깭 �깫�깘�깲�꺁�꺇�깭�깦�깢 (RTL)',
		acccessKey		: '�꺃�깢�깛�깮�깫�깦�깳 �깺�깦�깪�깘�깧�깦',
		name			: '�깳�깘�꺇�깞�깪�깦',
		langCode			: '�깞�깭�깦�깳 �깧�깮�깛�깦',
		tabIndex			: 'Tab-�깦�깳 �깦�깭�깛�깞�깷�깳�깦',
		advisoryTitle		: '�깳�깘�깤�깘�깵�깲�깦',
		advisoryContentType	: '�깿�깦�깚�깤�깘�깢�깳�깦�깳 �깴�깦�깯�깦',
		cssClasses		: 'CSS �깧�깪�깘�깳�깦',
		charset			: '�깧�깮�깛�깦�깲�깞�깙�깘',
		styles			: 'CSS �깳�깴�깦�깪�깦',
		rel			: '�깧�깘�깢�깿�깦�깲�깦',
		selectAnchor		: '�깘�깦�깲�꺀�깦�깞�깤 �깺�깵�깣�깘',
		anchorName		: '�깺�깵�깣�깦�깳 �깳�깘�꺇�깞�깪�깦�깤',
		anchorId			: '�깞�깪�깞�깫�깞�깭�깴�깦�깳 Id-�깤',
		emailAddress		: '�깞�깪�깶�깮�깳�깴�깦�깳 �깫�깦�깳�깘�깫�깘�깲�깤�깞�깙�깦',
		emailSubject		: '�꺃�깞�깲�깦�깪�깦�깳 �깳�깘�깤�깘�깵�깲�깦',
		emailBody		: '�꺃�깞�깲�깦�깪�깦�깳 �깴�깞�깷�깳�깴�깦',
		noAnchors		: '(�깘�깫 �깛�깮�깧�깵�깫�깞�깭�깴�깿�깦 �깺�깵�깣�깘 �깘�깲�깘�깘)',
		noUrl			: '�깘�깧�깲�깦�깶�깞�깤 �깙�깫�깵�깪�깦�깳 URL',
		noEmail			: '�깘�깧�깲�깦�깶�깞�깤 �깞�깪�깶�깮�깳�깴�깦�깳 �깫�깦�깳�깘�깫�깘�깲�깤�깦'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: '�깺�깵�깣�깘',
		menu		: '�깺�깵�깣�깦�깳 �깲�깞�깛�깘�깷�깴�깦�깲�깞�깙�깘',
		title		: '�깺�깵�깣�깦�깳 �깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦',
		name		: '�깺�깵�깣�깵�깳 �깳�깘�꺇�깞�깪�깦',
		errorName	: '�깘�깧�깲�깦�깶�깞�깤 �깺�깵�깣�깦�깳 �깳�깘�꺇�깞�깪�깦',
		remove		: 'Remove Anchor' // MISSING
	},

	// List style dialog
	list:
	{
		numberedTitle		: '�깚�깘�깛�깘�깭�깮�깫�깲�깦�깪�깦 �깳�깦�깦�깳 �깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦',
		bulletedTitle		: '�깺�깦�깪�깞�깙�깦�깘�깭�깦 �깳�깦�깦�깳 �깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦',
		type				: '�깴�깦�깯�깦',
		start				: '�깳�깘�꺃�깾�깦�깳�깦',
		validateStartNumber				:'�깳�깦�깦�깳 �깳�깘�꺃�깾�깦�깳�깦 �깫�깤�깞�깪�깦 �깲�깦�꺁�꺇�깢�깦 �깵�깭�깛�깘 �깦�깾�깮�깳.',
		circle				: '�꺃�깲�깞�꺃�깦�깲�깦',
		disc				: '�꺃�깲�깞',
		square				: '�깧�깢�깘�깛�깲�깘�깴�깦',
		none				: '�깘�깲�깘�깶�깞�깲�깦',
		notset				: '<�깘�깲�깘�깶�깞�깲�깦>',
		armenian			: '�깳�깮�깫�꺇�깵�깲�깦 �깚�깘�깛�깘�깭�깮�깫�깲�깢�깘',
		georgian			: '�깷�깘�깲�깤�깵�깪�깦 �깚�깘�깛�깘�깭�깮�깫�깲�깢�깘 (�깘�깭, �깙�깘�깭, �깚�깘�깭, ..)',
		lowerRoman			: '�깲�깮�깫�깘�깵�깪�깦 �깚�깘�깛�깘�깭�깮�깫�깲�깢�꺁�깘 �깯�깘�깴�깘�깲�깘 �꺁�깦�깶�깲�깞�깙�깦�깤 (i, ii, iii, iv, v, ..)',
		upperRoman			: '�깲�깮�깫�깘�깵�깪�깦 �깚�깘�깛�깘�깭�깮�깫�깲�깢�깘 �깛�깦�깛�깦 �꺁�깦�깶�깲�깞�깙�깦�깤 (I, II, III, IV, V, etc.)',
		lowerAlpha			: '�깯�깘�깴�깘�깲�깘 �깪�깘�깤�깦�깭�깵�깲�깦 �깘�깳�깮�깞�깙�깦�깤 (a, b, c, d, e, ..)',
		upperAlpha			: '�깛�깦�깛�깦 �깪�깘�깤�깦�깭�깵�깲�깦 �깘�깳�깮�깞�깙�깦�깤 (A, B, C, D, E, ..)',
		lowerGreek			: '�깯�깘�깴�깘�깲�깘 �깙�깞�깲�꺂�깭�깵�깪�깦 �깘�깳�깮�깞�깙�깦�깤 (�깘�깪�깶�깘, �깙�깞�깴�깘, �깚�깘�깫�깘, ..)',
		decimal				: '�깲�깦�꺁�꺇�깢�깞�깙�깦�깤 (1, 2, 3, ..)',
		decimalLeadingZero	: '�깭�깵�깪�깦�깤 �깛�깘�꺃�깾�깞�깙�깵�깪�깦 �깲�깦�꺁�꺇�깢�깞�깙�깦�깤 (01, 02, 03, ..)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: '�꺂�깞�깙�깭�깘 �깛�깘 �깿�깞�꺁�깢�깪�깘',
		find				: '�꺂�깞�깙�깭�깘',
		replace				: '�깿�깞�꺁�깢�깪�깘',
		findWhat			: '�깳�깘�꺂�깦�깞�깙�깞�깪�깦 �깴�깞�깷�깳�깴�깦:',
		replaceWith			: '�깿�깞�꺁�깢�깪�깦�깳 �깴�깞�깷�깳�깴�깦:',
		notFoundMsg			: '�깫�깦�깤�깦�깤�깞�깙�깵�깪�깦 �깴�깞�깷�깳�깴�깦 �깘�깲 �깫�깮�깦�꺂�깞�깙�깭�깘.',
		findOptions			: 'Find Options', // MISSING
		matchCase			: '�깛�깦�깛�깦 �깛�깘 �깯�깘�깴�깘�깲�깘 �깘�깳�깮�깞�깙�깦�깳 �깛�깘�깫�깤�꺇�깢�깞�깢�깘',
		matchWord			: '�깫�깤�깞�깪�깦 �깳�깦�깴�깾�깢�깦�깳 �깛�깘�깫�깤�꺇�깢�깞�깢�깘',
		matchCyclic			: '�깛�깮�깧�깵�깫�깞�깭�깴�깦�깳 �깙�깮�깪�깮�깿�깦 �깚�깘�깳�깢�깪�깦�깳 �깫�깞�깲�깞 �깤�깘�깢�깦�깛�깘�깭 �깛�깘�꺃�깾�깞�깙�깘',
		replaceAll			: '�깾�깢�깞�깪�깘�깳 �깿�깞�꺁�깢�깪�깘',
		replaceSuccessMsg	: '%1 �깫�깮�꺂�깞�깙�깭�깦�깪�깦 �깿�깞�깦�꺁�깢�깘�깪�깘.'
	},

	// Table Dialog
	table :
	{
		toolbar		: '�꺁�꺇�깲�깦�깪�깦',
		title		: '�꺁�꺇�깲�깦�깪�깦�깳 �깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦',
		menu		: '�꺁�꺇�깲�깦�깪�깦�깳 �깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦',
		deleteTable	: '�꺁�꺇�깲�깦�깪�깦�깳 �꺃�깘�깿�깪�깘',
		rows		: '�깳�깴�깲�깦�깷�깮�깭�깦',
		columns		: '�깳�깢�깞�깴�깦',
		border		: '�꺀�깘�깲�꺀�깮�깳 �깣�깮�깫�깘',
		widthPx		: '�꺃�깞�깲�깴�깦�깪�깦',
		widthPc		: '�깯�깲�깮�꺁�깞�깭�깴�깦',
		widthUnit	: '�깳�깘�깣�깮�깫�깦 �깞�깲�깤�깞�깵�깪�깦',
		cellSpace	: '�깵�꺈�깲�깦�깳 �깳�깦�깢�깲�꺁�깞 (spacing)',
		cellPad		: '�깵�꺈�깲�깦�깳 �깧�깦�깛�깞 (padding)',
		caption		: '�깳�깘�깤�깘�깵�깲�깦',
		summary		: '�깿�깞�꺈�깘�깫�깞�깙�깘',
		headers		: '�깳�깘�깤�깘�깵�깲�깞�깙�깦',
		headersNone		: '�깘�깲�깘�깶�깞�깲�깦',
		headersColumn	: '�깯�깦�깲�깢�깞�깪�깦 �깳�깢�깞�깴�깦',
		headersRow		: '�깯�깦�깲�깢�깞�깪�깦 �깳�깴�깲�깦�깷�깮�깭�깦',
		headersBoth		: '�깮�깲�깦�깢�깞',
		invalidRows		: '�깳�깴�깲�깦�깷�깮�깭�깞�깙�깦�깳 �깲�깘�깮�깛�깞�깭�깮�깙�깘 �깛�깘�깛�깞�깙�깦�깤�깦 �깲�깦�꺁�꺇�깢�깦 �깵�깭�깛�깘 �깦�깾�깮�깳.',
		invalidCols		: '�깳�깢�깞�깴�깞�깙�깦�깳 �깲�깘�깮�깛�깞�깭�깮�깙�깘 �깛�깘�깛�깞�깙�깦�깤�깦 �깲�깦�꺁�꺇�깢�깦 �깵�깭�깛�깘 �깦�깾�깮�깳.',
		invalidBorder	: '�꺀�깘�깲�꺀�깮�깳 �깣�깮�깫�깘 �깲�깦�꺁�꺇�깢�깦�깤 �깵�깛�깭�깘 �깦�깾�깮�깳 �꺃�깘�깲�깫�깮�깛�깚�깞�깭�깦�깪�깦.',
		invalidWidth	: '�꺁�꺇�깲�깦�깪�깦�깳 �깳�깦�깚�깘�깭�깞 �깲�깦�꺁�꺇�깢�깦�깤 �깵�깭�깛�깘 �깦�깾�깮�깳 �꺃�깘�깲�깫�깮�깛�깚�깞�깭�깦�깪�깦.',
		invalidHeight	: '�꺁�꺇�깲�깦�깪�깦�깳 �깳�깦�깫�깘�깺�깪�깞 �깲�깦�꺁�꺇�깢�깦�깤 �깵�깭�깛�깘 �깦�깾�깮�깳 �꺃�깘�깲�깫�깮�깛�깚�깞�깭�깦�깪�깦.',
		invalidCellSpacing	: '�깵�꺈�깲�깦�깳 �깳�깦�깢�깲�꺁�깞 (spacing) �깲�깦�꺁�꺇�깢�깦�깤 �깵�깭�깛�깘 �깦�깾�깮�깳 �꺃�깘�깲�깫�깮�깛�깚�깞�깭�깦�깪�깦.',
		invalidCellPadding	: '�깵�꺈�깲�깦�깳 �깧�깦�깛�깞 (padding) �깲�깦�꺁�꺇�깢�깦�깤 �깵�깭�깛�깘 �깦�깾�깮�깳 �꺃�깘�깲�깫�깮�깛�깚�깞�깭�깦�깪�깦.',

		cell :
		{
			menu			: '�깵�꺈�깲�깘',
			insertBefore	: '�깵�꺈�깲�깦�깳 �꺀�깘�깳�깫�깘 �깫�깘�깭�깘�깫�깛�깞',
			insertAfter		: '�깵�꺈�깲�깦�깳 �꺀�깘�깳�깫�깘 �깫�깞�깲�깞',
			deleteCell		: '�깵�꺈�깲�깞�깙�깦�깳 �꺃�깘�깿�깪�깘',
			merge			: '�깵�꺈�깲�깞�깙�깦�깳 �깿�깞�깞�깲�깤�깞�깙�깘',
			mergeRight		: '�깿�깞�깞�깲�깤�깞�깙�깘 �깫�깘�깲�꺈�깢�깞�깭�깘�깳�깤�깘�깭',
			mergeDown		: '�깿�깞�깞�깲�깤�깞�깙�깘 �깷�깢�깞�깫�깮�깤�깘�깳�깤�깘�깭',
			splitHorizontal	: '�깚�깘�깾�깮�깶�깘 �꺉�깮�깲�깦�깣�깮�깭�깴�깘�깪�깵�깲�깘�깛',
			splitVertical	: '�깚�깘�깾�깮�깶�깘 �깢�깞�깲�깴�깦�깧�깘�깪�깵�깲�깘�깛',
			title			: '�깵�꺈�깲�깦�깳 �깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦',
			cellType		: '�깵�꺈�깲�깦�깳 �깴�깦�깯�깦',
			rowSpan			: '�깳�깴�깲�깦�깷�깮�깭�깞�깙�깦�깳 �깮�깛�깞�깭�깮�깙�깘',
			colSpan			: '�깳�깢�깞�깴�깞�깙�깦�깳 �깮�깛�깞�깭�깮�깙�깘',
			wordWrap		: '�깳�깴�깲�깦�깷�깮�깭�깦�깳 �깚�깘�깛�깘�깴�깘�깭�깘 (Word Wrap)',
			hAlign			: '�꺉�깮�깲�깦�깣�깮�깭�깴�깘�깪�깵�깲�깦 �깳�꺃�깮�깲�깞�깙�깘',
			vAlign			: '�깢�깞�깲�깴�깦�깧�깘�깪�깵�깲�깦 �깳�꺃�깮�깲�깞�깙�깘',
			alignBaseline	: '�꺂�깦�깲�깦�깤�깘�깛�깦 �꺇�깘�깣�깦�깳 �깚�깘�깳�꺃�깢�깲�깦�깢',
			bgColor			: '�깶�깮�깭�깦�깳 �깶�깞�깲�깦',
			borderColor		: '�꺀�깘�깲�꺀�깮�깳 �깶�깞�깲�깦',
			data			: '�깫�깮�깭�깘�꺁�깞�깫�깞�깙�깦',
			header			: '�깳�깘�깤�깘�깵�깲�깦',
			yes				: '�깛�깦�깘�꺇',
			no				: '�깘�깲�깘',
			invalidWidth	: '�깵�꺈�깲�깦�깳 �깳�깦�깚�깘�깭�깞 �깲�깦�꺁�꺇�깢�깦�깤 �깵�깭�깛�깘 �깦�깾�깮�깳 �꺃�깘�깲�깫�깮�깛�깚�깞�깭�깦�깪�깦.',
			invalidHeight	: '�깵�꺈�깲�깦�깳 �깳�깦�깫�깘�깺�깪�깞 �깲�깦�꺁�꺇�깢�깦�깤 �깵�깭�깛�깘 �깦�깾�깮�깳 �꺃�깘�깲�깫�깮�깛�깚�깞�깭�깦�깪�깦.',
			invalidRowSpan	: '�깳�깴�깲�깦�깷�깮�깭�깞�깙�깦�깳 �깲�깘�깮�깛�깞�깭�깮�깙�깘 �깫�깤�깞�깪�깦 �깲�깦�꺁�꺇�깢�깦 �깵�깭�깛�깘 �깦�깾�깮�깳.',
			invalidColSpan	: '�깳�깢�깞�깴�깞�깙�깦�깳 �깲�깘�깮�깛�깞�깭�깮�깙�깘 �깫�깤�깞�깪�깦 �깲�깦�꺁�꺇�깢�깦 �깵�깭�깛�깘 �깦�깾�깮�깳.',
			chooseColor		: '�깘�깲�꺀�깞�깢�깘'
		},

		row :
		{
			menu			: '�깳�깴�깲�깦�깷�깮�깭�깦',
			insertBefore	: '�깳�깴�깲�깦�깷�깮�깭�깦�깳 �꺀�깘�깫�깘�깴�깞�깙�깘 �꺃�깦�깭',
			insertAfter		: '�깳�깴�깲�깦�깷�깮�깭�깦�깳 �꺀�깘�깫�깘�깴�깞�깙�깘 �깫�깞�깲�깞',
			deleteRow		: '�깳�깴�깲�깦�깷�깮�깭�깞�깙�깦�깳 �꺃�깘�깿�깪�깘'
		},

		column :
		{
			menu			: '�깳�깢�깞�깴�깦',
			insertBefore	: '�깳�깢�깞�깴�깦�깳 �꺀�깘�깫�깘�깴�깞�깙�깘 �꺃�깦�깭',
			insertAfter		: '�깳�깢�깞�깴�깦�깳 �꺀�깘�깫�깘�깴�깞�깙�깘 �깫�깞�깲�깞',
			deleteColumn	: '�깳�깢�깞�깴�깞�깙�깦�깳 �꺃�깘�깿�깪�깘'
		}
	},

	// Button Dialog.
	button :
	{
		title		: '�깺�깦�깪�깘�깧�깦�깳 �깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦',
		text		: '�깴�깞�깷�깳�깴�깦',
		type		: '�깴�깦�깯�깦',
		typeBtn		: '�깺�깦�깪�깘�깧�깦',
		typeSbm		: '�깚�깘�깚�깣�깘�깢�깭�깘',
		typeRst		: '�깚�깘�깳�깵�깶�깤�깘�깢�깞�깙�깘'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : '�깫�깮�깭�깦�깿�깢�깭�깦�깳 �깺�깦�깪�깘�깧�깦�깳 (Checkbox) �깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦',
		radioTitle	: '�깘�깳�깘�깲�꺀�깞�깢�깦 �깺�깦�깪�깘�깧�깦�깳 (Radio) �깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦',
		value		: '�깴�깞�깷�깳�깴�깦',
		selected	: '�깘�깲�꺀�깞�깵�깪�깦'
	},

	// Form Dialog.
	form :
	{
		title		: '�깶�깮�깲�깫�깦�깳 �깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦',
		menu		: '�깶�깮�깲�깫�깦�깳 �깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦',
		action		: '�깷�깫�깞�깛�깞�깙�깘',
		method		: '�깫�깞�깤�깮�깛�깦',
		encoding	: '�깧�깮�깛�깦�깲�깞�깙�깘'
	},

	// Select Field Dialog.
	select :
	{
		title		: '�깘�깲�꺀�깞�깢�깦�깳 �깢�깞�깪�깦�깳 �깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦',
		selectInfo	: '�깦�깭�깶�깮�깲�깫�깘�꺁�깦�깘',
		opAvail		: '�깿�깞�깳�깘�꺂�깪�깞�깙�깞�깪�깦 �깢�깘�깲�깦�깘�깭�깴�깞�깙�깦',
		value		: '�깫�깭�깦�깿�깢�깭�깞�깪�깮�깙�깘',
		size		: '�깣�깮�깫�깘',
		lines		: '�꺇�깘�깣�깞�깙�깦',
		chkMulti	: '�깫�깲�깘�깢�깪�깮�깙�깦�깤�깦 �깘�깲�꺀�깞�깢�깘�깭�깦�깳 �깳�깘�깿�깵�깘�깪�깞�깙�깘',
		opText		: '�깴�깞�깷�깳�깴�깦',
		opValue		: '�깫�깭�깦�깿�깢�깭�깞�깪�깮�깙�깘',
		btnAdd		: '�깛�깘�깫�깘�깴�깞�깙�깘',
		btnModify	: '�깿�깞�꺁�깢�깪�깘',
		btnUp		: '�깣�깞�깫�깮�깤',
		btnDown		: '�깷�깢�깞�깫�깮�깤',
		btnSetValue : '�깘�깫�깮�깲�꺀�깞�깵�깪 �깫�깭�깦�깿�깢�깭�깞�깪�깮�깢�깭�깘�깛 �깛�깘�깾�깞�깭�깞�깙�깘',
		btnDelete	: '�꺃�깘�깿�깪�깘'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: '�깴�깞�깷�깳�깴�깵�깲�깦 �깘�깲�깦�깳 �깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦',
		cols		: '�깳�깢�깞�깴�깞�깙�깦',
		rows		: '�깳�깴�깲�깦�깷�깮�깭�깞�깙�깦'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: '�깴�깞�깷�깳�깴�깵�깲�깦 �깢�깞�깪�깦�깳 �깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦',
		name		: '�깳�깘�꺇�깞�깪�깦',
		value		: '�깫�깭�깦�깿�깢�깭�깞�깪�깮�깙�깘',
		charWidth	: '�깳�깦�깫�깙�깮�깪�깮�깳 �깣�깮�깫�깘',
		maxChars	: '�깘�깳�깮�깞�깙�깦�깳 �깫�깘�깷�깳�깦�깫�깘�깪�깵�깲�깦 �깮�깛�깞�깭�깮�깙�깘',
		type		: '�깴�깦�깯�깦',
		typeText	: '�깴�깞�깷�깳�깴�깦',
		typePass	: '�깯�깘�깲�깮�깪�깦'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: '�깫�깘�깪�깵�깪�깦 �깢�깞�깪�깦�깳 �깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦',
		name	: '�깳�깘�꺇�깞�깪�깦',
		value	: '�깫�깭�깦�깿�깢�깭�깞�깪�깮�깙�깘'
	},

	// Image Dialog.
	image :
	{
		title		: '�깳�깵�깲�깘�깤�깦�깳 �깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦',
		titleButton	: '�깳�깵�깲�깘�깤�깦�깘�깭�깦 �깺�깦�깪�깘�깧�깦�깳 �깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦',
		menu		: '�깳�깵�깲�깘�깤�깦�깳 �깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦',
		infoTab		: '�깳�깵�깲�깘�깤�깦�깳 �깦�깭�깶�깮�깲�깫�꺁�깦�깘',
		btnUpload	: '�깳�깞�깲�깢�깞�깲�깦�깳�깤�깢�깦�깳 �깚�깘�깚�깣�깘�깢�깭�깘',
		upload		: '�깘�깴�깢�깦�깲�깤�깢�깘',
		alt			: '�깳�깘�깭�깘�꺁�깢�깪�깮 �깴�깞�깷�깳�깴�깦',
		lockRatio	: '�깯�깲�깮�깯�깮�깲�꺁�깦�깦�깳 �깿�깞�깭�깘�깲�꺀�깵�깭�깞�깙�깘',
		resetSize	: '�깣�깮�깫�깦�깳 �깛�깘�깙�깲�깵�깭�깞�깙�깘',
		border		: '�꺀�깘�깲�꺀�깮',
		hSpace		: '�꺉�깮�깲�깦�깣�깮�깭�깴�깘�깪�깵�깲�깦 �깳�깦�깢�깲�꺁�깞',
		vSpace		: '�깢�깞�깲�깴�깦�깧�깘�깪�깵�깲�깦 �깳�깦�깢�깲�꺁�깞',
		alertUrl	: '�깘�깧�깲�깦�깶�깞�깤 �깳�깵�깲�깘�깤�깦�깳 URL',
		linkTab		: '�깙�깫�깵�깪�깦',
		button2Img	: '�깚�깳�깵�깲�깤 �깘�깲�꺀�깞�깵�깪�깦 �깳�깵�깲�깘�깤�깦�깘�깭�깦 �깺�깦�깪�깘�깧�깦�깳 �깚�깘�깛�깘�깷�꺁�깞�깢�깘 �꺀�깢�깞�깵�깪�깞�깙�깲�깦�깢 �깺�깦�깪�깘�깧�깘�깛?',
		img2Button	: '�깚�깳�깵�깲�깤 �깘�깲�꺀�깞�깵�깪�깦 �꺀�깢�깞�깵�깪�깞�깙�깲�깦�깢�깦 �깺�깦�깪�깘�깧�깦�깳 �깚�깘�깛�깘�깷�꺁�깞�깢�깘 �깳�깵�깲�깘�깤�깦�깘�깭 �깺�깦�깪�깘�깧�깘�깛?',
		urlMissing	: '�깳�깵�깲�깘�깤�깦�깳 URL �깘�깲�깘�깘 �깿�깞�깢�깳�깞�깙�깵�깪�깦.',
		validateBorder	: '�꺀�깘�깲�꺀�깮 �깫�깤�깞�깪�깦 �깲�깦�꺁�꺇�깢�깦 �깵�깭�깛�깘 �깦�깾�깮�깳.',
		validateHSpace	: '�꺉�깮�깲�깦�깣�깮�깭�깴�깘�깪�깵�깲�깦 �깳�깦�깢�깲�꺁�깞 �깫�깤�깞�깪�깦 �깲�깦�꺁�꺇�깢�깦 �깵�깭�깛�깘 �깦�깾�깮�깳.',
		validateVSpace	: '�깢�깞�깲�깴�깦�깧�깘�깪�깵�깲�깦 �깳�깦�깢�깲�꺁�깞 �깫�깤�깞�깪�깦 �깲�깦�꺁�꺇�깢�깦 �깵�깭�깛�깘 �깦�깾�깮�깳.'
	},

	// Flash Dialog
	flash :
	{
		properties		: 'Flash-�깦�깳 �깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦',
		propertiesTab	: '�깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦',
		title			: 'Flash-�깦�깳 �깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦',
		chkPlay			: '�깘�깢�깴�깮 �깚�깘�깿�깢�깞�깙�깘',
		chkLoop			: '�꺀�깘�꺁�깦�깧�깪�깢�깘',
		chkMenu			: 'Flash-�깦�깳 �깫�깞�깭�깦�깵�깳 �깛�깘�깿�깢�깞�깙�깘',
		chkFull			: '�깫�깤�깞�깪�깦 �깞�깧�깲�깘�깭�깦�깳 �깛�깘�깿�깢�깞�깙�깘',
 		scale			: '�깫�깘�깳�깿�깴�깘�깙�깦�깲�깞�깙�깘',
		scaleAll		: '�깾�깢�깞�깪�깘�깶�깲�깦�깳 �꺀�깢�깞�깭�깞�깙�깘',
		scaleNoBorder	: '�꺀�깘�깲�꺀�깮�깳 �깚�깘�깲�깞�깿�깞',
		scaleFit		: '�깣�깵�깳�깴�깦 �꺀�깘�깳�깫�깘',
		access			: '�깳�깧�깲�깦�깯�깴�깦�깳 �꺃�깢�깛�깮�깫�깘',
		accessAlways	: '�깾�깮�깢�깞�깪�깤�깢�깦�깳',
		accessSameDomain: '�깦�깚�깦�깢�깞 �깛�깮�깫�깞�깭�깦',
		accessNever		: '�깘�깲�깘�깳�깛�깲�깮�깳',
		alignAbsBottom	: '�꺀�깘�깲�꺀�깮�깳 �깷�깢�깞�깫�깮�깤�깘 �깭�깘�꺃�깦�깪�깦�깳 �깳�꺃�깮�깲�깞�깙�깘 �깴�깞�깷�깳�깴�깦�깳�깤�깢�깦�깳',
		alignAbsMiddle	: '�꺀�깘�깲�꺀�깮�깳 �깿�깵�깘 �깭�깘�꺃�깦�깪�깦�깳 �깳�꺃�깮�깲�깞�깙�깘 �깴�깞�깷�깳�깴�깦�깳�깤�깢�깦�깳',
		alignBaseline	: '�깳�깘�깙�깘�깣�깦�깳�깮 �꺇�깘�깣�깦�깳 �깳�꺃�깮�깲�깞�깙�깘',
		alignTextTop	: '�깴�깞�깷�깳�깴�깦 �깣�깞�깫�깮�깛�깘�깭',
		quality			: '�꺇�깘�깲�깦�깳�꺇�깦',
		qualityBest		: '�깳�깘�깵�깧�깞�깤�깞�깳�깮',
		qualityHigh		: '�깫�깘�깺�깘�깪�깦',
		qualityAutoHigh	: '�깫�깘�깺�깘�깪�깦 (�깘�깢�깴�깮�깫�깘�깴�깵�깲�깦)',
		qualityMedium	: '�깳�깘�깿�깵�깘�깪�깮',
		qualityAutoLow	: '�꺂�깘�깪�깦�깘�깭 �깛�깘�깙�깘�깪�깦',
		qualityLow		: '�깛�깘�깙�깘�깪�깦',
		windowModeWindow: '�깶�깘�깭�꺈�깘�깲�깘',
		windowModeOpaque: '�깚�깘�깵�깫�꺆�깢�깦�깲�깢�깘�깪�깞',
		windowModeTransparent : '�깚�깘�깫�꺆�깢�깦�깲�깢�깘�깪�깞',
		windowMode		: '�깶�깘�깭�꺈�깲�깦�깳 �깲�깞�깱�깦�깫�깦',
		flashvars		: '�꺁�깢�깪�깘�깛�깞�깙�깦 Flash-�깦�깳�깤�깢�깦�깳',
		bgcolor			: '�깶�깮�깭�깦�깳 �깶�깞�깲�깦',
		hSpace			: '�꺉�깮�깲�깦�깣. �깳�깦�깢�깲�꺁�깞',
		vSpace			: '�깢�깞�깲�깴. �깳�깦�깢�깲�꺁�깞',
		validateSrc		: 'URL �깘�깲 �깵�깭�깛�깘 �깦�깾�깮�깳 �꺁�깘�깲�깦�깞�깪�깦.',
		validateHSpace	: '�꺉�깮�깲�깦�깣�깮�깭�깴�깘�깪�깵�깲�깦 �깳�깦�깢�깲�꺁�깞 �깘�깲 �깵�깭�깛�깘 �깦�깾�깮�깳 �꺁�깘�깲�깦�깞�깪�깦.',
		validateVSpace	: '�깢�깞�깲�깴�깦�깧�깘�깪�깵�깲�깦 �깳�깦�깢�깲�꺁�깞 �깘�깲 �깵�깭�깛�깘 �깦�깾�깮�깳 �꺁�깘�깲�깦�깞�깪�깦.'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: '�깫�깘�깲�깤�깪�꺃�깞�깲�깘',
		title			: '�깫�깘�깲�깤�깪�꺃�깞�깲�깘',
		notAvailable	: '�깵�깧�깘�꺁�깲�깘�깢�깘�깛, �깞�깳 �깳�깞�깲�깢�깦�깳�깦 �깘�깫�깱�깘�깫�깘�깛 �깫�깦�깵�꺃�깢�깛�깮�깫�깞�깪�깦�깘.',
		errorLoading	: '�깳�깞�깲�깢�깦�깳�깦�깳 �깚�깘�깫�깮�꺂�깘�꺇�깞�깙�깦�깳 �깿�깞�꺁�깛�깮�깫�깘: %s.',
		notInDic		: '�깘�깲�깘�깘 �깪�깞�깷�깳�깦�깧�깮�깭�깿�깦',
		changeTo		: '�깿�깞�꺁�깢�깪�깞�깪�깦',
		btnIgnore		: '�깵�깚�깵�깪�깞�깙�깞�깪�깾�깮�깶�깘',
		btnIgnoreAll	: '�깾�깢�깞�깪�깘�깳 �깵�깚�깵�깪�깞�깙�깞�깪�깾�깮�깶�깘',
		btnReplace		: '�깿�깞�꺁�깢�깪�깘',
		btnReplaceAll	: '�깾�깢�깞�깪�깘�깳 �깿�깞�꺁�깢�깪�깘',
		btnUndo			: '�깚�깘�깵�깷�깫�깞�깙�깘',
		noSuggestions	: '- �깘�깲�깘�깘 �깿�깞�깫�깮�깤�깘�깢�깘�깣�깞�깙�깘 -',
		progress		: '�깫�깦�깫�깛�깦�깭�깘�깲�깞�깮�깙�깳 �깫�깘�깲�깤�깪�꺃�깞�깲�깦�깳 �깿�깞�깫�깮�꺃�깫�깞�깙�깘...',
		noMispell		: '�깫�깘�깲�깤�깪�꺃�깞�깲�깦�깳 �깿�깞�깫�깮�꺃�깫�깞�깙�깘: �깿�깞�꺁�깛�깮�깫�깘 �깘�깲 �깫�깮�깦�꺂�깞�깙�깭�깘',
		noChanges		: '�깫�깘�깲�깤�깪�꺃�깞�깲�깦�깳 �깿�깞�깫�깮�꺃�깫�깞�깙�깘: �깘�깲�깘�깶�깞�깲�깦 �깿�깞�꺁�깢�깪�깦�깪�깘',
		oneChange		: '�깫�깘�깲�깤�깪�꺃�깞�깲�깦�깳 �깿�깞�깫�깮�꺃�깫�깞�깙�깘: �깞�깲�깤�깦 �깳�깦�깴�깾�깢�깘 �깿�깞�깦�꺁�깢�깘�깪�깘',
		manyChanges		: '�깫�깘�깲�깤�깪�꺃�깞�깲�깦�깳 �깿�깞�깫�깮�꺃�깫�깞�깙�깘: %1 �깳�깦�깴�깾�깢�깘 �깿�깞�깦�꺁�깢�깘�깪�깘',
		ieSpellDownload	: '�깫�깘�깲�깤�깪�꺃�깞�깲�깦�깳 �깿�깞�깫�깮�꺃�깫�깞�깙�깘 �깘�깲�깘�깘 �깛�깘�깦�깭�깳�깴�깘�깪�깦�깲�깞�깙�깵�깪�깦. �꺀�깘�깫�깮�깢�깷�깘�꺀�깮�깤 �깦�깭�깴�깞�깲�깭�깞�깴�깦�깛�깘�깭?'
	},

	smiley :
	{
		toolbar	: '�깳�깦�꺁�깦�깪�깘�깧�깞�깙�깦',
		title	: '�깳�깦�꺁�깦�깪�깘�깧�깦�깳 �꺀�깘�깳�깫�깘',
		options : '�깳�깦�꺁�깦�깪�깘�깧�깦�깳 �깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦'
	},

	elementsPath :
	{
		eleLabel : '�깞�깪�깞�깫�깞�깴�깦�깳 �깚�깣�깘',
		eleTitle : '%1 �깞�깪�깞�깫�깞�깭�깴�깦'
	},

	numberedlist	: '�깚�깘�깛�깘�깭�깮�깫�깲�깦�깪�깦 �깳�깦�깘',
	bulletedlist	: '�깺�깦�깪�깦�깘�깭�깦 �깳�깦�깘',
	indent			: '�깫�깞�깴�깘�깛 �깿�깞�꺃�깞�깢�깘',
	outdent			: '�깭�깘�깧�깪�깞�깙�깘�깛 �깿�깞�꺃�깞�깢�깘',

	justify :
	{
		left	: '�깫�깘�깲�꺁�꺇�깭�깦�깢 �깳�꺃�깮�깲�깞�깙�깘',
		center	: '�깿�깵�깘�깿�깦 �깳�꺃�깮�깲�깞�깙�깘',
		right	: '�깫�깘�깲�꺈�깢�깭�깦�깢 �깳�꺃�깮�깲�깞�깙�깘',
		block	: '�깚�깘�깛�깘�깳�꺃�깮�깲�깞�깙�깘'
	},

	blockquote : '�꺁�깦�깴�깘�깴�깘',

	clipboard :
	{
		title		: '�꺀�깘�깳�깫�깘',
		cutError	: '�깤�깷�깢�깞�깭�깦 �깙�깲�깮�깵�깣�깞�깲�깦�깳 �깵�깳�깘�깶�깲�깤�꺇�깮�깞�깙�깦�깳 �깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦 �깘�깲 �깦�꺂�깪�깞�깢�깘 �깘�깫�깮�꺆�깲�깦�깳 �깮�깯�깞�깲�깘�꺁�깦�깦�깳 �깘�깢�깴�깮�깫�깘�깴�깵�깲�깘�깛 �깚�깘�깭�꺇�깮�깲�꺁�깦�깞�깪�깞�깙�깦�깳 �깳�깘�깿�깵�깘�깪�깞�깙�깘�깳. �깚�깘�깫�깮�깦�깾�깞�깭�깞�깤 �깧�깪�깘�깢�깦�깘�깴�깵�깲�깘 �깘�깫�깦�깳�깤�깢�깦�깳 (Ctrl/Cmd+X).',
		copyError	: '�깤�깷�깢�깞�깭�깦 �깙�깲�깮�깵�깣�깞�깲�깦�깳 �깵�깳�깘�깶�깲�깤�꺇�깮�깞�깙�깦�깳 �깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦 �깘�깲 �깦�꺂�깪�깞�깢�깘 �깘�깳�깪�깦�깳 �깮�깯�깞�깲�깘�꺁�깦�깦�깳 �깘�깢�깴�깮�깫�깘�깴�깵�깲�깘�깛 �깚�깘�깭�꺇�깮�깲�꺁�깦�깞�깪�깞�깙�깦�깳 �깳�깘�깿�깵�깘�깪�깞�깙�깘�깳. �깚�깘�깫�깮�깦�깾�깞�깭�깞�깤 �깧�깪�깘�깢�깦�깘�깴�깵�깲�깘 �깘�깫�깦�깳�깤�깢�깦�깳 (Ctrl/Cmd+C).',
		pasteMsg	: '�꺀�깘�깳�깢�깦�깤 �깘�깫 �깘�깲�깦�깳 �깿�깦�깚�깭�깦�깤 �깧�깪�깘�깢�깦�깘�깴�깵�깲�깦�깳 �깚�깘�깫�깮�깾�깞�깭�깞�깙�깦�깤 (<strong>Ctrl/Cmd+V</strong>) �깛�깘 �깛�깘�깘�꺆�깦�깲�깞�깤 OK-�깳',
		securityMsg	: '�깤�깷�깢�깞�깭�깦 �깙�깲�깮�깵�깣�깞�깲�깦�깳 �깵�깳�깘�깶�깲�깤�꺇�깮�깞�깙�깦�깳 �깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦 �깘�깲 �깦�꺂�깪�깞�깢�깘 clipboard-�깦�깳 �깫�깮�깭�깘�꺁�깞�깫�깞�깙�깦�깳 �꺃�깢�깛�깮�깫�깦�깳 �깵�깶�깪�깞�깙�깘�깳. �깧�깦�깛�깞�깢 �깵�깭�깛�깘 �꺀�깘�깳�깢�깘�깤 �깴�깞�깷�깳�깴�깦 �깘�깫 �깶�깘�깭�꺈�깘�깲�깘�깿�깦.',
		pasteArea	: '�꺀�깘�깳�깫�깦�깳 �깘�깲�깞'
	},

	pastefromword :
	{
		confirmCleanup	: '�꺀�깘�깳�깘�깳�깫�깞�깪�깦 �깴�깞�깷�깳�깴�깦 �깢�깮�깲�깛�깦�깛�깘�깭 �깚�깘�깛�깫�깮�깴�깘�깭�깦�깪�깳 �깚�깘�깢�깳 - �깚�깦�깭�깛�깘�깤 �깫�깦�깳�깦 �꺃�깦�깭�깘�깳�꺃�깘�깲 �깚�깘�꺃�깫�깞�깭�깛�깘?',
		toolbar			: '�깢�깮�깲�깛�깦�깛�깘�깭 �꺀�깘�깳�깫�깘',
		title			: '�깢�깮�깲�깛�깦�깛�깘�깭 �꺀�깘�깳�깫�깘',
		error			: '�깿�깦�깛�깘 �깿�깞�꺁�깛�깮�깫�깦�깳 �깚�깘�깫�깮 �깢�깞�깲 �깫�깮�꺇�깞�깲�꺇�깛�깘 �깴�깞�깷�깳�깴�깦�깳 �깚�깘�꺃�깫�깞�깭�깛�깘'
	},

	pasteText :
	{
		button	: '�깫�꺇�깮�깪�깮�깛 �깴�깞�깷�깳�깴�깦�깳 �꺀�깘�깳�깫�깘',
		title	: '�깫�꺇�깮�깪�깮�깛 �깴�깞�깷�깳�깴�깦�깳 �꺀�깘�깳�깫�깘'
	},

	templates :
	{
		button			: '�깤�깘�깲�깚�깞�깙�깦',
		title			: '�깤�깘�깲�깚�깞�깙�깦',
		options : '�깤�깘�깲�깚�깞�깙�깦�깳 �깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦',
		insertOption	: '�깫�깦�깫�깛�깦�깭�깘�깲�깞 �깿�깞�깚�깤�깘�깢�깳�깦�깳 �깿�깞�꺁�깢�깪�깘',
		selectPromptMsg	: '�깘�깦�깲�꺀�깦�깞�깤 �깤�깘�깲�깚�깦 �깲�깞�깛�깘�깷�깴�깮�깲�깦�깳�깤�깢�깦�깳',
		emptyListMsg	: '(�깤�깘�깲�깚�깦 �깘�깲�깘�깘 �깚�깘�깭�깳�깘�깣�깺�깢�깲�깵�깪�깦)'
	},

	showBlocks : '�깘�깲�깞�깞�깙�깦�깳 �꺀�깢�깞�깭�깞�깙�깘',

	stylesCombo :
	{
		label		: '�깳�깴�깦�깪�깞�깙�깦',
		panelTitle	: '�깶�깮�깲�깫�깘�깴�깦�깲�깞�깙�깦�깳 �깳�깴�깦�깪�깞�깙�깦',
		panelTitle1	: '�깘�깲�깦�깳 �깳�깴�깦�깪�깞�깙�깦',
		panelTitle2	: '�깤�깘�깭�깛�깘�깲�깤�깵�깪�깦 �깳�깴�깦�깪�깞�깙�깦',
		panelTitle3	: '�깮�깙�깦�깞�깷�깴�깦�깳 �깳�깴�깦�깪�깞�깙�깦'
	},

	format :
	{
		label		: '�깶�깦�깮�깲�깫�깘�깴�깦�깲�깞�깙�깘',
		panelTitle	: '�깶�깮�깲�깫�깘�깴�깦�깲�깞�깙�깘',

		tag_p		: '�꺀�깢�깞�깵�깪�깞�깙�깲�깦�깢�깦',
		tag_pre		: '�깶�깮�깲�깫�깘�깴�깦�깲�깞�깙�깵�깪�깦',
		tag_address	: '�깫�깦�깳�깘�깫�깘�깲�깤�깦',
		tag_h1		: '�깳�깘�깤�깘�깵�깲�깦 1',
		tag_h2		: '�깳�깘�깤�깘�깵�깲�깦 2',
		tag_h3		: '�깳�깘�깤�깘�깵�깲�깦 3',
		tag_h4		: '�깳�깘�깤�깘�깵�깲�깦 4',
		tag_h5		: '�깳�깘�깤�깘�깵�깲�깦 5',
		tag_h6		: '�깳�깘�깤�깘�깵�깲�깦 6',
		tag_div		: '�꺀�깢�깞�깵�깪�깞�깙�깲�깦�깢�깦 (DIV)'
	},

	div :
	{
		title				: 'Div �깧�깮�깭�깴�깞�깦�깭�깞�깲�깦�깳 �깿�깞�깷�깫�깭�깘',
		toolbar				: 'Div �깧�깮�깭�깴�깞�깦�깭�깞�깲�깦�깳 �깿�깞�깷�깫�깭�깘',
		cssClassInputLabel	: 'CSS �깧�깪�깘�깳�깞�깙�깦',
		styleSelectLabel	: '�깳�깴�깦�깪�깦',
		IdInputLabel		: 'Id',
		languageCodeInputLabel	: '�깞�깭�깦�깳 �깧�깮�깛�깦',
		inlineStyleInputLabel	: '�깤�깘�깭�깛�깘�깲�깤�깵�깪�깦 �깳�깴�깦�깪�깦',
		advisoryTitleInputLabel	: '�깳�깘�깤�깘�깵�깲�깦',
		langDirLabel		: '�깞�깭�깦�깳 �깫�깦�깭�깘�깲�깤�깵�깪�깞�깙�깘',
		langDirLTRLabel		: '�깫�깘�깲�꺁�꺇�깭�깦�깛�깘�깭 �깫�깘�깲�꺈�깢�깭�깦�꺁 (LTR)',
		langDirRTLLabel		: '�깫�깘�깲�꺈�깢�깭�깦�깛�깘�깭 �깫�깘�깲�꺁�꺇�깭�깦�깢 (RTL)',
		edit				: 'Div-�깦�깳 �깲�깞�깛�깘�깷�깴�깦�깲�깞�깙�깘',
		remove				: 'Div-�깦�깳 �꺃�깘�깿�깪�깘'
  	},

	iframe :
	{
		title		: 'IFrame-�깦�깳 �깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦',
		toolbar		: 'IFrame',
		noUrl		: '�깘�깧�깲�깦�깶�깞�깤 iframe-�깦�깳 URL',
		scrolling	: '�깚�깘�깛�깘�꺇�깢�깞�깢�깦�깳 �깣�깮�깪�깞�깙�깦�깳 �깛�깘�깿�깢�깞�깙�깘',
		border		: '�꺀�깘�깲�꺀�깮�깳 �깚�깘�깫�깮�꺀�깞�깭�깘'
	},

	font :
	{
		label		: '�깶�깮�깭�깴�깦',
		voiceLabel	: '�깶�깮�깭�깴�깦',
		panelTitle	: '�깶�깮�깭�깴�깦�깳 �깳�깘�꺇�깞�깪�깦'
	},

	fontSize :
	{
		label		: '�깣�깮�깫�깘',
		voiceLabel	: '�깴�깞�깷�깳�깴�깦�깳 �깣�깮�깫�깘',
		panelTitle	: '�깴�깞�깷�깳�깴�깦�깳 �깣�깮�깫�깘'
	},

	colorButton :
	{
		textColorTitle	: '�깴�깞�깷�깳�깴�깦�깳 �깶�깞�깲�깦',
		bgColorTitle	: '�깶�깮�깭�깦�깳 �깶�깞�깲�깦',
		panelTitle		: '�깶�깞�깲�깞�깙�깦',
		auto			: '�깘�깢�깴�깮�깫�깘�깴�깵�깲�깦',
		more			: '�깫�깞�깴�깦 �깶�깞�깲�깦...'
	},

	colors :
	{
		'000' : '�깿�깘�깢�깦',
		'800000' : '�깫�깵�깷�깦 �깿�깦�깭�깛�깦�깳�깶�깞�깲�깦',
		'8B4513' : '�깾�깘�깢�깦�깳�깶�깞�깲�깦',
		'2F4F4F' : '�깫�깮�깪�깵�깲�꺈�깮 �깭�깘�꺁�깲�깦�깳�깶�깞�깲�깦',
		'008080' : '�꺀�깘�깫�깷�깲�깘�깪�깦 �깪�깵�깲�꺈�깦',
		'000080' : '�깫�깵�깷�깦 �깪�깵�깲�꺈�깦',
		'4B0082' : '�깦�깘�깳�깘�깫�깭�깦�깳�깶�깞�깲�깦',
		'696969' : '�깫�깵�깷�깦 �깭�깘�꺁�깲�깦�깳�깶�깞�깲�깦',
		'B22222' : '�깘�깚�깵�깲�깦�깳�깶�깞�깲�깦',
		'A52A2A' : '�깫�깵�깷�깦 �깾�깘�깢�깦�깳�깶�깞�깲�깦',
		'DAA520' : '�깫�깮�깾�깢�깦�깤�깘�깪�깮',
		'006400' : '�깫�깵�깷�깦 �깫�꺃�깢�깘�깭�깞',
		'40E0D0' : '�꺁�깦�깳�깶�깞�깲�깦',
		'0000CD' : '�깣�깮�깫�깦�깞�깲�깘�깛 �깪�깵�깲�꺈�깦',
		'800080' : '�깦�깦�깳�깶�깞�깲�깦',
		'808080' : '�깭�깘�꺁�깲�깦�깳�깶�깞�깲�깦',
		'F00' : '�꺃�깦�깤�깞�깪�깦',
		'FF8C00' : '�깫�깵�깷�깦 �깳�깴�깘�깶�깦�깪�깮�깳�깶�깞�깲�깦',
		'FFD700' : '�깮�깷�깲�깮�깳�깶�깞�깲�깦',
		'008000' : '�깫�꺃�깢�깘�깭�깞',
		'0FF' : '�깺�깦�깘 �꺁�깦�깳�깶�깞�깲�깦',
		'00F' : '�깪�깵�깲�꺈�깦',
		'EE82EE' : '�깦�깦�깳�깶�깞�깲�깦',
		'A9A9A9' : '�깙�깘�꺁�깦 �깭�깘�꺁�깲�깦�깳�깶�깞�깲�깦',
		'FFA07A' : '�꺀�깘�깫�깷�깲�깘�깪�깦 �깢�깘�깲�깛�깦�깳�깶�깞�깲�깦',
		'FFA500' : '�깳�깴�깘�깶�깦�깪�깮�깳�깶�깞�깲�깦',
		'FFFF00' : '�깾�깢�깦�깤�깞�깪�깦',
		'00FF00' : '�깪�깵�깲�꺈�깦',
		'AFEEEE' : '�꺁�깦�깳�깶�깞�깲�깦',
		'ADD8E6' : '�깺�깦�깘 �깪�깵�깲�꺈�깦',
		'DDA0DD' : '�깺�깦�깘 �깦�깦�깳�깶�깞�깲�깦',
		'D3D3D3' : '�깺�깦�깘 �깭�깘�꺁�깲�깦�깳�깶�깞�깲�깦',
		'FFF0F5' : '�깺�깦�깘 �깢�깘�깲�깛�깦�깳�깶�깞�깲�깦',
		'FAEBD7' : '�깺�깦�깘 �깾�깘�깢�깦�깳�깶�깞�깲�깦',
		'FFFFE0' : '�깭�깘�깤�깞�깪�깦 �깾�깢�깦�깤�깞�깪�깦',
		'F0FFF0' : '�깺�깦�깘 �깫�꺃�깢�깘�깭�깞',
		'F0FFFF' : '�깺�깦�깘 �꺁�깦�깳�깶�깞�깲�깦 2',
		'F0F8FF' : '�깺�깦�깘 �꺁�깦�깳�깶�깞�깲�깦 3',
		'E6E6FA' : '�깺�깦�깘 �깦�깦�깳�깶�깞�깲�깦 2',
		'FFF' : '�깤�깞�깤�깲�깦'
	},

	scayt :
	{
		title			: '�깫�깘�깲�깤�깪�꺃�깞�깲�깦�깳 �깿�깞�깫�깮�꺃�깫�깞�깙�깘 �깧�깲�깞�깶�깦�깳�깘�깳',
		opera_title		: '�깘�깲�깘�깘 �깫�꺇�깘�깲�깛�깘�꺆�깞�깲�깦�깪�깦 Opera-�깳 �깫�깦�깞�깲',
		enable			: 'SCAYT-�깦�깳 �꺀�깘�깲�깤�깢�깘',
		disable			: 'SCAYT-�깦�깳 �깚�깘�깫�깮�깲�깤�깢�깘',
		about			: 'SCAYT-�깦�깳 �깿�깞�깳�깘�꺇�깞�깙',
		toggle			: 'SCAYT-�깦�깳 �깚�깘�깛�깘�깲�깤�깢�깘',
		options			: '�깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦',
		langs			: '�깞�깭�깞�깙�깦',
		moreSuggestions	: '�깫�깞�깴�깦 �깿�깞�깫�깮�깤�깘�깢�깘�깣�깞�깙�깘',
		ignore			: '�깵�깚�깵�깪�깞�깙�깞�깪�깾�깮�깶�깘',
		ignoreAll		: '�깾�깢�깞�깪�깘�깳 �깵�깚�깵�깪�깞�깙�깞�깪�깾�깮�깶�깘',
		addWord			: '�깳�깦�깴�깾�깢�깦�깳 �깛�깘�깫�깘�깴�깞�깙�깘',
		emptyDic		: '�깪�깞�깷�깳�깦�깧�깮�깭�깦�깳 �깳�깦�깴�깾�깢�깘 �깘�깲 �깵�깭�깛�깘 �깦�깾�깮�깳 �꺁�깘�깲�깦�깞�깪�깦.',
		noSuggestions	: 'No suggestions', // MISSING
		optionsTab		: '�깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦',
		allCaps			: '�깛�깦�깛�깦 �깘�깳�깮�깞�깙�깦�깤 �깛�깘�꺃�깞�깲�깦�깪�깦 �깳�깦�깴�깾�깢�깞�깙�깦�깳 �깵�깚�깵�깪�깞�깙�깞�깪�깾�깮�깶�깘',
		ignoreDomainNames : '�깛�깮�깫�깞�깭�깵�깲�깦 �깳�깘�꺇�깞�깪�깞�깙�깦�깳 �깵�깚�깵�깪�깞�깙�깞�깪�깾�깮�깶�깘',
		mixedCase		: '�깿�깞�깲�깞�깵�깪�깦 �깘�깳�깮�깞�깙�깘�깭�깦 �깳�깦�깴�깾�깢�깞�깙�깦�깳 �깵�깚�깵�깪�깞�깙�깞�깪�깾�깮�깶�깘',
		mixedWithDigits	: '�꺁�깦�깶�깲�깞�깙�깦�깘�깭�깦 �깳�깦�깴�깾�깢�깞�깙�깦�깳 �깵�깚�깵�깪�깞�깙�깞�깪�깾�깮�깶�깘',

		languagesTab	: '�깞�깭�깞�깙�깦',

		dictionariesTab	: '�깪�깞�깷�깳�깦�깧�깮�깭�깞�깙�깦',
		dic_field_name	: '�깪�깞�깷�깳�깦�깧�깮�깭�깦�깳 �깳�깘�꺇�깞�깪�깦',
		dic_create		: '�깿�깞�깷�깫�깭�깘',
		dic_restore		: '�깛�깘�깙�깲�깵�깭�깞�깙�깘',
		dic_delete		: '�꺃�깘�깿�깪�깘',
		dic_rename		: '�깚�깘�깛�깘�깲�깷�깫�깞�깢�깘',
		dic_info		: '�깤�깘�깢�깛�깘�깯�깦�깲�깢�깞�깪�깘�깛 �깫�깮�깫�꺇�깫�깘�깲�깞�깙�깪�깦�깳 �깪�깞�깷�깳�깦�깧�깮�깭�깦 �깦�깭�깘�꺇�깞�깙�깘 Cookie-�깿�깦. �깤�깵�깫�꺁�깘 Cookie �깿�깞�깣�깺�깵�깛�깵�깪�깦�깘 �깣�깮�깫�깘�깿�깦. �깲�깮�꺁�깘 �깪�깞�깷�깳�깦�깧�깮�깭�깦�깳 �깣�깮�깫�깘 �깚�깘�깦�깣�깲�깛�깞�깙�깘 �깳�깘�깧�깫�깘�깮�깛 �깦�깳 �깿�깞�깦�꺂�깪�깞�깙�깘 �깿�깞�깢�깦�깭�깘�꺇�깮�깤 �꺀�깢�깞�깭�깳 �깳�깞�깲�깢�깞�깲�깣�깞. �꺀�깢�깞�깭�깳 �깳�깞�깲�깢�깞�깲�깣�깞 �깪�깞�깷�깳�깦�깧�깮�깭�깳 �깿�깞�깳�깘�깭�깘�꺇�깘�깛 �깵�깭�깛�깘 �깫�깦�깵�깤�깦�깤�깮�깤 �깫�깦�깳�깦 �깳�깘�꺇�깞�깪�깦. �깤�깵 �깵�깧�깞 �깚�깘�깷�깢�깤 �깪�깞�깷�깳�깦�깧�깮�깭�깦, �깘�깧�깲�깦�깶�깞�깤 �깫�깦�깳�깦 �깳�깘�꺇�깞�깪�깦 �깛�깘 �깛�깘�깘�꺆�깦�깲�깞�깤 "�깛�깘�깙�깲�깵�깭�깞�깙�깦�깳" �깺�깦�깪�깘�깧�깳.',

		aboutTab		: '�깦�깭�깶�깮�깲�깫�깘�꺁�깦�깘'
	},

	about :
	{
		title		: 'CKEditor-�깦�깳 �깿�깞�깳�깘�꺇�깞�깙',
		dlgTitle	: 'CKEditor-�깦�깳 �깿�깞�깳�깘�꺇�깞�깙',
		help	: '�깛�깘�꺇�깫�깘�깲�깞�깙�깦�깳�깤�깢�깦�깳 �깦�꺇�깦�깪�깞�깤 $1.',
		userGuide : 'CKEditor-�깦�깳 �깫�깮�깫�꺇�깫�깘�깲�깞�깙�깪�깦�깳 �깳�깘�꺇�깞�깪�깫�꺂�깺�깢�깘�깭�깞�깪�깮',
		moreInfo	: '�깪�깦�꺁�깞�깭�깣�깦�깦�깳 �깦�깭�깶�깮�깲�깫�깘�꺁�깦�깦�깳�깤�깢�깦�깳 �깞�꺃�깢�깦�깞�깤 �꺀�깢�깞�깭�깳 �깳�깘�깦�깴�깳:',
		copy		: 'Copyright &copy; $1. �깾�깢�깞�깪�깘 �깵�깶�깪�깞�깙�깘 �깛�깘�꺁�깵�깪�깦�깘.'
	},

	maximize : '�깚�깘�깛�깦�깛�깞�깙�깘',
	minimize : '�깛�깘�깯�깘�깴�깘�깲�깘�깢�깞�깙�깘',

	fakeobjects :
	{
		anchor		: '�깺�깵�깣�깘',
		flash		: 'Flash �깘�깭�깦�깫�깘�꺁�깦�깘',
		iframe		: 'IFrame',
		hiddenfield	: '�깫�깘�깪�깵�깪�깦 �깢�깞�깪�깦',
		unknown		: '�깵�꺁�깭�깮�깙�깦 �깮�깙�깦�깞�깷�깴�깦'
	},

	resize : '�깚�깘�꺃�깦�깞 �깣�깮�깫�깦�깳 �깿�깞�깳�깘�꺁�깢�깪�깞�깪�깘�깛',

	colordialog :
	{
		title		: '�깶�깞�깲�깦�깳 �깿�깞�꺁�깢�깪�깘',
		options	:	'�깶�깞�깲�깦�깳 �깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦',
		highlight	: '�꺀�깢�깞�깭�깞�깙�깘',
		selected	: '�깘�깲�꺀�깞�깵�깪�깦 �깶�깞�깲�깦',
		clear		: '�깚�깘�깳�깵�깶�깤�깘�깢�깞�깙�깘'
	},

	toolbarCollapse	: '�꺇�깞�깪�깳�깘�꺃�깾�깮�깤�깘 �깣�깮�깪�깦�깳 �깿�깞�꺃�깞�깢�깘',
	toolbarExpand	: '�꺇�깞�깪�깳�깘�꺃�깾�깮�깤�깘 �깣�깮�깪�깦�깳 �깚�깘�깫�깮�꺃�깞�깢�깘',

	toolbarGroups :
	{
		document : '�깛�깮�깧�깵�깫�깞�깭�깴�깦',
		clipboard : 'Clipboard/�깚�깘�깵�깷�깫�깞�깙�깘',
		editing : '�깲�깞�깛�깘�깷�깴�깦�깲�깞�깙�깘',
		forms : '�깶�깮�깲�깫�깞�깙�깦',
		basicstyles : '�꺂�깦�깲�깦�깤�깘�깛�깦 �깳�깴�깦�깪�깞�깙�깦',
		paragraph : '�깘�깙�깣�깘�꺁�깦',
		links : '�깙�깫�깵�깪�깞�깙�깦',
		insert : '�꺀�깘�깳�깫�깘',
		styles : '�깳�깴�깦�깪�깞�깙�깦',
		colors : '�깶�깞�깲�깞�깙�깦',
		tools : '�꺇�깞�깪�깳�깘�꺃�깾�깮�깞�깙�깦'
	},

	bidi :
	{
		ltr : '�깴�깞�깷�깳�깴�깦�깳 �깫�깦�깫�깘�깲�깤�깵�깪�깞�깙�깘 �깫�깘�깲�꺁�꺇�깭�깦�깛�깘�깭 �깫�깘�깲�꺈�깢�깭�깦�깢',
		rtl : '�깴�깞�깷�깳�깴�깦�깳 �깫�깦�깫�깘�깲�깤�깵�깪�깞�깙�깘 �깫�깘�깲�꺈�깢�깭�깦�깛�깘�깭 �깫�깘�깲�꺁�꺇�깭�깦�깢'
	},

	docprops :
	{
		label : '�깛�깮�깧�깵�깫�깞�깭�깴�깦�깳 �깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦',
		title : '�깛�깮�깧�깵�깫�깞�깭�깴�깦�깳 �깯�깘�깲�깘�깫�깞�깴�깲�깞�깙�깦',
		design : '�깛�깦�깣�깘�깦�깭�깦',
		meta : '�깫�깞�깴�깘Tag-�깞�깙�깦',
		chooseColor : '�깘�깲�꺀�깞�깢�깘',
		other : '�깳�꺇�깢�깘...',
		docTitle :	'�깚�깢�깞�깲�깛�깦�깳 �깳�깘�깤�깘�깵�깲�깦',
		charset : 	'�깧�깮�깛�깦�깲�깞�깙�깘',
		charsetOther : '�깳�꺇�깢�깘 �깧�깮�깛�깦�깲�깞�깙�깞�깙�깦',
		charsetASCII : '�깘�깫�깞�깲�깦�깧�깵�깪�깦 (ASCII)',
		charsetCE : '�꺁�깞�깭�깴�깲�깘�깪�깵�깲 �깞�깢�깲�깮�깯�깵�깪�깦',
		charsetCT : '�깴�깲�깘�깛�깦�꺁�깦�깵�깪�깦 �꺀�깦�깭�깵�깲�깦 (Big5)',
		charsetCR : '�깧�깦�깲�깦�깪�깵�깲�깦',
		charsetGR : '�깙�깞�깲�꺂�깭�깵�깪�깦',
		charsetJP : '�깦�깘�깯�깮�깭�깵�깲�깦',
		charsetKR : '�깧�깮�깲�깞�깵�깪�깦',
		charsetTR : '�깤�깵�깲�깷�깵�깪�깦',
		charsetUN : '�깵�깭�깦�깧�깮�깛�깦 (UTF-8)',
		charsetWE : '�깛�깘�깳�깘�깢�깪�깞�깤 �깞�깢�깲�깮�깯�깵�깪�깦',
		docType : '�깛�깮�깧�깵�깫�깞�깭�깴�깦�깳 �깴�깦�깯�깦',
		docTypeOther : '�깳�꺇�깢�깘 �깴�깦�깯�깦�깳 �깛�깮�깧�깵�깫�깞�깭�깴�깦',
		xhtmlDec : 'XHTML �깛�깞�깧�깪�깘�깲�깘�꺁�깦�깞�깙�깦�깳 �꺀�깘�깲�깤�깢�깘',
		bgColor : '�깶�깮�깭�깦�깳 �깶�깞�깲�깦',
		bgImage : '�깶�깮�깭�깵�깲�깦 �깳�깵�깲�깘�깤�깦�깳 URL',
		bgFixed : '�깵�깫�깮�꺂�깲�깘�깮 (�깶�깦�깷�깳�깦�깲�깞�깙�깵�깪�깦) �깶�깮�깭�깦',
		txtColor : '�깴�깞�깷�깳�깴�깦�깳 �깶�깞�깲�깦',
		margin : '�깚�깢�깞�깲�깛�깦�깳 �깧�깦�깛�깞�깞�깙�깦',
		marginTop : '�깣�깞�깛�깘',
		marginLeft : '�깫�깘�깲�꺁�꺇�깞�깭�깘',
		marginRight : '�깫�깘�깲�꺈�깢�깞�깭�깘',
		marginBottom : '�깷�깢�깞�깛�깘',
		metaKeywords : '�깛�깮�깧�깵�깫�깞�깭�깴�깦�깳 �깳�깘�깧�깢�깘�깭�꺂�깮 �깳�깦�깴�깾�깢�깞�깙�깦 (�깫�꺂�깦�깫�깦�깤 �깚�깘�깫�깮�깾�깮�깶�깦�깪�깦)',
		metaDescription : '�깛�깮�깧�깵�깫�깞�깭�깴�깦�깳 �깘�깺�꺃�깞�깲�깘',
		metaAuthor : '�깘�깢�깴�깮�깲�깦',
		metaCopyright : 'Copyright',
		previewHtml : '<p>�깞�깳 �깘�깲�깦�깳 <strong>�깳�깘�꺁�깛�깞�깪�깦 �깴�깞�깷�깳�깴�깦</strong>. �깤�깷�깢�깞�깭 <a href="javascript:void(0)">CKEditor</a>-�깦�깤 �깳�깘�깲�깚�깞�깙�깪�깮�깙�깤.</p>'
	}
};
