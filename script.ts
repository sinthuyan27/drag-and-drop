const cards: NodeListOf<HTMLElement> = document.querySelectorAll('.card');
const container: HTMLElement | null = document.querySelector('.container');let draggedCard: HTMLElement | null = null;if (container) {
    cards.forEach((card) => {
        card.addEventListener('dragstart', dragStart);
        card.addEventListener('dragend', dragEnd);
    });    container.addEventListener('dragover', dragOver);
    container.addEventListener('drop', drop);    function dragStart(this: HTMLElement, e: DragEvent) {
        draggedCard = this;
        setTimeout(() => {
            this.style.display = 'none';
        }, 0);
    }    function dragEnd(this: HTMLElement) {
        setTimeout(() => {
            this.style.display = 'block';
            draggedCard = null;
        }, 0);
    }    function dragOver(e: DragEvent) {
        e.preventDefault();
    }    function drop(e: DragEvent) {
        e.preventDefault();
        if (draggedCard && container) {
            container.appendChild(draggedCard);
        }
    }
}