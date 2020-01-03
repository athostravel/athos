export default {
    inserted: (el) => {
        const isJson = (str) => {
            try {
                JSON.parse(str);
            } catch (e) {
                return false;
            }
            return true;
        }

        const trigger = el.getAttribute('toggle-trigger')
        const triggerClasses = el.getAttribute('toggle-trigger-class')
        const event = el.getAttribute('toggle-event') || 'click'
        const prop = el.getAttribute('toggle-prop')
        const classes = el.getAttribute('toggle-class')
        const triggerElements = []
        const triggerElementsClasses = []


        const bindEvent = (element) => {
            const classAction = element.state !== undefined ? element.state ? 'add' : 'remove' : 'toggle'
            triggerElements.push(document.querySelector(element.trigger))
            triggerElementsClasses.push(element.class)

            document.querySelectorAll(element.trigger).forEach(elem => {
                elem.addEventListener(event, () => {
                    if (prop) el[prop] = element.state !== undefined ? element.state : el[prop] === true ? false : true

                    if (classes) el.classList[classAction](classes)

                    if (triggerClasses || triggerElementsClasses.length) {
                        triggerElements.forEach((item, index) => {
                            item.classList[classAction]((triggerElementsClasses[index] ? triggerElementsClasses[index] : '') || triggerClasses)
                        })
                    }
                })
            })
        }

        if (!isJson(trigger)) {
            bindEvent(trigger)
        } else {
            JSON.parse(trigger).forEach((element) => {
                bindEvent(element)
            })
        }
    }
}
