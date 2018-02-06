function superSensei(name, health=100){
	this.name = name;
	this.health = health;
	var speed = 3;
	var strength = 3;
	

	this.speakWisdom = function(){
		console.log("What one programmer can do in one month, two programmers can do in two months.");
	}

	this.showStats = function(){
		console.log("Name: " + this.name, "Health: " + this.health, "Speed: " + speed, "Strength: " + strength);
	}


}

var superSensei = new superSensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
