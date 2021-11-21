$('#search').keyup(function(){

    var searchField=$('#search').val();
    var myExp =new RegExp(searchField,"i");


    $.getJSON('data.json', function (data) {
  
           // console.log(data);

           var output ='<ul class="searchresults">';

           $.each(data,function(key,val){
               if((val.nama.search(myExp) !=-1) || (val.bio.search(myExp) != -1) ){
               output += '<li>';
               output += '<h2>' + val.nama + '</h2>';
               output += '<img src="img/' + val.imgname + '.jpg" alt="'+ val.imgname + '" height=160px; width=160px; />';
               output += '<p>' + val.bio + '</p>';
               output += '</li>';
               }

           });


           output +='</ul>';
           $('#update').html(output);
        }
    );

});