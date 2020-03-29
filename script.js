var names = ['','']
var num = -1
var flag=0,mul=0
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


const OneNumber=(namescomb) => {
	var ch=Array(26).fill(0)
	var fin=0
	for (var i = 0; i <namescomb.length; i++) 
	{
		var k=0;
		if(namescomb.charCodeAt(i)>=97)
			k=32
		ch[namescomb.charCodeAt(i)-65-k]++
	}

	var check=Array(26).fill(0)
	for (var i = 0; i <namescomb.length; i++)
	{
		var k=0;
		if(namescomb.charCodeAt(i)>=97)
			k=32
		if(ch[namescomb.charCodeAt(i)-65-k]>0 && check[namescomb.charCodeAt(i)-65-k]===0){
			check[namescomb.charCodeAt(i)-65-k]=1	
			fin=10*fin+ch[namescomb.charCodeAt(i)-65-k]
			if(ch[namescomb.charCodeAt(i)-65-k]>1)
			mul++
		}
	}
	var str=String(fin)
	while(parseInt(str)>=10)
	{
		var str2=0
		for(var i=0;i<str.length/2;i++)
		{
			if(i===str.length-1-i){
				str2=10*str2+(str.charCodeAt(i)-48)
			}
			else{
				str2=10*str2+(str.charCodeAt(i)+str.charCodeAt(str.length-1-i)-96)
			}

		}
		console.log(str)
		str=String(str2)
	}
	console.log(str)
	return parseInt(str)
}

const generatePercentage=()=>{
	num=0
	mul=0
	const namescomb1=names[0]+" Loves "+names[1]
	const namescomb2=names[1]+" Loves "+names[0]
	var num1=OneNumber(namescomb1)
	var num2=OneNumber(namescomb2)
	if(num1>num2)
		num=10*num1+num2
	else
		num=10*num2+num1
	if(num>=88)
		return
	while(num<70)
			num+=2*mul
	if(num>65 && num<70)
		num=68
	if(2*num<90)
		num+=num
	
	if(num+4*mul<94 && num+mul>75)
		num+=4*mul
	
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
flag=0
	
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
		generatePercentage()

	if(num>=60){
		love_name="\"Moderate\""
		pic="love80.gif"
	}
	if(num>70){
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

		answer()
	}
	else
	{ 
		error()
	}
}


// var names = ['','']
// var num = -1
// var flag=0
// var love_name=''
// var err=''
// var pic="love99.gif"
// const name1 = () => {
//   var x = document.getElementById("You")
//    names[0]= x.value
// }
// document.getElementById("You").addEventListener("keyup", name1)

// const name2 = () => {
//   var x = document.getElementById("Yours")
//    names[1]= x.value
// }
// document.getElementById("Yours").addEventListener("keyup", name2)

// const rand=()=>{
// 	 num=parseInt(60+40*Math.random())
// }

// const answer=()=>{
// 	var name="The Love Between "+names[0]+" and "+names[1]+" is " +love_name + "<br>" 
// 	document.getElementById("love").innerHTML=name
// 	document.getElementById("pic").src=pic
// 	document.getElementById("res").innerHTML="You Love "+names[1]+" : <font size=8><b>" + String(num) + "</b>%</font>"
// }

// const error=()=>{

// 	document.getElementById("pic").src=pic
// 	document.getElementById("love").innerHTML=err
// }

// const check=()=>{

// 	rand()

// 	if(num>=60){
// 		love_name="\"Moderate\""
// 		pic="love80.gif"
// 	}
// 	if(num>=70){
// 		love_name="\"Still in Process\""
// 		pic="love80.gif"
// 	}
// 	if(num>=80){
// 		love_name="\"Great\""
// 		pic="love99.gif"
// 	}
// 	if(num>=90){
// 		love_name=" \"Example to Others\""
// 		pic="love99.gif"
// 	}
// 	if(num==100){
// 		love_name=" \" Eternal and Made For Each Other \" "
// 		pic="love99.gif"
// 	}

// 	if(names[0]===''){
// 		flag=1
// 		err='Ohh Bhai Apna Hi Naam Bhool Gaye??????'
// 		pic="error.jpg"
// 	}
// 	if(names[1]===''){
// 		flag=2
// 		err="Naam Likh Lo Unka Bhi, Sirf Naam Maanga Hai Haath Nahi."
// 		pic="error.jpg"
// 	}
// 	if(names[0]==='' && names[1]===''){
// 		flag=3
// 		err="Maza Le Rahe Ho??"+"<br>"+"Naam Likho Aur Output Dekh Kar Maza Lo Babua"
// 		pic="error.jpg"
// 	}

// 	if(flag===0)
// 	{
// 		answer()
// 	}
// 	else
// 	{ 
// 		error()
// 	}
// }
