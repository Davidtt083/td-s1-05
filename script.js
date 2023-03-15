



function makeResizable(element) {
	if (element && jQuery(element).length) {
		var $el = jQuery(element);
		var elHeight = $el.outerHeight();
		var elWidth = $el.outerWidth();

		var $wrapper = $el.parent();

		var starterData = {
			size: {
				width: $wrapper.width(),
				height: $wrapper.height()
			}
		}
		var scale = Math.min(
			starterData.size.width / $el.outerWidth(),
			starterData.size.height / $el.outerHeight()
		);
		if (scale > 1) {
			scale = 1;
		}
		var elMarginBottom = (scale * elHeight) - starterData.size.height;
		$el.css({
			transform: "translate3d(-50%, 0, 0) " + "scale(" + scale + ")",
			'margin-bottom': elMarginBottom
		});
	}
}
jQuery(document).ready(function () {
	makeResizable('#very-specific-design');
});
jQuery(window).load(function () {
	//	makeResizable('#very-specific-design');
});
jQuery(window).resize(function () {
	makeResizable('#very-specific-design');
});

function mostrar(){
	var element = document.getElementById("text1");
	var element2 = document.getElementById("btn2");
	var element3 = document.getElementById("text3");
	var element4 = document.getElementById("text2");
	element.classList.remove("hide");
	element2.classList.remove("novisited");
	element2.setAttribute('onclick','mostrar2()');
	element3.classList.add("hide");
	element4.classList.add("hide");
}

function mostrar2(){
	var element = document.getElementById("text1");
	var element2 = document.getElementById("text2");
	var element3 = document.getElementById("btn3");
	var element4 = document.getElementById("text3");
	element.classList.add("hide");
	element2.classList.remove("hide");
	element3.classList.remove("novisited");
	element3.setAttribute('onclick','mostrar3()');
	element4.classList.add("hide");
}

function mostrar3(){
	var element = document.getElementById("text3");
	var element2 = document.getElementById("text2");
	var element3 = document.getElementById("text1");
	element.classList.remove("hide");
	element2.classList.add("hide");
	element3.classList.add("hide");
}