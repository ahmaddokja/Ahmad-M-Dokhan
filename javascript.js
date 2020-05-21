$(document).ready(function(){
	$('.tab-link').click( function() {
	
	var tabID = $(this).attr('data-tab');
	
	$(this).addClass('active').siblings().removeClass('active');
	
	$('#tab-'+tabID).addClass('active').siblings().removeClass('active');
});

});

//important to know this but i do not have enuoph time because the exam not easy 
we need to conect html with js 
and to do this conection i should use DOM or jquery 
If i need to  use DOM when I called elemen
i will use document.getElementByld('')
and If i need to use jquery
i will use document.getElementByld()
If i want to creat somthing in html 
i will use document.creatByld()
If i want to run a button
i will use Button.onclick(function(){and write my code here })
the obj we can creat it like that 
var obj ={
	asd:asd,
	ght:ght

}


the closuer is functions in side function to make the code more protict and easy 
like
function ahm(nam){
	var x;
	var y;
	function sm(kj){
		and here ouer condition
		***and like that
	}
}



the high function
*each it is a for loob and no more but easy to use 
*map to make a change on every element of array like plus 6 for each element 
*filter we use it to return somthing without somthing like array of number and string and return string for example 
*reduce  we use it to return value of number or value of something else 


the  recursion to repeat the function from the first condition or first return
function re(st, co) {
  if (co===0){
    return ""
  }
  else return st + rep(st, cout-1);
}