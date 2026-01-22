const skillData = {
  python: {
    title: "Python",
    body: `
    Level: Intermediate<br><br>
    • Automation scripts<br>
    • Computer Vision projects<br>
    • Flask backend development<br><br>
    Related Project:<br>
    Image Place Recognition
    `
  },
  cv: {
    title: "Computer Vision",
    body: `
    • Feature detection & matching<br>
    • Image processing<br>
    • SIFT & keypoints extraction<br><br>
    Used in real projects with OpenCV
    `
  },
  linux: {
    title: "Linux OS",
    body: `
    • Linux Administration<br>
    • Terminal CLI Interface<br>
    • Cyber Security
    `
  },
  flask: {
    title: "Flask",
    body: `
    • REST APIs<br>
    • Backend for CV projects<br>
    • Simple web deployment
    `
  },
  web: {
    title: "HTML / CSS",
    body: `
    • Responsive layouts<br>
    • Modern UI design<br>
    • Portfolio & landing pages
    `
  },
  git: {
    title: "Git & GitHub",
    body: `
    • Version control<br>
    • GitHub Pages<br>
    • Project documentation
    `
  }
};

function openSkill(key) {
  document.getElementById("skillTitle").innerHTML = skillData[key].title;
  document.getElementById("skillBody").innerHTML = skillData[key].body;
  document.getElementById("skillModal").style.display = "flex";
}

function closeSkill() {
  document.getElementById("skillModal").style.display = "none";
}
