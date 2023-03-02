let current = 1

// Change slides function
const changeSlides = () => {
    const slideList = document.querySelectorAll('.slide')
    const slides = Array.from(slideList)

    if(current > slides.length){
        current = 1
    }

    slides.forEach(slide => {
        if(slide.classList[1].split('-')[1]*1 === current) {
            slide.style.cssText = "visibility: visible; opacity: 1"
        } else {
            slide.style.cssText = "visibility: hidden; opacity: 0"
        }
    })
}

const playPause = () => {
    setInterval(()=> {
        current++;
        changeSlides()
    }, 3000)
}

changeSlides()
playPause()


