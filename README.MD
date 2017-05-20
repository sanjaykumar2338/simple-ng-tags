# simple-ng-tags

##[DEMO](https://plnkr.co/edit/4zFhtmlZThEebq6NdXGN?p=preview)

## Installation

To install this library, run:

```bash
$ npm install simple-ng-tags --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install simple-ng-tags --save
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// Import your library
import { SimpleNgTagsModule } from 'simple-ng-tags';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

    // Specify your library as an import
    SimpleNgTagsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<simple-ng-tags [(ngModel)]="tags"></simple-ng-tags>
```
```xml
<!-- app.component.ts -->
...
export class AppComponent {
  tags: any[] = ['tag 1', 'tag 2', 'tag 3'];

...
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Akis Volanis](mailto:c.volanis@gmail.com)
