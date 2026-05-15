import { RECAPTCHA_VERSION_2, reCaptcha2, addReCaptchaTokenInput } from './recaptcha'
import b12Context from '../b12Context.json'

declare const __PRODUCT_URL__: string | undefined
declare const grecaptcha: { ready: (callback: () => void) => void; execute: (siteKey: string, options: any) => Promise<string> }

const PRODUCT_HOST = typeof __PRODUCT_URL__ === 'undefined' ? 'https://b12.io': __PRODUCT_URL__
const CONTACT_FORM_SUBMISSION_URL = `${PRODUCT_HOST}/contact/send/`

function setFormSubmissionMessage(messageNode: HTMLElement, formNode: HTMLFormElement, successMessage?: string) {
  if (successMessage) messageNode.textContent = successMessage
  messageNode.style.display = 'block'
  messageNode.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

function setupForm(formEl: HTMLFormElement) {
  formEl.method = 'POST'
  formEl.action = CONTACT_FORM_SUBMISSION_URL
  const formUUID: string = formEl.dataset.formId || ''
  const formUUIDInput = Object.assign(document.createElement('input'), { type: 'hidden', name: 'form_id', value: formUUID })
  const honeypot = Object.assign(document.createElement('input'), { type: 'text', name: 'sweet_auth_token' })
  honeypot.style.display = 'none'
  honeypot.setAttribute('aria-hidden', 'true')
  honeypot.setAttribute('aria-label', 'Auth token')
  const nextPage = Object.assign(document.createElement('input'), { type: 'hidden', name: 'next_page', value: window.location.href })
  nextPage.style.display = 'none'
  const ajax = Object.assign(document.createElement('input'), { type: 'hidden', name: 'ajax', value: 'true' })
  formEl.append(nextPage, formUUIDInput, honeypot, ajax)
  const url = formEl.getAttribute('action') || CONTACT_FORM_SUBMISSION_URL
  const formBtn = formEl.querySelector('button[type="submit"]') as HTMLButtonElement | null
  const reCaptchaVersion = parseInt(String(b12Context.recaptcha_version))
  if (reCaptchaVersion === RECAPTCHA_VERSION_2) formEl.append(Object.assign(document.createElement('input'), { type: 'hidden', name: 'recaptcha_version', value: String(reCaptchaVersion) }))
  formEl.addEventListener('submit', function(e) {
    e.preventDefault()
    if (reCaptchaVersion === RECAPTCHA_VERSION_2) {
      reCaptcha2.clearError(formUUID)
      if (!reCaptcha2.isValid(formEl)) { reCaptcha2.highlightError(formUUID); return }
      addReCaptchaTokenInput(reCaptcha2.getResponseElementValue(formEl), formEl)
      submitForm()
    } else if (typeof grecaptcha !== 'undefined') {
      grecaptcha.ready(() => grecaptcha.execute('6Ld1R8kUAAAAAGEYGyd1RXFcdSGY03uF4y_yN40A', {}).then(token => { addReCaptchaTokenInput(token, formEl); submitForm() }))
    } else submitForm()
    function submitForm() {
      const formData = new FormData(formEl)
      const successEl = document.querySelector(`#b12-form-done-${formUUID}`) as HTMLElement | null
      const errorEl = document.querySelector(`#b12-form-error-${formUUID}`) as HTMLElement | null
      if (formBtn) formBtn.disabled = true
      const consolidated: Record<string, string> = {}
      formData.forEach((value, key) => { consolidated[key] = consolidated[key] ? `${consolidated[key]},${value}` : String(value) })
      fetch(url, { method: 'POST', headers: { 'X-API-VERSION': '2', 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(consolidated).toString() })
        .then(r => { if (!r.ok) throw new Error('Network response was not ok'); return r.json() })
        .then(response => { if (response?.redirect) { window.location.href = response.redirect; return } if (errorEl) errorEl.style.display = 'none'; if (successEl) { formEl.style.display = 'none'; setFormSubmissionMessage(successEl, formEl, response?.success_message) } })
        .catch(() => { if (errorEl) errorEl.style.display = 'block' })
        .finally(() => { if (formBtn) formBtn.disabled = false })
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('form').forEach(form => {
    const action = form.getAttribute('action') || ''
    if (!form.dataset.formId || (action && action !== CONTACT_FORM_SUBMISSION_URL)) return
    setupForm(form as HTMLFormElement)
  })
})
