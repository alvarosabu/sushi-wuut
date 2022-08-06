const state = reactive({
  recipes: [],
})

export function useRecipes() {
  const storyblokApi = useStoryblokApi()

  async function fetchRecipes() {
    const { data } = await storyblokApi.get('cdn/stories/', {
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
      starts_with: 'recipes/',
      resolve_relations: 'category',
      is_startpage: false,
    })

    state.recipes = data.stories.map(recipe => ({
      ...recipe,
      content: {
        ...recipe.content,
        category: data.rels.find(
          ({ uuid }) => uuid === recipe.content.category,
        ),
      },
    }))
  }
  return {
    ...toRefs(state),
    fetchRecipes,
  }
}
