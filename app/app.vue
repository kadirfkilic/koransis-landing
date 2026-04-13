<script setup lang="ts">
const title = 'Koransis - Kolay Randevu Sistemi | İşletmeniz İçin Profesyonel Randevu Yönetimi'
const description = 'Güzellik merkezleri, kuaförler ve randevu bazlı işletmeler için online randevu sistemi. Hazır web sitesi, admin paneli, takvim ve analitik tek platformda.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/og-image.png',
  ogType: 'website',
  ogLocale: 'tr_TR',
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Koransis',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'Güzellik merkezleri, kuaförler ve randevu bazlı işletmeler için profesyonel SaaS randevu yönetim platformu.',
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'TRY'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Koransis',
          url: 'https://koransis.com'
        }
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
