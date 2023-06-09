import { Component, OnInit } from '@angular/core';
import { CurrencyEnum } from 'src/app/models/enums/CurrencyEnum';
import { CountriesTzLangProviderService } from 'src/app/services/countries-tz-lang-provider.service';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  public USDCurrency: number = 0;
  public EURCurrency: number = 0;

  private readonly UAHString = 'UAH';

  constructor(
    private currencyService: CurrencyService,
    private countriesService: CountriesTzLangProviderService
  ) {}

  ngOnInit(): void {
    this.seedCurrency();
  }

  private seedCurrency() {
    this.currencyService
      .getLatestCurrency(CurrencyEnum.EUR)
      .subscribe((response) => {
        this.EURCurrency = response.conversion_rates[this.UAHString];
      });

    this.currencyService
      .getLatestCurrency(CurrencyEnum.USD)
      .subscribe((response) => {
        this.USDCurrency = response.conversion_rates[this.UAHString];
      });
  }

  getFlag(county: string): string | undefined {
    return this.countriesService.getUserCountryFlag(county);
  }
}
