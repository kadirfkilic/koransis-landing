<script setup lang="ts">
const sectionRef = ref<HTMLElement>()
const hasAnimated = ref(false)

const stats = [
  { target: 1000, suffix: '+', label: 'İşletme' },
  { target: 50000, suffix: '+', label: 'Randevu Yönetildi' },
  { target: 5, suffix: '', label: 'Dil Desteği' },
  { target: 7, suffix: '/24', label: 'Online Erişim' }
]

const counters = stats.map((s) => useCounterAnimation(s.target, 2000))

onMounted(() => {
  if (!sectionRef.value) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.value) {
          hasAnimated.value = true
          counters.forEach((c) => c.start())
          observer.disconnect()
        }
      })
    },
    { threshold: 0.3 }
  )

  observer.observe(sectionRef.value)
})
</script>

<template>
  <section
    id="rakamlar"
    ref="sectionRef"
    class="py-24 lg:py-32 bg-slate-900 text-white"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold mb-4">Rakamlarla Koransis</h2>
        <p class="text-lg text-slate-400 max-w-2xl mx-auto">
          Her geçen gün büyüyen topluluğumuz ve sunduğumuz hizmetten bazı rakamlar.
        </p>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(stat, i) in stats"
          :key="i"
          class="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
        >
          <div class="text-4xl sm:text-5xl font-extrabold text-violet-400 mb-2">
            {{ counters[i].current.value.toLocaleString('tr-TR') }}{{ stat.suffix }}
          </div>
          <div class="text-slate-400 font-medium">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
