const closeBtn = document.getElementById('close');
const box = document.getElementById('alertBox');
const formSend = document.getElementById('feedback');
const confirmBtn = document.getElementById('confirm');
const input = document.querySelectorAll('.input');


box.style.display = 'none';


formSend.addEventListener('submit', (e) => {
    e.preventDefault();
    box.style.display = 'block'; 
});

// Menangani tombol close
closeBtn.addEventListener('click', () => {
    box.style.display = 'none'; 
});

// Menangani konfirmasi
confirmBtn.addEventListener('click', () => {
    box.style.display = 'none'; 
    
    Array.from(input).forEach(function (item) {
        item.classList.add('disabled');
    });
});
