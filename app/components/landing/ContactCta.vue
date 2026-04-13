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
  <section id="iletisim" ref="sectionRef" class="py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Left: Content -->
        <div class="scroll-reveal">
          <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            İşletmenizi Dijitale Taşıyın
          </h2>
          <p class="text-lg text-slate-500 mb-8 leading-relaxed">
            Koransis ile randevu yönetimini kolaylaştırın, müşterilerinize profesyonel bir deneyim sunun.
            Hemen bilgi alın, size özel çözümü birlikte belirleyelim.
          </p>

          <div class="space-y-4">
            <div class="flex items-center gap-3 text-slate-600">
              <div class="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center flex-shrink-0">
                <UIcon name="i-lucide-phone" class="size-5 text-violet-600" />
              </div>
              <span>0546 978 14 07</span>
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="scroll-reveal stagger-2">
          <div class="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-slate-100">
            <div v-if="submitted" class="text-center py-12">
              <div class="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <UIcon name="i-lucide-check" class="size-8 text-green-600" />
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-2">Mesajınız Alındı!</h3>
              <p class="text-slate-500">En kısa sürede sizinle iletişime geçeceğiz.</p>
            </div>

            <form v-else @submit.prevent="handleSubmit">
              <h3 class="text-lg font-semibold text-slate-900 mb-1">Bilgi Alın</h3>
              <p class="text-sm text-slate-400 mb-6">Formu doldurun, size ulaşalım.</p>

              <div class="space-y-4">
                <div class="grid sm:grid-cols-2 gap-4">
                  <div>
                    <UInput
                      v-model="form.businessName"
                      placeholder="İşletme Adı *"
                      size="lg"
                      icon="i-lucide-building-2"
                    />
                    <p v-if="errors.businessName" class="text-red-500 text-xs mt-1">{{ errors.businessName }}</p>
                  </div>
                  <div>
                    <UInput
                      v-model="form.contactName"
                      placeholder="Yetkili Adı *"
                      size="lg"
                      icon="i-lucide-user"
                    />
                    <p v-if="errors.contactName" class="text-red-500 text-xs mt-1">{{ errors.contactName }}</p>
                  </div>
                </div>

                <div class="grid sm:grid-cols-2 gap-4">
                  <div>
                    <UInput
                      v-model="form.phone"
                      placeholder="Telefon *"
                      size="lg"
                      icon="i-lucide-phone"
                    />
                    <p v-if="errors.phone" class="text-red-500 text-xs mt-1">{{ errors.phone }}</p>
                  </div>
                  <div>
                    <UInput
                      v-model="form.email"
                      type="email"
                      placeholder="E-posta *"
                      size="lg"
                      icon="i-lucide-mail"
                    />
                    <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
                  </div>
                </div>

                <UTextarea
                  v-model="form.message"
                  placeholder="Mesajınız (opsiyonel)"
                  :rows="5"
                  size="lg"
                  class="w-full"
                />
              </div>

              <p v-if="submitError" class="text-red-500 text-sm text-center mt-4">{{ submitError }}</p>

              <UButton
                type="submit"
                :label="submitting ? 'Gönderiliyor...' : 'Gönder'"
                size="xl"
                block
                icon="i-lucide-send"
                trailing
                :loading="submitting"
                :disabled="submitting"
                class="mt-6"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
