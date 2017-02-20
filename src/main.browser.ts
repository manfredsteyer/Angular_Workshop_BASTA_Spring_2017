import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

import 'style-loader!bootstrap/dist/css/bootstrap.css';

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
