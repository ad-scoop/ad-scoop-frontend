/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { TopMenu } from './top.menu';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TopMenu
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(TopMenu);
    let menu = fixture.debugElement.componentInstance;
    expect(menu).toBeTruthy();
  }));

  it('should render image in a anchor tag', async(() => {
    let fixture = TestBed.createComponent(TopMenu);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').textContent).toContain('link');
  }));
});
