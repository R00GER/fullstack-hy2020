# Blogilista frontend

### Tehtävät

* [x] **5.1: blogilistan frontend, step1**
  * Toteuta frontendiin kirjautumisen mahdollistava toiminnallisuus. Kirjautumisen yhteydessä backendin palauttama token tallennetaan sovelluksen tilaan user. Jos käyttäjä ei ole kirjautunut, sivulla näytetään pelkästään kirjautumislomake. Kirjautuneelle käyttäjälle näytetään kirjautuneen käyttäjän nimi sekä blogien lista. Tässä vaiheessa kirjautuneiden käyttäjien tietoja ei vielä tarvitse muistaa local storagen avulla.
* [x] **5.2: blogilistan frontend, step2**
  * Tee kirjautumisesta "pysyvä" local storagen avulla. Tee sovellukseen myös mahdollisuus uloskirjautumiseen. Uloskirjautumisen jälkeen selain ei saa muistaa kirjautunutta käyttäjää reloadauksen jälkeen.
* [x] **5.3: blogilistan frontend, step3**
  * Laajenna sovellusta siten, että kirjautunut käyttäjä voi luoda uusia blogeja.
* [x] **5.4*: blogilistan frontend, step4**
  * Toteuta sovellukseen notifikaatiot, jotka kertovat sovelluksen yläosassa onnistuneista ja epäonnistuneista toimenpiteistä. Notifikaation tulee olla näkyvillä muutaman sekunnin ajan. Värien lisääminen ei ole pakollista.
* [x] **5.5 blogilistan frontend, step5**
  * Tee blogin luomiseen käytettävästä lomakkeesta ainoastaan tarvittaessa näytettävä osan 5 luvun Kirjautumislomakkeen näyttäminen vain tarvittaessa tapaan. Voit halutessasi hyödyntää osassa 5 määriteltyä komponenttia Togglable. Lomake ei ole oletusarvoisesti näkyvillä. Klikkaamalla nappia new note lomake aukeaa. Lomakkeen tulee sulkeutua kun uusi blogi luodaan.
* [x] **5.6 blogilistan frontend, step6**
  * Eriytä uuden blogin luomisesta huolehtiva lomake omaan komponenttiinsa (jos et jo ole niin tehnyt), ja siirrä kaikki uuden blogin luomiseen liittyvä tila komponentin vastuulle. Komponentin tulee siis toimia samaan tapaan kuin tämän osan materiaalin komponentin NoteForm.
* [x] **5.7* blogilistan frontend, step7**
  * Lisää yksittäiselle blogille nappi, jonka avulla voi kontrolloida näytetäänkö kaikki blogiin liittyvät tiedot.Klikkaamalla nappia sen täydelliset tiedot aukeavat. Uusi napin klikkaus pienentää näkymän. Napin like ei tässä vaiheessa tarvitse tehdä mitään.
* [x] **5.8*: blogilistan frontend, step8**
  * Toteuta like-painikkeen toiminnallisuus. Like lisätään backendiin blogin yksilöivään urliin tapahtuvalla PUT-pyynnöllä.Koska backendin operaatio korvaa aina koko blogin, joudut lähettämään operaation mukana blogin kaikki kentät.
* [x] **5.9*: blogilistan frontend, step9**
  * Järjestä sovellus näyttämään blogit likejen mukaisessa suuruusjärjestyksessä. Järjestäminen onnistuu taulukon metodilla sort.
* [x] **5.10*: blogilistan frontend, step10**
  * Lisää nappi blogin poistamiselle. Toteuta myös poiston tekevä logiikka. Näytä poistonappi ainoastaan jos kyseessä on kirjautuneen käyttäjän lisäämä blogi.
* [x] **5.11: blogilistan frontend, step11**
  * Määrittele joillekin sovelluksesi komponenteille PropTypet.
* [x] **5.12: blogilistan frontend, step12**
  * Ota projektiin käyttöön ESlint. Määrittele haluamasi kaltainen konfiguraatio. Korjaa kaikki lint-virheet.

\* = vapaaehtoinen tehtävä