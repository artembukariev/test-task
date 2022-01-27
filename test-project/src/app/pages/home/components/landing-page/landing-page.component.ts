import {Component, OnDestroy, OnInit} from '@angular/core';
import {HomePageService} from "../../../services/home-page.service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {AuthService} from "../../../../core/auth/services/auth.service";


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, OnDestroy {
  weatherInfo: any = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  userName: string;
  constructor(private homeService: HomePageService, private auth: AuthService) {
  }

  ngOnInit(): void {
    this.userName = this.auth.userName
    this.homeService.getWeather(38,36 ).pipe(takeUntil(this.destroy$)).subscribe(res => {
      res.daily.map((dailyWeatherInfo: any) => {
       this.weatherInfo.push(dailyWeatherInfo);
      })
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
