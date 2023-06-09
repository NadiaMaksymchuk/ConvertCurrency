import { Component, OnInit } from '@angular/core';
import { CurrencyEnum } from 'src/app/models/enums/CurrencyEnum';
import { CountriesTzLangProviderService } from 'src/app/services/countries-tz-lang-provider.service';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.sass']
})
export class ConversionComponent implements OnInit {
  inputSumma: number = 0;
  outputSumma:number = 0;

  convertToOneValutaInput: number = 0;
  convertToOneValutaOutput: number = 0;

  inputCurrency: string = 'UAH';
  outputCurrency: string = 'USD';

  constructor(
    private countriesService: CountriesTzLangProviderService,
    private currencyService: CurrencyService
    ) { }

  ngOnInit(): void {
    this.seedCurrency(this.inputCurrency, this.outputCurrency);
  }

  calculateSumma(event: any) {
    if(this.validateNumericInput(event)) {
        this.seedCurrency(this.inputCurrency, this.outputCurrency);
    }
  }

  calculateSummaFromOutPut(event: any) {
    if(this.validateNumericInput(event)) {
        this.seedCurrencyOutput(this.inputCurrency, this.outputCurrency);
    }
  }

  change() {
    this.inputSumma = this.outputSumma;

    let mediumValuta = this.inputCurrency;

    this.inputCurrency = this.outputCurrency;
    this.outputCurrency = mediumValuta;

    this.seedCurrency(this.inputCurrency, this.outputCurrency);
  }

  private validateNumericInput(event: KeyboardEvent) {
    const allowedKeys = ['Backspace', 'Delete', 'Tab', 'Enter'];
    const inputChar = String.fromCharCode(event.keyCode);

    const numericRegex = /^[0-9\u0000]*$/;

    if (!numericRegex.test(inputChar)  && !allowedKeys.includes(event.key)) {
      event.preventDefault();
      return false;
    }

    return true;
  }


  getFlag(county: string): string | undefined {
    return this.countriesService.getUserCountryFlag(county);
  }

  private seedCurrency(input: string, output: string) {

    this.currencyService.getLatestCurrency(input)
        .subscribe(response =>
          {
            this.convertToOneValutaInput = response.conversion_rates[output];

            this.outputSumma = this.currencyService.calculateCurrencyTotalSumma(this.convertToOneValutaInput, this.inputSumma);
          });

    this.currencyService.getLatestCurrency(output)
        .subscribe(response =>
          {
            this.convertToOneValutaOutput = response.conversion_rates[input];
          });
  }

  private seedCurrencyOutput(input: string, output: string) {
    this.currencyService.getLatestCurrency(input)
        .subscribe(response =>
          {
            this.convertToOneValutaInput = response.conversion_rates[output];
          });

    this.currencyService.getLatestCurrency(output)
        .subscribe(response =>
          {
            this.convertToOneValutaOutput = response.conversion_rates[input];

            this.inputSumma = this.currencyService.calculateCurrencyTotalSumma(this.convertToOneValutaOutput, this.outputSumma);
          });
  }

}
