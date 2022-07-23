/**
 * @jest-environment jsdom
 */

import { countMovies } from './api.js';

test('test api js', () => {
  document.body.innerHTML = '<h1 class="count-movies"></h1>';
  countMovies([1, 2, 3, 4, 5, 6, 7, 59, 89, 20]);
  expect(document.querySelector('.count-movies').innerHTML).toBe('10');
});

test('test api js', () => {
  document.body.innerHTML = '<h1 class="count-movies"></h1>';
  countMovies([]);
  expect(document.querySelector('.count-movies').innerHTML).toBe('');
});