
import { Component, OnInit } from '@angular/core';
// import gql from 'graphql-tag';
// import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// const GET_BOOKS = gql`
//   {
//     books {
//       title
//       author
//     }
//   }
// `;

export type Book = {
  title: string
};

export type Response = {
  books: [Book];
};

@Component({
  selector: 'screen-graphql',
  templateUrl: './screen-graphql.component.html',
  styleUrls: ['./screen-graphql.component.scss']
})
export class ScreenGraphqlComponent implements OnInit {
  books: Observable<[Book]>;

  constructor(
    // private apollo: Apollo
  ) { }

  ngOnInit() {
    // this.books = this.apollo
    //   .watchQuery<Response>({
    //     query: GET_BOOKS,
    //   })
    //   .valueChanges.pipe(map(result => result.data && result.data.books));
  }
}

