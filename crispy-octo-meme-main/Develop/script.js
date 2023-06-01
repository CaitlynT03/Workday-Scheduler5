$(document).ready(function() {


  const dateContainer = $('#currentDay');
  
    function displayCurrentDate() {
      const now = dayjs();
      const formattedDate = now.format('dddd, MMMM D, YYYY');
      dateContainer.text(formattedDate);
    }
  
    function updateTimeblockStatus() {
      // Get the current time using Day.js
      var currentTime =dayjs().hour();
  
      $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("-")[1]);
  
        // Check if the timeblock is in the past, present, or future
        if (blockTime < currentTime) {
          $(this).addClass("past");
        } else if (blockTime ===currentTime) {
          $(this).addClass("present");
        } else {
          $(this).addClass("future");
        }
      });
    }
  
    updateTimeblockStatus();

    displayCurrentDate();
  
    $('.saveBtn').click(function() {

      var description = $(this).siblings('textarea').val();

      var timeblockID = $(this).closest('.time-block').attr('id');
  
      localStorage.setItem(timeblockID, description);
    });
  
    $(".time-block").each(function() {
      var timeblockID = $(this).attr("id");
      var description = localStorage.getItem(timeblockID);
  
      if (description !== null) {
        $(this).children(".description").val(description);
      }
    });
  
    // Event listener for clicking a timeblock
    $(".time-block").on("click", function() {
  
      var descriptionEl = $(this).find(".description");
  
      descriptionEl.focus();
    }); 
  });