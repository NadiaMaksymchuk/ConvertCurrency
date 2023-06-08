import { Injectable } from '@angular/core';
import countriesLib from 'iso-3166-1';

@Injectable({
  providedIn: 'root'
})
export class CountriesTzLangProviderService {
    public getUserCountryFlag(country: string): string | undefined {
        return `https://flagicons.lipis.dev/flags/4x3/${country.toLowerCase()}.svg`;
    }
}
