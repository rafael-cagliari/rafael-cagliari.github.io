
let num1=''
let num2 =''
let operator=''
let total = 'a'
let display = ''


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {


button.addEventListener('click', () => {
    
    if(button.id =='del'){
    	deleteCharacter()
    	return
    }

    if(button.id=='ac'){
    	allClear()
    	changeDisplay('')
    	return
    }

    if(operator !=''){
    	
    	if(button.id=='*'||button.id=='/'||button.id=='-'||button.id=='+'){
    	operator = button.id
    	
    	changeDisplay(button.id)
    }
    	else if(button.id=='equal'){
    		total = operate(operator, parseFloat(num1),parseFloat(num2))
    		total = total
    		
    		changeDisplay(total)
    		operator = ''
	
			if(total > 999999999){num1 = total.toExponential(4)
			num2 = ''		
			}
			else{
				num1 = total;
				num1 = num1.toFixed(3)
				num2= '';
			
			}
    	}
    	else{
    		if(num2.length<9){
    		num2+=button.id

    		changeDisplay(button.id)}
    		else{

    		}
    	}
    }
    else {
    if(button.id=='equal'){

    }	
    else if(button.id=='*'||button.id=='/'||button.id=='-'||button.id=='+'){
    	
    	operator = button.id
    	
    	changeDisplay(button.id)}
    else{
    	if(num1==total){
    		num1= ''
    	}
    if(num1.length<9){	
    num1+= button.id
  
    changeDisplay(button.id)}
    else{

    }
}
}
  });
});




function operate(operator, num1, num2){
	if(operator=='+'){
	return num1 + num2}
	else if(operator=='-'){
	return num1 - num2}
	else if(operator =='*'){
		return num1 * num2}
	else if(operator=='/'){
		return num1 / num2 
	}
	}

function allClear(){
	num1=''
	num2=''
	operator=''
	changeDisplay('')

}

function changeDisplay(character){
if(total >= 9.9999999995e+99){
	document.getElementById("results_on_display").innerHTML ='Max. value reached'
}
if(character == total){
		display = total.toFixed(3)
		console.log('total = '+ total + 'to fixed = ' + display)
		display = parseFloat(display)
		console.log('display parseado =' + display)
		if(display > 99999999999){
		document.getElementById("results_on_display").innerHTML =display.toExponential(4)
		}
		else{
		document.getElementById("results_on_display").innerHTML = display
		
	}
	}
else if(character == ''){
	display = '0'
	document.getElementById("results_on_display").innerHTML = display
	document.getElementById("operations_on_display").innerHTML = display
}
else{
	console.log('num1 antes de parsear '+num1)
	
	
	document.getElementById("operations_on_display").innerHTML = total+operator+num2
	
	}
}


function deleteCharacter(){
	if(num2 == '' && num1 != '' && operator == ''){
		num1 = num1.substring(0, num1.length-1)
		changeDisplay()
	}
	else if(num2 != ''){
		 num2 = num2.substring(0, num2.length-1)
		 changeDisplay()
	}
	else{
	}
}