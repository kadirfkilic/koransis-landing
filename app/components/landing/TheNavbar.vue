<script setup lang="ts">
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Özellikler', href: '#ozellikler' },
  { label: 'Nasıl Çalışır', href: '#nasil-calisir' },
{ label: 'SSS', href: '#sss' }
]

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

function scrollTo(href: string) {
  mobileMenuOpen.value = false
  const el = document.querySelector(href)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-100' : 'bg-transparent'"
  >
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="text-xl font-extrabold tracking-tight text-slate-900">
        Koran<span class="text-violet-600">sis</span>
      </a>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-slate-600 hover:text-violet-600 transition-colors"
          @click.prevent="scrollTo(link.href)"
        >
          {{ link.label }}
        </a>
      </div>

      <!-- CTA -->
      <div class="hidden md:block">
        <UButton
          label="Bize Ulaşın"
          size="md"
          @click="scrollTo('#iletisim')"
        />
      </div>

      <!-- Mobile Hamburger -->
      <button
        class="md:hidden p-2 text-slate-700"
        aria-label="Menüyü aç"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <UIcon :name="mobileMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'" class="size-6" />
      </button>
    </nav>

    <!-- Mobile Drawer -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 -translate-y-4"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="mobileMenuOpen"
        class="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-lg"
      >
        <div class="px-4 py-4 space-y-3">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="block py-2 text-base font-medium text-slate-700 hover:text-violet-600"
            @click.prevent="scrollTo(link.href)"
          >
            {{ link.label }}
          </a>
          <UButton
            label="Bize Ulaşın"
            block
            size="md"
            @click="scrollTo('#iletisim')"
          />
        </div>
      </div>
    </Transition>
  </header>
</template>
