import { Area } from '../model/area';
import { Demografi } from '../model/demografi';
import { Gender } from '../model/gender';
import { Industry } from '../model/industry';
import { Organisation } from '../model/organisation';
import { PlaceSelection } from '../model/placeselection';
import { PlaceType } from '../model/placetype';
import { WebSite } from '../model/site';
import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { BannerSize } from '../model/bannersize';
import { BannerSpace } from '../model/bannerspace';
import { WebSiteSearchCriteria } from '../model/websitesearchcriteria';

@Injectable()
export class SiteService {

  private baseUrl = environment.websiteUrl;

  countries = [
    'Afghanistan',
    'Albanien',
    'Algeriet',
    'Andorra',
    'Angola',
    'Antigua & Barbuda',
    'Argentina',
    'Armenien',
    'Aserbajdsjan',
    'Australien',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belgien',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnien-Herzegovina',
    'Botswana',
    'Brasilien',
    'Brunei',
    'Bulgarien',
    'Burkina Faso',
    'Burma (Myanmar)',
    'Burundi',
    'Cambodja',
    'Cameroun',
    'Canada',
    'Centralafrika',
    'Chad',
    'Chile',
    'Colombia',
    'Comorerne',
    'Congo',
    'Costa Rica',
    'Cuba',
    'Cypern',
    'Danmark',
    'Darussalem',
    'Demokratiske rep. Congo',
    'Djibouti',
    'Dominica',
    'Dominikanske Republik',
    'Ecuador',
    'Egypten',
    'El Salvador',
    'Elfenbens-kysten',
    'Eritrea',
    'Estland',
    'Etiopien',
    'Fiji',
    'Filippinerne',
    'Finland',
    'Forenede Arab. Emirater',
    'Frankrig',
    'Gabon',
    'Gambia',
    'Georgien',
    'Ghana',
    'Grenada',
    'Grenadinerne',
    'Grækenland',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hviderusland (Belarus)',
    'Indien',
    'Indonesien',
    'Irak',
    'Iran',
    'Irland',
    'Island',
    'Israel',
    'Italien',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kapverdiske Øer',
    'Kasakhstan',
    'Kenya',
    'Kina',
    'Kirgisistan',
    'Kiribati',
    'Kroatien',
    'Kuwait',
    'Laos',
    'Lesotho',
    'Letland',
    'Libanon',
    'Liberia',
    'Libyen',
    'Liechtenstein',
    'Litauen',
    'Luxembourg',
    'Madagaskar',
    'Makedonien (FYROM)',
    'Malawi',
    'Malaysia',
    'Maldiverne',
    'Mali',
    'Malta',
    'Marokko',
    'Marshall-øerne',
    'Mauretanien',
    'Mauritius',
    'Mexico',
    'Mikronesien',
    'Moldova',
    'Monaco',
    'Mongoliet',
    'Mozambique',
    'Namibia',
    'Nauru',
    'Nederlandene',
    'Nepal',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Nordkorea',
    'Norge',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestina',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Polen',
    'Portugal',
    'Qatar',
    'Rumænien',
    'Rusland',
    'Rwanda',
    'Salomonøerne',
    'Samoa',
    'San Marino',
    'Sao Tomé & Principe',
    'Saudi Arabien',
    'Schweiz',
    'Senegal',
    'Serbien og Montenegro',
    'Seychellerne',
    'Sierra Leone',
    'Singapore',
    'Slovakiet',
    'Slovenien',
    'Somalia',
    'Spanien',
    'Sri Lanka',
    'St. Kitts-Nevis',
    'St. Lucia',
    'St. Vincent',
    'Storbritannien',
    'Sudan',
    'Surinam',
    'Sverige',
    'Swaziland',
    'Sydafrika',
    'Sydkorea',
    'Syrien',
    'Tadjikistan',
    'Taiwan',
    'Tanzania',
    'Thailand',
    'Tjekkiet',
    'Togo',
    'Tonga',
    'Trinidad & Tobago',
    'Tunesien',
    'Turkmenistan',
    'Tuvalu',
    'Tyrkiet',
    'Tyskland',
    'Uganda',
    'Ukraine',
    'Ungarn',
    'Uruguay',
    'USA',
    'Usbekistan',
    'Vanuatu',
    'Vatikanet',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe',
    'Ækvatorial Guinea',
    'Østrig',
    'Østtimor'
  ];

  industries: Industry[] = [
    Industry.create('Bygge og anlæg', [
      'Anlægsarbejde',
      'Opførelse og nedrivning af byggeri',
      'Færdiggørelse af byggeri'
    ]),
    Industry.create('Handel', [
      'Butikker',
      'Engros'
    ]),
    Industry.create('Industri', [
      'Elektronik',
      'Energi og råstoffer',
      'Installation og reparation af maskiner og udstyr',
      'Kemi og medicin',
      'Metal og maskiner',
      'Plast, glas og beton',
      'Tekstil og papir',
      'Transportmidler',
      'Træ og møbler'
    ]),
    Industry.create('Kontor og kommunikation', [
      'Film, presse og bøger',
      'IT og telekommunikation',
      'Kontor'
    ]),
    Industry.create('Landbrug og fødevarer', [
      'Landbrug, skovbrug og fiskeri',
      'Slagterier',
      'Nærings- og nydelsesmidler'
    ]),
    Industry.create('Offentlig service', [
      'Politi, beredskab og fængsler',
      'Religiøse institutioner og begravelsesvæsen',
      'Vand, kloak og affald'
    ]),
    Industry.create('Privat service', [
      'Frisører og anden personlig pleje',
      'Hotel og camping',
      'Kultur og sport',
      'Rengøring',
      'Restauranter og barer'
    ]),
    Industry.create('Transport', [
      'Transport af gods',
      'Transport af passagerer'
    ]),
    Industry.create('Social og sundhed', [
      'Daginstitutioner',
      'Døgninstitutioner og hjemmepleje',
      'Hospitaler',
      'Læger, tandlæger og dyrlæger'
    ]),
    Industry.create('Undervisning og forskning', [
      'Undervisning',
      'Universiteter og forskning'
    ])
  ];

  bannerSizes = [
    new BannerSize(468, 60),
    new BannerSize(728, 90),
    new BannerSize(336, 280),
    new BannerSize(300, 250),
    new BannerSize(250, 250),
    new BannerSize(160, 600),
    new BannerSize(120, 600),
    new BannerSize(120, 240),
    new BannerSize(240, 400),
    new BannerSize(234, 60),
    new BannerSize(180, 150),
    new BannerSize(125, 125),
    new BannerSize(120, 90),
    new BannerSize(120, 60),
    new BannerSize(88, 31),
    new BannerSize(0, 0, true)
  ];

  bannerLocations: PlaceSelection[] = [
    new PlaceSelection(PlaceType.Top, 'Top'),
    new PlaceSelection(PlaceType.Bottom, 'Bund'),
    new PlaceSelection(PlaceType.Right, 'Højre'),
    new PlaceSelection(PlaceType.Left, 'Venstre'),
    new PlaceSelection(PlaceType.Define, 'Definer')
  ];

  constructor(private http: Http, private authService: AuthenticationService) { }

  public getCountries(): string[] {
    return this.countries;
  }

  public sites(): Observable<WebSite[]> {
    return this.http
      .post(this.baseUrl, this.getHeadersWithToken())
      .catch(response => {
        throw new Error('Fejl ved hentning af website');
      });
  }

  public serche(model: WebSiteSearchCriteria): Observable<WebSite[]> {
//    if (model.ids) {
//      return  Observable.of(this.webSites.filter(e => model.ids.find(i => i === e.id) !== undefined));
//    }
//    return Observable.of(this.webSites.slice());
    return Observable.of(null);
  }

  public add(webSite: WebSite): Observable<boolean> {
    return this.http
      .post(this.baseUrl + '/create', webSite, this.getHeadersWithToken())
      .catch(response => {
        throw new Error('Fejl ved oprettese af website');
      });
  }

  public edit(webSite: WebSite): Observable<boolean> {
    return this.http
      .post(this.baseUrl + '/update', webSite, this.getHeadersWithToken())
      .map(response => true)
      .catch(response => {
        throw new Error('Fejl ved ændring af website');
      });
  }

  private getHeadersWithToken(): RequestOptions {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    headers.append('Accept', 'application/json');
    headers.append('token', this.authService.getToken());
    return new RequestOptions({ headers: headers });
  }


}
