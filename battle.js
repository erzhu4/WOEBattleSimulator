(function(){
	if (typeof WOE ==="undefined"){
		window.WOE = {};
	}

	var Battle = WOE.Battle = function(army1, army2) {
		this.army1 = army1;
		this.army2 = army2;
		this.currentArmy = army1;
	};
	
	Battle.prototype.otherArmy = function() {
		if (this.currentArmy == this.army1){
			return this.army2;
		} else {
			return this.army1;
		}
	};
	
	Battle.prototype.over = function() {
		if (this.army1.dead() || this.army2.dead()){
			return true;
		} else {
			return false;
		}
	};
	
	Battle.prototype.winningArmy = function() {
		if (this.army1.dead()){
			console.log(this.army2.name + " wins!");
			console.log(this.army2.allLiveUnits());
		} else {
			console.log(this.army1.name + " wins!");
			console.log(this.army1.allLiveUnits());
		}
	};
	
	Battle.prototype.start = function() {
		while (!this.over()){
			this.iterate();
		}
		this.winningArmy();
	};
	
	Battle.prototype.iterate = function() {
		if (!this.over()){
			this.currentArmy.launchAttack(this.otherArmy());
			this.currentArmy = this.otherArmy();
			this.army1.checkUnits();
			this.army2.checkUnits();
		} else {
			console.log("this battle is over");
		}
	};
	
})();