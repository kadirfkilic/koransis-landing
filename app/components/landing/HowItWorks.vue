<script setup lang="ts">
const sectionRef = ref<HTMLElement>()
const { observe } = useScrollReveal()

const steps = [
  {
    number: '01',
    title: 'Kaydolun',
    description: 'Bilgilerinizi girin, işletmenizi oluşturun. Kurulum gerektirmez.',
    icon: 'i-lucide-user-plus'
  },
  {
    number: '02',
    title: 'Ayarlayın',
    description: 'Hizmetlerinizi, personelinizi ve çalışma saatlerinizi tanımlayın.',
    icon: 'i-lucide-sliders-horizontal'
  },
  {
    number: '03',
    title: 'Başlatın',
    description: 'Müşterileriniz online randevu almaya başlasın. Hepsi bu kadar!',
    icon: 'i-lucide-rocket'
  }
]

function scrollToContact() {
  const el = document.querySelector('#iletisim')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  if (sectionRef.value) observe(sectionRef.value)
})
</script>

<template>
  <section id="nasil-calisir" ref="sectionRef" class="py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 scroll-reveal">
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          Online Randevu Sistemi Nasıl Çalışır?
        </h2>
        <p class="text-lg text-slate-500 max-w-2xl mx-auto">
          Üç basit adımda kuaför, salon veya güzellik merkezinizi dijitale taşıyın.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
        <!-- Connection Line (Desktop) -->
        <div class="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-violet-200 via-violet-300 to-violet-200" />

        <div
          v-for="(step, i) in steps"
          :key="i"
          class="relative text-center scroll-reveal"
          :class="`stagger-${i + 1}`"
        >
          <!-- Step Circle -->
          <div class="relative inline-flex mb-6">
            <div class="w-16 h-16 rounded-2xl bg-violet-100 flex items-center justify-center relative z-10">
              <UIcon :name="step.icon" class="size-7 text-violet-600" />
            </div>
            <div class="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-violet-600 text-white flex items-center justify-center text-xs font-bold z-20">
              {{ step.number }}
            </div>
          </div>

          <h3 class="text-xl font-bold text-slate-900 mb-2">{{ step.title }}</h3>
          <p class="text-slate-500 leading-relaxed">{{ step.description }}</p>
        </div>
      </div>

      <div class="text-center mt-14 scroll-reveal stagger-4">
        <UButton
          label="Hemen Başlayın"
          size="xl"
          icon="i-lucide-arrow-right"
          trailing
          @click="scrollToContact"
        />
      </div>
    </div>
  </section>
</template>
