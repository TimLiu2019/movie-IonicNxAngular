import { DynamicComponentsMapModule } from './dynamic-components-map.module';
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
 */
export const DynamicContentOutletRegistry: RegistryItem[] = [
  {
    componentName: 'MovieComponent',
    elementType: 'MOVIE',
    modulePath:
      'apps/movie/src/app/pages/home/dynamic-content-outlet/dynamic-components-map.module',
    moduleName: 'DynamicComponentsMapModule',
  },
];
