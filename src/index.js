// This is an example of how to use each feature of ender.js!

// Functions
function on_load() {
  console.log("Website fully loaded!");
}
function on_click(button) {
  console.log("Got click from " + button);
  $id(button).innerText = "I have been pressed!";
}

function on_mouseover(element) {
  console.log(element);
}
// Webpage Load
new Element("h1")
  .setValue("ender.js")
  .setId("header")
  .build();
new Element("p").setValue("Hello! This website is an example of ender.js's custom html.").build();
new Element("p").setValue("Feel free to look at source code!").build();
new Element("button").setValue("This is a button!").setId("example_button").build();

on_load()