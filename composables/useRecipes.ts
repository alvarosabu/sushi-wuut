import { Ref } from 'vue'

const state = reactive({
  recipes: [],
})

export function useRecipes(filter?: Ref<string>, category?: Ref<string>) {
  const storyblokApi = useStoryblokApi()

  async function fetchRecipes() {
    let params = {
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
      starts_with: 'recipes/',
      resolve_relations: 'category',
      is_startpage: false,
    }

    if (filter?.value) {
      params = {
        ...params,
        filter_query: {
          title: {
            like: `*${filter.value}*`,
          },
        },
      }
    }

    if (category?.value) {
      params = {
        ...params,
        filter_query: {
          category: {
            in: category.value,
          },
        },
      }
    }
    const { data } = await storyblokApi.get('cdn/stories/', params)

    state.recipes = data.stories.map(recipe => ({
      ...recipe,
      content: {
        ...recipe.content,
        category: data.rels.find(({ uuid }) => uuid === recipe.content.category),
      },
    }))
  }

  async function fetchRecipeBySlug(slug: string) {
    try {
      const { data } = await storyblokApi.get('cdn/stories/', {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
        starts_with: 'recipes/',
        by_slugs: '*/' + slug,
        resolve_relations: 'category',
        is_startpage: false,
      })
      const story = data.stories[0]
      story.content.category = data.rels.find(({ uuid }) => uuid === story.content.category)
      return story
    } catch (error) {
      console.error(error)
    }
  }

  const filteredRecipes = computed(() =>
    state.recipes.filter(
      recipe =>
        recipe.name.toLowerCase().includes(filter.value.toLowerCase()) &&
        recipe.content.category.name.toLowerCase().includes(category.value.toLowerCase()),
    ),
  )

  return {
    ...toRefs(state),
    fetchRecipes,
    fetchRecipeBySlug,
    filteredRecipes,
  }
}
