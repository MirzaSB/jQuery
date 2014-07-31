//Selecting Elents By Id
$("#myId"); //Note IDs must be unique per page.

//Selecting Elements by class name
$(".myClass");

//Selecting Elements by Attribute
$("input[name='first_name']"); //Beware, this can be very slow in older browsers

//Selecting Elements by Compound CSS Selector
$("#contents ul.people li");

//Pseudo-Selectors
$("a.external:first");
$("tr:odd");

//Select all input-like elements in a form.
$("#myForm:input");
$("div:visible");

//All except the first three fics
$("div:gt(2)");

//All currently animated divs.
$("div.animated");

//Find all <a> elements whose rel attribute ends with "thinger".
$("a[rel$='thinger']");

// Testing whether a selection contains elements.
if ( $( "div.foo" ).length ) {
    //...
}

// Refining selections.
$( "div.foo" ).has( "p" );         // div.foo elements that contain <p> tags
$( "h1" ).not( ".bar" );           // h1 elements that don't have a class of bar
$( "ul li" ).filter( ".current" ); // unordered list items with class of current
$( "ul li" ).first();              // just the first unordered list item
$( "ul li" ).eq( 5 );              // the sixth

