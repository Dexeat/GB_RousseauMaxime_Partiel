let codeA ;
let Ligne ;
let listea;
let victoire;

//ALEA
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

//GeneCode
for (var i = 0; i <= 7; i++) {
	codeA = getRandomIntInclusive(1,8);
	//console.log(codeA);
	$('.cases'+i).html(codeA);
}

//detection des input
$('input').on('input', function() {
	//console.log($(this).val())

	if ($(this).val() == 1) {$(this).removeClass('rouge bleu vert jaune violet orange gris rose').addClass('rouge');}
	if ($(this).val() == 2) {$(this).removeClass('rouge bleu vert jaune violet orange gris rose').addClass('bleu')}
	if ($(this).val() == 3) {$(this).removeClass('rouge bleu vert jaune violet orange gris rose').addClass('vert')}
	if ($(this).val() == 4) {$(this).removeClass('rouge bleu vert jaune violet orange gris rose').addClass('jaune')}
	if ($(this).val() == 5) {$(this).removeClass('rouge bleu vert jaune violet orange gris rose').addClass('violet')}
	if ($(this).val() == 6) {$(this).removeClass('rouge bleu vert jaune violet orange gris rose').addClass('orange')}
	if ($(this).val() == 7) {$(this).removeClass('rouge bleu vert jaune violet orange gris rose').addClass('gris')}
	if ($(this).val() == 8) {$(this).removeClass('rouge bleu vert jaune violet orange gris rose').addClass('rose')}
})


//Bouton de validation
$('button').on('click', function() {

	Ligne = $(this).attr('class');

	for(var i=1; i <=5; i++){

		//console.log($('input'+('.test'+i)+("."+Ligne)).val())
		//console.log($('.cases'+i).html())

		//if($('input'+('.test'+i)+("."+Ligne)).val() == $('.cases'+i).html()){$(('.valid'+'.valid'+i)+("."+Ligne)).addClass('noir');}

		for(var j=1; j <= 5; j++){
			if ($('input'+('.test'+i)+("."+Ligne)).val() == $('.cases'+j).html()) {$(('.valid'+'.valid'+i)+("."+Ligne)).removeClass('blanc noir rouge').addClass('blanc');}
		}
		
		if($('input'+('.test'+i)+("."+Ligne)).val() == $('.cases'+i).html()){$(('.valid'+'.valid'+i)+("."+Ligne)).removeClass('blanc rouge').addClass('noir');}
		else{if (!$('.valid'+('.valid'+i)+("."+Ligne)).hasClass('blanc')) {$('.valid'+('.valid'+i)+("."+Ligne)).removeClass('blanc rouge').addClass('rouge')}
		}

		
	}
	
	victoire=0;
	//Check victoire
	for(var i=1; i <=5; i++){
		if ($(('.valid'+'.valid'+i)+("."+Ligne)).hasClass('noir')) {
			victoire++;
		}
		if (victoire == 5) {
			$('button'+('.'+Ligne)).html("Vous avez gagnez !")
			//couleur code

			for (var i = 0; i <= 7; i++) {
				if ($('.cases'+i).html() == 1) {$('.cases'+i).addClass('rouge')}
				if ($('.cases'+i).html() == 2) {$('.cases'+i).addClass('bleu')}
				if ($('.cases'+i).html() == 3) {$('.cases'+i).addClass('vert')}
				if ($('.cases'+i).html() == 4) {$('.cases'+i).addClass('jaune')}
				if ($('.cases'+i).html() == 5) {$('.cases'+i).addClass('violet')}
				if ($('.cases'+i).html() == 6) {$('.cases'+i).addClass('orange')}
				if ($('.cases'+i).html() == 7) {$('.cases'+i).addClass('gris')}
				if ($('.cases'+i).html() == 8) {$('.cases'+i).addClass('rose')}
			}
		}
		else{
			$('button'+('.'+Ligne)).html("Vous en avez trouvé : "+(victoire))}

	} 
})
