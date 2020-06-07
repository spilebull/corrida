import { shallowMount } from '@vue/test-utils'
import AtomsPage from '@/components/pages/AtomsPage.vue'

describe('AtomsPage.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Atoms AppButton Square  Round'
    const wrapper = shallowMount(AtomsPage, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
