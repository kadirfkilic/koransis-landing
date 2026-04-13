<script setup lang="ts">
const sectionRef = ref<HTMLElement>()
const { observe } = useScrollReveal()

const faqs = [
  {
    label: 'Koransis nedir?',
    content: 'Koransis, güzellik merkezleri, kuaförler, spa salonları ve randevu bazlı çalışan tüm işletmeler için geliştirilmiş bir online randevu ve işletme yönetim platformudur. Hazır web sitesi, admin paneli, takvim ve analitik araçlarını tek çatı altında sunar.'
  },
  {
    label: 'Hangi işletmeler kullanabilir?',
    content: 'Randevu bazlı çalışan tüm işletmeler Koransis\'i kullanabilir. Güzellik merkezleri, kuaförler, berberler, spa salonları, klinikler, danışmanlık ofisleri, fitness stüdyoları ve daha fazlası.'
  },
  {
    label: 'Kurulum gerekli mi?',
    content: 'Hayır, herhangi bir kurulum gerekmez. Koransis tamamen bulut tabanlıdır. Kayıt olduktan sonra hizmetlerinizi ve personelinizi tanımlayarak hemen kullanmaya başlayabilirsiniz.'
  },
  {
    label: 'Kendi domainimle kullanabilir miyim?',
    content: 'Evet! Koransis size hazır bir web sitesi sunar ve bu siteyi kendi domain adınızla (örn: salonunuz.com) yayına alabilirsiniz. Teknik bilgi gerekmez, biz sizin için ayarlıyoruz.'
  },
  {
    label: 'Müşterilerim nasıl randevu alacak?',
    content: 'Müşterileriniz web siteniz üzerinden 7 adımlı basit bir akışla online randevu alabilir: Kategori seçimi, hizmet seçimi, personel tercihi, tarih ve saat belirleme, bilgi girişi ve onay. 7/24 açık, telefon gerektirmez.'
  },
  {
    label: 'Verilerim güvenli mi?',
    content: 'Kesinlikle. Koransis, multi-tenant mimaride çalışır; her işletmenin verileri birbirinden tamamen izoledir. SSL şifreleme, düzenli yedekleme ve güvenlik önlemleri ile verileriniz güvende.'
  },
  {
    label: 'Destek sunuyor musunuz?',
    content: 'Evet, tüm müşterilerimize teknik destek sağlıyoruz. Kurulum, yapılandırma ve kullanım konularında size yardımcı oluyoruz. İhtiyaç duyduğunuzda bize ulaşabilirsiniz.'
  },
  {
    label: 'Aylık maliyeti nedir?',
    content: 'Koransis, işletmenizin büyüklüğüne göre çok uygun fiyatlarla hizmet sunmaktadır. Detaylı fiyat bilgisi için lütfen bizimle iletişime geçin.'
  }
]

onMounted(() => {
  if (sectionRef.value) observe(sectionRef.value)
})
</script>

<template>
  <section id="sss" ref="sectionRef" class="py-24 lg:py-32 bg-slate-50/50">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 scroll-reveal">
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          Sıkça Sorulan Sorular
        </h2>
        <p class="text-lg text-slate-500">
          Merak ettiklerinizin yanıtları burada.
        </p>
      </div>

      <div class="scroll-reveal stagger-1">
        <UAccordion
          :items="faqs"
          multiple
        />
      </div>
    </div>
  </section>
</template>
