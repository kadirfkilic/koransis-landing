<script setup lang="ts">
const sectionRef = ref<HTMLElement>()
const { observe } = useScrollReveal()

const brands = [
  'Beauty Studio', 'Glamour Salon', 'Elite Spa', 'Chic Hair',
  'Zen Wellness', 'Royal Barber', 'Glow Clinic', 'Pure Beauty',
  'Star Kuaför', 'Diamond Spa', 'Prestige Salon', 'Lotus Güzellik'
]

onMounted(() => {
  if (sectionRef.value) observe(sectionRef.value)
})
</script>

<template>
  <section ref="sectionRef" aria-label="Koransis online randevu sistemi kullanan işletmeler" class="py-16 border-y border-slate-100 bg-slate-50/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      <p class="text-center text-sm font-medium text-slate-400 scroll-reveal">
        Yüzlerce işletme Koransis ile büyüyor
      </p>
    </div>

    <!-- Marquee -->
    <div class="overflow-hidden">
      <div class="marquee-track">
        <div
          v-for="(brand, i) in [...brands, ...brands]"
          :key="i"
          class="flex-shrink-0 px-8 py-3 mx-4 rounded-lg bg-white border border-slate-100 shadow-sm"
        >
          <span class="text-sm font-semibold text-slate-400 whitespace-nowrap">{{ brand }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
