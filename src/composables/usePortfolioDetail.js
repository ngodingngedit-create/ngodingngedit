import { ref, computed } from 'vue'
import { supabase } from '@/supabase'

export function usePortfolioDetail() {
  const portfolio = ref(null)
  const details = ref(null)
  const images = ref([])
  const technologies = ref([])
  const allProjects = ref([])
  const isLoading = ref(true)
  const error = ref(null)

  const prevProject = computed(() => {
    if (!portfolio.value || allProjects.value.length === 0) return null
    const idx = allProjects.value.findIndex(p => p.id === portfolio.value.id)
    if (idx <= 0) return null
    return allProjects.value[idx - 1]
  })

  const nextProject = computed(() => {
    if (!portfolio.value || allProjects.value.length === 0) return null
    const idx = allProjects.value.findIndex(p => p.id === portfolio.value.id)
    if (idx === -1 || idx >= allProjects.value.length - 1) return null
    return allProjects.value[idx + 1]
  })

  const fetchPortfolioDetail = async (id) => {
    isLoading.value = true
    error.value = null

    try {
      const [
        { data: portfolioData, error: portfolioErr },
        { data: detailsData, error: detailsErr },
        { data: imagesData, error: imagesErr },
        { data: techData, error: techErr },
        { data: allData, error: allErr },
      ] = await Promise.all([
        supabase.from('portfolios').select('*').eq('id', id).single(),
        supabase.from('portfolio_details').select('*').eq('portfolio_id', id).maybeSingle(),
        supabase.from('portfolio_images').select('*').eq('portfolio_id', id).order('sort_order', { ascending: true }),
        supabase.from('portfolio_technologies').select('*').eq('portfolio_id', id),
        supabase.from('portfolios').select('id, title').order('created_at', { ascending: true }),
      ])

      if (portfolioErr) throw portfolioErr
      if (!portfolioData) {
        error.value = 'NOT_FOUND'
        isLoading.value = false
        return
      }

      portfolio.value = {
        ...portfolioData,
        image: portfolioData.thumbnail_url || portfolioData.image_url || portfolioData.image,
      }
      details.value = detailsData || null
      images.value = imagesData || []
      technologies.value = techData || []
      allProjects.value = allData || []

    } catch (err) {
      console.error('Error fetching portfolio detail:', err)
      error.value = err.message || 'FETCH_ERROR'
    } finally {
      isLoading.value = false
    }
  }

  return {
    portfolio,
    details,
    images,
    technologies,
    allProjects,
    prevProject,
    nextProject,
    isLoading,
    error,
    fetchPortfolioDetail,
  }
}
