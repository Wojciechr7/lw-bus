import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {
    LoadingIndicator,
    Mode,
    OptionsCommon
} from '@nstudio/nativescript-loading-indicator';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    indicator = new LoadingIndicator();
    options: OptionsCommon = {
        message: 'Loading...',
        details: 'Additional detail note!',
        progress: 0.65,
        margin: 10,
        dimBackground: true,
        color: '#4B9ED6',
        backgroundColor: 'yellow',
        userInteractionEnabled: false,
        hideBezel: true,
        mode: Mode.AnnularDeterminate,
    };
    private appLoaded = false;

    constructor() {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.showLoader();
        return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    this.onEnd();
                }
            },
            (err: any) => {
                this.onEnd();
            }));
    }

    private onEnd(): void {
        this.hideLoader();
    }

    private showLoader(): void {
        try {
            this.indicator.show({
                mode: Mode.Indeterminate,
                android: {
                    cancelable: true
                }
            });
        } catch(e) {}
    }

    private hideLoader(): void {
        this.indicator.hide();
    }

}
