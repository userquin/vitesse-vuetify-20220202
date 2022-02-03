import type { ViteSSGContext } from 'vite-ssg'
import type { Awaitable } from '@vueuse/core'

export type UserModule = (ctx: ViteSSGContext) => Awaitable<void>
