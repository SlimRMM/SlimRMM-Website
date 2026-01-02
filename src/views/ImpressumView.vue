<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Monitor, ArrowLeft } from 'lucide-vue-next'

const { locale } = useI18n()
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-white border-b border-gray-100">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex items-center justify-between">
          <router-link to="/" class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <Monitor class="w-5 h-5 text-white" />
            </div>
            <span class="text-xl font-bold text-gray-900">SlimRMM</span>
          </router-link>
          <router-link to="/" class="flex items-center text-gray-600 hover:text-primary-600 transition-colors">
            <ArrowLeft class="w-4 h-4 mr-2" />
            {{ locale === 'de' ? 'Zurück' : 'Back' }}
          </router-link>
        </div>
      </div>
    </header>

    <!-- Content -->
    <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Impressum</h1>

      <div class="prose prose-gray max-w-none">
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          <strong>Kiefer Networks</strong><br />
          Adalbert-Stifter-Str. 6<br />
          95512 Neudrossenfeld<br />
          Deutschland
        </p>

        <h2>Kontakt</h2>
        <p>
          E-Mail: <a href="mailto:info@slimrmm.io" class="text-primary-600 hover:text-primary-700">info@slimrmm.io</a>
        </p>

        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>
          Kiefer Networks<br />
          Adalbert-Stifter-Str. 6<br />
          95512 Neudrossenfeld
        </p>

        <h2>EU-Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:text-primary-700">
            https://ec.europa.eu/consumers/odr/
          </a>
        </p>
        <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

        <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
          allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
          zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
          Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
          der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
          Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>

        <h2>Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
          Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
          Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
          waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
        <p>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
          Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
          Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p>
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
          beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
          Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
          von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </p>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-100 py-8 mt-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600">
        <div class="flex justify-center space-x-6 mb-4">
          <router-link to="/impressum" class="hover:text-primary-600">Impressum</router-link>
          <router-link to="/datenschutz" class="hover:text-primary-600">Datenschutz</router-link>
          <router-link to="/agb" class="hover:text-primary-600">AGB</router-link>
        </div>
        <p>© {{ new Date().getFullYear() }} Kiefer Networks. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  </div>
</template>
