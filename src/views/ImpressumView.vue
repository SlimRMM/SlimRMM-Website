<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Monitor, ArrowLeft, Building2, Mail, Globe, Scale, FileText, Link2, Copyright } from 'lucide-vue-next'

const { locale } = useI18n()
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex items-center justify-between">
          <router-link to="/" class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <Monitor class="w-5 h-5 text-white" />
            </div>
            <span class="text-xl font-bold text-gray-900">SlimRMM</span>
          </router-link>
          <router-link to="/" class="flex items-center text-gray-600 hover:text-primary-600 transition-colors px-4 py-2 rounded-lg hover:bg-gray-100">
            <ArrowLeft class="w-4 h-4 mr-2" />
            {{ locale === 'de' ? 'Zurück zur Startseite' : 'Back to Home' }}
          </router-link>
        </div>
      </div>
    </header>

    <!-- Hero -->
    <div class="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center space-x-4 mb-4">
          <div class="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
            <Building2 class="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 class="text-3xl sm:text-4xl font-bold">Impressum</h1>
            <p class="text-gray-400 mt-1">Angaben gemäß § 5 TMG</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Content -->
    <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Company Info -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div class="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h2 class="text-xl font-semibold text-gray-900 flex items-center">
                <Building2 class="w-5 h-5 mr-2 text-primary-600" />
                Unternehmen
              </h2>
            </div>
            <div class="p-6">
              <div class="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-6 border border-primary-100">
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Kiefer Networks</h3>
                <div class="grid sm:grid-cols-2 gap-6">
                  <div>
                    <p class="text-sm text-gray-500 mb-1">Adresse</p>
                    <p class="text-gray-900">
                      Adalbert-Stifter-Str. 6<br />
                      95512 Neudrossenfeld<br />
                      Deutschland
                    </p>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500 mb-1">Kontakt</p>
                    <p class="text-gray-900">
                      <a href="mailto:info@kiefer-networks.de" class="text-primary-600 hover:text-primary-700 font-medium">
                        info@kiefer-networks.de
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Responsible -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div class="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h2 class="text-xl font-semibold text-gray-900 flex items-center">
                <FileText class="w-5 h-5 mr-2 text-primary-600" />
                Verantwortlich für den Inhalt
              </h2>
            </div>
            <div class="p-6">
              <p class="text-gray-600">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
              </p>
              <div class="mt-4 p-4 bg-gray-50 rounded-xl">
                <p class="font-medium text-gray-900">Kiefer Networks</p>
                <p class="text-gray-600">
                  Adalbert-Stifter-Str. 6<br />
                  95512 Neudrossenfeld
                </p>
              </div>
            </div>
          </div>

          <!-- EU Dispute Resolution -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div class="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h2 class="text-xl font-semibold text-gray-900 flex items-center">
                <Globe class="w-5 h-5 mr-2 text-primary-600" />
                EU-Streitschlichtung
              </h2>
            </div>
            <div class="p-6">
              <p class="text-gray-600 mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              </p>
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <Link2 class="w-4 h-4 mr-2" />
                ec.europa.eu/consumers/odr
              </a>
              <div class="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                <p class="text-sm text-yellow-800">
                  <strong>Hinweis:</strong> Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
                  vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>
          </div>

          <!-- Liability -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div class="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h2 class="text-xl font-semibold text-gray-900 flex items-center">
                <Scale class="w-5 h-5 mr-2 text-primary-600" />
                Haftungshinweise
              </h2>
            </div>
            <div class="p-6 space-y-6">
              <div>
                <h3 class="font-semibold text-gray-900 mb-2">Haftung für Inhalte</h3>
                <p class="text-gray-600 text-sm">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                  verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
                  Bei Bekanntwerden von Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-2">Haftung für Links</h3>
                <p class="text-gray-600 text-sm">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                  Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
                  Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </div>
            </div>
          </div>

          <!-- Copyright -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div class="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h2 class="text-xl font-semibold text-gray-900 flex items-center">
                <Copyright class="w-5 h-5 mr-2 text-primary-600" />
                Urheberrecht
              </h2>
            </div>
            <div class="p-6">
              <p class="text-gray-600 text-sm">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung. Downloads und Kopien dieser Seite
                sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <div class="sticky top-[80px] space-y-6">
            <!-- Quick Contact -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div class="flex items-center space-x-3 mb-4">
                <div class="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Mail class="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Kontakt</h3>
                </div>
              </div>
              <p class="text-sm text-gray-600 mb-4">
                Haben Sie Fragen? Wir helfen Ihnen gerne weiter.
              </p>
              <a
                href="mailto:info@kiefer-networks.de"
                class="block w-full text-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                E-Mail senden
              </a>
            </div>

            <!-- Legal Links -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 class="font-semibold text-gray-900 mb-4">Rechtliches</h3>
              <div class="space-y-2">
                <router-link
                  to="/datenschutz"
                  class="flex items-center p-3 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  <FileText class="w-4 h-4 mr-3" />
                  Datenschutzerklärung
                </router-link>
                <router-link
                  to="/agb"
                  class="flex items-center p-3 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  <Scale class="w-4 h-4 mr-3" />
                  Allgemeine Geschäftsbedingungen
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-200 py-8 mt-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div class="flex items-center space-x-6 text-sm">
            <router-link to="/impressum" class="text-primary-600 font-medium">Impressum</router-link>
            <router-link to="/datenschutz" class="text-gray-600 hover:text-primary-600 transition-colors">Datenschutz</router-link>
            <router-link to="/agb" class="text-gray-600 hover:text-primary-600 transition-colors">AGB</router-link>
          </div>
          <p class="text-sm text-gray-500">© {{ new Date().getFullYear() }} Kiefer Networks</p>
        </div>
      </div>
    </footer>
  </div>
</template>
