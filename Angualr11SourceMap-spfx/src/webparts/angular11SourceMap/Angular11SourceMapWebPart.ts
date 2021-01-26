import { Version } from '@microsoft/sp-core-library';
import {
    BaseClientSideWebPart,
    IPropertyPaneConfiguration,
    PropertyPaneTextField
  } from '@microsoft/sp-webpart-base';

import { escape } from '@microsoft/sp-lodash-subset';

import * as strings from 'Angular11SourceMapWebPartStrings';

/** Include Angular Elements JS and Style */
import 'angualr11-source-map/dist/Angualr11SourceMap/main';
import 'angualr11-source-map/dist/Angualr11SourceMap/polyfills';
require('angualr11-source-map/dist/Angualr11SourceMap/styles.css');

export interface IAngular11SourceMapWebPartProps {
  description: string;
}

export default class Angular11SourceMapWebPart extends BaseClientSideWebPart<IAngular11SourceMapWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `<app-angular11-source-map-web-part description="${ this.properties.description }"></app-angular11-source-map-web-part>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
