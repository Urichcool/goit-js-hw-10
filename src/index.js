import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import Notiflix from 'notiflix';
const debounce = require('lodash.debounce');

const searchInputEl = document.querySelector('#search-box');
const countryListEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

searchInputEl.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(event) {
  if (searchInputEl.value !== '') {
    const filtredValue = searchInputEl.value.toLowerCase().trim();
    fetchCountries(filtredValue).then(countries => {
      renderCountriesList(countries);
    });
    };
  }



function renderCountriesList(countries) {
  const markup = countries
    .map(country => {
      return `<li>
        <svg width="10px" height="10px" xmlns="${country.flags.svg}">
         <p>${country.name}</p>
        </li>`;
    })
    .join('');
  countryListEl.innerHTML = markup;
}