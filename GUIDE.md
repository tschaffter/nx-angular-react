# Guide

## Initial setup

Create an empty nx workspace

```console
git config --global commit.gpgsign false  // Because of a bug with nx
npx --ignore-existing create-nx-workspace nx-angular-react --preset=empty
git config --global commit.gpgsign true
```

Add Angular app

```console
npm i -D @nrwl/angular
nx g @nrwl/angular:app angularapp
```

Add React app

```console
npm i -D @nrwl/react
nx g @nrwl/web:webpack5
nx g @nrwl/react:app reactapp
```

Start apps

- `nx serve angularapp`
- `nx serve reactapp`

Apps are available on http://localhost:4200.

## Dependency graph

```console
nx dep-graph
```

The UI is available on http://localhost:4211.

### References

- [Building Angular and React Applications Together With Nx]

## Note on `nx` and `ng` commands

```console
$ ng --version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 12.1.1
Node: 14.18.0
Package Manager: npm 6.14.15
OS: linux x64

Angular:
...

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1201.1 (cli-only)
@angular-devkit/core         12.1.1 (cli-only)
@angular-devkit/schematics   12.1.1 (cli-only)
@schematics/angular          12.1.1 (cli-only)
```

When running `ng` in `nx` workspace:

```console
$ ng --version
12.9.0
```

```console
nx --version
12.9.0
```

<!-- Links -->

[Building Angular and React Applications Together With Nx]: https://nx.dev/l/a/examples/react-and-angular
