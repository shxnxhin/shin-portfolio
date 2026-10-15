const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  },
);

revealElements.forEach((element) => {
  observer.observe(element);
});

const darkMode = document.getElementById("toggle-dark-mode");

darkMode.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});


const hamburger = document.getElementById("toggle-hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});





// Additional Typing Effect


const lines = [
  ['code1', 'const name = "Shin";'],
  ['code2', 'const role = "Developer";'],
  ['code3', 'console.log("Hello, Im " , name , "Im a " , role , ".");'],
  ['output', 'Hello, Im Shin Im a Developer.']
];

const typingSpeed = 50;
const linePause = 200;

function typeText(element, text) {
  return new Promise(resolve => {
    let index = 0;

    function typeNext() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(typeNext, typingSpeed);
      } else {
        resolve();
      }
    }

    typeNext();
  });
}

async function runTerminal() {
  while (true) {
    for (const [id, text] of lines) {
      const element = document.getElementById(id);

      // Clear the previous animation
      element.textContent = "";

      await typeText(element, text);
      await new Promise(resolve =>
        setTimeout(resolve, linePause)
      );
    }

    // Pause before restarting
    await new Promise(resolve =>
      setTimeout(resolve, 1500)
    );

    // Clear all lines before the next cycle
    for (const [id] of lines) {
      document.getElementById(id).textContent = "";
    }
  }
}

runTerminal();



