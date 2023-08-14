import { EntityApi } from "../../apis/EntityApi";
import { appStore } from "../../stores/redux-store";
import { EntitySliceActions } from "../../stores/slices/entity-slice";
import { Entity, OwnerShip } from "../../types/entity-types";

export class EntityControlUtils {
  static getEntitiesAndOwnershisByChartId = async (chartId: string) => {
    const entityOwnershipResponseData = await EntityApi.getEntityListByChartId(
      chartId
    );

    const entities: Entity[] = entityOwnershipResponseData.data.map(
      (entity) => {
        return {
          entityId: entity.Name,
          entityName: entity.Name,
          incorporationJurisdiction: entity.IncorporationJurisdiction,
          entityType: entity.EntityType,
          entityCode: entity.Code,
          chartId: entity.ChartId.toString(),
          businessType: entity.BusinessType,
          taxResidentJurisdiction: entity.TaxResidentJurisdiction,
        };
      }
    );

    const ownerships: OwnerShip[] = entityOwnershipResponseData.data.flatMap(
      (entity) => {
        return entity.EntityOwnerList.map((owner) => {
          return {
            ownershipId: entity.Name + owner.OwnerName,
            ownerId: owner.OwnerName,
            ownedId: entity.Name,
            ownershipPercentage: owner.OwnerPercentage,
            ownerName: owner.OwnerName,
            ownershipName: owner.OwnerName,
            ownedName: entity.Name,
          };
        });
      }
    );

    console.log(ownerships);

    appStore.dispatch(EntitySliceActions.setEntities(entities));
    appStore.dispatch(EntitySliceActions.setOwnerships(ownerships));
  };

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

  static updateOwnerships(updatedOwnerships: OwnerShip[], ownedEntity: Entity) {
    const ownedOwnerships = this.getOwnedOwnerships(ownedEntity);
    // Remove all the ownerships that are in ownedOwnership from the store and add the updated ownerships to the store
    appStore.dispatch(EntitySliceActions.removeOwnerships(ownedOwnerships));
    appStore.dispatch(EntitySliceActions.addOwnerships(updatedOwnerships));
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
