let Image = document.querySelector('.fill');
let ImageBox = document.querySelectorAll('.image-box');

Image.addEventListener('dragstart', dragStart);
Image.addEventListener('dragend', dragEnd);

for(const box of ImageBox) {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', dragDrop);
};

function dragStart() {
    this.classList.add('border');
    setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd() {
    this.classList.add('fill');
}

function dragOver(e) {
    e.preventDefault();
}


function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hover');
}

function dragLeave() {
    this.className = 'image-box';
}

function dragDrop() {
    this.className = 'image-box';
    this.append(Image);
}