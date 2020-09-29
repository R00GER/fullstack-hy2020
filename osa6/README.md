# Sovelluksen tilan hallinta Redux-kirjastolla

### Tehtävät

### Flux-arkkitehtuuri ja Redux
* [x] **6.1: unicafe revisited, step1**
  * Ennen sivulla näkyvää toiminnallisuutta toteutetaan storen edellyttämä toiminnallisuus. Storeen täytyy tallettaa erikseen lukumäärä jokaisentyyppisestä palautteesta. Toteuta reducer ja tee sille testit. Varmista testeissä deep-freeze-kirjaston avulla, että kyseessä on puhdas funktio. Huomaa, että valmiin ensimmäisen testin on syytä mennä läpi koska redux olettaa, että reduceri palauttaa järkevän alkutilan kun sitä kutsutaan siten että ensimmäinen parametri, eli aiempaa tilaa edustava state on undefined. Aloita laajentamalla reduceria siten, että molemmat testeistä menevät läpi. Lisää tämän jälkeen loput testit ja niiden toteuttava toiminnallisuus.
* [x] **6.2: unicafe revisited, step2**
  * Toteuta sitten sovellukseen koko sen varsinainen toiminnallisuus.
* [ ] **6.3: anekdootit, step1**
  * Toteuta mahdollisuus anekdoottien äänestämiseen. Äänien määrä tulee tallettaa redux-storeen.
* [ ] **6.4: anekdootit, step2**
  * Tee sovellukseen mahdollisuus uusien anekdoottien lisäämiselle. Voit pitää lisäyslomakkeen aiemman esimerkin tapaan ei-kontrolloituna.n.
* [ ] **6.5\*: anekdootit, step3**
  * Huolehdi siitä, että anekdootit pysyvät äänten mukaisessa suuruusjärjestyksessä.
* [ ] **6.6: anekdootit, step4**
  * Jos et jo sitä tehnyt, eriytä action-olioiden luominen action creator -funktioihin ja sijoita ne tiedostoon src/reducers/anecdoteReducer.js. Eli toimi samalla tavalla kuin materiaali esimerkissä kohdasta action creator alkaen on toimittu.
* [ ] **6.7: anekdootit, step5**
  * Eriytä uuden anekdootin luominen omaksi komponentikseen nimeltään AnecdoteForm. Siirrä kaikki anekdootin luomiseen liittyvä logiikka uuteen komponenttiin.
* [ ] **6.8: anekdootit, step6**
  * Eriytä anekdoottilistan näyttäminen omaksi komponentikseen nimeltään AnecdoteList. Siirrä kaikki anekdoottien äänestämiseen liittyvä logiikka uuteen komponenttiin.

\* = vapaaehtoinen tehtävä
