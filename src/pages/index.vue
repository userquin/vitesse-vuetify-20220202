<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
const disabled = computed(() => {
  return !(name.value && name.value.trim().length > 0)
})
const dialog = ref(false)
const toggle = () => {
  dialog.value = !dialog.value
}

const { t } = useI18n()
</script>

<template>
  <div>
    <p class="text-4xl">
      <carbon-campsite class="inline-block" />
    </p>
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
        Vitesse
      </a>
    </p>
    <p>
      <em class="text-sm opacity-75">{{ t('intro.desc') }}</em>
    </p>

    <div class="py-4" />
    <v-form @submit.prevent="go">
      <v-text-field
        id="input"
        v-model="name"
        autofocus
        :color="disabled ? null : 'primary'"
        w="250px"
        :label="t('intro.whats-your-name')"
        append-inner-icon="i-mdi:lightning-bolt"
        @keydown.enter="go"
      />

      <!--    <input-->
      <!--      id="input"-->
      <!--      v-model="name"-->
      <!--      :placeholder="t('intro.whats-your-name')"-->
      <!--      :aria-label="t('intro.whats-your-name')"-->
      <!--      type="text"-->
      <!--      autocomplete="false"-->
      <!--      p="x-4 y-2"-->
      <!--      w="250px"-->
      <!--      text="center"-->
      <!--      bg="transparent"-->
      <!--      border="~ rounded gray-200 dark:gray-700"-->
      <!--      outline="none active:none"-->
      <!--      @keydown.enter="go"-->
      <!--    >-->
      <!--    <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>-->

      <div>
        <v-btn
          type="submit"
          :disabled="!name"
          variant="outlined"
          :color="name ? 'primary' : null"
          text
          @click="go"
        >
          {{ t('button.go') }}
        </v-btn>
        <v-dialog v-model="dialog" persistent>
          <template #activator="{ props }">
            <v-btn
              type="button"
              class="ml-4"
              v-bind="props"
              variant="outlined"
              color="primary"
              text
              @click="toggle"
            >
              <v-icon :left="true" icon="i-mdi:plus" />
              {{ t('button.showDialog') }}
              <v-tooltip activator="parent" text="toto" anchor="bottom center" />
            </v-btn>
          </template>
          <v-form>
            <v-text-field label="t('intro.whats-your-name')" />
          </v-form>
        </v-dialog>

        <!--
        <button
          class="m-3 text-sm btn"
          :disabled="!name"
          @click="go"
        >
          {{ t('button.go') }}
        </button>
  -->
      </div>
    </v-form>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
