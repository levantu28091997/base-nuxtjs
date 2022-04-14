import Vue from 'vue'
import { ValidationObserver,ValidationProvider, extend, configure } from 'vee-validate'
import {
    required,
    email,
    confirmed,
    regex,
    numeric,
    min,
    max
} from 'vee-validate/dist/rules.umd'

// import moment from 'moment'

extend('email', {
    ...email,
    message: () => {
        return parent.$nuxt.$t('error._invalid_mail_format')
    }
})

extend('email_trimmed', {
    validate(value, { target }) {
        if (value) {
            // eslint-disable-next-line no-useless-escape
            const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if (regex.test(value.trim())) {
                const afterAt = value.slice(value.indexOf('@'), value.length)
                if (afterAt.split('.').length > 4 || afterAt.split('.').find((el, index) => index === 2 && el === 'web')) {
                    return false
                } else {
                    return true
                }
            } else {
                return false
            }
        } else {
            return false
        }
    },
    message: () => {
        return parent.$nuxt.$t('error._invalid_mail_format')
    }
})

extend('required', {
    ...required,
    message: (name) => {
        return parent.$nuxt.$t('error.required', { name })
    }
})

extend('required_img', {
    ...required,
    message: name => {
        // TODO: Update unknow message
        return parent.$nuxt.$t('error.required_mandatory', { name })
    }
})

extend('confirmed', {
    ...confirmed,
    message: name => {
        // TODO: Update unknow message
        return parent.$nuxt.$t('error.unmatch_confirmation_email', { name })
    }
})

extend('regex', {
    ...regex,
    message: () => {
        return parent.$nuxt.$t('error.invalid_format')
    }
})

extend('numeric', {
    ...numeric,
    message: () => {
        return parent.$nuxt.$t('error.numeric')
    }
})

extend('phone_ja', {
    validate(value, { target }){
        const regex = /^(?:\d{10}|\d{11})$/
        return regex.test(value.trim())
    },
    message: () => {
        return parent.$nuxt.$t('error.invalid_phone_number')
    }
})

extend('format_pass',{
    validate(value, { target }){
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*()_+=?]{8,20}$/
        return regex.test(value.trim())
    },
    message: () => {
        return parent.$nuxt.$t('error.invalid_pass')
    }
})

// Min length
extend('min', {
    ...min,
    message: (name, info) => {
        return parent.$nuxt.$t('error.min', { name, min: info.length })
    }
})

// Max length
extend('max', {
    ...max,
    message: (name, info) => {
        return parent.$nuxt.$t('error.max', { name, max: info.length })
    }
})

extend('moreThan', {
    params: ['target', 'name'],
    validate(value, { target }) {
        return +value >= +target
    },
    message: (name, { target }) => {
        return parent.$nuxt.$t('error.more_than', { name, target })
    }
})

extend('lessThan', {
    params: ['target', 'name'],
    validate(value, { target }) {
        return +value <= +target
    },
    message: (name, { target }) => {
        return parent.$nuxt.$t('error.less_than', { name, target })
    }
})

extend('dateRange', {
    params: ['target'],
    validate(value, { target }) {
        return target >= value
    },
    message: (name, { target }) => {
        return parent.$nuxt.$t('error.date_before', { name, target })
    }
})

extend('equalDateRange', {
    params: ['target'],
    validate(value, { target }) {
        return target.format('YYYY-MM') !== value.format('YYYY-MM')
    },
    message: (name, { target }) => {
        return parent.$nuxt.$t('error.date_equal')
    }
})

extend('compareDate', {
    params: ['target'],
    validate(value, { target }) {
        if (!target && value >= target) {
            return value >= target
        }
    },
    message: (name, { target }) => {
        return parent.$nuxt.$t('error.date_comparation', { name, target })
    }
})

extend('dateTime', {
    params: ['target'],
    validate(value, { target }) {
        const start = value // TODO: moment(value, 'HH:mm:ss')
        const end = target //TODO: moment(target, 'HH:mm:ss').add(59, 'seconds')

        return start < end
    },
    message: (name, { target }) => {
        return parent.$nuxt.$t('error.time_before', { name, target })
    }
})

extend('decimals', {
    validate(value, { target }) {
        const regex = /^\d+(\.\d{1,6})?$/gim
        return regex.test(value)
    },
    message: name => {
        // TODO: Update unknow message
        return parent.$nuxt.$t('error.decimal', { name })
    }
})

/**
 * Validate image
 */
extend('image', {
    validate(value) {
        if (value && value.length && value[0].type.match(/(jpg|jpeg|png|gif)$/)) {
            return true
        }
        return false
    },
    message: name => {
        return parent.$nuxt.$t('error.invalid_image')
    }
})

/**
 * Validate max min
 */
extend('minmax', {
    validate(value, { min, max }) {
        return value.length >= min && value.length <= max
    },
    message: (name, { min, max }) => {
        return parent.$nuxt.$t('error.min_max', { name, min, max })
    },
    params: ['min', 'max']
})

/**
 * Validate min
 */
extend('min', {
    validate(value, { min }) {
        return value.length >= min
    },
    message: (name, { min }) => {
        return parent.$nuxt.$t('error.min', { name, min })
    },
    params: ['min']
})

/**
 * Validate color code
 */
extend('color-hex', {
    validate(value, { target }) {
        const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/gim
        return regex.test(value.trim())
    },
    message: () => {
        return parent.$nuxt.$t('error.color_hex')
    }
})

extend('password', {
    params: ['target'],
    validate(value, { target }) {
        return value === target
    },
    message: () => {
        return parent.$nuxt.$t('error.unmatch_password')
    }
})

/**
 * Validate url
 */
extend('url', {
    validate(value, { target }) {
        const regex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\\-\\-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
        return regex.test(value.trim())
    },
    message: () => {
        return parent.$nuxt.$t('error._invalid_url')
    }
})
/**
 * Validate url
 */
extend('insta_url', {
    validate(value, { target }) {
        const regex = /(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am|instagr.com)\/(\w+)/igm
        return regex.test(value.trim())
    },
    message: () => {
        return parent.$nuxt.$t('error._invalid_insta_url')
    }
})

configure({
    // this will be used to generate messages.
    defaultMessage: (field, values) => {
        values._field_ = i18n.t(`fields.${field}`)
        return i18n.t(`validations.messages.${values._rule_}`, values)
    }
})

// Register it globally
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
