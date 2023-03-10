const draggableItems = document.querySelectorAll(".draggable-item");
const gridItems = document.querySelectorAll(".grid-item");

// Set up event listeners for draggable items
draggableItems.forEach((item) => {
  item.addEventListener("dragstart", dragStart);
});

// Set up event listeners for grid items
gridItems.forEach((item) => {
  item.addEventListener("dragover", dragOver);
  item.addEventListener("drop", drop);
});

// Functions for handling drag and drop
function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  const data = e.dataTransfer.getData("text/plain");
  const draggableItem = document.getElementById(data);
  const droppableArea = e.target;

  if (droppableArea.classList.contains("grid-item")) {
    // Check if grid item is empty
    if (droppableArea.innerHTML === "") {
      droppableArea.appendChild(draggableItem);
    }
  }
}
