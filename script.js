function play() {
    console.log("March 7th clicked!");

    // Play a random March 7th voice clip.
    var m7AudioArray = new Array(
        document.getElementById("VO_March_7th_Basic_ATK_01"), 
        document.getElementById("VO_March_7th_Technique_01"),
        document.getElementById("VO_March_7th_Turn_Begins_02")
    );
    var randomMarchNum = Math.floor(Math.random() * m7AudioArray.length);
    m7AudioArray[randomMarchNum].play();

    // Animate button press.
    var m7Img = document.getElementById("march");
    m7Img.classList.add("animateDescriptor");
    m7Img.addEventListener( "animationend",  function() {
        m7Img.classList.remove("animateDescriptor");    
    } );
}