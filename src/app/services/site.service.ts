import { Area } from '../model/area';
import { Demografi } from '../model/demografi';
import { Industry } from '../model/industry';
import { Organisation } from '../model/organisation';
import { PlaceSelection } from '../model/placeselection';
import { WebSite } from '../model/site';
import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { BannerSize } from '../model/bannersize';
import { BannerSpace } from '../model/bannerspace';
import { Country } from '../model/country';
import { WebSiteSearchCriteria } from '../model/websitesearchcriteria';

@Injectable()
export class SiteService {

  private baseUrl = environment.websiteUrl;

  countries = [
    new Country('Afghanistan', []),
    new Country('Albanien', []),
    new Country('Algeriet', []),
    new Country('Andorra', []),
    new Country('Angola', []),
    new Country('Antigua & Barbuda', []),
    new Country('Argentina', []),
    new Country('Armenien', []),
    new Country('Aserbajdsjan', []),
    new Country('Australien', []),
    new Country('Bahamas', []),
    new Country('Bahrain', []),
    new Country('Bangladesh', []),
    new Country('Barbados', []),
    new Country('Belgien', []),
    new Country('Belize', []),
    new Country('Benin', []),
    new Country('Bhutan', []),
    new Country('Bolivia', []),
    new Country('Bosnien-Herzegovina', []),
    new Country('Botswana', []),
    new Country('Brasilien', []),
    new Country('Brunei', []),
    new Country('Bulgarien', []),
    new Country('Burkina Faso', []),
    new Country('Burma (Myanmar)', []),
    new Country('Burundi', []),
    new Country('Cambodja', []),
    new Country('Cameroun', []),
    new Country('Canada', []),
    new Country('Centralafrika', []),
    new Country('Chad', []),
    new Country('Chile', []),
    new Country('Colombia', []),
    new Country('Comorerne', []),
    new Country('Congo', []),
    new Country('Costa Rica', []),
    new Country('Cuba', []),
    new Country('Cypern', []),
    new Country('Danmark', ['Hovedstaden', 'Midtjylland', 'Nordjylland', 'Syddanmark', 'Sjælland']),
    new Country('Darussalem', []),
    new Country('Demokratiske rep. Congo', []),
    new Country('Djibouti', []),
    new Country('Dominica', []),
    new Country('Dominikanske Republik', []),
    new Country('Ecuador', []),
    new Country('Egypten', []),
    new Country('El Salvador', []),
    new Country('Elfenbens-kysten', []),
    new Country('Eritrea', []),
    new Country('Estland', []),
    new Country('Etiopien', []),
    new Country('Fiji', []),
    new Country('Filippinerne', []),
    new Country('Finland', []),
    new Country('Forenede Arab. Emirater', []),
    new Country('Frankrig', []),
    new Country('Gabon', []),
    new Country('Gambia', []),
    new Country('Georgien', []),
    new Country('Ghana', []),
    new Country('Grenada', []),
    new Country('Grenadinerne', []),
    new Country('Grækenland', []),
    new Country('Guatemala', []),
    new Country('Guinea', []),
    new Country('Guinea-Bissau', []),
    new Country('Guyana', []),
    new Country('Haiti', []),
    new Country('Honduras', []),
    new Country('Hviderusland (Belarus)', []),
    new Country('Indien', []),
    new Country('Indonesien', []),
    new Country('Irak', []),
    new Country('Iran', []),
    new Country('Irland', []),
    new Country('Island', []),
    new Country('Israel', []),
    new Country('Italien', []),
    new Country('Jamaica', []),
    new Country('Japan', []),
    new Country('Jordan', []),
    new Country('Kapverdiske Øer', []),
    new Country('Kasakhstan', []),
    new Country('Kenya', []),
    new Country('Kina', []),
    new Country('Kirgisistan', []),
    new Country('Kiribati', []),
    new Country('Kroatien', []),
    new Country('Kuwait', []),
    new Country('Laos', []),
    new Country('Lesotho', []),
    new Country('Letland', []),
    new Country('Libanon', []),
    new Country('Liberia', []),
    new Country('Libyen', []),
    new Country('Liechtenstein', []),
    new Country('Litauen', []),
    new Country('Luxembourg', []),
    new Country('Madagaskar', []),
    new Country('Makedonien (FYROM)', []),
    new Country('Malawi', []),
    new Country('Malaysia', []),
    new Country('Maldiverne', []),
    new Country('Mali', []),
    new Country('Malta', []),
    new Country('Marokko', []),
    new Country('Marshall-øerne', []),
    new Country('Mauretanien', []),
    new Country('Mauritius', []),
    new Country('Mexico', []),
    new Country('Mikronesien', []),
    new Country('Moldova', []),
    new Country('Monaco', []),
    new Country('Mongoliet', []),
    new Country('Mozambique', []),
    new Country('Namibia', []),
    new Country('Nauru', []),
    new Country('Nederlandene', []),
    new Country('Nepal', []),
    new Country('New Zealand', []),
    new Country('Nicaragua', []),
    new Country('Niger', []),
    new Country('Nigeria', []),
    new Country('Nordkorea', []),
    new Country('Norge', []),
    new Country('Oman', []),
    new Country('Pakistan', []),
    new Country('Palau', []),
    new Country('Palestina', []),
    new Country('Panama', []),
    new Country('Papua New Guinea', []),
    new Country('Paraguay', []),
    new Country('Peru', []),
    new Country('Polen', []),
    new Country('Portugal', []),
    new Country('Qatar', []),
    new Country('Rumænien', []),
    new Country('Rusland', []),
    new Country('Rwanda', []),
    new Country('Salomonøerne', []),
    new Country('Samoa', []),
    new Country('San Marino', []),
    new Country('Sao Tomé & Principe', []),
    new Country('Saudi Arabien', []),
    new Country('Schweiz', []),
    new Country('Senegal', []),
    new Country('Serbien og Montenegro', []),
    new Country('Seychellerne', []),
    new Country('Sierra Leone', []),
    new Country('Singapore', []),
    new Country('Slovakiet', []),
    new Country('Slovenien', []),
    new Country('Somalia', []),
    new Country('Spanien', []),
    new Country('Sri Lanka', []),
    new Country('St. Kitts-Nevis', []),
    new Country('St. Lucia', []),
    new Country('St. Vincent', []),
    new Country('Storbritannien', []),
    new Country('Sudan', []),
    new Country('Surinam', []),
    new Country('Sverige', []),
    new Country('Swaziland', []),
    new Country('Sydafrika', []),
    new Country('Sydkorea', []),
    new Country('Syrien', []),
    new Country('Tadjikistan', []),
    new Country('Taiwan', []),
    new Country('Tanzania', []),
    new Country('Thailand', []),
    new Country('Tjekkiet', []),
    new Country('Togo', []),
    new Country('Tonga', []),
    new Country('Trinidad & Tobago', []),
    new Country('Tunesien', []),
    new Country('Turkmenistan', []),
    new Country('Tuvalu', []),
    new Country('Tyrkiet', []),
    new Country('Tyskland', []),
    new Country('Uganda', []),
    new Country('Ukraine', []),
    new Country('Ungarn', []),
    new Country('Uruguay', []),
    new Country('USA', []),
    new Country('Usbekistan', []),
    new Country('Vanuatu', []),
    new Country('Vatikanet', []),
    new Country('Venezuela', []),
    new Country('Vietnam', []),
    new Country('Yemen', []),
    new Country('Zambia', []),
    new Country('Zimbabwe', []),
    new Country('Ækvatorial Guinea', []),
    new Country('Østrig', []),
    new Country('Østtimor', [])
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
    new BannerSize(728, 90),
    new BannerSize(468, 60),
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
    new PlaceSelection('Top', 'Top'),
    new PlaceSelection('Bottom', 'Bund'),
    new PlaceSelection('Right', 'Højre'),
    new PlaceSelection('Left', 'Venstre'),
    new PlaceSelection('Define', 'Definer')
  ];

  constructor(private http: Http, private authService: AuthenticationService) { }

  public getCountries(): Country[] {
    return this.countries;
  }

  public sites(): Observable<WebSite[]> {
    return this.http
      .get(this.baseUrl, this.getHeadersWithToken())
      .map((resp: Response) => resp.json())
      .catch(response => {
        throw new Error('Fejl ved hentning af website');
      });
  }

  public remove(webSite: WebSite): Observable<boolean> {
    return this.http
      .delete(this.baseUrl + '/remove/' + webSite.id, this.getHeadersWithToken())
      .catch(response => {
        throw new Error('Fejl ved slette af website');
      });
  }

  public sercheByIds(webSitesIds: number[]): Observable<WebSite[]> {
    const result: WebSite[] = [];
    webSitesIds.forEach(id => {
      this.http
        .get(this.baseUrl + '/' + id, this.getHeadersWithToken())
        .forEach((resp: Response) => result.push(resp.json()))
        .catch(error => {
          console.error('Fejl ved søgning af website: ' + error);
          return [];
        });
    });
    return Observable.of(result);
  }

  public serche(model: WebSiteSearchCriteria): Observable<WebSite[]> {
    return this.http
      .get(this.baseUrl + '/' + model.extractUrl(), this.getHeadersWithToken())
      .map((resp: Response) => resp.json())
      .catch(error => {
        console.error('Fejl ved søgning af website: ' + error);
        return [];
      });
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
      .put(this.baseUrl + '/update', webSite, this.getHeadersWithToken())
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
