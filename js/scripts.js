var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();

var textCharsAfter = text.replace('Velociraptor', dinosaurUpperCased );
	console.log(textCharsAfter);


var x = textCharsAfter.length;
var halfText = textCharsAfter.slice(0 , x/2);
	console.log(halfText);