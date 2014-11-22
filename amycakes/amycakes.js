$(document).ready(function() {
  var image = $(".img-container img");
  var body = $("body")
  $(document).scroll(function() {
    var top = body.scrollTop() / 2;
    image.css('transform', 'translate(0, ' + top + 'px)');
    if(top > 70) {
      image.css('opacity', (170-top)/100);
    }
  })
});




// Paralax

// var = image = $(".img-container img");
// var body = $("body")
// $(document).scroll(function() {
// var top = body.scrollTop()/2;
// images.css('transform', 'translate(0, ' + top + 'px');
// })

// })


// <SCRIPT LANGUAGE="JavaScript">

// var num=1
// img1 = new Image ()
// img1.src = "lacing_slider.jpg"
// img2 = new Image ()
// img2.src = "pretty_choc_slider.jpg"
// img3 = new Image ()
// img3.src = "whisk_slider.jpg"
// img4 = new Image ()
// img4.src = "cupcakes_home.jpg"

// text1 = "Text for Picture One"
// text2 = "Text for Picture Two"
// text3 = "Text for Picture Three"
// text4 = "Text for Picture Four"

// function slideshowUp()
// {
// num=num+1
// if (num==5)
// {num=1}
// document.mypic.src=eval("img"+num+".src")
// document.joe.burns.value=eval("text"+num)
// }

// function slideshowBack()
// {
// num=num-1
// if (num==0)
// {num=4}
// document.mypic.src=eval("img"+num+".src")
// document.joe.burns.value=eval("text"+num)
// }

// </SCRIPT>
// }