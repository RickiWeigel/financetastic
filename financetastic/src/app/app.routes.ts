import { Routes } from '@angular/router';
import { SummaryComponent } from './main-content/summary/summary.component';
import { AccountsComponent } from './main-content/accounts/accounts.component';
import { EntriesComponent } from './main-content/entries/entries.component';
import { StatisticsComponent } from './main-content/statistics/statistics.component';


export const routes: Routes = [
    { path: '', component: SummaryComponent },
    { path: 'accounts', component: AccountsComponent },
    { path: 'entries', component: EntriesComponent },
    { path: 'statistics', component: StatisticsComponent },
    { path: '**', redirectTo: '' } // Fallback-Route

];
