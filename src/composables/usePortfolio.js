import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { supabase } from '@/supabase'

export function usePortfolio() {
  const { t } = useI18n()
  const projects = ref([])
  const isLoading = ref(true)

  const fetchPortfolios = async () => {
    isLoading.value = true
    const { data, error } = await supabase.from('portfolios').select('*')
    if (!error && data) {
      projects.value = data.map(p => ({
        ...p,
        image: p.thumbnail_url || p.image_url || p.image,
        tags: p.tags || []
      }))
    } else {
      console.error(error)
    }
    isLoading.value = false
  }

  onMounted(() => {
    fetchPortfolios()
  })

  return { projects, isLoading, fetchPortfolios }
}
