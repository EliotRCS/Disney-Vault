
var h = window.innerHeight;
var w = window.innerWidth;

var timer = false;

var video;
var intervalID;
var intervalID2;

var stop = false;

var hide = false;

var g;


window.onbeforeunload = function () {
  window.scrollTo(0, h);
}




window.onload = function() {
	
	init();

}
function init(){
	
	console.log('Start');
           
$('.box').on('click', function(){
  console.log('tinkerbell clicked');
  window.scrollTo(0,h);
})
$('.boxjungle').on('click', function(){
  console.log('tinkerbell clicked');
  $('#holder').css('transform', 'translateX(-100vw)');
})


//$(".animate").animate({top: '450px'}, 'slow');  //animate the opening title to 'fly in'


$(document).ready(function(){
    var showCin = localStorage.getItem('imageshownCin');
    if(showCin === 'true'){
        $('#cinderellaIMG3').show();
        //localStorage.removeItem('imageshownCin');
    }

    var showMul = localStorage.getItem('imageshownMul');
    if(showMul === 'true'){
        $('#mulanIMG3').show();
        //localStorage.removeItem('imageshownMul');
    }

    var showMoa = localStorage.getItem('imageshownMoa');
    if(showMoa === 'true'){
        $('#moanaIMG3').show();
        //localStorage.removeItem('imageshownMoa');
    }

    var showZoo = localStorage.getItem('imageshownZoo');
    if(showZoo === 'true'){
        $('#zootopiaIMG3').show();
        //localStorage.removeItem('imageshownZoo');
    }

    var showLio = localStorage.getItem('imageshownLio');
    if(showLio === 'true'){
        $('#lionkingIMG3').show();
        //localStorage.removeItem('imageshownLio');
    }

    var showTar = localStorage.getItem('imageshownTar');
    if(showTar === 'true'){
        $('#tarzanIMG3').show();
        //localStorage.removeItem('imageshownTar');
    }

    var showTre = localStorage.getItem('imageshownTre');
    if(showTre === 'true'){
        $('#treasureIMG3').show();
        //localStorage.removeItem('imageshownTre');
    }

    var showLil = localStorage.getItem('imageshownLil');
    if(showLil === 'true'){
        $('#liloIMG3').show();
        //localStorage.removeItem('imageshownLil');
    }

    var showWal = localStorage.getItem('imageshownWal');
    if(showWal === 'true'){
        $('#walleIMG3').show();
        //localStorage.removeItem('imageshownWal');
    }
});



$('.images').on('click', function(){  //STRUCTURE FOR PLAYING HIDDEN VIDEOS     //NEED TO FIND A WAY TO ONLY PLAY ONE TRAILER ACCORDING TO WHAT IMAGE IS CLICKED

var id = $(this).attr('id');
console.log(id);

if(this.id==='walleIMG'){
	$('.videoholder').hide();
	$('#walleTR iframe').each(function(){  //this currently plays all trailers at the same time. Need to say only play 1 trailer. IS THERE A WAY TO STORE ALL THE TRAILERS IN ONE VARIABLE TO CALL HERE? EG/video = liloTRs
  			this.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
  		})
	$('#walleTR').show();
	
}

if(this.id==='liloIMG'){
	$('.videoholder').hide();
	$('#liloTR iframe').each(function(){  //this currently plays all trailers at the same time. Need to say only play 1 trailer. IS THERE A WAY TO STORE ALL THE TRAILERS IN ONE VARIABLE TO CALL HERE? EG/video = liloTRs
  			this.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
  		})
	$('#liloTR').show();
	
}

if(this.id==='treasureIMG'){
	$('.videoholder').hide();
  $('.videoholder2').hide();
  $('.videoholder3').hide();
  $('.videoholder4').hide();
	$('#treasureTR iframe').each(function(){  //this currently plays all trailers at the same time. Need to say only play 1 trailer. IS THERE A WAY TO STORE ALL THE TRAILERS IN ONE VARIABLE TO CALL HERE? EG/video = liloTRs
  			this.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
  		})
	$('#treasureTR').show();
}

if(this.id==='tarzanIMG'){
	$('.videoholder').hide();
	$('.videoholder2').hide();
  $('.videoholder3').hide();
  $('.videoholder4').hide();
	$('#tarzanTR iframe').each(function(){  //this currently plays all trailers at the same time. Need to say only play 1 trailer. IS THERE A WAY TO STORE ALL THE TRAILERS IN ONE VARIABLE TO CALL HERE? EG/video = liloTRs
  			this.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
  		})
	$('#tarzanTR').show();
}

if(this.id==='lionkingIMG'){
  $('.videoholder').hide();
  $('.videoholder2').hide();
  $('.videoholder3').hide();
  $('.videoholder4').hide();
  $('#lionkingTR iframe').each(function(){  //this currently plays all trailers at the same time. Need to say only play 1 trailer. IS THERE A WAY TO STORE ALL THE TRAILERS IN ONE VARIABLE TO CALL HERE? EG/video = liloTRs
        this.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
      })
  $('#lionkingTR').show();
}

if(this.id==='zootopiaIMG'){
  $('.videoholder').hide();
  $('.videoholder2').hide();
  $('.videoholder3').hide();
  $('.videoholder4').hide();
  $('#zootopiaTR iframe').each(function(){  //this currently plays all trailers at the same time. Need to say only play 1 trailer. IS THERE A WAY TO STORE ALL THE TRAILERS IN ONE VARIABLE TO CALL HERE? EG/video = liloTRs
        this.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
      })
  $('#zootopiaTR').show();
}

if(this.id==='moanaIMG'){
  $('.videoholder').hide();
  $('.videoholder2').hide();
  $('.videoholder3').hide();
  $('.videoholder4').hide();
  $('#moanaTR iframe').each(function(){  //this currently plays all trailers at the same time. Need to say only play 1 trailer. IS THERE A WAY TO STORE ALL THE TRAILERS IN ONE VARIABLE TO CALL HERE? EG/video = liloTRs
        this.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
      })
  $('#moanaTR').show();
  
}

if(this.id==='mulanIMG'){
  $('.videoholder').hide();
  $('.videoholder2').hide();
  $('.videoholder3').hide();
  $('.videoholder4').hide();
  $('#mulanTR iframe').each(function(){  //this currently plays all trailers at the same time. Need to say only play 1 trailer. IS THERE A WAY TO STORE ALL THE TRAILERS IN ONE VARIABLE TO CALL HERE? EG/video = liloTRs
        this.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
      })
  $('#mulanTR').show();
  
}

if(this.id==='cinderellaIMG'){
  $('.videoholder').hide();
  $('.videoholder2').hide();
  $('.videoholder3').hide();
  $('.videoholder4').hide();
  $('#cinderellaTR iframe').each(function(){  //this currently plays all trailers at the same time. Need to say only play 1 trailer. IS THERE A WAY TO STORE ALL THE TRAILERS IN ONE VARIABLE TO CALL HERE? EG/video = liloTRs
        this.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
      })
  $('#cinderellaTR').show();
  
}



    if(stop===true){

    	$('.videoholder iframe').each(function(){
  			this.contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":"0"}', '*');
  			this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
  			$('.videoholder').hide();
  		})
  		$('.videoholder2 iframe').each(function(){
  			this.contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":"0"}', '*');
  			this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
  			$('.videoholder2').hide();
  		})
      $('.videoholder3 iframe').each(function(){
        this.contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":"0"}', '*');
        this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        $('.videoholder3').hide();
      })
      $('.videoholder4 iframe').each(function(){
        this.contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":"0"}', '*');
        this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        $('.videoholder4').hide();
      })
  	
  	stop=false;
	}
    
    else{
		//$('video iframe').each(function(){  //this currently plays all trailers at the same time. Need to say only play 1 trailer. IS THERE A WAY TO STORE ALL THE TRAILERS IN ONE VARIABLE TO CALL HERE? EG/video = liloTRs
  			//this.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
  			
  			
  		//})

    	

    	stop=true;
    }

})


$('.imagelist').on('click', function(){  //STRUCTURE FOR PLAYING HIDDEN VIDEOS     //NEED TO FIND A WAY TO ONLY PLAY ONE TRAILER ACCORDING TO WHAT IMAGE IS CLICKED

var id = $(this).attr('id');
console.log(id);

if(this.id==='walleIMG3'){
	$('.videoholder').hide();
  $('.videoholder2').hide();
  $('.videoholder3').hide();
  $('.videoholder4').hide();
	console.log("WALLE CLICKED")
	$('#walleTR3 iframe').each(function(){  //this currently plays all trailers at the same time. Need to say only play 1 trailer. IS THERE A WAY TO STORE ALL THE TRAILERS IN ONE VARIABLE TO CALL HERE? EG/video = liloTRs
  			this.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
  		})
	$('#walleTR3').show();
	
}

if(this.id==='liloIMG3'){
	$('.videoholder').hide();
  $('.videoholder2').hide();
  $('.videoholder3').hide();
  $('.videoholder4').hide();
	$('#liloTR3 iframe').each(function(){  //this currently plays all trailers at the same time. Need to say only play 1 trailer. IS THERE A WAY TO STORE ALL THE TRAILERS IN ONE VARIABLE TO CALL HERE? EG/video = liloTRs
  			this.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
  		})
	$('#liloTR3').show();
	
}

if(this.id==='treasureIMG3'){
	$('.videoholder').hide();
  $('.videoholder2').hide();
  $('.videoholder3').hide();
  $('.videoholder4').hide();
	$('#treasureTR3 iframe').each(function(){  //this currently plays all trailers at the same time. Need to say only play 1 trailer. IS THERE A WAY TO STORE ALL THE TRAILERS IN ONE VARIABLE TO CALL HERE? EG/video = liloTRs
  			this.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
  		})
	$('#treasureTR3').show();
}

if(this.id==='tarzanIMG3'){
	$('.videoholder').hide();
  $('.videoholder2').hide();
  $('.videoholder3').hide();
  $('.videoholder4').hide();
	$('#tarzanTR3 iframe').each(function(){  //this currently plays all trailers at the same time. Need to say only play 1 trailer. IS THERE A WAY TO STORE ALL THE TRAILERS IN ONE VARIABLE TO CALL HERE? EG/video = liloTRs
  			this.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
  		})
	$('#tarzanTR3').show();
}

if(this.id==='lionkingIMG3'){
  $('.videoholder').hide();
  $('.videoholder2').hide();
  $('.videoholder3').hide();
  $('.videoholder4').hide();
  $('#lionkingTR3 iframe').each(function(){  //this currently plays all trailers at the same time. Need to say only play 1 trailer. IS THERE A WAY TO STORE ALL THE TRAILERS IN ONE VARIABLE TO CALL HERE? EG/video = liloTRs
        this.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
      })
  $('#lionkingTR3').show();
}

if(this.id==='zootopiaIMG3'){
  $('.videoholder').hide();
  $('.videoholder2').hide();
  $('.videoholder3').hide();
  $('.videoholder4').hide();
  $('#zootopiaTR3 iframe').each(function(){  //this currently plays all trailers at the same time. Need to say only play 1 trailer. IS THERE A WAY TO STORE ALL THE TRAILERS IN ONE VARIABLE TO CALL HERE? EG/video = liloTRs
        this.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
      })
  $('#zootopiaTR3').show();
}

if(this.id==='moanaIMG3'){
  $('.videoholder').hide();
  $('.videoholder2').hide();
  $('.videoholder3').hide();
  $('.videoholder4').hide();
  $('#moanaTR3 iframe').each(function(){  //this currently plays all trailers at the same time. Need to say only play 1 trailer. IS THERE A WAY TO STORE ALL THE TRAILERS IN ONE VARIABLE TO CALL HERE? EG/video = liloTRs
        this.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
      })
  $('#moanaTR3').show();
}

if(this.id==='mulanIMG3'){
  $('.videoholder').hide();
  $('.videoholder2').hide();
  $('.videoholder3').hide();
  $('.videoholder4').hide();
  $('#mulanTR3 iframe').each(function(){  //this currently plays all trailers at the same time. Need to say only play 1 trailer. IS THERE A WAY TO STORE ALL THE TRAILERS IN ONE VARIABLE TO CALL HERE? EG/video = liloTRs
        this.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
      })
  $('#mulanTR3').show();
}

if(this.id==='cinderellaIMG3'){
  $('.videoholder').hide();
  $('.videoholder2').hide();
  $('.videoholder3').hide();
  $('.videoholder4').hide();
  $('#cinderellaTR3 iframe').each(function(){  //this currently plays all trailers at the same time. Need to say only play 1 trailer. IS THERE A WAY TO STORE ALL THE TRAILERS IN ONE VARIABLE TO CALL HERE? EG/video = liloTRs
        this.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
      })
  $('#cinderellaTR3').show();
}



    if(stop===true){

    	$('.videoholder iframe').each(function(){
  			this.contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":"0"}', '*');
  			this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
  			$('.videoholder').hide();
  		})
  		$('.videoholder2 iframe').each(function(){
  			this.contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":"0"}', '*');
  			this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
  			$('.videoholder2').hide();
  		})
  		$('.videoholder3 iframe').each(function(){
  			this.contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":"0"}', '*');
  			this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
  			$('.videoholder3').hide();
  		})
      $('.videoholder4 iframe').each(function(){
        this.contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":"0"}', '*');
        this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        $('.videoholder4').hide();
      })
  	
  	stop=false;
	}
    
    else{
		//$('video iframe').each(function(){  //this currently plays all trailers at the same time. Need to say only play 1 trailer. IS THERE A WAY TO STORE ALL THE TRAILERS IN ONE VARIABLE TO CALL HERE? EG/video = liloTRs
  			//this.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
  			
  			
  		//})

    	

    	stop=true;
    }

})

//SHOWS 
$('.imagelist3').on('click', function(){
  var id = $(this).attr('id');
  console.log(id);

  if(hide==true){
    if(this.id==='walleIMG4'){
      $('#walleIMG3').hide();
      var Walquery = $('#walleIMG3');
      var WalisVisible = Walquery.is(':visible');
      if (WalisVisible === false) {
        localStorage.removeItem("imageshownWal");
      }
    }

    if(this.id==='liloIMG4'){
      $('#liloIMG3').hide();
      var Lilquery = $('#liloIMG3');
      var LilisVisible = Lilquery.is(':visible');
      if (LilisVisible === false) {
        localStorage.removeItem("imageshownLil");
      }
    }

    if(this.id==='treasureIMG4'){
      $('#treasureIMG3').hide();
      var Trequery = $('#treasureIMG3');
      var TreisVisible = Trequery.is(':visible');
      if (TreisVisible === false) {
        localStorage.removeItem("imageshownTre");
      }
    }

    if(this.id==='tarzanIMG4'){
      console.log('hide');
      $('#tarzanIMG3').hide();
      var Tarquery = $('#tarzanIMG3');
      var TarisVisible = Tarquery.is(':visible');
      if (TarisVisible === false) {
        localStorage.removeItem("imageshownTar");
      }
    }

    if(this.id==='lionkingIMG4'){
      console.log('hide');
      $('#lionkingIMG3').hide();
      var Lioquery = $('#lionkingIMG3');
      var LioisVisible = Lioquery.is(':visible');
      if (LioisVisible === false) {
        localStorage.removeItem("imageshownLio");
      }
    }

    if(this.id==='zootopiaIMG4'){
      console.log('hide');
      $('#zootopiaIMG3').hide();
      var Zooquery = $('#zootopiaIMG3');
      var ZooisVisible = Zooquery.is(':visible');
      if (ZooisVisible === false) {
        localStorage.removeItem("imageshownZoo");
      }
    }

    if(this.id==='moanaIMG4'){
      console.log('hide');
      $('#moanaIMG3').hide();
      var Moaquery = $('#moanaIMG3');
      var MoaisVisible = Moaquery.is(':visible');
      if (MoaisVisible === false) {
        localStorage.removeItem("imageshownMoa");
      }
    }

    if(this.id==='mulanIMG4'){
      console.log('hide');
      $('#mulanIMG3').hide();
      var Mulquery = $('#mulanIMG3');
      var MulisVisible = Mulquery.is(':visible');
      if (MulisVisible === false) {
        localStorage.removeItem("imageshownMul");
      }
    }

    if(this.id==='cinderellaIMG4'){
      console.log('hide');
      $('#cinderellaIMG3').hide();
      var Cinquery = $('#cinderellaIMG3');
      var CinisVisible = Cinquery.is(':visible');
      if (CinisVisible === false) {
        localStorage.removeItem("imageshownCin");
      }
    }

    hide=false;
  }

  else{
    if(this.id==='walleIMG4'){
      console.log('show');
      $('#walleIMG3').show();
      var Walquery = $('#walleIMG3');
      var WalisVisible = Walquery.is(':visible');
      if (WalisVisible === true) {
        localStorage.setItem("imageshownWal", "true");
      }
    }

    if(this.id==='liloIMG4'){
      $('#liloIMG3').show();
      var Lilquery = $('#liloIMG3');
      var LilisVisible = Lilquery.is(':visible');
      if (LilisVisible === true) {
        localStorage.setItem("imageshownLil", "true");
      }
    }

    if(this.id==='treasureIMG4'){
      $('#treasureIMG3').show();
      var Trequery = $('#treasureIMG3');
      var TreisVisible = Trequery.is(':visible');
      if (TreisVisible === true) {
        localStorage.setItem("imageshownTre", "true");
      }
    }

    if(this.id==='tarzanIMG4'){
      $('#tarzanIMG3').show();
      var Tarquery = $('#tarzanIMG3');
      var TarisVisible = Tarquery.is(':visible');
      if (TarisVisible === true) {
        localStorage.setItem("imageshownTar", "true");
      }
    }

    if(this.id==='lionkingIMG4'){
      $('#lionkingIMG3').show();
      var Lioquery = $('#lionkingIMG3');
      var LioisVisible = Lioquery.is(':visible');
      if (LioisVisible === true) {
        localStorage.setItem("imageshownLio", "true");
      }
    }

    if(this.id==='zootopiaIMG4'){
      $('#zootopiaIMG3').show();
      var Zooquery = $('#zootopiaIMG3');
      var ZooisVisible = Zooquery.is(':visible');
      if (ZooisVisible === true) {
        localStorage.setItem("imageshownZoo", "true");
      }
    }

    if(this.id==='moanaIMG4'){
      $('#moanaIMG3').show();
      var Moaquery = $('#moanaIMG3');
      var MoaisVisible = Moaquery.is(':visible');
      if (MoaisVisible === true) {
        localStorage.setItem("imageshownMoa", "true");
      }
    }

    if(this.id==='mulanIMG4'){
      $('#mulanIMG3').show();
      var Mulquery = $('#mulanIMG3');
      var MulisVisible = Mulquery.is(':visible');
      if (MulisVisible === true) {
        localStorage.setItem("imageshownMul", "true");
      }
    }

    if(this.id==='cinderellaIMG4'){
      console.log('got here')
      $('#cinderellaIMG3').show();
      var Cinquery = $('#cinderellaIMG3');
      var CinisVisible = Cinquery.is(':visible');
      if (CinisVisible === true) {
        localStorage.setItem("imageshownCin", "true");
      }
    }

    hide=true;
  }
  

  
})



document.getElementById("boxtop").addEventListener("mouseenter", showtexttop);
document.getElementById("boxtop").addEventListener("mouseleave", showtexttop);
document.getElementById("boxright").addEventListener("mouseenter", showtextright);
document.getElementById("boxright").addEventListener("mouseleave", showtextright);
document.getElementById("boxbot").addEventListener("mouseenter", showtextbot);
document.getElementById("boxbot").addEventListener("mouseleave", showtextbot);
document.getElementById("boxleft").addEventListener("mouseenter", showtextleft);
document.getElementById("boxleft").addEventListener("mouseleave", showtextleft);



//document.getElementById("godown").addEventListener("mouseenter", scrolldown);  
document.getElementById("godown1").addEventListener("mouseenter", scrolldown1);



document.getElementById("goup1").addEventListener("mouseenter", scrollup1);   
//document.getElementById("goup2").addEventListener("mouseenter", scrollup2); 
//document.getElementById("goup3").addEventListener("mouseenter", scrollup3);    //DONT NEED THIS
//document.getElementById("goup4").addEventListener("mouseenter", scrollup4);   //DONT NEED THIS

$('#arrow-left').on('click', function(){
  document.getElementById("holder").style.transform = "none";
}

document.getElementById("goleft").addEventListener("mouseenter", scrollLeft);
document.getElementById("goright").addEventListener("mouseenter", scrollRight);

$('#arrow-right').on('click', function(){
  document.getElementById("holder").style.transform = "translateX(-100vw)"; 
}
//document.getElementById("goright2").addEventListener("mouseenter", scrollRight2);




document.getElementById("toggle");  //WHAT DOES THIS EVEN DO




//var left;
//var top;

//$('.drag').draggable({
  //revert: true,
  //proxy: 'clone',
  //drag: function() {
  	//console.log($(this));
  	//console.log('test');  //NOT RUNNING

  	//THE ERROR IS THAT LEFT AND TOP ARE BEING SET BEFORE YOUVE EVEN MOVED ANYTHING, RATHER THEN ONCE THE USER STOPS DRAGGING
  	

    //$(this).draggable('proxy').css('z-index', 10);
  // $(this).draggable('proxy').css('position', 'absolute');
    //$(this).draggable('proxy').css('overflow', 'visible');
    //$(this).css("cursor", "initial");
    
    //var offset = $(this).offset();
            //var xPos = offset.left;
            //var yPos = offset.top;
            //console.log(offset);
            //$('#posX').text('x: ' + xPos);
            //$('#posY').text('y: ' + yPos);
    
  //},
  //onStartDrag:function(e){
        //$(this).draggable('options').cursor='move';

		//var offset = $(this).offset();
          //  var xPos = offset.left;
            //var yPos = offset.top;
            //console.log(offset)
            //console.log(offset.left)
//},
	//onDrag:function(e){
        //var offset = $(this).offset();
        //console.log(offset);
 
 //var top= $('section5').offset.top;
 //var top= offset.top;
 //var left = offset.left;
 //console.log(left);
//var cloned = $(this)[0].outerHTML;
//console.log(cloned);
//console.log(left);
   
   //cloned.style.position = "absolute";
  // cloned.style.left = left;
   //cloned.style.top = top;
  //var d = document.getElementById('yourDivId');
  //cloned.style.position = "absolute";
  //cloned.id = 'walleIMG';
  //var newleft = left - window.innerWidth;
  //var newtop = top - window.innerHeight;
  //console.log(window.innerWidth);
  //console.log(newleft);
  //$('div.btn-group').append('<div style = "position:absolute; left:1700px; top:1602px;">'+cloned+'</div>');
  //$('div.btn-group').append('<div style = "position:absolute; left:'+newleft+'px; top:'+newtop+'px;">'+cloned+'</div>');
  
  //cloned.style.top = yPos+'px';


    //}

//});   





}  //END OF ON LOAD (I THINK)

function clearIMG(){
  $('.imagelist').hide();
  localStorage.clear();

  $('.videoholder').hide();
  $('.videoholder2').hide();
  $('.videoholder3').hide();
  $('.videoholder4').hide();

  $('.videoholder iframe').each(function(){
    this.contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":"0"}', '*');
    this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    $('.videoholder').hide();
  })
  $('.videoholder2 iframe').each(function(){
    this.contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":"0"}', '*');
    this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    $('.videoholder2').hide();
  })
  $('.videoholder3 iframe').each(function(){
    this.contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":"0"}', '*');
    this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    $('.videoholder3').hide();
  })
  $('.videoholder4 iframe').each(function(){
    this.contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":"0"}', '*');
    this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    $('.videoholder4').hide();
  })
}

function showlist(){
	$("#toggle").toggle();
}

function showtexttop(){
  $("#texttop").toggle();
    $(".tinkerbellHOME").toggle();
}
function showtextright(){
  $("#textright").toggle();
    $(".tinkerbellHOME").toggle();
}
function showtextbot(){
  $(".tinkerbellHOME").toggle();
  $("#textbot").toggle();
}
function showtextleft(){
  $("#textleft").toggle();
  $(".tinkerbellHOME").toggle();
}


//document.getElementById("goright").style.transform = "translate(0vw)";

intervalID = window.setInterval(helpmessage, 6000); //every 5secs show the help message
intervalID2 = window.setInterval(helpmessage2, 6200);
intervalID3 = window.setInterval(helpmessage3, 6800);

function helpmessage(){
	$(".helpmessage").toggle(1000);
  $(".helpmessagebot").toggle(1000);
  $(".helpmessageleft").toggle(1000);
	
}
//function helpmessage(){
  
  
//}

function helpmessage2(){
	$(".helpmessage2").toggle(1000);
	
}

function helpmessage3(){
	$(".helpmessage3").toggle(1000);
	
}


function scrollLeft(){
	//window.scrollTo(0,h);   
	console.log("transform none");
	document.getElementById("holder").style.transform = "none";  //remember that your doing get element by ID!!! so dont try calling a class silly
}


function scrollRight(){
	window.scrollTo(w,h);    
	
}

function scrollRight2(){
	//window.scrollTo(w,h);
	document.getElementById("holder").style.transform = "translateX(-100vw)";    
	
}




function scrolldown(){
	window.scrollTo(0,h);

}

//if(timer=true){                           //HOW DO I SET TIMER TO "TRUE", WHEN THE MOUSE HAS ENTERED THE PINK BOX (DIV)
	//var delayinMilliseconds = 1000;
//setTimeout(
	function scrolldown1(){
	window.scrollTo(0,(h*2));

}//, delayinMilliseconds);
//}






function scrollup1(){
	window.scrollTo(0,0);

}


function scrollup2(){
	window.scrollTo(0,h); //was 1300

}


//function scrollup3(){
	//window.scrollTo(0,2700);

//}

//function scrollup4(){
	//window.scrollTo(0,3300);

//}




	




//item to drop



function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("toggle");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}