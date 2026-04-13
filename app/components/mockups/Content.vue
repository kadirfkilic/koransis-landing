<template>
  <div class="screenshot-placeholder p-5 !items-start !justify-start" style="aspect-ratio: 16/9">
    <div class="w-full">
      <!-- Tabs -->
      <div class="flex gap-1 mb-4 bg-white rounded-lg p-1 border border-slate-100">
        <div
          v-for="(tab, i) in tabs"
          :key="i"
          class="px-3 py-1.5 rounded-md text-[9px] font-medium"
          :class="i === activeTab ? 'bg-violet-100 text-violet-700' : 'text-slate-400'"
        >
          {{ tab }}
        </div>
      </div>

      <!-- Blog Posts Grid -->
      <div v-if="activeTab === 0" class="grid grid-cols-2 gap-3">
        <div
          v-for="(post, i) in blogPosts"
          :key="i"
          class="bg-white rounded-lg border border-slate-100 overflow-hidden"
        >
          <div class="h-12" :class="post.coverClass" />
          <div class="p-2">
            <div class="text-[10px] font-semibold text-slate-700 mb-0.5">{{ post.title }}</div>
            <div class="text-[8px] text-slate-400 mb-1.5">{{ post.date }}</div>
            <div class="flex items-center justify-between">
              <span
                class="text-[7px] px-1.5 py-0.5 rounded-full"
                :class="post.status === 'Yayında' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'"
              >
                {{ post.status }}
              </span>
              <div class="flex gap-1">
                <div class="w-4 h-4 rounded bg-slate-100" />
                <div class="w-4 h-4 rounded bg-slate-100" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Gallery -->
      <div v-if="activeTab === 1" class="grid grid-cols-3 gap-2">
        <div
          v-for="i in 6"
          :key="i"
          class="aspect-square rounded-lg"
          :class="[
            'bg-gradient-to-br',
            i % 3 === 0 ? 'from-pink-100 to-pink-200' :
            i % 3 === 1 ? 'from-violet-100 to-violet-200' :
            'from-sky-100 to-sky-200'
          ]"
        />
      </div>

      <!-- Campaigns -->
      <div v-if="activeTab === 2" class="space-y-2">
        <div
          v-for="(campaign, i) in campaigns"
          :key="i"
          class="bg-white rounded-lg p-3 border border-slate-100 flex items-center gap-3"
        >
          <div class="w-8 h-8 rounded-lg flex items-center justify-center" :class="campaign.iconClass">
            <span class="text-sm">{{ campaign.emoji }}</span>
          </div>
          <div class="flex-1">
            <div class="text-[10px] font-semibold text-slate-700">{{ campaign.title }}</div>
            <div class="text-[8px] text-slate-400">{{ campaign.period }}</div>
          </div>
          <span
            class="text-[8px] px-2 py-0.5 rounded-full font-medium"
            :class="campaign.active ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'"
          >
            {{ campaign.active ? 'Aktif' : 'Bitti' }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const activeTab = ref(0)
const tabs = ['Blog', 'Galeri', 'Kampanyalar']

const blogPosts = [
  { title: 'Yaz İçin Saç Bakım İpuçları', date: '12 Haz 2025', status: 'Yayında', coverClass: 'bg-gradient-to-r from-violet-200 to-pink-200' },
  { title: 'Cilt Bakımında 5 Altın Kural', date: '8 Haz 2025', status: 'Yayında', coverClass: 'bg-gradient-to-r from-sky-200 to-cyan-200' },
  { title: 'Doğal Saç Boyama Rehberi', date: '3 Haz 2025', status: 'Taslak', coverClass: 'bg-gradient-to-r from-amber-200 to-orange-200' },
  { title: 'Tırnak Bakım Trendleri', date: '28 May 2025', status: 'Yayında', coverClass: 'bg-gradient-to-r from-rose-200 to-pink-200' }
]

const campaigns = [
  { title: 'Yaz İndirimi - %20', emoji: '☀️', iconClass: 'bg-amber-50', period: '1-30 Haziran', active: true },
  { title: 'Arkadaşını Getir Kampanyası', emoji: '🤝', iconClass: 'bg-violet-50', period: '15 Haz - 15 Tem', active: true },
  { title: 'Bahar Fırsatları', emoji: '🌸', iconClass: 'bg-pink-50', period: '1-31 Mayıs', active: false }
]

onMounted(() => {
  setInterval(() => {
    activeTab.value = (activeTab.value + 1) % 3
  }, 3000)
})
</script>
