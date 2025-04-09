// write your JavaScript here
const openBtn = document.querySelector('.open-modal');
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');
const cancelBtn = document.getElementById('cancelBtn');
const submitBtn = document.getElementById('submitBtn');
const scale = document.querySelector('.scale');

let selectedRating = null;

// buttons 1 to 10
for (let i = 1; i <= 10; i++) {
  const btn = document.createElement('button');
  btn.textContent = i;
  btn.value = i;
  btn.addEventListener('click', () => {
    document.querySelectorAll('.scale button').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedRating = i;
  });
  scale.appendChild(btn);
}

openBtn.addEventListener('click', () => {
  modalOverlay.classList.add('active');
});

const closeModalFunc = () => {
  modalOverlay.classList.remove('active');
  document.querySelectorAll('.scale button').forEach(b => b.classList.remove('selected'));
  selectedRating = null;
};

cancelBtn.addEventListener('click', closeModalFunc);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModalFunc();
});
document.getElementById('closeModal').addEventListener('click', closeModalFunc);

// Submit
submitBtn.addEventListener('click', () => {
  if (selectedRating !== null) {
    alert(`Thanks for rating us ${selectedRating}/10! 😊`);
    closeModalFunc();
  } else {
    alert('Please select a rating before submitting.');
  }
});
