export default {
    inserted: el => {
        function loadImage () {
            const imageElement = Array.from(el.children).filter(
                el => el.dataset.src !== undefined
            )
            if (imageElement.length > 0) {
                imageElement.forEach(image => {
                    const media = image.dataset.src
                    image.addEventListener('load', () => {
                        el.classList.add('is-loaded')
                    })
                    image.addEventListener('error', () => console.log('error'))

                    if (image.srcset) {
                        image.srcset = media
                    } else {
                        image.src = media
                    }
                })
            }
        }

        function handleIntersect (entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return
                }
                loadImage()
                observer.unobserve(el)
            })
        }

        function createObserver () {
            const options = {
                root: null,
                threshold: '0'
            }
            const observer = new IntersectionObserver(handleIntersect, options)
            observer.observe(el)
        }

        if (!window.IntersectionObserver) {
            loadImage()
        } else {
            createObserver()
        }
    }
}
