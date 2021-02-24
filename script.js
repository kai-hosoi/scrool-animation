const targetElemnt = doxument.querySelectorAll(".animationTarget");
for (let i = 0; i < targetElemnt.length; i++){
    const getElemntDistance = targetElemnt[i].getBoundingClientRect().top
    console(getElemntDistance) }
