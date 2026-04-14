<script setup lang="ts">
const sectionRef = ref<HTMLElement>()
const { observe } = useScrollReveal()

const faqs = [
  {
    label: 'Online randevu sistemi nedir? Koransis ne işe yarar?',
    content: 'Koransis, güzellik merkezleri, kuaförler, berberler, spa salonları ve randevu bazlı çalışan tüm işletmeler için geliştirilmiş bir online randevu ve işletme yönetim yazılımıdır. 7/24 online randevu alma, hazır web sitesi, admin paneli, randevu takvimi ve analitik araçlarını tek çatı altında sunar.'
  },
  {
    label: 'Hangi işletmeler online randevu sistemi kullanabilir?',
    content: 'Randevu bazlı çalışan tüm işletmeler Koransis\'i kullanabilir: Güzellik merkezleri, kuaförler, berberler, spa ve wellness merkezleri, klinikler, diyetisyenler, psikologlar, danışmanlık ofisleri, fitness stüdyoları, veteriner klinikleri ve daha fazlası. Her sektöre uygun randevu yönetim çözümü sunar.'
  },
  {
    label: 'Kuaför randevu programı için kurulum gerekli mi?',
    content: 'Hayır, herhangi bir kurulum veya teknik bilgi gerekmez. Koransis tamamen bulut tabanlı bir randevu yazılımıdır. Kayıt olduktan sonra hizmetlerinizi ve personelinizi tanımlayarak dakikalar içinde online randevu almaya başlayabilirsiniz.'
  },
  {
    label: 'Kendi domainimle güzellik merkezi web sitesi kurabilir miyim?',
    content: 'Evet! Koransis size hazır bir profesyonel web sitesi sunar ve bu siteyi kendi domain adınızla (örn: salonunuz.com) yayına alabilirsiniz. Hizmetler, ekip, galeri, blog ve SSS sayfaları otomatik oluşturulur. Teknik bilgi gerekmez, biz sizin için ayarlıyoruz.'
  },
  {
    label: 'Müşteriler online randevu nasıl alır?',
    content: 'Müşterileriniz web siteniz üzerinden 7 adımlı basit bir akışla 7/24 online randevu alabilir: Kategori seçimi, hizmet seçimi, personel tercihi, tarih ve saat belirleme, bilgi girişi ve onay. Telefon gerektirmez, müşterileriniz istedikleri zaman randevu oluşturabilir.'
  },
  {
    label: 'Randevu sistemi verileri güvenli mi?',
    content: 'Kesinlikle. Koransis, multi-tenant mimaride çalışır; her işletmenin verileri birbirinden tamamen izoledir. SSL şifreleme, düzenli yedekleme ve güvenlik önlemleri ile müşteri bilgileriniz ve randevu verileriniz güvende tutulur.'
  },
  {
    label: 'Koransis teknik destek sunuyor mu?',
    content: 'Evet, tüm müşterilerimize Türkçe teknik destek sağlıyoruz. Randevu sistemi kurulumu, yapılandırma, web sitesi ayarları ve kullanım konularında size yardımcı oluyoruz. İhtiyaç duyduğunuzda bize ulaşabilirsiniz.'
  },
  {
    label: 'Online randevu sistemi aylık ne kadar?',
    content: 'Koransis, işletmenizin büyüklüğüne ve ihtiyaçlarına göre uygun fiyatlı paketler sunmaktadır. Kuaför randevu programı, güzellik merkezi yazılımı veya salon yönetim sistemi olarak kullanın — detaylı fiyat bilgisi için bizimle iletişime geçin, size özel teklif hazırlayalım.'
  },
  {
    label: 'Randevu yazılımında müşteri takibi yapılabiliyor mu?',
    content: 'Evet, Koransis dahili müşteri takip programı (Mini CRM) ile müşterilerinizin randevu geçmişini, ziyaret sıklığını, tercih ettikleri hizmetleri ve iletişim bilgilerini tek yerden görüntüleyebilirsiniz. Dahili notlar ile kişisel takip de yapabilirsiniz.'
  },
  {
    label: 'Berber ve kuaför randevu uygulaması olarak kullanılabilir mi?',
    content: 'Kesinlikle. Koransis özellikle kuaför, berber ve güzellik salonları için tasarlanmış bir randevu yönetim yazılımıdır. Hizmet bazlı randevu alma, personel müsaitlik takvimi, müşteri yönetimi ve performans analizi gibi sektöre özel tüm özellikleri içerir.'
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
          Online Randevu Sistemi Hakkında Sıkça Sorulan Sorular
        </h2>
        <p class="text-lg text-slate-500">
          Kuaför randevu programı, güzellik merkezi yazılımı ve salon yönetimi hakkında merak ettikleriniz.
        </p>
      </div>

      <div class="scroll-reveal stagger-1">
        <UAccordion
          :items="faqs"
          multiple
          :ui="{
            body: 'text-slate-600',
            trigger: 'text-slate-900 font-medium'
          }"
        />
      </div>
    </div>
  </section>
</template>
