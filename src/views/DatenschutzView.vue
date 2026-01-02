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
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>

      <div class="prose prose-gray max-w-none">
        <h2>1. Datenschutz auf einen Blick</h2>

        <h3>Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
          Daten passiert, wenn Sie diese Website besuchen oder unsere Dienste nutzen. Personenbezogene Daten sind alle Daten,
          mit denen Sie persönlich identifiziert werden können.
        </p>

        <h3>Datenerfassung auf dieser Website</h3>
        <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:<br />
          Kiefer Networks<br />
          Adalbert-Stifter-Str. 6<br />
          95512 Neudrossenfeld<br />
          E-Mail: info@slimrmm.io
        </p>

        <p><strong>Wie erfassen wir Ihre Daten?</strong></p>
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich
          z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
        </p>
        <p>
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere
          IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder
          Uhrzeit des Seitenaufrufs).
        </p>

        <p><strong>Wofür nutzen wir Ihre Daten?</strong></p>
        <p>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
          Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
        </p>

        <p><strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong></p>
        <p>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
          gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung
          oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt
          haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das
          Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
          zu verlangen.
        </p>

        <h2>2. Hosting</h2>
        <p>
          Wir hosten die Inhalte unserer Website bei GitHub Pages. Anbieter ist die GitHub Inc.,
          88 Colin P Kelly Jr St, San Francisco, CA 94107, USA.
        </p>
        <p>
          Wenn Sie unsere Website besuchen, werden Ihre personenbezogenen Daten auf den Servern von GitHub
          verarbeitet. Hierbei können auch personenbezogene Daten an den Server von GitHub in den USA
          übermittelt werden.
        </p>
        <p>
          Details entnehmen Sie der Datenschutzerklärung von GitHub:
          <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener" class="text-primary-600 hover:text-primary-700">
            https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement
          </a>
        </p>

        <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

        <h3>Datenschutz</h3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln
          Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften
          sowie dieser Datenschutzerklärung.
        </p>

        <h3>Hinweis zur verantwortlichen Stelle</h3>
        <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
        <p>
          Kiefer Networks<br />
          Adalbert-Stifter-Str. 6<br />
          95512 Neudrossenfeld<br />
          E-Mail: info@slimrmm.io
        </p>

        <h3>Speicherdauer</h3>
        <p>
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde,
          verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
        </p>

        <h3>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung</h3>
        <p>
          Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen
          Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO.
        </p>
        <p>
          Im Falle einer Verarbeitung zur Erfüllung eines Vertrags, dessen Vertragspartei Sie sind, verarbeiten
          wir Ihre personenbezogenen Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO.
        </p>
        <p>
          Im Falle einer Verarbeitung zur Erfüllung rechtlicher Verpflichtungen verarbeiten wir Ihre Daten
          auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO.
        </p>
        <p>
          Im Falle der Wahrung berechtigter Interessen verarbeiten wir Ihre Daten auf Grundlage von
          Art. 6 Abs. 1 lit. f DSGVO.
        </p>

        <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
        <p>
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können
          eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
          erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
        </p>

        <h3>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen (Art. 21 DSGVO)</h3>
        <p>
          <strong>
            Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt,
            haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben,
            gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen.
          </strong>
        </p>

        <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
        <p>
          Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
          Aufsichtsbehörde zu. Die für uns zuständige Aufsichtsbehörde ist:
        </p>
        <p>
          Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br />
          Promenade 18<br />
          91522 Ansbach<br />
          <a href="https://www.lda.bayern.de" target="_blank" rel="noopener" class="text-primary-600 hover:text-primary-700">www.lda.bayern.de</a>
        </p>

        <h3>Recht auf Datenübertragbarkeit</h3>
        <p>
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines
          Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen,
          maschinenlesbaren Format aushändigen zu lassen.
        </p>

        <h3>Auskunft, Löschung und Berichtigung</h3>
        <p>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
          Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den
          Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.
        </p>

        <h3>Recht auf Einschränkung der Verarbeitung</h3>
        <p>
          Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen,
          wenn die Richtigkeit der Daten bestritten wird, die Verarbeitung unrechtmäßig ist, wir die Daten
          nicht mehr benötigen oder Sie Widerspruch eingelegt haben.
        </p>

        <h2>4. Datenerfassung auf dieser Website</h2>

        <h3>Server-Log-Dateien</h3>
        <p>
          Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
          Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
        </p>
        <ul>
          <li>Browsertyp und Browserversion</li>
          <li>verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
          <li>IP-Adresse</li>
        </ul>
        <p>
          Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
          Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
        </p>

        <h3>Kontaktaufnahme per E-Mail</h3>
        <p>
          Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben inklusive der von Ihnen dort
          angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen
          bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>
        <p>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern
          Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
          vorvertraglicher Maßnahmen erforderlich ist.
        </p>

        <h2>5. Datenverarbeitung bei Nutzung von SlimRMM</h2>

        <h3>Self-Hosted Variante</h3>
        <p>
          Bei der Self-Hosted Variante werden alle Daten ausschließlich auf Ihrer eigenen Infrastruktur
          verarbeitet und gespeichert. Kiefer Networks hat keinen Zugriff auf diese Daten. Sie sind
          selbst für die Einhaltung der datenschutzrechtlichen Anforderungen verantwortlich.
        </p>

        <h3>Managed Hosting Variante</h3>
        <p>
          Bei der Managed Hosting Variante werden folgende Daten auf unseren Servern verarbeitet:
        </p>
        <ul>
          <li>Systemdaten der verwalteten Geräte (CPU, RAM, Festplatte, Netzwerk)</li>
          <li>Installierte Software</li>
          <li>Benutzerkonfigurationen und Zugangsdaten (verschlüsselt)</li>
          <li>Protokolldaten und Audit-Logs</li>
        </ul>
        <p>
          Die Daten werden ausschließlich in Rechenzentren innerhalb der EU verarbeitet.
          Die Verarbeitung erfolgt auf Grundlage des mit Ihnen geschlossenen Vertrags (Art. 6 Abs. 1 lit. b DSGVO).
        </p>

        <h3>Auftragsverarbeitung</h3>
        <p>
          Für die Managed Hosting Variante schließen wir mit Ihnen einen Auftragsverarbeitungsvertrag (AVV)
          gemäß Art. 28 DSGVO ab.
        </p>

        <h2>6. SSL- bzw. TLS-Verschlüsselung</h2>
        <p>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte
          eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die
          Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in
          Ihrer Browserzeile.
        </p>

        <h2>7. Änderung dieser Datenschutzerklärung</h2>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen
          rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen umzusetzen.
          Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
        </p>

        <p class="text-sm text-gray-500 mt-8">Stand: Januar 2025</p>
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
