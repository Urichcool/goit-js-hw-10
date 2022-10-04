import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import Notiflix from 'notiflix';

const debounce = require('lodash.debounce');
const searchInputEl = document.querySelector('#search-box');
const DEBOUNCE_DELAY = 300;

searchInputEl.addEventListener('input', debounce(() => {
  if (searchInputEl.value !== "") {
   const trimedValue = searchInputEl.value.trim();
    fetchCountries();
  };

}, DEBOUNCE_DELAY));
