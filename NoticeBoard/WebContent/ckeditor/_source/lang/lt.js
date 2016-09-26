/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object for the
 * Lithuanian language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['lt'] =
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
	editorTitle : 'Pilnas redaktorius, %1',
	editorHelp : 'Spauskite ALT 0 d휊l pagalbos',

	// ARIA descriptions.
	toolbars	: 'Redaktoriaus 캄rankiai',
	editor		: 'Pilnas redaktorius',

	// Toolbar buttons without dialogs.
	source			: '힋altinis',
	newPage			: 'Naujas puslapis',
	save			: 'I큄saugoti',
	preview			: 'Per탑i큰ra',
	cut				: 'I큄kirpti',
	copy			: 'Kopijuoti',
	paste			: '칼d휊ti',
	print			: 'Spausdinti',
	underline		: 'Pabrauktas',
	bold			: 'Pusjuodis',
	italic			: 'Kursyvas',
	selectAll		: 'Pa탑ym휊ti visk훳',
	removeFormat	: 'Panaikinti format훳',
	strike			: 'Perbrauktas',
	subscript		: 'Apatinis indeksas',
	superscript		: 'Vir큄utinis indeksas',
	horizontalrule	: '칼terpti horizontali훳 linij훳',
	pagebreak		: '칼terpti puslapi킬 skirtuk훳',
	pagebreakAlt		: 'Puslapio skirtukas',
	unlink			: 'Panaikinti nuorod훳',
	undo			: 'At큄aukti',
	redo			: 'Atstatyti',

	// Common messages and labels.
	common :
	{
		browseServer	: 'Nar큄yti po server캄',
		url				: 'URL',
		protocol		: 'Protokolas',
		upload			: 'Si킬sti',
		uploadSubmit	: 'Si킬sti 캄 server캄',
		image			: 'Vaizdas',
		flash			: 'Flash',
		form			: 'Forma',
		checkbox		: '탐ymimasis langelis',
		radio			: '탐ymimoji akut휊',
		textField		: 'Teksto laukas',
		textarea		: 'Teksto sritis',
		hiddenField		: 'Nerodomas laukas',
		button			: 'Mygtukas',
		select			: 'Atrankos laukas',
		imageButton		: 'Vaizdinis mygtukas',
		notSet			: '<n휊ra nustatyta>',
		id				: 'Id',
		name			: 'Vardas',
		langDir			: 'Teksto kryptis',
		langDirLtr		: 'I큄 kair휊s 캄 de큄in휌 (LTR)',
		langDirRtl		: 'I큄 de큄in휊s 캄 kair휌 (RTL)',
		langCode		: 'Kalbos kodas',
		longDescr		: 'Ilgas apra큄ymas URL',
		cssClass		: 'Stili킬 lentel휊s klas휊s',
		advisoryTitle	: 'Konsultacin휊 antra큄t휊',
		cssStyle		: 'Stilius',
		ok				: 'OK',
		cancel			: 'Nutraukti',
		close			: 'U탑daryti',
		preview			: 'Per탑i큰r휊ti',
		generalTab		: 'Bendros savyb휊s',
		advancedTab		: 'Papildomas',
		validateNumberFailed : '힋i reik큄m휊 n휊ra skai훾ius.',
		confirmNewPage	: 'Visas nei큄saugotas turinys bus prarastas. Ar tikrai norite 캄krauti nauj훳 puslap캄?',
		confirmCancel	: 'Kai kurie parametrai pasikeit휊. Ar tikrai norite u탑verti lang훳?',
		options			: 'Parametrai',
		target			: 'Tikslin휊 nuoroda',
		targetNew		: 'Naujas langas (_blank)',
		targetTop		: 'Vir큄utinis langas (_top)',
		targetSelf		: 'Esamas langas (_self)',
		targetParent	: 'Paskutinis langas (_parent)',
		langDirLTR		: 'I큄 kair휊s 캄 de큄in휌 (LTR)',
		langDirRTL		: 'I큄 de큄in휊s 캄 kair휌 (RTL)',
		styles			: 'Stilius',
		cssClasses		: 'Stili킬 klas휊s',
		width			: 'Plotis',
		height			: 'Auk큄tis',
		align			: 'Lygiuoti',
		alignLeft		: 'Kair휌',
		alignRight		: 'De큄in휌',
		alignCenter		: 'Centr훳',
		alignTop		: 'Vir큄큰n휌',
		alignMiddle		: 'Vidur캄',
		alignBottom		: 'Apa훾i훳',
		invalidValue	: 'Invalid value.', // MISSING
		invalidHeight	: 'Auk큄tis turi b큰ti nurodytas skai훾iais.',
		invalidWidth	: 'Plotis turi b큰ti nurodytas skai훾iais.',
		invalidCssLength	: 'Reik큄m휊 nurodyta "%1" laukui, turi b큰ti teigiamas skai훾ius su arba be tinkamo CSS matavimo vieneto (px, %, in, cm, mm, em, ex, pt arba pc).',
		invalidHtmlLength	: 'Reik큄m휊 nurodyta "%1" laukui, turi b큰ti teigiamas skai훾ius su arba be tinkamo HTML matavimo vieneto (px arba %).',
		invalidInlineStyle	: 'Reik큄m휊 nurodyta vidiniame stiliuje turi b큰ti sudaryta i큄 vieno 큄i킬 reik큄mi킬 "vardas : reik큄m휊", atskirta kabliata큄kiais.',
		cssLengthTooltip	: '칼veskite reik큄m휌 pikseliais arba skai훾iais su tinkamu CSS vienetu (px, %, in, cm, mm, em, ex, pt arba pc).',

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, netinkamas</span>'
	},

	contextmenu :
	{
		options : 'Kontekstinio meniu parametrai'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: '칼terpti special킬 simbol캄',
		title		: 'Pasirinkite special킬 simbol캄',
		options : 'Specialaus simbolio nustatymai'
	},

	// Link dialog.
	link :
	{
		toolbar		: '칼terpti/taisyti nuorod훳',
		other 		: '<kitas>',
		menu		: 'Taisyti nuorod훳',
		title		: 'Nuoroda',
		info		: 'Nuorodos informacija',
		target		: 'Paskirties vieta',
		upload		: 'Si킬sti',
		advanced	: 'Papildomas',
		type		: 'Nuorodos tipas',
		toUrl		: 'Nuoroda',
		toAnchor	: '탐ym휊 큄iame puslapyje',
		toEmail		: 'El.pa큄tas',
		targetFrame		: '<kadras>',
		targetPopup		: '<i큄skleid탑iamas langas>',
		targetFrameName	: 'Paskirties kadro vardas',
		targetPopupName	: 'Paskirties lango vardas',
		popupFeatures	: 'I큄skleid탑iamo lango savyb휊s',
		popupResizable	: 'Kintamas dydis',
		popupStatusBar	: 'B큰senos juosta',
		popupLocationBar: 'Adreso juosta',
		popupToolbar	: 'Mygtuk킬 juosta',
		popupMenuBar	: 'Meniu juosta',
		popupFullScreen	: 'Visas ekranas (IE)',
		popupScrollBars	: 'Slinkties juostos',
		popupDependent	: 'Priklausomas (Netscape)',
		popupLeft		: 'Kair휊 pozicija',
		popupTop		: 'Vir큄utin휊 pozicija',
		id				: 'Id',
		langDir			: 'Teksto kryptis',
		langDirLTR		: 'I큄 kair휊s 캄 de큄in휌 (LTR)',
		langDirRTL		: 'I큄 de큄in휊s 캄 kair휌 (RTL)',
		acccessKey		: 'Prieigos raktas',
		name			: 'Vardas',
		langCode			: 'Teksto kryptis',
		tabIndex			: 'Tabuliavimo indeksas',
		advisoryTitle		: 'Konsultacin휊 antra큄t휊',
		advisoryContentType	: 'Konsultacinio turinio tipas',
		cssClasses		: 'Stili킬 lentel휊s klas휊s',
		charset			: 'Susiet킬 i큄tekli킬 simboli킬 lentel휊',
		styles			: 'Stilius',
		rel			: 'S훳sajos',
		selectAnchor		: 'Pasirinkite 탑ym휌',
		anchorName		: 'Pagal 탑ym휊s vard훳',
		anchorId			: 'Pagal 탑ym휊s Id',
		emailAddress		: 'El.pa큄to adresas',
		emailSubject		: '탐inut휊s tema',
		emailBody		: '탐inut휊s turinys',
		noAnchors		: '(힋iame dokumente 탑ymi킬 n휊ra)',
		noUrl			: 'Pra큄ome 캄vesti nuorodos URL',
		noEmail			: 'Pra큄ome 캄vesti el.pa큄to adres훳'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: '칼terpti/modifikuoti 탑ym휌',
		menu		: '탐ym휊s savyb휊s',
		title		: '탐ym휊s savyb휊s',
		name		: '탐ym휊s vardas',
		errorName	: 'Pra큄ome 캄vesti 탑ym휊s vard훳',
		remove		: 'Pa큄alinti 탑ym휌'
	},

	// List style dialog
	list:
	{
		numberedTitle		: 'Skaitmeninio s훳ra큄o nustatymai',
		bulletedTitle		: '탐enklelinio s훳ra큄o nustatymai',
		type				: 'R큰큄is',
		start				: 'Prad탑ia',
		validateStartNumber				:'S훳ra큄o prad탑ios skaitmuo turi b큰ti sveikas skai훾ius.',
		circle				: 'Apskritimas',
		disc				: 'Diskas',
		square				: 'Kvadratas',
		none				: 'Niekas',
		notset				: '<nenurodytas>',
		armenian			: 'Arm휊ni큄ki skaitmenys',
		georgian			: 'Gruzini큄ki skaitmenys (an, ban, gan, t.t)',
		lowerRoman			: 'Ma탑osios Rom휊n킬 (i, ii, iii, iv, v, t.t)',
		upperRoman			: 'Did탑iosios Rom휊n킬 (I, II, III, IV, V, t.t)',
		lowerAlpha			: 'Ma탑osios Alpha (a, b, c, d, e, t.t)',
		upperAlpha			: 'Did탑iosios Alpha (A, B, C, D, E, t.t)',
		lowerGreek			: 'Ma탑osios Graik킬 (alpha, beta, gamma, t.t)',
		decimal				: 'De큄imtainis (1, 2, 3, t.t)',
		decimalLeadingZero	: 'De큄imtainis su nuliu priekyje (01, 02, 03, t.t)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: 'Surasti ir pakeisti',
		find				: 'Rasti',
		replace				: 'Pakeisti',
		findWhat			: 'Surasti tekst훳:',
		replaceWith			: 'Pakeisti tekstu:',
		notFoundMsg			: 'Nurodytas tekstas nerastas.',
		findOptions			: 'Paie큄kos nustatymai',
		matchCase			: 'Skirti did탑i훳sias ir ma탑훳sias raides',
		matchWord			: 'Atitikti piln훳 탑od캄',
		matchCyclic			: 'Sutampantis cikli큄kumas',
		replaceAll			: 'Pakeisti visk훳',
		replaceSuccessMsg	: '%1 sutapimas(킬) buvo pakeisti.'
	},

	// Table Dialog
	table :
	{
		toolbar		: 'Lentel휊',
		title		: 'Lentel휊s savyb휊s',
		menu		: 'Lentel휊s savyb휊s',
		deleteTable	: '힋alinti lentel휌',
		rows		: 'Eilut휊s',
		columns		: 'Stulpeliai',
		border		: 'R휊melio dydis',
		widthPx		: 'ta큄kais',
		widthPc		: 'procentais',
		widthUnit	: 'plo훾io vienetas',
		cellSpace	: 'Tarpas tarp langeli킬',
		cellPad		: 'Trapas nuo langelio r휊mo iki teksto',
		caption		: 'Antra큄t휊',
		summary		: 'Santrauka',
		headers		: 'Antra큄t휊s',
		headersNone		: 'N휊ra',
		headersColumn	: 'Pirmas stulpelis',
		headersRow		: 'Pirma eilut휊',
		headersBoth		: 'Abu',
		invalidRows		: 'Skai훾ius turi b큰ti didesnis nei 0.',
		invalidCols		: 'Skai훾ius turi b큰ti didesnis nei 0.',
		invalidBorder	: 'Reik큄m휊 turi b큰ti nurodyta skai훾iumi.',
		invalidWidth	: 'Reik큄m휊 turi b큰ti nurodyta skai훾iumi.',
		invalidHeight	: 'Reik큄m휊 turi b큰ti nurodyta skai훾iumi.',
		invalidCellSpacing	: 'Reik큄m휊 turi b큰ti nurodyta skai훾iumi.',
		invalidCellPadding	: 'Reik큄m휊 turi b큰ti nurodyta skai훾iumi.',

		cell :
		{
			menu			: 'Langelis',
			insertBefore	: '칼terpti langel캄 prie큄',
			insertAfter		: '칼terpti langel캄 po',
			deleteCell		: '힋alinti langelius',
			merge			: 'Sujungti langelius',
			mergeRight		: 'Sujungti su de큄ine',
			mergeDown		: 'Sujungti su apa훾ia',
			splitHorizontal	: 'Skaidyti langel캄 horizontaliai',
			splitVertical	: 'Skaidyti langel캄 vertikaliai',
			title			: 'Cell nustatymai',
			cellType		: 'Cell r큰큄is',
			rowSpan			: 'Eilu훾i킬 Span',
			colSpan			: 'Stulpeli킬 Span',
			wordWrap		: 'Sutraukti raides',
			hAlign			: 'Horizontalus lygiavimas',
			vAlign			: 'Vertikalus lygiavimas',
			alignBaseline	: 'Apatin휊 linija',
			bgColor			: 'Fono spalva',
			borderColor		: 'R휊melio spalva',
			data			: 'Data',
			header			: 'Antra큄t휊',
			yes				: 'Taip',
			no				: 'Ne',
			invalidWidth	: 'Reik큄m휊 turi b큰ti skai훾ius.',
			invalidHeight	: 'Reik큄m휊 turi b큰ti skai훾ius.',
			invalidRowSpan	: 'Reik큄m휊 turi b큰ti skai훾ius.',
			invalidColSpan	: 'Reik큄m휊 turi b큰ti skai훾ius.',
			chooseColor		: 'Pasirinkite'
		},

		row :
		{
			menu			: 'Eilut휊',
			insertBefore	: '칼terpti eilut휌 prie큄',
			insertAfter		: '칼terpti eilut휌 po',
			deleteRow		: '힋alinti eilutes'
		},

		column :
		{
			menu			: 'Stulpelis',
			insertBefore	: '칼terpti stulpel캄 prie큄',
			insertAfter		: '칼terpti stulpel캄 po',
			deleteColumn	: '힋alinti stulpelius'
		}
	},

	// Button Dialog.
	button :
	{
		title		: 'Mygtuko savyb휊s',
		text		: 'Tekstas (Reik큄m휊)',
		type		: 'Tipas',
		typeBtn		: 'Mygtukas',
		typeSbm		: 'Si킬sti',
		typeRst		: 'I큄valyti'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : '탐ymimojo langelio savyb휊s',
		radioTitle	: '탐ymimosios akut휊s savyb휊s',
		value		: 'Reik큄m휊',
		selected	: 'Pa탑ym휊tas'
	},

	// Form Dialog.
	form :
	{
		title		: 'Formos savyb휊s',
		menu		: 'Formos savyb휊s',
		action		: 'Veiksmas',
		method		: 'Metodas',
		encoding	: 'Kodavimas'
	},

	// Select Field Dialog.
	select :
	{
		title		: 'Atrankos lauko savyb휊s',
		selectInfo	: 'Informacija',
		opAvail		: 'Galimos parinktys',
		value		: 'Reik큄m휊',
		size		: 'Dydis',
		lines		: 'eilu훾i킬',
		chkMulti	: 'Leisti daugeriop훳 atrank훳',
		opText		: 'Tekstas',
		opValue		: 'Reik큄m휊',
		btnAdd		: '칼traukti',
		btnModify	: 'Modifikuoti',
		btnUp		: 'Auk큄tyn',
		btnDown		: '탐emyn',
		btnSetValue : 'Laikyti pa탑ym휊ta reik큄me',
		btnDelete	: 'Trinti'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: 'Teksto srities savyb휊s',
		cols		: 'Ilgis',
		rows		: 'Plotis'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: 'Teksto lauko savyb휊s',
		name		: 'Vardas',
		value		: 'Reik큄m휊',
		charWidth	: 'Ilgis simboliais',
		maxChars	: 'Maksimalus simboli킬 skai훾ius',
		type		: 'Tipas',
		typeText	: 'Tekstas',
		typePass	: 'Slapta탑odis'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: 'Nerodomo lauko savyb휊s',
		name	: 'Vardas',
		value	: 'Reik큄m휊'
	},

	// Image Dialog.
	image :
	{
		title		: 'Vaizdo savyb휊s',
		titleButton	: 'Vaizdinio mygtuko savyb휊s',
		menu		: 'Vaizdo savyb휊s',
		infoTab		: 'Vaizdo informacija',
		btnUpload	: 'Si킬sti 캄 server캄',
		upload		: 'Nusi킬sti',
		alt			: 'Alternatyvus Tekstas',
		lockRatio	: 'I큄laikyti proporcij훳',
		resetSize	: 'Atstatyti dyd캄',
		border		: 'R휊melis',
		hSpace		: 'Hor.Erdv휊',
		vSpace		: 'Vert.Erdv휊',
		alertUrl	: 'Pra큄ome 캄vesti vaizdo URL',
		linkTab		: 'Nuoroda',
		button2Img	: 'Ar norite mygtuk훳 paversti paprastu paveiksliuku?',
		img2Button	: 'Ar norite paveiksliuk훳 paversti mygtuku?',
		urlMissing	: 'Paveiksliuko nuorodos n휊ra.',
		validateBorder	: 'Reik큄m휊 turi b큰ti sveikas skai훾ius.',
		validateHSpace	: 'Reik큄m휊 turi b큰ti sveikas skai훾ius.',
		validateVSpace	: 'Reik큄m휊 turi b큰ti sveikas skai훾ius.'
	},

	// Flash Dialog
	flash :
	{
		properties		: 'Flash savyb휊s',
		propertiesTab	: 'Nustatymai',
		title			: 'Flash savyb휊s',
		chkPlay			: 'Automatinis paleidimas',
		chkLoop			: 'Ciklas',
		chkMenu			: 'Leisti Flash meniu',
		chkFull			: 'Leisti per vis훳 ekran훳',
 		scale			: 'Mastelis',
		scaleAll		: 'Rodyti vis훳',
		scaleNoBorder	: 'Be r휊melio',
		scaleFit		: 'Tikslus atitikimas',
		access			: 'Skripto pri휊jimas',
		accessAlways	: 'Visada',
		accessSameDomain: 'Tas pats domenas',
		accessNever		: 'Niekada',
		alignAbsBottom	: 'Absoliu훾i훳 apa훾i훳',
		alignAbsMiddle	: 'Absoliut킬 vidur캄',
		alignBaseline	: 'Apatin휌 linij훳',
		alignTextTop	: 'Teksto vir큄큰n휌',
		quality			: 'Kokyb휊',
		qualityBest		: 'Geriausia',
		qualityHigh		: 'Gera',
		qualityAutoHigh	: 'Automati큄kai Gera',
		qualityMedium	: 'Vidutin휊',
		qualityAutoLow	: 'Automati큄kai 탐ema',
		qualityLow		: '탐ema',
		windowModeWindow: 'Langas',
		windowModeOpaque: 'Nepermatomas',
		windowModeTransparent : 'Permatomas',
		windowMode		: 'Lango re탑imas',
		flashvars		: 'Flash kintamieji',
		bgcolor			: 'Fono spalva',
		hSpace			: 'Hor.Erdv휊',
		vSpace			: 'Vert.Erdv휊',
		validateSrc		: 'Pra큄ome 캄vesti nuorodos URL',
		validateHSpace	: 'HSpace turi b큰ti skai훾ius.',
		validateVSpace	: 'VSpace turi b큰ti skai훾ius.'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: 'Ra큄ybos tikrinimas',
		title			: 'Tikrinti klaidas',
		notAvailable	: 'Atleiskite, 큄iuo metu servisas neprieinamas.',
		errorLoading	: 'Klaida 캄kraunant servis훳: %s.',
		notInDic		: '탐odyne nerastas',
		changeTo		: 'Pakeisti 캄',
		btnIgnore		: 'Ignoruoti',
		btnIgnoreAll	: 'Ignoruoti visus',
		btnReplace		: 'Pakeisti',
		btnReplaceAll	: 'Pakeisti visus',
		btnUndo			: 'At큄aukti',
		noSuggestions	: '- N휊ra pasi큰lym킬 -',
		progress		: 'Vyksta ra큄ybos tikrinimas...',
		noMispell		: 'Ra큄ybos tikrinimas baigtas: Nerasta ra큄ybos klaid킬',
		noChanges		: 'Ra큄ybos tikrinimas baigtas: N휊ra pakeist킬 탑od탑i킬',
		oneChange		: 'Ra큄ybos tikrinimas baigtas: Vienas 탑odis pakeistas',
		manyChanges		: 'Ra큄ybos tikrinimas baigtas: Pakeista %1 탑od탑i킬',
		ieSpellDownload	: 'Ra큄ybos tikrinimas neinstaliuotas. Ar J큰s norite j캄 dabar atsisi킬sti?'
	},

	smiley :
	{
		toolbar	: 'Veideliai',
		title	: '칼terpti veidel캄',
		options : '힋ypsen휊li킬 nustatymai'
	},

	elementsPath :
	{
		eleLabel : 'Elemento kelias',
		eleTitle : '%1 elementas'
	},

	numberedlist	: 'Numeruotas s훳ra큄as',
	bulletedlist	: 'Su탑enklintas s훳ra큄as',
	indent			: 'Padidinti 캄trauk훳',
	outdent			: 'Suma탑inti 캄trauk훳',

	justify :
	{
		left	: 'Lygiuoti kair휌',
		center	: 'Centruoti',
		right	: 'Lygiuoti de큄in휌',
		block	: 'Lygiuoti abi puses'
	},

	blockquote : 'Citata',

	clipboard :
	{
		title		: '칼d휊ti',
		cutError	: 'J큰s킬 nar큄ykl휊s saugumo nustatymai neleid탑ia redaktoriui automati큄kai 캄vykdyti i큄kirpimo operacij킬. Tam pra큄ome naudoti klaviat큰r훳 (Ctrl/Cmd+X).',
		copyError	: 'J큰s킬 nar큄ykl휊s saugumo nustatymai neleid탑ia redaktoriui automati큄kai 캄vykdyti kopijavimo operacij킬. Tam pra큄ome naudoti klaviat큰r훳 (Ctrl/Cmd+C).',
		pasteMsg	: '탐emiau esan훾iame 캄vedimo lauke 캄d휊kite tekst훳, naudodami klaviat큰r훳 (<STRONG>Ctrl/Cmd+V</STRONG>) ir paspauskite mygtuk훳 <STRONG>OK</STRONG>.',
		securityMsg	: 'D휊l j큰s킬 nar큄ykl휊s saugumo nustatym킬, redaktorius negali tiesiogiai pasiekti laikinosios atminties. Jums reikia nukopijuoti dar kart훳 캄 큄캄 lang훳.',
		pasteArea	: '칼kelti dal캄'
	},

	pastefromword :
	{
		confirmCleanup	: 'Tekstas, kur캄 캄keliate yra kopijuojamas i큄 Word. Ar norite j캄 i큄valyti prie큄 캄keliant?',
		toolbar			: '칼d휊ti i큄 Word',
		title			: '칼d휊ti i큄 Word',
		error			: 'D휊l vidini킬 sutrikim킬, nepavyko i큄valyti 캄keliamo teksto'
	},

	pasteText :
	{
		button	: '칼d휊ti kaip gryn훳 tekst훳',
		title	: '칼d휊ti kaip gryn훳 tekst훳'
	},

	templates :
	{
		button			: '힋ablonai',
		title			: 'Turinio 큄ablonai',
		options : 'Template Options',
		insertOption	: 'Pakeisti dabartin캄 turin캄 pasirinktu 큄ablonu',
		selectPromptMsg	: 'Pasirinkite norim훳 큄ablon훳<br>(<b>D휊mesio!</b> esamas turinys bus prarastas):',
		emptyListMsg	: '(힋ablon킬 s훳ra큄as tu큄훾ias)'
	},

	showBlocks : 'Rodyti blokus',

	stylesCombo :
	{
		label		: 'Stilius',
		panelTitle	: 'Stili킬 formatavimas',
		panelTitle1	: 'Blok킬 stiliai',
		panelTitle2	: 'Vidiniai stiliai',
		panelTitle3	: 'Objekt킬 stiliai'
	},

	format :
	{
		label		: '힋rifto formatas',
		panelTitle	: '힋rifto formatas',

		tag_p		: 'Normalus',
		tag_pre		: 'Formuotas',
		tag_address	: 'Kreipinio',
		tag_h1		: 'Antra큄tinis 1',
		tag_h2		: 'Antra큄tinis 2',
		tag_h3		: 'Antra큄tinis 3',
		tag_h4		: 'Antra큄tinis 4',
		tag_h5		: 'Antra큄tinis 5',
		tag_h6		: 'Antra큄tinis 6',
		tag_div		: 'Normalus (DIV)'
	},

	div :
	{
		title				: 'Sukurti Div element훳',
		toolbar				: 'Sukurti Div element훳',
		cssClassInputLabel	: 'Stili킬 klas휊s',
		styleSelectLabel	: 'Stilius',
		IdInputLabel		: 'Id',
		languageCodeInputLabel	: ' Kalbos kodas',
		inlineStyleInputLabel	: 'Vidiniai stiliai',
		advisoryTitleInputLabel	: 'Patariamas pavadinimas',
		langDirLabel		: 'Kalbos nurodymai',
		langDirLTRLabel		: 'I큄 kair휊s 캄 de큄in휌 (LTR)',
		langDirRTLLabel		: 'I큄 de큄in휊s 캄 kair휌 (RTL)',
		edit				: 'Redaguoti Div',
		remove				: 'Pa큄alinti Div'
  	},

	iframe :
	{
		title		: 'IFrame nustatymai',
		toolbar		: 'IFrame',
		noUrl		: 'Nurodykite iframe nuorod훳',
		scrolling	: '칼jungti slankiklius',
		border		: 'Rodyti r휊mel캄'
	},

	font :
	{
		label		: '힋riftas',
		voiceLabel	: '힋riftas',
		panelTitle	: '힋riftas'
	},

	fontSize :
	{
		label		: '힋rifto dydis',
		voiceLabel	: '힋rifto dydis',
		panelTitle	: '힋rifto dydis'
	},

	colorButton :
	{
		textColorTitle	: 'Teksto spalva',
		bgColorTitle	: 'Fono spalva',
		panelTitle		: 'Spalva',
		auto			: 'Automatinis',
		more			: 'Daugiau spalv킬...'
	},

	colors :
	{
		'000' : 'Juoda',
		'800000' : 'Ka큄tonin휊',
		'8B4513' : 'Tamsiai ruda',
		'2F4F4F' : 'Pilka tamsaus 큄iferio',
		'008080' : 'Teal',
		'000080' : 'Karinis',
		'4B0082' : 'Indigo',
		'696969' : 'Tamsiai pilka',
		'B22222' : 'Ugnies',
		'A52A2A' : 'Ruda',
		'DAA520' : 'Aukso',
		'006400' : 'Tamsiai 탑alia',
		'40E0D0' : 'Turquoise',
		'0000CD' : 'Vidutin휊 m휊lyna',
		'800080' : 'Violetin휊',
		'808080' : 'Pilka',
		'F00' : 'Raudona',
		'FF8C00' : 'Tamsiai oran탑in휊',
		'FFD700' : 'Auksin휊',
		'008000' : '탐alia',
		'0FF' : '탐ydra',
		'00F' : 'M휊lyna',
		'EE82EE' : 'Violetin휊',
		'A9A9A9' : 'Dim Gray',
		'FFA07A' : 'Light Salmon',
		'FFA500' : 'Oran탑in휊',
		'FFFF00' : 'Geltona',
		'00FF00' : 'Citrin킬',
		'AFEEEE' : 'Pale Turquoise',
		'ADD8E6' : '힋viesiai m휊lyna',
		'DDA0DD' : 'Plum',
		'D3D3D3' : '힋viesiai pilka',
		'FFF0F5' : 'Lavender Blush',
		'FAEBD7' : 'Antique White',
		'FFFFE0' : '힋viesiai geltona',
		'F0FFF0' : 'Honeydew',
		'F0FFFF' : 'Azure',
		'F0F8FF' : 'Alice Blue',
		'E6E6FA' : 'Lavender',
		'FFF' : 'Balta'
	},

	scayt :
	{
		title			: 'Tikrinti klaidas kai ra큄oma',
		opera_title		: 'Nepalaikoma nar큄ykl휊je Opera',
		enable			: '칼jungti SCAYT',
		disable			: 'I큄jungti SCAYT',
		about			: 'Apie SCAYT',
		toggle			: 'Perjungti SCAYT',
		options			: 'Parametrai',
		langs			: 'Kalbos',
		moreSuggestions	: 'Daugiau patarim킬',
		ignore			: 'Ignoruoti',
		ignoreAll		: 'Ignoruoti visk훳',
		addWord			: 'Prid휊ti 탑od캄',
		emptyDic		: '탐odyno vardas netur휊t킬 b큰ti tu큄훾ias.',
		noSuggestions	: 'No suggestions', // MISSING
		optionsTab		: 'Parametrai',
		allCaps			: 'Ignoruoti visas did탑i훳sias raides',
		ignoreDomainNames : 'Ignoruoti domen킬 vardus',
		mixedCase		: 'Ignoruoti mai큄yto dyd탑io raides',
		mixedWithDigits	: 'Ignoruoti raides su skai훾iais',

		languagesTab	: 'Kalbos',

		dictionariesTab	: '탐odynai',
		dic_field_name	: '탐odyno pavadinimas',
		dic_create		: 'Sukurti',
		dic_restore		: 'Atstatyti',
		dic_delete		: 'I큄trinti',
		dic_rename		: 'Pervadinti',
		dic_info		: 'Paprastai 탑odynas yra saugojamas sausain휊liuose (cookies), kuri킬 dydis, bet kokiu atveju, yra apribotas. Esant sausain휊li킬 apimties pervi큄iui, viskas bus saugoma serveryje. Jei norite i큄 kart visk훳 saugoti serveryje, turite sugalvoti 탑odynui pavadinim훳. Jei jau turite 탑odyn훳, 캄ra큄ykite pavadinim훳 ir nuspauskite Atstatyti mygtuk훳.',

		aboutTab		: 'Apie'
	},

	about :
	{
		title		: 'Apie CKEditor',
		dlgTitle	: 'Apie CKEditor',
		help	: 'Patikrinkite $1 d휊l pagalbos.',
		userGuide : 'CKEditor Vartotojo Gidas',
		moreInfo	: 'D휊l licencijavimo apsilankykite m큰s킬 svetain휊je:',
		copy		: 'Copyright &copy; $1. Visos teiss saugomos.'
	},

	maximize : 'I큄didinti',
	minimize : 'Suma탑inti',

	fakeobjects :
	{
		anchor		: '탐ym휊',
		flash		: 'Flash animacija',
		iframe		: 'IFrame',
		hiddenfield	: 'Pasl휊ptas laukas',
		unknown		: 'Ne탑inomas objektas'
	},

	resize : 'Pavilkite, kad pakeistum휊te dyd캄',

	colordialog :
	{
		title		: 'Pasirinkite spalv훳',
		options	:	'Spalvos nustatymai',
		highlight	: 'Pary큄kinti',
		selected	: 'Pasirinkta spalva',
		clear		: 'I큄valyti'
	},

	toolbarCollapse	: 'Apjungti 캄ranki킬 juost훳',
	toolbarExpand	: 'I큄pl휊sti 캄ranki킬 juost훳',

	toolbarGroups :
	{
		document : 'Dokumentas',
		clipboard : 'Atmintin휊/Atgal',
		editing : 'Redagavimas',
		forms : 'Formos',
		basicstyles : 'Pagrindiniai stiliai',
		paragraph : 'Paragrafas',
		links : 'Nuorodos',
		insert : '칼terpti',
		styles : 'Stiliai',
		colors : 'Spalvos',
		tools : '칼rankiai'
	},

	bidi :
	{
		ltr : 'Tekstas i큄 kair휊s 캄 de큄in휌',
		rtl : 'Tekstas i큄 de큄in휊s 캄 kair휌'
	},

	docprops :
	{
		label : 'Dokumento savyb휊s',
		title : 'Dokumento savyb휊s',
		design : 'I큄d휊stymas',
		meta : 'Meta duomenys',
		chooseColor : 'Pasirinkite',
		other : '<kitas>',
		docTitle :	'Puslapio antra큄t휊',
		charset : 	'Simboli킬 kodavimo lentel휊',
		charsetOther : 'Kita simboli킬 kodavimo lentel휊',
		charsetASCII : 'ASCII',
		charsetCE : 'Centrin휊s Europos',
		charsetCT : 'Tradicin휊s kin킬 (Big5)',
		charsetCR : 'Kirilica',
		charsetGR : 'Graik킬',
		charsetJP : 'Japon킬',
		charsetKR : 'Kor휊jie훾i킬',
		charsetTR : 'Turk킬',
		charsetUN : 'Unikodas (UTF-8)',
		charsetWE : 'Vakar킬 Europos',
		docType : 'Dokumento tipo antra큄t휊',
		docTypeOther : 'Kita dokumento tipo antra큄t휊',
		xhtmlDec : '칼traukti XHTML deklaracijas',
		bgColor : 'Fono spalva',
		bgImage : 'Fono paveiksl휊lio nuoroda (URL)',
		bgFixed : 'Neslenkantis fonas',
		txtColor : 'Teksto spalva',
		margin : 'Puslapio kra큄tin휊s',
		marginTop : 'Vir큄uje',
		marginLeft : 'Kair휊je',
		marginRight : 'De큄in휊je',
		marginBottom : 'Apa훾ioje',
		metaKeywords : 'Dokumento indeksavimo raktiniai 탑od탑iai (atskirti kableliais)',
		metaDescription : 'Dokumento apib큰dinimas',
		metaAuthor : 'Autorius',
		metaCopyright : 'Autorin휊s teis휊s',
		previewHtml : '<p>Tai yra <strong>pavyzdinis tekstas</strong>. J큰s naudojate <a href="javascript:void(0)">CKEditor</a>.</p>'
	}
};
