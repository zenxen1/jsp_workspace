/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Catalan language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['ca'] =
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
	editorTitle : 'Rich text editor, %1', // MISSING
	editorHelp : 'Press ALT 0 for help', // MISSING

	// ARIA descriptions.
	toolbars	: 'Editor toolbars', // MISSING
	editor		: 'Editor de text enriquit',

	// Toolbar buttons without dialogs.
	source			: 'Codi font',
	newPage			: 'Nova p횪gina',
	save			: 'Desa',
	preview			: 'Visualitzaci처 pr챔via',
	cut				: 'Retalla',
	copy			: 'Copia',
	paste			: 'Enganxa',
	print			: 'Imprimeix',
	underline		: 'Subratllat',
	bold			: 'Negreta',
	italic			: 'Cursiva',
	selectAll		: 'Selecciona-ho tot',
	removeFormat	: 'Elimina Format',
	strike			: 'Barrat',
	subscript		: 'Sub챠ndex',
	superscript		: 'Super챠ndex',
	horizontalrule	: 'Insereix l챠nia horitzontal',
	pagebreak		: 'Insereix salt de p횪gina',
	pagebreakAlt		: 'Salt de p횪gina',
	unlink			: 'Elimina l\'enlla챌',
	undo			: 'Desf챕s',
	redo			: 'Ref챕s',

	// Common messages and labels.
	common :
	{
		browseServer	: 'Veure servidor',
		url				: 'URL',
		protocol		: 'Protocol',
		upload			: 'Puja',
		uploadSubmit	: 'Envia-la al servidor',
		image			: 'Imatge',
		flash			: 'Flash',
		form			: 'Formulari',
		checkbox		: 'Casella de verificaci처',
		radio			: 'Bot처 d\'opci처',
		textField		: 'Camp de text',
		textarea		: '�rea de text',
		hiddenField		: 'Camp ocult',
		button			: 'Bot처',
		select			: 'Camp de selecci처',
		imageButton		: 'Bot처 d\'imatge',
		notSet			: '<no definit>',
		id				: 'Id',
		name			: 'Nom',
		langDir			: 'Direcci처 de l\'idioma',
		langDirLtr		: 'D\'esquerra a dreta (LTR)',
		langDirRtl		: 'De dreta a esquerra (RTL)',
		langCode		: 'Codi d\'idioma',
		longDescr		: 'Descripci처 llarga de la URL',
		cssClass		: 'Classes del full d\'estil',
		advisoryTitle	: 'T챠tol consultiu',
		cssStyle		: 'Estil',
		ok				: 'D\'acord',
		cancel			: 'Cancel쨌la',
		close			: 'Tanca',
		preview			: 'Previsualitza',
		generalTab		: 'General',
		advancedTab		: 'Avan챌at',
		validateNumberFailed : 'Aquest valor no 챕s un n첬mero.',
		confirmNewPage	: 'Els canvis en aquest contingut que no es desin es perdran. Esteu segur que voleu carregar una p횪gina nova?',
		confirmCancel	: 'Algunes opcions s\'han canviat. Esteu segur que voleu tancar la finestra de di횪leg?',
		options			: 'Opcions',
		target			: 'Dest챠',
		targetNew		: 'Nova finestra (_blank)',
		targetTop		: 'Finestra major (_top)',
		targetSelf		: 'Mateixa finestra (_self)',
		targetParent	: 'Finestra pare (_parent)',
		langDirLTR		: 'D\'esquerra a dreta (LTR)',
		langDirRTL		: 'De dreta a esquerra (RTL)',
		styles			: 'Estil',
		cssClasses		: 'Classes del full d\'estil',
		width			: 'Amplada',
		height			: 'Al챌ada',
		align			: 'Alineaci처',
		alignLeft		: 'Ajusta a l\'esquerra',
		alignRight		: 'Ajusta a la dreta',
		alignCenter		: 'Centre',
		alignTop		: 'Superior',
		alignMiddle		: 'Centre',
		alignBottom		: 'Inferior',
		invalidValue	: 'Invalid value.', // MISSING
		invalidHeight	: 'L\'al챌ada ha de ser un nombre.',
		invalidWidth	: 'L\'amplada ha de ser un nombre.',
		invalidCssLength	: 'Value specified for the "%1" field must be a positive number with or without a valid CSS measurement unit (px, %, in, cm, mm, em, ex, pt, or pc).', // MISSING
		invalidHtmlLength	: 'Value specified for the "%1" field must be a positive number with or without a valid HTML measurement unit (px or %).', // MISSING
		invalidInlineStyle	: 'Value specified for the inline style must consist of one or more tuples with the format of "name : value", separated by semi-colons.', // MISSING
		cssLengthTooltip	: 'Enter a number for a value in pixels or a number with a valid CSS unit (px, %, in, cm, mm, em, ex, pt, or pc).', // MISSING

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, no disponible</span>'
	},

	contextmenu :
	{
		options : 'Opcions del men첬 contextual'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: 'Insereix car횪cter especial',
		title		: 'Selecciona el car횪cter especial',
		options : 'Opcions de car횪cters especials'
	},

	// Link dialog.
	link :
	{
		toolbar		: 'Insereix/Edita enlla챌',
		other 		: '<altre>',
		menu		: 'Edita l\'enlla챌',
		title		: 'Enlla챌',
		info		: 'Informaci처 de l\'enlla챌',
		target		: 'Dest챠',
		upload		: 'Puja',
		advanced	: 'Avan챌at',
		type		: 'Tipus d\'enlla챌',
		toUrl		: 'URL',
		toAnchor	: '�ncora en aquesta p횪gina',
		toEmail		: 'Correu electr챵nic',
		targetFrame		: '<marc>',
		targetPopup		: '<finestra emergent>',
		targetFrameName	: 'Nom del marc de dest챠',
		targetPopupName	: 'Nom finestra popup',
		popupFeatures	: 'Caracter챠stiques finestra popup',
		popupResizable	: 'Redimensionable',
		popupStatusBar	: 'Barra d\'estat',
		popupLocationBar: 'Barra d\'adre챌a',
		popupToolbar	: 'Barra d\'eines',
		popupMenuBar	: 'Barra de men첬',
		popupFullScreen	: 'Pantalla completa (IE)',
		popupScrollBars	: 'Barres d\'scroll',
		popupDependent	: 'Depenent (Netscape)',
		popupLeft		: 'Posici처 esquerra',
		popupTop		: 'Posici처 dalt',
		id				: 'Id',
		langDir			: 'Direcci처 de l\'idioma',
		langDirLTR		: 'D\'esquerra a dreta (LTR)',
		langDirRTL		: 'De dreta a esquerra (RTL)',
		acccessKey		: 'Clau d\'acc챕s',
		name			: 'Nom',
		langCode			: 'Direcci처 de l\'idioma',
		tabIndex			: 'Index de Tab',
		advisoryTitle		: 'T챠tol consultiu',
		advisoryContentType	: 'Tipus de contingut consultiu',
		cssClasses		: 'Classes del full d\'estil',
		charset			: 'Conjunt de car횪cters font enlla챌at',
		styles			: 'Estil',
		rel			: 'Relationship', // MISSING
		selectAnchor		: 'Selecciona una 횪ncora',
		anchorName		: 'Per nom d\'횪ncora',
		anchorId			: 'Per Id d\'element',
		emailAddress		: 'Adre챌a de correu electr챵nic',
		emailSubject		: 'Assumpte del missatge',
		emailBody		: 'Cos del missatge',
		noAnchors		: '(No hi ha 횪ncores disponibles en aquest document)',
		noUrl			: 'Si us plau, escrigui l\'enlla챌 URL',
		noEmail			: 'Si us plau, escrigui l\'adre챌a correu electr챵nic'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: 'Insereix/Edita 횪ncora',
		menu		: 'Propietats de l\'횪ncora',
		title		: 'Propietats de l\'횪ncora',
		name		: 'Nom de l\'횪ncora',
		errorName	: 'Si us plau, escriviu el nom de l\'ancora',
		remove		: 'Remove Anchor' // MISSING
	},

	// List style dialog
	list:
	{
		numberedTitle		: 'Numbered List Properties',
		bulletedTitle		: 'Bulleted List Properties',
		type				: 'Type',
		start				: 'Start',
		validateStartNumber				:'List start number must be a whole number.',
		circle				: 'Circle',
		disc				: 'Disc',
		square				: 'Square',
		none				: 'None',
		notset				: '<not set>',
		armenian			: 'Armenian numbering',
		georgian			: 'Georgian numbering (an, ban, gan, etc.)',
		lowerRoman			: 'Lower Roman (i, ii, iii, iv, v, etc.)',
		upperRoman			: 'Upper Roman (I, II, III, IV, V, etc.)',
		lowerAlpha			: 'Lower Alpha (a, b, c, d, e, etc.)',
		upperAlpha			: 'Upper Alpha (A, B, C, D, E, etc.)',
		lowerGreek			: 'Lower Greek (alpha, beta, gamma, etc.)',
		decimal				: 'Decimal (1, 2, 3, etc.)',
		decimalLeadingZero	: 'Decimal leading zero (01, 02, 03, etc.)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: 'Cerca i reempla챌a',
		find				: 'Cerca',
		replace				: 'Reempla챌a',
		findWhat			: 'Cerca:',
		replaceWith			: 'Rempla챌a amb:',
		notFoundMsg			: 'El text especificat no s\'ha trobat.',
		findOptions			: 'Find Options', // MISSING
		matchCase			: 'Distingeix maj첬scules/min첬scules',
		matchWord			: 'Nom챕s paraules completes',
		matchCyclic			: 'Match cyclic',
		replaceAll			: 'Reempla챌a-ho tot',
		replaceSuccessMsg	: '%1 ocurr챔ncia/es reempla챌ada/es.'
	},

	// Table Dialog
	table :
	{
		toolbar		: 'Taula',
		title		: 'Propietats de la taula',
		menu		: 'Propietats de la taula',
		deleteTable	: 'Suprimeix la taula',
		rows		: 'Files',
		columns		: 'Columnes',
		border		: 'Mida vora',
		widthPx		: 'p챠xels',
		widthPc		: 'percentatge',
		widthUnit	: 'unitat d\'amplada',
		cellSpace	: 'Espaiat de cel쨌les',
		cellPad		: 'Encoixinament de cel쨌les',
		caption		: 'T챠tol',
		summary		: 'Resum',
		headers		: 'Cap챌aleres',
		headersNone		: 'Cap',
		headersColumn	: 'Primera columna',
		headersRow		: 'Primera fila',
		headersBoth		: 'Ambdues',
		invalidRows		: 'El nombre de files ha de ser un nombre major que 0.',
		invalidCols		: 'El nombre de columnes ha de ser un nombre major que 0.',
		invalidBorder	: 'El gruix de la vora ha de ser un nombre.',
		invalidWidth	: 'L\'amplada de la taula  ha de ser un nombre.',
		invalidHeight	: 'L\'al챌ada de la taula  ha de ser un nombre.',
		invalidCellSpacing	: 'L\'espaiat de cel쨌la  ha de ser un nombre.',
		invalidCellPadding	: 'L\'encoixinament de cel쨌la  ha de ser un nombre.',

		cell :
		{
			menu			: 'Cel쨌la',
			insertBefore	: 'Insereix abans',
			insertAfter		: 'Insereix despr챕s',
			deleteCell		: 'Suprimeix',
			merge			: 'Fusiona',
			mergeRight		: 'Fusiona a la dreta',
			mergeDown		: 'Fusiona avall',
			splitHorizontal	: 'Divideix horitzontalment',
			splitVertical	: 'Divideix verticalment',
			title			: 'Propietats de la cel쨌la',
			cellType		: 'Tipus de cel쨌la',
			rowSpan			: 'Expansi처 de files',
			colSpan			: 'Expansi처 de columnes',
			wordWrap		: 'Ajustar al contingut',
			hAlign			: 'Alineaci처 Horizontal',
			vAlign			: 'Alineaci처 Vertical',
			alignBaseline	: 'A la l챠nia base',
			bgColor			: 'Color de fons',
			borderColor		: 'Color de la vora',
			data			: 'Dades',
			header			: 'Cap챌alera',
			yes				: 'S챠',
			no				: 'No',
			invalidWidth	: 'L\'amplada de cel쨌la ha de ser un nombre.',
			invalidHeight	: 'L\'al챌ada de cel쨌la ha de ser un nombre.',
			invalidRowSpan	: 'L\'expansi처 de files ha de ser un nombre enter.',
			invalidColSpan	: 'L\'expansi처 de columnes ha de ser un nombre enter.',
			chooseColor		: 'Trieu'
		},

		row :
		{
			menu			: 'Fila',
			insertBefore	: 'Insereix fila abans de',
			insertAfter		: 'Insereix fila darrera',
			deleteRow		: 'Suprimeix una fila'
		},

		column :
		{
			menu			: 'Columna',
			insertBefore	: 'Insereix columna abans de',
			insertAfter		: 'Insereix columna darrera',
			deleteColumn	: 'Suprimeix una columna'
		}
	},

	// Button Dialog.
	button :
	{
		title		: 'Propietats del bot처',
		text		: 'Text (Valor)',
		type		: 'Tipus',
		typeBtn		: 'Bot처',
		typeSbm		: 'Transmet formulari',
		typeRst		: 'Reinicia formulari'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : 'Propietats de la casella de verificaci처',
		radioTitle	: 'Propietats del bot처 d\'opci처',
		value		: 'Valor',
		selected	: 'Seleccionat'
	},

	// Form Dialog.
	form :
	{
		title		: 'Propietats del formulari',
		menu		: 'Propietats del formulari',
		action		: 'Acci처',
		method		: 'M챔tode',
		encoding	: 'Codificaci처'
	},

	// Select Field Dialog.
	select :
	{
		title		: 'Propietats del camp de selecci처',
		selectInfo	: 'Info',
		opAvail		: 'Opcions disponibles',
		value		: 'Valor',
		size		: 'Mida',
		lines		: 'L챠nies',
		chkMulti	: 'Permet m첬ltiples seleccions',
		opText		: 'Text',
		opValue		: 'Valor',
		btnAdd		: 'Afegeix',
		btnModify	: 'Modifica',
		btnUp		: 'Amunt',
		btnDown		: 'Avall',
		btnSetValue : 'Selecciona per defecte',
		btnDelete	: 'Elimina'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: 'Propietats de l\'횪rea de text',
		cols		: 'Columnes',
		rows		: 'Files'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: 'Propietats del camp de text',
		name		: 'Nom',
		value		: 'Valor',
		charWidth	: 'Amplada',
		maxChars	: 'Nombre m횪xim de car횪cters',
		type		: 'Tipus',
		typeText	: 'Text',
		typePass	: 'Contrasenya'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: 'Propietats del camp ocult',
		name	: 'Nom',
		value	: 'Valor'
	},

	// Image Dialog.
	image :
	{
		title		: 'Propietats de la imatge',
		titleButton	: 'Propietats del bot처 d\'imatge',
		menu		: 'Propietats de la imatge',
		infoTab		: 'Informaci처 de la imatge',
		btnUpload	: 'Envia-la al servidor',
		upload		: 'Puja',
		alt			: 'Text alternatiu',
		lockRatio	: 'Bloqueja les proporcions',
		resetSize	: 'Restaura la mida',
		border		: 'Vora',
		hSpace		: 'Espaiat horit.',
		vSpace		: 'Espaiat vert.',
		alertUrl	: 'Si us plau, escriviu la URL de la imatge',
		linkTab		: 'Enlla챌',
		button2Img	: 'Voleu transformar el bot처 d\'imatge seleccionat en una simple imatge?',
		img2Button	: 'Voleu transformar la imatge seleccionada en un bot처 d\'imatge?',
		urlMissing	: 'Falta la URL de la imatge.',
		validateBorder	: 'La vora ha de ser un nombre enter.',
		validateHSpace	: 'HSpace ha de ser un nombre enter.',
		validateVSpace	: 'VSpace ha de ser un nombre enter.'
	},

	// Flash Dialog
	flash :
	{
		properties		: 'Propietats del Flash',
		propertiesTab	: 'Propietats',
		title			: 'Propietats del Flash',
		chkPlay			: 'Reproduci처 autom횪tica',
		chkLoop			: 'Bucle',
		chkMenu			: 'Habilita men첬 Flash',
		chkFull			: 'Permetre la pantalla completa',
 		scale			: 'Escala',
		scaleAll		: 'Mostra-ho tot',
		scaleNoBorder	: 'Sense vores',
		scaleFit		: 'Mida exacta',
		access			: 'Acc챕s a scripts',
		accessAlways	: 'Sempre',
		accessSameDomain: 'El mateix domini',
		accessNever		: 'Mai',
		alignAbsBottom	: 'Abs Bottom',
		alignAbsMiddle	: 'Abs Middle',
		alignBaseline	: 'Baseline',
		alignTextTop	: 'Text Top',
		quality			: 'Qualitat',
		qualityBest		: 'La millor',
		qualityHigh		: 'Alta',
		qualityAutoHigh	: 'Alta autom횪tica',
		qualityMedium	: 'Mitjana',
		qualityAutoLow	: 'Baixa autom횪tica',
		qualityLow		: 'Baixa',
		windowModeWindow: 'Finestra',
		windowModeOpaque: 'Opaca',
		windowModeTransparent : 'Transparent',
		windowMode		: 'Mode de la finestra',
		flashvars		: 'Variables de Flash',
		bgcolor			: 'Color de Fons',
		hSpace			: 'Espaiat horit.',
		vSpace			: 'Espaiat vert.',
		validateSrc		: 'Si us plau, escrigui l\'enlla챌 URL',
		validateHSpace	: 'L\'espaiat horitzonatal ha de ser un nombre.',
		validateVSpace	: 'L\'espaiat vertical ha de ser un nombre.'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: 'Revisa l\'ortografia',
		title			: 'Comprova l\'ortografia',
		notAvailable	: 'El servei no es troba disponible ara.',
		errorLoading	: 'Error carregant el servidor: %s.',
		notInDic		: 'No 챕s al diccionari',
		changeTo		: 'Reempla챌a amb',
		btnIgnore		: 'Ignora',
		btnIgnoreAll	: 'Ignora-les totes',
		btnReplace		: 'Canvia',
		btnReplaceAll	: 'Canvia-les totes',
		btnUndo			: 'Desf챕s',
		noSuggestions	: 'Cap suggeriment',
		progress		: 'Verificaci처 ortogr횪fica en curs...',
		noMispell		: 'Verificaci처 ortogr횪fica acabada: no hi ha cap paraula mal escrita',
		noChanges		: 'Verificaci처 ortogr횪fica: no s\'ha canviat cap paraula',
		oneChange		: 'Verificaci처 ortogr횪fica: s\'ha canviat una paraula',
		manyChanges		: 'Verificaci처 ortogr횪fica: s\'han canviat %1 paraules',
		ieSpellDownload	: 'Verificaci처 ortogr횪fica no instal쨌lada. Voleu descarregar-ho ara?'
	},

	smiley :
	{
		toolbar	: 'Icona',
		title	: 'Insereix una icona',
		options : 'Opcions d\'emoticones'
	},

	elementsPath :
	{
		eleLabel : 'Elements path',
		eleTitle : '%1 element'
	},

	numberedlist	: 'Llista numerada',
	bulletedlist	: 'Llista de pics',
	indent			: 'Augmenta el sagnat',
	outdent			: 'Redueix el sagnat',

	justify :
	{
		left	: 'Alinea a l\'esquerra',
		center	: 'Centrat',
		right	: 'Alinea a la dreta',
		block	: 'Justificat'
	},

	blockquote : 'Bloc de cita',

	clipboard :
	{
		title		: 'Enganxa',
		cutError	: 'La seguretat del vostre navegador no permet executar autom횪ticament les operacions de retallar. Si us plau, utilitzeu el teclat (Ctrl+X).',
		copyError	: 'La seguretat del vostre navegador no permet executar autom횪ticament les operacions de copiar. Si us plau, utilitzeu el teclat (Ctrl+C).',
		pasteMsg	: 'Si us plau, enganxeu dins del seg체ent camp utilitzant el teclat (<STRONG>Ctrl+V</STRONG>) i premeu <STRONG>OK</STRONG>.',
		securityMsg	: 'A causa de la configuraci처 de seguretat del vostre navegador, l\'editor no pot accedir al porta-retalls directament. Enganxeu-ho un altre cop en aquesta finestra.',
		pasteArea	: '�rea d\'enganxat'
	},

	pastefromword :
	{
		confirmCleanup	: 'El text que voleu enganxar sembla provenir de Word. Voleu netejar aquest text abans que sigui enganxat?',
		toolbar			: 'Enganxa des del Word',
		title			: 'Enganxa des del Word',
		error			: 'No ha estat possible netejar les dades enganxades degut a un error intern'
	},

	pasteText :
	{
		button	: 'Enganxa com a text no formatat',
		title	: 'Enganxa com a text no formatat'
	},

	templates :
	{
		button			: 'Plantilles',
		title			: 'Plantilles de contingut',
		options : 'Opcions de plantilla',
		insertOption	: 'Reempla챌a el contingut actual',
		selectPromptMsg	: 'Seleccioneu una plantilla per usar a l\'editor<br>(per defecte s\'elimina el contingut actual):',
		emptyListMsg	: '(No hi ha plantilles definides)'
	},

	showBlocks : 'Mostra els blocs',

	stylesCombo :
	{
		label		: 'Estil',
		panelTitle	: 'Estils de format',
		panelTitle1	: 'Estils de bloc',
		panelTitle2	: 'Estils incrustats',
		panelTitle3	: 'Estils d\'objecte'
	},

	format :
	{
		label		: 'Format',
		panelTitle	: 'Format',

		tag_p		: 'Normal',
		tag_pre		: 'Formatejat',
		tag_address	: 'Adre챌a',
		tag_h1		: 'Encap챌alament 1',
		tag_h2		: 'Encap챌alament 2',
		tag_h3		: 'Encap챌alament 3',
		tag_h4		: 'Encap챌alament 4',
		tag_h5		: 'Encap챌alament 5',
		tag_h6		: 'Encap챌alament 6',
		tag_div		: 'Normal (DIV)'
	},

	div :
	{
		title				: 'Crea un contenidor Div',
		toolbar				: 'Crea un contenidor Div',
		cssClassInputLabel	: 'Classes de la fulla d\'estils',
		styleSelectLabel	: 'Estil',
		IdInputLabel		: 'Id',
		languageCodeInputLabel	: ' Codi d\'idioma',
		inlineStyleInputLabel	: 'Estil en l챠nia',
		advisoryTitleInputLabel	: 'T챠tol de guia',
		langDirLabel		: 'Direcci처 de l\'idioma',
		langDirLTRLabel		: 'D\'esquerra a dreta (LTR)',
		langDirRTLLabel		: 'De dreta a esquerra (RTL)',
		edit				: 'Edita Div',
		remove				: 'Elimina Div'
  	},

	iframe :
	{
		title		: 'Propietats IFrame',
		toolbar		: 'IFrame',
		noUrl		: 'Si us plau, introdu챦u la URL de l\'iframe URL',
		scrolling	: 'Activa les barrres de despla챌ament',
		border		: 'Mostra la vora del marc'
	},

	font :
	{
		label		: 'Tipus de lletra',
		voiceLabel	: 'Tipus de lletra',
		panelTitle	: 'Tipus de lletra'
	},

	fontSize :
	{
		label		: 'Mida',
		voiceLabel	: 'Mida de la lletra',
		panelTitle	: 'Mida'
	},

	colorButton :
	{
		textColorTitle	: 'Color de Text',
		bgColorTitle	: 'Color de Fons',
		panelTitle		: 'Colors',
		auto			: 'Autom횪tic',
		more			: 'M챕s colors...'
	},

	colors :
	{
		'000' : 'Negre',
		'800000' : 'Granat',
		'8B4513' : 'Marr처 sella',
		'2F4F4F' : 'Gris pissarra fosca',
		'008080' : 'Blau xarxet',
		'000080' : 'Blau mar챠',
		'4B0082' : 'Indi',
		'696969' : 'Gris intens',
		'B22222' : 'Ma처',
		'A52A2A' : 'Marr처 (web)',
		'DAA520' : 'Solidago',
		'006400' : 'Verd fosc',
		'40E0D0' : 'Turquesa',
		'0000CD' : 'Atzur',
		'800080' : 'Lila',
		'808080' : 'Gris',
		'F00' : 'Vermell',
		'FF8C00' : 'Taronja fosc',
		'FFD700' : 'Or',
		'008000' : 'Verd',
		'0FF' : 'Cian',
		'00F' : 'Blau',
		'EE82EE' : 'Lavanda rosat',
		'A9A9A9' : 'Gris clar',
		'FFA07A' : 'Salm처 clar',
		'FFA500' : 'Taronja',
		'FFFF00' : 'Groc',
		'00FF00' : 'Verd llima',
		'AFEEEE' : 'Blau p횪lid',
		'ADD8E6' : 'Blau clar',
		'DDA0DD' : 'Pruna',
		'D3D3D3' : 'Gris clar',
		'FFF0F5' : 'Lavanda rosat',
		'FAEBD7' : 'Blanc antic',
		'FFFFE0' : 'Groc clar',
		'F0FFF0' : 'Verd p횪lid',
		'F0FFFF' : 'Blau cel p횪lid',
		'F0F8FF' : 'Cian p횪lid',
		'E6E6FA' : 'Lavanda',
		'FFF' : 'Blanc'
	},

	scayt :
	{
		title			: 'Spell Check As You Type',
		opera_title		: 'No 챕s compatible amb l\'Opera',
		enable			: 'Habilitat l\'SCAYT',
		disable			: 'Deshabilita SCAYT',
		about			: 'Quant a l\'SCAYT',
		toggle			: 'Commuta l\'SCAYT',
		options			: 'Opcions',
		langs			: 'Idiomes',
		moreSuggestions	: 'M챕s sugger챔ncies',
		ignore			: 'Ignora',
		ignoreAll		: 'Ignora\'ls tots',
		addWord			: 'Afegeix una paraula',
		emptyDic		: 'El nom del diccionari no hauria d\'estar buit.',
		noSuggestions	: 'Cap suggeriment',
		optionsTab		: 'Opcions',
		allCaps			: 'Ignora paraules en maj첬scules',
		ignoreDomainNames : 'Ignora els noms de domini',
		mixedCase		: 'Ignora paraules amb maj첬scules i min첬scules',
		mixedWithDigits	: 'Ignora paraules amb n첬meros ',

		languagesTab	: 'Idiomes',

		dictionariesTab	: 'Diccionaris',
		dic_field_name	: 'Nom del diccionari',
		dic_create		: 'Crea',
		dic_restore		: 'Restaura',
		dic_delete		: 'Elimina',
		dic_rename		: 'Canvia el nom',
		dic_info		: 'Inicialment el diccionari d\'usuari s\'emmagatzema en una galeta. De totes maneres, les galetes tenen la mida limitada. Quan el diccionari creix massa, llavors el diccionari es pot emmagatzemar al nostre servidor. Per desar el vostre diccionari personal al nostre servidor heu d.\'especificar un nom pel diccionari. Si ja heu desat un diccionari, teclegeu si us plau el seu nom i cliqueu el bot처 de restauraci처.',

		aboutTab		: 'Quant a'
	},

	about :
	{
		title		: 'Quant al CKEditor',
		dlgTitle	: 'Quant al CKEditor',
		help	: 'Check $1 for help.', // MISSING
		userGuide : 'CKEditor User\'s Guide', // MISSING
		moreInfo	: 'Per informaci처 sobre llic챔ncies visiteu el web:',
		copy		: 'Copyright &copy; $1. Tots els drets reservats.'
	},

	maximize : 'Maximitza',
	minimize : 'Minimitza',

	fakeobjects :
	{
		anchor		: '�ncora',
		flash		: 'Animaci처 Flash',
		iframe		: 'IFrame',
		hiddenfield	: 'Camp ocult',
		unknown		: 'Objecte desconegut'
	},

	resize : 'Arrossegueu per redimensionar',

	colordialog :
	{
		title		: 'Selecciona el color',
		options	:	'Opcions del color',
		highlight	: 'Destacat',
		selected	: 'Seleccionat',
		clear		: 'Neteja'
	},

	toolbarCollapse	: 'Redueix la barra d\'eines',
	toolbarExpand	: 'Amplia la barra d\'eines',

	toolbarGroups :
	{
		document : 'Document', // MISSING
		clipboard : 'Clipboard/Undo', // MISSING
		editing : 'Editing', // MISSING
		forms : 'Forms', // MISSING
		basicstyles : 'Basic Styles', // MISSING
		paragraph : 'Paragraph', // MISSING
		links : 'Links', // MISSING
		insert : 'Insert', // MISSING
		styles : 'Styles', // MISSING
		colors : 'Colors', // MISSING
		tools : 'Tools' // MISSING
	},

	bidi :
	{
		ltr : 'Direcci처 del text d\'esquerra a dreta',
		rtl : 'Direcci처 del text de dreta a esquerra'
	},

	docprops :
	{
		label : 'Propietats del document',
		title : 'Propietats del document',
		design : 'Design', // MISSING
		meta : 'Metadades',
		chooseColor : 'Trieu',
		other : '<altre>',
		docTitle :	'T챠tol de la p횪gina',
		charset : 	'Codificaci처 de conjunt de car횪cters',
		charsetOther : 'Una altra codificaci처 de car횪cters',
		charsetASCII : 'ASCII', // MISSING
		charsetCE : 'Centreeuropeu',
		charsetCT : 'Xin챔s tradicional (Big5)',
		charsetCR : 'Cir챠l쨌lic',
		charsetGR : 'Grec',
		charsetJP : 'Japon챔s',
		charsetKR : 'Core횪',
		charsetTR : 'Turc',
		charsetUN : 'Unicode (UTF-8)', // MISSING
		charsetWE : 'Europeu occidental',
		docType : 'Cap챌alera de tipus de document',
		docTypeOther : 'Un altra cap챌alera de tipus de document',
		xhtmlDec : 'Incloure declaracions XHTML',
		bgColor : 'Color de fons',
		bgImage : 'URL de la imatge de fons',
		bgFixed : 'Fons fixe',
		txtColor : 'Color de Text',
		margin : 'Marges de p횪gina',
		marginTop : 'Cap',
		marginLeft : 'Esquerra',
		marginRight : 'Dreta',
		marginBottom : 'Peu',
		metaKeywords : 'Mots clau per a indexaci처 (separats per coma)',
		metaDescription : 'Descripci처 del document',
		metaAuthor : 'Autor',
		metaCopyright : 'Copyright', // MISSING
		previewHtml : '<p>This is some <strong>sample text</strong>. You are using <a href="javascript:void(0)">CKEditor</a>.</p>' // MISSING
	}
};
