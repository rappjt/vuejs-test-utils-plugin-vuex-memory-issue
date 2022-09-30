import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import { createStore } from 'vuex'

describe('HelloWorld.vue', () => {
  for (let i = 0; i < 10000; i++) {
    it(`${i}`, () => {
      const store = createStore({
        state () {
          return {
            count: 0
          }
        },
        mutations: {
          increment (state) {
            state.count += 1
          }
        }
      })

      const msg = 'new message'
      const wrapper = shallowMount(HelloWorld, {
        props: { msg },
        global: {
          plugins: [store]
        }
      })
      expect(wrapper.text()).to.include(msg)
      wrapper.unmount()
    })
  }
})
