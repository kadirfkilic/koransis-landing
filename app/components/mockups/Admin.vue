<template>
  <div class="screenshot-placeholder p-5 !items-start !justify-start" role="img" aria-label="Salon yönetim admin paneli önizlemesi" style="aspect-ratio: 16/9">
    <div class="w-full">
      <!-- Top bar -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2">
          <div class="w-6 h-6 rounded-md bg-violet-500" />
          <div class="w-16 h-3 rounded bg-slate-200" />
        </div>
        <div class="flex items-center gap-2">
          <div class="w-20 h-5 rounded bg-slate-100" />
          <div class="w-6 h-6 rounded-full bg-violet-100" />
        </div>
      </div>

      <div class="flex gap-4">
        <!-- Sidebar -->
        <div class="hidden sm:flex flex-col gap-2 w-28 shrink-0">
          <div
            v-for="(item, i) in sidebar"
            :key="i"
            class="flex items-center gap-2 px-2 py-1.5 rounded-md text-[10px]"
            :class="i === 0 ? 'bg-violet-100 text-violet-700 font-medium' : 'text-slate-400'"
          >
            <div
              class="w-3.5 h-3.5 rounded"
              :class="i === 0 ? 'bg-violet-300' : 'bg-slate-200'"
            />
            {{ item }}
          </div>
        </div>

        <!-- Main Content -->
        <div class="flex-1 min-w-0">
          <div class="text-xs font-semibold text-slate-700 mb-3">Bugünkü Randevular</div>

          <!-- Table -->
          <div class="bg-white rounded-lg border border-slate-100 overflow-hidden">
            <div class="grid grid-cols-4 gap-2 px-3 py-2 bg-slate-50 border-b border-slate-100">
              <span class="text-[9px] font-medium text-slate-400">Müşteri</span>
              <span class="text-[9px] font-medium text-slate-400">Hizmet</span>
              <span class="text-[9px] font-medium text-slate-400">Saat</span>
              <span class="text-[9px] font-medium text-slate-400">Durum</span>
            </div>
            <div
              v-for="(row, i) in rows"
              :key="i"
              class="grid grid-cols-4 gap-2 px-3 py-2 border-b border-slate-50 last:border-0"
            >
              <span class="text-[10px] text-slate-600 truncate">{{ row.name }}</span>
              <span class="text-[10px] text-slate-500 truncate">{{ row.service }}</span>
              <span class="text-[10px] text-slate-500">{{ row.time }}</span>
              <span
                class="text-[9px] font-medium px-1.5 py-0.5 rounded-full w-fit"
                :class="row.statusClass"
              >
                {{ row.status }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const sidebar = ['Randevular', 'Müşteriler', 'Personel', 'Hizmetler', 'Ayarlar']
const rows = [
  { name: 'Ayşe K.', service: 'Saç Kesimi', time: '10:00', status: 'Onaylandı', statusClass: 'bg-green-100 text-green-700' },
  { name: 'Fatma D.', service: 'Boyama', time: '11:30', status: 'Bekliyor', statusClass: 'bg-amber-100 text-amber-700' },
  { name: 'Zeynep A.', service: 'Manikür', time: '13:00', status: 'Onaylandı', statusClass: 'bg-green-100 text-green-700' },
  { name: 'Elif T.', service: 'Cilt Bakımı', time: '14:30', status: 'Tamamlandı', statusClass: 'bg-slate-100 text-slate-500' }
]
</script>
