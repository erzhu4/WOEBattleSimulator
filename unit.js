(function(){
	if (typeof WOE ==="undefined"){
		window.WOE = {};
	}
	
	var Unit = WOE.Unit = function(army, hp, atkpts, priority) {
		this.army = army;
		this.hp = hp;
		this.atkpts = atkpts;
		this.priority = priority;
		this.stillAlive = true;
		this.attacked = false;
	};
	
	Unit.prototype.checkStatus = function(){
		if (this.hp <= 0){
			this.stillAlive = false;
			this.army.attacksPerTurn -= 1;
		}
	};
	
	Unit.prototype.attack = function(target) {
		target.hp -= this.atkpts;
		this.attacked = true;
	};
	
})();