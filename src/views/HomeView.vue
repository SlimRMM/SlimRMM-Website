<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { supportedLocales, setLocale, type SupportedLocale } from '../i18n'
import {
  Monitor,
  Shield,
  Server,
  Cpu,
  FileText,
  Zap,
  Lock,
  Cloud,
  CheckCircle,
  XCircle,
  ChevronDown,
  Globe,
  Menu,
  X,
  ArrowRight,
  Users,
  Database,
  Box,
  Settings,
  Layers,
  Mail,
  Bell,
  Webhook,
  Send,
  ClipboardCheck,
  Tags,
  Radio,
  KeyRound,
} from 'lucide-vue-next'

const { t, tm, locale } = useI18n()

// Mobile menu
const mobileMenuOpen = ref(false)

// Language dropdown
const languageDropdownOpen = ref(false)
const changeLanguage = (newLocale: SupportedLocale) => {
  setLocale(newLocale)
  languageDropdownOpen.value = false
}

// FAQ state
const openFaq = ref<string | null>(null)
const toggleFaq = (key: string) => {
  openFaq.value = openFaq.value === key ? null : key
}

// Pricing calculator
const agentCount = ref(100)
const deploymentModel = ref<'selfHosted' | 'managed'>('selfHosted')
const billingCycle = ref<'yearly' | 'monthly'>('yearly')

const pricingCalculation = computed(() => {
  const agents = agentCount.value
  const packages = Math.ceil(agents / 50)

  let pricePerPackage: number
  if (agents >= 500) {
    pricePerPackage = 55
  } else if (agents >= 250) {
    pricePerPackage = 65
  } else {
    pricePerPackage = 75
  }

  const basePrice = packages * pricePerPackage

  let hostingFee = 0
  if (deploymentModel.value === 'managed') {
    if (agents <= 500) {
      hostingFee = 250
    } else if (agents <= 1000) {
      hostingFee = 450
    } else {
      hostingFee = 650
    }
  }

  const subtotal = basePrice + hostingFee

  // Apply billing cycle adjustment (yearly = 7% discount, monthly = no change)
  let billingMultiplier = 1
  let billingAdjustment = 0
  if (billingCycle.value === 'yearly') {
    billingMultiplier = 0.93 // 7% discount
    billingAdjustment = Math.round(subtotal * -0.07 * 100) / 100
  }

  const monthly = Math.round(subtotal * billingMultiplier * 100) / 100
  const yearly = Math.round(monthly * 12 * 100) / 100
  const perAgent = monthly / agents
  const savings = billingCycle.value === 'yearly' ? Math.round(subtotal * 0.07 * 12 * 100) / 100 : 0

  return {
    basePrice,
    hostingFee,
    billingAdjustment,
    monthly,
    yearly,
    perAgent: perAgent.toFixed(2),
    packages,
    pricePerPackage,
    savings,
  }
})

// Scroll to section
const scrollTo = (id: string) => {
  mobileMenuOpen.value = false
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

// Feature icons mapping
const featureIcons = {
  monitoring: Monitor,
  remote: Server,
  software: Cpu,
  security: Shield,
  automation: Zap,
  reporting: FileText,
  proxmox: Layers,
  services: Settings,
  compliance: ClipboardCheck,
  tagging: Tags,
}

// Integration icons mapping
const integrationIcons = {
  osquery: Database,
  proxmox: Layers,
  docker: Box,
  webrtc: Monitor,
  email: Mail,
  pushover: Bell,
  webhooks: Webhook,
  syslog: Radio,
}

// Security icons mapping
const securityIcons = {
  mtls: Lock,
  zeroTrust: Shield,
  audit: FileText,
  rbac: Users,
  mfa: KeyRound,
}

// FAQ keys
const faqKeys = ['platforms', 'migration', 'standalone', 'support', 'updates', 'scaling', 'proxmox']

// Contact form
const contactForm = ref({
  name: '',
  email: '',
  company: '',
  message: '',
  type: 'demo' as 'demo' | 'quote' | 'contact'
})
const formSubmitting = ref(false)
const formSubmitted = ref(false)

const submitContactForm = async () => {
  formSubmitting.value = true
  // Create mailto link with form data
  const subject = contactForm.value.type === 'demo'
    ? 'Demo-Anfrage SlimRMM'
    : contactForm.value.type === 'quote'
      ? 'Angebots-Anfrage SlimRMM'
      : 'Kontaktanfrage SlimRMM'

  const body = `Name: ${contactForm.value.name}
Firma: ${contactForm.value.company}
E-Mail: ${contactForm.value.email}

Nachricht:
${contactForm.value.message}`

  window.location.href = `mailto:info@kiefer-networks.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  formSubmitting.value = false
  formSubmitted.value = true

  // Reset after 3 seconds
  setTimeout(() => {
    formSubmitted.value = false
    contactForm.value = { name: '', email: '', company: '', message: '', type: 'demo' }
  }, 3000)
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <Monitor class="w-5 h-5 text-white" />
            </div>
            <span class="text-xl font-bold text-gray-900">SlimRMM</span>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <button @click="scrollTo('features')" class="text-gray-600 hover:text-primary-600 transition-colors">
              {{ t('nav.features') }}
            </button>
            <button @click="scrollTo('integrations')" class="text-gray-600 hover:text-primary-600 transition-colors">
              {{ t('nav.integrations') }}
            </button>
            <button @click="scrollTo('deployment')" class="text-gray-600 hover:text-primary-600 transition-colors">
              {{ t('nav.deployment') }}
            </button>
            <button @click="scrollTo('pricing')" class="text-gray-600 hover:text-primary-600 transition-colors">
              {{ t('nav.pricing') }}
            </button>
            <button @click="scrollTo('contact')" class="text-gray-600 hover:text-primary-600 transition-colors">
              {{ t('nav.contact') }}
            </button>
          </div>

          <!-- Right side -->
          <div class="flex items-center space-x-4">
            <!-- Language dropdown -->
            <div class="relative">
              <button
                @click="languageDropdownOpen = !languageDropdownOpen"
                class="flex items-center space-x-1 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Globe class="w-5 h-5" />
                <span class="text-sm font-medium uppercase">{{ locale }}</span>
                <ChevronDown class="w-4 h-4" :class="{ 'rotate-180': languageDropdownOpen }" />
              </button>
              <div
                v-if="languageDropdownOpen"
                class="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50"
              >
                <button
                  v-for="lang in supportedLocales"
                  :key="lang.code"
                  @click="changeLanguage(lang.code)"
                  class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  :class="{ 'bg-primary-50 text-primary-600': locale === lang.code }"
                >
                  {{ lang.name }}
                </button>
              </div>
            </div>

            <!-- CTA Button -->
            <button class="hidden sm:inline-flex btn-primary text-sm py-2 px-4">
              {{ t('nav.demo') }}
            </button>

            <!-- Mobile menu button -->
            <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2">
              <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
              <X v-else class="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t border-gray-100">
        <div class="px-4 py-4 space-y-3">
          <button @click="scrollTo('features')" class="block w-full text-left py-2 text-gray-600">
            {{ t('nav.features') }}
          </button>
          <button @click="scrollTo('integrations')" class="block w-full text-left py-2 text-gray-600">
            {{ t('nav.integrations') }}
          </button>
          <button @click="scrollTo('deployment')" class="block w-full text-left py-2 text-gray-600">
            {{ t('nav.deployment') }}
          </button>
          <button @click="scrollTo('pricing')" class="block w-full text-left py-2 text-gray-600">
            {{ t('nav.pricing') }}
          </button>
          <button @click="scrollTo('contact')" class="block w-full text-left py-2 text-gray-600">
            {{ t('nav.contact') }}
          </button>
          <button class="btn-primary w-full mt-4">
            {{ t('nav.demo') }}
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-24 pb-16 sm:pt-32 sm:pb-24 gradient-bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <!-- Badge -->
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-8">
            <Shield class="w-4 h-4 mr-2" />
            {{ t('hero.badge') }}
          </div>

          <!-- Title -->
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight text-balance">
            {{ t('hero.title') }}
            <br />
            <span class="gradient-text">{{ t('hero.titleHighlight') }}</span>
          </h1>

          <!-- Subtitle -->
          <p class="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            {{ t('hero.subtitle') }}
          </p>

          <!-- CTAs -->
          <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button @click="scrollTo('contact')" class="btn-primary w-full sm:w-auto">
              {{ t('hero.cta') }}
              <ArrowRight class="w-5 h-5 ml-2" />
            </button>
            <button @click="scrollTo('pricing')" class="btn-outline w-full sm:w-auto">
              {{ t('hero.ctaSecondary') }}
            </button>
          </div>

          <!-- Stats -->
          <div class="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div class="text-center">
              <div class="text-3xl sm:text-4xl font-bold text-gray-900">10K+</div>
              <div class="mt-1 text-sm text-gray-500">{{ t('hero.stats.agents') }}</div>
            </div>
            <div class="text-center">
              <div class="text-3xl sm:text-4xl font-bold text-gray-900">99.9%</div>
              <div class="mt-1 text-sm text-gray-500">{{ t('hero.stats.uptime') }}</div>
            </div>
            <div class="text-center">
              <div class="text-3xl sm:text-4xl font-bold text-gray-900">&lt;1s</div>
              <div class="mt-1 text-sm text-gray-500">{{ t('hero.stats.response') }}</div>
            </div>
          </div>
        </div>

        <!-- Hero Illustration -->
        <div class="mt-16 relative">
          <div class="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
          <div class="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden mx-auto max-w-5xl">
            <div class="flex items-center px-4 py-3 bg-gray-800 border-b border-gray-700">
              <div class="flex space-x-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div class="ml-4 text-sm text-gray-400">SlimRMM Dashboard</div>
            </div>
            <div class="p-6 grid grid-cols-4 gap-4">
              <div class="col-span-1 space-y-3">
                <div class="h-8 bg-gray-800 rounded"></div>
                <div class="h-6 bg-gray-800 rounded w-3/4"></div>
                <div class="h-6 bg-gray-800 rounded w-1/2"></div>
                <div class="h-6 bg-gray-800 rounded w-2/3"></div>
                <div class="h-6 bg-gray-800 rounded w-3/4"></div>
              </div>
              <div class="col-span-3 space-y-4">
                <div class="grid grid-cols-3 gap-4">
                  <div class="bg-gray-800 rounded-lg p-4">
                    <div class="h-4 bg-primary-500/30 rounded w-1/2 mb-2"></div>
                    <div class="h-8 bg-primary-500 rounded"></div>
                  </div>
                  <div class="bg-gray-800 rounded-lg p-4">
                    <div class="h-4 bg-green-500/30 rounded w-1/2 mb-2"></div>
                    <div class="h-8 bg-green-500 rounded"></div>
                  </div>
                  <div class="bg-gray-800 rounded-lg p-4">
                    <div class="h-4 bg-yellow-500/30 rounded w-1/2 mb-2"></div>
                    <div class="h-8 bg-yellow-500 rounded"></div>
                  </div>
                </div>
                <div class="bg-gray-800 rounded-lg p-4 h-40">
                  <div class="flex justify-between mb-4">
                    <div class="h-4 bg-gray-700 rounded w-24"></div>
                    <div class="h-4 bg-gray-700 rounded w-16"></div>
                  </div>
                  <div class="space-y-2">
                    <div class="h-6 bg-gray-700 rounded"></div>
                    <div class="h-6 bg-gray-700 rounded"></div>
                    <div class="h-6 bg-gray-700 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 sm:py-28 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ t('features.title') }}</h2>
          <p class="section-subtitle">{{ t('features.subtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(icon, key) in featureIcons"
            :key="key"
            class="card-hover p-8"
          >
            <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
              <component :is="icon" class="w-6 h-6 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              {{ t(`features.list.${key}.title`) }}
            </h3>
            <p class="text-gray-600">
              {{ t(`features.list.${key}.description`) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Integrations Section -->
    <section id="integrations" class="py-20 sm:py-28 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ t('integrations.title') }}</h2>
          <p class="section-subtitle">{{ t('integrations.subtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(icon, key) in integrationIcons"
            :key="key"
            class="card-hover p-8 text-center"
          >
            <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <component :is="icon" class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              {{ t(`integrations.list.${key}.title`) }}
            </h3>
            <p class="text-gray-600 text-sm">
              {{ t(`integrations.list.${key}.description`) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Deployment Section -->
    <section id="deployment" class="py-20 sm:py-28 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ t('deployment.title') }}</h2>
          <p class="section-subtitle">{{ t('deployment.subtitle') }}</p>
        </div>

        <div class="grid lg:grid-cols-2 gap-8 mb-16">
          <!-- Self-Hosted Card -->
          <div class="card p-8 relative border-2 border-primary-200">
            <div class="absolute -top-3 left-6">
              <span class="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                {{ t('deployment.selfHosted.badge') }}
              </span>
            </div>
            <div class="flex items-center space-x-4 mb-6 mt-2">
              <div class="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center">
                <Server class="w-7 h-7 text-primary-600" />
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">{{ t('deployment.selfHosted.title') }}</h3>
                <p class="text-gray-600">{{ t('deployment.selfHosted.description') }}</p>
              </div>
            </div>
            <div class="grid sm:grid-cols-2 gap-4">
              <div v-for="benefit in ['sovereignty', 'tisax', 'gdpr', 'airgap', 'custom', 'cost']" :key="benefit" class="flex items-start space-x-3">
                <CheckCircle class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div class="font-medium text-gray-900">{{ t(`deployment.selfHosted.benefits.${benefit}.title`) }}</div>
                  <div class="text-sm text-gray-500">{{ t(`deployment.selfHosted.benefits.${benefit}.description`) }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Managed Card -->
          <div class="card p-8 relative">
            <div class="absolute -top-3 left-6">
              <span class="bg-gray-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                {{ t('deployment.managed.badge') }}
              </span>
            </div>
            <div class="flex items-center space-x-4 mb-6 mt-2">
              <div class="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center">
                <Cloud class="w-7 h-7 text-gray-600" />
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">{{ t('deployment.managed.title') }}</h3>
                <p class="text-gray-600">{{ t('deployment.managed.description') }}</p>
              </div>
            </div>
            <div class="grid sm:grid-cols-2 gap-4">
              <div v-for="benefit in ['noOps', 'updates', 'backup', 'support', 'sla', 'fast']" :key="benefit" class="flex items-start space-x-3">
                <CheckCircle class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div class="font-medium text-gray-900">{{ t(`deployment.managed.benefits.${benefit}.title`) }}</div>
                  <div class="text-sm text-gray-500">{{ t(`deployment.managed.benefits.${benefit}.description`) }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Comparison Table -->
        <div class="card overflow-hidden">
          <div class="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900">{{ t('deployment.comparison.title') }}</h3>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="bg-gray-50">
                  <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">{{ t('deployment.comparison.feature') }}</th>
                  <th class="px-6 py-4 text-center text-sm font-semibold text-gray-900">{{ t('deployment.comparison.selfHosted') }}</th>
                  <th class="px-6 py-4 text-center text-sm font-semibold text-gray-900">{{ t('deployment.comparison.managed') }}</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 text-gray-700">{{ t('deployment.comparison.dataSovereignty') }}</td>
                  <td class="px-6 py-4 text-center"><CheckCircle class="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td class="px-6 py-4 text-center"><XCircle class="w-5 h-5 text-gray-300 mx-auto" /></td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-6 py-4 text-gray-700">{{ t('deployment.comparison.tisaxReady') }}</td>
                  <td class="px-6 py-4 text-center"><CheckCircle class="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td class="px-6 py-4 text-center"><XCircle class="w-5 h-5 text-gray-300 mx-auto" /></td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-gray-700">{{ t('deployment.comparison.noDataTransfer') }}</td>
                  <td class="px-6 py-4 text-center"><CheckCircle class="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td class="px-6 py-4 text-center"><XCircle class="w-5 h-5 text-gray-300 mx-auto" /></td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-6 py-4 text-gray-700">{{ t('deployment.comparison.airGap') }}</td>
                  <td class="px-6 py-4 text-center"><CheckCircle class="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td class="px-6 py-4 text-center"><XCircle class="w-5 h-5 text-gray-300 mx-auto" /></td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-gray-700">{{ t('deployment.comparison.serverManagement') }}</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-500">{{ t('deployment.comparison.byYou') }}</td>
                  <td class="px-6 py-4 text-center"><CheckCircle class="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-6 py-4 text-gray-700">{{ t('deployment.comparison.autoUpdates') }}</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-500">{{ t('deployment.comparison.byYou') }}</td>
                  <td class="px-6 py-4 text-center"><CheckCircle class="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-gray-700">{{ t('deployment.comparison.backups') }}</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-500">{{ t('deployment.comparison.byYou') }}</td>
                  <td class="px-6 py-4 text-center"><CheckCircle class="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-6 py-4 text-gray-700">{{ t('deployment.comparison.premiumSupport') }}</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-500">{{ t('deployment.comparison.optional') }}</td>
                  <td class="px-6 py-4 text-center"><CheckCircle class="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="py-20 sm:py-28 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ t('pricing.title') }}</h2>
          <p class="section-subtitle">{{ t('pricing.subtitle') }}</p>
        </div>

        <!-- Pricing Tiers -->
        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <!-- Starter -->
          <div class="card p-8">
            <h3 class="text-lg font-semibold text-gray-900">{{ t('pricing.tiers.starter.name') }}</h3>
            <p class="text-sm text-gray-500 mt-1">{{ t('pricing.tiers.starter.agents') }}</p>
            <div class="mt-6">
              <span class="text-4xl font-bold text-gray-900">{{ t('pricing.tiers.starter.price') }}€</span>
              <span class="text-gray-500 ml-2">{{ t('pricing.tiers.starter.perPackage') }}</span>
            </div>
            <p class="text-sm text-gray-500 mt-2">= 1,50€ {{ t('pricing.perAgent') }}</p>
          </div>

          <!-- Business -->
          <div class="card p-8 border-2 border-primary-200 relative">
            <div class="absolute -top-3 right-6">
              <span class="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                {{ t('pricing.tiers.business.savings') }}
              </span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900">{{ t('pricing.tiers.business.name') }}</h3>
            <p class="text-sm text-gray-500 mt-1">{{ t('pricing.tiers.business.agents') }}</p>
            <div class="mt-6">
              <span class="text-4xl font-bold text-gray-900">{{ t('pricing.tiers.business.price') }}€</span>
              <span class="text-gray-500 ml-2">{{ t('pricing.tiers.business.perPackage') }}</span>
            </div>
            <p class="text-sm text-gray-500 mt-2">= 1,30€ {{ t('pricing.perAgent') }}</p>
          </div>

          <!-- Enterprise -->
          <div class="card p-8 relative">
            <div class="absolute -top-3 right-6">
              <span class="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                {{ t('pricing.tiers.enterprise.savings') }}
              </span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900">{{ t('pricing.tiers.enterprise.name') }}</h3>
            <p class="text-sm text-gray-500 mt-1">{{ t('pricing.tiers.enterprise.agents') }}</p>
            <div class="mt-6">
              <span class="text-4xl font-bold text-gray-900">{{ t('pricing.tiers.enterprise.price') }}€</span>
              <span class="text-gray-500 ml-2">{{ t('pricing.tiers.enterprise.perPackage') }}</span>
            </div>
            <p class="text-sm text-gray-500 mt-2">= 1,10€ {{ t('pricing.perAgent') }}</p>
          </div>
        </div>

        <!-- Hosting Fees -->
        <div class="card p-8 mb-16 bg-gray-50">
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ t('pricing.hosting.title') }}</h3>
          <p class="text-gray-600 mb-6">{{ t('pricing.hosting.description') }}</p>
          <div class="grid sm:grid-cols-3 gap-6">
            <div class="flex items-center justify-between p-4 bg-white rounded-lg">
              <span class="text-gray-700">{{ t('pricing.hosting.tier1') }}</span>
              <span class="font-semibold text-gray-900">+{{ t('pricing.hosting.tier1Price') }}€{{ t('pricing.perMonth') }}</span>
            </div>
            <div class="flex items-center justify-between p-4 bg-white rounded-lg">
              <span class="text-gray-700">{{ t('pricing.hosting.tier2') }}</span>
              <span class="font-semibold text-gray-900">+{{ t('pricing.hosting.tier2Price') }}€{{ t('pricing.perMonth') }}</span>
            </div>
            <div class="flex items-center justify-between p-4 bg-white rounded-lg">
              <span class="text-gray-700">{{ t('pricing.hosting.tier3') }}</span>
              <span class="font-semibold text-gray-900">+{{ t('pricing.hosting.tier3Price') }}€{{ t('pricing.perMonth') }}</span>
            </div>
          </div>
          <!-- Billing Cycle Info -->
          <div class="mt-6 flex flex-wrap gap-4 justify-center">
            <div class="flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
              <span class="text-sm font-medium">{{ t('pricing.billing.yearly') }}: {{ t('pricing.billing.yearlyNote') }}</span>
            </div>
          </div>
          <p class="text-xs text-gray-500 text-center mt-4">{{ t('pricing.vatNote') }}</p>
        </div>

        <!-- Price Calculator -->
        <div class="card p-8 bg-gradient-to-br from-primary-50 to-secondary-50">
          <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">{{ t('pricing.calculator.title') }}</h3>
          <div class="grid lg:grid-cols-2 gap-12">
            <!-- Input -->
            <div class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">{{ t('pricing.calculator.agents') }}</label>
                <input
                  v-model.number="agentCount"
                  type="range"
                  min="50"
                  max="2000"
                  step="50"
                  class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                />
                <div class="flex justify-between text-sm text-gray-500 mt-1">
                  <span>50</span>
                  <span class="text-lg font-bold text-primary-600">{{ agentCount }}</span>
                  <span>2000</span>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">{{ t('pricing.calculator.model') }}</label>
                <div class="grid grid-cols-2 gap-4">
                  <button
                    @click="deploymentModel = 'selfHosted'"
                    :class="[
                      'p-4 rounded-lg border-2 text-left transition-all',
                      deploymentModel === 'selfHosted'
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    ]"
                  >
                    <Server class="w-6 h-6 mb-2" :class="deploymentModel === 'selfHosted' ? 'text-primary-600' : 'text-gray-400'" />
                    <div class="font-medium" :class="deploymentModel === 'selfHosted' ? 'text-primary-900' : 'text-gray-700'">
                      {{ t('pricing.calculator.selfHosted') }}
                    </div>
                  </button>
                  <button
                    @click="deploymentModel = 'managed'"
                    :class="[
                      'p-4 rounded-lg border-2 text-left transition-all',
                      deploymentModel === 'managed'
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    ]"
                  >
                    <Cloud class="w-6 h-6 mb-2" :class="deploymentModel === 'managed' ? 'text-primary-600' : 'text-gray-400'" />
                    <div class="font-medium" :class="deploymentModel === 'managed' ? 'text-primary-900' : 'text-gray-700'">
                      {{ t('pricing.calculator.managed') }}
                    </div>
                  </button>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">{{ t('pricing.calculator.billing') }}</label>
                <div class="grid grid-cols-2 gap-4">
                  <button
                    @click="billingCycle = 'yearly'"
                    :class="[
                      'p-4 rounded-lg border-2 text-left transition-all relative',
                      billingCycle === 'yearly'
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-gray-300'
                    ]"
                  >
                    <div class="absolute -top-2 -right-2">
                      <span class="bg-green-500 text-white px-2 py-0.5 rounded-full text-xs font-medium">
                        {{ t('pricing.billing.yearlyBadge') }}
                      </span>
                    </div>
                    <div class="font-medium" :class="billingCycle === 'yearly' ? 'text-green-900' : 'text-gray-700'">
                      {{ t('pricing.billing.yearly') }}
                    </div>
                    <div class="text-sm" :class="billingCycle === 'yearly' ? 'text-green-600' : 'text-gray-500'">
                      {{ t('pricing.billing.yearlyNote') }}
                    </div>
                  </button>
                  <button
                    @click="billingCycle = 'monthly'"
                    :class="[
                      'p-4 rounded-lg border-2 text-left transition-all',
                      billingCycle === 'monthly'
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    ]"
                  >
                    <div class="font-medium" :class="billingCycle === 'monthly' ? 'text-primary-900' : 'text-gray-700'">
                      {{ t('pricing.billing.monthly') }}
                    </div>
                    <div class="text-sm" :class="billingCycle === 'monthly' ? 'text-primary-600' : 'text-gray-500'">
                      {{ t('pricing.billing.monthlyNote') }}
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <!-- Result -->
            <div class="bg-white rounded-2xl p-8 shadow-lg">
              <div class="space-y-4">
                <div class="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span class="text-gray-600">{{ pricingCalculation.packages }}x {{ t('pricing.package') }}</span>
                  <span class="font-medium">{{ pricingCalculation.basePrice }}€</span>
                </div>
                <div v-if="deploymentModel === 'managed'" class="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span class="text-gray-600">{{ t('pricing.hostingFee') }}</span>
                  <span class="font-medium">+{{ pricingCalculation.hostingFee }}€</span>
                </div>
                <div v-if="billingCycle === 'yearly'" class="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span class="text-gray-600">{{ t('pricing.calculator.billingAdjustment') }}</span>
                  <span class="text-green-600 font-medium">
                    {{ pricingCalculation.billingAdjustment.toFixed(2) }}€
                  </span>
                </div>
                <div class="flex justify-between items-center pt-2">
                  <span class="text-lg font-semibold text-gray-900">{{ t('pricing.calculator.monthly') }}</span>
                  <span class="text-3xl font-bold text-primary-600">{{ pricingCalculation.monthly.toFixed(2) }}€</span>
                </div>
                <div class="flex justify-between items-center text-gray-500">
                  <span>{{ t('pricing.calculator.yearly') }}</span>
                  <span>{{ pricingCalculation.yearly.toLocaleString() }}€</span>
                </div>
                <div class="flex justify-between items-center text-gray-500">
                  <span>{{ t('pricing.calculator.perAgent') }}</span>
                  <span>{{ pricingCalculation.perAgent }}€</span>
                </div>
                <div v-if="pricingCalculation.savings > 0" class="flex justify-between items-center text-green-600 font-medium pt-2 border-t border-gray-100">
                  <span>{{ t('pricing.calculator.savings') }}</span>
                  <span>{{ pricingCalculation.savings.toLocaleString() }}€ / {{ t('pricing.billing.yearly').toLowerCase() }}</span>
                </div>
              </div>
              <button class="btn-primary w-full mt-8">
                {{ t('pricing.cta') }}
              </button>
              <p class="text-xs text-gray-500 text-center mt-4">
                {{ t('pricing.vatNote') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Included Features -->
        <div class="mt-16 text-center">
          <h3 class="text-xl font-semibold text-gray-900 mb-6">{{ t('pricing.features.title') }}</h3>
          <div class="flex flex-wrap justify-center gap-4">
            <div
              v-for="(feature, index) in (tm('pricing.features.list') as string[])"
              :key="index"
              class="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full"
            >
              <CheckCircle class="w-4 h-4 text-green-500" />
              <span class="text-sm text-gray-700">{{ feature }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Security Section -->
    <section class="py-20 sm:py-28 bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{{ t('security.title') }}</h2>
          <p class="mt-4 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">{{ t('security.subtitle') }}</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(icon, key) in securityIcons"
            :key="key"
            class="text-center"
          >
            <div class="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <component :is="icon" class="w-8 h-8 text-primary-400" />
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ t(`security.features.${key}.title`) }}</h3>
            <p class="text-gray-400 text-sm">{{ t(`security.features.${key}.description`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="py-20 sm:py-28 bg-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ t('faq.title') }}</h2>
        </div>

        <div class="space-y-4">
          <div
            v-for="key in faqKeys"
            :key="key"
            class="border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              @click="toggleFaq(key)"
              class="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <span class="font-medium text-gray-900">{{ t(`faq.questions.${key}.q`) }}</span>
              <ChevronDown
                class="w-5 h-5 text-gray-500 transition-transform"
                :class="{ 'rotate-180': openFaq === key }"
              />
            </button>
            <div
              v-show="openFaq === key"
              class="px-6 pb-6 text-gray-600"
            >
              {{ t(`faq.questions.${key}.a`) }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 sm:py-28 gradient-bg">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="section-title">{{ t('cta.title') }}</h2>
          <p class="section-subtitle">{{ t('cta.subtitle') }}</p>
        </div>

        <!-- Contact Form -->
        <div class="card p-8 max-w-2xl mx-auto">
          <div v-if="formSubmitted" class="text-center py-8">
            <CheckCircle class="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ t('contact.success') }}</h3>
            <p class="text-gray-600">{{ t('contact.successMessage') }}</p>
          </div>

          <form v-else @submit.prevent="submitContactForm" class="space-y-6">
            <!-- Request Type -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-3">{{ t('contact.type') }}</label>
              <div class="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  @click="contactForm.type = 'demo'"
                  :class="[
                    'p-3 rounded-lg border-2 text-center transition-all text-sm font-medium',
                    contactForm.type === 'demo'
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  ]"
                >
                  {{ t('contact.typeDemo') }}
                </button>
                <button
                  type="button"
                  @click="contactForm.type = 'quote'"
                  :class="[
                    'p-3 rounded-lg border-2 text-center transition-all text-sm font-medium',
                    contactForm.type === 'quote'
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  ]"
                >
                  {{ t('contact.typeQuote') }}
                </button>
                <button
                  type="button"
                  @click="contactForm.type = 'contact'"
                  :class="[
                    'p-3 rounded-lg border-2 text-center transition-all text-sm font-medium',
                    contactForm.type === 'contact'
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  ]"
                >
                  {{ t('contact.typeContact') }}
                </button>
              </div>
            </div>

            <!-- Name & Email Row -->
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">{{ t('contact.name') }} *</label>
                <input
                  id="name"
                  v-model="contactForm.name"
                  type="text"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">{{ t('contact.email') }} *</label>
                <input
                  id="email"
                  v-model="contactForm.email"
                  type="email"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>

            <!-- Company -->
            <div>
              <label for="company" class="block text-sm font-medium text-gray-700 mb-1">{{ t('contact.company') }}</label>
              <input
                id="company"
                v-model="contactForm.company"
                type="text"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <!-- Message -->
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-1">{{ t('contact.message') }} *</label>
              <textarea
                id="message"
                v-model="contactForm.message"
                rows="4"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              ></textarea>
            </div>

            <!-- Submit -->
            <button
              type="submit"
              :disabled="formSubmitting"
              class="btn-primary w-full"
            >
              <Send class="w-5 h-5 mr-2" />
              {{ t('contact.submit') }}
            </button>

            <p class="text-xs text-gray-500 text-center">
              {{ t('contact.privacy') }}
              <router-link to="/datenschutz" class="text-primary-600 hover:underline">{{ t('contact.privacyLink') }}</router-link>
            </p>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-400 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-5 gap-12">
          <!-- Brand -->
          <div class="md:col-span-2">
            <div class="flex items-center space-x-2 mb-4">
              <div class="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <Monitor class="w-5 h-5 text-white" />
              </div>
              <span class="text-xl font-bold text-white">SlimRMM</span>
            </div>
            <p class="text-sm mb-4">{{ t('footer.description') }}</p>
            <div class="text-sm space-y-1">
              <p class="text-white font-medium">Kiefer Networks</p>
              <p>Adalbert-Stifter-Str. 6</p>
              <p>95512 Neudrossenfeld</p>
              <p class="mt-2">
                <a href="mailto:info@kiefer-networks.de" class="text-primary-400 hover:text-primary-300 transition-colors">
                  info@kiefer-networks.de
                </a>
              </p>
            </div>
          </div>

          <!-- Product -->
          <div>
            <h4 class="text-white font-semibold mb-4">{{ t('footer.product') }}</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="#features" class="hover:text-white transition-colors">{{ t('footer.links.features') }}</a></li>
              <li><a href="#integrations" class="hover:text-white transition-colors">{{ t('footer.links.integrations') }}</a></li>
              <li><a href="#pricing" class="hover:text-white transition-colors">{{ t('footer.links.pricing') }}</a></li>
              <li><a href="#" class="hover:text-white transition-colors">{{ t('footer.links.docs') }}</a></li>
            </ul>
          </div>

          <!-- Company -->
          <div>
            <h4 class="text-white font-semibold mb-4">{{ t('footer.company') }}</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="hover:text-white transition-colors">{{ t('footer.links.about') }}</a></li>
              <li><a href="#" class="hover:text-white transition-colors">{{ t('footer.links.blog') }}</a></li>
              <li><a href="#contact" class="hover:text-white transition-colors">{{ t('footer.links.contact') }}</a></li>
            </ul>
          </div>

          <!-- Legal -->
          <div>
            <h4 class="text-white font-semibold mb-4">{{ t('footer.legal') }}</h4>
            <ul class="space-y-2 text-sm">
              <li><router-link to="/datenschutz" class="hover:text-white transition-colors">{{ t('footer.links.privacy') }}</router-link></li>
              <li><router-link to="/agb" class="hover:text-white transition-colors">{{ t('footer.links.terms') }}</router-link></li>
              <li><router-link to="/impressum" class="hover:text-white transition-colors">{{ t('footer.links.imprint') }}</router-link></li>
            </ul>
          </div>
        </div>

        <div class="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
          © {{ new Date().getFullYear() }} {{ t('footer.copyright') }}
        </div>
      </div>
    </footer>
  </div>
</template>
