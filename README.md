# Schupperlehre 2022 - i4Ds - Christoph Vögele

Ziel: Erstelle ein Spiel mit indem eim Fisch am Strand Kokosnüsse aufsammelt.

<img width="1000" alt="image" src="https://user-images.githubusercontent.com/10659582/200948955-3af1f9b3-a38b-4866-9747-8c820b7142d5.png">

Lernziele: 
- Basic Programming
- Variablen
- Program Flow

1. Code ansehen

Öffne das Index.html File in einem Webbrowser. 
Es sollte ein kleiner Text über den Screen sich bewegen (von oben nach unten).
Das ist gut, dass heisst, dass die P5.js library die wir verwenden richtig eingebunden ist.
Falls dies nicht der Fall ist melden.

Das File main.js ist das File das in diesem Tutorial bearbeitet wird.
Es hat noch ein anderes File lib.js, welches ich bereits vorprammiert habe, damit es ein bisschen einfacher wird. Das musst du nicht bearbeiten.

2. Main.js

Das File sollte jetzt so aussehen.

```
function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255);
    text("put your p5.js code here",10, frameCount % height);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
```

`setup()` ist da um die Zeichenfläche (Canvas) des Programms zu initaliseren. 
`draw()` wird in jedem Frame des Programmes ausgeführt.
`windowResized()` updated das Canvas wenn man das Browserwindow verändert. Diese Funktion werden wir nicht bearbeiten.


3. Spielobjekte erzeugen.

Um das Spiel jetzt zu machen müssen wir Dinge ins Spiel bringe, welche auf dem Canvas gezeichnet werden.

Dafür habe ich bereits etwas Code vorgeschrieben.
Füge oben am File main.js 

`let backGroundImage = new GameObject(0, 0, 1000, 1000, "../assets/beach.webp")`

Hier lernen wir gerade viel. Wir sehen dass wir ein neues Spielobjekt mit `new GameObject()` erstellen und das der Variable backGroundImage hinzufügen.
Das heisst diese Variable hat eine bestimmte Struktur und Funktionalitäten. Diese sehen wir nachher gleich.

Desweiteren wird beim Erstellen das Spielobjektes an der Position 0,0 mit der Grösse 1000 in der Breite 1000 in der Höhe erstellt.
Sowie wählen wir das Bild beach.webp als Darstellung für das GameObject an.

Die Position kann interpretiert werden, wie auf einem Schachfeld, ausser das beide Seiten mit Zahlen indexiert sind, anstelle von Zahlen und Buchstaben.

Das heisst das Spielobjekt hier ist also an der Position x = 0, y = 0.
Hier in dieser einfachen "GameEngine" sind die Position die Pixel im fertigen Bild.

Um das Spielobjekt noch zu zeichnen müssen wir jetzt noch `backGroundImage.setup()` in die setup() funktion schreiben und `backGroundImage.draw()` in die draw() Funktion.

Jetzt sollte dein Spiel einfach nur ein Hintergrund eines pixeligen Strandes sein.


3. Was kann ein GameObjekt.

Das GameObjekt ist nicht einfach nur so ein Ding, sondern das was man in der Programmierung eine Klasse nennt. Klassen (Class) sind Objekte, die Daten und Funktionen enthalten.

Das GameObject enthält die folgenden Daten.
- die Position des GameObjects mit den Variabeln x und y. 
- die Grösse des GameObjects mit den Variablen width, height.

Sowie die Funktionen.
- moveBy(xDelta,yDelta) : Bewegt das GameObject um xDelta entlang der xAchse und yDelta entlangt der y Richtung.
- setup() : ladet das Bild das angegeben wurde und bereited das Objekt vor gezeichnet zu werden. Kann nur in der setup() Funktion in main.js verwendet werden.
- draw() : Zeichnet das GameObjekt in den Browser. Kann nur in der draw() Funktion von main.js verwendet werden.
- touch(other) : Überprüft ob sich dieses und ein anderes GameObjekt berühren. Falls ja gibt es true zurück sonst false.

Die touch funktion kommt später noch zum Zug.

Jetzt sollte dein Code so aussehen.

```

```

4. Der Spieler

Als Spieler nehmen wir einen Fisch (du kannst auf etwas anderes wählen falls du willst).

Mache wie beim Hintergrund ein neues GameObject.
`let player = new GameObject(0, 0, 100, 100, "../assets/trout.png")`

Füge auch wieder player.setup() und player.draw() in die jeweiligen Funktionen. Jetzt zeichnet sich ein Fisch an der Position x = 0, y = 0.

Jetzt wollen wir den Spieler bewegen können. Dafür verwenden wir Keyboard Eingaben.
Um diese zu verwenden können wir in der Funktion ein `if` statement verwenden.
Mit einem `if` statetement können wir Code ausführen unter Bedingungen.

Bsp.

```
if (x = 4) {
  ... // do anything, aber nur wenn x = 4 ist.
}
```

Das Statement `x = 4` ergibt ein boolean value, welches entwerde wahr oder falsch (true or false) ist. 
Solch ein boolean value kann man auch einfach definieren.

```
var banane = true
```

Jetzt haben wir eine Variable namens Banane die True ist.

Das ist ja toll, aber was wir eigentlich wollen, ist es den Fisch zu bewegen, wenn wir einen bestimmten Knopf drücken.

Dafür gibt uns die Library p5.js (die wir ja verwenden) bereits eine Funktion namens `isKeyDown(keyCode)`, welche true zurück gibt, wenn der KeyCode gedrückt ist und false, wenn nicht.

Also füge diesen Code zu draw() hinzu.
```
if (keyIsDown(LEFT_ARROW)) {
  player.moveBy( -10, 0)
}

```
Mit diesem If bewegt sich nun der Fisch um -10 in die x Richtung (was links ist), wenn die Linke Pfeiltaste gedrückt ist.

Das gleiche machen wir nun mit rechts.

```
 if (keyIsDown(RIGHT_ARROW)) {
        player.moveBy(10, 0)
   }
```

Auch wollen wir, dass der Fisch nicht mehr oben in der linken ecke ist, sonder mehr unten und mehr in der Mitte.

Das können wir machen, indem wir im setup() das Folgende schreiben.

```
player.x = 300
player.y = 500
```
Es gehen auch andere Werte. Ausprobieren mach schlauer!

Dein Code sollte nun so aussehen.

```
```

Amazing. Dein Fisch kann fliegen?

4. Sammelstücke 

Jetzt wollen wir das der Fisch etwas aufsammeln kann.
Was gibt es denn am Strand? Kokosnüsse!

Wir machen nochmal ein GameObject 
`let coconut = new GameObject(0, 0, 50, 50, "../assets/coconut.png")`

Auch hier wieder das setup() und draw() hinzufügen, repsektive hinzufügen.

Jetzt wollen wir das die Kokosnuss sich nach unten beweget und aufgesammelt werden kann.

Das nach unten bewegen kann man wie beim Fischsteuern machen (einfach ohne If Konditiion. Die Kokosnuss soll ja immer nach unten fallen).

Füge dies zur draw() funktion hinzu. (Auch hier mit den Zahlen spielen)

```
 coconut.moveBy(0, 2)
```

Jetzt müssen wir nur noch die Kollision von Kokosnuss und Fisch überprüfen.
Dafür können wir jetzt wieder ein if verwenden und die funktion `touch()` von den GameObjekten.

```
if(coconut.touch(player)) {
  //Code hier wird nun nur ausgeführt, wenn sich der Player und die Kokosnuss berühren.
}
```

Super. Jetzt muss da einfach noch was passieren. 
Wie wäre es wenn wir jetzt die Kokosnuss nach erfolgreichen berühren wieder nach oben bringen, dass sie wieder fallen kann.
Um das zu tun, können wir `coconut.y = 0`, innerhalb des if Statements hinzufügen;

So dass es dann so aussieht.
if(coconut.touch(player)) {
  cococnut.y = 0
}

Jetzt geht die immer wieder hoch wenn man sie fängt. Aber was wenn man sie nicht fängt? Dann fällt sie einfach aus dem Bild.
Machen wir es dass, sie auch wieder nach oben geht, wenn sie unten das Bild verlässt.
Das geht auch mit einem `if` Statement:

```
 if (coconut.y > 1000) {
        coconut.y = 0;
 }
```
Wenn die y position der Kokosnuss grösser als 1000 ist, wird die Kokosnuss wieder an y = 0 getan.

Das ist schonmal super. Jetzt haben wir einen spielbaren Gameloop.

Aber ist noch ein bisschen langweilig.
Machen wir doch, dass die Kokosnuss nicht immer am gleichen Ort runterfällt.

Dafür können wir beim Hochtun der Kokosnuss auch noch die x Position anders setzten
Und wir machen das zufällig mit der Funktion `random()`, die ich vorgefertigt habe.

Also könnnen wir nach den Linien `coconut.y = 0` noch die Linie `coconut.x = random(0,800)` hinzufügen.
So wird die x Position zufällig zwischen 0 und 800 gesetzt.

Bravo, dein Code sollte nun so aussehen:

```
```

5. Punkte

Jetzt wollen wir noch die Punkte zählen. 
Dafür machen wir eine variable die die Anzahl gesammelten Kokosnüssen anzeigt.
Anstelle eines GameObjektes machen wir jetzt eine normale Variablen wie folgt.

```
var hitcount = 0
```

Diese Variable können wir nun erhöhen wenn die Kokosnuss den Fisch trifft. Wie das geht wissen wir ja schon.
Füge `hitcount++` oder `hitcount = hitcount + 1` am richtigen Ort ein.

Jetzt wollen wir den Counter noch im Spiel anzeigen, dafür können wir dieses Codesnippet verwenden.

```
textSize(32) //Es wird dem Programm gesagt, dass die Textgrösse auf 32 gesetzt wird.
fill(50); //Es wird dem Programm gesagt, dass das nächste mit der Farbe 50 geschrieben werden soll. Das ist so dunkelgrau.
text("Punkte " + hitCount, 10, 10, 200, 100); // hier machen wir ein text auf dem Bild an Stelle 10, 10 mit Grösse 200, 100 mit den Text Punkte X, X für die Anzahl Punkte. Man kann mit dem + Text verknüpfen.
```
Füge dies in die Funktion draw() ganz unten.

Jetzt sehen wir den Punktestand und wir können für ewig Kokosnüsse als Fisch am Strand sammeln.

Super!? Jetzt hast du viele Basics vom Programmiern schon gesehen

Falls du noch Zeit hast, kannst du nun versuchen selbst noch etwas hinzuzufügen.

Z.B.
- Ein Gegenstand, der man nicht auflesen darf, sonst verliert man.
- Mehr als eine Kokosnuss
- Andere Sammelstücke, die unterschiedlich Punkte geben.
- etc..
