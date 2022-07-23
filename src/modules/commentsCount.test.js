/**
 * @jest-environment jsdom
 */

import { countComments } from './modal.js';

describe('Add test for comments', () => {
  test('Add test for comments', () => {
    document.body.innerHTML += '<h2 id="count"> Comments  </h2>';
    const counter = document.body.querySelector('#count');
    countComments([]);
    expect(counter.innerHTML).toBe(' Comments  ');
  });
  test('Add test for comments', () => {
    const comments = [{ movieName: 'item1', id: 1 }, { movieName: 'item2', id: 2 }];
    document.body.innerHTML += '<h2 id="count"> Comments  </h2>';
    const counter = document.body.querySelector('#count');
    countComments(comments);
    expect(counter.innerHTML).toBe(`Comments ( <span class="fig">${comments.length}</span> )`);
  });
});