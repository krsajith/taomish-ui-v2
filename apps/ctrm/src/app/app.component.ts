import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DefaultStoreService, StoreServive, JsonService, Page } from '@taomish-ui-v2/common-ui';
import { firstValueFrom } from 'rxjs';
import storeConfigs from './core/store-config-list';

@Component({
  selector: 'taomish-ui-v2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[{ provide: storeConfigs, useValue: storeConfigs},{provide:StoreServive} ]
})
export class AppComponent implements OnInit{
  formGroup!: FormGroup

  setFormGroup(formGroup: FormGroup) {
    this.formGroup = formGroup;
  }

  page!: Page;

  cols = [
    {
      name: 'id',
      headerName: "Id",
      class: "fixed-left"
    },
    {
      name: 'first',
      headerName: "First"
    },
    {
      name: 'last',
      headerName: "Last"
    },
    {
      name: 'email',
      headerName: "Email"
    },
    {
      name: 'company',
      headerName: "Company"
    },
    {
      name: 'created_at',
      headerName: "Created Time",
      class: "fixed-right2"
    },
    {
      name: 'country',
      headerName: "Country",
      class: "fixed-right"
    }
  ]

  data = [
    {
      "id": 1,
      "email": "isidro_von@hotmail.com",
      "first": "Torrey",
      "last": "Veum",
      "company": "Hilll, Mayert and Wolf",
      "created_at": "2014-12-25T04:06:27.981Z",
      "country": "Switzerland"
    },
    {
      "id": 2,
      "email": "frederique19@gmail.com",
      "first": "Micah",
      "last": "Sanford",
      "company": "Stokes-Reichel",
      "created_at": "2014-07-03T16:08:17.044Z",
      "country": "Democratic People's Republic of Korea"
    },
    {
      "id": 3,
      "email": "fredy54@gmail.com",
      "first": "Hollis",
      "last": "Swift",
      "company": "Rodriguez, Cartwright and Kuhn",
      "created_at": "2014-08-18T06:15:16.731Z",
      "country": "Tunisia"
    },
    {
      "id": 4,
      "email": "braxton29@hotmail.com",
      "first": "Perry",
      "last": "Leffler",
      "company": "Sipes, Feeney and Hansen",
      "created_at": "2014-07-10T11:31:40.235Z",
      "country": "Chad"
    },
    {
      "id": 5,
      "email": "turner59@gmail.com",
      "first": "Janelle",
      "last": "Hagenes",
      "company": "Lesch and Daughters",
      "created_at": "2014-04-21T15:05:43.229Z",
      "country": "Swaziland"
    },
    {
      "id": 6,
      "email": "halie47@yahoo.com",
      "first": "Charity",
      "last": "Bradtke",
      "company": "Gorczany-Monahan",
      "created_at": "2014-09-21T21:59:18.892Z",
      "country": "Lebanon"
    },
    {
      "id": 7,
      "email": "loren_yundt@gmail.com",
      "first": "Dejah",
      "last": "Kshlerin",
      "company": "Williamson-Hickle",
      "created_at": "2014-11-11T12:20:53.154Z",
      "country": "Egypt"
    },
    {
      "id": 8,
      "email": "kenton_macejkovic80@hotmail.com",
      "first": "Ellen",
      "last": "Schaefer",
      "company": "Tillman-Harris",
      "created_at": "2014-07-23T02:00:28.649Z",
      "country": "Israel"
    },
    {
      "id": 9,
      "email": "pascale5@yahoo.com",
      "first": "Sven",
      "last": "Funk",
      "company": "Dare Group",
      "created_at": "2014-04-11T12:43:28.977Z",
      "country": "Macao"
    },
    {
      "id": 10,
      "email": "frank34@yahoo.com",
      "first": "Ryleigh",
      "last": "Cole",
      "company": "Zieme and Daughters",
      "created_at": "2014-10-18T05:50:28.626Z",
      "country": "Congo"
    },
    {
      "id": 11,
      "email": "harry65@hotmail.com",
      "first": "Cooper",
      "last": "Grimes",
      "company": "Brakus-Rath",
      "created_at": "2014-04-29T06:41:20.214Z",
      "country": "Reunion"
    },
    {
      "id": 12,
      "email": "kiana.schowalter@gmail.com",
      "first": "Esteban",
      "last": "Homenick",
      "company": "Bode-Botsford",
      "created_at": "2014-12-29T18:46:35.269Z",
      "country": "Guadeloupe"
    },
    {
      "id": 13,
      "email": "josh_batz60@gmail.com",
      "first": "Lucinda",
      "last": "Waters",
      "company": "Ratke LLC",
      "created_at": "2015-03-13T12:15:50.844Z",
      "country": "Lebanon"
    },
    {
      "id": 14,
      "email": "zula36@hotmail.com",
      "first": "Jarvis",
      "last": "Grimes",
      "company": "Durgan, Sporer and Bogan",
      "created_at": "2014-04-23T23:56:11.268Z",
      "country": "Ghana"
    },
    {
      "id": 15,
      "email": "romaine21@gmail.com",
      "first": "Jordon",
      "last": "Turcotte",
      "company": "Green-Haag",
      "created_at": "2014-07-13T00:07:36.299Z",
      "country": "Serbia"
    },
    {
      "id": 16,
      "email": "abdul3@hotmail.com",
      "first": "Marques",
      "last": "Bins",
      "company": "Hoeger, Frami and Kihn",
      "created_at": "2014-04-10T14:07:26.141Z",
      "country": "Sudan"
    },
    {
      "id": 17,
      "email": "van39@hotmail.com",
      "first": "Edgar",
      "last": "Jaskolski",
      "company": "Waelchi-Schuppe",
      "created_at": "2014-11-18T22:42:23.788Z",
      "country": "Wallis and Futuna"
    },
    {
      "id": 18,
      "email": "emie_corkery82@yahoo.com",
      "first": "Adell",
      "last": "Rodriguez",
      "company": "Tillman, Bailey and Weimann",
      "created_at": "2014-07-19T07:19:38.388Z",
      "country": "Sierra Leone"
    },
    {
      "id": 19,
      "email": "alexis62@hotmail.com",
      "first": "Madonna",
      "last": "Luettgen",
      "company": "Heathcote-Schiller",
      "created_at": "2014-08-25T04:29:45.139Z",
      "country": "Namibia"
    },
    {
      "id": 20,
      "email": "lucius_hills53@yahoo.com",
      "first": "Andre",
      "last": "Huel",
      "company": "Stroman Inc",
      "created_at": "2014-08-22T22:56:27.222Z",
      "country": "Georgia"
    },
    {
      "id": 21,
      "email": "jeanette.leannon29@hotmail.com",
      "first": "Darrin",
      "last": "Larson",
      "company": "Ernser-Oberbrunner",
      "created_at": "2014-09-01T21:22:39.559Z",
      "country": "Lebanon"
    },
    {
      "id": 22,
      "email": "concepcion_kiehn@hotmail.com",
      "first": "Johann",
      "last": "Hintz",
      "company": "Paucek and Sons",
      "created_at": "2014-12-29T18:29:33.150Z",
      "country": "Congo"
    },
    {
      "id": 23,
      "email": "blaze84@yahoo.com",
      "first": "Cruz",
      "last": "Harber",
      "company": "O'Connell and Sons",
      "created_at": "2014-10-23T09:57:26.941Z",
      "country": "Lesotho"
    },
    {
      "id": 24,
      "email": "vanessa27@hotmail.com",
      "first": "Melba",
      "last": "Stiedemann",
      "company": "Rath Group",
      "created_at": "2014-09-26T10:55:49.642Z",
      "country": "Andorra"
    },
    {
      "id": 25,
      "email": "gay_quigley98@gmail.com",
      "first": "Bonita",
      "last": "Hickle",
      "company": "Ledner, Jacobs and Schuster",
      "created_at": "2015-03-03T13:32:26.071Z",
      "country": "Congo"
    },
    {
      "id": 26,
      "email": "mireille.conroy96@hotmail.com",
      "first": "Kali",
      "last": "Bailey",
      "company": "Bailey, McDermott and Kuphal",
      "created_at": "2014-12-13T01:39:35.925Z",
      "country": "Tuvalu"
    },
    {
      "id": 27,
      "email": "candido.cormier89@gmail.com",
      "first": "Kristy",
      "last": "Quigley",
      "company": "Brown, Carter and Keeling",
      "created_at": "2014-06-01T05:27:07.870Z",
      "country": "Burkina Faso"
    },
    {
      "id": 28,
      "email": "lola_altenwerth82@yahoo.com",
      "first": "Leanna",
      "last": "Dach",
      "company": "Fisher and Sons",
      "created_at": "2014-09-19T09:39:20.201Z",
      "country": "Bahamas"
    },
    {
      "id": 29,
      "email": "willie36@hotmail.com",
      "first": "Hannah",
      "last": "O'Keefe",
      "company": "Monahan Group",
      "created_at": "2014-12-02T23:43:36.414Z",
      "country": "Guam"
    }
  ];


  constructor(private jsonService:JsonService,private defaultStoreService:DefaultStoreService){}

  async ngOnInit(): Promise<void> {
    this.page = await firstValueFrom(this.jsonService.get<Page>(`./assets/application/pages/limits.json`));
  }

  save() {
    console.log(this.formGroup.value)
  }
}
