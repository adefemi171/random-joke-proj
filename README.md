# Random Jokes



First I cloned this ![Boilerplate](https://github.com/t0nyandre/type-graphql-boilerplate)

# App Details
.......
................................................
................................

# Proposed Stack

TypeScript


# Top-level directory layout

    📦RandomJokes
        📦docs
            ┣ 📜Fullstack_Engineer_Test_ReactNode.pdf
        📦src
            ┣ 📦models
                ┗ 📜Category.ts
                ┗ 📜Joke.ts
            ┣ 📦resolvers
                ┗ 📜category.resolver.ts
                ┗ 📜joke.resolver.ts
            ┣ 📦service
                ┗ 📜category.service.ts
                ┗ 📜joke.service.ts
            ┣ 📜config.ts
            ┣ 📜createSchema.ts
            ┣ 📜index.ts
        ┣ 📜.env.example
        ┣ 📜.gitignore
        ┣ 📜.prettierrc
        ┣ 📜package.json
        ┣ 📜package-lock.json
        ┣ 📜README.md
        ┣ 📜tsconfig.json
        ┣ 📜tslint.json
        ┣ 📜yarn.lock

## The task can be found [here](https://github.com/adefemi171/random-joke-proj/blob/master/Docs/Fullstack_Engineer_Test_ReactNode.pdf)

# How to setup project and run locally

### Clone the repository 

```
git clone https://github.com/adefemi171/random-joke-proj.gi
```
### Checking Out
The App is built on the ``` master ``` branch you will need to checkout to the app branch using:

```
git checkout master
```

### Install all dependencies

Using npm

```
npm install
```

### Start the application with

Using npm

```
npm start
```
In your browser, navigate to

```
http://localhost:9001/
```

The Client will be displayed and will be expecting a query, a sample query is:
```
query{
  getRandomJoke(
    category:"movie"
  ){
    categories
    value
  }
}

```

More categories can be found ![here](https://api.chucknorris.io/jokes/categories) and also more random jokes can be found ![here](https://api.chucknorris.io/jokes/random)