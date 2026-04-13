<template>
  <div class="screenshot-placeholder p-5 !items-start !justify-start" style="aspect-ratio: 16/9">
    <div class="w-full">
      <!-- Header -->
      <div class="flex items-center justify-between mb-4">
        <div class="text-xs font-semibold text-slate-700">Haziran 2025</div>
        <div class="flex items-center gap-1">
          <div class="px-2 py-1 text-[9px] rounded bg-violet-100 text-violet-700 font-medium">Haftalık</div>
          <div class="px-2 py-1 text-[9px] rounded bg-slate-100 text-slate-400">Aylık</div>
        </div>
      </div>

      <!-- Calendar Grid -->
      <div class="bg-white rounded-lg border border-slate-100 overflow-hidden">
        <!-- Day Headers -->
        <div class="grid grid-cols-7 border-b border-slate-100">
          <div
            v-for="day in days"
            :key="day"
            class="px-1 py-1.5 text-center text-[9px] font-medium text-slate-400"
          >
            {{ day }}
          </div>
        </div>

        <!-- Time Slots -->
        <div class="grid grid-cols-7">
          <div
            v-for="(col, colIdx) in weekSlots"
            :key="colIdx"
            class="border-r border-slate-50 last:border-0 min-h-[100px]"
          >
            <div
              v-for="(slot, slotIdx) in col"
              :key="slotIdx"
              class="mx-0.5 my-0.5 px-1 py-0.5 rounded text-[7px] leading-tight"
              :class="slot.class"
            >
              <div class="font-medium">{{ slot.time }}</div>
              <div class="truncate opacity-80">{{ slot.name }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Legend -->
      <div class="flex gap-3 mt-3">
        <div class="flex items-center gap-1">
          <div class="w-2 h-2 rounded-sm bg-violet-400" />
          <span class="text-[8px] text-slate-400">Onaylı</span>
        </div>
        <div class="flex items-center gap-1">
          <div class="w-2 h-2 rounded-sm bg-amber-400" />
          <span class="text-[8px] text-slate-400">Bekliyor</span>
        </div>
        <div class="flex items-center gap-1">
          <div class="w-2 h-2 rounded-sm bg-emerald-400" />
          <span class="text-[8px] text-slate-400">Tamamlandı</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const days = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz']
const weekSlots = [
  [
    { time: '09:00', name: 'Ayşe K.', class: 'bg-violet-100 text-violet-700' },
    { time: '11:00', name: 'Fatma D.', class: 'bg-emerald-100 text-emerald-700' }
  ],
  [
    { time: '10:00', name: 'Zeynep A.', class: 'bg-violet-100 text-violet-700' },
    { time: '14:00', name: 'Elif T.', class: 'bg-amber-100 text-amber-700' }
  ],
  [
    { time: '09:30', name: 'Merve S.', class: 'bg-emerald-100 text-emerald-700' },
    { time: '13:00', name: 'Seda B.', class: 'bg-violet-100 text-violet-700' },
    { time: '16:00', name: 'Derya K.', class: 'bg-violet-100 text-violet-700' }
  ],
  [
    { time: '10:30', name: 'Hale Y.', class: 'bg-amber-100 text-amber-700' },
    { time: '15:00', name: 'Nur Ç.', class: 'bg-violet-100 text-violet-700' }
  ],
  [
    { time: '09:00', name: 'Gül P.', class: 'bg-violet-100 text-violet-700' },
    { time: '11:30', name: 'Aslı M.', class: 'bg-emerald-100 text-emerald-700' },
    { time: '14:00', name: 'Büşra T.', class: 'bg-violet-100 text-violet-700' }
  ],
  [
    { time: '10:00', name: 'İrem D.', class: 'bg-violet-100 text-violet-700' },
    { time: '12:00', name: 'Ceren A.', class: 'bg-amber-100 text-amber-700' }
  ],
  []
]
</script>
