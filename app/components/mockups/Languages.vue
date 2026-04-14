<template>
  <div class="screenshot-placeholder p-5 !items-start !justify-start" role="img" aria-label="Çoklu dil desteği önizlemesi" style="aspect-ratio: 16/9">
    <div class="w-full">
      <!-- Header -->
      <div class="text-xs font-semibold text-slate-700 mb-4">Çoklu Dil Desteği</div>

      <!-- Language Switcher -->
      <div class="bg-white rounded-xl p-4 border border-slate-100 mb-4">
        <div class="flex flex-wrap gap-2 mb-4">
          <button
            v-for="(lang, i) in languages"
            :key="i"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-medium transition-all border"
            :class="i === activeLang ? 'bg-violet-50 border-violet-200 text-violet-700' : 'bg-slate-50 border-slate-100 text-slate-400'"
            @click="activeLang = i"
          >
            <span class="text-sm">{{ lang.flag }}</span>
            {{ lang.name }}
          </button>
        </div>

        <!-- Preview in Selected Language -->
        <div class="bg-slate-50 rounded-lg p-3 border border-slate-100">
          <div class="text-[10px] font-semibold text-slate-600 mb-2">Önizleme</div>

          <!-- Mini Website Preview -->
          <div class="bg-white rounded-md p-2 border border-slate-100 space-y-2">
            <div class="text-[11px] font-bold text-slate-800" :class="languages[activeLang].rtl ? 'text-right' : ''">
              {{ languages[activeLang].hero }}
            </div>
            <div class="text-[9px] text-slate-500" :class="languages[activeLang].rtl ? 'text-right' : ''">
              {{ languages[activeLang].subtitle }}
            </div>
            <div class="flex gap-2" :class="languages[activeLang].rtl ? 'flex-row-reverse' : ''">
              <div class="px-2.5 py-1 bg-violet-500 text-white text-[8px] rounded font-medium">
                {{ languages[activeLang].cta }}
              </div>
            </div>

            <!-- Nav Items -->
            <div class="flex gap-3 pt-2 border-t border-slate-100" :class="languages[activeLang].rtl ? 'flex-row-reverse' : ''">
              <span
                v-for="(nav, j) in languages[activeLang].navItems"
                :key="j"
                class="text-[8px] text-slate-400"
              >
                {{ nav }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-3 gap-2">
        <div class="bg-white rounded-lg p-2 border border-slate-100 text-center">
          <div class="text-lg font-bold text-violet-600">5</div>
          <div class="text-[8px] text-slate-400">Dil</div>
        </div>
        <div class="bg-white rounded-lg p-2 border border-slate-100 text-center">
          <div class="text-lg font-bold text-slate-800">100%</div>
          <div class="text-[8px] text-slate-400">Çeviri</div>
        </div>
        <div class="bg-white rounded-lg p-2 border border-slate-100 text-center">
          <div class="text-lg font-bold text-emerald-600">RTL</div>
          <div class="text-[8px] text-slate-400">Desteği</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const activeLang = ref(0)

const languages = [
  {
    name: 'Türkçe',
    flag: '🇹🇷',
    rtl: false,
    hero: 'Güzelliğinize Değer Katıyoruz',
    subtitle: 'Profesyonel ekibimizle hizmetinizdeyiz',
    cta: 'Randevu Al',
    navItems: ['Hizmetler', 'Ekip', 'Galeri', 'İletişim']
  },
  {
    name: 'English',
    flag: '🇬🇧',
    rtl: false,
    hero: 'Adding Value to Your Beauty',
    subtitle: 'At your service with our professional team',
    cta: 'Book Now',
    navItems: ['Services', 'Team', 'Gallery', 'Contact']
  },
  {
    name: 'العربية',
    flag: '🇸🇦',
    rtl: true,
    hero: 'نضيف قيمة لجمالك',
    subtitle: 'في خدمتكم مع فريقنا المحترف',
    cta: 'احجز الآن',
    navItems: ['الخدمات', 'الفريق', 'المعرض', 'اتصل']
  },
  {
    name: 'فارسی',
    flag: '🇮🇷',
    rtl: true,
    hero: 'به زیبایی شما ارزش می‌افزاییم',
    subtitle: 'با تیم حرفه‌ای ما در خدمت شماییم',
    cta: 'رزرو کنید',
    navItems: ['خدمات', 'تیم', 'گالری', 'تماس']
  },
  {
    name: 'Русский',
    flag: '🇷🇺',
    rtl: false,
    hero: 'Мы ценим вашу красоту',
    subtitle: 'К вашим услугам профессиональная команда',
    cta: 'Записаться',
    navItems: ['Услуги', 'Команда', 'Галерея', 'Контакты']
  }
]
</script>
