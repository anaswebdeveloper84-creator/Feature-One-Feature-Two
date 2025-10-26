// Optional: Add a small interaction (like console message or color change on click)

document.querySelectorAll('.feature-item').forEach(item => {
  item.addEventListener('click', () => {
    alert(`${item.querySelector('h2').textContent} clicked!`);
  });
});
