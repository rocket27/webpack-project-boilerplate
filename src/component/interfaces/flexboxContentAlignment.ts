import { IFlexboxBaseAlignment } from './flexboxBaseAlignment';
import { IFlexboxExtendedConfigValue } from './flexboxExtendedConfigValue';

export interface IFlexboxContentAlignment extends IFlexboxBaseAlignment {
    startSpaceBetween: IFlexboxExtendedConfigValue;
    startSpaceAround: IFlexboxExtendedConfigValue;
    spaceBetween: IFlexboxExtendedConfigValue;
    spaceBetweenSpaceAround: IFlexboxExtendedConfigValue;
    centerSpaceBetween: IFlexboxExtendedConfigValue;
    centerSpaceAround: IFlexboxExtendedConfigValue;
    stretchSpaceBetween: IFlexboxExtendedConfigValue;
    stretchSpaceAround: IFlexboxExtendedConfigValue;
    spaceAroundSpaceBetween: IFlexboxExtendedConfigValue;
    spaceAround: IFlexboxExtendedConfigValue;
    endSpaceBetween: IFlexboxExtendedConfigValue;
    endSpaceAround: IFlexboxExtendedConfigValue;
}
