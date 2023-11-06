let cat = document.getElementById("cat");
let dog = document.getElementById("dog");
let textElements = document.querySelectorAll(".replace-text");
let main_img_container = document.getElementById("main-img-container")
let second_img = document.getElementById("second-img")



cat.addEventListener("click", () => {
    textElements.forEach((element) => {
        element.textContent = element.textContent.replace(/Dog/gi, "cat");
        main_img_container.style.cssText = "background-image: url('https://images.pexels.com/photos/10559396/pexels-photo-10559396.jpeg?auto=compress&cs=tinysrgb&w=1600'); background-size: cover; background-position: 50% 30%; height: 600px;"
        second_img.src = 'https://images.pexels.com/photos/8434612/pexels-photo-8434612.jpeg?auto=compress&cs=tinysrgb&w=1600'
    });
});


dog.addEventListener("click", () => {
    textElements.forEach((element) => {
        element.textContent = element.textContent.replace(/Cat/gi, "dog");
        main_img_container.style.cssText = "background-image: url('https://images.pexels.com/photos/3842416/pexels-photo-3842416.jpeg?auto=compress&cs=tinysrgb&w=1600'); background-size: cover; background-position: 50% 30%; height: 600px;"
        second_img.src = 'https://images.pexels.com/photos/3767378/pexels-photo-3767378.jpeg?auto=compress&cs=tinysrgb&w=1600'
    });
});
