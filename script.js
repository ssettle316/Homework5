$(document).ready(function(){
    $(".saveBtn").on("click", function(){
    
    var timeBlock = $(this).parent().attr("id");
    var textField = $(this).siblings(".description").val();
    console.log(timeBlock)
    console.log(textField)
        
        localStorage.setItem(timeBlock, textField);

    })
    // Creating value variable to get textarea content
    // Create time variable to get the time when saved

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

        //copy above line for hour 10 through the rest


function hourUpdater(){
    var currentHour = moment().hours();
    console.log(currentHour);

    $(".time-block").each(function(){
        var blockHour = parseInt($(this).attr("id").split("-")[1]);

        //conditional 

        if(blockHour < currentHour){
            $(this).addClass("past");
        }
        else if(blockHour === currentHour){
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else
        {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }

    });
}
hourUpdater();

$("currentDay").text(moment().format("dddd, MMM Do"));
});
