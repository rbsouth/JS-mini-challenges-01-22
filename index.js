class Multiplier {
	constructor(number, current_value){
		this.number = number
		this.current_value = 1
	}
	multiply(){
		this.current_value = this.current_value * this.number
	 }
	getCurrentValue(){
		console.log(this.current_value);
	}
}

var new_number = new Multiplier(5);

new_number.multiply();
new_number.getCurrentValue();
new_number.multiply();
new_number.getCurrentValue();
new_number.multiply();
new_number.getCurrentValue();
new_number.multiply();
new_number.getCurrentValue();
new_number.multiply();
new_number.getCurrentValue();
new_number.multiply();
new_number.getCurrentValue();
new_number.multiply();
new_number.getCurrentValue();
new_number.multiply();
new_number.getCurrentValue();
new_number.multiply();
new_number.getCurrentValue();
