import { appStore } from "../../stores/redux-store";
import { EntitySliceActions } from "../../stores/slices/entity-slice";
import { Entity, OwnerShip } from "../../types/entity-types";

export class EntityControlUtils {
  static getEntityNamesAndIds(
    entities: Entity[] = appStore.getState().entity.entities
  ) {
    return entities.map((entity) => {
      return {
        entityId: entity.entityId,
        entityName: entity.entityName,
      };
    });
  }

  static getEntitiesAndCount(lowerIndex: number, upperIndex: number) {
    const entities = appStore.getState().entity.entities;

    // Later on, make an API call here and store the result in the store, for now, we are just fetching the entities from the store
    return {
      entities: entities.slice(lowerIndex, upperIndex),
      count: entities.length,
    };
  }

  static addEntity(entity: Entity) {
    appStore.dispatch(EntitySliceActions.addEntity(entity));
  }

  static getOwnedOwnerships(entity: Entity) {
    const allOwnerships = appStore.getState().entity.ownerships;

    const filteredOwnerships = allOwnerships.filter(
      (ownership) => ownership.ownedId === entity.entityId
    );

    return filteredOwnerships;
  }

  static addOwnerships(ownerships: OwnerShip[]) {
    appStore.dispatch(EntitySliceActions.addOwnerships(ownerships));
  }

  static updateEntity(entity: Entity) {
    appStore.dispatch(EntitySliceActions.updateEntity(entity));
  }

  static updateOwnerships(ownerships: OwnerShip[]) {
    appStore.dispatch(EntitySliceActions.updateOwnerships(ownerships));
  }

  static getOwnerInfo(entity: Entity) {
    const allOwnerships = appStore.getState().entity.ownerships;

    const filteredOwnerships = allOwnerships.filter(
      (ownership) => ownership.ownedId === entity.entityId
    );

    const ownerInfo = filteredOwnerships.map((ownership) => {
      const owner = appStore
        .getState()
        .entity.entities.find(
          (entity) => entity.entityId === ownership.ownerId
        );
      return {
        ownerName: owner?.entityName,
        ownerType: owner?.entityType,
        ownershipPercentage: ownership.ownershipPercentage,
      };
    });

    return ownerInfo;
  }
}
