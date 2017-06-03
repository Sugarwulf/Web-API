import * as angular from "angular"; //Need this code so the module at the bottom can be used 

export class ActorService {
  private ActorResource;

  public listActors() {
    return this.ActorResource.query();
  }

  public saveActor(newActor) {
    return this.ActorResource.save(newActor).$promise;
  }

  constructor($resource: ng.resource.IResourceService) {
    this.ActorResource = $resource('/api/actors');
  }
}

angular.module('create-web-api').service('actorService', ActorService);
