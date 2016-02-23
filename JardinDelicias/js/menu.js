$(document).ready(function(){

//hide/show nav-bars
/*   $("#J1").on('show.bs.collapse', function(){
      $("#J2").collapse('hide');
   });
   $("#J2").on('show.bs.collapse', function(){
      $("#J1").collapse('hide');
   });*/
// check collapse states 


var storage = $.localStorage;

$('.collapse').on('hidden.bs.collapse', function(){

   storage.remove( this.id);
 //  console.log('size_of' +storage.keys().length);
});

$('.collapse').on('shown.bs.collapse',function(){
   

   storage.set( this.id, true);

   for(i=0; i < storage.keys().length; i++){
//      console.log('elementos_' + i);
//      console.log(storage.keys());
   };

//   console.log('size_on' +storage.keys().length);
});

$('.collapse').collapse().each(function(){

/*   if(storage.get( this.id)==true){
      $(this).collapse('show');
   }*/

   if(storage.get(this.id) == true){

      console.log('true');
      $(this).collapse('show');

   }else{
      console.log('false');
      $(this).collapse('hide');
   }
   
});


// menus
   function garden_nav(id){
      this.Id=id;
      this.name = 'jardin#';
      this.items = 4;
   }
   

   function menu(name){
      this.name = ' ';
      this.gardens = [new garden_nav('J1'), new garden_nav('J2')]
   }
   var jardin = new menu('Unloquer');
   for(i=0; i < jardin.gardens.length; i++){

      var mymodalid='#'+ jardin.gardens[i].Id;
   //   console.log($("#g-control-1").data('toggle'));
   }
}); 
