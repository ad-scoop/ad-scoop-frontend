/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { UrlSafePipe } from './urlsafe.pipe';
import { SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

class DomSanitizerMock extends DomSanitizer {
    sanitize(context: SecurityContext, value: any): string { return ''; }
    bypassSecurityTrustHtml(value: string): SafeHtml {return null;}
    bypassSecurityTrustStyle(value: string): SafeStyle {return null;}
    bypassSecurityTrustScript(value: string): SafeScript {return null;}
    bypassSecurityTrustUrl(value: string): SafeUrl {return null;}
    bypassSecurityTrustResourceUrl(value: string): SafeResourceUrl {return null;}
}

describe('UrlsafePipe', () => {
  it('create an instance', () => {
    let pipe = new UrlSafePipe(new DomSanitizerMock());
    expect(pipe).toBeTruthy();
  });
});
