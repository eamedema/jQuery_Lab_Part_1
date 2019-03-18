"use strict";

$(()=> {


    $(".table").hover(
     function(){
        //hover status of open table
         if($(this).hasClass('open')){
             $(this).css('box-shadow', 'inset 0 0 0 12px #008000');
             $(this).css("cursor", "cell");
         }
         //hover status of reserved tables
         if($(this).hasClass('reserved')){
             $(this).css('cursor', 'not-allowed');
             $(this).css('box-shadow', 'inset 0 0 0 10px #E34E45');
         }
     },
     function(){
         $(this).css('box-shadow', 'none');
     }
    );


    $('.table').on('click', function(event){
      let tableNumber;
      if ($(this).hasClass('reserved')===true){
        $('#reservedTable').show();

        //exit button to toggle modal
        $('.exitButton').on('click', ()=>{
          $('#reservedTable').hide();
        })
        //button to get rid of reservation
        $('.clear').on('click', ()=> {
          $(this).removeClass('reserved');
          $(this).addClass('open');
          $('#reservedTable').hide();
        });
      }

      //if the table is open makes form and other interactivity
      else if ($(this).hasClass('open')===true){
        tableNumber = $(this).text();
        $('#formContainer').show();

        $('.tableNumber').append(`<p>Table Number: ${tableNumber}</p>`);
        $('.saveButton').on('click', ()=> {

          //change the reserved status
          $(this).removeClass('open');
          $(this).addClass('reserved');
          //hide the form elements
          $('#formContainer').hide();

          //show confirmation message
          $('#confirmation').show();

          //exit button hides confirmation pop-up
          $('.exitButton').on('click', ()=>{
            $('#confirmation').hide();
            $('.tableNumber').empty();
          });

        });

        //exit button
        $('.exitButton').on('click', ()=>{
          $('#formContainer').hide();
          $('.tableNumber').empty();
        });
      };

    });

});






        //ux exit modal by clicking outside it
        // $('.container').on('click', ()=>{
        //   $('#formContainer').removeClass('see');
        //   $('#formContainer').addClass('hidden');
        // });
