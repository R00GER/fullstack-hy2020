# React-sovelluksen testaaminen - Blogilista frontend

### Tehtävät

### Kirjautuminen frontendissä
* [x] **5.1: blogilistan frontend, step1**
  * Toteuta frontendiin kirjautumisen mahdollistava toiminnallisuus. Kirjautumisen yhteydessä backendin palauttama token tallennetaan sovelluksen tilaan user. Jos käyttäjä ei ole kirjautunut, sivulla näytetään pelkästään kirjautumislomake. Kirjautuneelle käyttäjälle näytetään kirjautuneen käyttäjän nimi sekä blogien lista. Tässä vaiheessa kirjautuneiden käyttäjien tietoja ei vielä tarvitse muistaa local storagen avulla.
* [x] **5.2: blogilistan frontend, step2**
  * Tee kirjautumisesta "pysyvä" local storagen avulla. Tee sovellukseen myös mahdollisuus uloskirjautumiseen. Uloskirjautumisen jälkeen selain ei saa muistaa kirjautunutta käyttäjää reloadauksen jälkeen.
* [x] **5.3: blogilistan frontend, step3**
  * Laajenna sovellusta siten, että kirjautunut käyttäjä voi luoda uusia blogeja.
* [x] **5.4\*: blogilistan frontend, step4**
  * Toteuta sovellukseen notifikaatiot, jotka kertovat sovelluksen yläosassa onnistuneista ja epäonnistuneista toimenpiteistä. Notifikaation tulee olla näkyvillä muutaman sekunnin ajan. Värien lisääminen ei ole pakollista.


### Props.children ja PropTypet
* [x] **5.5: blogilistan frontend, step5**
  * Tee blogin luomiseen käytettävästä lomakkeesta ainoastaan tarvittaessa näytettävä osan 5 luvun Kirjautumislomakkeen näyttäminen vain tarvittaessa tapaan. Voit halutessasi hyödyntää osassa 5 määriteltyä komponenttia Togglable. Lomake ei ole oletusarvoisesti näkyvillä. Klikkaamalla nappia new note lomake aukeaa. Lomakkeen tulee sulkeutua kun uusi blogi luodaan.
* [x] **5.6 blogilistan frontend, step6**
  * Eriytä uuden blogin luomisesta huolehtiva lomake omaan komponenttiinsa (jos et jo ole niin tehnyt), ja siirrä kaikki uuden blogin luomiseen liittyvä tila komponentin vastuulle. Komponentin tulee siis toimia samaan tapaan kuin tämän osan materiaalin komponentin NoteForm.
* [x] **5.7\*: blogilistan frontend, step7**
  * Lisää yksittäiselle blogille nappi, jonka avulla voi kontrolloida näytetäänkö kaikki blogiin liittyvät tiedot.Klikkaamalla nappia sen täydelliset tiedot aukeavat. Uusi napin klikkaus pienentää näkymän. Napin like ei tässä vaiheessa tarvitse tehdä mitään.
* [x] **5.8\*: blogilistan frontend, step8**
  * Toteuta like-painikkeen toiminnallisuus. Like lisätään backendiin blogin yksilöivään urliin tapahtuvalla PUT-pyynnöllä.Koska backendin operaatio korvaa aina koko blogin, joudut lähettämään operaation mukana blogin kaikki kentät.
* [x] **5.9\*: blogilistan frontend, step9**
  * Järjestä sovellus näyttämään blogit likejen mukaisessa suuruusjärjestyksessä. Järjestäminen onnistuu taulukon metodilla sort.
* [x] **5.10\*: blogilistan frontend, step10**
  * Lisää nappi blogin poistamiselle. Toteuta myös poiston tekevä logiikka. Näytä poistonappi ainoastaan jos kyseessä on kirjautuneen käyttäjän lisäämä blogi.


### Proptypet ja Eslint
* [x] **5.11: blogilistan frontend, step11**
  * Määrittele joillekin sovelluksesi komponenteille PropTypet.
* [x] **5.12: blogilistan frontend, step12**
  * Ota projektiin käyttöön ESlint. Määrittele haluamasi kaltainen konfiguraatio. Korjaa kaikki lint-virheet.


### React -sovelluksen testaaminen
* [x] **5.13: blogilistan testit, step1**
  * Tee testi, joka varmistaa että blogin näyttävä komponentti renderöi blogin titlen, authorin mutta ei renderöi oletusarvoisesti urlia eikä likejen määrää.
* [x] **5.14: blogilistan testit, step2**
  * Tee testi, joka varmistaa että myös url ja likejen määrä näytetään kun blogin kaikki tiedot näyttävää nappia on painettu.
* [x] **5.15: blogilistan testit, step3**
  * Tee testi, joka varmistaa, että jos komponentin like-nappia painetaan kahdesti, komponentin propsina saamaa tapahtumankäsittelijäfunktiota kutsutaan kaksi kertaa.
* [x] **5.16\*: blogilistan testit, step4**
  * Tee uuden blogin luomisesta huolehtivalle lomakkelle testi, joka varmistaa, että lomake kutsuu propseina saamaansa takaisinkutsufunktiota oikeilla tiedoilla siinä vaiheessa kun blogi luodaan. Lisää komponenttiin tarvittaessa testausta helpottavia CSS-luokkia tai id:itä.

### End to end -testaus
* [x] **5.17: blogilistan end to end -testit, step1**
  * Konfiguroi Cypress projektiisi. Tee testi, joka varmistaa, että sovellus näyttää oletusarvoisesti kirjautumislomakkeen. Testin beforeEach-alustuslohkon tulee nollata tietokannan tilanne esim. materiaalissa näytetyllä tavalla.
* [x] **5.18: blogilistan end to end -testit, step2**
  * Tee testit kirjautumiselle, testaa sekä onnistunut että epäonnistunut kirjautuminen. Luo testejä varten käyttäjä beforeEach-lohkossa. Vapaaehtoinen bonustehtävä: varmista, että epäonnistuneeseen kirjautumiseen liittyvä notifikaatio näytetään punaisella.
* [x] **5.19: blogilistan end to end -testit, step3**
  * Tee testi, joka varmistaa, että kirjaantunut käyttäjä pystyy luomaan blogin. Testin tulee varmistaa, että luotu blogi tulee näkyville blogien listalle.
* [x] **5.20: blogilistan end to end -testit, step4**
  * Tee testi, joka varmistaa, että blogia voi likettää.
* [x] **5.21: blogilistan end to end -testit, step5**
  * Tee testi, joka varmistaa, että blogin lisännyt käyttäjä voi poistaa blogin. Vapaaehtoinen bonustehtävä: varmista myös että poisto ei onnistu muilta kuin blogin lisänneeltä käyttäjältä.
* [x] **5.22: blogilistan end to end -testit, step6**
  * Tee testi, joka varmistaa, että blogit järjestetään likejen mukaiseen järjestykseen, eniten likejä saanut blogi ensin. Tämä tehtävä saattaa olla hieman edeltäviä haastavampi. Eräs ratkaisutapa on etsiä kaikki blogit ja tarkastella tulosta then-komennon takaisinkutsufunktiossa.

\* = vapaaehtoinen tehtävä
