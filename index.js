let currentColor = 'black';

startup();

let pixelHandler = document.getElementById('pixelHandler');

console.log(pixelHandler);

for (let i = 0; i < 3000; i++) {
	let pixel = document.createElement('div');
	pixel.classList.add('pixel');
	pixelHandler.appendChild(pixel);
}

pixelHandler.addEventListener('click', function (event) {
	if (event.target !== this) {
		event.target.style.backgroundColor = currentColor;
	}
});

function updateFirst(event) {
	currentColor = event.target.value;

}

function colorPixels() {
	document.getElementBy('pixel').addEventListener('click', function() {
		pixel.appendChild('colorWell.select', true);
	});

}

function startup() {
	let colorWell = document.querySelector('#colorWell');
	colorWell.addEventListener('input', updateFirst, false);
	colorWell.select();
}
function nameOfProject (){


	document.getElementById('nameOfProject').style.backgroundColor = 'red';
}


// bellow is new stuff
var gutterWidth = 100;

var Particle = function(x, y) {
	var t = this;
	t.x = x;
	t.y = y;
	$('body').append(t.elem);


	/* create a new position every 500-1000 milliseconds */
	var milliSecs = 500 + Math.random() * 500;
	t.ptinterval = setInterval(function() {
		var dx = Math.round(Math.random() * gutterWidth);
		var dy = Math.round(Math.random() * gutterWidth);
		t.elem.animate({left: (t.x + dx)+'px', top: (t.y + dy) + 'px'}, 600);
	}, milliSecs);
};

var particles = [];
var newParticle;

for(var x = 0; x < 1000; x = x + gutterWidth) {
	for(var y = 0; y < 1000; y = y + gutterWidth) {
		newParticle = new Particle(x,y);
		particles.push(newParticle);
	}
}
