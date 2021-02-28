const targetElement = document.querySelectorAll(".animationTarget");
for (let i = 0; i < targetElement.length; i++){
    const getElementDistance = targetElement[i].getBoundingClientRect().top
    console(getElementDistance)
 }
