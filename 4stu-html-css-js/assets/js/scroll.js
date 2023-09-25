// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show');
//     } else {
//       entry.target.classList.remove('show');
//     }
//   });
// });

// const hiddenElements1 = document.querySelectorAll('.hidden-top');
// hiddenElements1.forEach((element) => observer.observe(element));

// const hiddenElements2 = document.querySelectorAll('.hidden-bottom');
// hiddenElements1.forEach((element) => observer.observe(element));

// const hiddenElements3 = document.querySelectorAll('.hidden-right');
// hiddenElements1.forEach((element) => observer.observe(element));

// const hiddenElements4 = document.querySelectorAll('.hidden-left');
// hiddenElements4.forEach((element) => observer.observe(element));

// let sections = document.querySelectorAll('.section');

// window.onscroll = () => {
//   sections.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop;
//     let height = sec.offsetHeight;

//     if (top >= offset - height /2 && top < offset + height) {
//       sec.classList.add('show-animate');
//     } else {
//       sec.classList.remove('show-animate');
//     }
//   });
// };
