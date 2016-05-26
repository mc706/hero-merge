import {
    it,
    expect,
    beforeEachProviders,
    inject,
    async,
    describe,
} from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/compiler/testing';
import { ROUTER_FAKE_PROVIDERS } from '@angular/router/testing';
import { HTTP_PROVIDERS } from '@angular/http';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { LoggerService } from './blocks/logger.service';
import {HeroService} from './services/heroService';

@Component({
    selector: 'hm-test',
    template: '<div><hm-main-app></hm-main-app></div>',
    directives: [AppComponent]
})
class TestComponent {
}

describe('AppComponent', () => {
    beforeEachProviders(() => [
        LoggerService,
        HeroService,
        HTTP_PROVIDERS,
        ROUTER_FAKE_PROVIDERS
    ]);

    it('should have brand Angular 2 Starter', async(inject([TestComponentBuilder],
        (tsb: TestComponentBuilder) => {
            tsb.createAsync(TestComponent).then((fixture) => {
                fixture.detectChanges();
                let compiled = fixture.debugElement.nativeElement;
                expect(compiled).toBeDefined();
                expect(compiled.querySelector('a.navbar-brand'))
                    .toHaveText('Hero Merge');
            });
        })));
});
