<script setup lang="ts">
const features = [
  {
    title: 'Online Randevu Alma',
    icon: 'i-lucide-calendar-clock',
    description: '7 adımlı kolay akış ile müşterileriniz 7/24 online randevu alsın. Kuaför randevu programı olarak en pratik çözüm.',
    details: [
      'Kategori, hizmet, personel, tarih, saat, bilgi ve onay adımları',
      '"Personel fark etmez" seçeneği ile hızlı randevu',
      'Otomatik müsaitlik hesaplama',
      'Çakışma engelleme sistemi'
    ],
    mockup: 'MockupAppointment'
  },
  {
    title: 'Admin Paneli',
    icon: 'i-lucide-settings',
    description: 'Salon yönetim paneli ile randevu, müşteri, personel ve hizmetlerinizi tek yerden yönetin.',
    details: [
      'Randevu, müşteri, personel ve hizmet yönetimi',
      'Durum geçişleri: Bekliyor → Onaylandı → Tamamlandı',
      'Randevu yeniden planlama',
      'Kolay ve hızlı arayüz'
    ],
    mockup: 'MockupAdmin'
  },
  {
    title: 'Hazır Web Sitesi',
    icon: 'i-lucide-globe',
    description: 'Güzellik merkezi web sitesi kurmak hiç bu kadar kolay olmamıştı. Kayıt olun, anında hazır.',
    details: [
      'Hizmetler, ekip, galeri, blog, SSS sayfaları',
      'Custom domain desteği (örn: salonunuz.com)',
      'Tamamen mobil uyumlu tasarım',
      'SEO dostu altyapı'
    ],
    mockup: 'MockupWebsite'
  },
  {
    title: 'Takvim ve Planlama',
    icon: 'i-lucide-calendar-days',
    description: 'Randevu takvimi ile günlük, haftalık ve aylık planlamanızı görsel olarak yapın.',
    details: [
      'Günlük, haftalık ve aylık görünüm',
      'Personel bazlı filtreleme',
      'Çalışma saatleri ve mola yönetimi',
      'Özel kapalı günler tanımlama'
    ],
    mockup: 'MockupCalendar'
  },
  {
    title: 'Dashboard ve Analitik',
    icon: 'i-lucide-chart-bar',
    description: 'Randevu takip programı ile işletmenizin performansını verilerle analiz edin.',
    details: [
      'Günlük randevu özeti ve trendler',
      'Yoğun saatler ısı haritası',
      'Personel performans karşılaştırması',
      'İptal oranları ve en popüler hizmetler'
    ],
    mockup: 'MockupDashboard'
  },
  {
    title: 'Müşteri Yönetimi',
    icon: 'i-lucide-users',
    description: 'Müşteri takip programı ile müşterilerinizi tanıyın, geçmişlerini ve tercihlerini kaydedin.',
    details: [
      'Müşteri geçmişi ve istatistikleri',
      'Ziyaret sıklığı ve tercih analizi',
      'Dahili notlar ile kişisel takip',
      'İletişim mesajları yönetimi'
    ],
    mockup: 'MockupCRM'
  },
  {
    title: 'İçerik Yönetimi',
    icon: 'i-lucide-pen-square',
    description: 'Blog, galeri, kampanya ve daha fazlasını yönetin.',
    details: [
      'Blog yazıp yayınlayın',
      'Galeri ile işlerinizi sergileyin',
      'Kampanya ve promosyon oluşturun',
      'Müşteri yorumlarını onaylayıp yayınlayın'
    ],
    mockup: 'MockupContent'
  },
  {
    title: 'Çoklu Dil Desteği',
    icon: 'i-lucide-languages',
    description: 'Müşterileriniz kendi dillerinde randevu alsın.',
    details: [
      'Türkçe, İngilizce, Arapça, Farsça, Rusça',
      'Turistik bölgelerdeki işletmeler için ideal',
      'Otomatik dil algılama',
      'Tüm arayüz çevrilmiş durumda'
    ],
    mockup: 'MockupLanguages'
  }
]

const featureRefs = ref<HTMLElement[]>([])
const { activeIndex, init } = useStickyFeature(features.length)

function setFeatureRef(el: any, index: number) {
  if (el) featureRefs.value[index] = el
}

onMounted(() => {
  nextTick(() => {
    if (featureRefs.value.length > 0) {
      init(featureRefs.value)
    }
  })
})

function scrollToFeature(index: number) {
  const el = featureRefs.value[index]
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
</script>

<template>
  <section id="ozellikler" class="py-24 lg:py-32 bg-slate-50/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          Kuaför ve Güzellik Merkezi Yönetim Yazılımı
        </h2>
        <p class="text-lg text-slate-500 max-w-2xl mx-auto">
          Online randevu alma, salon yönetimi, müşteri takip programı ve analitik araçları — Koransis ile hepsini tek panelden yönetin.
        </p>
      </div>

      <!-- Desktop: Sticky Layout -->
      <div class="hidden lg:grid lg:grid-cols-12 lg:gap-12">
        <!-- Left: Sticky Navigation -->
        <div class="lg:col-span-4">
          <div class="sticky top-[30vh] space-y-2">
            <button
              v-for="(feature, i) in features"
              :key="i"
              class="feature-item w-full text-left p-4 rounded-xl transition-all duration-300 group"
              :class="activeIndex === i ? 'active bg-white shadow-md border border-violet-100' : 'dimmed hover:opacity-60'"
              @click="scrollToFeature(i)"
            >
              <div class="flex items-center gap-3">
                <div
                  class="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                  :class="activeIndex === i ? 'bg-violet-100' : 'bg-slate-100'"
                >
                  <UIcon
                    :name="feature.icon"
                    class="size-5 transition-colors"
                    :class="activeIndex === i ? 'text-violet-600' : 'text-slate-400'"
                  />
                </div>
                <span
                  class="font-semibold transition-colors"
                  :class="activeIndex === i ? 'text-slate-900' : 'text-slate-500'"
                >
                  {{ feature.title }}
                </span>
              </div>
            </button>
          </div>
        </div>

        <!-- Right: Scrollable Content -->
        <div class="lg:col-span-8 space-y-32">
          <div
            v-for="(feature, i) in features"
            :key="i"
            :ref="(el) => setFeatureRef(el, i)"
            class="min-h-[60vh] flex items-center"
          >
            <div class="w-full">
              <div class="mb-6">
                <h3 class="text-2xl font-bold text-slate-900 mb-2">{{ feature.title }}</h3>
                <p class="text-slate-500">{{ feature.description }}</p>
              </div>

              <ul class="space-y-3 mb-8">
                <li
                  v-for="(detail, j) in feature.details"
                  :key="j"
                  class="flex items-start gap-3"
                >
                  <UIcon name="i-lucide-check-circle" class="size-5 text-violet-500 mt-0.5 flex-shrink-0" />
                  <span class="text-slate-600">{{ detail }}</span>
                </li>
              </ul>

              <MockupsAppointment v-if="feature.mockup === 'MockupAppointment'" />
              <MockupsAdmin v-else-if="feature.mockup === 'MockupAdmin'" />
              <MockupsWebsite v-else-if="feature.mockup === 'MockupWebsite'" />
              <MockupsCalendar v-else-if="feature.mockup === 'MockupCalendar'" />
              <MockupsDashboard v-else-if="feature.mockup === 'MockupDashboard'" />
              <MockupsCRM v-else-if="feature.mockup === 'MockupCRM'" />
              <MockupsContent v-else-if="feature.mockup === 'MockupContent'" />
              <MockupsLanguages v-else-if="feature.mockup === 'MockupLanguages'" />
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile: Stacked Cards -->
      <div class="lg:hidden space-y-8">
        <div
          v-for="(feature, i) in features"
          :key="i"
          class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 card-hover"
        >
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
              <UIcon :name="feature.icon" class="size-5 text-violet-600" />
            </div>
            <h3 class="text-lg font-bold text-slate-900">{{ feature.title }}</h3>
          </div>

          <p class="text-slate-500 mb-4">{{ feature.description }}</p>

          <ul class="space-y-2 mb-6">
            <li
              v-for="(detail, j) in feature.details"
              :key="j"
              class="flex items-start gap-2 text-sm"
            >
              <UIcon name="i-lucide-check" class="size-4 text-violet-500 mt-0.5 flex-shrink-0" />
              <span class="text-slate-600">{{ detail }}</span>
            </li>
          </ul>

          <MockupsAppointment v-if="feature.mockup === 'MockupAppointment'" />
          <MockupsAdmin v-else-if="feature.mockup === 'MockupAdmin'" />
          <MockupsWebsite v-else-if="feature.mockup === 'MockupWebsite'" />
          <MockupsCalendar v-else-if="feature.mockup === 'MockupCalendar'" />
          <MockupsDashboard v-else-if="feature.mockup === 'MockupDashboard'" />
          <MockupsCRM v-else-if="feature.mockup === 'MockupCRM'" />
          <MockupsContent v-else-if="feature.mockup === 'MockupContent'" />
          <MockupsLanguages v-else-if="feature.mockup === 'MockupLanguages'" />
        </div>
      </div>
    </div>
  </section>
</template>
