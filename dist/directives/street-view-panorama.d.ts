import { BaseMapDirective } from './base-map-directive';
import { Ng2MapComponent } from '../components/ng2-map.component';
export declare class StreetViewPanorama extends BaseMapDirective {
    selector: any;
    options: any;
    addressControl: any;
    addressControlOptions: any;
    clickToGo: any;
    disableDefaultUI: any;
    disableDoubleClickZoom: any;
    enableCloseButton: any;
    fullscreenControl: any;
    fullscreenControlOptions: any;
    imageDateControl: any;
    linksControl: any;
    motionTracking: any;
    motionTrackingControl: any;
    panControl: any;
    panControlOptions: any;
    pano: any;
    position: any;
    pov: any;
    scrollwheel: any;
    showRoadLabels: any;
    visible: any;
    zoomControl: any;
    zoomControlOptions: any;
    constructor(ng2MapComp: Ng2MapComponent);
    initialize(): void;
    ngOnDestroy(): void;
}
