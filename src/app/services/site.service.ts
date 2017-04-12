import { Area } from '../model/area';
import { Demografi } from '../model/demografi';
import { Gender } from '../model/gender';
import { Industry } from '../model/industry';
import { Organisation } from '../model/organisation';
import { PlaceSelection } from '../model/placeselection';
import { PlaceType } from '../model/placetype';
import { WebSite } from '../model/site';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SiteService {

  private webSites: WebSite[] = [
    new WebSite(
      'Gundmann',
      'https://www.gundmann.dk',
      true,
      new Demografi([Gender.Unisex]),
      new Area('2720', 'Denmark'),
      new Organisation('Sunhed')
    ),
    new WebSite(
      'adscoop',
      'https://www.ad-scoop.dk',
      true,
      new Demografi([Gender.Man]),
      new Area('2720', 'Denmark'),
      new Organisation('Forening')),
    new WebSite(
      'Hansen',
      'https://www.hansen.dk',
      false,
      new Demografi([Gender.Woman]),
      new Area('2720', 'Denmark'),
      new Organisation('Frisør')),
    new WebSite(
      'VIF',
      'https://www.vif.dk',
      true,
      new Demografi([Gender.Unisex]),
      new Area('2720', 'Denmark'),
      new Organisation('Forening')),
    new WebSite(
      'Amager',
      'https://www.amager.dk',
      true,
      new Demografi([Gender.Unisex]),
      new Area('2720', 'Denmark'),
      new Organisation('Købmand'))
  ];

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
    [468,  60],
    [728,  90],
    [336, 280],
    [300, 250],
    [250, 250],
    [160, 600],
    [120, 600],
    [120, 240],
    [240, 400],
    [234,  60],
    [180, 150],
    [125, 125],
    [120,  90],
    [120,  60],
    [ 88,  31],
    [  0,   0]
  ];

  bannerLocations: PlaceSelection[] = [
    new PlaceSelection(PlaceType.Top,    'Top'),
    new PlaceSelection(PlaceType.Bottom, 'Bund'),
    new PlaceSelection(PlaceType.Right,  'Højre'),
    new PlaceSelection(PlaceType.Left,   'Venstre'),
    new PlaceSelection(PlaceType.Define, 'Definer')
  ];

  constructor() { }

  public getCountries(): string[] {
    return this.countries;
  }


  public sites(): Observable<WebSite[]> {
    return Observable.of(this.webSites);
  }

  public add(webSite: WebSite): Observable<boolean> {
    this.webSites.push(webSite);
    return Observable.of(true);
  }

  public edit(webSite: WebSite): Observable<boolean> {
    return Observable.of(true);
  }

}
