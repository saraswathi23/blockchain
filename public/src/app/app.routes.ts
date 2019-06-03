import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlockchainViewerComponent } from './pages/blockchain-viewer/blockchain-viewer.component';

export const Approute:Routes = [
    {
        path : '',
        component : BlockchainViewerComponent
    }
];
