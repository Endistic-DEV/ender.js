/*

Welcome to ender.js!
This is a general JavaScript library great for speeding up how fast you can make code & with other utilities.

To get started, import this script into your .html.
With this, you should not need other addons except for TypeScript.
*/

/*

ender.js is essentially it's own programming language, a unique way of displaying
web-based content.
We recommend some different ways of typing than JavaScript.
You should always try to use ; to make end of lines clear.

*/

/*
Creator Functions

ender.js can replace some functions of HTML!
Just use these following functions.
*/

let Element = function(tagIn) {
  let id = 0;
  let class_var = 0;
  let value = 0;
  let style = 0;
  let src = 0;

  return {
    setValue: function(value) {
      this.value = value;
      return this;
    },
    setId: function(id) {
      this.id = id;
      return this;
    },
    setStyle: function(style) {
      this.style = style;
      return this;
    },
    setClass: function(clas) {
      this.class_var = clas;
      return this;
    },
    setSource: function(src) {
      this.src = src;
      return this;
    },
    build: function() {
      var div = document.createElement('div');
      tagStr = `<${tagIn} src="${src}" id="${this.id}" class="${this.class_var}" style="${this.style}">${this.value}</${this.tag}>`;
      if(tagIn === "button") {
        tagStr = `<${tagIn} onclick="on_click('${tagIn}')" src="${src}" id="${this.id}" class="${this.class_var}" style="${this.style}">${this.value}</${this.tag}>`;
      }
      div.innerHTML = tagStr.trim();
      document.body.insertBefore(div, $("insert-pre"));
      return this;
    }
  }
};


/*
Utility Functions

These are functions you can use in your code to speed up development.

$ is generally used for grabbing data from the DOM.

$id("element") or $("element") - Grab an element by ID.
$class("element") - Grab elements part of a class.
*/

function $id(element) {
  return document.getElementById(element);
}

function $(element) {
  return document.getElementById(element);
}

function $class(find) {
  return document.getElementsByClassName(find);
}
/*
Utility Variables

Nothing here yet, please come back later!
*/


/*
Event Handler

Handle events using your own functions!
Do keep in mind that events that return an element return the element's ID.
Reference the element with $(id) or $id(id).
Here are the functions you can define.

on_click(button) - When a HTML button is pressed.
on_keydown(key) - When a keyboard key is pressed down.
on_change(element) - When a HTML element is changed.
on_mouseover(element) - When the user moves a mouse over an HTML element.
on_mouseout(element) - When the user moves a mouse away from an HTML element.
on_load() - When the page is finished loading.

You do not have to define these.
An error will not be thrown if these are undefined.
*/ 

document.addEventListener('keydown', function(event) {
  try { on_keydown(event.key); } catch(ex) { } 
});

document.addEventListener('onclick', function(event) {
  try { on_click(event.target.id); } catch(ex) { }
});

document.addEventListener('mouseover', function(event) {
  try { on_mouseover(event.target.id); } catch(ex) { }
});

document.addEventListener('mouseout', function(event) {
  try { on_mouseout(event.target.id); } catch(ex) { }
});

document.addEventListener('load', function(event) {
  try { on_load(); } catch(ex) { }
});