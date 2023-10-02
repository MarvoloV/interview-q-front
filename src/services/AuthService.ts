import router from '@/router'
import { ref, type Ref } from 'vue'

class AuthService {
  private error: Ref<string>
  private isLoading: Ref<boolean>
  private route
  constructor() {
    this.error = ref('')
    this.route = router
    this.isLoading = ref(false)
  }

  getError(): Ref<string> {
    return this.error
  }
  getIsLoading(): Ref<boolean> {
    return this.isLoading
  }
  async login(email: string, password: string) {
    try {
      this.isLoading.value = true
      if (email === 'admin@culqi.com' && password === '123456789') {
        localStorage.setItem('pk_key', 'DE8rkohXDRGJ1mep')
        await this.demoPromise().then(() => {})
        this.isLoading.value = false
        return true
      } else {
        this.isLoading.value = false
        this.error.value = 'Contraseña y/o correo Incorrectos'
        return false
      }
    } catch (error) {
      console.log(error)
    }
  }
  logout() {
    this.route.replace({ name: 'login', replace: true })
    localStorage.clear()
  }
  async demoPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('La promesa se resolvió después de 3 segundos')
      }, 2000) // 3000 milisegundos (3 segundos)
    })
  }
}
export default AuthService
