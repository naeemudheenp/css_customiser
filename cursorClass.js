document.addEventListener("click", showClassName);

function showClassName() {
 
  var hoveredElement = event.target;
  var className = hoveredElement.className;
  window.parent.postMessage(className, '*');
  // Display the class name in a tooltip or other UI element
}