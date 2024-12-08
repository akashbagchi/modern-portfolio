<script setup lang="ts">
import { useEnvironmentNotification } from '../../composables/use-environment-notification'

const { showDevNotification } = useEnvironmentNotification()
</script>

<template>
  <Message
    v-if="showDevNotification"
    v-ripple
    class="dev-build-notification my-4 max-w-7xl px-10 py-4"
    severity="warn"
    :closable="true"
  >
    <div class="flix items-center gap-2 font-mono text-sm">
      <i class="pi pi-info-circle" />
      <span>
        You are viewing a development build. Some features may be unfinished or unstable.
      </span>
    </div>
  </Message>
</template>

<style scoped>
.dev-build-notification {
  /*    background: rgb(241,196,51); */
  background: linear-gradient(50deg, rgba(241, 196, 51, 0.6) 0%, rgba(232, 124, 12, 0.4) 100%);
}
</style>
