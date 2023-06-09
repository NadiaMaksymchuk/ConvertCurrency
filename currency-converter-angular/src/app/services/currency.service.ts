import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { CurrencyEnum } from '../models/enums/CurrencyEnum';
import { IResponseData } from '../models/IResponseData';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private httpService: HttpService) { }
  private readonly latestRequest = 'latest/';

  public getLatestCurrency(currency: CurrencyEnum | string) {
    return this.httpService.get<IResponseData>(this.buildLatestUrl(currency));
  }

  private buildLatestUrl(currency: string): string {
    return this.latestRequest + currency;
  }

  public calculateCurrencyTotalSumma(rate: number, summa: number) {
    return rate * summa;
  }
}
