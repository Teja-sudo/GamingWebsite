$('#nav-menu-container a').on('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault();
 
      const hash = this.hash;
 
      $('html, body')
        .animate({
          scrollTop: $(hash).offset().top - 80
        },800);
    }
  });

  $(document).ready(function(){
     $("p").click(function(){
       $("form").toggle(1000);
     });
   });