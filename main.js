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

      else if ($(this).hasClass('open')===true){
        tableNumber = $(event)["0"].currentTarget.childNodes["0"].data;
        $('#formContainer').show();

        $('.tableNumber').append(`${tableNumber}`);
        $('.saveButton').on('click', ()=> {
          let name = $('.name').val();
          let number = $('.number').val();
          let people = $('.people').val();
          let table = {
            "name": name,
            "number": number,
            "people": people
          };


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

          })

          // console.log(table);

        })

        //ux exit modal by clicking outside it
        // $('.container').on('click', ()=>{
        //   $('#formContainer').removeClass('see');
        //   $('#formContainer').addClass('hidden');
        // });
        //exit button
        $('.exitButton').on('click', ()=>{
          $('#formContainer').hide();
        });
      };

    });



});
