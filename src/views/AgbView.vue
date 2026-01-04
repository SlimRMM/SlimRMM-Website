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
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>

      <div class="prose prose-gray max-w-none">
        <h2>§ 1 Geltungsbereich und Anbieter</h2>
        <p>
          (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen
        </p>
        <p>
          <strong>Kiefer Networks</strong><br />
          Adalbert-Stifter-Str. 6<br />
          95512 Neudrossenfeld<br />
          E-Mail: info@kiefer-networks.de
        </p>
        <p>
          – nachfolgend „Anbieter" genannt – und dem Kunden über die Nutzung der Software „SlimRMM"
          als Software-as-a-Service (SaaS) oder als selbst gehostete Lösung (Self-Hosted).
        </p>
        <p>
          (2) Es gelten ausschließlich diese AGB. Abweichende, entgegenstehende oder ergänzende
          Allgemeine Geschäftsbedingungen des Kunden werden nur dann Vertragsbestandteil, wenn
          der Anbieter ihrer Geltung ausdrücklich schriftlich zugestimmt hat.
        </p>
        <p>
          (3) Die Angebote richten sich ausschließlich an Unternehmer im Sinne von § 14 BGB,
          juristische Personen des öffentlichen Rechts oder öffentlich-rechtliche Sondervermögen.
        </p>

        <h2>§ 2 Vertragsgegenstand</h2>
        <p>
          (1) Der Anbieter stellt dem Kunden die Software „SlimRMM" zur Fernüberwachung und
          Fernwartung von IT-Systemen (Remote Monitoring & Management) zur Verfügung.
        </p>
        <p>
          (2) Die Software wird in zwei Varianten angeboten:
        </p>
        <ul>
          <li><strong>Self-Hosted:</strong> Der Kunde erhält eine Lizenz zur Installation und zum
            Betrieb der Software auf seiner eigenen Infrastruktur.</li>
          <li><strong>Managed Hosting:</strong> Der Anbieter stellt die Software auf dedizierten
            Servern bereit und gewährleistet deren Betrieb.</li>
        </ul>
        <p>
          (3) Jede SlimRMM-Instanz ist vollständig eigenständig und unabhängig. Es existiert
          keine zentrale Cloud-Komponente, kein Telemetrie-System und keine Datenübertragung
          an den Anbieter oder Dritte. Bei der Self-Hosted-Variante verlassen die Daten
          niemals die Infrastruktur des Kunden. Bei der Managed-Hosting-Variante verbleiben
          die Daten auf dem dedizierten Server des Kunden.
        </p>
        <p>
          (4) Der genaue Funktionsumfang ergibt sich aus der jeweiligen Leistungsbeschreibung
          auf der Website des Anbieters zum Zeitpunkt des Vertragsschlusses.
        </p>

        <h2>§ 3 Vertragsschluss</h2>
        <p>
          (1) Die Darstellung der Software auf der Website stellt kein rechtlich bindendes Angebot,
          sondern eine Aufforderung zur Abgabe einer Bestellung dar.
        </p>
        <p>
          (2) Der Kunde gibt durch Absenden der Bestellung ein verbindliches Angebot zum
          Abschluss eines Vertrages ab.
        </p>
        <p>
          (3) Der Anbieter nimmt das Angebot durch Zusendung einer Auftragsbestätigung oder
          durch Freischaltung des Zugangs an.
        </p>

        <h2>§ 4 Leistungen des Anbieters</h2>
        <h3>4.1 Self-Hosted Variante</h3>
        <p>
          (1) Der Anbieter gewährt dem Kunden ein nicht-exklusives, nicht übertragbares Recht
          zur Nutzung der Software für die vereinbarte Anzahl von Agents.
        </p>
        <p>
          (2) Der Kunde ist selbst für die Bereitstellung der erforderlichen Infrastruktur,
          Installation, Konfiguration, Wartung und Sicherung verantwortlich.
        </p>
        <p>
          (3) Updates und neue Versionen werden über das offizielle Repository bereitgestellt.
        </p>

        <h3>4.2 Managed Hosting Variante</h3>
        <p>
          (1) Der Anbieter stellt dem Kunden einen dedizierten Zugang zur Software unter einer
          Subdomain (kunde.slimrmm.io) zur Verfügung.
        </p>
        <p>
          (2) Der Anbieter gewährleistet eine Verfügbarkeit von 99,9% im Jahresmittel,
          gemessen an der Erreichbarkeit des Systems. Geplante Wartungsarbeiten werden
          mit einer Vorankündigung von mindestens 48 Stunden durchgeführt und sind von
          der Verfügbarkeitsberechnung ausgenommen.
        </p>
        <p>
          (3) Der Anbieter führt tägliche Backups durch und speichert diese für mindestens 30 Tage.
        </p>
        <p>
          (4) Der Anbieter aktualisiert die Software regelmäßig und führt Sicherheitsupdates
          zeitnah durch.
        </p>

        <h2>§ 5 Pflichten des Kunden</h2>
        <p>
          (1) Der Kunde ist verpflichtet, seine Zugangsdaten geheim zu halten und vor dem
          Zugriff Dritter zu schützen.
        </p>
        <p>
          (2) Der Kunde wird die Software nur für rechtmäßige Zwecke nutzen und keine Rechte
          Dritter verletzen.
        </p>
        <p>
          (3) Der Kunde ist für die Einhaltung der datenschutzrechtlichen Bestimmungen bei
          der Nutzung der Software verantwortlich. Bei der Managed Hosting Variante wird
          ein Auftragsverarbeitungsvertrag geschlossen.
        </p>
        <p>
          (4) Der Kunde wird den Anbieter unverzüglich über Sicherheitsvorfälle oder
          Missbrauch seiner Zugangsdaten informieren.
        </p>
        <p>
          (5) Der Kunde stellt sicher, dass nur autorisierte Personen Zugriff auf die
          Software haben.
        </p>

        <h2>§ 6 Vergütung und Zahlungsbedingungen</h2>
        <p>
          (1) Die Vergütung richtet sich nach der zum Zeitpunkt des Vertragsschlusses
          gültigen Preisliste des Anbieters.
        </p>
        <p>
          (2) Alle Preise verstehen sich in Euro und zuzüglich der gesetzlichen Mehrwertsteuer.
        </p>
        <p>
          (3) Die Abrechnung erfolgt monatlich im Voraus. Die Zahlung ist innerhalb von
          14 Tagen nach Rechnungsstellung fällig.
        </p>
        <p>
          (4) Bei Zahlungsverzug ist der Anbieter berechtigt, den Zugang zur Software
          nach vorheriger Mahnung mit angemessener Fristsetzung zu sperren.
        </p>
        <p>
          (5) Der Anbieter ist berechtigt, die Preise mit einer Ankündigungsfrist von
          drei Monaten zum Ende des jeweiligen Abrechnungszeitraums anzupassen.
          Der Kunde hat in diesem Fall ein Sonderkündigungsrecht.
        </p>

        <h2>§ 7 Gewährleistung und Haftung</h2>
        <p>
          (1) Der Anbieter gewährleistet, dass die Software im Wesentlichen den
          Funktionsbeschreibungen entspricht.
        </p>
        <p>
          (2) Mängel wird der Anbieter innerhalb angemessener Frist beseitigen.
          Der Kunde wird Mängel unverzüglich und nachvollziehbar melden.
        </p>
        <p>
          (3) Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit
          sowie für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.
        </p>
        <p>
          (4) Bei leichter Fahrlässigkeit haftet der Anbieter nur bei Verletzung
          wesentlicher Vertragspflichten. Die Haftung ist in diesen Fällen auf den
          vertragstypischen, vorhersehbaren Schaden begrenzt, maximal jedoch auf
          das Zwölffache der monatlichen Vergütung.
        </p>
        <p>
          (5) Die Haftung nach dem Produkthaftungsgesetz bleibt unberührt.
        </p>
        <p>
          (6) Der Anbieter haftet nicht für Schäden, die durch höhere Gewalt,
          Störungen der Telekommunikationsnetze oder Handlungen Dritter entstehen.
        </p>

        <h2>§ 8 Datenschutz und Datensicherheit</h2>
        <p>
          (1) Der Anbieter verarbeitet personenbezogene Daten gemäß der
          Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz (BDSG).
        </p>
        <p>
          (2) Bei der Managed Hosting Variante schließen die Parteien einen
          Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO.
        </p>
        <p>
          (3) Die Datenverarbeitung erfolgt ausschließlich in Rechenzentren innerhalb
          der Europäischen Union.
        </p>
        <p>
          (4) Der Anbieter trifft angemessene technische und organisatorische Maßnahmen
          zum Schutz der Daten, insbesondere:
        </p>
        <ul>
          <li>Verschlüsselung der Datenübertragung mittels TLS</li>
          <li>Verschlüsselung der gespeicherten Daten</li>
          <li>Regelmäßige Sicherheitsaudits</li>
          <li>Zugriffskontrollen und Berechtigungsmanagement</li>
        </ul>

        <h2>§ 9 Vertraulichkeit</h2>
        <p>
          (1) Die Parteien verpflichten sich, alle im Rahmen der Vertragsbeziehung
          erlangten vertraulichen Informationen geheim zu halten.
        </p>
        <p>
          (2) Diese Verpflichtung gilt über das Vertragsende hinaus für einen Zeitraum
          von drei Jahren.
        </p>
        <p>
          (3) Ausgenommen sind Informationen, die öffentlich bekannt sind oder werden,
          ohne dass dies auf einer Verletzung dieser Geheimhaltungspflicht beruht.
        </p>

        <h2>§ 10 Vertragslaufzeit und Kündigung</h2>
        <p>
          (1) Der Vertrag wird auf unbestimmte Zeit geschlossen.
        </p>
        <p>
          (2) Der Vertrag kann von beiden Parteien mit einer Frist von einem Monat
          zum Ende des jeweiligen Abrechnungszeitraums gekündigt werden.
        </p>
        <p>
          (3) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
          Ein wichtiger Grund liegt insbesondere vor bei:
        </p>
        <ul>
          <li>Zahlungsverzug des Kunden von mehr als 30 Tagen trotz Mahnung</li>
          <li>Schwerwiegendem Verstoß gegen diese AGB</li>
          <li>Insolvenz einer Partei</li>
        </ul>
        <p>
          (4) Die Kündigung bedarf der Textform (E-Mail genügt).
        </p>
        <p>
          (5) Nach Vertragsende wird der Anbieter dem Kunden auf Anfrage seine Daten
          in einem gängigen Format zur Verfügung stellen. Die Daten werden nach
          Ablauf von 30 Tagen nach Vertragsende gelöscht, sofern keine gesetzlichen
          Aufbewahrungspflichten entgegenstehen.
        </p>

        <h2>§ 11 Änderungen der AGB</h2>
        <p>
          (1) Der Anbieter ist berechtigt, diese AGB mit einer Ankündigungsfrist von
          sechs Wochen zu ändern.
        </p>
        <p>
          (2) Die Änderungen werden dem Kunden in Textform mitgeteilt. Widerspricht
          der Kunde nicht innerhalb von sechs Wochen nach Zugang der Mitteilung,
          gelten die geänderten AGB als angenommen.
        </p>
        <p>
          (3) Bei Widerspruch kann jede Partei den Vertrag mit einer Frist von einem
          Monat kündigen.
        </p>

        <h2>§ 12 Schlussbestimmungen</h2>
        <p>
          (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des
          UN-Kaufrechts.
        </p>
        <p>
          (2) Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist der Sitz
          des Anbieters, sofern der Kunde Kaufmann, juristische Person des öffentlichen
          Rechts oder öffentlich-rechtliches Sondervermögen ist.
        </p>
        <p>
          (3) Sollten einzelne Bestimmungen dieses Vertrages unwirksam sein oder werden,
          bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Die Parteien
          verpflichten sich, unwirksame Bestimmungen durch solche zu ersetzen, die dem
          wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommen.
        </p>
        <p>
          (4) Nebenabreden bedürfen der Schriftform.
        </p>

        <p class="text-sm text-gray-500 mt-8">Stand: Januar 2026</p>
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
