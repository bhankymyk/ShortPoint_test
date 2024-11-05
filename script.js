document.addEventListener("DOMContentLoaded", () => {
  const usersContainer = document.querySelector(".users-container");
  const userTemplate = document.querySelector("#user-template");

  // Functions to add a card
  function addCard(name, email, age, info, imageUrl) {
    const userCard = userTemplate.content.cloneNode(true);
    const userContainer = userCard.querySelector(".user-container");

    // Set user details
    userContainer.querySelector(".user-name").textContent = name;
    userContainer.querySelector(".user-email").textContent = email;
    userContainer.querySelector(".user-age").textContent = age;
    userContainer.querySelector(".user-info").textContent = info;
    userContainer.querySelector(".user-image").src = imageUrl;

    // Event listener to close the button
    const closeButton = userContainer.querySelector(".btn-close");
    closeButton.addEventListener("click", () => {
      userContainer.remove();
    });

    usersContainer.appendChild(userContainer);
  }

  //  User details data
  addCard(
    "John Doe",
    "johndoe@example.com",
    "28 years old",
    "A passonate Web Developer with 3 years of experience",
    "https://res.cloudinary.com/ddkyc9aic/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1730761634/user_beotss.jpg"
  );
  addCard(
    "Michael Bankole",
    "michaelbankole@example.com",
    "50 years old",
    "An enthusiat Product Designer with  love for tech",
    "https://res.cloudinary.com/ddkyc9aic/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1730763842/user_3_btjwmu.jpg"
  );
  addCard(
    "Jane Smith",
    "janesmith@example.com",
    "30 years old",
    "A Designer that likes watching football games and playing video games ",
    "https://res.cloudinary.com/ddkyc9aic/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1730762005/user_2_rtmsfw.jpg"
  );
  addCard(
    "Alex Martinez",
    "alexmartinez@example.com",
    "45 years old",
    "A UI/UX Designer with a great attention for details",
    "https://res.cloudinary.com/ddkyc9aic/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1730764010/user_4_smtat5.jpg"
  );
  addCard(
    "Mike Brown",
    "mikebrown@example.com",
    "35 years old",
    "A Backend Developer with a great love for exploring different places",
    "https://res.cloudinary.com/ddkyc9aic/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1730762005/user_2_rtmsfw.jpg"
  );
  addCard(
    "Sarah Johnson",
    "sarahjohnson@example.com",
    "40 years old",
    "A Frontend Developer with a great love for cooking",
    "https://res.cloudinary.com/ddkyc9aic/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1730762005/user_2_rtmsfw.jpg"
  );
});
