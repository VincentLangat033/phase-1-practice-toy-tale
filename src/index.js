
const toyCollect = document.getElementById('toy-collection')

document.addEventListener("DOMContentLoaded", () => {
  fetch('http://localhost:3000/toys')
  .then((res) => res.json())
  .then((toyData) => toyData.forEach(toy => {
    
      //card container
    const toyCard = document.createElement('div')
    toyCard.className = 'card'
    toyCollect.append(toyCard)
    //toyname
    const toyName = document.createElement('h2')
    toyName.textContent = toy.name
    toyCard.append(toyName)
    //
    const imgTag = document.createElement('img')
    imgTag.className = 'toy-avatar'
      //inserting img from object to imgTag
    imgTag.src = toy.image
    toyCard.append(imgTag)
    console.log(toyCard)
    //Adding Likes
    const toyLikes = document.createElement('p')
    toyLikes.textContent = toy.likes
    toyCard.append(toyLikes + "Likes")
    
    const toyLikeButton = document.createElement('button')
    toyLikeButton.textContent = 'Like ❤️'
    toyLikeButton.class = 'like-btn'
    toyLikeButton.id = '[toy_id]'
    toyCard.append(toyLikeButton) 
  }))

  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    let addToy = false;
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});