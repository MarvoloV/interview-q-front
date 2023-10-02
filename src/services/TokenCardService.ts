import { culqiApi } from '@/api/culqiapi'
import { ref, type Ref } from 'vue'

export class TokenCardService {
  private error: Ref<null | Object>
  private loading: Ref<boolean>
  constructor() {
    this.error = ref(null)
    this.loading = ref(false)
  }
  getErrors(): Ref<null | Object> {
    return this.error
  }
  getLoading(): Ref<boolean> {
    return this.loading
  }
  async createToken(formTokenCard: any) {
    try {
      this.loading.value = true
      const response = await culqiApi.post('tokenCard/createToken', formTokenCard, {
        headers: {
          Authorization: `pk_test_${localStorage.getItem('pk_key')}`
        }
      })
      this.loading.value = false

      return response.data
    } catch (error: any) {
      this.loading.value = false
      const errors = error.response.data.errors
      this.error.value = errors
    }
  }
  async getCreditCardDataByToken(tokenId: string) {
    try {
      this.loading.value = true
      const response = await culqiApi.get('tokenCard/findTokenCard', {
        headers: {
          Authorization: tokenId
        }
      })
      this.loading.value = false
      return response.data
    } catch (error: any) {
      this.loading.value = false
      const errors = error.response.data.message

      this.error.value = errors
    }
  }
}
