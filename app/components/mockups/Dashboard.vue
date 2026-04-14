<template>
  <div class="screenshot-placeholder p-5 !items-start !justify-start" role="img" aria-label="Koransis dashboard ve analitik paneli önizlemesi" style="aspect-ratio: 16/9">
    <div class="w-full">
      <!-- Stat Cards -->
      <div class="grid grid-cols-4 gap-2 mb-4">
        <div
          v-for="(stat, i) in stats"
          :key="i"
          class="bg-white rounded-lg p-2 border border-slate-100"
        >
          <div class="text-[8px] text-slate-400 mb-0.5">{{ stat.label }}</div>
          <div class="text-sm font-bold" :class="stat.color">{{ stat.value }}</div>
          <div class="text-[7px] mt-0.5" :class="stat.trend.includes('+') ? 'text-emerald-500' : 'text-red-400'">
            {{ stat.trend }}
          </div>
        </div>
      </div>

      <div class="grid grid-cols-5 gap-3">
        <!-- Bar Chart -->
        <div class="col-span-3 bg-white rounded-lg p-3 border border-slate-100">
          <div class="text-[9px] font-semibold text-slate-600 mb-3">Haftalık Randevular</div>
          <div class="flex items-end gap-1.5 h-16">
            <div
              v-for="(bar, i) in bars"
              :key="i"
              class="flex-1 rounded-t-sm transition-all"
              :class="bar.active ? 'bg-violet-500' : 'bg-violet-200'"
              :style="{ height: bar.height + '%' }"
            />
          </div>
          <div class="flex gap-1.5 mt-1">
            <div v-for="day in ['Pzt','Sal','Çar','Per','Cum','Cmt','Paz']" :key="day" class="flex-1 text-center text-[7px] text-slate-400">
              {{ day }}
            </div>
          </div>
        </div>

        <!-- Heatmap -->
        <div class="col-span-2 bg-white rounded-lg p-3 border border-slate-100">
          <div class="text-[9px] font-semibold text-slate-600 mb-2">Yoğun Saatler</div>
          <div class="grid grid-cols-5 gap-0.5">
            <div
              v-for="(cell, i) in heatmap"
              :key="i"
              class="aspect-square rounded-sm"
              :class="cell"
            />
          </div>
          <div class="flex justify-between mt-1.5">
            <span class="text-[7px] text-slate-400">09:00</span>
            <span class="text-[7px] text-slate-400">18:00</span>
          </div>
        </div>
      </div>

      <!-- Top Services -->
      <div class="mt-3 bg-white rounded-lg p-3 border border-slate-100">
        <div class="text-[9px] font-semibold text-slate-600 mb-2">En Popüler Hizmetler</div>
        <div class="space-y-1.5">
          <div
            v-for="(service, i) in topServices"
            :key="i"
            class="flex items-center gap-2"
          >
            <span class="text-[8px] text-slate-500 w-16 truncate">{{ service.name }}</span>
            <div class="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                class="h-full rounded-full bg-violet-400"
                :style="{ width: service.percent + '%' }"
              />
            </div>
            <span class="text-[8px] text-slate-400 w-6 text-right">{{ service.percent }}%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { label: 'Bugün', value: '12', color: 'text-violet-600', trend: '+3 dün' },
  { label: 'Bu Hafta', value: '68', color: 'text-slate-800', trend: '+12%' },
  { label: 'İptal', value: '3', color: 'text-red-500', trend: '-2%' },
  { label: 'Gelir', value: '₺8.4K', color: 'text-emerald-600', trend: '+18%' }
]

const bars = [
  { height: 60, active: false },
  { height: 80, active: false },
  { height: 45, active: false },
  { height: 90, active: true },
  { height: 100, active: false },
  { height: 70, active: false },
  { height: 30, active: false }
]

const heatmap = [
  'bg-violet-100', 'bg-violet-200', 'bg-violet-300', 'bg-violet-100', 'bg-violet-50',
  'bg-violet-200', 'bg-violet-400', 'bg-violet-500', 'bg-violet-300', 'bg-violet-100',
  'bg-violet-300', 'bg-violet-500', 'bg-violet-500', 'bg-violet-400', 'bg-violet-200',
  'bg-violet-200', 'bg-violet-400', 'bg-violet-400', 'bg-violet-300', 'bg-violet-100',
  'bg-violet-100', 'bg-violet-200', 'bg-violet-300', 'bg-violet-200', 'bg-violet-50'
]

const topServices = [
  { name: 'Saç Kesimi', percent: 85 },
  { name: 'Boyama', percent: 62 },
  { name: 'Cilt Bakım', percent: 48 },
  { name: 'Manikür', percent: 35 }
]
</script>
