(function(){
	if (typeof WOE ==="undefined"){
		window.WOE = {};
	}
	
	var Army = WOE.Army = function(name, battle) {
		this.name = name;
		this.attacksPerTurn = 0;
		this.units = [];
	};
	
	Army.prototype.setFoot = function(num){
		this.attacksPerTurn += num;
		for (var i = 0; i < num; i++){
			var thing = new WOE.Foot(this);
			this.units.push(thing);
		};
	};
	
	Army.prototype.allLiveUnits = function() {
		var arr = [];
		for (var i = 0; i < this.units.length; i++){
			if (this.units[i].stillAlive){arr.push(this.units[i]);}
		}
		return arr;
	};
	
	Army.prototype.unitsToAttack = function() {
		var arr = [];
		var liveUnits = this.allLiveUnits();
		for (var i = 0; i < liveUnits.length; i++){
			if (liveUnits[i].attacked === false){arr.push(liveUnits[i]);}
		}
		return arr;
	};
	
	Army.prototype.lowestPriorityUnit = function() {
		var num = 10;
		var liveUnits = this.allLiveUnits();
		var unit = {};
		for (var i = 0; i < liveUnits.length; i++){
			if (liveUnits[i].priority < num){
				var unit = liveUnits[i];
			}
		}
		return unit;
	};
	
	Army.prototype.launchAttack = function(army) {
		console.log(this.name + " attacks " + army.name);
		var attackUnits = this.unitsToAttack();
		if (attackUnits.length > 0){
			attackUnits[0].attack(army.lowestPriorityUnit());
		} else if(army.unitsToAttack().length <= 0) {
			this.resetAttack();
			army.resetAttack();
		}
	};
	
	Army.prototype.resetAttack = function() {
		var liveUnits = this.allLiveUnits();
		for (var i = 0; i < liveUnits.length; i++){
			liveUnits[i].attacked = false;
		}
	};
	
	Army.prototype.checkUnits = function() {
		var liveUnits = this.allLiveUnits();
		for (var i = 0; i < liveUnits.length; i++){
			liveUnits[i].checkStatus();
		}	
	};
	
	Army.prototype.dead = function() {
		var liveUnits = this.allLiveUnits();
		if (liveUnits.length <= 0){
			return true;
		} else {
			return false;
		};
	};
	
})();