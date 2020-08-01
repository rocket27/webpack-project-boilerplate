import { IFlexboxBaseAlignment } from './flexboxBaseAlignment';
import { IFlexboxExtendedConfigValue } from './flexboxExtendedConfigValue';

export interface IFlexboxItemsAlignment extends IFlexboxBaseAlignment {
    startBaseline: IFlexboxExtendedConfigValue;
    spaceBetweenBaseline: IFlexboxExtendedConfigValue;
    centerBaseline: IFlexboxExtendedConfigValue;
    stretchBaseline: IFlexboxExtendedConfigValue;
    spaceAroundBaseline: IFlexboxExtendedConfigValue;
    endBaseline: IFlexboxExtendedConfigValue;
}
