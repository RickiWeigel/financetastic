import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics, ScreenTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "financetastic-7571a", appId: "1:167353425360:web:1983bb46a0ca63f774add5", storageBucket: "financetastic-7571a.firebasestorage.app", apiKey: "AIzaSyAI1-fueNR6Qir81mh-ZfOzRNhY4w8PcE4", authDomain: "financetastic-7571a.firebaseapp.com", messagingSenderId: "167353425360", measurementId: "G-6H5VCPLNS9" })), provideAnalytics(() => getAnalytics()), ScreenTrackingService, provideFirestore(() => getFirestore())
  ]
}).catch(err => console.error(err));