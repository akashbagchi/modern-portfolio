<template>
  <Html lang="en">
    <div>
      <NuxtLayout>
        <NuxtPage :key="$route.fullPath" />
      </NuxtLayout>
    </div>
  </Html>
</template>
