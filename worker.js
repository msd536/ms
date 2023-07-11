
var love = setInterval(function(){
  var r_num = Math.floor(Math.random() * 40) + 1;
	var r_size = Math.floor(Math.random() * 65) + 10;
	var r_left = Math.floor(Math.random() * 100) + 1;
	var r_bg = Math.floor(Math.random() * 25) + 100;
  var r_time = Math.floor(Math.random() * 5) + 5;
  $('.bg_heart').append("<div class='heart' style='width:"+r_size+"px;height:"+r_size+"px;left:"+r_left+"%;background:rgba(255,"+(r_bg-25)+","+r_bg+",1);-webkit-animation:love "+r_time+"s ease;-moz-animation:love "+r_time+"s ease;-ms-animation:love "+r_time+"s ease;animation:love "+r_time+"s ease'></div>");
  
  $('.bg_heart').append("<div class='heart' style='width:"+(r_size-10)+"px;height:"+(r_size-10)+"px;left:"+(r_left+r_num)+"%;background:rgba(255,"+(r_bg-25)+","+(r_bg+25)+",1);-webkit-animation:love "+(r_time+5)+"s ease;-moz-animation:love "+(r_time+5)+"s ease;-ms-animation:love "+(r_time+5)+"s ease;animation:love "+(r_time+5)+"s ease'></div>");
  
  
},500);

var i = 0;
var txt1 = "Hi SweetHeart.....!  <<                I know i have been making mistakes . <<<                I want to start by  apologizing for my behavior. I deeply regret the pain and disappointment I have caused you.                                                                           > I want you to know that my actions were not a reflection of how much you mean to me. I was going through some personal challenges, but that is no excuse for neglecting our relationship. You deserve better, and I am truly sorry for not being there for you during this time. <<                  I miss you, and I miss the connection we have. You are an important part of my life, and I want to make things right. I am committed to making changes and prioritizing our relationship moving forward.                   <<                                                     > I would love the opportunity to sit down with you and have an open and honest conversation. Your feelings and perspective matter to me, and I am ready to listen and learn from this experience.Please know that I am here for you, and I am willing to put in the effort to mend our relationship. I hope we can find a way to move past this and grow stronger together.With all my love and sincerity.                                                        >I Love U <SweetHeart.....!               <<<< Give me One chance to Prove my Love ...!";
var speed = 50;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {        
     if(txt1.charAt(i)=='<')
      document.getElementById("text1").innerHTML += '</br>'
    else if(txt1.charAt(i)=='>')
      document.getElementById("text1").innerHTML = ''
   
    else
      document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
