import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass, faBagShopping, faAngleDown, faBars, faCaretDown, faAngleLeft, faAngleRight, faStar, faPlus, faMinus, faArrowRight, faArrowRightLong, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter, faSkype } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false;

library.add(faMagnifyingGlass, faHeart, faBagShopping, faUser, faAngleDown, faBars, faCaretDown, faFacebookF, faInstagram, faTwitter, faSkype, faAngleLeft, faAngleRight, faStar, faPlus, faMinus, faArrowRight, faArrowRightLong, faXmark)

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('icon', FontAwesomeIcon)
})