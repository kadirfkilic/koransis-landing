<template>
  <div class="screenshot-placeholder p-5 !items-start !justify-start" role="img" aria-label="Hazır güzellik merkezi web sitesi önizlemesi" style="aspect-ratio: 16/9">
    <div class="w-full">
      <!-- Browser Chrome -->
      <div class="flex items-center gap-1.5 mb-3">
        <div class="w-2.5 h-2.5 rounded-full bg-red-300" />
        <div class="w-2.5 h-2.5 rounded-full bg-amber-300" />
        <div class="w-2.5 h-2.5 rounded-full bg-green-300" />
        <div class="ml-3 flex-1 h-5 rounded-md bg-white border border-slate-200 flex items-center px-2">
          <span class="text-[9px] text-slate-400">salonunuz.com</span>
        </div>
      </div>

      <!-- Website Preview -->
      <div class="bg-white rounded-lg border border-slate-100 overflow-hidden">
        <!-- Nav -->
        <div class="flex items-center justify-between px-3 py-2 border-b border-slate-100">
          <div class="text-[10px] font-bold text-slate-700">Glamour Salon</div>
          <div class="flex gap-3">
            <span class="text-[9px] text-slate-400">Hizmetler</span>
            <span class="text-[9px] text-slate-400">Ekip</span>
            <span class="text-[9px] text-slate-400">Galeri</span>
            <span class="text-[9px] text-slate-400 hidden sm:inline">Blog</span>
          </div>
          <div class="px-2 py-1 bg-violet-500 text-white text-[8px] rounded font-medium">Randevu Al</div>
        </div>

        <!-- Hero -->
        <div class="bg-gradient-to-br from-violet-50 to-pink-50 px-4 py-5 text-center">
          <div class="text-[11px] font-bold text-slate-800 mb-1">Güzelliğinize Değer Katıyoruz</div>
          <div class="text-[9px] text-slate-500 mb-2">Profesyonel ekibimizle tanışın</div>
          <div class="inline-block px-3 py-1 bg-violet-500 text-white text-[8px] rounded font-medium">Randevu Al</div>
        </div>

        <!-- Services Grid -->
        <div class="p-3">
          <div class="text-[9px] font-semibold text-slate-600 mb-2">Hizmetlerimiz</div>
          <div class="grid grid-cols-3 gap-2">
            <div
              v-for="(service, i) in services"
              :key="i"
              class="bg-slate-50 rounded-md p-2 text-center"
            >
              <div class="w-5 h-5 rounded-full mx-auto mb-1" :class="service.color" />
              <div class="text-[8px] text-slate-600 font-medium">{{ service.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const services = [
  { name: 'Saç Bakım', color: 'bg-violet-200' },
  { name: 'Cilt Bakım', color: 'bg-pink-200' },
  { name: 'Manikür', color: 'bg-rose-200' }
]
</script>
