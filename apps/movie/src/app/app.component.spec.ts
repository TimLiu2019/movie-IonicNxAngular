import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
	
import {} from 'jasmine';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'movie'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('movie');
  // });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to movie!'
    );
  });
});
// import { Platform } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';

// import { AppComponent } from './app.component';

// describe('AppComponent', () => {

//     let statusBarSpy, splashScreenSpy, platformReadySpy, platformSpy;

//     beforeEach(async(() => {
//         statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
//         splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);
//         platformReadySpy = Promise.resolve();
//         platformSpy = jasmine.createSpyObj('Platform', null /*{ ready: platformReadySpy }*/);

//         TestBed.configureTestingModule({
//             declarations: [AppComponent],
//             schemas: [CUSTOM_ELEMENTS_SCHEMA],
//             providers: [
//                 { provide: StatusBar, useValue: statusBarSpy },
//                 { provide: SplashScreen, useValue: splashScreenSpy },
//                 { provide: Platform, useValue: platformSpy },
//             ],
//         }).compileComponents();
//     }));

//     it('should create the app', () => {
//         const fixture = TestBed.createComponent(AppComponent);
//         const app = fixture.debugElement.componentInstance;
//         expect(app).toBeTruthy();
//     });

//     it('should initialize the app', async () => {
//         TestBed.createComponent(AppComponent);
//         expect(platformSpy.ready).toHaveBeenCalled();
//         await platformReadySpy;
//         expect(statusBarSpy.styleDefault).toHaveBeenCalled();
//         expect(splashScreenSpy.hide).toHaveBeenCalled();
//     });

//     // TODO: add more tests!

// });

