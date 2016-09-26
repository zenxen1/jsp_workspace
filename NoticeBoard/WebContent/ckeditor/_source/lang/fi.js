/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object for the
 * Finnish language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['fi'] =
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
	editorTitle : 'Rikastekstieditori, %1',
	editorHelp : 'Paina ALT 0 n채hd채ksesi ohjeen',

	// ARIA descriptions.
	toolbars	: 'Editorin ty철kalupalkit',
	editor		: 'Rikastekstieditori',

	// Toolbar buttons without dialogs.
	source			: 'Koodi',
	newPage			: 'Tyhjenn채',
	save			: 'Tallenna',
	preview			: 'Esikatsele',
	cut				: 'Leikkaa',
	copy			: 'Kopioi',
	paste			: 'Liit채',
	print			: 'Tulosta',
	underline		: 'Alleviivattu',
	bold			: 'Lihavoitu',
	italic			: 'Kursivoitu',
	selectAll		: 'Valitse kaikki',
	removeFormat	: 'Poista muotoilu',
	strike			: 'Yliviivattu',
	subscript		: 'Alaindeksi',
	superscript		: 'Yl채indeksi',
	horizontalrule	: 'Lis채채 murtoviiva',
	pagebreak		: 'Lis채채 sivunvaihto',
	pagebreakAlt		: 'Sivunvaihto',
	unlink			: 'Poista linkki',
	undo			: 'Kumoa',
	redo			: 'Toista',

	// Common messages and labels.
	common :
	{
		browseServer	: 'Selaa palvelinta',
		url				: 'Osoite',
		protocol		: 'Protokolla',
		upload			: 'Lis채채 tiedosto',
		uploadSubmit	: 'L채het채 palvelimelle',
		image			: 'Kuva',
		flash			: 'Flash-animaatio',
		form			: 'Lomake',
		checkbox		: 'Valintaruutu',
		radio			: 'Radiopainike',
		textField		: 'Tekstikentt채',
		textarea		: 'Tekstilaatikko',
		hiddenField		: 'Piilokentt채',
		button			: 'Painike',
		select			: 'Valintakentt채',
		imageButton		: 'Kuvapainike',
		notSet			: '<ei asetettu>',
		id				: 'Tunniste',
		name			: 'Nimi',
		langDir			: 'Kielen suunta',
		langDirLtr		: 'Vasemmalta oikealle (LTR)',
		langDirRtl		: 'Oikealta vasemmalle (RTL)',
		langCode		: 'Kielikoodi',
		longDescr		: 'Pitk채n kuvauksen URL',
		cssClass		: 'Tyyliluokat',
		advisoryTitle	: 'Avustava otsikko',
		cssStyle		: 'Tyyli',
		ok				: 'OK',
		cancel			: 'Peruuta',
		close			: 'Sulje',
		preview			: 'Esikatselu',
		generalTab		: 'Yleinen',
		advancedTab		: 'Lis채ominaisuudet',
		validateNumberFailed : 'Arvon pit채채 olla numero.',
		confirmNewPage	: 'Kaikki tallentamattomat muutokset t채h채n sis채lt철철n menetet채채n. Oletko varma, ett채 haluat ladata uuden sivun?',
		confirmCancel	: 'Jotkut asetuksista on muuttuneet. Oletko varma, ett채 haluat sulkea valintaikkunan?',
		options			: 'Asetukset',
		target			: 'Kohde',
		targetNew		: 'Uusi ikkuna (_blank)',
		targetTop		: 'P채채llimm채inen ikkuna (_top)',
		targetSelf		: 'Sama ikkuna (_self)',
		targetParent	: 'Ylemm채n tason ikkuna (_parent)',
		langDirLTR		: 'Vasemmalta oikealle (LTR)',
		langDirRTL		: 'Oikealta vasemmalle (RTL)',
		styles			: 'Tyyli',
		cssClasses		: 'Tyylitiedoston luokat',
		width			: 'Leveys',
		height			: 'Korkeus',
		align			: 'Kohdistus',
		alignLeft		: 'Vasemmalle',
		alignRight		: 'Oikealle',
		alignCenter		: 'Keskelle',
		alignTop		: 'Yl철s',
		alignMiddle		: 'Keskelle',
		alignBottom		: 'Alas',
		invalidValue	: 'Virheellinen arvo.',
		invalidHeight	: 'Korkeuden t채ytyy olla numero.',
		invalidWidth	: 'Leveyden t채ytyy olla numero.',
		invalidCssLength	: 'Kent채n "%1" arvon t채ytyy olla positiivinen luku CSS mittayksik철n (px, %, in, cm, mm, em, ex, pt tai pc) kanssa tai ilman.',
		invalidHtmlLength	: 'Kent채n "%1" arvon t채ytyy olla positiivinen luku HTML mittayksik철n (px tai %) kanssa tai ilman.',
		invalidInlineStyle	: 'Tyylille annetun arvon t채ytyy koostua yhdest채 tai useammasta "nimi : arvo" parista, jotka ovat eroteltuna toisistaan puolipisteill채.',
		cssLengthTooltip	: 'Anna numeroarvo pikselein채 tai numeroarvo CSS mittayksik철n kanssa (px, %, in, cm, mm, em, ex, pt, tai pc).',

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, ei saatavissa</span>'
	},

	contextmenu :
	{
		options : 'Pikavalikon ominaisuudet'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: 'Lis채채 erikoismerkki',
		title		: 'Valitse erikoismerkki',
		options : 'Erikoismerkin ominaisuudet'
	},

	// Link dialog.
	link :
	{
		toolbar		: 'Lis채채 linkki/muokkaa linkki채',
		other 		: '<muu>',
		menu		: 'Muokkaa linkki채',
		title		: 'Linkki',
		info		: 'Linkin tiedot',
		target		: 'Kohde',
		upload		: 'Lis채채 tiedosto',
		advanced	: 'Lis채ominaisuudet',
		type		: 'Linkkityyppi',
		toUrl		: 'Osoite',
		toAnchor	: 'Ankkuri t채ss채 sivussa',
		toEmail		: 'S채hk철posti',
		targetFrame		: '<kehys>',
		targetPopup		: '<popup ikkuna>',
		targetFrameName	: 'Kohdekehyksen nimi',
		targetPopupName	: 'Popup ikkunan nimi',
		popupFeatures	: 'Popup ikkunan ominaisuudet',
		popupResizable	: 'Venytett채v채',
		popupStatusBar	: 'Tilarivi',
		popupLocationBar: 'Osoiterivi',
		popupToolbar	: 'Vakiopainikkeet',
		popupMenuBar	: 'Valikkorivi',
		popupFullScreen	: 'T채ysi ikkuna (IE)',
		popupScrollBars	: 'Vierityspalkit',
		popupDependent	: 'Riippuva (Netscape)',
		popupLeft		: 'Vasemmalta (px)',
		popupTop		: 'Ylh채채lt채 (px)',
		id				: 'Tunniste',
		langDir			: 'Kielen suunta',
		langDirLTR		: 'Vasemmalta oikealle (LTR)',
		langDirRTL		: 'Oikealta vasemmalle (RTL)',
		acccessKey		: 'Pikan채pp채in',
		name			: 'Nimi',
		langCode			: 'Kielen suunta',
		tabIndex			: 'Tabulaattori indeksi',
		advisoryTitle		: 'Avustava otsikko',
		advisoryContentType	: 'Avustava sis채ll철n tyyppi',
		cssClasses		: 'Tyyliluokat',
		charset			: 'Linkitetty kirjaimisto',
		styles			: 'Tyyli',
		rel			: 'Suhde',
		selectAnchor		: 'Valitse ankkuri',
		anchorName		: 'Ankkurin nimen mukaan',
		anchorId			: 'Ankkurin ID:n mukaan',
		emailAddress		: 'S채hk철postiosoite',
		emailSubject		: 'Aihe',
		emailBody		: 'Viesti',
		noAnchors		: '(Ei ankkureita t채ss채 dokumentissa)',
		noUrl			: 'Linkille on kirjoitettava URL',
		noEmail			: 'Kirjoita s채hk철postiosoite'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: 'Lis채채 ankkuri/muokkaa ankkuria',
		menu		: 'Ankkurin ominaisuudet',
		title		: 'Ankkurin ominaisuudet',
		name		: 'Nimi',
		errorName	: 'Ankkurille on kirjoitettava nimi',
		remove		: 'Poista ankkuri'
	},

	// List style dialog
	list:
	{
		numberedTitle		: 'Numeroidun listan ominaisuudet',
		bulletedTitle		: 'Numeroimattoman listan ominaisuudet',
		type				: 'Tyyppi',
		start				: 'Alku',
		validateStartNumber				:'Listan ensimm채isen numeron tulee olla kokonaisluku.',
		circle				: 'Ympyr채',
		disc				: 'Levy',
		square				: 'Neli철',
		none				: 'Ei mik채채n',
		notset				: '<ei asetettu>',
		armenian			: 'Armeenialainen numerointi',
		georgian			: 'Georgialainen numerointi (an, ban, gan, etc.)',
		lowerRoman			: 'Pienet roomalaiset (i, ii, iii, iv, v, jne.)',
		upperRoman			: 'Isot roomalaiset (I, II, III, IV, V, jne.)',
		lowerAlpha			: 'Pienet aakkoset (a, b, c, d, e, jne.)',
		upperAlpha			: 'Isot aakkoset (A, B, C, D, E, jne.)',
		lowerGreek			: 'Pienet kreikkalaiset (alpha, beta, gamma, jne.)',
		decimal				: 'Desimaalit (1, 2, 3, jne.)',
		decimalLeadingZero	: 'Desimaalit, alussa nolla (01, 02, 03, jne.)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: 'Etsi ja korvaa',
		find				: 'Etsi',
		replace				: 'Korvaa',
		findWhat			: 'Etsi mit채:',
		replaceWith			: 'Korvaa t채ll채:',
		notFoundMsg			: 'Etsitty채 teksti채 ei l철ytynyt.',
		findOptions			: 'Hakuasetukset',
		matchCase			: 'Sama kirjainkoko',
		matchWord			: 'Koko sana',
		matchCyclic			: 'Kierr채 ymp채ri',
		replaceAll			: 'Korvaa kaikki',
		replaceSuccessMsg	: '%1 esiintym채(채) korvattu.'
	},

	// Table Dialog
	table :
	{
		toolbar		: 'Taulu',
		title		: 'Taulun ominaisuudet',
		menu		: 'Taulun ominaisuudet',
		deleteTable	: 'Poista taulu',
		rows		: 'Rivit',
		columns		: 'Sarakkeet',
		border		: 'Rajan paksuus',
		widthPx		: 'pikseli채',
		widthPc		: 'prosenttia',
		widthUnit	: 'leveysyksikk철',
		cellSpace	: 'Solujen v채li',
		cellPad		: 'Solujen sisennys',
		caption		: 'Otsikko',
		summary		: 'Yhteenveto',
		headers		: 'Yl채tunnisteet',
		headersNone		: 'Ei',
		headersColumn	: 'Ensimm채inen sarake',
		headersRow		: 'Ensimm채inen rivi',
		headersBoth		: 'Molemmat',
		invalidRows		: 'Rivien m채채r채n t채ytyy olla suurempi kuin 0.',
		invalidCols		: 'Sarakkeiden m채채r채n t채ytyy olla suurempi kuin 0.',
		invalidBorder	: 'Reunan koon t채ytyy olla numero.',
		invalidWidth	: 'Taulun leveyden t채ytyy olla numero.',
		invalidHeight	: 'Taulun korkeuden t채ytyy olla numero.',
		invalidCellSpacing	: 'Solujen v채lin t채ytyy olla numero.',
		invalidCellPadding	: 'Solujen sisennyksen t채ytyy olla numero.',

		cell :
		{
			menu			: 'Solu',
			insertBefore	: 'Lis채채 solu eteen',
			insertAfter		: 'Lis채채 solu per채채n',
			deleteCell		: 'Poista solut',
			merge			: 'Yhdist채 solut',
			mergeRight		: 'Yhdist채 oikealla olevan kanssa',
			mergeDown		: 'Yhdist채 alla olevan kanssa',
			splitHorizontal	: 'Jaa solu vaakasuunnassa',
			splitVertical	: 'Jaa solu pystysuunnassa',
			title			: 'Solun ominaisuudet',
			cellType		: 'Solun tyyppi',
			rowSpan			: 'Rivin jatkuvuus',
			colSpan			: 'Solun jatkuvuus',
			wordWrap		: 'Rivitys',
			hAlign			: 'Horisontaali kohdistus',
			vAlign			: 'Vertikaali kohdistus',
			alignBaseline	: 'Alas (teksti)',
			bgColor			: 'Taustan v채ri',
			borderColor		: 'Reunan v채ri',
			data			: 'Data',
			header			: 'Yl채tunniste',
			yes				: 'Kyll채',
			no				: 'Ei',
			invalidWidth	: 'Solun leveyden t채ytyy olla numero.',
			invalidHeight	: 'Solun korkeuden t채ytyy olla numero.',
			invalidRowSpan	: 'Rivin jatkuvuuden t채ytyy olla kokonaisluku.',
			invalidColSpan	: 'Solun jatkuvuuden t채ytyy olla kokonaisluku.',
			chooseColor		: 'Valitse'
		},

		row :
		{
			menu			: 'Rivi',
			insertBefore	: 'Lis채채 rivi yl채puolelle',
			insertAfter		: 'Lis채채 rivi alapuolelle',
			deleteRow		: 'Poista rivit'
		},

		column :
		{
			menu			: 'Sarake',
			insertBefore	: 'Lis채채 sarake vasemmalle',
			insertAfter		: 'Lis채채 sarake oikealle',
			deleteColumn	: 'Poista sarakkeet'
		}
	},

	// Button Dialog.
	button :
	{
		title		: 'Painikkeen ominaisuudet',
		text		: 'Teksti (arvo)',
		type		: 'Tyyppi',
		typeBtn		: 'Painike',
		typeSbm		: 'L채het채',
		typeRst		: 'Tyhjenn채'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : 'Valintaruudun ominaisuudet',
		radioTitle	: 'Radiopainikkeen ominaisuudet',
		value		: 'Arvo',
		selected	: 'Valittu'
	},

	// Form Dialog.
	form :
	{
		title		: 'Lomakkeen ominaisuudet',
		menu		: 'Lomakkeen ominaisuudet',
		action		: 'Toiminto',
		method		: 'Tapa',
		encoding	: 'Enkoodaus'
	},

	// Select Field Dialog.
	select :
	{
		title		: 'Valintakent채n ominaisuudet',
		selectInfo	: 'Info',
		opAvail		: 'Ominaisuudet',
		value		: 'Arvo',
		size		: 'Koko',
		lines		: 'Rivit',
		chkMulti	: 'Salli usea valinta',
		opText		: 'Teksti',
		opValue		: 'Arvo',
		btnAdd		: 'Lis채채',
		btnModify	: 'Muuta',
		btnUp		: 'Yl철s',
		btnDown		: 'Alas',
		btnSetValue : 'Aseta valituksi',
		btnDelete	: 'Poista'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: 'Tekstilaatikon ominaisuudet',
		cols		: 'Sarakkeita',
		rows		: 'Rivej채'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: 'Tekstikent채n ominaisuudet',
		name		: 'Nimi',
		value		: 'Arvo',
		charWidth	: 'Leveys',
		maxChars	: 'Maksimi merkkim채채r채',
		type		: 'Tyyppi',
		typeText	: 'Teksti',
		typePass	: 'Salasana'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: 'Piilokent채n ominaisuudet',
		name	: 'Nimi',
		value	: 'Arvo'
	},

	// Image Dialog.
	image :
	{
		title		: 'Kuvan ominaisuudet',
		titleButton	: 'Kuvapainikkeen ominaisuudet',
		menu		: 'Kuvan ominaisuudet',
		infoTab		: 'Kuvan tiedot',
		btnUpload	: 'L채het채 palvelimelle',
		upload		: 'Lis채채 kuva',
		alt			: 'Vaihtoehtoinen teksti',
		lockRatio	: 'Lukitse suhteet',
		resetSize	: 'Alkuper채inen koko',
		border		: 'Kehys',
		hSpace		: 'Vaakatila',
		vSpace		: 'Pystytila',
		alertUrl	: 'Kirjoita kuvan osoite (URL)',
		linkTab		: 'Linkki',
		button2Img	: 'Haluatko muuntaa valitun kuvan채pp채imen kuvaksi?',
		img2Button	: 'Haluatko muuntaa valitun kuvan kuvan채pp채imeksi?',
		urlMissing	: 'Kuvan l채hdeosoite puuttuu.',
		validateBorder	: 'Kehyksen t채ytyy olla kokonaisluku.',
		validateHSpace	: 'HSpace-m채채rityksen t채ytyy olla kokonaisluku.',
		validateVSpace	: 'VSpace-m채채rityksen t채ytyy olla kokonaisluku.'
	},

	// Flash Dialog
	flash :
	{
		properties		: 'Flash-ominaisuudet',
		propertiesTab	: 'Ominaisuudet',
		title			: 'Flash ominaisuudet',
		chkPlay			: 'Automaattinen k채ynnistys',
		chkLoop			: 'Toisto',
		chkMenu			: 'N채yt채 Flash-valikko',
		chkFull			: 'Salli kokoruututila',
 		scale			: 'Levit채',
		scaleAll		: 'N채yt채 kaikki',
		scaleNoBorder	: 'Ei rajaa',
		scaleFit		: 'Tarkka koko',
		access			: 'Skriptien p채채sy',
		accessAlways	: 'Aina',
		accessSameDomain: 'Sama verkkotunnus',
		accessNever		: 'Ei koskaan',
		alignAbsBottom	: 'Aivan alas',
		alignAbsMiddle	: 'Aivan keskelle',
		alignBaseline	: 'Alas (teksti)',
		alignTextTop	: 'Yl철s (teksti)',
		quality			: 'Laatu',
		qualityBest		: 'Paras',
		qualityHigh		: 'Korkea',
		qualityAutoHigh	: 'Automaattinen korkea',
		qualityMedium	: 'Keskitaso',
		qualityAutoLow	: 'Automaattinen matala',
		qualityLow		: 'Matala',
		windowModeWindow: 'Ikkuna',
		windowModeOpaque: 'L채pin채kyvyys',
		windowModeTransparent : 'L채pin채kyv채',
		windowMode		: 'Ikkuna tila',
		flashvars		: 'Muuttujat Flash:lle',
		bgcolor			: 'Taustav채ri',
		hSpace			: 'Vaakatila',
		vSpace			: 'Pystytila',
		validateSrc		: 'Linkille on kirjoitettava URL',
		validateHSpace	: 'Vaakatilan t채ytyy olla numero.',
		validateVSpace	: 'Pystytilan t채ytyy olla numero.'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: 'Tarkista oikeinkirjoitus',
		title			: 'Oikoluku',
		notAvailable	: 'Valitettavasti oikoluku ei ole k채yt철ss채 t채ll채 hetkell채.',
		errorLoading	: 'Virhe ladattaessa oikolukupalvelua is채nn채lt채: %s.',
		notInDic		: 'Ei sanakirjassa',
		changeTo		: 'Vaihda',
		btnIgnore		: 'J채t채 huomioimatta',
		btnIgnoreAll	: 'J채t채 kaikki huomioimatta',
		btnReplace		: 'Korvaa',
		btnReplaceAll	: 'Korvaa kaikki',
		btnUndo			: 'Kumoa',
		noSuggestions	: 'Ei ehdotuksia',
		progress		: 'Tarkistus k채ynniss채...',
		noMispell		: 'Tarkistus valmis: Ei virheit채',
		noChanges		: 'Tarkistus valmis: Yht채채n sanaa ei muutettu',
		oneChange		: 'Tarkistus valmis: Yksi sana muutettiin',
		manyChanges		: 'Tarkistus valmis: %1 sanaa muutettiin',
		ieSpellDownload	: 'Oikeinkirjoituksen tarkistusta ei ole asennettu. Haluatko ladata sen nyt?'
	},

	smiley :
	{
		toolbar	: 'Hymi철',
		title	: 'Lis채채 hymi철',
		options : 'Hymi철n ominaisuudet'
	},

	elementsPath :
	{
		eleLabel : 'Elementin polku',
		eleTitle : '%1 elementti'
	},

	numberedlist	: 'Numerointi',
	bulletedlist	: 'Luottelomerkit',
	indent			: 'Suurenna sisennyst채',
	outdent			: 'Pienenn채 sisennyst채',

	justify :
	{
		left	: 'Tasaa vasemmat reunat',
		center	: 'Keskit채',
		right	: 'Tasaa oikeat reunat',
		block	: 'Tasaa molemmat reunat'
	},

	blockquote : 'Lainaus',

	clipboard :
	{
		title		: 'Liit채',
		cutError	: 'Selaimesi turva-asetukset eiv채t salli editorin toteuttaa leikkaamista. K채yt채 n채pp채imist철채 leikkaamiseen (Ctrl+X).',
		copyError	: 'Selaimesi turva-asetukset eiv채t salli editorin toteuttaa kopioimista. K채yt채 n채pp채imist철채 kopioimiseen (Ctrl+C).',
		pasteMsg	: 'Liit채 painamalla (<STRONG>Ctrl+V</STRONG>) ja painamalla <STRONG>OK</STRONG>.',
		securityMsg	: 'Selaimesi turva-asetukset eiv채t salli editorin k채ytt채채 leikep철yt채채 suoraan. Sinun pit채채 suorittaa liitt채minen t채ss채 ikkunassa.',
		pasteArea	: 'Leikealue'
	},

	pastefromword :
	{
		confirmCleanup	: 'Liitt채m채si teksti n채ytt채isi olevan Word-dokumentista. Haluatko siivota sen ennen liitt채mist채? (Suositus: Kyll채)',
		toolbar			: 'Liit채 Word-dokumentista',
		title			: 'Liit채 Word-dokumentista',
		error			: 'Liitetyn tiedon siivoaminen ei onnistunut sis채isen virheen takia'
	},

	pasteText :
	{
		button	: 'Liit채 tekstin채',
		title	: 'Liit채 tekstin채'
	},

	templates :
	{
		button			: 'Pohjat',
		title			: 'Sis채lt철pohjat',
		options : 'Sis채lt철pohjan ominaisuudet',
		insertOption	: 'Korvaa editorin koko sis채lt철',
		selectPromptMsg	: 'Valitse pohja editoriin<br>(aiempi sis채lt철 menetet채채n):',
		emptyListMsg	: '(Ei m채채riteltyj채 pohjia)'
	},

	showBlocks : 'N채yt채 elementit',

	stylesCombo :
	{
		label		: 'Tyyli',
		panelTitle	: 'Muotoilujen tyylit',
		panelTitle1	: 'Lohkojen tyylit',
		panelTitle2	: 'Rivinsis채iset tyylit',
		panelTitle3	: 'Objektien tyylit'
	},

	format :
	{
		label		: 'Muotoilu',
		panelTitle	: 'Muotoilu',

		tag_p		: 'Normaali',
		tag_pre		: 'Muotoiltu',
		tag_address	: 'Osoite',
		tag_h1		: 'Otsikko 1',
		tag_h2		: 'Otsikko 2',
		tag_h3		: 'Otsikko 3',
		tag_h4		: 'Otsikko 4',
		tag_h5		: 'Otsikko 5',
		tag_h6		: 'Otsikko 6',
		tag_div		: 'Normaali (DIV)'
	},

	div :
	{
		title				: 'Luo div-kehikko',
		toolbar				: 'Luo div-kehikko',
		cssClassInputLabel	: 'Tyylitiedoston luokat',
		styleSelectLabel	: 'Tyyli',
		IdInputLabel		: 'Id',
		languageCodeInputLabel	: ' Kielen koodi',
		inlineStyleInputLabel	: 'Sis채tyyli',
		advisoryTitleInputLabel	: 'Ohjeistava otsikko',
		langDirLabel		: 'Kielen suunta',
		langDirLTRLabel		: 'Vasemmalta oikealle (LTR)',
		langDirRTLLabel		: 'Oikealta vasemmalle (RTL)',
		edit				: 'Muokkaa Divi채',
		remove				: 'Poista Div'
  	},

	iframe :
	{
		title		: 'IFrame-kehyksen ominaisuudet',
		toolbar		: 'IFrame-kehys',
		noUrl		: 'Anna IFrame-kehykselle l채hdeosoite (src)',
		scrolling	: 'N채yt채 vierityspalkit',
		border		: 'N채yt채 kehyksen reunat'
	},

	font :
	{
		label		: 'Kirjaisinlaji',
		voiceLabel	: 'Kirjaisinlaji',
		panelTitle	: 'Kirjaisinlaji'
	},

	fontSize :
	{
		label		: 'Koko',
		voiceLabel	: 'Kirjaisimen koko',
		panelTitle	: 'Koko'
	},

	colorButton :
	{
		textColorTitle	: 'Tekstiv채ri',
		bgColorTitle	: 'Taustav채ri',
		panelTitle		: 'V채rit',
		auto			: 'Automaattinen',
		more			: 'Lis채채 v채rej채...'
	},

	colors :
	{
		'000' : 'Musta',
		'800000' : 'Kastanjanruskea',
		'8B4513' : 'Satulanruskea',
		'2F4F4F' : 'Tumma liuskekivenharmaa',
		'008080' : 'Sinivihre채',
		'000080' : 'Laivastonsininen',
		'4B0082' : 'Indigonsininen',
		'696969' : 'Tummanharmaa',
		'B22222' : 'Tiili',
		'A52A2A' : 'Ruskea',
		'DAA520' : 'Kultapiisku',
		'006400' : 'Tummanvihre채',
		'40E0D0' : 'Turkoosi',
		'0000CD' : 'Keskisininen',
		'800080' : 'Purppura',
		'808080' : 'Harmaa',
		'F00' : 'Punainen',
		'FF8C00' : 'Tumma oranssi',
		'FFD700' : 'Kulta',
		'008000' : 'Vihre채',
		'0FF' : 'Syaani',
		'00F' : 'Sininen',
		'EE82EE' : 'Violetti',
		'A9A9A9' : 'Tummanharmaa',
		'FFA07A' : 'Vaaleanlohenpunainen',
		'FFA500' : 'Oranssi',
		'FFFF00' : 'Keltainen',
		'00FF00' : 'Limetin vihre채',
		'AFEEEE' : 'Haalea turkoosi',
		'ADD8E6' : 'Vaaleansininen',
		'DDA0DD' : 'Luumu',
		'D3D3D3' : 'Vaaleanharmaa',
		'FFF0F5' : 'Laventelinpunainen',
		'FAEBD7' : 'Antiikinvalkoinen',
		'FFFFE0' : 'Vaaleankeltainen',
		'F0FFF0' : 'Hunajameloni',
		'F0FFFF' : 'Asurinsininen',
		'F0F8FF' : 'Alice Blue -sininen',
		'E6E6FA' : 'Lavanteli',
		'FFF' : 'Valkoinen'
	},

	scayt :
	{
		title			: 'Oikolue kirjoitettaessa',
		opera_title		: 'Opera ei tue t채t채 ominaisuutta',
		enable			: 'Ota k채ytt철철n oikoluku kirjoitettaessa',
		disable			: 'Poista k채yt철st채 oikoluku kirjoitetaessa',
		about			: 'Tietoja oikoluvusta kirjoitetaessa',
		toggle			: 'Vaihda oikoluku kirjoittaessa tilaa',
		options			: 'Asetukset',
		langs			: 'Kielet',
		moreSuggestions	: 'Lis채채 ehdotuksia',
		ignore			: 'Ohita',
		ignoreAll		: 'Ohita kaikki',
		addWord			: 'Lis채채 sana',
		emptyDic		: 'Sanakirjan nimi on annettava.',
		noSuggestions	: 'Ei ehdotuksia',
		optionsTab		: 'Asetukset',
		allCaps			: 'Ohita sanat, jotka on kirjoitettu kokonaan isoilla kirjaimilla',
		ignoreDomainNames : 'Ohita verkkotunnukset',
		mixedCase		: 'Ohita sanat, joissa on sekoitettu isoja ja pieni채 kirjaimia',
		mixedWithDigits	: 'Ohita sanat, joissa on numeroita',

		languagesTab	: 'Kielet',

		dictionariesTab	: 'Sanakirjat',
		dic_field_name	: 'Sanakirjan nimi',
		dic_create		: 'Luo',
		dic_restore		: 'Palauta',
		dic_delete		: 'Poista',
		dic_rename		: 'Nime채 uudelleen',
		dic_info		: 'Oletuksena sanakirjat tallennetaan ev채steeseen, mutta ev채steiden koko on kuitenkin rajallinen. Sanakirjan kasvaessa niin suureksi, ettei se en채채 mahdu ev채steeseen, sanakirja t채ytyy tallentaa palvelimellemme. Tallentaaksesi sanakirjasi palvelimellemme tulee sinun antaa sille nimi. Jos olet jo tallentanut sanakirjan, anna sen nimi ja klikkaa Palauta-painiketta',

		aboutTab		: 'Tietoa'
	},

	about :
	{
		title		: 'Tietoa CKEditorista',
		dlgTitle	: 'Tietoa CKEditorista',
		help	: 'Katso ohjeet: $1.',
		userGuide : 'CKEditorin k채ytt채j채opas',
		moreInfo	: 'Lisenssitiedot l철ytyv채t kotisivuiltamme:',
		copy		: 'Copyright &copy; $1. Kaikki oikeuden pid채tet채채n.'
	},

	maximize : 'Suurenna',
	minimize : 'Pienenn채',

	fakeobjects :
	{
		anchor		: 'Ankkuri',
		flash		: 'Flash animaatio',
		iframe		: 'IFrame-kehys',
		hiddenfield	: 'Piilokentt채',
		unknown		: 'Tuntematon objekti'
	},

	resize : 'Raahaa muuttaaksesi kokoa',

	colordialog :
	{
		title		: 'Valitse v채ri',
		options	:	'V채rin ominaisuudet',
		highlight	: 'Korostus',
		selected	: 'Valittu',
		clear		: 'Poista'
	},

	toolbarCollapse	: 'Kutista ty철kalupalkki',
	toolbarExpand	: 'Laajenna ty철kalupalkki',

	toolbarGroups :
	{
		document : 'Dokumentti',
		clipboard : 'Leikep철yt채/Kumoa',
		editing : 'Muokkaus',
		forms : 'Lomakkeet',
		basicstyles : 'Perustyylit',
		paragraph : 'Kappale',
		links : 'Linkit',
		insert : 'Lis채채',
		styles : 'Tyylit',
		colors : 'V채rit',
		tools : 'Ty철kalut'
	},

	bidi :
	{
		ltr : 'Tekstin suunta vasemmalta oikealle',
		rtl : 'Tekstin suunta oikealta vasemmalle'
	},

	docprops :
	{
		label : 'Dokumentin ominaisuudet',
		title : 'Dokumentin ominaisuudet',
		design : 'Sommittelu',
		meta : 'Metatieto',
		chooseColor : 'Valitse',
		other : '<muu>',
		docTitle :	'Sivun nimi',
		charset : 	'Merkist철koodaus',
		charsetOther : 'Muu merkist철koodaus',
		charsetASCII : 'ASCII',
		charsetCE : 'Keskieurooppalainen',
		charsetCT : 'Kiina, perinteinen (Big5)',
		charsetCR : 'Kyrillinen',
		charsetGR : 'Kreikka',
		charsetJP : 'Japani',
		charsetKR : 'Korealainen',
		charsetTR : 'Turkkilainen',
		charsetUN : 'Unicode (UTF-8)',
		charsetWE : 'L채nsieurooppalainen',
		docType : 'Dokumentin tyyppi',
		docTypeOther : 'Muu dokumentin tyyppi',
		xhtmlDec : 'Lis채채 XHTML julistukset',
		bgColor : 'Taustav채ri',
		bgImage : 'Taustakuva',
		bgFixed : 'Paikallaanpysyv채 tausta',
		txtColor : 'Tekstiv채ri',
		margin : 'Sivun marginaalit',
		marginTop : 'Yl채',
		marginLeft : 'Vasen',
		marginRight : 'Oikea',
		marginBottom : 'Ala',
		metaKeywords : 'Hakusanat (pilkulla erotettuna)',
		metaDescription : 'Kuvaus',
		metaAuthor : 'Tekij채',
		metaCopyright : 'Tekij채noikeudet',
		previewHtml : '<p>T채m채 on <strong>esimerkkiteksti채</strong>. K채yt채t juuri <a href="javascript:void(0)">CKEditoria</a>.</p>'
	}
};
