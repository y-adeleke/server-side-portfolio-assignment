module.exports.home = function (req, res, next) {
  res.render("home", { title: "home" });
};
module.exports.about = function (req, res, next) {
  res.render("about", { title: "about" });
};
module.exports.services = function (req, res, next) {
  res.render("helperCards", {
    title: "services",
    title_desc: "What We Offer",
    content: [
      {
        title: "Front-end Development",
        img: "../content/frontend.jpg",
        desc: "Creating beautiful and responsive user interfaces using HTML, CSS, and JavaScript to enhance the user experience.",
      },
      {
        title: "Back-end Development",
        img: "../content/backend.jpg",
        desc: "Building the server-side of a website or application using Node.js, Express.js, and MongoDB.",
      },
      {
        title: "Full-stack Development",
        img: "../content/fullstack.jpg",
        desc: "Developing both the front-end and back-end of a website or application.",
      },
    ],
  });
};
module.exports.projects = function (req, res, next) {
  res.render("helperCards", {
    title: "projects",
    title_desc: "Previous Projects",
    content: [
      {
        title: "Iluxsquare",
        img: "../content/iluxesquare.png",
        desc: "Iluxsquare is a React project showcasing various functionalities and integrations.",
        link: "https://iluxsquare.vercel.app/home",
      },
      {
        title: "Weather Information",
        img: "../content/weather-app.png",
        desc: "This is a Weather Information Application that provides real-time weather data based on the user's location or searched location.",
        link: "https://iluxecityinfo.netlify.app/",
      },
      {
        title: "Cat Gallery",
        img: "../content/cat-gallery.png",
        desc: "Cat Gallery is a web application that allows users to explore a delightful collection of cat images.",
        link: "https://catgallery-loader.netlify.app/",
      },
    ],
  });
};
module.exports.contact = function (req, res, next) {
  res.render("contact", { title: "contact" });
};
