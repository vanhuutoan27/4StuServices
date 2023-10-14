const registerButton = document.getElementById('register');
const loginButton = document.getElementById('login');
const container = document.getElementById('container');

registerButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

loginButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

// document.addEventListener('DOMContentLoaded', function () {
//   // Thêm sự kiện click vào nhãn
//   label.addEventListener('click', function () {
//     // Khi nhãn được nhấn, cập nhật trạng thái của checkbox
//     checkbox.checked = !checkbox.checked;
//   });
// });
