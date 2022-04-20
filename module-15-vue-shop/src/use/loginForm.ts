import { useRouter } from 'vue-router'
import { useStore } from '../store'
import { useForm, useField } from 'vee-validate'
import { computed } from 'vue'
import * as yup from 'yup'

export function useLoginForm() {
  const store = useStore()
  const router = useRouter()

  const { handleSubmit } = useForm()

  const { errorMessage: eEmail, value: email, handleBlur: eBlur } = useField(
    'email',
    yup
      .string()
      .required('Пожалуйста введите email')
      .email('Необходимо ввести корректный email')
  )
  const { errorMessage: ePassword, value: password, handleBlur: pBlur } = useField(
    'password',
    yup
      .string()
      .required('Пожалуйста введите пароль')
      .min(6, 'Пароль не может быть меньше 6 символов')
  )

  const submit = handleSubmit(async loginObj => {
    await store.dispatch('auth/login', loginObj)
    router.push('/')
  })

  const isValidForm = computed(() => !eEmail.value && !ePassword.value)

  return {
    email,
    password,
    eEmail,
    ePassword,
    eBlur,
    pBlur,
    submit,
    isValidForm
  }
}
