<script setup lang="ts">
const title = 'Online Randevu Sistemi | Kuaför, Güzellik Merkezi & Salon Yazılımı - Koransis'
const description = 'Kuaför, güzellik merkezi, berber ve spa salonları için online randevu sistemi. 7/24 randevu alma, müşteri takibi, hazır web sitesi ve analitik paneli tek platformda. 500+ işletme Koransis\'e güveniyor.'
const ogTitle = 'Koransis - Kolay Online Randevu Sistemi | İşletmenizi Dijitale Taşıyın'

useSeoMeta({
  title,
  description,
  ogTitle,
  ogDescription: description,
  ogImage: '/og-image.png',
  ogType: 'website',
  ogLocale: 'tr_TR',
  twitterCard: 'summary_large_image',
  twitterTitle: ogTitle,
  twitterDescription: description
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://koransis.com/' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Koransis',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'Kuaför, güzellik merkezi, berber ve spa salonları için profesyonel online randevu ve işletme yönetim yazılımı.',
        featureList: 'Online Randevu Alma, Admin Paneli, Hazır Web Sitesi, Takvim ve Planlama, Dashboard ve Analitik, Müşteri Yönetimi (CRM), İçerik Yönetimi, Çoklu Dil Desteği',
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'TRY'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          ratingCount: '3',
          bestRating: '5'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Koransis',
          url: 'https://koransis.com'
        }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Koransis',
        url: 'https://koransis.com',
        logo: 'https://koransis.com/favicon-512.png',
        description: 'Kuaför, güzellik merkezi ve randevu bazlı işletmeler için online randevu ve işletme yönetim platformu.',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+90-546-978-14-07',
          contactType: 'customer service',
          availableLanguage: ['Turkish', 'English']
        },
        sameAs: []
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Koransis',
        url: 'https://koransis.com',
        description: 'Online randevu sistemi ve salon yönetim yazılımı',
        inLanguage: 'tr'
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Online randevu sistemi nedir? Koransis ne işe yarar?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Koransis, güzellik merkezleri, kuaförler, spa salonları ve randevu bazlı çalışan tüm işletmeler için geliştirilmiş bir online randevu ve işletme yönetim platformudur. Hazır web sitesi, admin paneli, randevu takvimi ve analitik araçlarını tek çatı altında sunar.'
            }
          },
          {
            '@type': 'Question',
            name: 'Hangi işletmeler online randevu sistemi kullanabilir?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Randevu bazlı çalışan tüm işletmeler Koransis\'i kullanabilir. Güzellik merkezleri, kuaförler, berberler, spa salonları, klinikler, danışmanlık ofisleri, fitness stüdyoları, diyetisyenler, psikologlar ve daha fazlası.'
            }
          },
          {
            '@type': 'Question',
            name: 'Randevu yazılımı için kurulum gerekli mi?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Hayır, herhangi bir kurulum gerekmez. Koransis tamamen bulut tabanlı bir randevu sistemidir. Kayıt olduktan sonra hizmetlerinizi ve personelinizi tanımlayarak hemen kullanmaya başlayabilirsiniz.'
            }
          },
          {
            '@type': 'Question',
            name: 'Kendi domainimle randevu sitesi kurabilir miyim?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Evet! Koransis size hazır bir profesyonel web sitesi sunar ve bu siteyi kendi domain adınızla (örn: salonunuz.com) yayına alabilirsiniz. Teknik bilgi gerekmez, biz sizin için ayarlıyoruz.'
            }
          },
          {
            '@type': 'Question',
            name: 'Müşteriler online randevu nasıl alır?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Müşterileriniz web siteniz üzerinden 7 adımlı basit bir akışla 7/24 online randevu alabilir: Kategori seçimi, hizmet seçimi, personel tercihi, tarih ve saat belirleme, bilgi girişi ve onay. Telefon gerektirmez.'
            }
          },
          {
            '@type': 'Question',
            name: 'Randevu sistemi verileri güvenli mi?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Kesinlikle. Koransis, multi-tenant mimaride çalışır; her işletmenin verileri birbirinden tamamen izoledir. SSL şifreleme, düzenli yedekleme ve güvenlik önlemleri ile verileriniz güvende.'
            }
          },
          {
            '@type': 'Question',
            name: 'Koransis teknik destek sunuyor mu?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Evet, tüm müşterilerimize teknik destek sağlıyoruz. Kurulum, yapılandırma ve kullanım konularında size yardımcı oluyoruz. İhtiyaç duyduğunuzda bize ulaşabilirsiniz.'
            }
          },
          {
            '@type': 'Question',
            name: 'Online randevu sistemi aylık ne kadar?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Koransis, işletmenizin büyüklüğüne ve ihtiyaçlarına göre uygun fiyatlı paketler sunmaktadır. Detaylı fiyat bilgisi için bizimle iletişime geçin, size özel teklif hazırlayalım.'
            }
          },
          {
            '@type': 'Question',
            name: 'Randevu yazılımında müşteri takibi yapılabiliyor mu?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Evet, Koransis dahili müşteri takip programı (Mini CRM) ile müşterilerinizin randevu geçmişini, ziyaret sıklığını, tercih ettikleri hizmetleri ve iletişim bilgilerini tek yerden görüntüleyebilirsiniz.'
            }
          },
          {
            '@type': 'Question',
            name: 'Berber ve kuaför randevu uygulaması olarak kullanılabilir mi?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Kesinlikle. Koransis özellikle kuaför, berber ve güzellik salonları için tasarlanmış bir randevu yönetim yazılımıdır. Hizmet bazlı randevu alma, personel müsaitlik takvimi, müşteri yönetimi ve performans analizi gibi sektöre özel tüm özellikleri içerir.'
            }
          }
        ]
      })
    }
  ]
})
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
