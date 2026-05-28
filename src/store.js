import { computed } from 'vue'
import { i18n } from './i18n.js'

// globalLang is a two-way computed that syncs with vue-i18n locale.
// Components that still use `lang.value = 'id'` or `lang.value === 'id'`
// will automatically update the i18n locale and vice-versa.
export const globalLang = computed({
  get: () => i18n.global.locale.value,
  set: (val) => { i18n.global.locale.value = val },
})
