import { Component} from "@angular/core"; 
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent{
  
  constructor(private _spotifyService: SpotifyService ) {
    _spotifyService.getNewReleases();
    
    
  }

}
