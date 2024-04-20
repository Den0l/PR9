const imageContainer = document.getElementById("image-container");
const addButton = document.getElementById("add-button");
const changeButton = document.getElementById("change-button");
const deleteButton = document.getElementById("delete-button");

let images = ["p1.jpeg", "p2.jpeg", "p3.jpeg", "p4.jpeg"];
let lastImageIndex = images.length - 1;
let newImageIndex = 1;

function addImage() {
    const newImageUrl = `p${newImageIndex}.jpeg`;
    images.push(newImageUrl);
    lastImageIndex = images.length - 1;
    newImageIndex++;
    if(newImageIndex > images.length)
    {
        newImageIndex = 1;
    }
    renderImages();
}

function changeLastImage() {
    if (lastImageIndex >= 0) {
        images[lastImageIndex] = "p2.jpeg";
        renderImages();
      }
}

function deleteLastImage() {
  if (lastImageIndex >= 0) {
    images.splice(lastImageIndex, 1);
    lastImageIndex = Math.max(0, lastImageIndex - 1);
    renderImages();
  }
}


function renderImages() {
    imageContainer.innerHTML = "";
  
    images.forEach((imageUrl, index) => {
      const imageItem = document.createElement("div");
      imageItem.classList.add("image-item");
      imageItem.style.backgroundImage = `url(${imageUrl})`;
      imageContainer.appendChild(imageItem);
    });
  }

addButton.addEventListener("click", addImage);
changeButton.addEventListener("click", changeLastImage);
deleteButton.addEventListener("click", deleteLastImage);
renderImages();
