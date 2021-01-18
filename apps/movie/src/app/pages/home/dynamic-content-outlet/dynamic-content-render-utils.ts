import {DynamicContentOutletComponent} from "./dynamic-content-outlet.component";
import { RegistryItem } from '../../../../../../../libs/utils/mt-web-basement/src/utils/dynamicLazyLoad/dynamic-content-registry-item';

// DynamicContentRenderUtils
// Utilities to implement dynamic form creation
export class DynamicContentRenderUtils {

    //////////////////////////////////////////////////////////////////////////////
    // Impl

    // buildDynamicUI
    // Add each siblings to the UI
    // The parentContainer is used to embed children into a parent component
    public static async buildDynamicUI(mtFormContentOutlet: DynamicContentOutletComponent,
                                       registryComponent: RegistryItem) {

        // not found
        if (registryComponent === null) {
            console.error('buildDynamicUI() - registryComponent is null');
            return;
        }

        console.log('Adding UI Element: ' + registryComponent.elementType + ' mapped to ' + registryComponent.componentName);
        await mtFormContentOutlet.addComponent(registryComponent.componentName, mtFormContentOutlet.rootContainer, registryComponent);
        mtFormContentOutlet.uiIsCreated = true;
    }
}
