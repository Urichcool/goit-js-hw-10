import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import Notiflix from 'notiflix';

const debounce = require('lodash.debounce');
const searchInputEl = document.querySelector('#search-box');
const DEBOUNCE_DELAY = 300;

searchInputEl.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(event) {
  if (searchInputEl.value !== '') {
    const filtredValue = searchInputEl.value.toLowerCase().trim();
  fetchCountries(filtredValue).then
    };
  }


