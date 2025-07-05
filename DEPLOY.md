
# Deploy su GitHub Pages

## Configurazione automatica GitHub Pages

1. **Push del codice su GitHub** (già fatto se hai accesso)

2. **Abilita GitHub Pages**:
   - Vai su Settings del repository
   - Scorri fino a "Pages"
   - Source: "Deploy from a branch"
   - Branch: seleziona "main" (o "master")
   - Folder: "/ (root)"
   - Clicca "Save"

3. **Configura GitHub Actions per il build automatico**:
   Il file `.github/workflows/deploy.yml` verrà creato automaticamente

4. **Verifica il deploy**:
   - L'app sarà disponibile su: `https://[username].github.io/[repository-name]`
   - Il certificato SSL sarà automatico (HTTPS)
   - L'app sarà installabile come PWA

## Funzionalità PWA incluse:

✅ **Installazione**: Prompt automatico su dispositivi supportati  
✅ **Offline**: Cache intelligente dei contenuti  
✅ **Icone**: Icone ottimizzate per home screen  
✅ **Splash Screen**: Schermata di avvio personalizzata  
✅ **Standalone**: Funziona come app nativa  
✅ **Responsive**: Ottimizzata per mobile e desktop  

## Test locale PWA:

Per testare le funzionalità PWA in locale:

```bash
npm run build
npx serve dist
```

Poi visita `https://localhost:3000` (deve essere HTTPS per PWA)

## Aggiornamenti:

Ogni push su GitHub attiverà automaticamente il rebuild e deploy dell'app.
