$(document).ready(function() {
  $("form#celebrity-quiz").submit(function(event) {
    event.preventDefault();
    const celeb1 = parseInt($("#celebrity-choice-1").val());
    const celeb2 = parseInt($("#celebrity-choice-2").val());
    const celeb3 = parseInt($("#celebrity-choice-3").val());
    const total = celeb1 + celeb2 + celeb3;
    
    if (total < 5) {
      let resultVal = "Republican";
      $("#political-party").text(resultVal);
      }
      else if (total >= 5 && 8) { 
        let resultVal  = "Green Party";
        $("#political-party").text(resultVal);
      } else {
        let resultVal = "Communist";
        $("#political-party").text(resultVal);
      }
      
      $("#result").show();

  });
});

//  } else {
//   alert('Please enter your age.');
// }


// rep -  1
// green - 2
// com -3
// Co-authored-by: Amy Young <youngamy1223@gmail.com>
// Co-authored-by: Cesar Lopez <Lopez.cesar.aug@gmail.com>
