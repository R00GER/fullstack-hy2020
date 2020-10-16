# Sovelluksen tilan hallinta Redux-kirjastolla

### Tehtävät

### Flux-arkkitehtuuri ja Redux
* [x] **6.1: unicafe revisited, step1**
  * Ennen sivulla näkyvää toiminnallisuutta toteutetaan storen edellyttämä toiminnallisuus. Storeen täytyy tallettaa erikseen lukumäärä jokaisentyyppisestä palautteesta. Toteuta reducer ja tee sille testit. Varmista testeissä deep-freeze-kirjaston avulla, että kyseessä on puhdas funktio. Huomaa, että valmiin ensimmäisen testin on syytä mennä läpi koska redux olettaa, että reduceri palauttaa järkevän alkutilan kun sitä kutsutaan siten että ensimmäinen parametri, eli aiempaa tilaa edustava state on undefined. Aloita laajentamalla reduceria siten, että molemmat testeistä menevät läpi. Lisää tämän jälkeen loput testit ja niiden toteuttava toiminnallisuus.
* [x] **6.2: unicafe revisited, step2**
  * Toteuta sitten sovellukseen koko sen varsinainen toiminnallisuus.
* [x] **6.3: anekdootit, step1**
  * Toteuta mahdollisuus anekdoottien äänestämiseen. Äänien määrä tulee tallettaa redux-storeen.
* [x] **6.4: anekdootit, step2**
  * Tee sovellukseen mahdollisuus uusien anekdoottien lisäämiselle. Voit pitää lisäyslomakkeen aiemman esimerkin tapaan ei-kontrolloituna.n.
* [x] **6.5\*: anekdootit, step3**
  * Huolehdi siitä, että anekdootit pysyvät äänten mukaisessa suuruusjärjestyksessä.
* [x] **6.6: anekdootit, step4**
  * Jos et jo sitä tehnyt, eriytä action-olioiden luominen action creator -funktioihin ja sijoita ne tiedostoon src/reducers/anecdoteReducer.js. Eli toimi samalla tavalla kuin materiaali esimerkissä kohdasta action creator alkaen on toimittu.
* [x] **6.7: anekdootit, step5**
  * Eriytä uuden anekdootin luominen omaksi komponentikseen nimeltään AnecdoteForm. Siirrä kaikki anekdootin luomiseen liittyvä logiikka uuteen komponenttiin.
* [x] **6.8: anekdootit, step6**
  * Eriytä anekdoottilistan näyttäminen omaksi komponentikseen nimeltään AnecdoteList. Siirrä kaikki anekdoottien äänestämiseen liittyvä logiikka uuteen komponenttiin.

  ### Monta reduseria
* [x] **6.9: anekdootit, step7**
  * Ota sovelluksessasi käyttöön Redux DevTools. Siirrä Redux-storen määrittely omaan tiedostoon store.js.
* [x] **6.10: anekdootit, step8**
  * Sovelluksessa on valmiina komponentin Notification runko. Laajenna komponenttia siten, että se renderöi redux-storeen talletetun viestin. 

  Joudut siis muuttamaan/laajentamaan sovelluksen olemassaolevaa reduceria. Tee toiminnallisuutta varten oma reduceri ja siirry käyttämään sovelluksessa yhdistettyä reduceria tämän osan materiaalin tapaan.

  Tässä vaiheessa sovelluksen ei vielä tarvitse osata käyttää Notification komponenttia järkevällä tavalla, riittää että sovellus toimii ja näyttää notificationReducerin alkuarvoksi asettaman viestin.
* [x] **6.11: paremmat anekdootit, step9**
  * Laajenna sovellusta siten, että se näyttää Notification-komponentin avulla viiden sekunnin ajan, kun sovelluksessa äänestetään tai luodaan uusia anekdootteja.

  Notifikaation asettamista ja poistamista varten kannattaa toteuttaa action creatorit. 
* [x] **6.12\*: paremmat anekdootit, step10**
  * Toteuta sovellukseen näytettävien muistiinpanojen filtteröiminen. Säilytä filtterin tila redux storessa, eli käytännössä kannattaa jälleen luoda uusi reduceri ja action creatorit.

  Tee filtterin ruudulla näyttämistä varten komponentti Filter.

  ### Redux-sovelluksen kommunikointi palvelimen kanssa
* [x] **6.13 anekdootit ja backend, step1**
  * Hae sovelluksen käynnistyessä anekdootit json-serverillä toteutetusta backendistä.
* [x] **6.14 anekdootit ja backend, step2**
  * Muuta uusien anekdoottien luomista siten, että anekdootit talletetaan backendiin.
* [x] **6.15 anekdootit ja backend, step3**
  * Muuta redux-storen alustus tapahtumaan redux-thunk-kirjaston avulla toteutettuun asynkroniseen actioniin.
* [x] **6.16 anekdootit ja backend, step4**
  * Muuta myös uuden anekdootin luominen tapahtumaan redux-thunk-kirjaston avulla toteutettuihin asynkronisiin actioneihin.
* [x] **6.17 anekdootit ja backend, step5**
  * Äänestäminen ei vielä talleta muutoksia backendiin. Korjaa tilanne redux-thunk-kirjastoa hyödyntäen.
* [x] **6.18 anekdootit ja backend, step6**
  * Notifikaatioiden tekeminen on nyt hieman ikävää, sillä se edellyttää kahden actionin tekemistä ja setTimeout-funktion käyttöä. Tee asynkroninen action creator, joka mahdollistaa notifikaation antamisen, ensimmäisenä parametrina on renderöitävä teksti ja toisena notifikaation näyttöaika sekunneissa.

  Ota paranneltu notifikaatiotapa käyttöön sovelluksessasi.

### Connect
* [x] **6.19: anekdootit ja connect, step1**
  * Muuta notifikaatioiden näyttämisestä huolehtiva komponentti käyttämään useSelector-hookin sijaan connect-funktiota.
* [x] **6.20: anekdootit ja connect, step2**
  * Tee sama komponentille AnecdoteForm.
* [x] **6.21: anekdootit, loppuhuipennus**
  * Sovellukseen on (todennäköisesti) jäänyt eräs hieman ikävä bugi. Jos vote-näppäintä painellaan useasti peräkkäin, notifikaatio näkyy ruudulla hieman miten sattuu. Esimerkiksi jos äänestetään kaksi kertaa kolmen sekunnin välein, näkyy jälkimmäinen notifikaatio ruudulla ainoastaan kahden sekunnin verran (olettaen että notifikaation näyttöaika on 5 sekuntia). Tämä johtuu siitä, että ensimmäisen äänestyksen notifikaation tyhjennys tyhjentääkin myöhemmän äänestyksen notifikaation.

  Korjaa bugi, siten että usean peräkkäisen äänestyksen viimeistä notifikaatiota näytetään aina viiden sekunnin ajan. Korjaus tapahtuu siten, että uuden notifikaation tullessa edellisen notifikaation nollaus tarvittaessa perutaan, ks. funktion setTimeout dokumentaatio.

\* = vapaaehtoinen tehtävä
