const swap = (div1, div2) => {
    // Get the offset positions of the divs
    const offset1 = div1.offsetLeft;
    const offset2 = div2.offsetLeft;

    // Calculate the difference in offsets
    const offsetDiff = offset1 - offset2;

    // Apply the transform property to animate the swap
    div1.style.transform = `translateX(${-offsetDiff}px)`;
    div2.style.transform = `translateX(${offsetDiff}px)`;

    // Swap the divs in the DOM after the animation
    setTimeout(() => {
        const parent = div1.parentNode;
        const nextSibling = div1.nextSibling === div2 ? div1 : div1.nextSibling;
        div2.after(div1);
        parent.insertBefore(div2, nextSibling);
        div1.style.transform = '';
        div2.style.transform = '';
        console.log("Insert Before");
    }, 250 - (window.vizSpeed || 0) * 4); // Adjust the timeout value to match the transition duration
}

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const highlight = (element) => {
    element.classList.add('highlight');
}

const removeHighlight = (...elements) => {
    elements.forEach(e => {
        e.classList.remove('highlight');
    });
}

export {
    swap,
    sleep,
    highlight,
    removeHighlight
};