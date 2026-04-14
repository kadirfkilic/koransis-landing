<script setup lang="ts">
const sectionRef = ref<HTMLElement>()
const { observe } = useScrollReveal()

const problems = [
  { icon: 'i-lucide-phone-missed', text: 'Telefonla randevu karmaşası, kaçan aramalar' },
  { icon: 'i-lucide-users-round', text: 'Müşteri takibi ve geçmişi yapılamıyor' },
  { icon: 'i-lucide-globe', text: 'Dijital varlık eksikliği, web sitesi yok' },
  { icon: 'i-lucide-calendar-x', text: 'Çakışan randevular, planlama hataları' },
  { icon: 'i-lucide-chart-no-axes-column', text: 'İşletme performansı hakkında veri yok' }
]

const solutions = [
  { icon: 'i-lucide-calendar-check', text: '7/24 online randevu alma sistemi ile kesintisiz hizmet' },
  { icon: 'i-lucide-contact', text: 'Müşteri takip programı ile geçmiş ve tercih analizi' },
  { icon: 'i-lucide-layout-dashboard', text: 'Anında hazır profesyonel salon web sitesi' },
  { icon: 'i-lucide-shield-check', text: 'Otomatik randevu çakışma engelleme ve planlama' },
  { icon: 'i-lucide-bar-chart-3', text: 'İşletme yönetim paneli ile analitik ve raporlama' }
]

onMounted(() => {
  if (sectionRef.value) observe(sectionRef.value)
})
</script>

<template>
  <section ref="sectionRef" class="py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 scroll-reveal">
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          Randevu Yönetimindeki Sorunlara Dijital Çözümler
        </h2>
        <p class="text-lg text-slate-500 max-w-2xl mx-auto">
          Kuaför, güzellik merkezi ve salon işletmelerinin yaşadığı günlük randevu sorunlarına Koransis'in sunduğu çözümler.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 lg:gap-16">
        <!-- Problems -->
        <div class="space-y-4">
          <div class="flex items-center gap-2 mb-6 scroll-reveal stagger-1">
            <div class="w-8 h-0.5 bg-slate-300" />
            <span class="text-xs font-semibold uppercase tracking-wider text-slate-400">Sorunlar</span>
          </div>

          <div
            v-for="(problem, i) in problems"
            :key="i"
            class="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 scroll-reveal"
            :class="`stagger-${i + 1}`"
          >
            <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center">
              <UIcon :name="problem.icon" class="size-5 text-slate-500" />
            </div>
            <p class="text-slate-600 pt-1.5">{{ problem.text }}</p>
          </div>
        </div>

        <!-- Solutions -->
        <div class="space-y-4">
          <div class="flex items-center gap-2 mb-6 scroll-reveal stagger-1">
            <div class="w-8 h-0.5 bg-violet-400" />
            <span class="text-xs font-semibold uppercase tracking-wider text-violet-600">Çözümler</span>
          </div>

          <div
            v-for="(solution, i) in solutions"
            :key="i"
            class="flex items-start gap-4 p-4 rounded-xl bg-violet-50/50 border border-violet-100 scroll-reveal"
            :class="`stagger-${i + 1}`"
          >
            <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center">
              <UIcon :name="solution.icon" class="size-5 text-violet-600" />
            </div>
            <p class="text-slate-700 font-medium pt-1.5">{{ solution.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
