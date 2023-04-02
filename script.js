document.addEventListener("click", (e) =>{
  // Create span for snowflake
  var snowflake = document.createElement("span");
  snowflake.classList.add("snowflake");

  // Set position of snowflake to mouse pointer's position
  snowflake.style.left = e.offsetX + "px";
  snowflake.style.top = e.offsetY + "px";

  // Select random number between 20 and 100
  var size = Math.random() * (100 - 20 + 1) + 20;
});