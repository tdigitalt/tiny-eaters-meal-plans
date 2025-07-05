
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Shield, Zap, Scale, Archive, AlertTriangle } from 'lucide-react';

const QuickReference = () => {
  const portionGuide = [
    { age: '2-3 years', protein: '1-2 oz', grains: '1/2-1 slice bread', fruits: '1/2 cup', vegetables: '1/4-1/2 cup', dairy: '1/2 cup milk' },
    { age: '4-5 years', protein: '2-3 oz', grains: '1-1.5 slices bread', fruits: '1/2-3/4 cup', vegetables: '1/2-3/4 cup', dairy: '3/4 cup milk' }
  ];

  const storageGuide = [
    { food: 'Banane', tip: 'Conserva a temperatura ambiente, in frigo quando mature' },
    { food: 'Pane', tip: 'Congela le pagnotte extra, tosta direttamente dal freezer' },
    { food: 'Latte', tip: 'Conserva nella parte più fredda del frigo, non nello sportello' },
    { food: 'Frutti di bosco', tip: 'Non lavare fino al momento del consumo' },
    { food: 'Avocado', tip: 'Fai maturare in sacchetto di carta, poi in frigo' },
    { food: 'Formaggio', tip: 'Avvolgi in carta da forno, poi in pellicola' }
  ];

  const substitutions = [
    { original: '1 uovo', substitute: '1/4 tazza di purea di mela o 1 banana schiacciata' },
    { original: '1 tazza di latte', substitute: '1 tazza di latte vegetale o 1/2 tazza latte evaporato + 1/2 tazza acqua' },
    { original: '1 tazza di farina', substitute: '1 tazza di farina di mandorle o 3/4 tazza farina di cocco' },
    { original: '1 cucchiaio erbe fresche', substitute: '1 cucchiaino erbe secche' },
    { original: '1 tazza di zucchero', substitute: '3/4 tazza miele o sciroppo d\'acero (ridurre liquidi di 1/4 tazza)' }
  ];

  const prepShortcuts = [
    { task: 'Lavare e tagliare verdure', tip: 'Fallo la domenica per tutta la settimana' },
    { task: 'Preparare smoothie pack', tip: 'Pre-porzione la frutta congelata in sacchetti' },
    { task: 'Cuocere cereali in grandi quantità', tip: 'Prepara grandi porzioni di riso/quinoa' },
    { task: 'Preparare porzioni di snack', tip: 'Dividi crackers e frutta in contenitori' },
    { task: 'Impasto per muffin', tip: 'Mescola ingredienti secchi in anticipo' }
  ];

  const troubleshooting = [
    { problem: 'Non mangia verdure', solution: 'Mescola piccole quantità nei cibi preferiti, offri ripetutamente senza pressione' },
    { problem: 'Vuole solo snack', solution: 'Servi prima i pasti, limita gli snack a 2 al giorno' },
    { problem: 'Rifiuta cibi nuovi', solution: 'Metti piccole quantità nel piatto senza pressione' },
    { problem: 'Mangia troppo lentamente', solution: 'Stabilisci tempi ragionevoli, mantieni calma e pazienza' },
    { problem: 'Vuole sempre lo stesso cibo', solution: 'È normale! Offri varietà insieme ai preferiti' }
  ];

  const nutritionBalance = [
    { component: 'Proteine', sources: 'Uova, pollo, legumi, formaggio, yogurt', amount: '2-3 porzioni/giorno' },
    { component: 'Frutta e Verdura', sources: 'Fresche, congelate o essiccate', amount: '5+ porzioni/giorno' },
    { component: 'Cereali Integrali', sources: 'Riso integrale, pane integrale, avena', amount: '3+ porzioni/giorno' },
    { component: 'Latticini', sources: 'Latte, formaggio, yogurt', amount: '2-3 porzioni/giorno' },
    { component: 'Grassi Sani', sources: 'Avocado, noci, olio d\'oliva', amount: 'Includi nei pasti' }
  ];

  const safetyTips = [
    { tip: 'Supervisiona sempre i bambini mentre cucinano' },
    { tip: 'Tieni i manici dei coltelli rivolti lontano dai bambini' },
    { tip: 'Insegna il lavaggio corretto delle mani prima e dopo aver cucinato' },
    { tip: 'Usa sgabelli con ringhiere per accedere al bancone' },
    { tip: 'Inizia con ingredienti freddi per evitare scottature' },
    { tip: 'Assegna compiti adatti all\'età (mescolare, misurare, lavare)' }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Guida di Riferimento Rapido</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Guide essenziali e consigli per una pianificazione dei pasti di successo. Salva questa pagina per un accesso rapido!
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="portions" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-1">
          <TabsTrigger value="portions" className="flex items-center justify-center space-x-1 text-xs px-2">
            <Scale className="h-3 w-3" />
            <span>Porzioni</span>
          </TabsTrigger>
          <TabsTrigger value="storage" className="flex items-center justify-center space-x-1 text-xs px-2">
            <Archive className="h-3 w-3" />
            <span>Conservare</span>
          </TabsTrigger>
          <TabsTrigger value="substitutions" className="flex items-center justify-center space-x-1 text-xs px-2">
            <Zap className="h-3 w-3" />
            <span>Sostituzioni</span>
          </TabsTrigger>
          <TabsTrigger value="prep" className="flex items-center justify-center space-x-1 text-xs px-2">
            <Clock className="h-3 w-3" />
            <span>Preparazione</span>
          </TabsTrigger>
          <TabsTrigger value="troubleshooting" className="flex items-center justify-center space-x-1 text-xs px-2">
            <AlertTriangle className="h-3 w-3" />
            <span>Aiuto</span>
          </TabsTrigger>
          <TabsTrigger value="nutrition" className="flex items-center justify-center space-x-1 text-xs px-2">
            <Users className="h-3 w-3" />
            <span>Nutrizione</span>
          </TabsTrigger>
          <TabsTrigger value="safety" className="flex items-center justify-center space-x-1 text-xs px-2">
            <Shield className="h-3 w-3" />
            <span>Sicurezza</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="portions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Scale className="h-5 w-5" />
                <span>Porzioni per Età</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {portionGuide.map((guide, index) => (
                  <div key={index} className="space-y-3">
                    <Badge variant="secondary" className="text-sm font-semibold">
                      {guide.age}
                    </Badge>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="font-medium text-sm">Proteine</div>
                        <div className="text-xs text-muted-foreground mt-1">{guide.protein}</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="font-medium text-sm">Cereali</div>
                        <div className="text-xs text-muted-foreground mt-1">{guide.grains}</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="font-medium text-sm">Frutta</div>
                        <div className="text-xs text-muted-foreground mt-1">{guide.fruits}</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="font-medium text-sm">Verdure</div>
                        <div className="text-xs text-muted-foreground mt-1">{guide.vegetables}</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="font-medium text-sm">Latticini</div>
                        <div className="text-xs text-muted-foreground mt-1">{guide.dairy}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="storage" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Archive className="h-5 w-5" />
                <span>Consigli per la Conservazione</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {storageGuide.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                    <Badge variant="outline" className="mt-0.5 shrink-0">{item.food}</Badge>
                    <p className="text-sm text-muted-foreground flex-1">{item.tip}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="substitutions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-5 w-5" />
                <span>Sostituzioni Ingredienti</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {substitutions.map((sub, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 p-3 bg-muted/50 rounded-lg">
                    <Badge variant="secondary" className="shrink-0 w-fit">{sub.original}</Badge>
                    <span className="hidden sm:inline text-muted-foreground">→</span>
                    <span className="text-sm flex-1">{sub.substitute}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="prep" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Scorciatoie per la Preparazione</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {prepShortcuts.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                    <Badge variant="outline" className="mt-0.5 text-xs shrink-0">{item.task}</Badge>
                    <p className="text-sm text-muted-foreground flex-1">{item.tip}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="troubleshooting" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5" />
                <span>Sfide nell'Alimentazione</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {troubleshooting.map((item, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-2">
                    <div className="font-medium text-sm text-red-600 dark:text-red-400">
                      Problema: {item.problem}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Soluzione: {item.solution}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="nutrition" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Equilibrio Nutrizionale</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {nutritionBalance.map((item, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-2">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <Badge variant="secondary">{item.component}</Badge>
                      <span className="text-sm font-medium">{item.amount}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.sources}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="safety" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Sicurezza in Cucina con i Bambini</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {safetyTips.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                    <Shield className="h-4 w-4 mt-0.5 text-green-600 shrink-0" />
                    <span className="text-sm flex-1">{item.tip}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default QuickReference;
