$(document).ready(function() {
  
  $("#formOne").submit(function(event) {
    event.preventDefault();
    console.log("Submit form successfully reached.");
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    const input = [person1Input,person2Input,animalInput,exclamationInput,verbInput,nounInput];

  

  

    $("#story").text("")
    input.forEach(function(element){
      $("#story").append(element);

    // //   // $("#story").append("oneday,"+element+"and"+element+"were walking through the woods, when suddenly a giant"+element+"appeared"+element);
    // });

   






//  $(".person1").text(person1Input);
//     $(".person2").text(person2Input);
//     $(".animal").text(animalInput);
//     $(".exclamation").text(exclamationInput);
//     $(".verb").text(verbInput);
//     $(".noun").text(nounInput);/

    $("#story").show();
  });
});

