"use strict";

$(() => {
  let tableNumber; // Now a variable accessible to all functions, this keeps track of the selected table
  // Table hover
  $(".table").hover(addTableHover, removeHover); // You can give multiple functions to event listeners, they will run in order
  function addTableHover() {
    // console.log(' in handle table hover', this);
    if ($(this).hasClass('open')) {
      $(this).css('box-shadow', 'inset 0 0 0 12px #008000');
      $(this).css("cursor", "cell");
    }
    // Hover status of reserved tables
    if ($(this).hasClass('reserved')) {
      $(this).css('cursor', 'not-allowed');
      $(this).css('box-shadow', 'inset 0 0 0 10px #E34E45');
    }
  }
  function removeHover() {
    $(this).css('box-shadow', 'none');
  }

  // Exit Modal Button (the 'x')
  $('#modalExit').on('click', handleExitModalClick);
  function handleExitModalClick() {
    // console.log('tableNumber exit button outside click: ', { tableNumber });
    $('#formContainer').hide();
    $('.tableNumber').empty();
  }

  // Confirm Exit Reservation Button (the button that says 'Exit')
  $('#modalConfirmExit').on('click', handleConfirmExitClick);
  function handleConfirmExitClick() {
    // console.log('tableNumber exit button click: ', tableNumber)
    $('#confirmation').hide();
    $('.tableNumber').empty();
  }


  // Choose Another Table Exit Button
  $('#modalChooseAnotherExit').on('click', handleChooseAnotherTableClick);
  function handleChooseAnotherTableClick() {
    $('#reservedTable').hide();
  }

  // Table Click
  $('.table').on('click', handleTableClick);
  function handleTableClick() {

    console.log('tableNumber on table click (expecting undefined): ', { tableNumber });
    if ($(this).hasClass('reserved') === true) {
      $('#reservedTable').show();

      // //exit button to toggle modal 
      // $('#modalExit').on('click', () => {
      //   $('#reservedTable').hide();
      // })
      //button to get rid of reservation

    }

    //if the table is open makes form and other interactivity
    else if ($(this).hasClass('open') === true) {
      tableNumber = $(this).text();
      console.log('tableNumber on table click (expecting it to be defined): ', { tableNumber });
      $('#formContainer').show();

      $('.tableNumber').append(`<p>Table Number: ${tableNumber}</p>`);
    };
  }

  // Save Button
  $('.saveButton').on('click', handleSaveClick);
  function handleSaveClick() {
    // console.log('tableNumber save button click: ', { tableNumber });
    //change the reserved status
    $(`#table-${tableNumber}`).removeClass('open');
    $(`#table-${tableNumber}`).addClass('reserved');
    //hide the form elements
    $('#formContainer').hide();

    //show confirmation message
    $('#confirmation').show();

    //exit button hides confirmation pop-up
  }

  // Clear Button
  $('.clear').on('click', handleClearButtonClick);
  function handleClearButtonClick() {
    $(`#table-${tableNumber}`).removeClass('reserved');
    $(`#table-${tableNumber}`).addClass('open');
    $('#reservedTable').hide();
  }
});