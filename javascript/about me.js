const aboutSkillData = {
  python: {
    title: "Python",
    body: `
    • Strong fundamentals<br>
    • Automation & scripting<br>
    • Backend & CV projects<br><br>
    Used in real-world projects
    `
  },
  cv: {
    title: "Computer Vision",
    body: `
    • Feature detection & matching<br>
    • Image processing<br>
    • Practical CV applications
    `
  },
  linux: {
    title: "linux",
    body: `
    • Linux Administration<br>
    • Terminal CLI Interface<br>
    • Cyber Security
    `
  },
  flask: {
    title: "Flask",
    body: `
    • Backend development<br>
    • REST APIs<br>
    • Web deployment
    `
  },
  ai: {
    title: "AI Basics",
    body: `
    • Machine Learning concepts<br>
    • AI fundamentals<br>
    • Applied understanding
    `
  },
  web: {
    title: "Web Development",
    body: `
    • HTML, CSS, JavaScript<br>
    • Responsive layouts<br>
    • Portfolio websites
    `
  }
};



function openAboutSkill(key) {
  document.getElementById("aboutSkillTitle").innerHTML = aboutSkillData[key].title;
  document.getElementById("aboutSkillBody").innerHTML = aboutSkillData[key].body;
  document.getElementById("aboutModal").style.display = "flex";
}

function closeAboutSkill() {
  document.getElementById("aboutModal").style.display = "none";
}


const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});
