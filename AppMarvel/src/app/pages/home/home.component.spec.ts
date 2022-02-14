import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { MarvelService } from 'src/app/services/marvel.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { ComponentsModule } from './components/components.module';
import { ResultMarvelI, RootObjectMarvelI } from 'src/app/models/marvel.interface';
import { dataObj, dataTest } from '../data-test';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  //Pipes
  let pipe: FilterPipe;

  // Test service
  let service: MarvelService;
  let httpClientSpy: { get: jasmine.Spy };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, PipesModule, ComponentsModule],
      declarations: [HomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new MarvelService(httpClientSpy as any);
  });

  beforeEach(() => {
    pipe = new FilterPipe();
  });




  it('Should create home component.', () => {
    expect(component).toBeTruthy();
  });


  it(`Should have as page: number = 0`, () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    expect(app.page).toEqual(0);
  });

  it(`Should have as searchText: string = ""`, () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    expect(app.searchText).toEqual("");
  });

  it(`Should have as dataCharacters igual Array`, () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const data: ResultMarvelI[] = dataTest;
    expect(app.dataCharacters).toEqual([]);
  });


  it(`Should get dataCharacters Array of characters Objet`, () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    app.dataCharacters = dataTest;
    expect(app.dataCharacters.length).toEqual(2);
  });



  // TEST HTTP MARVEL SERVICE

  it('Should create service MarvelService', () => {
    expect(service).toBeTruthy();
  });


  it('API should return data object type RootObjectMarvelI model.', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(dataObj));
    service.getCharacters().subscribe(result => {
      const data: RootObjectMarvelI = dataObj;
      expect(result).toEqual(data);
      done();
    });
  });


  // TEST CUSTOM PIPES

  it('Should create FilterPipe.', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "dataCharacters" to "dataCharacters"', () => {

    const data: ResultMarvelI[] = dataTest;
    expect(pipe.transform(data, 0, '')).toEqual(dataTest);
  });


  it('transforms "dataCharacters" should return data length igual 2', () => {
    const data: ResultMarvelI[] = dataTest;
    expect(pipe.transform(data, 0, '').length).toEqual(2);
  });





});
