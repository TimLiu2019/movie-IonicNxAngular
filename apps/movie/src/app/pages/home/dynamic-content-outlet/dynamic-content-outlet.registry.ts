import { RegistryItem } from '../../../../../../../libs/utils/mt-web-basement/src/utils/dynamicLazyLoad/dynamic-content-registry-item';

// FormRegistryUtil
// Utility methods for the DynamicContentOutletRegistry
export class MtFormRegistryUtil {
  // getComponentRegistryItemFromElementType
  public static getComponentRegistryItemFromElementType(
    elementType: string
  ): RegistryItem {
    // tslint:disable-next-line: no-use-before-declare
    for (const item of DynamicContentOutletRegistry) {
      if (item.elementType === elementType) {
        return item;
      }
    }

    // not found
    return null;
  }
}

/**
 * A mapping of Component Name to Component Type
 * that must be updated with each new component
 * that you wish to load dynamically.
 * Users/qitingliu 1/Documents/2021/Project/movie-angular/ionicnx/apps/movie/src/app/pages/home/dynamic-content-outlet/dynamic-components-map.module
 */
export const DynamicContentOutletRegistry: RegistryItem[] = [
  {
    componentName: 'MovieComponent',
    elementType: 'HOME_MOVIE',
    modulePath:
      'apps/movie/src/app/pages/home/dynamic-content-outlet/dynamic-components-map.module',
    moduleName: 'DynamicComponentsMapModule',
  },
  {
    componentName: 'CustomersComponent',
    elementType: 'HOME_CUSTOMERS',
    modulePath:
      'apps/movie/src/app/pages/home/dynamic-content-outlet/dynamic-components-map.module',
    moduleName: 'DynamicComponentsMapModule',
  },

  {
    componentName: 'RentalsComponent',
    elementType: 'HOME_RENTALS',
    modulePath:
      'apps/movie/src/app/pages/home/dynamic-content-outlet/dynamic-components-map.module',
    moduleName: 'DynamicComponentsMapModule',
  },
];
