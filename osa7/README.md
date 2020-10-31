# React router, custom-hookit, tyylikirjastot ja webpack

### Tehtävät

### React-router
* [x] **7.1: routed anecdotes, step1**

  Lisää sovellukseen React Router siten, että Menu-komponentissa olevia linkkejä klikkailemalla saadaan säädeltyä näytettävää näkymää.

  Sovelluksen juuressa, eli polulla / näytetään anekdoottien lista.

  Pohjalla oleva Footer-komponentti tulee näyttää aina.

  Uuden anekdootin luominen tapahtuu esim. polulla create.

* [x] **7.2: routed anecdotes, step2**

  Toteuta sovellukseen yksittäisen anekdootin tiedot näyttävä näkymä. Yksittäisen anekdootin sivulle navigoidaan klikkaamalla anekdootin nimeä.

* [x] **7.3: routed anecdotes, step3**

  Luomislomakkeen oletusarvoinen toiminnallisuus on melko hämmentävä, sillä kun lomakkeen avulla luodaan uusi muistiinpano, mitään ei näytä tapahtuvan.

  Paranna toiminnallisuutta siten, että luomisen jälkeen siirrytään automaattisesti kaikkien anekdoottien näkymään ja käyttäjälle näytetään 10 sekunnin ajan onnistuneesta lisäyksestä kertova notifikaatio.

  ### Custom-hookit
* [x] **7.4: anekdoottisovellus ja hookit step1**

  Jatketaan luvun react-router tehtävien sovelluksen parissa.

  Yksinkertaista sovelluksen uuden anekdootin luomiseen käytettävän lomakkeen käyttöä äsken määritellyn useField custom-hookin avulla.

  Talleta hook tiedostoon /src/hooks/index.js.

* [x] **7.5: anekdoottisovellus ja hookit step2**

  Lisää lomakkeeseen nappi, joka mahdollistaa syötekenttien tyhjentämisen. Laajenna hookia siten, että se tarjoaa operaation reset kentän tyhjentämiseen.

  Lisäyksen jälkeen konsoliin saattaa ilmestyä ikävä varoitus. Ei välitetä virheestä vielä tässä tehtävässä.

* [x] **7.6: anekdoottisovellus ja hookit step3**

  Jos ratkaisusi ei aiheuttanut warningia, ei sinun tarvitse tehdä tässä tehtävässä mitään.

  Muussa tapauksessa tee sovellukseen korjaus, joka poistaa varoituksen ```Invalid value for prop reset' on <input> tag ```

  Keksi tähän tehtävään spread-syntaksia edelleen käyttävä helppokäyttöinen ratkaisu ongelman kiertämiseen.

* [x] **7.7\*: country hook**

  Palataan hetkeksi tehtäväsarjan 2.12-14 tunnelmiin.

  Ota pohjaksi repositoriossa https://github.com/fullstack-hy2020/country-hook oleva koodi.

  Sovelluksen avulla on mahdollista hakea maiden tietoja https://restcountries.eu/ rajapinnasta. Jos maa löytyy, näytetään maan perustiedot. Jos maata ei löydy, kerrotaan siitä käyttäjälle. Sovellus on muuten valmiiksi toteutettu, mutta joudut tässä tehtävässä toteuttamaan custom hookin useCountry, jonka avulla haet hookin parametrina saaman nimisen maan tiedot.

  Maan tietojan hakeminen kannattaa hoitaa apin endpointin full name avulla, hookin sisällä olevassa useEffect-hookissa.

  Huomaa, että tässä tehtävässä on oleellista hyödyntää useEffectin toisena parametrina olevaa taulukkoa sen kontrolloimiseen milloin efektifunktio kannattaa suorittaa.
  
* [x] **7.8\*: ultimate hooks**

  Aiempien osien materiaalissa kehitetyn muistiinpanosovelluksen palvelimen kanssa keskusteleva koodi näyttää seuraavalta: *kuva koodista*. 

  Huomaamme, että koodi ei itseasiassa välitä ollenkaan siitä että se käsittelee nimenomaan muistiinpanoja. Muuttujan baseUrl arvoa lukuunottamatta käytännössä sama koodi voi hoitaa blogisovelluksen frontendin ja backendin kommunikointia.

  Eristä kommunikoiva koodi hookiksi useResource. Riittää, että kaikkien olioiden haku ja uuden olion luominen onnistuvat.

  Voit tehdä tehtävän repositoriosta https://github.com/fullstack-hy2020/ultimate-hooks löytyvään projektiin. Projektin komponentti App on seuraavassa: *kuva koodista*

  Custom-hook useResource siis palauttaa (tilahookien tapaan) kaksialkioisen taulukon. Taulukon ensimmäinen alkio sisältää resurssin kaikki oliot ja toisena alkiona on olio, jonka kautta resurssia on mahdollista manipuloida, mm lisäämällä uusia olioita.

  Jos toteutit hookin oikein, mahdollistaa sovellus blogien ja puhelinnumeroiden yhtäaikaisen käsittelyn (käynnistä backend porttiin 3005 komennolla npm run server)

* [x] **7.9: redux, step1**

  Siirry käyttämään React-komponenttien tilan sijaan Reduxia sovelluksen tilan hallintaan.

  Muuta tässä tehtävässä notifikaatio käyttämään Reduxia.

* [x] **7.10: redux, step2**

  Tämä ja seuraava kaksi osaa ovat kohtuullisen työläitä, mutta erittäin opettavaisia.

  Kirjautumisen ja uuden blogin luomisen lomakkeiden tilaa voit halutessasi hallita edelleen Reactin tilan avulla.

  Siirrä blogien tietojen talletus Reduxiin. Tässä tehtävässä riittää, että sovellus näyttää olemassa olevat blogit ja, että uuden blogin luominen onnistuu.

* [x] **7.11: redux, step3**

  Laajenna ratkaisua siten, että blogien "liketys" ja poisto toimivat.

* [x] **7.12: redux, step4**

  Siirrä myös kirjautuneen käyttäjän tietojen talletus Reduxiin.

* [x] **7.13: käyttäjien näkymä**

  Tee sovellukseen näkymä, joka näyttää kaikkiin käyttäjiin liittyvät perustietot

* [x] **7.14: yksittäisen käyttäjän näkymä**

  Tee sovellukseen yksittäisen käyttäjän näkymä, jolta selviää mm. käyttäjän lisäämät blogit. Näkymään päästään klikkaamalla nimeä kaikkien käyttäjien näkymästä. Huom: törmäät tätä tehtävää tehdessäsi lähes varmasti seuraavaan virheeseen ```TypeError: Cannot read property 'name' of undefined```

  Vika ilmenee jos uudelleenlataat sivun ollessasi yksittäisen käyttäjän sivulla.

  Vian syynä on se, että jos mennään suoraan jonkin käyttäjän sivulle, eivät käyttäjien tiedot ole vielä ehtineet palvelimelta React-sovellukseen. Ongelman voi kiertää ehdollisella renderöinnillä:

  ```javascript
    const User = () => {
    const user = ...
    if (!user) {
      return null
    }

    return (
      <div>
        // ...
      </div>
    )
  }
  ```

* [x] **7.15: blogin näkymä**

  Toteuta sovellukseen oma näkymä yksittäisille blogeille. Näkymään päästään klikkaamalla blogin nimeä kaikkien blogien näkymästä

  Tämän tehtävän jälkeen tehtävässä 5.6 toteutettua toiminnallisuutta ei enää tarvita, eli kaikkien blogien näkymässä yksittäisten blogien detaljien ei enää tarvitse avautua klikattaessa.

* [x] **7.16: navigointi**

  Tee sovellukseen navigaatiomenu

* [x] **7.17: kommentit, step1**

  Tee sovellukseen mahdollisuus blogien kommentointiin. Kommentit ovat anonyymejä, eli ne eivät liity järjestelmän käyttäjiin.

  Tässä tehtävässä riittää, että frontend osaa näyttää blogilla olevat backendin kautta lisätyt kommentit. Sopiva rajapinta kommentin luomiseen on osoitteeseen api/blogs/:id/comments tapahtuva HTTP POST -pyyntö.

* [x] **7.18: kommentit, step2**

  Laajenna sovellusta siten, että kommentointi onnistuu frontendista käsin.

* [x] **7.19: tyylit, step1**

  Tee sovelluksesi ulkoasusta tyylikkäämpi jotain kurssilla esiteltyä tapaa käyttäen

* [x] **7.20: tyylit, step2**

  Jos käytät tyylien lisäämiseen noin tunnin aikaa, merkkaa myös tämä tehtävä tehdyksi.

* [x] **7.21: Kurssipalaute**

  Anna kurssille palautetta moodlessa.


\* = vapaaehtoinen tehtävä
