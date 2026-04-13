<script setup lang="ts">
const sectionRef = ref<HTMLElement>()
const { observe } = useScrollReveal()

const testimonials = [
  {
    name: 'Ayşe Demir',
    business: 'Glamour Güzellik Merkezi',
    rating: 5,
    text: 'Koransis sayesinde telefon trafiğimiz %70 azaldı. Müşterilerimiz artık 7/24 online randevu alabiliyor. İşletmemizin dijitale geçişi çok kolay oldu.',
    avatar: 'AD'
  },
  {
    name: 'Mehmet Yılmaz',
    business: 'Elite Barber Shop',
    rating: 5,
    text: 'Admin paneli inanılmaz pratik. Personelimin randevularını, müşteri geçmişini ve performansını tek yerden takip ediyorum. Kesinlikle tavsiye ederim.',
    avatar: 'MY'
  },
  {
    name: 'Fatma Kaya',
    business: 'Zen Spa & Wellness',
    rating: 5,
    text: 'Hazır web sitesi özelliği bizi çok etkiledi. Kurulum bile yapmadan profesyonel bir sitemiz oldu. Kendi domainimizle yayına geçtik, müşterilerimiz çok memnun.',
    avatar: 'FK'
  }
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
          Müşterilerimiz Ne Diyor?
        </h2>
        <p class="text-lg text-slate-500 max-w-2xl mx-auto">
          Koransis kullanan işletme sahiplerinin deneyimleri.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(testimonial, i) in testimonials"
          :key="i"
          class="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100 card-hover scroll-reveal"
          :class="`stagger-${i + 1}`"
        >
          <!-- Stars -->
          <div class="flex gap-1 mb-4">
            <UIcon
              v-for="star in testimonial.rating"
              :key="star"
              name="i-lucide-star"
              class="size-5 text-amber-400 fill-amber-400"
            />
          </div>

          <!-- Text -->
          <p class="text-slate-600 leading-relaxed mb-6">
            "{{ testimonial.text }}"
          </p>

          <!-- Author -->
          <div class="flex items-center gap-3 pt-4 border-t border-slate-100">
            <div class="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
              <span class="text-sm font-bold text-violet-600">{{ testimonial.avatar }}</span>
            </div>
            <div>
              <div class="font-semibold text-slate-900 text-sm">{{ testimonial.name }}</div>
              <div class="text-slate-400 text-xs">{{ testimonial.business }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
