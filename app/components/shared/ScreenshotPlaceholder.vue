<script setup lang="ts">
defineProps<{
  label?: string
  aspectRatio?: string
  icon?: string
}>()
</script>

<template>
  <div
    class="screenshot-placeholder"
    :style="{ aspectRatio: aspectRatio || '16/10' }"
  >
    <div class="flex flex-col items-center gap-2">
      <UIcon
        :name="icon || 'i-lucide-monitor'"
        class="size-8 text-slate-400"
      />
      <span class="text-slate-400 text-sm">{{ label || 'Ekran Görüntüsü' }}</span>
    </div>
  </div>
</template>
