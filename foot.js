(function(){
	if (typeof WOE ==="undefined"){
		window.WOE = {};
	}
	
	var Foot = WOE.Foot = function(army) {
		WOE.Unit.call(this, army, 50, 10, 0);
	}
	
	var Sar = function(){};
	Sar.prototype = WOE.Unit.prototype;
	Foot.prototype = new Sar();
	
})();