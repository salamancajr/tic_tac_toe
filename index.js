 

 var y;
 var z;
   var q = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8],[3, 6, 9], [1, 5, 9], [3, 5, 7]]
   
  
 
  function ticTacToe(r){
      
     function winner(){
 $("."+f[i][0]).html(b);
  h.push("."+f[i][0]);
   f.splice(f.indexOf(f[i]), 1); 
     d.splice(d.indexOf(cray), 1); 
 y.map(function(x){
   $("."+x).css("color","blue")})
    $("#alert").css({"opacity":"1","transition":"1s"})
       $("#alert").html("Better luck next time!")
       }
   function blocker(){    
   $("."+f[i][0]).html(b);
       h.push("."+f[i][0]);
   f.splice(f.indexOf(f[i]), 1); 
     d.splice(d.indexOf(cray), 1);}  
     
     $(r).html(a)
   if (d.indexOf(r)!==-1){
   var temp = d.splice(d.indexOf(r), 1)} 
    g =g.concat(eval(10*temp)).sort();
    g = g.sort();
   /////////////////if its AI's first move, make AI play the middle space for its first move///////////////////////   
   if (g.length===1){
   $(d[z]).html(b); 
        h.push(d[z]);
   d.splice(d.indexOf(d[z]), 1);
      
    }
  else{  
 let e = getRandomInt(d.length);
 var c= d[e];
  
 function getRandomInt(max) {
 return Math.floor(Math.random() * Math.floor(max));}
 /////////////////////////////////////////If it's AI's third move, check if AI can win/////////////////////////////////////////////////////////////     
 for(var i=0; i<f.length; i++){
      h=h.sort(); 
 if(g.length===3 && f[i].indexOf(eval(10*h[0]))>-1 && f[i].indexOf(eval(10*h[1]))>-1){ 
    y = Array.from(f[i]);  
 f[i].splice(f[i].indexOf(eval(10*h[0])), 1);
            f[i].splice(f[i].indexOf(eval(10*h[1])), 1); 
                var cray = "."+f[i][0];}
 
 else {continue;}
 
 if (d.indexOf(cray)>-1){
    winner(); 
 break;}}   
 /////////////////////////////////////////If it's AI's fourth move, check if AI can win/////////////////////////////////////////////////////////////     
 for(var i=0; i<f.length; i++){ 
      h=h.sort(); 
 f = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8],[3, 6, 9], [1, 5, 9], [3, 5, 7]]
   if(g.length===4 && h.length===3 && f[i].indexOf(eval(10*h[0]))>-1 && f[i].indexOf(eval(10*h[1]))>-1){ 
    y = Array.from(f[i]);  
 f[i].splice(f[i].indexOf(eval(10*h[0])), 1);
            f[i].splice(f[i].indexOf(eval(10*h[1])), 1); 
                var cray = "."+f[i][0];}
 
  if (d.indexOf(cray)>-1){
  winner();
   
 break;}
   
 f = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8],[3, 6, 9], [1, 5, 9], [3, 5, 7]];
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
      if(g.length===4 && f[i].indexOf(eval(10*h[1]))>-1 && f[i].indexOf(eval(10*h[2]))>-1){ 
    y = Array.from(f[i]);  
 f[i].splice(f[i].indexOf(eval(10*h[1])), 1);
            f[i].splice(f[i].indexOf(eval(10*h[2])), 1); 
                var cray = "."+f[i][0];}
 if (d.indexOf(cray)>-1){
  winner();
  break;}
 f = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8],[3, 6, 9], [1, 5, 9], [3, 5, 7]];  
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   if(g.length===4 && f[i].indexOf(eval(10*h[0]))>-1 && f[i].indexOf(eval(10*h[2]))>-1){ 
    y = Array.from(f[i]);  
 f[i].splice(f[i].indexOf(eval(10*h[0])), 1);
            f[i].splice(f[i].indexOf(eval(10*h[2])), 1); 
                var cray = "."+f[i][0];}
 if (d.indexOf(cray)>-1){
  winner();
   break;}
  else {continue;} }   
 //////////////////////////////////if player plays corners diagonally, block his strategy by taking the second space///////////////////////////////////////////////////////   
 if( g.length===2 && (g[0]===1 && g[1]===9 || g[0]===3 && g[1]===7)){
   h.push(".2");  
   $(".2").html(b); 
 d.splice(d.indexOf(".2"), 1);}
 /////////////////////////////////////////If it's AI's third move, check if player is setting up a winning move and block it/////////////////////////////////////////// 
 console.log(f)
    for(var i=0; i<f.length; i++){  
 if(h.length===2 && g.length===3 && f[i].indexOf(g[0])>-1 && f[i].indexOf(g[1])>-1){  
 f[i].splice(f[i].indexOf(g[0]), 1);
            f[i].splice(f[i].indexOf(g[1]), 1); 
                var cray = "."+f[i][0];}
 if (h.length===2 && d.indexOf(cray)>-1){
   blocker();
       break;}
  
   if(h.length===2 && g.length===3 && f[i].indexOf(g[1])>-1 && f[i].indexOf(g[2])>-1){
               f[i].splice(f[i].indexOf(g[1]), 1);
            f[i].splice(f[i].indexOf(g[2]), 1); 
                var cray = "."+f[i][0];
      }
  if (h.length===2 && d.indexOf(cray)>-1){
 blocker();
       break;}
  
     if(h.length===2 && g.length===3 && f[i].indexOf(g[0])>-1 && f[i].indexOf(g[2])>-1){
        f[i].splice(f[i].indexOf(g[0]), 1);
            f[i].splice(f[i].indexOf(g[2]), 1); 
                var cray = "."+f[i][0];
   }
  else{continue;}
   
     if (h.length===2 && d.indexOf(cray)>-1){
 blocker();
       break;}
 } 
 ///////////////starting off at any middle edge, AI's 2nd move///////////////////////////////////// 
   
    if(g.length===2 && g[0]===2 && (g[1]===7 || g[1]===9)){
       h.push(".3");  
   $(".3").html(b); 
 d.splice(d.indexOf(".3"), 1);
     }
  if(g.length===2 && ((g[0]===4 && g[1]===9) || (g[0]===3 && g[1]===4))){
       h.push(".1");  
   $(".1").html(b); 
 d.splice(d.indexOf(".1"), 1);
     }
         if(g.length===2 && ((g[0]===6 && g[1]===7) || (g[0]===1)&&g[1]===6)){
       h.push(".9");  
   $(".9").html(b); 
 d.splice(d.indexOf(".9"), 1);
    }
         if(g.length===2 && ((g[0]===1 && g[1]===8) || (g[0]===3)&&g[1]===8)){
       h.push(".7");  
   $(".7").html(b); 
 d.splice(d.indexOf(".7"), 1);
     }
    if(g.length===2 && g[0]===5 && g[1]===7){
        h.push(".1");  
   $(".1").html(b); 
 d.splice(d.indexOf(".1"), 1);
    } console.log("g:"+g,"h:"+ h,"d:"+ d)
 /////////////////////////////////////////If it's AI's fourth move, check if player is setting up a winning move and block it//////////////////////////////////////////
 for(var i=0; i<f.length; i++){  
    
    if(h.length===3 && g.length===4 && f[i].indexOf(g[0])>-1 && f[i].indexOf(g[1])>-1){  
 f[i].splice(f[i].indexOf(g[0]), 1);
            f[i].splice(f[i].indexOf(g[1]), 1); 
                var cray = "."+f[i][0];
   }
  if (h.length===3 && d.indexOf(cray)>-1){
 blocker(); 
       break;}
  
   if(h.length===3 && g.length===4 && f[i].indexOf(g[1])>-1 && f[i].indexOf(g[2])>-1){
               f[i].splice(f[i].indexOf(g[1]), 1);
            f[i].splice(f[i].indexOf(g[2]), 1); 
                var cray = "."+f[i][0];
      }
  if (h.length===3 && d.indexOf(cray)>-1){
 blocker();
       break;}
  
    if(h.length===3 && g.length===4 && f[i].indexOf(g[2])>-1 && f[i].indexOf(g[3])>-1){  
 f[i].splice(f[i].indexOf(g[2]), 1);
            f[i].splice(f[i].indexOf(g[3]), 1); 
                var cray = "."+f[i][0];
   }
  if (h.length===3 && d.indexOf(cray)>-1){
 blocker();
       break;}     
 
     if(h.length===3 && g.length===4 && f[i].indexOf(g[0])>-1 && f[i].indexOf(g[2])>-1){  
      f[i].splice(f[i].indexOf(g[0]), 1);
            f[i].splice(f[i].indexOf(g[2]), 1); 
                var cray = "."+f[i][0];
      }
  if (h.length===3 && d.indexOf(cray)>-1){
 blocker();
       break;}
      
    if(h.length===3 && g.length===4 && f[i].indexOf(g[0])>-1 && f[i].indexOf(g[3])>-1){  
     
      f[i].splice(f[i].indexOf(g[0]), 1);
            f[i].splice(f[i].indexOf(g[3]), 1); 
                var cray = "."+f[i][0];
        }
   if (h.length===3 && d.indexOf(cray)>-1){
 blocker();
       break;}
  
  if(h.length===3 && g.length===4 && f[i].indexOf(g[1])>-1 && f[i].indexOf(g[3])>-1){
     
 f[i].splice(f[i].indexOf(g[1]), 1);
            f[i].splice(f[i].indexOf(g[3]), 1); 
                var cray = "."+f[i][0];}
 
 else{continue;}
   
     if (h.length===3 && d.indexOf(cray)>-1){
 blocker();
       break;}
  
 }     
 /////////////////////////If it's AI's second move, check if player is setting up a winning move and block it//////////
    for(var i=0; i<f.length; i++){
    if(d.length===6 && g.length===2 && f[i].indexOf(g[0])>-1 && f[i].indexOf(g[1])>-1){
     
 f[i].splice(f[i].indexOf(g[0]), 1);
            f[i].splice(f[i].indexOf(g[1]), 1); 
                var cray = "."+f[i][0];}
 else {continue;}
   
 if (d.indexOf(cray)>-1){
 blocker();
       break;}
  
 else {$(c).html(b); 
       h.push(c);
 d.splice(e, 1); break;}
 
 }
 function random(){
  $(c).html(b);
   h.push(c);
 d.splice(e, 1);  
 }
 if (h.length===3 && g.length>3) {
   random();}
 if (h.length===2 && d.length===6){
  random();}
 
    if(g.length===2 && h.length===1){
  random();}
     if(g.length===3 && h.length===2){
  random();}
  if(g.length===5){
    for(var i=1;i<=9;i++){
    $("."+i).css({"background":"darkRed","transition":"1s"})
  }}
  
  }} 
 var a;
 var b;
 var d = [".1",".2",".3",".4",".5",".6",".7",".8",".9"];
 var e;
 var g=[];
 
 var f = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8],[3, 6, 9], [1, 5, 9], [3, 5, 7]]
 var temp;
 var h = [];
 
 
  function hello(){
     for(var i=1;i<=9;i++){
    $("."+i).css({"background":"orange"})
        $("#alert").css({"opacity":"1","transition":"1s"})
       $("#alert").html("First choose to play with X or O")
  }
 a="";
 b="";
 d = [".1",".2",".3",".4",".5",".6",".7",".8",".9"];
 e="";
 g=[];
 
 f = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8],[3, 6, 9], [1, 5, 9], [3, 5, 7]]
 temp="";
 h = [];
  y = "";
 z = "";
    cray="";
    $("#one").css("background-color", "")
     $("#two").css("background-color", "")
 q = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8],[3, 6, 9], [1, 5, 9], [3, 5, 7]]
   for(var i=0; i<10; i++){
   $(d[i]).html("") 
     $(d[i]).css("color","") 
      $("#one").removeAttr("disabled")
    $("#two").removeAttr("disabled")
   }
    
    for(var i=0; i<10; i++){
   $(d[i]).css("pointer-events", "none"); }
   }
 
 $("#one").click(function(){
   $("#alert").css({"opacity":"0","transition":"1s"})
             a= "X";
              b= "O"; 
   $("#one").css("background-color","blue");
   $("#one").attr("disabled", "true")
    $("#two").attr("disabled", "true")
   for(var i=0; i<10; i++){
   $(d[i]).css("pointer-events", "auto");}
    })
 $("#two").click(function(){
    $("#alert").css({"opacity":"0","transition":"1s"})
             a= "O";
              b= "X"; 
    $("#two").css("background-color","blue");
    $("#one").attr("disabled", "true")
    $("#two").attr("disabled", "true")
     for(var i=0; i<10; i++){
   $(d[i]).css("pointer-events", "auto");}
              })
 
 $(".1").click(function(){
 var r = "."+$(this).attr("class")
 z = 3;
 ticTacToe(r); 
 })
 $(".2").click(function(){
        var r = "."+$(this).attr("class")
 z = 3;
   ticTacToe(r); 
 })
 $(".3").click(function(){
        var r = "."+$(this).attr("class")
 z = 3;
   ticTacToe(r); 
 })
 $(".4").click(function(){
        var r = "."+$(this).attr("class")
 z = 3;
   ticTacToe(r); 
 })
 $(".5").click(function(){
            $(".5").html(a);
   if (d.indexOf(".5")!==-1){
   var temp = d.splice(d.indexOf(".5"), 1)}
    g =g.concat(eval(10*temp));
    g = g.sort();
   
  $(".3").html(b);
      h.push(".3");
    d.splice(d.indexOf(".3"), 1);
 })
 $(".6").click(function(){
        var r = "."+$(this).attr("class")
 z = 4;
   ticTacToe(r); 
 })
 $(".7").click(function(){
        var r = "."+$(this).attr("class")
 z = 4;
   ticTacToe(r); 
 })
 $(".8").click(function(){
        var r = "."+$(this).attr("class")
 z = 4;
   ticTacToe(r); 
  
 })
 $(".9").click(function(){
        var r = "."+$(this).attr("class")
 z = 4;
   ticTacToe(r);
 })
 
 for(var i=0; i<10; i++){
   $(d[i]).css("pointer-events", "none"); }
 
 