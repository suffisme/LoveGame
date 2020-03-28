var names = ['','']
var num = -1
var flag=0
var love_name=''
var err=''
var pic="love99.gif"
const name1 = () => {
  var x = document.getElementById("You")
   names[0]= x.value
}
document.getElementById("You").addEventListener("keyup", name1)

const name2 = () => {
  var x = document.getElementById("Yours")
   names[1]= x.value
}
document.getElementById("Yours").addEventListener("keyup", name2)

const rand=()=>{
	 num=parseInt(60+40*Math.random())
}

const answer=()=>{
	var name="The Love Between "+names[0]+" and "+names[1]+" is " +love_name + "<br>" 
	document.getElementById("love").innerHTML=name
	document.getElementById("pic").src=pic
	document.getElementById("res").innerHTML="You Love "+names[1]+" : <font size=8><b>" + String(num) + "</b>%</font>"
}

const error=()=>{

	document.getElementById("pic").src=pic
	document.getElementById("love").innerHTML=err
}

const check=()=>{

	rand()

	if(num>=60){
		love_name="\"Moderate\""
		pic="love80.gif"
	}
	if(num>=70){
		love_name="\"Still in Process\""
		pic="love80.gif"
	}
	if(num>=80){
		love_name="\"Great\""
		pic="love99.gif"
	}
	if(num>=90){
		love_name=" \"Example to Others\""
		pic="love99.gif"
	}
	if(num==100){
		love_name=" \" Eternal and Made For Each Other \" "
		pic="love99.gif"
	}

	if(names[0]===''){
		flag=1
		err='Ohh Bhai Apna Hi Naam Bhool Gaye??????'
		pic="error.jpg"
	}
	if(names[1]===''){
		flag=2
		err="Naam Likh Lo Unka Bhi, Sirf Naam Maanga Hai Haath Nahi."
		pic="error.jpg"
	}
	if(names[0]==='' && names[1]===''){
		flag=3
		err="Maza Le Rahe Ho??"+"<br>"+"Naam Likho Aur Output Dekh Kar Maza Lo Babua"
		pic="error.jpg"
	}

	if(flag===0)
	{
		answer()
	}
	else
	{ 
		error()
	}
}
