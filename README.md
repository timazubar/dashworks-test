# Hi there!

This is my implementation of test assignment for dashworks project.
It is done with usage of following technologies according to requirements: 

 - Angular 11
 - 'ag-grid' library for data grid implementation
 - Youtube Data API v3 for providing data

## Architectural decisions
All tasks are performed according to the requirements in test assignment tasks 1-4.
The following points are done that expected in 'Code' part:
-   GridComponent uses data from GridDataService via DI with @Self decorator, and service is provided only in this place, because it is the main component that contains ag-grid which requires the data from API.
- mapToRowData function that is located in separate file in utils folder is a custom rxjs pipe. 

And taking into account rxjs pipeable operator definition from docs: 
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
