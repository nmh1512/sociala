import { onMounted, onBeforeUnmount } from 'vue';

let isAdjusting = false;

export const adjustPopoverPosition = (selfRef) => {
    if (!selfRef.value) return
    const popover = selfRef.value.$el;
    if (!popover) return
    
    const popoverRect = popover.getBoundingClientRect();
    if (popoverRect.bottom > window.innerHeight) {
        popover.classList.add('bottom-10');
        popover.classList.remove('top-8');
        isAdjusting = true;
    } else {
        popover.classList.remove('bottom-10');
        popover.classList.add('top-8');
        isAdjusting = false;
    }
};

export const handleScroll = (selfRef) => {
    if (!isAdjusting) {
        adjustPopoverPosition(selfRef);
    }
};

export const setupPopoverPosition = (selfRef) => {
    onMounted(() => {
        adjustPopoverPosition(selfRef);
        window.addEventListener('scroll', () => handleScroll(selfRef));
    });

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', () => handleScroll(selfRef));
    });
};