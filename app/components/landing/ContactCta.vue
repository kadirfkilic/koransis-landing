<script setup lang="ts">
const sectionRef = ref<HTMLElement>()
const { observe } = useScrollReveal()

const form = reactive({
  businessName: '',
  contactName: '',
  phone: '',
  email: '',
  message: ''
})

const submitted = ref(false)
const submitting = ref(false)
const submitError = ref('')
const errors = reactive({
  businessName: '',
  contactName: '',
  phone: '',
  email: ''
})

// Track focused fields for floating label effect
const focused = reactive({
  businessName: false,
  contactName: false,
  phone: false,
  email: false,
  message: false
})

function isActive(field: keyof typeof form) {
  return focused[field as keyof typeof focused] || form[field].trim().length > 0
}

function validate() {
  let valid = true
  errors.businessName = ''
  errors.contactName = ''
  errors.phone = ''
  errors.email = ''

  if (!form.businessName.trim()) {
    errors.businessName = 'İşletme adı zorunludur'
    valid = false
  }
  if (!form.contactName.trim()) {
    errors.contactName = 'Yetkili adı zorunludur'
    valid = false
  }
  if (!form.phone.trim()) {
    errors.phone = 'Telefon numarası zorunludur'
    valid = false
  }
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Geçerli bir e-posta adresi giriniz'
    valid = false
  }

  return valid
}

async function handleSubmit() {
  if (!validate()) return

  submitting.value = true
  submitError.value = ''

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        businessName: form.businessName,
        contactName: form.contactName,
        phone: form.phone,
        email: form.email,
        message: form.message,
      },
    })
    submitted.value = true
  }
  catch {
    submitError.value = 'Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.'
  }
  finally {
    submitting.value = false
  }
}

onMounted(() => {
  if (sectionRef.value) observe(sectionRef.value)
})
</script>

<template>
  <section id="iletisim" ref="sectionRef" class="py-24 lg:py-32 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-gradient-to-b from-white via-violet-50/30 to-white pointer-events-none" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Left: Content -->
        <div class="scroll-reveal">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-100 text-violet-600 text-sm font-medium mb-6">
            <UIcon name="i-lucide-mail" class="size-4" />
            <span>Bize Ulaşın</span>
          </div>

          <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            İşletmenizi Dijitale Taşıyın
          </h2>
          <p class="text-lg text-slate-500 mb-10 leading-relaxed">
            Koransis ile randevu yönetimini kolaylaştırın, müşterilerinize profesyonel bir deneyim sunun.
            Hemen bilgi alın, size özel çözümü birlikte belirleyelim.
          </p>

          <!-- Contact info cards -->
          <div class="space-y-4">
            <div class="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
              <div class="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0">
                <UIcon name="i-lucide-phone" class="size-5 text-violet-600" />
              </div>
              <div>
                <div class="text-xs text-slate-400 font-medium mb-0.5">Telefon</div>
                <a href="tel:+905469781407" class="text-slate-700 font-semibold hover:text-violet-600 transition-colors">0546 978 14 07</a>
              </div>
            </div>

            <div class="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
              <div class="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0">
                <UIcon name="i-lucide-clock" class="size-5 text-violet-600" />
              </div>
              <div>
                <div class="text-xs text-slate-400 font-medium mb-0.5">Yanıt Süresi</div>
                <span class="text-slate-700 font-semibold">En geç 24 saat içinde dönüş</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="scroll-reveal stagger-2">
          <div class="relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
            <!-- Decorative gradient -->
            <div class="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent" />

            <!-- Success State -->
            <div v-if="submitted" class="text-center py-12">
              <div class="w-20 h-20 rounded-2xl bg-emerald-50 flex items-center justify-center mx-auto mb-5 border border-emerald-100">
                <UIcon name="i-lucide-check-circle" class="size-10 text-emerald-500" />
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-2">Mesajınız Alındı!</h3>
              <p class="text-slate-500">En kısa sürede sizinle iletişime geçeceğiz.</p>
            </div>

            <!-- Form -->
            <form v-else @submit.prevent="handleSubmit" class="space-y-5">
              <div>
                <h3 class="text-xl font-bold text-slate-900 mb-1">Bilgi Alın</h3>
                <p class="text-sm text-slate-400">Formu doldurun, size ulaşalım.</p>
              </div>

              <div class="grid sm:grid-cols-2 gap-4">
                <!-- İşletme Adı -->
                <div class="contact-field-group">
                  <div
                    class="contact-field"
                    :class="{
                      'contact-field--focused': focused.businessName,
                      'contact-field--error': errors.businessName,
                      'contact-field--filled': form.businessName.trim().length > 0
                    }"
                  >
                    <UIcon name="i-lucide-building-2" class="size-4 contact-field-icon" />
                    <div class="flex-1 relative">
                      <label
                        class="contact-field-label"
                        :class="{ 'contact-field-label--active': isActive('businessName') }"
                      >
                        İşletme Adı *
                      </label>
                      <input
                        v-model="form.businessName"
                        type="text"
                        class="contact-field-input"
                        :class="{ 'pt-4': isActive('businessName') }"
                        @focus="focused.businessName = true"
                        @blur="focused.businessName = false"
                      />
                    </div>
                  </div>
                  <p v-if="errors.businessName" class="text-red-500 text-xs mt-1.5 ml-1">{{ errors.businessName }}</p>
                </div>

                <!-- Yetkili Adı -->
                <div class="contact-field-group">
                  <div
                    class="contact-field"
                    :class="{
                      'contact-field--focused': focused.contactName,
                      'contact-field--error': errors.contactName,
                      'contact-field--filled': form.contactName.trim().length > 0
                    }"
                  >
                    <UIcon name="i-lucide-user" class="size-4 contact-field-icon" />
                    <div class="flex-1 relative">
                      <label
                        class="contact-field-label"
                        :class="{ 'contact-field-label--active': isActive('contactName') }"
                      >
                        Yetkili Adı *
                      </label>
                      <input
                        v-model="form.contactName"
                        type="text"
                        class="contact-field-input"
                        :class="{ 'pt-4': isActive('contactName') }"
                        @focus="focused.contactName = true"
                        @blur="focused.contactName = false"
                      />
                    </div>
                  </div>
                  <p v-if="errors.contactName" class="text-red-500 text-xs mt-1.5 ml-1">{{ errors.contactName }}</p>
                </div>
              </div>

              <div class="grid sm:grid-cols-2 gap-4">
                <!-- Telefon -->
                <div class="contact-field-group">
                  <div
                    class="contact-field"
                    :class="{
                      'contact-field--focused': focused.phone,
                      'contact-field--error': errors.phone,
                      'contact-field--filled': form.phone.trim().length > 0
                    }"
                  >
                    <UIcon name="i-lucide-phone" class="size-4 contact-field-icon" />
                    <div class="flex-1 relative">
                      <label
                        class="contact-field-label"
                        :class="{ 'contact-field-label--active': isActive('phone') }"
                      >
                        Telefon *
                      </label>
                      <input
                        v-model="form.phone"
                        type="tel"
                        class="contact-field-input"
                        :class="{ 'pt-4': isActive('phone') }"
                        @focus="focused.phone = true"
                        @blur="focused.phone = false"
                      />
                    </div>
                  </div>
                  <p v-if="errors.phone" class="text-red-500 text-xs mt-1.5 ml-1">{{ errors.phone }}</p>
                </div>

                <!-- E-posta -->
                <div class="contact-field-group">
                  <div
                    class="contact-field"
                    :class="{
                      'contact-field--focused': focused.email,
                      'contact-field--error': errors.email,
                      'contact-field--filled': form.email.trim().length > 0
                    }"
                  >
                    <UIcon name="i-lucide-mail" class="size-4 contact-field-icon" />
                    <div class="flex-1 relative">
                      <label
                        class="contact-field-label"
                        :class="{ 'contact-field-label--active': isActive('email') }"
                      >
                        E-posta *
                      </label>
                      <input
                        v-model="form.email"
                        type="email"
                        class="contact-field-input"
                        :class="{ 'pt-4': isActive('email') }"
                        @focus="focused.email = true"
                        @blur="focused.email = false"
                      />
                    </div>
                  </div>
                  <p v-if="errors.email" class="text-red-500 text-xs mt-1.5 ml-1">{{ errors.email }}</p>
                </div>
              </div>

              <!-- Mesaj -->
              <div class="contact-field-group">
                <div
                  class="contact-field contact-field--textarea"
                  :class="{
                    'contact-field--focused': focused.message,
                    'contact-field--filled': form.message.trim().length > 0
                  }"
                >
                  <UIcon name="i-lucide-message-square" class="size-4 contact-field-icon mt-0.5" />
                  <div class="flex-1 relative">
                    <label
                      class="contact-field-label"
                      :class="{ 'contact-field-label--active': isActive('message') }"
                    >
                      Mesajınız (opsiyonel)
                    </label>
                    <textarea
                      v-model="form.message"
                      rows="4"
                      class="contact-field-input resize-none"
                      :class="{ 'pt-5': isActive('message') }"
                      @focus="focused.message = true"
                      @blur="focused.message = false"
                    />
                  </div>
                </div>
              </div>

              <p v-if="submitError" class="text-red-500 text-sm text-center">{{ submitError }}</p>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="submitting"
                class="contact-submit-btn group"
              >
                <span v-if="submitting" class="flex items-center justify-center gap-2">
                  <UIcon name="i-lucide-loader-2" class="size-5 animate-spin" />
                  Gönderiliyor...
                </span>
                <span v-else class="flex items-center justify-center gap-2">
                  Gönder
                  <UIcon name="i-lucide-send" class="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>

              <!-- Privacy note -->
              <p class="text-xs text-slate-400 text-center">
                <UIcon name="i-lucide-shield-check" class="size-3 inline-block mr-1 -mt-0.5" />
                Bilgileriniz gizli tutulur ve üçüncü taraflarla paylaşılmaz.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
