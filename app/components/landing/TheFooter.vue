<script setup lang="ts">
const links = [
  { label: 'Özellikler', href: '#ozellikler' },
  { label: 'Nasıl Çalışır', href: '#nasil-calisir' },
  { label: 'SSS', href: '#sss' },
  { label: 'İletişim', href: '#iletisim' }
]

function scrollTo(href: string) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <footer class="bg-slate-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid md:grid-cols-3 gap-12">
        <!-- Brand -->
        <div>
          <a href="#" class="text-xl font-extrabold tracking-tight">
            Koran<span class="text-violet-400">sis</span>
          </a>
          <p class="mt-3 text-slate-400 text-sm leading-relaxed max-w-xs">
            Kuaför randevu programı, güzellik merkezi yazılımı, berber randevu uygulaması ve salon yönetim sistemi — tüm randevu bazlı işletmeler için profesyonel online randevu ve işletme yönetim platformu.
          </p>
        </div>

        <!-- Links -->
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">Hızlı Bağlantılar</h3>
          <ul class="space-y-2">
            <li v-for="link in links" :key="link.href">
              <a
                :href="link.href"
                class="text-sm text-slate-400 hover:text-white transition-colors"
                @click.prevent="scrollTo(link.href)"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <p class="text-center text-sm text-slate-500">
          &copy; {{ new Date().getFullYear() }} Koransis. Tüm hakları saklıdır.
        </p>
      </div>
    </div>
  </footer>
</template>
