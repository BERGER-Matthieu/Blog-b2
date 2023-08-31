//Functions -------------------------------------------------
export function setTableDataBars(rows) {
    rows.forEach((row) => {
        const style = getComputedStyle(row);
        const height = style;
        row.style.setProperty("--row-height", style.height);
    })
}

export function lockScroll() {
    window.scrollTo(0, 0);
    let body = document.body;
    body.style.overflowY = "hidden";
    setTimeout(() => {
        body.style.overflowY = "scroll";
    }, 2000);
}

export function removeAfterOnWrap(elementsList) {
    let previousY = undefined
    elementsList.forEach((element, i) => {
        if (elementsList[i+1] == undefined || element.offsetTop != elementsList[i+1].offsetTop){
            element.style.setProperty("--after-display", "none")
        } else {
            element.style.setProperty("--after-display", "inline")
        }
    })
}

export function displaySmallHeader(header ,smallHeader) {
    if (window.scrollY > header.clientHeight) {
        smallHeader.style.transform = "translateY(0)";
    } else {
        smallHeader.style.transform = "translateY(-100%)";
    }
} 
