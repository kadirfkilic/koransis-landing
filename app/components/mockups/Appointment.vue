<template>
  <div class="screenshot-placeholder p-5 !items-start !justify-start" role="img" aria-label="Online randevu alma akışı önizlemesi" style="aspect-ratio: 16/9">
    <!-- Browser Chrome -->
    <div class="w-full">
      <div class="flex items-center gap-1.5 mb-4">
        <div class="w-2.5 h-2.5 rounded-full bg-red-300" />
        <div class="w-2.5 h-2.5 rounded-full bg-amber-300" />
        <div class="w-2.5 h-2.5 rounded-full bg-green-300" />
        <div class="ml-3 flex-1 h-5 rounded-md bg-slate-100 max-w-48" />
      </div>

      <!-- Stepper -->
      <div class="flex items-center justify-between mb-5 px-2">
        <div
          v-for="(step, i) in steps"
          :key="i"
          class="flex flex-col items-center gap-1 flex-1"
        >
          <div
            class="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold transition-all"
            :class="i <= activeStep ? 'bg-violet-500 text-white' : 'bg-slate-200 text-slate-400'"
          >
            {{ i + 1 }}
          </div>
          <span class="text-[9px] text-slate-400 hidden sm:block">{{ step }}</span>
        </div>
      </div>

      <!-- Content Area -->
      <div class="bg-white rounded-lg p-4 border border-slate-100 shadow-sm">
        <div class="text-xs font-semibold text-slate-700 mb-3">Hizmet Seçin</div>
        <div class="space-y-2">
          <div
            v-for="(service, i) in services"
            :key="i"
            class="flex items-center justify-between p-2.5 rounded-lg border transition-all"
            :class="i === 1 ? 'border-violet-300 bg-violet-50' : 'border-slate-100 bg-slate-50/50'"
          >
            <div class="flex items-center gap-2">
              <div
                class="w-3 h-3 rounded-full border-2"
                :class="i === 1 ? 'border-violet-500 bg-violet-500' : 'border-slate-300'"
              />
              <span class="text-[11px] text-slate-600">{{ service.name }}</span>
            </div>
            <span class="text-[10px] text-slate-400">{{ service.duration }}</span>
          </div>
        </div>
        <div class="mt-3 flex justify-end">
          <div class="px-4 py-1.5 bg-violet-500 text-white text-[10px] font-medium rounded-md">
            Devam Et
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const activeStep = ref(1)
const steps = ['Kategori', 'Hizmet', 'Personel', 'Tarih', 'Saat', 'Bilgi', 'Onay']
const services = [
  { name: 'Saç Kesimi', duration: '30 dk' },
  { name: 'Saç Boyama', duration: '90 dk' },
  { name: 'Fön & Şekillendirme', duration: '45 dk' },
  { name: 'Keratin Bakım', duration: '120 dk' }
]

onMounted(() => {
  setInterval(() => {
    activeStep.value = (activeStep.value + 1) % 7
  }, 2500)
})
</script>
