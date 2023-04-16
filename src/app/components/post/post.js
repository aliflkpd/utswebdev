// Replace the image source paths and project information with your own
const designs = [
    {
      thumbnail: "C:/Users/acer/Desktop/Design UX/Streamify/Figma Thumbnails.png",
      title: "Project 1 Title",
      description: "Project 1 description",
    },
    {
      thumbnail: "path/to/thumbnail2.jpg",
      title: "Project 2 Title",
      description: "Project 2 description",
    },
    // Add more designs as needed
  ];
  
  // Get the design list container element
  const designList = document.querySelector(".design-list");
  
  // Loop through the designs and create HTML for each design item
  for (const design of designs) {
    const designItem = document.createElement("div");
    designItem.classList.add("design-item");
  
    const designLink = document.createElement("a");
    designLink.href = "#";
  
    const designImage = document.createElement("img");
    designImage.src = design.thumbnail;
    designImage.alt = design.title;
  
    const designTitle = document.createElement("h3");
    designTitle.textContent = design.title;
  
    const designDescription = document.createElement("p");
    designDescription.textContent = design.description;
  
    designLink.appendChild(designImage);
    designLink.appendChild(designTitle);
    designLink.appendChild(designDescription);
  
    designItem.appendChild(designLink);
  
    designList.appendChild(designItem);
  }
  