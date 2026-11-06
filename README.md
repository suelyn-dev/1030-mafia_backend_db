# Anleitung: Backend-Projekt mit Node.js, Express, MySQL und GitHub einrichten

## 1. Neues Node.js-Projekt erstellen

Zuerst wird ein neues Projektverzeichnis erstellt und im Terminal geöffnet.

Anschließend initialisieren wir das Node.js-Projekt:

```bash
npm init -y
```

Dadurch wird automatisch eine `package.json` erstellt.

Diese Datei enthält wichtige Informationen über das Projekt, beispielsweise:
- Projektname
- Version
- Abhängigkeiten (Dependencies)
- Startskripte
- Projektkonfiguration

## 2. Benötigte Pakete installieren

Für unser Backend benötigen wir verschiedene Pakete.

### Express, CORS und MySQL installieren

```bash
npm install express cors mysql2
```

**Die Pakete haben folgende Aufgaben:**

| Paket | Funktion |
|---|---|
| `express` | Erstellt und verwaltet unseren Backend-Server. |
| `cors` | Ermöglicht die Kommunikation zwischen Frontend und Backend auf unterschiedlichen Ports bzw. Origins. |
| `mysql2` | Ermöglicht die Verbindung zu einer MySQL-Datenbank. |

### Nodemon installieren

```bash
npm install -D nodemon
```

Nodemon ist ein Entwicklungstool. Es überwacht unsere Dateien und startet den Server automatisch neu, sobald Änderungen gespeichert werden.

Das spart Zeit, weil wir den Server nicht ständig manuell neu starten müssen.

## 3. Git im Projekt einrichten

Damit wir unsere Änderungen speichern und mit GitHub synchronisieren können, richten wir Git ein.

### 3.1 Git-Repository initialisieren

```bash
git init
```

Dadurch wird im Projektordner ein lokales Git-Repository erstellt.

### 3.2 Dateien zum Staging hinzufügen

```bash
git add .
```

Mit diesem Befehl werden alle neuen und geänderten Dateien für den nächsten Commit vorgemerkt.

### 3.3 Ersten Commit erstellen

```bash
git commit -m "Erster Commit"
```

Ein Commit ist ein gespeicherter Zwischenstand unseres Projekts.

Die Nachricht beschreibt, welche Änderungen vorgenommen wurden.

### 3.4 Branch umbenennen

```bash
git branch -M main
```

Damit wird der aktuelle Branch `main` genannt.

Ein Branch ist ein eigener Entwicklungszweig, in dem unabhängig an Änderungen gearbeitet werden kann.

### 3.5 GitHub-Repository verbinden

Zuerst wird ein Repository auf GitHub erstellt.

Anschließend verbinden wir unser lokales Projekt mit GitHub:

```bash
git remote add origin https://github.com/suelyn-dev/1030-mafia_backend_db.git
```

`origin` ist dabei der Name unseres Remote-Repositorys.

### 3.6 Projekt auf GitHub hochladen

```bash
git push -u origin main
```

Damit wird der lokale Branch `main` auf GitHub hochgeladen.

Durch `-u` wird gleichzeitig eine Verbindung zwischen dem lokalen und dem Remote-Branch eingerichtet.

Bei zukünftigen Uploads reicht dann:

```bash
git push
```

---

## 4. Mit Branches arbeiten

Branches ermöglichen es uns, verschiedene Entwicklungsstände voneinander zu trennen.

Wir verwenden zwei Branches:

- `main`: Hauptbranch mit dem aktuellen Projektstand.
- `dev`: Entwicklungsbranch für neue Funktionen und Änderungen.

### 4.1 Neuen Branch erstellen

```bash
git branch dev
```

Damit erstellen wir einen neuen Branch namens `dev`.

### 4.2 Branch wechseln

```bash
git switch dev
```

Wir wechseln damit vom aktuellen Branch zu `dev`.

Zurück zum Hauptbranch gelangen wir mit:

```bash
git switch main
```

### 4.3 Alle Branches anzeigen

```bash
git branch
```

Der aktuell aktive Branch wird mit einem Sternchen (`*`) markiert.

### 4.4 Änderungen im Branch speichern

Nachdem wir Änderungen vorgenommen haben, speichern wir diese mit:

```bash
git add .
git commit -m "Beschreibung der Änderungen"
```

Beispiel:

```bash
git add .
git commit -m "import express"
```

Wichtig: Ein Commit speichert die Änderungen zunächst nur lokal.

### 4.5 Branches zusammenführen (Merge)

Wenn wir Änderungen aus `dev` in `main` übernehmen möchten, wechseln wir zuerst zu `main`:

```bash
git switch main
```

Danach führen wir den Entwicklungsbranch zusammen:

```bash
git merge dev
```

Damit werden die Änderungen aus `dev` in `main` übernommen.

### 4.6 Merge-Konflikte lösen

Manchmal bearbeiten zwei Branches dieselbe Stelle in einer Datei. Git kann dann nicht automatisch entscheiden, welche Änderung übernommen werden soll.

Das nennt man einen **Merge-Konflikt**.

Beispiel einer Fehlermeldung:

```bash
CONFLICT (content): Merge conflict in index.js
Automatic merge failed; fix conflicts and then commit the result.
```

**So lösen wir den Konflikt:**

1. Die betroffene Datei öffnen (in unserem Beispiel `index.js`).
2. Die von Git markierten Konfliktstellen suchen.
3. Entscheiden, welche Änderungen behalten werden sollen.
4. Die Konfliktmarkierungen entfernen.
5. Die Datei speichern.

Anschließend teilen wir Git mit, dass der Konflikt gelöst wurde:

```bash
git add .
```

Kontrollieren können wir den Status mit:

```bash
git status
```

Wenn alle Konflikte behoben sind, schließen wir den Merge mit einem Commit ab:

```bash
git commit -m "resolved merge conflict"
```

**Tipp:** Falls wir den Merge doch abbrechen möchten, können wir Folgendes verwenden:

```bash
git merge --abort
```

### 4.7 Änderungen auf GitHub hochladen

Den aktuellen Branch können wir mit folgendem Befehl hochladen:

```bash
git push
```

Falls der Branch noch nicht mit einem Remote-Branch verbunden ist:

```bash
git push -u origin dev
```

Für `main` entsprechend:

```bash
git push -u origin main
```

### 4.8 Änderungen aus main in dev übernehmen

Wenn `main` neue Änderungen enthält, die auch in `dev` benötigt werden, wechseln wir zu `dev`:

```bash
git switch dev
```

Danach führen wir `main` in `dev` zusammen:

```bash
git merge main
```

So bleibt der Entwicklungsbranch auf dem aktuellen Stand von `main`.

### 4.9 Git-Status und Commit-Verlauf kontrollieren

Aktuellen Status anzeigen:

```bash
git status
```

Commit-Verlauf anzeigen:

```bash
git log --oneline
```

Damit sehen wir die bisherigen Commits in einer kompakten Übersicht.

---

## 5. Standardkonfiguration des Express-Servers

Jetzt erstellen wir die grundlegende Struktur unseres Backends.

Dafür öffnen wir die Datei `index.js`.

### 5.1 Imports einrichten

Zuerst importieren wir die benötigten Pakete:

```javascript
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
```

Falls `cookie-parser` noch nicht installiert wurde:

```bash
npm install cookie-parser
```

**Wichtig:** Da wir `import` verwenden, muss in der `package.json` Folgendes stehen:

```json
"type": "module"
```

### 5.2 Umgebungsvariablen laden

```javascript
process.loadEnvFile(".env");
```

Damit werden die Variablen aus der `.env`-Datei geladen.

Beispielsweise können dort der Port oder Datenbank-Zugangsdaten hinterlegt werden.

### 5.3 Port definieren

```javascript
const PORT = process.env.PORT || 8080;
```

Hier legen wir fest, auf welchem Port unser Server laufen soll.

- `process.env.PORT`: Verwendet den Port aus der Umgebungsvariable.
- `8080`: Wird als Standardwert verwendet, falls kein Port angegeben ist.

Das ist ein sogenannter Fallback bzw. Sicherheits-Backup.

### 5.4 Express-Anwendung erstellen

```javascript
const app = express();
```

Damit erstellen wir unsere Express-Anwendung, über die wir später beispielsweise Routen und Middleware definieren können.

### 5.5 Middleware einrichten

Middleware sind Funktionen, die bei eingehenden HTTP-Anfragen ausgeführt werden.

Wir benötigen folgende Middleware:

**CORS:**

```javascript
app.use(cors());
```

Ermöglicht die Kommunikation zwischen Frontend und Backend, wenn diese unterschiedliche Origins verwenden.

**JSON:**

```javascript
app.use(express.json());
```

Damit kann Express eingehende JSON-Daten aus dem Request-Body lesen und verarbeiten.

**Cookie Parser:**

```javascript
app.use(cookieParser());
```

Damit können Cookies aus eingehenden HTTP-Anfragen ausgelesen werden.

Die ausgelesenen Cookies stehen anschließend unter `req.cookies` zur Verfügung.

### 5.6 Server starten

Zum Schluss starten wir den Server:

```javascript
app.listen(PORT, () => {
    console.log("Ein Mauzi erscheint in Port", PORT);
});
```

Sobald der Server erfolgreich gestartet wurde, erscheint die entsprechende Nachricht im Terminal.

---

## 6. Cookies in Express verwenden

Cookies sind kleine Daten, die im Browser gespeichert und bei passenden HTTP-Anfragen an den Server gesendet werden.

Damit unser Express-Server Cookies verarbeiten kann, installieren wir zunächst das Paket:

```bash
npm install cookie-parser
```

Anschließend importieren wir es in `index.js`:

```javascript
import cookieParser from "cookie-parser";
```

Danach registrieren wir die Middleware:

```javascript
app.use(cookieParser());
```

**Wichtig:** Die Middleware muss vor den Routen eingebunden werden, die auf Cookies zugreifen möchten.

---

## 7. Beispiel für die vollständige Server-Grundstruktur

So könnte unsere bisherige `index.js` aussehen:

```javascript
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Umgebungsvariablen laden
process.loadEnvFile(".env");

// Port definieren
const PORT = process.env.PORT || 8080;

// Express-Anwendung erstellen
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Server starten
app.listen(PORT, () => {
    console.log("Ein Mauzi erscheint in Port", PORT);
});
```

## 8. Wichtige Git-Befehle auf einen Blick

| Befehl | Bedeutung |
|---|---|
| `git init` | Git-Repository erstellen |
| `git add .` | Alle Änderungen vormerken |
| `git commit -m "Text"` | Änderungen lokal speichern |
| `git branch` | Branches anzeigen |
| `git branch dev` | Neuen Branch erstellen |
| `git switch dev` | Branch wechseln |
| `git merge dev` | Branch zusammenführen |
| `git merge --abort` | Merge abbrechen |
| `git status` | Aktuellen Status anzeigen |
| `git log --oneline` | Commit-Verlauf anzeigen |
| `git push` | Änderungen hochladen |
| `git push -u origin dev` | Branch erstmals hochladen |
| `git remote -v` | Verknüpfte Remote-Repositorys anzeigen |

---

## 9. Wichtige Hinweise

- Vor einem Branch-Wechsel sollten Änderungen möglichst committet oder anderweitig gesichert werden.
- Ein `git commit` lädt nichts automatisch auf GitHub hoch. Dafür brauchen wir `git push`.
- Bei einem Merge-Konflikt müssen die betroffenen Dateien manuell korrigiert werden.
- Die `.env`-Datei enthält sensible Zugangsdaten und sollte nicht auf GitHub hochgeladen werden.
- Stattdessen kann eine `.env.example` mit den benötigten Variablennamen ohne echte Zugangsdaten hochgeladen werden.
- `package.json` und `package-lock.json` sollten mit Git versioniert werden.

**Damit haben wir die Grundlage für unser Backend-Projekt geschaffen:** Node.js ist eingerichtet, Express kann gestartet werden, die benötigten Middleware sind eingebunden und unser Projekt ist mit GitHub verbunden.