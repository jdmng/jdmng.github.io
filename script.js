function play() {
    console.log("March 7th clicked!");

    var audio;
    var element = document.getElementById("march");
    var randomMarchNum = Math.floor(Math.random() * 3);

    switch(randomMarchNum) {
        case 0:
            audio = document.getElementById("audio0");
            break;
        case 1:
            audio = document.getElementById("audio1");
            break;
        case 2:
            audio = document.getElementById("audio2");
            break;
    }

    audio.play();

    element.classList.add("animateDescriptor");
    element.addEventListener( "animationend",  function() {
      element.classList.remove("animateDescriptor");    
    } );
}