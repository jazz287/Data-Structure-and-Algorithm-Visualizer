import { swap, sleep, highlight, removeHighlight } from "../animations/animations";
import { highlightStep, unhighlightAllSteps } from "../utils/util";

const bubbleSortSteps = ["1. Start with an unsorted list.",
    "2. Repeat until no swaps are needed:",
    "3. Iterate through the list:",
    "4. Compare adjacent elements.",
    "5. If they're in the wrong order, swap them.",
    "6. The list is now sorted.",
    "7. Average Time Complexity: O(n^2)"
];

const selectionSortSteps = ["1. Start with an unsorted list.",
    "2. Repeat until no swaps are needed:",
    "3. Find the minimum element in the unsorted portion.",
    "4. Swap it with the first element in the unsorted portion.",
    "5. The list is now sorted.",
    "6. Average Time Complexity: O(n^2)"
];

const insertionSortSteps = ["1. Start with an unsorted list.",
    "2. Iterate through the list:",
    "3. Compare the current element with the sorted portion.",
    "4. Insert the element into the correct position.",
    "5. The list is now sorted.",
    "6. Average Time Complexity: O(n^2)"
];


async function bubbleSort(arr) {
    const audioElement = document.querySelector("audio");
    audioElement.playbackRate = 2;
    unhighlightAllSteps();
    // use swap function to swap the divs, use sleep function to pause the execution for a while
    // use highlight and removeHighlight functions to highlight the divs
    // use arr to access the array of values
    for (var i = 0; i < arr.length; i++) {
        // Last i elements are already in place
        for (var j = 0; j < arr.length - i - 1; j++) {
            // Checking if the item at present iteration
            // is greater than the next iteration
            highlightStep(3);
            if (arr[j] > arr[j + 1]) {
                highlight(document.querySelector(`div[data-value='${arr[j]}']`));
                highlight(document.querySelector(`div[data-value='${arr[j + 1]}']`));
                await sleep(300 - (window.vizSpeed || 0) * 4);
                // If the condition is true
                // then swap them
                swap(
                    document.querySelector(`div[data-value='${arr[j]}']`),
                    document.querySelector(`div[data-value='${arr[j + 1]}']`)
                );
                highlightStep(4);
                audioElement.play();
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                await sleep(300 - (window.vizSpeed || 0) * 4);
                audioElement.currentTime = 0;
                removeHighlight(...document.querySelectorAll(`div[data-value]`));
                unhighlightAllSteps();
            }
        }
    }
    unhighlightAllSteps();
    highlightStep(5);
    return arr;
}


async function selectionSort(arr) {
    const audioElement = document.querySelector("audio");
    audioElement.playbackRate = 2;
    unhighlightAllSteps();
    for (var i = 0; i < arr.length; i++) {
        let minIndex = i;
        highlightStep(2);
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        highlight(document.querySelector(`div[data-value='${arr[i]}']`));
        highlight(document.querySelector(`div[data-value='${arr[minIndex]}']`));
        await sleep(300 - (window.vizSpeed || 0) * 4);
        swap(
            document.querySelector(`div[data-value='${arr[i]}']`),
            document.querySelector(`div[data-value='${arr[minIndex]}']`)
        );
        highlightStep(3);
        audioElement.play();
        var temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
        await sleep(300 - (window.vizSpeed || 0) * 4);
        unhighlightAllSteps();
        audioElement.currentTime = 0;
        removeHighlight(...document.querySelectorAll(`div[data-value]`));
    }
    unhighlightAllSteps();
    highlightStep(4);
    return arr;
}

async function insertionSort(arr) {
    const audioElement = document.querySelector("audio");
    audioElement.playbackRate = 2;
    for (var i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        unhighlightAllSteps();
        await sleep(100 - (window.vizSpeed || 0) * 4);
        highlightStep(2);
        while (j >= 0 && arr[j] > key) {
            highlight(document.querySelector(`div[data-value='${arr[j]}']`));
            highlight(document.querySelector(`div[data-value='${key}']`));
            await sleep(300 - (window.vizSpeed || 0) * 4);
            swap(
                document.querySelector(`div[data-value='${arr[j]}']`),
                document.querySelector(`div[data-value='${key}']`)
            );
            highlightStep(3);
            audioElement.play();
            arr[j + 1] = arr[j];
            j = j - 1;
            await sleep(300 - (window.vizSpeed || 0) * 4);
            audioElement.currentTime = 0;
            removeHighlight(...document.querySelectorAll(`div[data-value]`));
        }
        arr[j + 1] = key;
    }
    unhighlightAllSteps();
    highlightStep(4);
    return arr;
}

const algos = {
    bubble: {
        name: "Bubble Sort ",
        desc : "Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order, iterating until the list is sorted.",
        steps: bubbleSortSteps,
        func: bubbleSort,
    },
    selection: {
        name: "Selection Sort",
        desc : "Selection Sort divides the input list into two parts: the sublist of items already sorted and the sublist of items remaining to be sorted, and selects the smallest element from the unsorted sublist and swaps it with the leftmost unsorted element.",
        steps: selectionSortSteps,
        func: selectionSort,
    },

    insertion: {
        name: "Insertion Sort",
        desc : "Insertion Sort builds the final sorted array one item at a time, comparing each item with the sorted portion of the array and inserting it into its correct position.",
        steps: insertionSortSteps,
        func: insertionSort,
    },

   



    
};

export { algos };