import {
  AfterViewInit,
  Component,
  ComponentRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DynamicContentOutletRegistry } from './dynamic-content-outlet.registry';
import { MtFormComponentBase } from '../../../../../../../libs/feature/lazy/mt-web-mt-forms/src/components/mt.form.angular.base.component';
import { RegistryItem } from '../../../../../../../libs/utils/mt-web-basement/src/utils/dynamicLazyLoad/dynamic-content-registry-item';
import { DynamicContentOutletService } from '../../../../../../../libs/utils/mt-web-basement/src/utils/dynamicLazyLoad/dynamic-content-outlet.service';

// DynamicContentOutletComponent
// Define the ng-container that will hold the dynamically created
//   components.
@Component({
  selector: 'app-dynamic-content-outlet',
  templateUrl: './dynamic-content-outlet.component.html',
  styleUrls: ['./dynamic-content-outlet.component.scss'],
})
export class DynamicContentOutletComponent
  implements OnInit, AfterViewInit, OnDestroy, OnChanges {
  ///////////////////////////////////////////////////////////////////////
  // HTML element access
  @ViewChild('rootContainer', { static: false, read: ViewContainerRef })
  rootContainer: ViewContainerRef = null;

  ///////////////////////////////////////////////////////////////////////
  // External property access
  @Input() componentName = '';

  ///////////////////////////////////////////////////////////////////////
  // Vars

  // Used to toggle [hidden] in the html template
  private _isActiveUI = false;
  public styleDisplay = 'none';
  public uiIsCreated = false;

  ///////////////////////////////////////////////////////////////////////
  // Impl

  // constructor
  constructor(private dynamicContentService: DynamicContentOutletService) {}

  // OnInit
  ngOnInit() {}

  // AfterViewInit
  ngAfterViewInit() {
    console.log(
      'DynamicContentOutletComponent::ngAfterViewInit has insert: ' +
        this.rootContainer.hasOwnProperty('insert')
    );
  }

  // ngOnChanges
  // Handles auto-create when the 'componentName' property is added
  // to the html directly.
  // i.e. <app-dynamic-content-outlet [componentName]="someComponent"></app-dynamic-content-outlet>
  async ngOnChanges() {
    if (this.componentName != null && this.componentName.length > 0) {
      await this.renderSingleComponent();
    }
  }

  ngOnDestroy() {
    this.destroyComponents();
  }

  // renderSingleComponent
  // Delete any current UI and create the component
  private async renderSingleComponent() {
    // kill the current container views
    // TODO: Handle previously created interfaces (cache when previously created)
    this.destroyComponents();

    // Add default
    this.doAddComponent(this.componentName, this.rootContainer, null);
  }

  // addComponent
  public addComponent(
    componentName: string,
    container: ViewContainerRef,
    uiDescription: RegistryItem
  ) {
    console.log('addComponent: ' + componentName);
    return this.doAddComponent(componentName, container, uiDescription);
  }

  // doAddComponent
  private async doAddComponent(
    componentName: string,
    container: ViewContainerRef,
    uiDescription: RegistryItem
  ) {
    // Build the component, wait for completion, then get the MtFormComponentBase instance
    const component: ComponentRef<any> = await this.dynamicContentService.loadComponent(
      componentName,
      DynamicContentOutletRegistry
    );

    // Fill the required properties
    const elementInstance: MtFormComponentBase = (<any>component.instance);
    elementInstance.uiDescription = uiDescription;

    // and insert it
    container.insert(component.hostView);

    // debug
    console.log('renderComponent - Length: ' + container.length);

    // if this is a parent container, return the container to add children too
    if (elementInstance.container != null) {
      return elementInstance.container;
    }

    // otherwise, just pass back the sibling container
    return container;
  }

  // destroyComponents
  // Remove all components in the current container
  private destroyComponents() {
    // safety
    if (this.rootContainer == null) {
      return;
    }

    // traverse in reverse order to not lose index ordering
    for (let i = this.rootContainer.length - 1; i > -1; --i) {
      this.rootContainer.remove(i);
    }
  }

  // setStyleDisplay
  protected setStyleDisplay() {
    if (this.isActiveUI) {
      this.styleDisplay = 'block';
      return;
    }
    this.styleDisplay = 'none';
  }

  ///////////////////////////////////////////////////////////////////
  // Getters / Setters

  public get isActiveUI(): boolean {
    return this._isActiveUI;
  }

  public set isActiveUI(value: boolean) {
    this._isActiveUI = value;
    this.setStyleDisplay();
  }
}
