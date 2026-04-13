<script setup lang="ts">
const heroRef = ref<HTMLElement>()
const words = ['Randevularınızı', 'Dijitale', 'Taşıyın']
const revealedWords = ref<boolean[]>([])

onMounted(() => {
  revealedWords.value = words.map(() => false)
  words.forEach((_, i) => {
    setTimeout(() => {
      revealedWords.value[i] = true
    }, 300 + i * 200)
  })
})

function scrollToContact() {
  const el = document.querySelector('#iletisim')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function scrollToFeatures() {
  const el = document.querySelector('#ozellikler')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section
    ref="heroRef"
    class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
  >
    <!-- Gradient Orbs -->
    <div class="gradient-orb gradient-orb-1 -top-32 -right-32 opacity-60" />
    <div class="gradient-orb gradient-orb-2 top-1/3 -left-24 opacity-50" />
    <div class="gradient-orb gradient-orb-3 bottom-0 right-1/4 opacity-40" />

    <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
        class="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed scroll-reveal"
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
    </div>

    <!-- Bottom fade -->
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
  </section>
</template>
