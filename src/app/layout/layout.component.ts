import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private router : Router,
    public translate : TranslateService) { }

  ngOnInit(): void {
    if(!localStorage.getItem('email')){
      this.router.navigate(['/register'])
    }
  }

  changeLang(lang : string){
    this.translate.use(lang)
  }

}
