# Hi there!

This is my implementation of test assignment for dashworks project.
It is done with usage of following technologies: 

 - Angular 11
 - 'ag-grid' library for data grid implementation
 - Youtube Data API v3 for providing data
 - RxJS for reactivity 
 - NgRx &darr;

NgRx is used for following cases:
  - Store - for state management
  - Effects - for loading and piping data from service
  - ReactiveComponent - for getting data from rxjs observables via 'ngrxPush' pipe (like 'async' pipe, but with more coverage)
  

## Architectural decisions
All tasks are performed according to the requirements in test assignment tasks 1-4.
The following points are done that expected in 'Code' part:
- Data is provided by NgRx Store, and being piped inside NgRX effects
- I removed the '@Self' decorator, because all data lies within the store and service can not be provided to the NgRx Effect. If store would not be implemented, Self decorator would be placed well in GridComponent providers
- Cell Renderer components that extend 'ICellRendererAngularComp' Ag-Grid interface, are covered by unit tests. They can be considered as pure components, because everything that they should do is rendering custom content in grid cells, and they do not contain any specific logic 
- mapToRowData function that is located in separate file in utils folder is a custom rxjs pipe. 

- And taking into account rxjs pipeable operator definition from docs: 
> A Pipeable Operator is a function that takes an Observable as its
> input and returns another Observable. It is a pure operation: the
> previous Observable stays unmodified.
 
, the expectation of pure function is also met.
 

## Data Source (API/Mock)

With usage of Youtube Data API, the error of exceeding requests quota may appear.

If it appears, go to the GridDataService, and replace `this.http.get(this.apiUrl)` to `this.http.get(this.mockUrl)`.

I have added `mockData.json` to 'assets' folder with mock copy of data from API to have ability to test application of something goes wrong with the API.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
