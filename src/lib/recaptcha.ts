export const RECAPTCHA_VERSION_2 = 2

export const reCaptcha2 = {
  clearError(_formUUID: string) {},
  highlightError(_formUUID: string) {},
  isValid(_formEl: HTMLFormElement) { return true },
  getResponseElementValue(_formEl: HTMLFormElement) { return '' }
}

export function addReCaptchaTokenInput(token: string, formEl: HTMLFormElement) {
  const existing = formEl.querySelector('input[name="g-recaptcha-response"]') as HTMLInputElement | null
  if (existing) {
    existing.value = token
    return
  }
  const input = document.createElement('input')
  input.type = 'hidden'
  input.name = 'g-recaptcha-response'
  input.value = token
  formEl.appendChild(input)
}
