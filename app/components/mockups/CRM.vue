<template>
  <div class="screenshot-placeholder p-5 !items-start !justify-start" style="aspect-ratio: 16/9">
    <div class="w-full">
      <!-- Search Bar -->
      <div class="flex items-center gap-2 mb-4">
        <div class="flex-1 h-7 rounded-md bg-white border border-slate-200 flex items-center px-2">
          <div class="w-3 h-3 rounded-full border border-slate-300 mr-1.5" />
          <span class="text-[9px] text-slate-400">Müşteri ara...</span>
        </div>
        <div class="px-2.5 py-1.5 bg-violet-500 text-white text-[9px] rounded-md font-medium">+ Yeni</div>
      </div>

      <!-- Customer Cards -->
      <div class="space-y-2">
        <div
          v-for="(customer, i) in customers"
          :key="i"
          class="bg-white rounded-lg p-3 border border-slate-100 flex items-start gap-3"
          :class="i === 0 ? 'ring-1 ring-violet-200' : ''"
        >
          <!-- Avatar -->
          <div
            class="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
            :class="customer.avatarClass"
          >
            {{ customer.initials }}
          </div>

          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between mb-1">
              <span class="text-[11px] font-semibold text-slate-700">{{ customer.name }}</span>
              <span class="text-[8px] text-slate-400">{{ customer.lastVisit }}</span>
            </div>

            <!-- Stats Row -->
            <div class="flex gap-3 mb-1.5">
              <div class="flex items-center gap-1">
                <div class="w-1.5 h-1.5 rounded-full bg-violet-400" />
                <span class="text-[8px] text-slate-500">{{ customer.visits }} ziyaret</span>
              </div>
              <div class="flex items-center gap-1">
                <div class="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span class="text-[8px] text-slate-500">{{ customer.total }}</span>
              </div>
            </div>

            <!-- Tags -->
            <div class="flex gap-1">
              <span
                v-for="(tag, j) in customer.tags"
                :key="j"
                class="text-[7px] px-1.5 py-0.5 rounded-full"
                :class="tag.class"
              >
                {{ tag.label }}
              </span>
            </div>

            <!-- Note -->
            <div v-if="customer.note" class="mt-1.5 text-[8px] text-slate-400 italic border-l-2 border-slate-200 pl-2">
              {{ customer.note }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const customers = [
  {
    name: 'Ayşe Karaca',
    initials: 'AK',
    avatarClass: 'bg-violet-100 text-violet-600',
    lastVisit: '2 gün önce',
    visits: 24,
    total: '₺3.200',
    tags: [
      { label: 'VIP', class: 'bg-amber-100 text-amber-700' },
      { label: 'Düzenli', class: 'bg-emerald-100 text-emerald-700' }
    ],
    note: 'Alerjisi var, boyamada dikkat edilmeli'
  },
  {
    name: 'Fatma Demir',
    initials: 'FD',
    avatarClass: 'bg-pink-100 text-pink-600',
    lastVisit: '1 hafta önce',
    visits: 12,
    total: '₺1.850',
    tags: [
      { label: 'Düzenli', class: 'bg-emerald-100 text-emerald-700' }
    ],
    note: null
  },
  {
    name: 'Zeynep Aksoy',
    initials: 'ZA',
    avatarClass: 'bg-sky-100 text-sky-600',
    lastVisit: '3 hafta önce',
    visits: 5,
    total: '₺680',
    tags: [
      { label: 'Yeni', class: 'bg-blue-100 text-blue-700' }
    ],
    note: null
  }
]
</script>
