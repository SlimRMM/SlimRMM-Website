<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Monitor, ArrowLeft, Shield, Server, Lock, Mail, FileText, Eye, Trash2, Edit3, AlertCircle } from 'lucide-vue-next'

const { t } = useI18n()
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
            {{ t('legal.backToHome') }}
          </router-link>
        </div>
      </div>
    </header>

    <!-- Hero -->
    <div class="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center space-x-4 mb-4">
          <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
            <Shield class="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 class="text-3xl sm:text-4xl font-bold">Datenschutzerklärung</h1>
            <p class="text-primary-200 mt-1">Ihre Daten in sicheren Händen</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Navigation -->
    <div class="bg-white border-b border-gray-200 sticky top-[65px] z-40">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex space-x-1 overflow-x-auto py-3 scrollbar-hide">
          <a href="#ueberblick" class="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg whitespace-nowrap transition-colors">Überblick</a>
          <a href="#verantwortlicher" class="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg whitespace-nowrap transition-colors">Verantwortlicher</a>
          <a href="#rechte" class="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg whitespace-nowrap transition-colors">Ihre Rechte</a>
          <a href="#datenerfassung" class="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg whitespace-nowrap transition-colors">Datenerfassung</a>
          <a href="#slimrmm" class="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg whitespace-nowrap transition-colors">SlimRMM Nutzung</a>
        </nav>
      </div>
    </div>

    <!-- Content -->
    <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Überblick -->
          <section id="ueberblick" class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div class="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h2 class="text-xl font-semibold text-gray-900 flex items-center">
                <Eye class="w-5 h-5 mr-2 text-primary-600" />
                1. Datenschutz auf einen Blick
              </h2>
            </div>
            <div class="p-6 space-y-6">
              <div>
                <h3 class="font-semibold text-gray-900 mb-2">Allgemeine Hinweise</h3>
                <p class="text-gray-600">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                  Daten passiert, wenn Sie diese Website besuchen oder unsere Dienste nutzen.
                </p>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-2">Wie erfassen wir Ihre Daten?</h3>
                <p class="text-gray-600">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z.B. über das Kontaktformular).
                  Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst (technische Daten).
                </p>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-2">Wofür nutzen wir Ihre Daten?</h3>
                <p class="text-gray-600">
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
                  Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>
              </div>
            </div>
          </section>

          <!-- Verantwortlicher -->
          <section id="verantwortlicher" class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div class="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h2 class="text-xl font-semibold text-gray-900 flex items-center">
                <FileText class="w-5 h-5 mr-2 text-primary-600" />
                2. Verantwortliche Stelle
              </h2>
            </div>
            <div class="p-6">
              <div class="bg-primary-50 rounded-xl p-6 border border-primary-100">
                <p class="font-semibold text-gray-900 mb-2">Kiefer Networks</p>
                <p class="text-gray-600">
                  Adalbert-Stifter-Str. 6<br />
                  95512 Neudrossenfeld<br />
                  Deutschland
                </p>
                <p class="text-gray-600 mt-4">
                  <strong>E-Mail:</strong>{' '}
                  <a href="mailto:info@kiefer-networks.de" class="text-primary-600 hover:text-primary-700">
                    info@kiefer-networks.de
                  </a>
                </p>
              </div>
              <p class="text-gray-600 mt-4">
                Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und
                Mittel der Verarbeitung von personenbezogenen Daten.
              </p>
            </div>
          </section>

          <!-- Ihre Rechte -->
          <section id="rechte" class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div class="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h2 class="text-xl font-semibold text-gray-900 flex items-center">
                <Shield class="w-5 h-5 mr-2 text-primary-600" />
                3. Ihre Rechte nach DSGVO
              </h2>
            </div>
            <div class="p-6">
              <div class="grid sm:grid-cols-2 gap-4">
                <div class="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                  <Eye class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 class="font-medium text-gray-900">Auskunftsrecht</h4>
                    <p class="text-sm text-gray-600">Erfahren Sie, welche Daten wir über Sie speichern</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                  <Edit3 class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 class="font-medium text-gray-900">Berichtigungsrecht</h4>
                    <p class="text-sm text-gray-600">Lassen Sie fehlerhafte Daten korrigieren</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                  <Trash2 class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 class="font-medium text-gray-900">Löschungsrecht</h4>
                    <p class="text-sm text-gray-600">Verlangen Sie die Löschung Ihrer Daten</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                  <AlertCircle class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 class="font-medium text-gray-900">Widerspruchsrecht</h4>
                    <p class="text-sm text-gray-600">Widersprechen Sie der Datenverarbeitung</p>
                  </div>
                </div>
              </div>
              <div class="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                <p class="text-sm text-yellow-800">
                  <strong>Beschwerderecht:</strong> Sie können sich jederzeit bei der zuständigen Aufsichtsbehörde beschweren:<br />
                  Bayerisches Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach
                </p>
              </div>
            </div>
          </section>

          <!-- Datenerfassung -->
          <section id="datenerfassung" class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div class="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h2 class="text-xl font-semibold text-gray-900 flex items-center">
                <Server class="w-5 h-5 mr-2 text-primary-600" />
                4. Datenerfassung auf dieser Website
              </h2>
            </div>
            <div class="p-6 space-y-6">
              <div>
                <h3 class="font-semibold text-gray-900 mb-2">Hosting</h3>
                <p class="text-gray-600">
                  Diese Website wird bei GitHub Pages gehostet. Beim Besuch werden automatisch Informationen
                  in Server-Log-Dateien gespeichert (Browsertyp, Betriebssystem, Referrer URL, IP-Adresse, Uhrzeit).
                </p>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-2">Kontaktaufnahme per E-Mail</h3>
                <p class="text-gray-600">
                  Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben zwecks Bearbeitung der Anfrage
                  gespeichert. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
                </p>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-2">Cookies</h3>
                <p class="text-gray-600">
                  Diese Website verwendet keine Tracking-Cookies. Es werden lediglich technisch notwendige
                  Cookies für die Spracheinstellung verwendet.
                </p>
              </div>
            </div>
          </section>

          <!-- SlimRMM Nutzung -->
          <section id="slimrmm" class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div class="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h2 class="text-xl font-semibold text-gray-900 flex items-center">
                <Lock class="w-5 h-5 mr-2 text-primary-600" />
                5. Datenverarbeitung bei SlimRMM
              </h2>
            </div>
            <div class="p-6 space-y-6">
              <div class="grid sm:grid-cols-2 gap-6">
                <div class="p-5 bg-green-50 border border-green-200 rounded-xl">
                  <h3 class="font-semibold text-green-900 mb-2">Self-Hosted</h3>
                  <p class="text-sm text-green-800">
                    Alle Daten werden ausschließlich auf Ihrer eigenen Infrastruktur verarbeitet.
                    Kiefer Networks hat <strong>keinen Zugriff</strong> auf diese Daten.
                  </p>
                </div>
                <div class="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                  <h3 class="font-semibold text-blue-900 mb-2">Managed Hosting</h3>
                  <p class="text-sm text-blue-800">
                    Daten werden auf dedizierten Servern in EU-Rechenzentren verarbeitet.
                    Ein AVV nach Art. 28 DSGVO wird abgeschlossen.
                  </p>
                </div>
              </div>
              <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                <h4 class="font-medium text-gray-900 mb-2">Verarbeitete Daten (Managed Hosting):</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>• Systemdaten der verwalteten Geräte (CPU, RAM, Festplatte, Netzwerk)</li>
                  <li>• Installierte Software</li>
                  <li>• Benutzerkonfigurationen und Zugangsdaten (verschlüsselt)</li>
                  <li>• Protokolldaten und Audit-Logs</li>
                </ul>
              </div>
            </div>
          </section>

          <!-- SSL -->
          <section class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div class="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h2 class="text-xl font-semibold text-gray-900 flex items-center">
                <Lock class="w-5 h-5 mr-2 text-primary-600" />
                6. SSL/TLS-Verschlüsselung
              </h2>
            </div>
            <div class="p-6">
              <p class="text-gray-600">
                Diese Seite nutzt aus Sicherheitsgründen eine SSL/TLS-Verschlüsselung. Eine verschlüsselte
                Verbindung erkennen Sie am Schloss-Symbol in Ihrer Browserzeile und an „https://" in der Adresszeile.
              </p>
            </div>
          </section>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <div class="sticky top-[140px] space-y-6">
            <!-- Contact Card -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div class="flex items-center space-x-3 mb-4">
                <div class="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Mail class="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Fragen zum Datenschutz?</h3>
                </div>
              </div>
              <p class="text-sm text-gray-600 mb-4">
                Kontaktieren Sie uns bei Fragen zu Ihren Daten oder zur Ausübung Ihrer Rechte.
              </p>
              <a
                href="mailto:info@kiefer-networks.de"
                class="block w-full text-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Kontakt aufnehmen
              </a>
            </div>

            <!-- Last Updated -->
            <div class="bg-gray-100 rounded-xl p-4 text-center">
              <p class="text-sm text-gray-500">
                Stand: Januar 2026
              </p>
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
            <router-link to="/impressum" class="text-gray-600 hover:text-primary-600 transition-colors">Impressum</router-link>
            <router-link to="/datenschutz" class="text-primary-600 font-medium">Datenschutz</router-link>
            <router-link to="/agb" class="text-gray-600 hover:text-primary-600 transition-colors">AGB</router-link>
          </div>
          <p class="text-sm text-gray-500">© {{ new Date().getFullYear() }} Kiefer Networks</p>
        </div>
      </div>
    </footer>
  </div>
</template>
