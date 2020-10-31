# GraphQL

### Tehtävät

Tehtävissä toteutetaan yksinkertaisen kirjaston GraphQL:ää tarjoava backend. Ota sovelluksesi lähtökohdaksi tämä tiedosto. Muista npm init ja riippuvuuksien asentaminen!

Huomaa, että koodin käynnistäminen aiheuttaa alussa virheen, sillä skeeman määrittely on puutteellinen.

### GraphQL-palvelin
* [x] **8.1: kirjojen ja kirjailijoiden määrä**

  Toteuta kyselyt ```bookCount``` ja ```authorCount``` jotka palauttavat kirjojen ja kirjailijoiden lukumäärän.

  Kyselyn

  ```graphql
  query {
    bookCount
    authorCount
  }
  ```

  ```json
  {
    "data": {
      "bookCount": 7,
      "authorCount": 5
    }
  }
  ```

* [x] **8.2: kaikki kirjat ja kirjailijat**

  Toteuta kysely ```allBooks```, joka palauttaa kaikki kirjat.

  Seuraava kysely siis pitäisi pystyä tekemään

  ```graphql
  query {
    allBooks { 
      title 
      author
      published 
      genres
    }
  }
  ```

* [x] **8.3 kaikki kirjailijat**

  Toteuta kysely ```allAuthors``` joka palauttaa kaikki kirjailijat. Kyselyn vastauksessa kirjailijoilla tulee myös olla kenttä ```bookCount```, joka kertoo kirjailijan tekemien kirjojen määrän.

  Esim. kyselyn

  ```graphql
  query {
    allAuthors {
      name
      bookCount
    }
  }
  ```
  vastauksen tulisi näyttää seuraavalta

  ```json
  {
    "data": {
      "allAuthors": [
        {
          "name": "Robert Martin",
          "bookCount": 2
        },
        {
          "name": "Martin Fowler",
          "bookCount": 1
        },
        {
          "name": "Fyodor Dostoevsky",
          "bookCount": 2
        },
        {
          "name": "Joshua Kerievsky",
          "bookCount": 1
        },
        {
          "name": "Sandi Metz",
          "bookCount": 1
        }
      ]
    }
  }
  ```
  * [x] **8.4: kirjailijan kirjat**

    Laajenna kyselyä ```allBooks``` siten, että sille voi antaa optionaalisen parametrin author, joka rajoittaa kirjalistan niihin, joiden kirjoittaja on parametrina annettu kirjailija.

    Esim. kyselyn

    ```graphql
    query {
      allBooks(author: "Robert Martin") {
        title
      }
    }
    ```

    tulisi palauttaa
    ```json
    {
      "data": {
        "allBooks": [
          {
            "title": "Clean Code"
          },
          {
            "title": "Agile software development"
          }
        ]
      }
    }
    ```

  * [x] **8.5: genren kirjat**

    Laajenna kyselyä ```allBooks``` siten, että sille voi antaa optionaalisen parametrin genre, joka rajoittaa kirjalistan niihin, joiden genrejen joukossa on parametrina annettu genre.

    Esim. kyselyn

    ```graphql
    query {
      allBooks(genre: "refactoring") {
        title
        author
      }
    }
    ```

    tulisi palauttaa

    ```json
    {
      "data": {
        "allBooks": [
          {
            "title": "Clean Code",
            "author": "Robert Martin"
          },
          {
            "title": "Refactoring, edition 2",
            "author": "Martin Fowler"
          },
          {
            "title": "Refactoring to patterns",
            "author": "Joshua Kerievsky"
          },
          {
            "title": "Practical Object-Oriented Design, An Agile Primer Using Ruby",
            "author": "Sandi Metz"
          }
        ]
      }
    }
    ```

    Kyselyn pitää toimia myös siinä tapauksessa, että se saa molemmat optionaaliset parametrit:

    ```graphql
    query {
      allBooks(author: "Robert Martin", genre: "refactoring") {
        title
        author
      }
    }
    ```

    * [x] **8.6: Kirjan lisäys**

    
    Toteuta mutaatio ```addBook```, jota voi käyttää seuraavasti

    ```graphql
    mutation {
      addBook(
        title: "NoSQL Distilled",
        author: "Martin Fowler",
        published: 2012,
        genres: ["database", "nosql"]
      ) {
        title,
        author
      }
    }
    ```

    Mutaatio toimii myös niissä tilanteissa, joissa kirjoittaja ei ole ennestään palvelimen tiedossa:

    ```graphql
    mutation {
      addBook(
        title: "Pimeyden tango",
        author: "Reijo Mäki",
        published: 1997,
        genres: ["crime"]
      ) {
        title,
        author
      }
    }
    ```

    Jos näin on, lisätään uusi kirjailija järjestelmään. Kirjailijan syntymävuodesta ei ole tässä vaiheessa tietoa, eli kysely

    ```graphql
    query {
      allAuthors {
        name
        born
        bookCount
      }
    }
    ```

    palauttaa

    ```json
    {
      "data": {
        "allAuthors": [
          // ...
          {
            "name": "Reijo Mäki",
            "born": null,
            "bookCount": 1
          }
        ]
      }
    }
    ```

    * [x] **Kirjailijan syntymävuoden päivitys**

    Toteuta mutaatio ```editAuthor```, jonka avulla on mahdollista asettaa kirjailijalle syntymävuosi. Mutaatiota käytetään seuraavasti

    ```graphql
    mutation {
      editAuthor(name: "Reijo Mäki", setBornTo: 1958) {
        name
        born
      }
    }
    ```

    Jos kirjailija löytyy, palauttaa operaatio editoidun kirjailijan:

    ```json
    {
      "data": {
        "editAuthor": {
          "name": "Reijo Mäki",
          "born": 1958
        }
      }
    }
    ```

    Olemattoman kirjailijan syntymävuoden editointiin reagoidaan palauttamalla null:

    ```json
    {
      "data": {
        "editAuthor": null
      }
    }
    ```

  ### React ja GraphQL
