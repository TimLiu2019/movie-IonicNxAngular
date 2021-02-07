import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DynamicContentOutletComponent } from '../home/dynamic-content-outlet/dynamic-content-outlet.component';
import { DynamicContentRenderUtils } from './dynamic-content-outlet/dynamic-content-render-utils';
import { PopoverController } from '@ionic/angular';
import { MtAppNavComponent } from '../../../../../../libs/ui-kit/mt-web-shared-components/src/lib/mt-app-nav/mt-app-nav.component';
import { StrUtils } from '../../../../../../libs/utils/mt-web-basement/src/utils/string/str.utils';
import { RegistryItem } from '../../../../../../libs/utils/mt-web-basement/src/utils/dynamicLazyLoad/dynamic-content-registry-item';
import { DocumentUtils } from '../../../../../../libs/utils/mt-web-basement/src/utils/document/documentUtils';
import { MtFormRegistryUtil } from './dynamic-content-outlet/dynamic-content-outlet.registry';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  // The dynamic content container that holds our dynamically created components
  @ViewChild('qtMovieContainer', { static: true })
  qtMovieUI: DynamicContentOutletComponent;

  @ViewChild('qtCustomersContainer', { static: true })
  qtCustomersUI: DynamicContentOutletComponent;

  @ViewChild('qtRentalsContainer', { static: true })
  qtRentalsUI: DynamicContentOutletComponent;

  public previousClickedBtn: string;

  // constructor
  constructor(private popoverController: PopoverController) {}

  // ngOnInit
  ngOnInit() {
    // DocumentUtils.setPageMargins(document, 0, 0, 0, 0);
  }

  ngAfterViewInit() {
    this.render('HOME_MOVIE');
    document.getElementById('movieBtn').classList.add('home-page-left-btn-clicked');
  }

  // doBuildHideOrShow
  // elementType - Registry key, i.e. 'HOME_CONTENT'
  protected async doBuildHideOrShow(
    elementType: string,
    registryComponent: RegistryItem,
    dynamicContentOutletComponent: DynamicContentOutletComponent
  ) {
    // Instantiate UI (build if required), and make it active
    if (StrUtils.equals(elementType, registryComponent.elementType) !== 0) {
      dynamicContentOutletComponent.isActiveUI = false;
      return;
    }

    // build if not done yet
    if (dynamicContentOutletComponent.uiIsCreated === false) {
      await DynamicContentRenderUtils.buildDynamicUI(
        dynamicContentOutletComponent,
        registryComponent
      );
    }

    dynamicContentOutletComponent.isActiveUI = true;
  }

  // render
  // Add the dynamic UI
  public async render(elementType: string) {
    // Get the component from the UI registry
    const registryComponent: RegistryItem = MtFormRegistryUtil.getComponentRegistryItemFromElementType(
      elementType
    );
    if (registryComponent == null) {
      console.error(
        'render() - elementType: ' + elementType + ' was not found in registry.'
      );
      return;
    }
    // This handles the creation/hide/show for the main UI areas
    this.doBuildHideOrShow('HOME_MOVIE', registryComponent, this.qtMovieUI);
    this.doBuildHideOrShow(
      'HOME_CUSTOMERS',
      registryComponent,
      this.qtCustomersUI
    );
    this.doBuildHideOrShow(
      'HOME_RENTALS',
      registryComponent,
      this.qtRentalsUI
    );
  }

  // movieBtnClicked
  // Show movie UI
  movieBtnClicked($event: MouseEvent) {
    document
      .getElementById('movieBtn')
      .classList.remove('home-page-left-btn-clicked');
    document
      .getElementById('movieBtn')
      .classList.add('home-page-left-btn-clicked');
    if (this.previousClickedBtn !== undefined) {
      if (localStorage.getItem('clickedLeftMenuBtn') !== 'movieBtn') {
        console.log(localStorage.getItem('clickedLeftMenuBtn'));
        document
          .getElementById(localStorage.getItem('clickedLeftMenuBtn'))
          .classList.remove('home-page-left-btn-clicked');
      }
    }
    this.previousClickedBtn = 'movieBtn';
    localStorage.setItem('clickedLeftMenuBtn', this.previousClickedBtn);
    this.render('HOME_MOVIE');
  }

  // customersBtnClicked
  // Show customers UI
  customersBtnClicked($event: MouseEvent) {
    document
      .getElementById('movieBtn')
      .classList.remove('home-page-left-btn-clicked');
    document
      .getElementById('customersBtn')
      .classList.add('home-page-left-btn-clicked');
    if (this.previousClickedBtn !== undefined) {
      if (localStorage.getItem('clickedLeftMenuBtn') !== 'customersBtn') {
        console.log(localStorage.getItem('clickedLeftMenuBtn'));
        document
          .getElementById(localStorage.getItem('clickedLeftMenuBtn'))
          .classList.remove('home-page-left-btn-clicked');
      }
    }
    this.previousClickedBtn = 'customersBtn';
    localStorage.setItem('clickedLeftMenuBtn', this.previousClickedBtn);
    this.render('HOME_CUSTOMERS');
  }

  // customersBtnClicked
  // Show customers UI
  rentalsBtnClicked($event: MouseEvent) {
    document
      .getElementById('movieBtn')
      .classList.remove('home-page-left-btn-clicked');
    document
      .getElementById('rentalsBtn')
      .classList.add('home-page-left-btn-clicked');
    if (this.previousClickedBtn !== undefined) {
      if (localStorage.getItem('clickedLeftMenuBtn') !== 'rentalsBtn') {
        console.log(localStorage.getItem('clickedLeftMenuBtn'));
        document
          .getElementById(localStorage.getItem('clickedLeftMenuBtn'))
          .classList.remove('home-page-left-btn-clicked');
      }
    }
    this.previousClickedBtn = 'rentalsBtn';
    localStorage.setItem('clickedLeftMenuBtn', this.previousClickedBtn);
    this.render('HOME_RENTALS');
  }
}
