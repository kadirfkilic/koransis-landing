<script setup lang="ts">
const heroRef = ref<HTMLElement>()
const words = ['Randevularınızı', 'Dijitale', 'Taşıyın']
const revealedWords = ref<boolean[]>([])
const showMockup = ref(false)
const showCards = ref(false)
const showSocial = ref(false)

onMounted(() => {
  revealedWords.value = words.map(() => false)
  words.forEach((_, i) => {
    setTimeout(() => {
      revealedWords.value[i] = true
    }, 300 + i * 200)
  })

  setTimeout(() => { showMockup.value = true }, 900)
  setTimeout(() => { showCards.value = true }, 1300)
  setTimeout(() => { showSocial.value = true }, 1100)
})

function scrollToContact() {
  const el = document.querySelector('#iletisim')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function scrollToFeatures() {
  const el = document.querySelector('#ozellikler')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

// Appointment booking mockup data
const activeStep = ref(1)
const steps = ['Hizmet', 'Personel', 'Tarih', 'Onay']
const services = [
  { name: 'Saç Kesimi', duration: '30 dk', price: '₺250', selected: false },
  { name: 'Saç Boyama', duration: '90 dk', price: '₺600', selected: true },
  { name: 'Fön & Şekillendirme', duration: '45 dk', price: '₺150', selected: false },
]

onMounted(() => {
  setInterval(() => {
    activeStep.value = (activeStep.value + 1) % 4
  }, 3000)
})

// Floating notification cards
const notifications = [
  { icon: 'i-lucide-calendar-check', text: 'Yeni randevu', detail: '14:30 - Saç Kesimi', color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-100' },
  { icon: 'i-lucide-trending-up', text: 'Bu hafta', detail: '+%32 müşteri artışı', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100' },
  { icon: 'i-lucide-star', text: 'Yeni yorum', detail: '⭐ 5.0 - Harika hizmet!', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100' },
]
</script>

<template>
  <section
    ref="heroRef"
    class="relative min-h-screen flex flex-col overflow-hidden pt-16"
  >
    <!-- Dot Grid Background -->
    <div class="absolute inset-0 hero-dot-grid opacity-40" />

    <!-- Gradient Orbs -->
    <div class="gradient-orb gradient-orb-1 -top-32 -right-32 opacity-60" />
    <div class="gradient-orb gradient-orb-2 top-1/3 -left-24 opacity-50" />
    <div class="gradient-orb gradient-orb-3 bottom-0 right-1/4 opacity-40" />

    <!-- Main Content -->
    <div class="relative z-10 flex-1 flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <!-- Text Content -->
      <div class="text-center pt-8 sm:pt-12">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 border border-violet-100 text-violet-700 text-sm font-medium mb-8 scroll-reveal"
          :class="{ revealed: true }"
        >
          <UIcon name="i-lucide-sparkles" class="size-4" />
          <span>İşletmeniz için profesyonel randevu sistemi</span>
        </div>

        <!-- Title -->
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
          <span
            v-for="(word, i) in words"
            :key="word"
            class="inline-block transition-all duration-700 ease-out mr-3 md:mr-4"
            :class="revealedWords[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
          >
            <span :class="i === 1 ? 'text-violet-600' : ''">{{ word }}</span>
          </span>
        </h1>

        <!-- Subtitle -->
        <p
          class="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto mb-8 leading-relaxed scroll-reveal"
          :class="{ revealed: true }"
          style="transition-delay: 0.8s"
        >
          Online randevu, hazır web sitesi, admin paneli ve analitik araçları tek platformda.
          İşletmenizi büyütmenin en kolay yolu.
        </p>

        <!-- CTA -->
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center scroll-reveal"
          :class="{ revealed: true }"
          style="transition-delay: 1s"
        >
          <UButton
            label="Hemen Başvurun"
            size="xl"
            icon="i-lucide-arrow-right"
            trailing
            @click="scrollToContact"
          />
          <UButton
            label="Özellikleri Keşfedin"
            size="xl"
            color="neutral"
            variant="soft"
            icon="i-lucide-chevron-down"
            trailing
            @click="scrollToFeatures"
          />
        </div>

        <!-- Social Proof -->
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 transition-all duration-700"
          :class="showSocial ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          <!-- Avatar Stack -->
          <div class="flex items-center -space-x-2">
            <div
              v-for="(color, i) in ['bg-violet-400', 'bg-pink-400', 'bg-amber-400', 'bg-emerald-400', 'bg-sky-400']"
              :key="i"
              class="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
              :class="color"
            >
              {{ ['A', 'M', 'S', 'E', 'K'][i] }}
            </div>
          </div>
          <div class="flex flex-col items-start">
            <div class="flex items-center gap-1">
              <UIcon v-for="n in 5" :key="n" name="i-lucide-star" class="size-3.5 text-amber-400" />
            </div>
            <span class="text-sm text-slate-500"><strong class="text-slate-700">500+</strong> işletme Koransis'e güveniyor</span>
          </div>
        </div>
      </div>

      <!-- Phone Mockup Area -->
      <div
        class="relative mt-10 sm:mt-14 mx-auto w-full max-w-3xl transition-all duration-1000 ease-out"
        :class="showMockup ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
      >
        <!-- Floating Notification Cards -->
        <!-- Left Card -->
        <div
          class="absolute -left-4 sm:-left-12 lg:-left-20 top-8 sm:top-12 z-20 transition-all duration-700 ease-out hidden sm:block"
          :class="showCards ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'"
        >
          <div class="hero-floating-card bg-white/90 backdrop-blur-sm rounded-xl border border-slate-100 p-3 shadow-lg shadow-slate-200/50 hero-float-1">
            <div class="flex items-center gap-2.5">
              <div class="w-9 h-9 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center">
                <UIcon :name="notifications[0].icon" class="size-4 text-violet-600" />
              </div>
              <div>
                <div class="text-[11px] font-semibold text-slate-700">{{ notifications[0].text }}</div>
                <div class="text-[10px] text-slate-400">{{ notifications[0].detail }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Card -->
        <div
          class="absolute -right-4 sm:-right-12 lg:-right-20 top-24 sm:top-32 z-20 transition-all duration-700 ease-out delay-200 hidden sm:block"
          :class="showCards ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'"
        >
          <div class="hero-floating-card bg-white/90 backdrop-blur-sm rounded-xl border border-slate-100 p-3 shadow-lg shadow-slate-200/50 hero-float-2">
            <div class="flex items-center gap-2.5">
              <div class="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                <UIcon :name="notifications[1].icon" class="size-4 text-emerald-600" />
              </div>
              <div>
                <div class="text-[11px] font-semibold text-slate-700">{{ notifications[1].text }}</div>
                <div class="text-[10px] text-emerald-500 font-medium">{{ notifications[1].detail }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Left Card -->
        <div
          class="absolute -left-2 sm:-left-8 lg:-left-14 bottom-16 sm:bottom-20 z-20 transition-all duration-700 ease-out delay-400 hidden sm:block"
          :class="showCards ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'"
        >
          <div class="hero-floating-card bg-white/90 backdrop-blur-sm rounded-xl border border-slate-100 p-3 shadow-lg shadow-slate-200/50 hero-float-3">
            <div class="flex items-center gap-2.5">
              <div class="w-9 h-9 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center">
                <UIcon :name="notifications[2].icon" class="size-4 text-amber-500" />
              </div>
              <div>
                <div class="text-[11px] font-semibold text-slate-700">{{ notifications[2].text }}</div>
                <div class="text-[10px] text-slate-400">{{ notifications[2].detail }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Phone Frame -->
        <div class="relative mx-auto w-[260px] sm:w-[280px] md:w-[300px]">
          <!-- Phone Body -->
          <div class="relative bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl shadow-slate-900/20 ring-1 ring-slate-800">
            <!-- Notch -->
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-900 rounded-b-2xl z-10" />

            <!-- Screen -->
            <div class="relative bg-white rounded-[2rem] overflow-hidden" style="aspect-ratio: 9/19.5">
              <!-- Status Bar -->
              <div class="flex items-center justify-between px-5 pt-3 pb-1">
                <span class="text-[9px] font-semibold text-slate-800">9:41</span>
                <div class="flex items-center gap-1">
                  <div class="w-3.5 h-2 rounded-sm bg-slate-800" />
                </div>
              </div>

              <!-- App Header -->
              <div class="px-4 pt-2 pb-3">
                <div class="text-[10px] text-slate-400 mb-0.5">Hoş geldiniz</div>
                <div class="text-sm font-bold text-slate-800">Randevu Alın</div>
              </div>

              <!-- Stepper -->
              <div class="px-4 mb-3">
                <div class="flex items-center gap-1">
                  <template v-for="(step, i) in steps" :key="i">
                    <div
                      class="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold transition-all duration-500"
                      :class="i <= activeStep ? 'bg-violet-500 text-white' : 'bg-slate-100 text-slate-400'"
                    >
                      {{ i + 1 }}
                    </div>
                    <div
                      v-if="i < steps.length - 1"
                      class="flex-1 h-0.5 rounded-full transition-all duration-500"
                      :class="i < activeStep ? 'bg-violet-500' : 'bg-slate-100'"
                    />
                  </template>
                </div>
                <div class="flex justify-between mt-1">
                  <span v-for="(step, i) in steps" :key="i" class="text-[7px] text-slate-400 w-5 text-center">{{ step }}</span>
                </div>
              </div>

              <!-- Service Selection -->
              <div class="px-4">
                <div class="text-[10px] font-semibold text-slate-700 mb-2">Hizmet Seçin</div>
                <div class="space-y-1.5">
                  <div
                    v-for="(service, i) in services"
                    :key="i"
                    class="flex items-center justify-between p-2 rounded-lg border transition-all"
                    :class="service.selected ? 'border-violet-300 bg-violet-50' : 'border-slate-100 bg-slate-50/50'"
                  >
                    <div class="flex items-center gap-2">
                      <div
                        class="w-3 h-3 rounded-full border-2 transition-all"
                        :class="service.selected ? 'border-violet-500 bg-violet-500' : 'border-slate-300'"
                      />
                      <div>
                        <div class="text-[10px] font-medium text-slate-700">{{ service.name }}</div>
                        <div class="text-[8px] text-slate-400">{{ service.duration }}</div>
                      </div>
                    </div>
                    <span class="text-[9px] font-semibold" :class="service.selected ? 'text-violet-600' : 'text-slate-400'">{{ service.price }}</span>
                  </div>
                </div>
              </div>

              <!-- Selected Info -->
              <div class="px-4 mt-3">
                <div class="bg-violet-50 rounded-lg p-2.5 border border-violet-100">
                  <div class="flex items-center justify-between">
                    <div>
                      <div class="text-[8px] text-violet-500 font-medium">Seçilen Hizmet</div>
                      <div class="text-[10px] font-semibold text-violet-700">Saç Boyama</div>
                    </div>
                    <div class="text-right">
                      <div class="text-[8px] text-violet-500 font-medium">Toplam</div>
                      <div class="text-[10px] font-bold text-violet-700">₺600</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- CTA Button -->
              <div class="px-4 mt-3">
                <div class="w-full py-2 bg-violet-500 text-white text-[10px] font-semibold rounded-xl text-center">
                  Devam Et
                </div>
              </div>

              <!-- Bottom Indicator -->
              <div class="flex justify-center mt-3 pb-2">
                <div class="w-24 h-1 bg-slate-200 rounded-full" />
              </div>
            </div>
          </div>

          <!-- Phone Reflection/Glow -->
          <div class="absolute -inset-4 bg-violet-400/10 rounded-[3rem] blur-2xl -z-10" />
        </div>

        <!-- Desktop Preview (behind phone, only on lg+) -->
        <div class="absolute top-4 left-1/2 -translate-x-1/2 w-full max-w-2xl -z-10 hidden lg:block opacity-30">
          <div class="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <!-- Browser Chrome -->
            <div class="flex items-center gap-1.5 px-3 py-2 bg-slate-50 border-b border-slate-100">
              <div class="w-2 h-2 rounded-full bg-red-300" />
              <div class="w-2 h-2 rounded-full bg-amber-300" />
              <div class="w-2 h-2 rounded-full bg-green-300" />
              <div class="ml-2 flex-1 h-4 rounded bg-white border border-slate-100 max-w-xs" />
            </div>
            <!-- Content -->
            <div class="p-4 h-64 bg-gradient-to-b from-slate-50 to-white">
              <div class="grid grid-cols-4 gap-2 mb-3">
                <div v-for="n in 4" :key="n" class="bg-slate-50 rounded-lg p-2 border border-slate-100">
                  <div class="w-8 h-1.5 bg-slate-200 rounded mb-1" />
                  <div class="w-12 h-2.5 bg-slate-100 rounded" />
                </div>
              </div>
              <div class="grid grid-cols-3 gap-2">
                <div class="col-span-2 bg-slate-50 rounded-lg p-3 border border-slate-100 h-32">
                  <div class="w-20 h-2 bg-slate-200 rounded mb-3" />
                  <div class="flex items-end gap-1 h-16">
                    <div v-for="n in 7" :key="n" class="flex-1 bg-violet-200 rounded-t" :style="{ height: [40, 60, 35, 70, 85, 50, 25][n-1] + '%' }" />
                  </div>
                </div>
                <div class="bg-slate-50 rounded-lg p-3 border border-slate-100 h-32">
                  <div class="w-16 h-2 bg-slate-200 rounded mb-3" />
                  <div class="grid grid-cols-4 gap-0.5">
                    <div v-for="n in 16" :key="n" class="aspect-square rounded-sm" :class="['bg-violet-100','bg-violet-200','bg-violet-300','bg-violet-100'][n % 4]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="relative z-10 flex flex-col items-center pb-8 pt-4">
      <button
        class="flex flex-col items-center gap-2 group cursor-pointer"
        @click="scrollToFeatures"
      >
        <span class="text-xs text-slate-400 group-hover:text-violet-500 transition-colors">Keşfet</span>
        <div class="hero-scroll-indicator">
          <UIcon name="i-lucide-chevrons-down" class="size-5 text-slate-400 group-hover:text-violet-500 transition-colors" />
        </div>
      </button>
    </div>

    <!-- Bottom fade -->
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
  </section>
</template>
