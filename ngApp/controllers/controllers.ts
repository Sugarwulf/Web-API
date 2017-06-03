namespace create_web_api.Controllers {

    export class HomeController {
       public message = 'Hello from the home page!';
       public actors;
       public newActor;

       public addActor() {
          this.actorService.saveActor(this.newActor).then(() => {
            this.actors.push(this.newActor);
            this.newActor = null;
          });
        }

        constructor(private actorService:create_web_api.Services.ActorService) {
            this.actors = actorService.listActors();
        }
    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }


}
