let MAX_RESULTS = 50;

var $eliminated;
var $known;
var $p1;
var $p2;
var $p3;
var $p4;
var $p5;
var $possibilities;

function init() {
	$eliminated = jQuery('#eliminated');
	$known = jQuery('#known');
	$p1 = jQuery('#p1');
	$p2 = jQuery('#p2');
	$p3 = jQuery('#p3');
	$p4 = jQuery('#p4');
	$p5 = jQuery('#p5');
	$possibilities = jQuery('#possibilities');

	$eliminated.keyup (updatePossibilities);
	$known.keyup (updatePossibilities);
	$p1.keyup (updatePossibilities);
	$p2.keyup (updatePossibilities);
	$p3.keyup (updatePossibilities);
	$p4.keyup (updatePossibilities);
	$p5.keyup (updatePossibilities);

	updatePossibilities ();
}

function restrictMultipleLetters($p) {
	if ($p && $p.val().length > 1) {
		$p.val($p.val().substring(0,1));
	}
}

function updatePossibilities () {
	$possibilities.empty();

	restrictMultipleLetters ($p1);
	restrictMultipleLetters ($p2);
	restrictMultipleLetters ($p3);
	restrictMultipleLetters ($p4);
	restrictMultipleLetters ($p5);

	let eliminated = $eliminated.val().trim().toLowerCase();
	let known = $known.val().trim().toLowerCase();
	var p1 = $p1.val().trim().toLowerCase();
	var p2 = $p2.val().trim().toLowerCase();
	var p3 = $p3.val().trim().toLowerCase();
	var p4 = $p4.val().trim().toLowerCase();
	var p5 = $p5.val().trim().toLowerCase();

	if (!eliminated && !known && !p1 && !p2 && !p3 && !p4 && !p5) {
		notEnoughInfo ();
		return;
	}

	let possibilities = buildPossibleWords (eliminated, known, p1, p2, p3, p4, p5);

	if (possibilities.length > MAX_RESULTS) {
		notEnoughInfo ();
		return;
	}

	if (possibilities.length < 1) {
		noResults ();
		return;
	}

	possibilities.forEach((item, i) => {
		$possibilities.append (`<li class="item">${item}</li>`);
	});
}

function notEnoughInfo () {
	$possibilities.append (`<li class="too-many">Not enough info</li>`);
}

function noResults () {
	$possibilities.append (`<li class="too-many">No words found</li>`);
}

function buildPossibleWords (eliminated, known, p1, p2, p3, p4, p5)
{
	var results = WORDS.slice ();

	if (p1) results = results.filter (x => x.charAt(0) == p1);
	if (p2) results = results.filter (x => x.charAt(1) == p2);
	if (p3) results = results.filter (x => x.charAt(2) == p3);
	if (p4) results = results.filter (x => x.charAt(3) == p4);
	if (p5) results = results.filter (x => x.charAt(4) == p5);

	if (eliminated) {
		let eliminatedChars = eliminated.split('');
		eliminatedChars.forEach((c, i) => {
			results = results.filter (x => x.indexOf(c) == -1);
		});
	}

	if (known) {
		let knownChars = known.split('');
		knownChars.forEach((c, i) => {
			results = results.filter (x => x.indexOf(c) > -1);
		});
	}

	return results;
}

jQuery(document).ready (init);
