<script setup lang="ts">
import { ref } from 'vue'
import { useMobile } from '../composables/use-mobile.ts'

const _isMobile = useMobile()

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

const formData = ref<ContactForm>({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')

const socialLinks = [
  {
    name: 'GitHub',
    icon: 'pi pi-github',
    url: 'https://github.com/akashbagchi',
    color: '#333',
  },
  {
    name: 'LinkedIn',
    icon: 'pi pi-linkedin',
    url: 'https://linkedin.com/in/akashbagchi',
    color: '#0077B5',
  },
  {
    name: 'Email',
    icon: 'pi pi-envelope',
    url: 'mailto:bagchiakash@icloud.com',
    color: '#EA4335',
  },
]

async function handleSubmit() {
  isSubmitting.value = true
  submitError.value = ''
  submitSuccess.value = false

  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: formData.value,
    })

    if (response.success) {
      submitSuccess.value = true
      // Reset form
      formData.value = {
        name: '',
        email: '',
        subject: '',
        message: '',
      }
    }
  }
  catch (error: any) {
    submitError.value = error.data?.message || 'Failed to send message. Please try again.'
  }
  finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="mx-auto max-w-4xl py-12 font-mono">
    <h1 class="mb-8 text-3xl font-bold">
      Contact
    </h1>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
      <!-- Contact form (2/3 width) -->
      <div class="md:col-span-2">
        <div
          class="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900/50"
        >
          <h2 class="mb-6 text-xl font-semibold">
            Send me a message
          </h2>

          <Message
            v-if="submitSuccess"
            severity="success"
            :closable="true"
            class="mb-4"
            @close="submitSuccess = false"
          >
            Message sent successfully! I'll get back to you soon.
          </Message>

          <Message
            v-if="submitError"
            severity="error"
            :closable="true"
            class="mb-4"
            @close="submitError = ''"
          >
            {{ submitError }}
          </Message>

          <form class="space-y-4" @submit.prevent="handleSubmit">
            <div>
              <label for="name" class="mb-2 block text-sm font-medium">Name</label>
              <InputText
                id="name"
                v-model="formData.name"
                placeholder="Your name"
                required
                class="w-full"
                :disabled="isSubmitting"
              />
            </div>

            <div>
              <label for="email" class="mb-2 block text-sm font-medium">Email</label>
              <InputText
                id="email"
                v-model="formData.email"
                type="email"
                placeholder="your.email@example.com"
                required
                class="w-full"
                :disabled="isSubmitting"
              />
            </div>

            <div>
              <label for="subject" class="mb-2 block text-sm font-medium">Subject</label>
              <InputText
                id="subject"
                v-model="formData.subject"
                placeholder="What's this about?"
                required
                class="w-full"
                :disabled="isSubmitting"
              />
            </div>

            <div>
              <label for="message" class="mb-2 block text-sm font-medium">Message</label>
              <Textarea
                id="message"
                v-model="formData.message"
                placeholder="Your message..."
                required
                rows="6"
                class="w-full"
                :disabled="isSubmitting"
              />
            </div>

            <Button
              type="submit"
              label="Send Message"
              icon="pi pi-send"
              :loading="isSubmitting"
              :disabled="isSubmitting"
              class="w-full"
              severity="primary"
              size="large"
            />
          </form>
        </div>
      </div>

      <!-- Sidebar - 1/3 width -->
      <div class="space-y-6">
        <!-- Social Links -->
        <div
          class="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900/50"
        >
          <h3 class="mb-4 text-lg font-semibold">
            Connect
          </h3>
          <div
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 rounded-lg p-3 transition-all hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <i :class="link.icon" class="text-xl" :style="{ color: link.color }" />
            <span class="text-sm">{{ link.name }}</span>
          </div>
        </div>

        <!-- Location -->
        <div
          class="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900/50"
        >
          <h3 class="mb-4 text-lg font-semibold">
            Location
          </h3>
          <div class="flex items-start gap-3">
            <i class="pi pi-map-marker text-xl text-primary-500" />
            <div class="text-sm">
              <p class="font-medium">
                Phoenix, Arizona
              </p>
              <p class="text-gray-600 dark:text-gray-400">
                United States
              </p>
            </div>
          </div>
        </div>

        <!-- Response Time -->
        <div
          class="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900/50"
        >
          <h3 class="mb-4 text-lg font-semibold">
            Response Time
          </h3>
          <div class="flex items-start gap-3">
            <i class="pi pi-clock text-xl text-primary-500" />
            <p class="text-sm text-gray-600 dark:text-gray-400">
              I typically respond within 24-48 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
