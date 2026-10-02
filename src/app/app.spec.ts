import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  it('renders the title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const span = (fixture.nativeElement as HTMLElement).querySelector('.content span');
    expect(span?.textContent).toContain('angular-docker-nginx app is running!');
  });

  it('shows the command for the selected card', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.terminal pre')?.textContent).toBe('ng generate component xyz');

    const buildCard = [...el.querySelectorAll<HTMLElement>('.card-small')].find((card) =>
      card.textContent?.includes('Build for Production'),
    );
    buildCard?.click();
    await fixture.whenStable();
    expect(el.querySelector('.terminal pre')?.textContent).toBe('ng build');
  });
});
