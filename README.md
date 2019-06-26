# Quiz app using react

## Run following command when installing and setting up project

> install all dependencies into the node_modules/ directory

```
npm install
```

> build app into dist folder

```
npm run build
```

## Run following command to run and working on the project

> to watch file changes (need to run always when working on project)

```
npm run dev
```

> start nodemon server (on seperate terminal)

```
npm run start
```

# Jest test coverage (for version > 23.6)

> For npm:
> You must put -- before passing the --coverage argument of jest

```
npm test -- --coverage
```

if you try invoking the --coverage directly without the -- it won't work

> For yarn:
> You can pass the --coverage argument of jest directly

```
yarn test --coverage
```
